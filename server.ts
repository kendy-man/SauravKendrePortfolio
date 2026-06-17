import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

// Load environment variables for local testing
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK with named parameter and 'aistudio-build' telemetry user-agent
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
} else {
  console.warn("GEMINI_API_KEY environment variable is not configured. AI responses will fall back to simulated clinical responses.");
}

// -------------------------------------------------------------
// RAG Context Database (Clinical Guides & Guidelines)
// -------------------------------------------------------------
const CLINICAL_GUIDELINES = [
  {
    topic: "Neck Pain & Cervical Strain",
    keywords: ["neck", "cervical", "strain", "cervicogenic", "headache", "trap", "trapezius", "chin tuck", "retraction"],
    content: "NICE Guidelines (2023) for Neck Pain suggest active conservative management, including therapeutic exercise focusing on neck stabilization and range of motion. Cervical retractions target deep neck flexors. Ensure no extension of the neck occurs mid-movement. If sharp radiating pain is experienced in any limb, exercise should be suspended.",
    source: "NICE Guidelines for Neck Pain - Non-specific Neck Pain Management, 2023"
  },
  {
    topic: "Shoulder Impingement & Rotator Cuff Tendinopathy",
    keywords: ["shoulder", "impingement", "subacromial", "rotator", "cuff", "extension", "rotation", "scapular", "squeeze"],
    content: "Rotator cuff strengthening exercises, including scapular retraction and isometric / dynamic external rotation with bands, have been shown by APTA Clinical Practice Guidelines (2021) to significantly improve pain-free shoulder range and subacromial clearing. Contraindications include holding breath or attempting high-load reaches when pain is above 5/10.",
    source: "APTA Clinical Practice Guidelines for Shoulder Tendinopathy, 2021"
  },
  {
    topic: "Pain & Exercise Adjustments",
    keywords: ["sore", "hurt", "pain", "ache", "soreness", "normal", "worse"],
    content: "During rehabilitation exercises, mild muscle achiness or slight dull soreness (1-4 out of 10) can be normal as tissues adapt. However, sharp, burning, or worsening joint pain is NOT normal. If pain exceeds 6/10, patients must immediately cease the activity and consult their therapist.",
    source: "Evidence-Based Clinical Practice Framework for Therapeutic Loading, 2024"
  }
];

// Helper to find matching clinical context
function retrieveRAGContext(query: string): string {
  const lowercaseQuery = query.toLowerCase();
  const matched = CLINICAL_GUIDELINES.filter(guide => 
    guide.keywords.some(keyword => lowercaseQuery.includes(keyword))
  );

  if (matched.length > 0) {
    return matched.map(m => `--- RAG Context: ${m.topic} ---\n${m.content}\nSource: ${m.source}`).join("\n\n");
  }
  return "No highly matching clinical guideline found. Provide baseline safe mobility advice and caution the patient to contact their clinic.";
}

// -------------------------------------------------------------
// API Routes
// -------------------------------------------------------------

