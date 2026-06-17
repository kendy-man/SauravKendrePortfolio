import React from 'react';

interface ProjectDetailProps {
  projectId: string;
  navigateTo: (path: string) => void;
}

type Section =
  | { type: 'text'; heading?: string; subheading?: string; body: React.ReactNode }
  | {
      type: 'list';
      heading?: string;
      subheading?: string;
      intro?: React.ReactNode;
      items: { title?: string; body: React.ReactNode }[];
    }
  | {
      type: 'image';
      heading?: string;
      caption?: string;
      src: string;
      aspect?: string;
    }
  | {
      type: 'gallery';
      heading?: string;
      caption?: string;
      columns?: 1 | 2 | 3;
      images: { src: string; caption?: string }[];
    };

interface ProjectData {
  title: string;
  category: string;
  heroImage: string;
  role: string;
  platforms: string;
  stakeholders: string;
  duration: string;
  overview: React.ReactNode;
  sections: Section[];
}

const bold = (text: string) => (
  <span className="font-bold text-primary">{text}</span>
);

const PROJECTS_DATABASE: Record<string, ProjectData> = {
  'updaing-cost-estimates': {
    title: 'Intuitive Cost Updating',
    category: 'Feature Updates',
    heroImage: '/images/piXTO6xxF9ttNpvPptDDsk8JQU.png',
    role: 'Sole Product Designer',
    platforms: 'Web (Dispatcher-focused)',
    stakeholders: 'VP of Product, 2 PMs, Web + Mobile Engineers, Backend Engineer',
    duration: 'Design sprint (2 days)',
    overview: (
      <>
        Shippers on our platform request shipment quotes. These estimates are generated automatically based on {bold('rate charts')} configured by Dispatchers during onboarding or when launching new services. Originally, estimates were {bold('read-only')}. Any correction or adjustment triggered manual back-and-forth between Shippers and Dispatchers, creating delays, opacity, and frequent errors. This project introduced {bold('Editable Cost Estimates')}, enabling controlled, transparent edits without breaking the underlying rate logic. Designed an editable pricing system that cut revision time by ~70%, reduced pricing errors, and scaled across platforms without compromising rate integrity.
      </>
    ),
    sections: [
      {
        type: 'list',
        heading: 'The Problem',
        subheading: 'The existing flow was rigid and inefficient',
        items: [
          {
            title: 'Pseudo Lock',
            body: 'Shippers couldn’t correct mistakes in shipment details once an estimate was generated.',
          },
          {
            title: 'One-Off Hacks',
            body: 'Dispatchers had to tweak rate charts for one-off changes, an anti-pattern that messed up automated pricing models for other users.',
          },
        ],
      },
      {
        type: 'text',
        heading: 'Approach',
        body: 'Collaborated in a tight 2-day design sprint to map out flexible cost sheets. Re-architected the layout to allow localized inline overrides. We designed validation modals to prevent dispatchers from entering negative values or values that deviate extremely from standard ranges.',
      },
      {
        type: 'image',
        heading: 'New cost-sheet anatomy',
        src: '/images/IMdVq4H3Z0BZa4jTOiBRaVHa6U0.png',
      },
      {
        type: 'image',
        src: '/images/rvkeAgKT2fVpIFg8KmyT1HRMT8.png',
      },
      {
        type: 'text',
        heading: 'Design Process',
        body: 'Mapped user flows for both Dispatchers and Shippers. Created interactive Figma prototypes, tested them with 5 major dispatch partners, resolved edge cases regarding currency conversions, and handed over high-fidelity screens and tokens to engineering.',
      },
      {
        type: 'gallery',
        heading: 'Flows & Validations',
        columns: 2,
        images: [
          { src: '/images/nfKplz7BZEooL5Eem8EAPm38Q.png' },
          { src: '/images/d4fCHkn7X3TrWsq0Zk5zrmptxus.png' },
          { src: '/images/wyi6eRE5RnePIT1fdVmmO26FLoE.png' },
          { src: '/images/JqnhKj96USyOZNI9Ccn3yHEMIO0.png' },
        ],
      },
      {
        type: 'image',
        heading: 'Final handoff',
        src: '/images/bUV2WoPk0GlV3dWvKXm2JEQeKpM.png',
      },
    ],
  },

  'helpcentre-website-design': {
    title: 'Help Centre',
    category: 'Website Design',
    heroImage: '/images/LI7d4N5GCHNpbVHwKlSlMmAB4.png',
    role: 'Lead UX UI Designer',
    platforms: 'Web Desktop & Mobile',
    stakeholders: 'Documentation Team, PM, Front-end Engineers',
    duration: '1 week',
    overview: (
      <>
        The Help Center is the single, comprehensive knowledge base for all features and process flows within our SaaS logistics platform. Our primary goal is to provide an {bold('exceptional user experience')} by ensuring users can find the information they need with {bold('minimum friction and fewer steps')}. This focus on efficiency is critical, as detailed, self-serve information helps our users — who spend significant hours using the system — quickly resolve issues and optimize their work.
      </>
    ),
    sections: [
      {
        type: 'text',
        heading: 'Approach',
        body: 'The redesign was specifically focused on restructuring the content presentation on the landing page to enhance discoverability and reduce friction, all while maintaining the integrity of the existing backend and article database architecture.',
      },
      {
        type: 'text',
        heading: 'Design Process',
        body: 'The new design involved extensive iteration (approximately 10 design variants) and rigorous testing to optimize the user flow. Initial AI-driven wireframes were taken through to Figma high-fidelity designs and dev handover. To deliver a refined and intuitive experience that ensures users quickly locate the necessary information, I used AI extensively — especially Figma Make and Lovable.app.',
      },
      {
        type: 'list',
        heading: 'Issues with the Previous Design',
        intro: 'The recent redesign was essential to overcome several drawbacks of the legacy documentation system that hindered user efficiency and discoverability.',
        items: [
          {
            title: 'Cluttered and Unstructured',
            body: 'The previous design lacked a clear content hierarchy, leading to a disorganized user experience.',
          },
          {
            title: 'Poor Discoverability',
            body: 'Users faced a complicated and unintuitive experience, making it difficult to find required information quickly.',
          },
          {
            title: 'Aesthetic and Usability',
            body: 'The overall design was not appealing, and article pages were described as "boring." Excessive use of digital real estate, particularly in headings, reduced space for content.',
          },
        ],
      },
      {
        type: 'image',
        heading: 'Final Design',
        caption: 'Clean, search-first interface with categories laid out in clear cards. Typography optimized for readability with appropriate spacing and high contrast.',
        src: '/images/572tCwafeoN5IuT43RXvSTWJI6M.png',
      },
    ],
  },

  'jiostream-studio': {
    title: 'JioStream Studio',
    category: 'Product Design',
    heroImage: '/images/3ILZYJMSYhjgULiyFnwQZ3pzCs.png',
    role: 'Product Designer',
    platforms: 'B2B Video Commerce Portal',
    stakeholders: 'VP of Jio Commerce, 2 Tech Leads, Product Team',
    duration: '3 weeks',
    overview: (
      <>
        JioStream is a no-code B2B video commerce solution designed for businesses. It enables brands to seamlessly integrate {bold('interactive shoppable videos')} into their apps or websites without any coding. This product enhances product discoverability metrics, facilitates user interactions, and improves brand engagement metrics.
      </>
    ),
    sections: [
      {
        type: 'text',
        heading: 'How it started?',
        body: (
          <>
            At first users uploaded videos, then they had to create a playlist in order to integrate the main product. Earlier the person creating the playlist had to upload videos based on names and tags — {bold('there was no preview')}. When they started creating auto-playlists, {bold('there was no way to rearrange the videos')}. There was {bold('no visualisation')} for how the playlist would look on the final website or app. Small gaps amounted to big UX journey gaps.
          </>
        ),
      },
      {
        type: 'text',
        body: 'To confirm my hypothesis, I contacted some of our clients (admins handling the accounts) to check what issues they were facing and verified that my hypothesis overlapped with their pain points. Turned out the hypothesis was right.',
      },
      {
        type: 'list',
        heading: 'Pain Points',
        items: [
          { body: 'Creating a playlist was a painful task.' },
          {
            body: 'There was no control over auto-generated playlists (re-arranging videos, branding, etc.).',
          },
          {
            body: 'New users of the console had to integrate code to check how a particular layout would look, as there was no visualisation. It consumed a lot of time and effort.',
          },
        ],
      },
      {
        type: 'image',
        heading: 'Playlist Builder — After Redesign',
        src: '/images/ZDGP3CH6GHPrzFDKwNPDC4YBmY.png',
      },
      {
        type: 'gallery',
        heading: 'Solving for Playlist',
        caption: 'Drag-and-drop playlist builder with instant preview cards, tags, and associated product metadata.',
        columns: 2,
        images: [
          { src: '/images/8Ds5yYZgqlTHNo0aX8DXVEnEI.png', caption: 'Before re-design' },
          { src: '/images/YwmWEOYCVGJ70S1TTCgHQxekuEI.png', caption: 'After re-design' },
          { src: '/images/JDcIsNHjWzlDEGj6xNtxar7Pw7g.png' },
          { src: '/images/sBJanOwcJmlxrh2reIsY8Brsj1k.png' },
        ],
      },
      {
        type: 'gallery',
        heading: 'Solving for Visualisation',
        caption: 'Live website/app mockup viewer in the side drawer — toggle layouts (carousel, grid, bubble) and immediately visualise how it renders before deploying the snippet.',
        columns: 2,
        images: [
          { src: '/images/paMLxFFUjcRbqx0fQYSwhw2To0.png' },
          { src: '/images/Y6b6RsVLzXYIssVzgkF5Uwfaqk.png' },
        ],
      },
      {
        type: 'image',
        src: '/images/MiHkhlPUwyruUt7ziuo4VFLvQ.png',
      },
      {
        type: 'image',
        heading: 'Conclusion',
        caption: 'A richer, more visual console that lets admins ship without writing or testing any code.',
        src: '/images/7ZpdVYVohYLH0DWH9YVySMVy0.png',
      },
    ],
  },

  'pret-a-manger': {
    title: 'Pret a Manger',
    category: 'Product Design',
    heroImage: '/images/MVsYDkRnVG5SNj9S1iW8VK2S5Tw.png',
    role: 'UI/UX Design Team Member',
    platforms: 'Mobile App (iOS & Android)',
    stakeholders: 'Pret India Business Team, Jio Retail, Product Team',
    duration: 'Ongoing Collaboration',
    overview: (
      <>
        Pret A Manger, a prominent coffee chain operating in the UK, France, and the US, offered users the ability to view the menu and make payments through their app, with transactions converting into loyalty points. At Jio, we engaged in discussions with Pret to {bold('extend and enhance their loyalty program')} as part of their expansion into the Indian market, where they partnered with us to grow their presence.
      </>
    ),
    sections: [
      {
        type: 'text',
        heading: 'Approach',
        body: 'Initially, during our interactions, we were introduced to the culture and methodology employed in the Pret loyalty app. Our design team (myself, Anjan, and Sanskruti) carried out preliminary research and set benchmarks to evaluate how we could roll out the Pret Loyalty program in India.',
      },
      {
        type: 'image',
        heading: 'Pret a Manger UK',
        caption: "App snippets from Pret UK — limited to menu viewing, with no in-app ordering. The menu restricts users to specific categories rather than a universal discovery experience.",
        src: '/images/WUHnvqI7YS5J9yWuVXRuMii2Dso.png',
      },
      {
        type: 'text',
        heading: 'Initial Research and Benchmarking',
        body: "We held the belief that a basic menu and payment system won't suffice in this scenario. Given that we already have a highly efficient and resilient UPI system in India, shifting to app-based payment is a challenge — we felt obligated to offer something extra. This led us to study Indian apps that incorporate loyalty programs, such as Domino's, McD, Starbucks, and Third Wave Coffee.",
      },
      {
        type: 'image',
        src: '/images/mr7sc9mEYdt04lbtY5nRymU0.png',
      },
      {
        type: 'text',
        heading: 'Initial Ideations and Proposals',
        body: "We began with initial ideation — outlining project approach, defining potential deliverables, and identifying supporting evidence and theoretical frameworks. Collaborative brainstorming established a strategic direction aligning our goals with Pret's business objectives.",
      },
      {
        type: 'text',
        heading: 'Initial Findings',
        body: "Competitors like Domino's, Starbucks, and Third Wave Coffee, alongside indirect players such as Zomato and Swiggy, all offered robust order-placement experiences with seamless customization and well-established delivery infrastructure. Pret needed to align with these standards. Through structured proposals and market-potential data, we convinced stakeholders to embrace expanding the app's functionality beyond menu viewing.",
      },
      {
        type: 'gallery',
        heading: 'Finalised Screens',
        columns: 2,
        images: [
          { src: '/images/6CJorlTU8HTlWCp3tUrckGRnYQ.png' },
          { src: '/images/xxGGHaAGf1ACsfVoXur9kSRRcc.png' },
          { src: '/images/hXYfACmo3gIs2xwazf6zDQ2iyY.png' },
          { src: '/images/4iQ7aefMaKUpzY1Gked5kway30.png' },
        ],
      },
      {
        type: 'list',
        heading: 'Design Challenges Faced',
        subheading: 'Customization Handling',
        items: [
          {
            title: 'Benchmarking Data',
            body: "Conducted benchmarking for Domino's, Starbucks, Third Wave Coffee, Zomato, and Swiggy to understand customization handling.",
          },
          {
            title: 'Challenges',
            body: 'Observed that parts of the UX were compromised, especially with repetitive customizations — key elements hidden inside CTAs or displayed in fonts/layouts that were not user-friendly.',
          },
          {
            title: 'Solutions',
            body: 'Maintained consistent layout for customization options with sufficient space and legible font sizes. Implemented a prominent, sticky CTA (confirm button) immediately upon any changes being made.',
          },
        ],
      },
      {
        type: 'gallery',
        columns: 2,
        images: [
          { src: '/images/4qo0f0Uc16tOpx4CVpET4OmhRBs.png' },
          { src: '/images/6Or616LP1ZO4j1Kie2iGzSGWl0.png' },
          { src: '/images/I3m0LC85wWncdszDNiAhJKvdu0.png' },
          { src: '/images/tyzacxX0SVvKcYCovAvMQstBE.png' },
        ],
      },
      {
        type: 'image',
        heading: 'Full Flow',
        src: '/images/pGovxuYeOBLMwPjNhTDzhkleVc.png',
      },
      {
        type: 'text',
        body: 'This project is currently a work in progress. While the detailed screens for the loyalty program are yet to be developed, we have already mapped out the overall user flow. The business team is actively defining deliverables and crafting user stories. Once finalized, we will move forward with designing the specific interfaces, ensuring the visual experience aligns with both business strategy and user expectations.',
      },
    ],
  },

  'pret-loyalty': {
    title: 'Pret Loyalty Program Research',
    category: 'User Research',
    heroImage: '/images/WmlDELhLQpCrF5NSFbxFQu8p8.png',
    role: 'UX Researcher',
    platforms: 'Mobile App Research',
    stakeholders: 'Retail Strategists, Jio Loyalty Team',
    duration: '2 weeks',
    overview: (
      <>
        Pret A Manger partnered with Jio to grow their presence in India. This research project conducted in-depth competitor and secondary analysis to construct a robust loyalty structure tailored to the expectations of Indian consumers.
      </>
    ),
    sections: [
      {
        type: 'text',
        heading: 'Approach',
        body: 'My team and I began by conducting user research for the Pret Loyalty program, starting with a competitor analysis that primarily involved secondary research. From there, we initiated discussions and brainstorming sessions regarding the loyalty program, meticulously documenting all ideas and evaluating them individually. We also created an initial mood board to capture the visual and conceptual direction.',
      },
      {
        type: 'text',
        heading: 'Competitor Analysis',
        body: "We conducted a competitor analysis that included brands like Domino's, McDonald's, Pizza Hut, Burger King, KFC, Starbucks, and Third Wave Coffee. Following this, we performed an in-depth loyalty program analysis for Nike, Domino's, Starbucks, Pret UK, and Third Wave Coffee to understand different approaches and features that could inform our strategy.",
      },
      {
        type: 'gallery',
        columns: 2,
        images: [
          { src: '/images/tv0bP2PMgVqNEVtpjsJIftlpQE4.png', caption: 'Starbucks (Direct)' },
          { src: '/images/DRqiUihi0orXTpO86Hnl2sneU.png', caption: 'Pret UK (Direct)' },
          { src: '/images/gAMISlSAZUmzEp5ZdYFyRiPVi3Q.png', caption: 'Third Wave Coffee (Direct)' },
          { src: '/images/DlBrdcFAcADLD5mDAixLFLis5I.png', caption: 'Nike — Membership (Indirect)' },
        ],
      },
      {
        type: 'text',
        heading: 'Initial Research and Benchmarking',
        body: "We recognized that a basic menu and payment system would not be sufficient in this context. With India's highly efficient UPI system already in place, transitioning users to app-based payment presented a unique challenge — it was essential to offer additional value. We focused on Indian apps with integrated loyalty programs to understand how best to enhance Pret's offering.",
      },
      {
        type: 'image',
        heading: 'Mood Board',
        caption: "Snippets gathered to develop a color palette aligned with Pret's brand identity while appealing to the local market.",
        src: '/images/HIp7lDd3dMpVGRKvNNmEXW7eicg.png',
      },
      {
        type: 'list',
        heading: 'User Pain-Points for Pret Loyalty',
        subheading: 'Awareness Stage',
        items: [
          { body: 'Difficulty in understanding the value proposition of the loyalty program.' },
          { body: 'Lack of clear communication about how the loyalty program benefits them compared to competitors.' },
          { body: 'Limited visibility of the loyalty program during initial brand exposure.' },
        ],
      },
      {
        type: 'list',
        subheading: 'Consideration Stage',
        items: [
          { body: 'Uncertainty about how to sign up for the loyalty program or the value they would get from joining.' },
          { body: 'Confusion regarding the terms and conditions of earning and redeeming points.' },
        ],
      },
      {
        type: 'gallery',
        heading: 'Research Artifacts',
        columns: 2,
        images: [
          { src: '/images/YXiEC4UWW8KiE3eAgKVKH8ih2bc.png' },
          { src: '/images/YlRsdtNdSDxCD613e3f0bLrbc.png' },
          { src: '/images/m3rEaERDE8M5z741Evj9GjWc.png' },
          { src: '/images/L2yiU5YtMaCGJq1FUHNlv8OnQ.png' },
          { src: '/images/Vtwl5ZaQH3aCZiPtFjjXmPBQwI.png' },
          { src: '/images/bA3OfMV8IcNupGu7oQqX6yP3P3s.png' },
        ],
      },
      {
        type: 'text',
        heading: 'Findings',
        body: 'Confusion over points conversion rates, lack of immediate reward gratification, and tedious sign-up flows. Proposed simplified point conversions (e.g., 1 Rupee = 1 Point) and instant rewards for the first purchase to drive conversion-rate optimization.',
      },
      {
        type: 'gallery',
        columns: 2,
        images: [
          { src: '/images/6Or616LP1ZO4j1Kie2iGzSGWl0.png' },
          { src: '/images/6CJorlTU8HTlWCp3tUrckGRnYQ.png' },
          { src: '/images/4iQ7aefMaKUpzY1Gked5kway30.png' },
          { src: '/images/4qo0f0Uc16tOpx4CVpET4OmhRBs.png' },
          { src: '/images/8lyH1j4WF9gEZiNuFDYv3BnmI0.png' },
          { src: '/images/I3m0LC85wWncdszDNiAhJKvdu0.png' },
        ],
      },
    ],
  },

  visualdesign: {
    title: 'Visual Design Portfolio',
    category: 'Visual Design',
    heroImage: '/images/FXRh22Fgw9xnyfnAj7vkffBZP1w.png',
    role: 'Lead Visual Designer',
    platforms: 'Mobile, Web, & Print',
    stakeholders: 'Various Clients',
    duration: 'Ongoing',
    overview:
      "A collection of visual design snapshots showcasing UI experiments, branding guidelines, social media assets, and vector illustrations. Focuses on minimal layouts, strong grid systems, and high typographic precision.",
    sections: [
      {
        type: 'gallery',
        columns: 2,
        images: [
          { src: '/images/MJIWsffd9wAHm4oFQ8e6mam0PQ.png' },
          { src: '/images/W0JjstUXgGS0h211bv08DieAuPo.png' },
          { src: '/images/zhRAju2wk0xP7hpABXQUv4xJlCc.png' },
          { src: '/images/AaKm915mVaarVxJwuifnHFvVU.png' },
          { src: '/images/evX6GNFMYNh9PyPTp9mP7KNEXSw.jpg' },
        ],
      },
    ],
  },
};

const SectionHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">{children}</h2>
);

const SubHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-3">{children}</h3>
);

const Prose: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-base md:text-lg text-secondary font-medium leading-relaxed">{children}</p>
);

const Img: React.FC<{ src: string; caption?: string }> = ({ src, caption }) => (
  <figure className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50">
    <img
      src={src}
      alt={caption ?? ''}
      loading="lazy"
      className="w-full object-contain max-h-[800px]"
    />
    {caption && (
      <figcaption className="px-4 py-3 text-xs font-semibold text-secondary border-t border-slate-100 bg-white">
        {caption}
      </figcaption>
    )}
  </figure>
);

const renderSection = (s: Section, idx: number) => {
  switch (s.type) {
    case 'text':
      return (
        <div key={idx} className="max-w-3xl">
          {s.heading && <SectionHeading>{s.heading}</SectionHeading>}
          {s.subheading && <SubHeading>{s.subheading}</SubHeading>}
          <Prose>{s.body}</Prose>
        </div>
      );
    case 'list':
      return (
        <div key={idx} className="max-w-3xl">
          {s.heading && <SectionHeading>{s.heading}</SectionHeading>}
          {s.subheading && <SubHeading>{s.subheading}</SubHeading>}
          {s.intro && <div className="mb-6"><Prose>{s.intro}</Prose></div>}
          <ul className="space-y-5">
            {s.items.map((it, i) => (
              <li key={i} className="flex gap-4">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <div>
                  {it.title && <h4 className="font-bold text-primary mb-1">{it.title}</h4>}
                  <div className="text-base text-secondary font-medium leading-relaxed">
                    {it.body}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    case 'image':
      return (
        <div key={idx}>
          {s.heading && <SectionHeading>{s.heading}</SectionHeading>}
          <Img src={s.src} caption={s.caption} />
        </div>
      );
    case 'gallery': {
      const cols = s.columns ?? 2;
      const grid =
        cols === 1
          ? 'grid-cols-1'
          : cols === 3
          ? 'sm:grid-cols-2 lg:grid-cols-3'
          : 'sm:grid-cols-2';
      return (
        <div key={idx}>
          {s.heading && <SectionHeading>{s.heading}</SectionHeading>}
          {s.caption && (
            <p className="mb-6 max-w-3xl text-base text-secondary font-medium leading-relaxed">
              {s.caption}
            </p>
          )}
          <div className={`grid gap-6 ${grid}`}>
            {s.images.map((im, i) => (
              <Img key={i} src={im.src} caption={im.caption} />
            ))}
          </div>
        </div>
      );
    }
  }
};

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId, navigateTo }) => {
  const project = PROJECTS_DATABASE[projectId];

  if (!project) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h1 className="text-3xl font-bold text-primary">Project Not Found</h1>
        <p className="mt-4 text-secondary">The requested project page could not be located.</p>
        <button
          onClick={() => navigateTo('/')}
          className="mt-8 rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white hover:bg-opacity-90"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in mx-auto max-w-5xl px-6 py-12 md:py-20">
      <button
        onClick={() => navigateTo('/')}
        className="mb-8 flex items-center gap-2 text-sm font-bold text-secondary hover:text-primary transition-colors cursor-pointer"
      >
        ← Back to Projects
      </button>

      <div className="mb-12">
        <p className="text-sm font-extrabold uppercase tracking-wider text-secondary">
          {project.category}
        </p>
        <h1 className="mt-3 text-4xl font-black text-primary md:text-5xl lg:text-6xl tracking-tight">
          {project.title}
        </h1>
      </div>

      <div className="mb-16 overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full object-cover aspect-[16/9]"
        />
      </div>

      <div className="grid gap-12 md:grid-cols-3 mb-16 pb-16 border-b border-slate-100">
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold text-primary mb-4 font-serif">Overview</h2>
          <Prose>{project.overview}</Prose>
        </div>

        <div className="space-y-6 text-sm border-t border-slate-100 pt-8 md:border-t-0 md:pt-0">
          {[
            ['Role', project.role],
            ['Platforms', project.platforms],
            ['Stakeholders', project.stakeholders],
            ['Duration', project.duration],
          ].map(([label, value]) => (
            <div key={label}>
              <span className="font-bold text-slate-400 block uppercase text-xs tracking-wider">
                {label}
              </span>
              <span className="font-bold text-primary block mt-1">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-16 mb-24">
        {project.sections.map((s, idx) => renderSection(s, idx))}
      </div>

      <div className="mt-20 text-center border-t border-slate-100 pt-16">
        <button
          onClick={() => navigateTo('/')}
          className="rounded-full bg-primary px-8 py-3 text-sm font-bold text-white hover:bg-slate-800 transition-colors cursor-pointer"
        >
          Back to Projects
        </button>
      </div>
    </div>
  );
};
