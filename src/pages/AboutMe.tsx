import React from 'react';

interface AboutMeProps {
  navigateTo: (path: string) => void;
}

export const AboutMe: React.FC<AboutMeProps> = ({ navigateTo }) => {
  return (
    <div className="animate-fade-in mx-auto max-w-4xl px-6 py-12 md:py-20">
      {/* Intro Grid */}
      <div className="grid gap-12 md:grid-cols-3">
        {/* Left Column: Heading */}
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-primary md:text-6xl leading-tight">
            My name is{' '}
            <span className="font-serif italic font-normal text-slate-800">Saurav K</span>,
            <br />
            I’m a <span className="font-bold text-slate-900">UX designer</span>.
          </h1>

          <div className="mt-8 space-y-6 text-base md:text-lg text-secondary font-medium leading-relaxed">
            <p>
              I am a <span className="text-primary font-bold">User-Centered Visual & Product Designer</span> with <span className="text-primary font-bold">5 years</span> of experience in crafting intuitive, accessible, and impactful digital experiences across both <span className="text-primary font-bold">B2B and B2C</span> platforms. My core expertise lies in <span className="text-primary font-bold">SaaS product design</span>, where I excel at simplifying complex workflows and enhancing user engagement.
            </p>
            <p>
              Currently pursuing a PG Diploma in Interaction Design (Hybrid) at IIT Bombay, (2027).
            </p>
            <p>
              I integrate <span className="text-primary font-bold">AI-Copilots</span> into my process to significantly <span className="text-primary font-bold">optimize and enhance</span> the speed and quality of design solutions, ensuring faster delivery of scalable products that meet both business and user goals.
            </p>
            <p>
              I am proficient in Figma, Lovable.dev, Figma Make, AI, vibe coding, prototyping tools, and user research, with a proven track record including projects like Tira Beauty Backend Console, JioStream Studio (Tira), and Pret-a-Manger Loyalty.
            </p>
            <p className="text-slate-800 font-bold font-serif italic text-xl mt-8">
              "I believe that the success of a project is based on good collaboration and being kind."
            </p>
          </div>
        </div>

        {/* Right Column: Experience & Info */}
        <div className="space-y-10 border-t border-slate-100 pt-8 md:border-t-0 md:pt-0">
          {/* Social Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Socials</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/in/sauravkendre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-secondary hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@sauravkendre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-secondary hover:text-primary transition-colors"
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sauravkendre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-secondary hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:sauravsunilkendre@gmail.com"
                  className="text-sm font-bold text-secondary hover:text-primary transition-colors"
                >
                  Mail
                </a>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Tools</h3>
            <ul className="mt-4 space-y-2 text-sm text-secondary font-medium">
              <li>Figma</li>
              <li>Figma Make</li>
              <li>Lovable.dev</li>
              <li>AI Copilots / Vibe Coding</li>
              <li>Prototyping & User Research</li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Education</h3>
            <div className="mt-4">
              <h4 className="text-sm font-bold text-primary">IIT Bombay</h4>
              <p className="text-xs text-secondary font-semibold mt-1">
                PG Diploma in Interaction Design (Hybrid)
              </p>
              <p className="text-xs text-slate-400 mt-0.5">2027</p>
            </div>
          </div>

          {/* Experience list */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Projects</h3>
            <ul className="mt-4 space-y-3 text-sm text-secondary font-medium">
              <li>• Tira Beauty Backend Console</li>
              <li>• JioStream Studio (Tira)</li>
              <li>• Pret-a-Manger Loyalty</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
