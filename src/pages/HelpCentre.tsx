import React from 'react';

interface HelpCentreProps {
  navigateTo: (path: string) => void;
}

const SectionHeading: React.FC<{ children: React.ReactNode; eyebrow?: string }> = ({
  children,
  eyebrow,
}) => (
  <div className="mb-6">
    {eyebrow && (
      <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-2">
        {eyebrow}
      </p>
    )}
    <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary leading-tight">
      {children}
    </h2>
  </div>
);

const Prose: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-base md:text-lg text-secondary font-medium leading-relaxed">{children}</p>
);

const bold = (text: string) => <span className="font-bold text-primary">{text}</span>;

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

const VideoEmbed: React.FC<{ id: string; label: string }> = ({ id, label }) => (
  <figure className="overflow-hidden rounded-2xl border border-slate-100 bg-black">
    <div className="aspect-video w-full">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={label}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
    <figcaption className="px-4 py-3 text-xs font-semibold text-secondary border-t border-slate-100 bg-white">
      {label}
    </figcaption>
  </figure>
);

export const HelpCentre: React.FC<HelpCentreProps> = ({ navigateTo }) => {
  return (
    <div className="animate-fade-in mx-auto max-w-5xl px-6 py-12 md:py-20">
      <button
        onClick={() => navigateTo('/')}
        className="mb-8 flex items-center gap-2 text-sm font-bold text-secondary hover:text-primary transition-colors cursor-pointer"
      >
        ← Back to Projects
      </button>

      {/* Title */}
      <div className="mb-10">
        <p className="text-sm font-extrabold uppercase tracking-wider text-secondary">
          Website Design
        </p>
        <h1 className="mt-3 text-4xl font-black text-primary md:text-5xl lg:text-6xl tracking-tight">
          Help Centre Redesign
        </h1>
        <p className="mt-6 max-w-3xl text-lg md:text-xl text-secondary font-medium leading-relaxed">
          A self-serve knowledge base for a multi-product logistics platform, redesigned around how
          users actually look for things.
        </p>
      </div>

      {/* Hero image */}
      <div className="mb-16 overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
        <img
          src="/images/LI7d4N5GCHNpbVHwKlSlMmAB4.png"
          alt="Help Centre redesigned landing page"
          className="w-full object-cover aspect-[16/9]"
        />
      </div>

      {/* Quick-facts strip */}
      <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ['Role', 'Sole Product Designer · end-to-end'],
          ['Stakeholders', 'CEO · VP of Product · 2 PMs · Tech Writing'],
          ['Timeline', '~10 iterations · multi-week effort'],
          ['Platforms', 'Web · responsive across breakpoints'],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
              {label}
            </span>
            <p className="mt-2 text-sm font-bold text-primary leading-snug">{value}</p>
          </div>
        ))}
      </div>

      {/* Framing */}
      <div className="mb-20 max-w-3xl">
        <SectionHeading eyebrow="The framing">
          What this looked like vs. what it actually was
        </SectionHeading>
        <Prose>
          On paper this was a website refresh. In practice it was a {bold('wayfinding problem.')}
        </Prose>
        <div className="h-4" />
        <Prose>
          LogiNext is a logistics platform with very different user types living inside the same
          product. Dispatchers, shippers, drivers, and internal teams all spend hours in the system
          every day, and all of them sometimes need to look something up. The old Help Centre
          treated them as one audience. Articles for dispatchers sat next to articles for drivers,
          with no categorisation, no segmentation, and no fast path to the thing you actually came
          for.
        </Prose>
        <div className="h-4" />
        <Prose>
          For users who live in the product all day, that friction compounds. A 30-second lookup
          that takes 3 minutes, repeated across thousands of users, becomes a real operational
          cost.
        </Prose>
        <div className="mt-8 rounded-2xl border-l-4 border-primary bg-slate-50 p-6 md:p-8">
          <p className="font-serif text-xl md:text-2xl italic text-primary leading-snug">
            How do you build one Help Centre for multiple products and multiple audiences, without
            making any of them feel like an afterthought?
          </p>
        </div>
      </div>

      {/* Problem */}
      <div className="mb-20 max-w-3xl">
        <SectionHeading eyebrow="The problem">What was actually breaking</SectionHeading>
        <Prose>
          The old Help Centre had a few specific problems, but they all rolled up to the same
          thing: the page didn't reflect how users thought about their own work.
        </Prose>

        <ul className="mt-8 space-y-5">
          {[
            ['Flat content pile', 'No product segmentation. A dispatcher fixing a routing issue had to wade through articles about driver app installations.'],
            ['Too many steps between related articles', 'Navigation between adjacent topics took unnecessary clicks.'],
            ['Headers ate the page', 'Excessive vertical space pushed the actual content below the fold.'],
            ['Static, unloved article pages', 'Nothing about the layout made reading or scanning easier.'],
          ].map(([t, b]) => (
            <li key={t} className="flex gap-4">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <div>
                <h4 className="font-bold text-primary mb-1">{t}</h4>
                <p className="text-base text-secondary font-medium leading-relaxed">{b}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-xl bg-slate-100 p-5">
          <p className="text-base font-bold text-primary">
            None are dramatic on their own. Together they meant most users gave up on the Help
            Centre and pinged support instead — exactly what it existed to prevent.
          </p>
        </div>
      </div>

      {/* Old walkthrough */}
      <div className="mb-20">
        <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-slate-400">
          Old Help Centre walkthrough
        </p>
        <VideoEmbed id="7bXkSIbvtX8" label="The legacy Help Centre — flat, undifferentiated, slow to scan." />
      </div>

      {/* Constraint */}
      <div className="mb-20 max-w-3xl">
        <SectionHeading eyebrow="The constraint">The one rule I couldn't break</SectionHeading>
        <Prose>
          {bold('The article database and backend architecture had to stay as-is.')} I was
          redesigning the surface, not the system.
        </Prose>
        <div className="h-4" />
        <Prose>
          That sounds like a limitation, but it actually clarified the work. This was never going
          to be a content overhaul. It was a navigation and presentation problem. Every design
          decision had to earn its place by helping users find existing content faster, not by
          restructuring what that content was.
        </Prose>
      </div>

      {/* Audience-first IA */}
      <div className="mb-20">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="Information architecture">
            Start from the audience, not the content
          </SectionHeading>
          <Prose>
            The first move was rebuilding the IA around <em>who</em> is using the Help Centre, not{' '}
            <em>what</em> articles exist. I mapped the audiences and the products they use.
          </Prose>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ['LogiNext Dispatcher', 'Dispatch & operations teams'],
            ['LogiNext Shipper', 'Customers shipping through the platform'],
            ['LogiNext Driver', 'Drivers on the road'],
            ['Internal Knowledge Base', 'Employees'],
            ['Misc & Web Links', 'Tracking URLs, product links, edge cases'],
            ['AI Chatbot Slot', 'Reserved on day one for a future release'],
          ].map(([t, b]) => (
            <div key={t} className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6">
              <h3 className="font-bold text-primary leading-snug">{t}</h3>
              <p className="mt-2 text-sm text-secondary font-medium leading-relaxed">{b}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-3xl">
          <Prose>
            Sounds obvious in hindsight, but the old Help Centre never made this split explicit. By
            putting the product segmentation on the landing page itself, a user lands and
            immediately sees the part of the system they actually work in. The cognitive load of{' '}
            <em>"is this article for me?"</em> drops to near zero.
          </Prose>
        </div>

        <div className="mt-10">
          <Img
            src="/images/572tCwafeoN5IuT43RXvSTWJI6M.png"
            caption="Audience-first categorisation — segmentation exposed on the landing page itself."
          />
        </div>
      </div>

      {/* AI process */}
      <div className="mb-20 max-w-3xl">
        <SectionHeading eyebrow="Process">
          Using AI to compress the stakeholder loop
        </SectionHeading>
        <Prose>
          The part of this project I'm most proud of isn't on the final screen. It's how we got to
          the final screen.
        </Prose>
        <div className="h-4" />
        <Prose>
          A normal wireframing cycle goes: designer drafts in Figma, sends to stakeholders, waits,
          gets feedback over a few days, iterates, sends again. For a project with CEO and
          VP-of-Product visibility, that loop eats weeks.
        </Prose>
        <div className="h-4" />
        <Prose>
          Instead, I used {bold('Lovable.app')} to generate a working preliminary version of the
          landing page directly, then ran a live working session with stakeholders against that
          artefact instead of static wireframes. Edits happened in the room. Decisions happened in
          the room. {bold('Foundational approval that would normally take a week happened in 3–4 hours.')}
        </Prose>
        <div className="h-4" />
        <Prose>
          This wasn't AI as a novelty. It was AI used to remove a specific bottleneck in the design
          process: the asynchronous feedback gap. The output was a wireframe everyone had already
          agreed to, which made the high-fidelity phase dramatically faster because nothing
          fundamental was still under negotiation.
        </Prose>
      </div>

      <div className="mb-20">
        <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-slate-400">
          AI-assisted wireframing session
        </p>
        <VideoEmbed id="F1tC-cVUyRA" label="Stakeholder working session against a Lovable-built wireframe." />
      </div>

      {/* High fidelity */}
      <div className="mb-20">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="High fidelity">Figma — and the calls I made</SectionHeading>
          <Prose>
            With the wireframe locked, I moved into Figma for the visual layer. This was where the
            design system came together, and where I made the calls that would carry across every
            future Help Centre page.
          </Prose>
          <div className="mt-6">
            <a
              href="https://embed.figma.com/design/Br3yz1JTaMTluKtC5flivY/Design-Compilation?node-id=40000023-23867"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-2.5 text-sm font-bold text-primary hover:bg-slate-50 transition-colors"
            >
              Figma design compilation →
            </a>
          </div>
        </div>

        {/* Decisions */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xs">
            <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
              Decision 1
            </p>
            <h3 className="mt-2 font-serif text-2xl font-bold text-primary">
              Colour — why purple
            </h3>
            <p className="mt-4 text-sm text-secondary font-medium leading-relaxed">
              Modern and technological without being as overused as blue in logistics/SaaS. Reads
              as premium for enterprise buyers. Vibrant enough to anchor an information-dense
              interface without feeling sterile.
            </p>
            <p className="mt-3 text-sm text-secondary font-medium leading-relaxed">
              It became the unifying visual element across all five product areas — the
              segmentation could have visually fragmented the site, the shared colour ties it back
              together.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xs">
            <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
              Decision 2
            </p>
            <h3 className="mt-2 font-serif text-2xl font-bold text-primary">
              Typography — Open Sans, with a reason
            </h3>
            <p className="mt-4 text-sm text-secondary font-medium leading-relaxed">
              Open Sans for primary, Noto Sans as fallback. Practical, not aesthetic. LogiNext
              operates across multiple regions and languages. Open Sans has broad language
              coverage, an open-source licence, and renders cleanly at the small sizes a docs site
              needs.
            </p>
            <p className="mt-3 text-sm text-secondary font-medium leading-relaxed">
              A flashier display face would have looked nicer in a portfolio screenshot. It would
              have failed users reading docs in Hindi, Arabic, or Spanish.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xs">
            <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
              Decision 3
            </p>
            <h3 className="mt-2 font-serif text-2xl font-bold text-primary">
              Handoff — a real design system
            </h3>
            <p className="mt-4 text-sm text-secondary font-medium leading-relaxed">
              Formalised colour, type scale, spacing, and component specs into a Style Guide.
              Engineering got a single source of truth instead of measuring screenshots.
            </p>
            <p className="mt-3 text-sm text-secondary font-medium leading-relaxed">
              A few days upfront. Weeks saved during build.
            </p>
          </div>
        </div>

        <div className="mt-10 max-w-3xl">
          <a
            href="https://embed.figma.com/design/uCTCRURMthmODcPXDjKAv8/HelpCentre?node-id=0-1"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-slate-800 transition-colors"
          >
            Open the final Figma file →
          </a>
        </div>
      </div>

      {/* What shipped */}
      <div className="mb-20 max-w-3xl">
        <SectionHeading eyebrow="What shipped">The outcome</SectionHeading>
        <Prose>
          The redesigned Help Centre went live with the new audience-segmented landing page, the
          responsive design system across breakpoints, and the architecture in place for the AI
          chatbot to slot in during the next release.
        </Prose>
        <div className="h-4" />
        <Prose>
          QA ran as a full UAT cycle, tracked through JIRA, validating that the build matched the
          approved design and that usability held up under real article browsing patterns.
        </Prose>
        <div className="h-4" />
        <Prose>
          It's still early days, so I'm not going to fabricate impact numbers. What I can say:{' '}
          {bold("the team has stopped pointing at the Help Centre as a known weakness")}, and the
          architecture decisions made here are already being reused in adjacent product surfaces.
        </Prose>
      </div>

      <div className="mb-20">
        <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-slate-400">
          Final product walkthrough
        </p>
        <VideoEmbed id="rEGYr0GqPJw" label="The shipped Help Centre — audience-first, responsive, designed for scanning." />
      </div>

      {/* Takeaways */}
      <div className="mb-20 max-w-3xl">
        <SectionHeading eyebrow="Takeaways">What I'd take into the next problem</SectionHeading>

        <ul className="space-y-6">
          {[
            ['Audience segmentation beats content reorganisation when you can\'t touch the backend', "I couldn't restructure the article database, but I could restructure how users approach it. Most of the user-facing improvement came from that single move."],
            ['AI is most useful when it removes a process bottleneck, not when it adds a feature', 'Using Lovable for stakeholder-facing wireframes compressed a multi-week loop into hours. The design quality didn\'t come from AI. The speed of consensus did.'],
            ['Colour and font choices deserve real reasoning in B2B', "Purple wasn't a vibe. Open Sans wasn't a default. Both have specific jobs in a multilingual, enterprise, docs-heavy product, and being able to explain those jobs out loud is part of being a designer instead of a stylist."],
            ['Design systems pay for themselves at handoff', "Upfront cost of formalising tokens and components looks like overhead. At build time, it's the thing that prevents engineers from rebuilding a button six different ways."],
          ].map(([t, b]) => (
            <li key={t} className="flex gap-4">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <div>
                <h4 className="font-bold text-primary mb-1">{t}</h4>
                <p className="text-base text-secondary font-medium leading-relaxed">{b}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Team note */}
      <div className="mb-20 max-w-3xl">
        <SectionHeading eyebrow="Team">Sole designer, not solo</SectionHeading>
        <Prose>
          Two Product Managers ran functional execution. The Tech Writing team owned the content
          side and shaped the information architecture with me. The CEO and VP of Product were
          direct stakeholders, which raised the stakes on stakeholder alignment — which is why the
          synchronous AI wireframing session mattered as much as it did.
        </Prose>
      </div>

      {/* CTA */}
      <div className="mb-12 max-w-3xl">
        <SectionHeading eyebrow="Going deeper">Want to see the full file?</SectionHeading>
        <Prose>
          I have the full Figma design system, wireframe explorations, and rejected directions if
          you'd like to dig deeper.
        </Prose>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href="mailto:sauravsunilkendre@gmail.com"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-slate-800 transition-colors"
          >
            Get in touch
          </a>
          <a
            href="https://www.linkedin.com/in/sauravkendre"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-bold text-primary hover:bg-slate-50 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mt-12 text-center border-t border-slate-100 pt-16">
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
