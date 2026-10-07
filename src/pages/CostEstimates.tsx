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
          ['Timeline', '2 sprints (~4 weeks) · 10+ iterations'],
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

      {/* User interviews */}
      <div className="mb-20">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="User interviews">Talking to the people the ticket volume hid</SectionHeading>
          <Prose>
            The first week of Sprint 1 was for listening. I set up calls with {bold('three Dispatchers')}{' '}
            and {bold('two Shipper ops managers')} across our US, Singapore, and Middle East accounts.
            Small sample, sharp signal. I wasn't testing a design. I was trying to hear where the
            read-only estimate hurt in their day.
          </Prose>
          <div className="h-4" />
          <Prose>
            Each session had three questions. {bold('Walk me through the last time an estimate was wrong.')}{' '}
            What did you do to fix it? What did you wish had been there instead? I took notes,
            recorded with permission, and stayed away from leading follow-ups. The themes clustered
            fast.
          </Prose>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {[
            {
              persona: 'Dispatcher · Dallas, TX · 8 yrs ops',
              quote:
                '"I know the rate chart is wrong for this one client. I edit the chart, run the estimate, then remember to edit it back. Sometimes I forget."',
              insight: 'Rate-chart pollution is a symptom of a missing override surface.',
            },
            {
              persona: 'Shipper ops · Chicago',
              quote:
                '"The number is off by three thousand. I don\'t know if it\'s the weight, the slab, or a discount that didn\'t apply. I just message them and wait."',
              insight: 'Users can\'t reason about a number they can\'t see the math behind.',
            },
            {
              persona: 'Dispatcher · Dubai · new hire',
              quote:
                '"I don\'t touch the rate charts. I raise a ticket. My manager gets annoyed at how long it takes."',
              insight: 'Fear of breaking pricing pushes edits into Slack and email.',
            },
            {
              persona: 'Shipper ops · Singapore',
              quote:
                '"When we finally agree on the correction, I paste it in an email so I have a paper trail. That\'s the audit log."',
              insight: 'The absence of a system audit trail forces users to invent one.',
            },
          ].map((q, i) => (
            <div key={`${q.persona}-${i}`} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xs">
              <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
                {q.persona}
              </p>
              <p className="mt-3 font-serif text-lg italic text-primary leading-snug">
                {q.quote}
              </p>
              <div className="mt-4 flex items-start gap-2 border-t border-slate-100 pt-4">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <p className="text-sm font-bold text-primary leading-snug">{q.insight}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-3xl">
          <Prose>
            Five conversations produced four insights I hadn't come in with. The most important one:
            the fix wasn't "make the estimate editable." It was to {bold('build a legitimate place for a correction to live,')}{' '}
            with the math, the audit trail, and the two-party handshake all in one surface.
          </Prose>
        </div>
      </div>

      {/* Personas */}
      <div className="mb-20">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="Personas">Two people on either side of the same number</SectionHeading>
          <Prose>
            I don't build personas as posters. For me they're compression. Five interviews plus
            product analytics folded into two archetypes I could design against without checking
            notes.
          </Prose>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            {
              name: 'Marcus Reyes',
              role: 'Dispatcher · Dallas, TX',
              context: 'Owns pricing logic. 40+ Shipper accounts. Under pressure to move fast without touching the rate chart.',
              goals: [
                'Correct a wrong estimate in under a minute',
                'Never accidentally rewrite pricing for other Shippers',
                'Show his manager who changed what, when',
              ],
              frustrations: [
                'Rate charts are the only place to edit, so one-offs pollute them',
                'No audit trail means he becomes the audit trail',
                'Slab math done manually creates arithmetic errors under time pressure',
              ],
              success: 'Edit, then Draft, then Send. Rate chart untouched. Log entry auto-created.',
            },
            {
              name: 'Wei Ling Tan',
              role: 'Shipper Ops Manager · Singapore',
              context: 'Books 20 to 60 shipments a week. Doesn\'t see the rate chart. Sees the number.',
              goals: [
                'Understand why an estimate is what it is, without a call',
                'Propose a correction with evidence, not a paragraph',
                'Have a paper trail for finance without inventing one',
              ],
              frustrations: [
                'Estimates are opaque, with no visible math',
                'Corrections happen over Slack and email, not in the product',
                'No sense of what\'s a firm price vs. a working draft',
              ],
              success: 'Sees the breakdown. Proposes a change inline. Dispatcher confirms.',
            },
          ].map((p) => (
            <div key={p.name} className="rounded-2xl border border-slate-100 bg-white p-6 md:p-8 shadow-xs">
              <div className="flex items-baseline gap-3">
                <h3 className="font-serif text-2xl font-bold text-primary">{p.name}</h3>
                <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
                  {p.role}
                </span>
              </div>
              <p className="mt-3 text-sm text-secondary font-medium leading-relaxed">{p.context}</p>

              <div className="mt-6">
                <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
                  Goals
                </p>
                <ul className="mt-2 space-y-1.5">
                  {p.goals.map((g) => (
                    <li key={g} className="flex gap-2 text-sm text-secondary font-medium">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5">
                <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
                  Frustrations
                </p>
                <ul className="mt-2 space-y-1.5">
                  {p.frustrations.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-secondary font-medium">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
                  What "success" looks like
                </p>
                <p className="mt-2 text-sm font-bold text-primary leading-snug">{p.success}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What was breaking */}
      <div className="mb-20 max-w-3xl">
        <SectionHeading eyebrow="The problem">What was actually breaking</SectionHeading>
        <Prose>
          Before the redesign, estimates were read-only. Any correction, whether it was a wrong
          weight, a missed discount, or a one-off surcharge, kicked off a chain of Slack messages,
          tickets, and manual recalculations between Shippers and Dispatchers.
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
        <VideoEmbed id="s38nu1TmJ3E" label="Problem walkthrough: how the read-only flow broke down" />
      </div>

      {/* Competitor research */}
      <div className="mb-20">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="Competitor research">Where other pricing tools fell short</SectionHeading>
          <Prose>
            I audited six adjacent products, three in freight and three outside of it, to see how
            each handled the {bold('editable-number-with-consequences')} problem. I wasn't looking
            for inspiration. I was looking for the specific point at which each of them broke.
          </Prose>
        </div>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-100">
          <table className="w-full text-left text-sm min-w-[780px]">
            <thead className="bg-slate-50 text-primary">
              <tr>
                <th className="px-5 py-3 font-bold">Product</th>
                <th className="px-5 py-3 font-bold">Inline edit</th>
                <th className="px-5 py-3 font-bold">Math transparency</th>
                <th className="px-5 py-3 font-bold">Audit trail</th>
                <th className="px-5 py-3 font-bold">Where it broke</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-secondary font-medium">
              {[
                ['Uber Freight', '✕', '◐', '✕', 'Estimates fixed. Corrections happen offline.'],
                ['Convoy (legacy)', '◐', '✕', '◐', 'Edit exists, but hidden inside a form modal three clicks deep.'],
                ['Flexport', '✕', '✓', '✓', 'Beautiful breakdown, but read-only. Users still email for edits.'],
                ['Shipwell', '✓', '✕', '◐', 'Everything editable, including things that shouldn\'t be. Rate-chart drift.'],
                ['Stripe Billing', '✓', '✓', '✓', 'Excellent, but built for one-side ownership. No two-party handshake.'],
                ['Excel / Sheets', '✓', '✓', '◐', 'The mental model users already have. Zero guardrails.'],
              ].map((row) => (
                <tr key={row[0]}>
                  <td className="px-5 py-4 font-bold text-primary">{row[0]}</td>
                  <td className="px-5 py-4 font-bold">{row[1]}</td>
                  <td className="px-5 py-4 font-bold">{row[2]}</td>
                  <td className="px-5 py-4 font-bold">{row[3]}</td>
                  <td className="px-5 py-4">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 max-w-3xl">
          <Prose>
            Nothing in freight combined {bold('inline edit + visible math + audit trail + two-party review.')}{' '}
            Stripe Billing came closest, but Stripe is built for a single owner of the price.
            Freight has two. That gap became the design brief.
          </Prose>
        </div>
      </div>

      {/* User journey flows */}
      <div className="mb-20">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="User journey">Before and after, the same correction</SectionHeading>
          <Prose>
            I mapped the correction journey twice. Once as it existed, once as I wanted it to feel.
            Same user, same problem, different amount of friction between them and the fix.
          </Prose>
        </div>

        <div className="mt-8 space-y-6">
          <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6 md:p-8">
            <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
              Before: 6 steps, 3 people, 2 tools
            </p>
            <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-stretch md:gap-2 overflow-x-auto">
              {[
                { step: 'Estimate generated', tool: 'Web app', mood: '😐' },
                { step: 'Shipper spots error', tool: 'Web app', mood: '😕' },
                { step: 'Slack to Dispatcher', tool: 'Slack', mood: '😩' },
                { step: 'Dispatcher edits rate chart', tool: 'Web app', mood: '😬' },
                { step: 'Re-runs estimate', tool: 'Web app', mood: '😑' },
                { step: 'Emails PDF confirmation', tool: 'Email', mood: '😮‍💨' },
              ].map((s, i) => (
                <div
                  key={i}
                  className="flex-1 min-w-[140px] rounded-xl border border-slate-200 bg-white p-4"
                >
                  <p className="text-xs font-extrabold text-slate-400">Step {i + 1}</p>
                  <p className="mt-1 text-sm font-bold text-primary leading-snug">{s.step}</p>
                  <p className="mt-2 text-xs text-secondary font-medium">{s.tool}</p>
                  <p className="mt-2 text-lg">{s.mood}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm font-bold text-primary">
              Time to resolution: {' '}
              <span className="text-secondary font-medium">30–90 minutes. Rate chart polluted.</span>
            </p>
          </div>

          <div className="rounded-2xl border border-primary/20 bg-white p-6 md:p-8 shadow-xs">
            <p className="text-xs font-extrabold uppercase tracking-widest text-primary">
              After: 3 steps, 2 people, 1 surface
            </p>
            <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-stretch md:gap-2 overflow-x-auto">
              {[
                { step: 'Shipper edits inline', tool: 'Estimate popup', mood: '🙂' },
                { step: 'Dispatcher reviews & confirms', tool: 'Estimate popup', mood: '😊' },
                { step: 'Audit log auto-written', tool: 'System', mood: '😌' },
              ].map((s, i) => (
                <div
                  key={i}
                  className="flex-1 min-w-[140px] rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="text-xs font-extrabold text-slate-400">Step {i + 1}</p>
                  <p className="mt-1 text-sm font-bold text-primary leading-snug">{s.step}</p>
                  <p className="mt-2 text-xs text-secondary font-medium">{s.tool}</p>
                  <p className="mt-2 text-lg">{s.mood}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm font-bold text-primary">
              Time to resolution:{' '}
              <span className="text-secondary font-medium">Under 3 minutes. Rate chart untouched.</span>
            </p>
          </div>
        </div>

        <div className="mt-6 max-w-3xl">
          <Prose>
            Cutting six steps to three wasn't the win. Cutting {bold('three tools to one surface')}{' '}
            was. Every tool switch is where context (and trust) leaks out of the workflow.
          </Prose>
        </div>
      </div>

      {/* Tradeoffs table */}
      <div className="mb-20">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="Constraints">Naming the tradeoffs before wireframing</SectionHeading>
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
                <td className="px-5 py-4">Speed. Edits in seconds, not forms.</td>
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
              Dispatchers already think in spreadsheets. Rows, columns, totals, overrides. Excel
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
                <span className="font-bold text-primary">Low-density:</span> flat fees, basic
                surcharges
              </li>
              <li>
                <span className="font-bold text-primary">Medium-density:</span> discounts with
                conditions
              </li>
              <li>
                <span className="font-bold text-primary">High-density:</span> slab pricing with
                internal structure
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <Img
            src="/images/bUV2WoPk0GlV3dWvKXm2JEQeKpM.png"
            caption="Design framework: the density system mapped to row types."
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

      {/* Figma-based mapping and architecture */}
      <div className="mb-20">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="Information architecture">
            Mapping the system in Figma before touching a screen
          </SectionHeading>
          <Prose>
            The estimate isn't a screen. It's the visible tip of a system that starts with rate
            charts, moves through the estimation engine, lands on the Shipper's screen, and (should)
            end in an audit log. I mapped that whole chain in Figma before I designed the popup, so
            the edit surface knew what it was allowed to touch.
          </Prose>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/60 p-6 md:p-10">
          <svg viewBox="0 0 900 340" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(0,17,34)" />
              </marker>
            </defs>

            {/* Row 1: source of truth */}
            <g>
              <rect x="20" y="30" width="180" height="70" rx="10" fill="#ffffff" stroke="rgb(0,17,34)" strokeWidth="1.5" />
              <text x="110" y="58" textAnchor="middle" fontFamily="Inter" fontWeight="700" fontSize="13" fill="rgb(0,17,34)">Rate Charts</text>
              <text x="110" y="78" textAnchor="middle" fontFamily="Inter" fontSize="11" fill="rgb(102,102,102)">Source of truth</text>
              <text x="110" y="93" textAnchor="middle" fontFamily="Inter" fontSize="10" fill="rgb(102,102,102)">IMMUTABLE</text>
            </g>

            <line x1="200" y1="65" x2="260" y2="65" stroke="rgb(0,17,34)" strokeWidth="1.5" markerEnd="url(#arrow)" />

            <g>
              <rect x="260" y="30" width="200" height="70" rx="10" fill="#ffffff" stroke="rgb(0,17,34)" strokeWidth="1.5" />
              <text x="360" y="58" textAnchor="middle" fontFamily="Inter" fontWeight="700" fontSize="13" fill="rgb(0,17,34)">Estimation Engine</text>
              <text x="360" y="78" textAnchor="middle" fontFamily="Inter" fontSize="11" fill="rgb(102,102,102)">Applies rules to shipment</text>
              <text x="360" y="93" textAnchor="middle" fontFamily="Inter" fontSize="10" fill="rgb(102,102,102)">DETERMINISTIC</text>
            </g>

            <line x1="460" y1="65" x2="520" y2="65" stroke="rgb(0,17,34)" strokeWidth="1.5" markerEnd="url(#arrow)" />

            <g>
              <rect x="520" y="30" width="200" height="70" rx="10" fill="rgb(0,17,34)" stroke="rgb(0,17,34)" strokeWidth="1.5" />
              <text x="620" y="58" textAnchor="middle" fontFamily="Inter" fontWeight="700" fontSize="13" fill="#ffffff">Estimate Popup</text>
              <text x="620" y="78" textAnchor="middle" fontFamily="Inter" fontSize="11" fill="rgba(255,255,255,0.8)">The editable surface</text>
              <text x="620" y="93" textAnchor="middle" fontFamily="Inter" fontSize="10" fill="rgba(255,255,255,0.7)">SCOPED OVERRIDES ONLY</text>
            </g>

            <line x1="720" y1="65" x2="780" y2="65" stroke="rgb(0,17,34)" strokeWidth="1.5" markerEnd="url(#arrow)" />

            <g>
              <rect x="780" y="30" width="110" height="70" rx="10" fill="#ffffff" stroke="rgb(0,17,34)" strokeWidth="1.5" />
              <text x="835" y="58" textAnchor="middle" fontFamily="Inter" fontWeight="700" fontSize="13" fill="rgb(0,17,34)">Audit Log</text>
              <text x="835" y="78" textAnchor="middle" fontFamily="Inter" fontSize="11" fill="rgb(102,102,102)">Every change</text>
              <text x="835" y="93" textAnchor="middle" fontFamily="Inter" fontSize="10" fill="rgb(102,102,102)">APPEND-ONLY</text>
            </g>

            {/* Row 2: actors */}
            <line x1="360" y1="100" x2="360" y2="150" stroke="rgb(102,102,102)" strokeWidth="1" strokeDasharray="3,3" />
            <line x1="620" y1="100" x2="620" y2="150" stroke="rgb(102,102,102)" strokeWidth="1" strokeDasharray="3,3" />

            <g>
              <rect x="440" y="170" width="160" height="60" rx="10" fill="#ffffff" stroke="rgb(102,102,102)" strokeWidth="1" strokeDasharray="4,3" />
              <text x="520" y="195" textAnchor="middle" fontFamily="Inter" fontWeight="700" fontSize="12" fill="rgb(0,17,34)">Shipper</text>
              <text x="520" y="213" textAnchor="middle" fontFamily="Inter" fontSize="10" fill="rgb(102,102,102)">Proposes edits</text>
            </g>

            <g>
              <rect x="640" y="170" width="160" height="60" rx="10" fill="#ffffff" stroke="rgb(102,102,102)" strokeWidth="1" strokeDasharray="4,3" />
              <text x="720" y="195" textAnchor="middle" fontFamily="Inter" fontWeight="700" fontSize="12" fill="rgb(0,17,34)">Dispatcher</text>
              <text x="720" y="213" textAnchor="middle" fontFamily="Inter" fontSize="10" fill="rgb(102,102,102)">Confirms · owns final</text>
            </g>

            <line x1="520" y1="170" x2="620" y2="130" stroke="rgb(0,17,34)" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <line x1="720" y1="170" x2="640" y2="130" stroke="rgb(0,17,34)" strokeWidth="1.5" markerEnd="url(#arrow)" />

            {/* Guardrails band */}
            <rect x="20" y="260" width="870" height="60" rx="10" fill="#ffffff" stroke="rgb(0,17,34)" strokeWidth="1" strokeDasharray="4,4" />
            <text x="40" y="285" fontFamily="Inter" fontWeight="700" fontSize="12" fill="rgb(0,17,34)">Guardrails baked into the surface:</text>
            <text x="40" y="305" fontFamily="Inter" fontSize="11" fill="rgb(102,102,102)">
              Only override rows are editable · Rate chart is read-only from this surface · Draft ≠ Final · Every save writes to audit log
            </text>
          </svg>
        </div>

        <div className="mt-8 max-w-3xl">
          <Prose>
            The diagram lived on the first Figma page. Every design decision after it had to be
            reconcilable with the map. When engineering asked "can the popup update the rate chart in
            edge case X?" the answer was already visible. {bold('No, that arrow doesn\'t exist.')}
          </Prose>
        </div>
      </div>

      {/* Wireframes */}
      <div className="mb-20">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="Wireframes">Wireframing in Figma Make AI, once I knew what to build</SectionHeading>
          <Prose>
            Wireframing didn't start on day one. By the time I opened {bold('Figma Make AI')} it was
            already the tail end of Sprint 1. The interviews were done, the competitor audit was
            written up, the system map was on the wall. I knew what the surface had to do. What I
            didn't know yet was what shape it should take.
          </Prose>
          <div className="h-4" />
          <Prose>
            Figma Make let me prompt structure instead of drawing it. In an afternoon I had four
            candidate layouts on screen, each loaded with real production numbers pulled from a live
            account (no lorem-ipsum, no placeholder slabs). The point wasn't speed for its own sake.
            It was to let the {bold('hard rows')}, the slab pricing with a discount stacked on top,
            collide with the layout before I fell in love with any of them.
          </Prose>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Img
            src="/images/IMdVq4H3Z0BZa4jTOiBRaVHa6U0.png"
            caption="Wireframe v1: flat editable list generated in Figma Make. Fails, because slab rows need internal structure."
          />
          <Img
            src="/images/rvkeAgKT2fVpIFg8KmyT1HRMT8.png"
            caption="Wireframe v2: grouped by fee type. Better, but slab still hidden behind expand."
          />
          <Img
            src="/images/nfKplz7BZEooL5Eem8EAPm38Q.png"
            caption="Wireframe v3: density-tiered rows stress-tested with a live rate chart."
          />
          <Img
            src="/images/d4fCHkn7X3TrWsq0Zk5zrmptxus.png"
            caption="Wireframe v4: the final structure. Slab handled inline with clear override slots."
          />
        </div>

        <div className="mt-6 max-w-3xl">
          <Prose>
            I walked a Dispatcher and a PM through v2 and v3 over a screen share on the last day of
            Sprint 1. The "where does the discount go?" hesitation on v2 killed it before I sunk
            time into visual polish. Sprint 2 was where the surviving structure got pressure-tested
            with engineering and the edge cases nobody wanted to name.
          </Prose>
        </div>
      </div>

      {/* Design decisions */}
      <div className="mb-20">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="Decisions">Design moves, and what I rejected</SectionHeading>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {[
            {
              title: 'A popup, not a full edit page',
              body: "A full page gave more room but broke the user's mental thread. The popup keeps the original estimate visible behind it, so editing feels like an overlay on reality, not a detour.",
            },
            {
              title: 'Progressive disclosure',
              body: 'Showing every editable field by default signalled "everything is up for grabs." The default is read-only and calm; a single Edit CTA unlocks the table. Control is available, not assumed.',
            },
            {
              title: 'Draft and Final as two states',
              body: 'Stakeholders pushed for one Save button. I pushed back, because real revisions are rarely one-shot. Splitting Draft and Final gave the workflow a place to pause without committing.',
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
      </div>

      {/* The resulting screen */}
      <div className="mb-20">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="The outcome">The resulting screen</SectionHeading>
          <Prose>
            One popup. Inline edits only on the fields that are safe to edit. Slab-based rows that
            expand into editable sub-structures without breaking the parent row's rhythm. A live
            cost summary at the bottom that updates as edits happen, so the consequence of any
            change is visible before it's saved.
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
            caption="Final solution: popup interaction."
          />
          <Img
            src="/images/JqnhKj96USyOZNI9Ccn3yHEMIO0.png"
            caption="Final solution: slab-based pricing."
          />
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="/prototypes/cost-estimates.html"
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
          <VideoEmbed id="ajX8xarHEEY" label="Prototype walkthrough, end to end" />
        </div>
      </div>

      {/* A/B testing / validation */}
      <div className="mb-20">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="A/B testing">How we knew it was actually better</SectionHeading>
          <Prose>
            Enterprise logistics doesn't get clean 50/50 traffic splits. The accounts are too few
            and too different. Instead I ran a {bold('cohorted rollout')}: 12 Dispatcher accounts on
            the new estimate popup, 12 matched accounts on the existing read-only flow, tracked side
            by side for three weeks.
          </Prose>
        </div>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-100">
          <table className="w-full text-left text-sm min-w-[720px]">
            <thead className="bg-slate-50 text-primary">
              <tr>
                <th className="px-5 py-3 font-bold">Metric</th>
                <th className="px-5 py-3 font-bold">Control (old flow)</th>
                <th className="px-5 py-3 font-bold">Variant (popup)</th>
                <th className="px-5 py-3 font-bold">Delta</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-secondary font-medium">
              {[
                ['Median time to revision', '42 min', '11 min', '−74%'],
                ['Rate-chart edits per week', '18', '0', '−100%'],
                ['Support tickets ("estimate wrong")', '9 / week', '4 / week', '−56%'],
                ['Manual slab calc errors', '6 / week', '0', '−100%'],
                ['Task success rate (edit + confirm)', '61%', '94%', '+33 pts'],
              ].map((row) => (
                <tr key={row[0]}>
                  <td className="px-5 py-4 font-bold text-primary">{row[0]}</td>
                  <td className="px-5 py-4">{row[1]}</td>
                  <td className="px-5 py-4">{row[2]}</td>
                  <td className="px-5 py-4 font-bold text-primary">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            {
              label: 'What we measured',
              body: 'Time-on-task, edit accuracy, ticket volume, and the one everyone forgets: rate-chart pollution rate.',
            },
            {
              label: 'What we didn\'t',
              body: 'CSAT surveys. Three weeks was too short. We went back for qualitative in week 5.',
            },
            {
              label: 'What surprised us',
              body: 'Dispatchers using the popup started sending fewer Slack messages to each other. The audit log became the shared reference.',
            },
          ].map((v) => (
            <div key={v.label} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xs">
              <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
                {v.label}
              </p>
              <p className="mt-3 text-sm text-secondary font-medium leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-3xl">
          <Prose>
            The variant shipped to 100% of accounts after week 3. The {bold('rate-chart-edits-per-week')}{' '}
            number stayed at zero. That was the strongest signal the design had done its actual job:
            it gave a one-off correction a place to live that {bold('wasn\'t the source of truth.')}
          </Prose>
        </div>
      </div>

      {/* Process notes */}
      <div className="mb-20 max-w-3xl">
        <SectionHeading eyebrow="Process">Two sprints, ten-plus iterations</SectionHeading>
        <Prose>
          {bold('Sprint 1')} was for understanding. Week one went into interviews across the US,
          Singapore and Dubai accounts, plus the competitor audit and the persona work. Week two
          was mapping. I put the whole system on a Figma page (rate charts, estimation engine, the
          missing edit surface, the audit log) so the team could argue about the same picture. Only
          after the map settled did I open {bold('Figma Make AI')} and start wireframing, on the last
          few days of the sprint, with real production numbers loaded straight into the frames.
        </Prose>
        <div className="h-4" />
        <Prose>
          {bold('Sprint 2')} was for pressure. Interactive prototype in Figma, walkthroughs with
          engineering, edge cases dragged out of the audit-log and rate-chart integration paths,
          then the cohorted rollout. I iterated in front of PMs and engineers rather than behind
          closed doors. Faster loop, fewer surprises at handoff.
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
                <td className="px-5 py-4 font-bold text-primary">Dispatcher/Shipper support tickets</td>
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
            ['Friction can be a design choice', 'Making Edit a deliberate CTA instead of an always-on affordance was friction I added on purpose. The cost of an accidental edit was higher than one extra click.'],
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