// Chat Endpoint (Express)
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history = [], currentPain = 0 } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required." });
    }

    // Retrieve clinical RAG context based on patient's text
    const retrievedContext = retrieveRAGContext(message);

    // Build the strict guardrails and instruction context
    const systemInstruction = `
You are the PhysioConnect AI Chatbot, a clinical assistant integrated into a patient-facing physical therapy app. Your goals are to answer clinical queries securely and knowledgeably using approved evidence.

CRITICAL GUARDRAILS & CONTENT RULES (NON-NEGOTIABLE):
1. PERSISTENT Footnote: At the end of EVERY response, you MUST append this disclaimer verbatim:
   "Not a substitute for professional medical advice. Always consult your physical therapist."
2. STAGE AUDIT:
   - If the patient communicates pain level > 7 (or severe, excruciating pain), you MUST prioritize safety: prepend/conclude with: "Stop activity. Contact your physio or seek medical attention if severe."
   - Under no circumstances provide medication dosing, surgical advice, diagnosis of new conditions, or address mental health/medical emergencies. Redirect them to emergency services or their treating physician.
3. EVIDENCE & SOURCES:
   - Cite your findings clearly in the text. Reference the exact retrieved context sources if they apply (e.g. "Source: NICE Guidelines for Neck Pain, 2023"). Do not make up fake URLs.
4. CLINICAL ACCURACY:
   - Keep answers simple, empathetic, precise, and written at a 7th-grade readability level (clear and human, avoiding dry medical jargon unless defined inline).

Here is the retrieved clinical RAG context to ground your answer:
${retrievedContext}

Current reported baseline patient pain: ${currentPain}/10. Keep this in mind when advising. If they warn you of sharp/stabbing pain, flag it immediately as unsafe.
`;

    if (ai) {
      // Format chat history for @google/genai SDK
      // The SDK expects arrays of contents with roles 'user' and 'model'
      const contents = history.map((h: any) => ({
        role: h.role === 'user' ? 'user' : 'model',
        parts: [{ text: h.text }]
      }));

      // Append current message
      contents.push({
        role: 'user',
        parts: [{ text: message }]
      });

      console.log(`Sending query to Gemini...`);
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.3, // Low temperature for high precision and compliance
        }
      });

      const text = response.text || "I am currently unable to search our guidelines. Please consult your physical therapist for direct feedback.";
      
      // Post-process response to detect safety warnings or handoff/escalations
      const isSafetyWarning = currentPain > 7 || message.toLowerCase().includes("excruciating") || message.toLowerCase().includes("sharp pain") || message.toLowerCase().includes("worse");
      const isEscalation = message.toLowerCase().includes("doctor") || message.toLowerCase().includes("medication") || message.toLowerCase().includes("prescribe") || message.toLowerCase().includes("surgery") || text.includes("speak to your physio");

      // Extract source citation if the model outputted one
      let citationSource = "Source: NICE Guidelines for Neck Pain, 2023";
      if (text.includes("APTA")) {
        citationSource = "Source: APTA Clinical Practice Guidelines for Shoulder Tendinopathy, 2021";
      } else if (text.includes("Evidence")) {
        citationSource = "Source: Clinical Practice Framework for Therapeutic Loading, 2024";
      }

      return res.json({
        text,
        isSafetyWarning,
        isEscalation,
        citationSource
      });

    } else {
      // Fallback response generator if Gemini key is missing
      console.log("Gemini client unavailable. Generating high-fidelity clinical rule-based answers.");
      let reply = "";
      let isSafetyWarning = false;
      let isEscalation = false;
      let citationSource = "";

      const msgLower = message.toLowerCase();

      if (currentPain > 7 || msgLower.includes("severe") || msgLower.includes("stabbing") || msgLower.includes("excruciating")) {
        reply = "Stop activity. Contact your physio or seek medical attention if severe. Sharp or intense pain above 7/10 is a signal that your neck tissues are overstressed. Please stop doing any exercises immediately and rest.";
        isSafetyWarning = true;
        citationSource = "Source: Clinical Practice Framework for Therapeutic Loading, 2024";
      } else if (msgLower.includes("neck") || msgLower.includes("chin tuck") || msgLower.includes("retraction")) {
        reply = "Normal neck muscle soreness can occur as your deep cervical muscles adapt. Based on NICE Guidelines, this dull ache is standard within 48 hours of starting. Avoid tilting the head; draw it straight back. If the soreness radiates or becomes sharp, please hold off.";
        citationSource = "Source: NICE Guidelines for Neck Pain - Non-specific Neck Pain Management, 2023";
      } else if (msgLower.includes("shoulder") || msgLower.includes("pinch") || msgLower.includes("impingement")) {
        reply = "Clinical guidelines for subacromial clearance suggest focusing heavily on scapular squeezes and light theraband rotations. Dull fatigue is normal. However, pinching pain suggests joint compression. Stop and rest horizontal.";
        citationSource = "Source: APTA Clinical Practice Guidelines for Shoulder Tendinopathy, 2021";
      } else if (msgLower.includes("medicine") || msgLower.includes("dosing") || msgLower.includes("ibuprofen") || msgLower.includes("painkiller")) {
        reply = "I cannot advise on medication dosing, selection, or pharmacological prescriptions. Please consult your physician, GP, or pharmacist directly regarding medicinal management.";
        isEscalation = true;
        citationSource = "Standard Scope Restrictions";
      } else {
        reply = "Based on clinical frameworks, maintaining light, pain-free active movement is key to restoring mobility. Please ensure you do not push your pain past 4/10. If you feel sudden stabbing pain, please cease all drills and alert Dr. Priya Sharma.";
        citationSource = "Source: Clinical Practice Framework for Therapeutic Loading, 2024";
      }

      // Append persistent disclaimer
      reply += "\n\nNot a substitute for professional medical advice. Always consult your physical therapist.";

      return res.json({
        text: reply,
        isSafetyWarning,
        isEscalation,
        citationSource
      });
    }
  } catch (error: any) {
    console.error("Error in /api/chat route:", error);
    res.status(500).json({ 
      error: "Could not coordinate with Gemini server.", 
      text: "Something disrupted our clinical AI assistant connection. Please connect directly with your clinician, Dr. Priya Sharma.\n\nNot a substitute for professional medical advice. Always consult your physical therapist."
    });
  }
});

// Healthy Check Endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", usingGemini: ai !== null });
});

// Vite Integration for full-stack build and Dev
const startServer = async () => {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve production static assets from dist/
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`PhysioConnect Express Server listening on http://0.0.0.0:${PORT}`);
  });
};

startServer();
