import React from 'react';

interface AIInsightsProps {
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

const Placeholder: React.FC<{ label: string; note?: string; aspect?: string }> = ({
  label,
  note,
  aspect = 'aspect-[16/9]',
}) => (
  <figure
    className={`flex ${aspect} w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center`}
  >
    <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
      Image placeholder
    </span>
    <span className="mt-2 text-base md:text-lg font-bold text-primary">{label}</span>
    {note && (
      <span className="mt-3 max-w-xl text-sm text-secondary font-medium leading-relaxed">
        {note}
      </span>
    )}
  </figure>
);

const ImageFigure: React.FC<{
  src: string;
  alt: string;
  aspect?: string;
  objectFit?: 'cover' | 'contain';
}> = ({ src, alt, aspect = 'aspect-[16/9]', objectFit = 'cover' }) => (
  <figure className={`${aspect} w-full overflow-hidden rounded-2xl bg-slate-50`}>
    <img
      src={src}
      alt={alt}
      className={`h-full w-full ${objectFit === 'cover' ? 'object-cover' : 'object-contain'}`}
    />
  </figure>
);

export const AIInsights: React.FC<AIInsightsProps> = ({ navigateTo }) => {
  const flow = [
    { step: 'Notice', why: 'A persistent, discoverable entry point.', principle: 'Recognition over recall' },
    { step: 'Read', why: 'A plain-language, prioritized read of the page.', principle: 'Gulf of evaluation' },
    { step: 'Decide', why: 'The insight ranks what matters first.', principle: 'Cognitive load' },
    { step: 'Act', why: 'Recommended actions turn meaning into a move.', principle: 'Gulf of execution' },
    { step: 'Ask', why: 'One-tap follow-ups hand off to Milo in place.', principle: 'Progressive disclosure' },
    { step: 'Teach', why: 'Helpful / not-helpful feedback calibrates trust.', principle: 'User control' },
  ];

  const principles = [
    { n: '01', title: 'Account for load on every choice', body: 'Each element either adds or removes cognitive load. New capability had to remove more than it added.' },
    { n: '02', title: 'Narrow both gulfs at each step', body: 'Evaluation first (what does this mean), then execution (what do I do).' },
    { n: '03', title: 'Recognition over recall', body: 'A capability the user has to remember to summon is a capability most users never use.' },
    { n: '04', title: 'Layer depth, never dump it', body: 'Progressive disclosure: a page-level read first, detail on demand.' },
    { n: '05', title: 'Calibrate trust before automation', body: 'For an AI feature, reliance has to be earned before automation is offered.' },
  ];

  const gaps = [
    { tag: 'Cognitive load', title: 'Synthesis sat on the user', body: "Any one number was legible, but assembling eight cards into a decision sat entirely on the user's working memory." },
    { tag: 'Gulf of evaluation', title: 'State, but not meaning', body: 'The page showed numbers and left interpretation unaided. Even a support call often failed to close the ticket, because the answer was a judgment, not a figure.' },
    { tag: 'Foraging', title: 'Users left to make sense of it', body: 'Some customers screenshotted the dashboard into ChatGPT and Gemini to get the read. They were leaving the product to understand the product.' },
  ];

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
          AI · Enterprise SaaS · Cognitive Load
        </p>
        <h1 className="mt-3 text-4xl font-black text-primary md:text-5xl lg:text-6xl tracking-tight">
          Building the insight into the dashboard
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-primary font-bold">
          AI Insights for LogiNext's Control Tower
        </p>
        <p className="mt-6 max-w-3xl text-lg md:text-xl text-secondary font-medium leading-relaxed">
          How I treated a recurring stream of "what does this mean?" support questions as a
          cognitive-load problem instead of a dashboard-clarity one — and designed page-level AI
          insights that let ops teams read the board and act on it on their own, without leaving
          the product.
        </p>
      </div>

      {/* Hero */}
      <div className="mb-16">
        <ImageFigure
          src="/images/ai-insights-opened-state.png"
          alt="Control Tower with the AI Insights panel open: a plain-language read of the page, recommended actions, and one-tap follow-ups."
          aspect="aspect-[16/9]"
          objectFit="contain"
        />
      </div>

      {/* Quick-facts strip */}
      <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ['Role', 'Sole designer · end-to-end UX & UI'],
          ['Product', "LogiNext Control Tower (enterprise ops)"],
          ['Collaboration', 'PMs, engineering — feasibility, demo, handoff'],
          ['Shipped', 'May · ~1 month of production data'],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
              {label}
            </span>
            <p className="mt-2 text-sm font-bold text-primary leading-snug">{value}</p>
          </div>
        ))}
      </div>

      {/* Hook quote */}
      <div className="mb-20 max-w-3xl">
        <div className="rounded-2xl border-l-4 border-primary bg-slate-50 p-6 md:p-8">
          <p className="font-serif text-2xl md:text-3xl italic text-primary leading-snug">
            Users were screenshotting our dashboard into ChatGPT to understand it.
          </p>
          <p className="mt-3 text-base md:text-lg text-secondary font-medium">
            They were leaving the product to understand the product. That's the whole problem.
          </p>
        </div>
      </div>

      {/* TL;DR */}
      <div className="mb-20">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="TL;DR">The 60-second version</SectionHeading>
          <Prose>
            Control Tower is the command center our enterprise ops teams open every morning. Reading
            a single card was easy. Connecting six or seven into {bold('"so what do I do today"')}{' '}
            was the hard part — and it was generating support load. I treated it as a{' '}
            {bold('cognitive-load problem')}, not a dashboard-clarity one: moved synthesis back into
            the product with page-level AI insights, paired each read with a recommended action, and
            kept depth one tap away.
          </Prose>
        </div>

        {/* Headline metrics */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['+67%', 'Higher adoption vs. in-chatbot version'],
            ['Solved in-product', 'Users now answer "why is this happening?" without raising a ticket'],
            ['73% → 88%', 'Delivery SLA adherence after acting on insights'],
            ['21% → 13%', 'Idle delivery associates after acting on insights'],
          ].map(([big, small]) => (
            <div key={big} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-xs">
              <p className="text-lg md:text-xl font-extrabold text-primary leading-tight">{big}</p>
              <p className="mt-2 text-xs text-secondary font-bold uppercase tracking-wider leading-snug">
                {small}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Screen was never the problem */}
      <div className="mb-20 max-w-3xl">
        <SectionHeading eyebrow="The framing">The screen was never the problem</SectionHeading>
        <Prose>
          The same questions kept coming back into support, week after week. The tickets weren't
          about broken charts. They were about meaning — users could read the numbers but couldn't
          turn them into a decision on their own:
        </Prose>
        <div className="mt-6 space-y-3">
          {[
            '"My delivery SLAs are consistently missing and I can\'t tell why."',
            '"Half my delivery associates are idle and it\'s hard for us to solve this."',
            'Recurring questions on compliance insights for delivery associates.',
          ].map((q) => (
            <div
              key={q}
              className="rounded-xl border-l-4 border-slate-300 bg-slate-50 px-5 py-4 text-base text-primary font-medium italic"
            >
              {q}
            </div>
          ))}
        </div>
        <div className="h-6" />
        <Prose>
          The detail that set the priority: some customers had stopped asking us. They were
          screenshotting the dashboard into ChatGPT and Gemini to get the read.
        </Prose>
      </div>

      {/* Reading the problem — visual UX pointer block */}
      <div className="mb-20">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="Reading the problem">Clarity, or cognitive load?</SectionHeading>
          <Prose>
            The default move on a complaint-heavy dashboard is to call it a clarity problem and
            redraw charts. I read the tickets the other way — and that reframe is what the whole
            design rests on.
          </Prose>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {gaps.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6"
            >
              <span className="inline-block rounded-full bg-primary px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
                {g.tag}
              </span>
              <h3 className="mt-3 font-bold text-primary text-lg leading-snug">{g.title}</h3>
              <p className="mt-3 text-sm text-secondary font-medium leading-relaxed">{g.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-3xl">
          <Prose>
            Two of Norman's ideas named the gap precisely. The dashboard had a wide{' '}
            {bold('gulf of evaluation')} — it reported state but left users to translate state into
            meaning. And it did nothing for the {bold('gulf of execution')} — even once someone
            understood the problem, the page never suggested the next move. Read as{' '}
            {bold('information foraging')}, the ChatGPT workaround was the clearest signal of all.
          </Prose>
        </div>
      </div>

      {/* Design principles — scannable lens */}
      <div className="mb-20">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="The lens">Five principles I designed against</SectionHeading>
          <Prose>
            Before drawing screens I fixed the criteria. Each one vetoed a tempting option later,
            which is the point of having them.
          </Prose>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {principles.map((p) => (
            <div
              key={p.n}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xs flex gap-5"
            >
              <span className="font-serif text-3xl font-black text-primary leading-none shrink-0">
                {p.n}
              </span>
              <div>
                <h3 className="font-bold text-primary text-base leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-secondary font-medium leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Flow — visual journey */}
      <div className="mb-20">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="The flow">One short journey, six removed costs</SectionHeading>
          <Prose>
            The feature is one short journey, and each step exists to remove a specific cost.
          </Prose>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {flow.map((s, i) => (
            <div
              key={s.step}
              className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5 relative"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-2xl font-black text-primary">0{i + 1}</span>
                <h3 className="font-bold text-primary text-lg">{s.step}</h3>
              </div>
              <p className="mt-2 text-sm text-secondary font-medium leading-relaxed">{s.why}</p>
              <p className="mt-3 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                {s.principle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Two options */}
      <div className="mb-20">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="The call">Two options, adjudicated by behavior</SectionHeading>
          <Prose>
            There were two credible homes for this, and I tested both rather than picking on
            instinct.
          </Prose>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-primary bg-white p-6 shadow-xs relative">
            <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
              Shipped
            </span>
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
              Option A
            </p>
            <h3 className="mt-2 font-bold text-primary text-lg">Dedicated AI Insights entry point</h3>
            <p className="mt-3 text-sm text-secondary font-medium leading-relaxed">
              A surfaced control is a {bold('signifier')}. Discoverability lives on the page;
              depth lives one tap away.
            </p>
            <p className="mt-4 text-2xl font-black text-primary">+67% adoption</p>
            <p className="text-xs text-secondary font-bold uppercase tracking-wider">
              vs. Option B in 20-client pilot
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6">
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
              Option B
            </p>
            <h3 className="mt-2 font-bold text-primary text-lg">Folded into Milo (chatbot)</h3>
            <p className="mt-3 text-sm text-secondary font-medium leading-relaxed">
              Matches Jakob's Law, but fails recognition over recall: the user has to{' '}
              {bold('already know')} the capability exists and recall the right question to ask.
            </p>
          </div>
        </div>
      </div>

      {/* What I designed */}
      <div className="mb-20">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="What I designed">Four moves, each tied to a principle</SectionHeading>
        </div>

        {/* 01 entry point */}
        <div className="mt-10">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">01</p>
            <h3 className="mt-2 font-serif text-2xl md:text-3xl font-bold text-primary">
              A dedicated entry point, with a nudge that respects attention
            </h3>
            <p className="mt-4 text-base text-secondary font-medium leading-relaxed">
              Visible on the Control Tower header (desktop) and a floating pill (mobile).{' '}
              {bold('Recognition over recall')} made literal. The first-run nudge shows once, then
              stops — a persistent banner would train banner blindness.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <ImageFigure
              src="/images/ai-insights-before-ct.png"
              alt="Before: Control Tower with no AI Insights entry point"
              aspect="aspect-[4/3]"
              objectFit="contain"
            />
            <ImageFigure
              src="/images/ai-insights-after-ct.png"
              alt="After: Control Tower with a dedicated AI Insights control and a one-time nudge"
              aspect="aspect-[4/3]"
              objectFit="contain"
            />
            <ImageFigure
              src="/images/ai-insights-mobile-entry.png"
              alt="Mobile: floating AI Insights pill within thumb reach"
              aspect="aspect-[4/3]"
              objectFit="contain"
            />
          </div>
        </div>

        {/* 02 insight on page */}
        <div className="mt-14">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">02</p>
            <h3 className="mt-2 font-serif text-2xl md:text-3xl font-bold text-primary">
              The insight, written as a read and placed on the page
            </h3>
            <p className="mt-4 text-base text-secondary font-medium leading-relaxed">
              Each insight is a plain-language sentence, not another metric. Placed on the page it
              describes, and {bold('prioritized')} so the highest-signal one surfaces first. A flat
              list would rebuild the original synthesis problem inside a new container.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <ImageFigure
              src="/images/ai-insights-opened-state.png"
              alt="Desktop: prioritized, page-contextual insights panel"
              aspect="aspect-[4/3]"
              objectFit="contain"
            />
            <ImageFigure
              src="/images/ai-insights-mobile-bottomsheet.png"
              alt="Mobile: insights as a bottom sheet"
              aspect="aspect-[4/3]"
              objectFit="contain"
            />
          </div>
        </div>

        {/* 03 recommended actions */}
        <div className="mt-14">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">03</p>
            <h3 className="mt-2 font-serif text-2xl md:text-3xl font-bold text-primary">
              From diagnosis to the next move
            </h3>
            <p className="mt-4 text-base text-secondary font-medium leading-relaxed">
              The real question underneath the tickets was {bold('"what should I do,"')} not "what
              is the number." So every insight carries Recommended Actions — the design's answer to
              the gulf of execution.
            </p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              ['Bottleneck', '"Review the dispatch workflow for bottlenecks"'],
              ['Capacity', '"Increase driver allocation at peak hours"'],
            ].map(([k, v]) => (
              <div
                key={k}
                className="rounded-xl border border-slate-100 bg-slate-50/60 p-5"
              >
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                  {k}
                </p>
                <p className="mt-2 text-base font-bold text-primary leading-snug">{v}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 04 stay in flow */}
        <div className="mt-14">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">04</p>
            <h3 className="mt-2 font-serif text-2xl md:text-3xl font-bold text-primary">
              Stay in flow, and teach the system
            </h3>
            <p className="mt-4 text-base text-secondary font-medium leading-relaxed">
              When a recommendation isn't self-explanatory, one-tap questions hand off to{' '}
              {bold('Milo in place')} — the user goes deeper without a context switch. A{' '}
              {bold('helpful / not-helpful')} control sits on every insight, feeding a calibration
              loop so weak insights get caught before they erode trust.
            </p>
          </div>
        </div>
      </div>

      {/* Scoping */}
      <div className="mb-20 max-w-3xl">
        <SectionHeading eyebrow="Scoping">A UX decision, not just a roadmap one</SectionHeading>
        <Prose>
          I shipped the read-and-act core and held back insight download/logs, history, end-of-day
          auto-generation, and one-click agentic fixes. The agentic deferral was the deliberate one.
          Handing an AI one-click control over live dispatch before users trust its diagnosis
          invites {bold('automation bias')}.
        </Prose>
        <div className="h-4" />
        <Prose>
          The fifth principle made the call: earn reliance with read-and-recommend first, then offer
          to act. Ship the wedge, earn the rest.
        </Prose>
      </div>

      {/* Results */}
      <div className="mb-20">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="Results">What it moved</SectionHeading>
          <Prose>
            I want to be precise about what is measured and what is directional, because this
            shipped recently.
          </Prose>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-primary bg-white p-6 shadow-xs">
            <p className="text-3xl md:text-4xl font-black text-primary leading-none">+67%</p>
            <p className="mt-3 font-bold text-primary leading-snug">
              Higher adoption for the dedicated entry point
            </p>
            <p className="mt-2 text-sm text-secondary font-medium leading-relaxed">
              Pilot of 20 clients over one month. The visible signifier got used; the recalled one
              did not.
            </p>
          </div>
          <div className="rounded-2xl border-2 border-primary bg-white p-6 shadow-xs">
            <p className="text-3xl md:text-4xl font-black text-primary leading-none">
              Self-served in-product
            </p>
            <p className="mt-3 font-bold text-primary leading-snug">
              Recurring "what does this mean?" questions stopped coming back to support
            </p>
            <p className="mt-2 text-sm text-secondary font-medium leading-relaxed">
              Closing the gulf of evaluation in place let users answer the questions themselves,
              instead of raising a ticket or foraging off-platform.
            </p>
          </div>
        </div>

        <div className="mt-10 max-w-3xl">
          <Prose>
            Because each insight named a specific issue and a specific action, I could trace
            operational impact: download the insight data, filter by metric, map to client, and
            check Control Tower metrics before and after.
          </Prose>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <ImageFigure
            src="/images/impact-sla-adherence.png"
            alt="Delivery SLA adherence, before vs after acting on insights"
            aspect="aspect-[4/3]"
            objectFit="contain"
          />
          <ImageFigure
            src="/images/impact-idle-das.png"
            alt="Idle delivery associates, before vs after"
            aspect="aspect-[4/3]"
            objectFit="contain"
          />
          <ImageFigure
            src="/images/impact-da-compliance.png"
            alt="Delivery-associate compliance issues, before vs after"
            aspect="aspect-[4/3]"
            objectFit="contain"
          />
        </div>
        <p className="mt-4 text-center text-xs font-extrabold uppercase tracking-widest text-slate-400">
          Representative of confidential per-client tracking
        </p>
      </div>

      {/* Takeaways */}
      <div className="mb-20 max-w-3xl">
        <SectionHeading eyebrow="What I took from it">The synthesis was the product gap</SectionHeading>
        <Prose>
          The instinct on a complaint-heavy dashboard is to redesign the dashboard. The cards were
          fine. The work the user was doing in their head, and increasingly in ChatGPT, was the
          product gap: sensemaking the interface had quietly offloaded onto them. Designing that
          synthesis back in — narrowing the distance between data and meaning, then between meaning
          and action — is what moved the numbers.
        </Prose>
        <div className="mt-8 rounded-2xl border-l-4 border-primary bg-slate-50 p-6 md:p-8">
          <p className="font-serif text-xl md:text-2xl italic text-primary leading-snug">
            Once users trust the diagnosis, the one-click fix is the reliance we will have earned
            the right to offer.
          </p>
        </div>
      </div>

      {/* Footer meta */}
      <div className="mb-12 max-w-3xl border-t border-slate-100 pt-8">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <span className="font-bold text-slate-400 block uppercase text-xs tracking-wider">
              Role
            </span>
            <span className="font-bold text-primary block mt-1">
              Sole designer, end-to-end UX and UI
            </span>
          </div>
          <div>
            <span className="font-bold text-slate-400 block uppercase text-xs tracking-wider">
              Analytics
            </span>
            <span className="font-bold text-primary block mt-1">Google Analytics</span>
          </div>
        </div>

        <div className="mt-8">
          <a
            href="https://lilac-elm-19828944.figma.site"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary underline underline-offset-4 hover:text-slate-800"
          >
            View the prototype ↗
          </a>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
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
