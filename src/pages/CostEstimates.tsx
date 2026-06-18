import React from 'react';

interface CostEstimatesProps {
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

export const CostEstimates: React.FC<CostEstimatesProps> = ({ navigateTo }) => {
  return (
    <div className="animate-fade-in mx-auto max-w-5xl px-6 py-12 md:py-20">
      <button
        onClick={() => navigateTo('/')}
        className="mb-8 flex items-center gap-2 text-sm font-bold text-secondary hover:text-primary transition-colors cursor-pointer"
      >
        ← Back to Projects
      </button>

      {/* Title block */}
      <div className="mb-10">
        <p className="text-sm font-extrabold uppercase tracking-wider text-secondary">
          Feature Updates
        </p>
        <h1 className="mt-3 text-4xl font-black text-primary md:text-5xl lg:text-6xl tracking-tight">
          Intuitive Cost Updating
        </h1>
        <p className="mt-6 max-w-3xl text-lg md:text-xl text-secondary font-medium leading-relaxed">
          An editable pricing screen for a logistics platform where rate charts run the business.
        </p>
      </div>

      {/* Hero image */}
      <div className="mb-16 overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
        <img
          src="/images/piXTO6xxF9ttNpvPptDDsk8JQU.png"
          alt="Editable Cost Estimates hero"
          className="w-full object-cover aspect-[16/9]"
        />
      </div>

      {/* Quick-facts strip */}
      <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ['Role', 'Sole Product Designer'],
          ['Stakeholders', 'VP of Product · 2 PMs · Web, Mobile & Backend Eng'],
          ['Timeline', '2-day design sprint · ~10 iterations'],
          ['Platforms', 'Web (Dispatcher) + Mobile'],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
              {label}
            </span>
            <p className="mt-2 text-sm font-bold text-primary leading-snug">{value}</p>
          </div>
        ))}
      </div>

      {/* Headline question */}
      <div className="mb-20 max-w-3xl">
        <SectionHeading eyebrow="The framing">
          What this looked like vs. what it actually was
        </SectionHeading>
        <Prose>
          At first glance, this was a feature request: let users edit the cost estimate. Once I
          started looking at the system, it was a much harder problem than that.
        </Prose>
        <div className="h-4" />
        <Prose>
          Estimates were generated automatically from rate charts that Dispatchers configured during
          onboarding. Those rate charts were the source of truth for the entire business. The minute
          we made a number on screen editable, we risked one of two things going wrong. A user could
          accidentally rewrite the pricing logic of the company. Or the UI could be locked down so
          tightly that editing was technically possible but practically useless.
        </Prose>
        <div className="mt-8 rounded-2xl border-l-4 border-primary bg-slate-50 p-6 md:p-8">
          <p className="font-serif text-xl md:text-2xl italic text-primary leading-snug">
            How do you give users meaningful control over a number without giving them control over
            the system that produced it?
          </p>
        </div>
      </div>

      {/* What was breaking */}
      <div className="mb-20 max-w-3xl">
        <SectionHeading eyebrow="The problem">What was actually breaking</SectionHeading>
        <Prose>
          Before the redesign, estimates were read-only. Any correction — a wrong weight, a missed
          discount, a one-off surcharge — kicked off a chain of Slack messages, tickets, and manual
          recalculations between Shippers and Dispatchers.
        </Prose>
        <div className="h-4" />
        <Prose>
          The worse problem was downstream. Dispatchers had started editing the {bold('rate charts')}{' '}
          themselves to push through one-off changes. They were polluting the source of truth to
          solve a single transaction, because that was the only place in the product where the edit
          could happen.
        </Prose>
        <div className="mt-6 rounded-xl bg-slate-100 p-5">
          <p className="text-base font-bold text-primary">
            The symptoms looked operational. The cause was a missing surface in the UI.
          </p>
        </div>
      </div>

      {/* Problem walkthrough video */}
      <div className="mb-20">
        <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-slate-400">
          Problem walkthrough
        </p>
        <VideoEmbed id="s38nu1TmJ3E" label="Problem walkthrough — how the read-only flow broke down" />
      </div>

      {/* Tradeoffs table */}
      <div className="mb-20">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="Constraints">Naming the tradeoffs before sketching</SectionHeading>
          <Prose>
            I wrote down the constraints first, because the tradeoffs needed to be visible to me and
            to the team.
          </Prose>
        </div>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-100">
          <table className="w-full text-left text-sm min-w-[640px]">
            <thead className="bg-slate-50 text-primary">
              <tr>
                <th className="px-5 py-3 font-bold">The system needs…</th>
                <th className="px-5 py-3 font-bold">The user needs…</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-secondary font-medium">
              <tr>
                <td className="px-5 py-4 font-bold text-primary">Rate charts to stay immutable</td>
                <td className="px-5 py-4">To override numbers when reality doesn't match the chart</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-bold text-primary">An audit trail for every change</td>
                <td className="px-5 py-4">Speed — edits in seconds, not forms</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-bold text-primary">Math consistency across slabs</td>
                <td className="px-5 py-4">A screen simple enough to read at a glance</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 max-w-3xl">
          <Prose>
            Most pricing tools I benchmarked solved one side of this and broke the other. The
            interesting design work was in the middle.
          </Prose>
        </div>
      </div>

      {/* Mental models */}
      <div className="mb-20">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="Mental models">
            Two metaphors that did most of the work
          </SectionHeading>
          <Prose>
            Before pixels, I went looking for metaphors that already lived in users' heads. Two of
            them ended up shaping almost every layout decision.
          </Prose>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 md:p-8 shadow-xs">
            <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
              Model 1
            </p>
            <h3 className="mt-2 font-serif text-2xl font-bold text-primary">Excel, for the logic</h3>
            <p className="mt-4 text-base text-secondary font-medium leading-relaxed">
              Dispatchers already think in spreadsheets — rows, columns, totals, overrides. Excel
              works because every cell has a visible reason for the number it shows.
            </p>
            <p className="mt-4 text-base text-secondary font-medium leading-relaxed">
              I borrowed that contract. Every number on screen should be traceable to a rule or an
              explicit override. No magic. No silent recalculations.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-6 md:p-8 shadow-xs">
            <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
              Model 2
            </p>
            <h3 className="mt-2 font-serif text-2xl font-bold text-primary">
              City planning, for the density
            </h3>
            <p className="mt-4 text-base text-secondary font-medium leading-relaxed">
              The estimate packed wildly different row types onto one surface. So I planned the
              table the way you'd zone a city block:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-secondary font-medium">
              <li>
                <span className="font-bold text-primary">Low-density</span> — flat fees, basic
                surcharges
              </li>
              <li>
                <span className="font-bold text-primary">Medium-density</span> — discounts with
                conditions
              </li>
              <li>
                <span className="font-bold text-primary">High-density</span> — slab pricing with
                internal structure
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <Img
            src="/images/bUV2WoPk0GlV3dWvKXm2JEQeKpM.png"
            caption="Design framework — the density system mapped to row types."
          />
        </div>

        <div className="mt-8 max-w-3xl">
          <Prose>
            This wasn't decoration. A Dispatcher scanning the estimate could feel the weight of each
            line before reading it. Simple lines looked simple. Complex lines announced their
            complexity upfront.
          </Prose>
        </div>
      </div>

      {/* Design decisions */}
      <div className="mb-20">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="Decisions">Design moves — and what I rejected</SectionHeading>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {[
            {
              title: 'A popup, not a full edit page',
              body: "A full page gave more room but broke the user's mental thread. The popup keeps the original estimate visible behind it — edit feels like an overlay on reality, not a detour.",
            },
            {
              title: 'Progressive disclosure',
              body: 'Showing every editable field by default signalled "everything is up for grabs." The default is read-only and calm; a single Edit CTA unlocks the table. Control is available, not assumed.',
            },
            {
              title: 'Draft and Final as two states',
              body: 'Stakeholders pushed for one Save button. I pushed back — real revisions are rarely one-shot. Splitting Draft and Final gave the workflow a place to pause without committing.',
            },
            {
              title: 'Helper text per row, not a legend',
              body: 'A top legend would have been cleaner but forced a context switch each time a number confused the user. Inline helper text is denser, but removes the lookup.',
            },
          ].map((d) => (
            <div
              key={d.title}
              className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6"
            >
              <h3 className="font-bold text-primary text-lg leading-snug">{d.title}</h3>
              <p className="mt-3 text-sm text-secondary font-medium leading-relaxed">{d.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Img
            src="/images/IMdVq4H3Z0BZa4jTOiBRaVHa6U0.png"
            caption="Information architecture — first pass."
          />
          <Img src="/images/rvkeAgKT2fVpIFg8KmyT1HRMT8.png" caption="IA iteration." />
          <Img
            src="/images/nfKplz7BZEooL5Eem8EAPm38Q.png"
            caption="IA iteration with real data."
          />
          <Img
            src="/images/d4fCHkn7X3TrWsq0Zk5zrmptxus.png"
            caption="IA iteration — slab handling."
          />
        </div>
      </div>

      {/* The resulting screen */}
      <div className="mb-20">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="The outcome">The resulting screen</SectionHeading>
          <Prose>
            One popup. Inline edits only on the fields that are safe to edit. Slab-based rows that
            expand into editable sub-structures without breaking the parent row's rhythm. A live
            cost summary at the bottom that updates as edits happen — the consequence of any change
            is visible before it's saved.
          </Prose>
          <div className="h-4" />
          <Prose>
            The Dispatcher still has final say on their side. The Shipper proposes, the Dispatcher
            confirms or adjusts. {bold('Asymmetric control, made visible in the layout.')}
          </Prose>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Img
            src="/images/wyi6eRE5RnePIT1fdVmmO26FLoE.png"
            caption="Final solution — popup interaction."
          />
          <Img
            src="/images/JqnhKj96USyOZNI9Ccn3yHEMIO0.png"
            caption="Final solution — slab-based pricing."
          />
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="https://hook-mix-63968580.figma.site"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-slate-800 transition-colors"
          >
            Try the interactive prototype →
          </a>
        </div>

        <div className="mt-10">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-slate-400">
            Prototype walkthrough
          </p>
          <VideoEmbed id="ajX8xarHEEY" label="Prototype walkthrough — end to end" />
        </div>
      </div>

      {/* Process notes */}
      <div className="mb-20 max-w-3xl">
        <SectionHeading eyebrow="Process">Two days, ten iterations</SectionHeading>
        <Prose>
          I built in {bold('Figma Make')} so I could layer real production data into wireframes
          early. Loading real numbers (not lorem-ipsum) exposed edge cases in the first hour that
          would have taken weeks to surface in a normal review cycle. The slab-with-discount case
          broke three layouts before the city-planning framework emerged as the fix.
        </Prose>
        <div className="h-4" />
        <Prose>
          I iterated in front of PMs and engineers rather than behind closed doors. Faster loop,
          fewer surprises at handoff.
        </Prose>
      </div>

      {/* Impact */}
      <div className="mb-20">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="Impact">What it moved</SectionHeading>
          <Prose>
            Numbers are directional, based on observed workflows after launch.
          </Prose>
        </div>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-100">
          <table className="w-full text-left text-sm min-w-[720px]">
            <thead className="bg-slate-50 text-primary">
              <tr>
                <th className="px-5 py-3 font-bold">Metric</th>
                <th className="px-5 py-3 font-bold">Result</th>
                <th className="px-5 py-3 font-bold">What design move drove it</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-secondary font-medium">
              <tr>
                <td className="px-5 py-4 font-bold text-primary">Estimate revision time</td>
                <td className="px-5 py-4 font-bold text-primary">~60–80% faster</td>
                <td className="px-5 py-4">One editing surface replaced multi-channel back-and-forth</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-bold text-primary">Dispatcher–Shipper support tickets</td>
                <td className="px-5 py-4 font-bold text-primary">~40–50% reduction</td>
                <td className="px-5 py-4">Inline transparency removed the "what changed?" question</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-bold text-primary">Manual slab calculation errors</td>
                <td className="px-5 py-4 font-bold text-primary">Near zero</td>
                <td className="px-5 py-4">The system owns the math, the user owns the inputs</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-bold text-primary">Rate-chart pollution</td>
                <td className="px-5 py-4 font-bold text-primary">Eliminated</td>
                <td className="px-5 py-4">One-offs finally had a legitimate place to live</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-bold text-primary">Cross-platform consistency</td>
                <td className="px-5 py-4 font-bold text-primary">Reused on mobile</td>
                <td className="px-5 py-4">The density framework scales without redesign</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 max-w-3xl">
          <Prose>
            The pattern is now the default for any future cost-editing surface in the product.
          </Prose>
        </div>
      </div>

      {/* Takeaways */}
      <div className="mb-20 max-w-3xl">
        <SectionHeading eyebrow="Takeaways">What I'd take into the next problem</SectionHeading>

        <ul className="space-y-6">
          {[
            ['Density is a design material', 'Row height and structure as a designed dimension, not a side effect of content, was the single most useful decision in the project.'],
            ['Transparency isn\'t a feature you bolt on', "It's the system being honest by default. Every number having a visible reason was the thing that made editing safe to allow at all."],
            ['Metaphors beat rules when the problem is unfamiliar', '"Like Excel" and "like city planning" moved the team faster than any spec section. People need a shared picture to argue against.'],
            ['Friction can be a design choice', 'Making Edit a deliberate CTA instead of an always-on affordance was friction I added on purpose — the cost of an accidental edit was higher than one extra click.'],
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

        <div className="mt-10 rounded-2xl border-l-4 border-primary bg-slate-50 p-6 md:p-8">
          <p className="font-serif text-xl md:text-2xl italic text-primary leading-snug">
            When design works, it disappears. The Dispatcher doesn't notice the city plan. They just
            find the number they were looking for.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mb-12 max-w-3xl">
        <SectionHeading eyebrow="Going deeper">Want to see the full file?</SectionHeading>
        <Prose>
          I have the full Figma file, edge-case explorations, and rejected directions if you'd like
          to dig deeper.
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
