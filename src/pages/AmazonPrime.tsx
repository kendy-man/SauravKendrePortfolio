import React from 'react';

interface AmazonPrimeProps {
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

const Placeholder: React.FC<{ label: string; note: string; aspect?: string }> = ({
  label,
  note,
  aspect = 'aspect-[16/9]',
}) => (
  <figure
    className={`flex ${aspect} w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center`}
  >
    <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
      Placeholder
    </span>
    <span className="mt-2 text-base md:text-lg font-bold text-primary">{label}</span>
    <span className="mt-3 max-w-xl text-sm text-secondary font-medium leading-relaxed">
      {note}
    </span>
  </figure>
);

const ImageFigure: React.FC<{ src: string; alt: string; aspect?: string; objectFit?: 'cover' | 'contain' }> = ({
  src,
  alt,
  aspect = 'aspect-[16/9]',
  objectFit = 'cover',
}) => (
  <figure className={`${aspect} w-full overflow-hidden rounded-2xl bg-slate-50`}>
    <img
      src={src}
      alt={alt}
      className={`h-full w-full ${objectFit === 'cover' ? 'object-cover' : 'object-contain'}`}
    />
  </figure>
);

const DriveVideo: React.FC<{ fileId: string; aspect?: string; title: string }> = ({
  fileId,
  aspect = 'aspect-video',
  title,
}) => (
  <figure className={`${aspect} w-full overflow-hidden rounded-2xl bg-black`}>
    <iframe
      src={`https://drive.google.com/file/d/${fileId}/preview`}
      title={title}
      allow="autoplay"
      allowFullScreen
      className="h-full w-full"
    />
  </figure>
);

export const AmazonPrime: React.FC<AmazonPrimeProps> = ({ navigateTo }) => {
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
          Human Factors · UX Research
        </p>
        <h1 className="mt-3 text-4xl font-black text-primary md:text-5xl lg:text-6xl tracking-tight">
          Unsubscribing from Amazon Prime
        </h1>
        <p className="mt-6 max-w-3xl text-lg md:text-xl text-secondary font-medium leading-relaxed">
          A human-factors teardown of the mobile cancellation flow, and a redesign that cut exit
          time in half.
        </p>
      </div>

      {/* Hero */}
      <div className="mb-16">
        <ImageFigure
          src="/images/prime-hero-cover.png"
          alt="Unsubscribing from Amazon Prime: hero cover"
          aspect="aspect-[16/9]"
          objectFit="cover"
        />
      </div>

      {/* Quick-facts strip */}
      <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ['Role', 'Heuristic audit co-lead, SHERPA, redesign prototype & visual system'],
          ['Team', 'Siddhesh Shirsekar · Saurav Kendre · Anagha Dandekar'],
          ['Mentor', 'Prof. Swati Pal, IDC IIT Bombay'],
          ['Timeline', '5 days · ~60 hours · Amazon Prime mobile (India)'],
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
            3 taps to join. 11 taps to leave.
          </p>
          <p className="mt-3 text-base md:text-lg text-secondary font-medium">
            That gap is the whole story.
          </p>
        </div>
      </div>

      {/* TL;DR */}
      <div className="mb-20">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="TL;DR">The 60-second version</SectionHeading>
          <Prose>
            Prime is one of the most-used subscriptions in India, and one of the hardest to walk
            away from. Over a week at {bold('IDC School of Design, IIT Bombay')}, our team pulled
            the mobile cancellation flow apart using four overlapping methods: task analysis, a
            heuristic audit, SHERPA error prediction, and Tobii eye-tracking. Then we rebuilt it.
          </Prose>
        </div>

        {/* Headline metrics */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['54.6s → 26.8s', '~51% faster on time-on-task'],
            ['SUS 38.5 → 92.0', 'Grade F → A ("Excellent")'],
            ['11 → 5 taps', 'To reach a confirmed cancel'],
            ['SHERPA ≈ Heatmaps', 'Predicted errors matched observed'],
          ].map(([big, small]) => (
            <div
              key={big}
              className="rounded-2xl border border-slate-100 bg-white p-5 shadow-xs"
            >
              <p className="text-lg md:text-xl font-extrabold text-primary leading-tight">{big}</p>
              <p className="mt-2 text-xs text-secondary font-bold uppercase tracking-wider leading-snug">
                {small}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* The hook */}
      <div className="mb-20 max-w-3xl">
        <SectionHeading eyebrow="The framing">What we were really looking at</SectionHeading>
        <Prose>
          You sign up for Prime in three taps. Cancelling takes eleven, if you find the right path
          on the first try. The app doesn't even handle the final step itself. It throws you out to
          a browser without telling you it's about to.
        </Prose>
        <div className="h-4" />
        <Prose>
          This isn't a bug. There's a name for it: {bold('the roach motel')}. Easy in,
          intentionally hard out. We weren't satisfied with describing it though. We wanted to
          measure the friction, predict where people would trip, and show that a cleaner version of
          the flow doesn't actually cost the business anything real.
        </Prose>
      </div>

      <div className="mb-20">
        <DriveVideo
          fileId="1eajjmjz5QcrHZez9IyqzrJORFkKjs9PV"
          title="Amazon Prime cancellation journey: mobile screen recording"
        />
      </div>

      {/* Why this matters */}
      <div className="mb-20 max-w-3xl">
        <SectionHeading eyebrow="Why it matters">A regulatory gap, and a research gap</SectionHeading>
        <Prose>
          India's DPDP Act, along with newer rules in Germany, France and the UK, is converging on a
          pretty simple idea: {bold('ending a subscription should be as easy as starting one.')} The
          existing literature on dark patterns tends to stay abstract, and most Prime audits we
          found focused on the desktop web. Nobody had done a careful, step-by-step look at the{' '}
          {bold('mobile')} flow in India specifically, which is where Prime's bundle (shipping plus
          content) bites hardest and where most of its users actually live.
        </Prose>
        <div className="h-4" />
        <Prose>That's the gap we wanted to close.</Prose>
      </div>

      <div className="mb-20">
        <ImageFigure
          src="/images/prime-cancellation-time.png"
          alt="Average cancellation time across OTTs: infographic"
          aspect="aspect-[16/9]"
          objectFit="contain"
        />
      </div>

      {/* Cross-OTT */}
      <div className="mb-20">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="Benchmark">How does Prime compare?</SectionHeading>
          <Prose>
            We walked through cancellation on five OTT apps on mobile, just to make sure Prime
            wasn't reflecting an industry norm.
          </Prose>
        </div>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-100">
          <table className="w-full text-left text-sm min-w-[640px]">
            <thead className="bg-slate-50 text-primary">
              <tr>
                <th className="px-5 py-3 font-bold">Service</th>
                <th className="px-5 py-3 font-bold">Cancel path (steps)</th>
                <th className="px-5 py-3 font-bold">Dark-pattern intensity</th>
                <th className="px-5 py-3 font-bold">Psychological barrier</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-secondary font-medium">
              <tr>
                <td className="px-5 py-4 font-bold text-primary">Netflix</td>
                <td className="px-5 py-4">3–5</td>
                <td className="px-5 py-4">Moderate</td>
                <td className="px-5 py-4">Low</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-bold text-primary">Disney+ Hotstar</td>
                <td className="px-5 py-4">4–6</td>
                <td className="px-5 py-4">Moderate</td>
                <td className="px-5 py-4">Low</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-bold text-primary">JioCinema</td>
                <td className="px-5 py-4">5–7</td>
                <td className="px-5 py-4">Moderate–High</td>
                <td className="px-5 py-4">Medium</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-bold text-primary">SonyLIV</td>
                <td className="px-5 py-4">5–7</td>
                <td className="px-5 py-4">High</td>
                <td className="px-5 py-4">Medium</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-5 py-4 font-extrabold text-primary">Amazon Prime</td>
                <td className="px-5 py-4 font-bold text-primary">7–11+</td>
                <td className="px-5 py-4 font-bold text-primary">High</td>
                <td className="px-5 py-4 font-bold text-primary">High (bundled)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 max-w-3xl">
          <Prose>
            Prime's path is roughly twice as long as a typical OTT and scores higher than anyone
            else for dark patterns. It's also the only one on the list where leaving costs you{' '}
            <em>shipping</em> too.
          </Prose>
        </div>
      </div>

      {/* Method */}
      <div className="mb-20">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="Method">Four lenses, stacked</SectionHeading>
          <Prose>
            We picked four methods on purpose. Any one of them has blind spots. Layering them made
            the findings harder to dismiss.
          </Prose>
        </div>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-100">
          <table className="w-full text-left text-sm min-w-[640px]">
            <thead className="bg-slate-50 text-primary">
              <tr>
                <th className="px-5 py-3 font-bold">Lens</th>
                <th className="px-5 py-3 font-bold">What it gave us</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-secondary font-medium">
              <tr>
                <td className="px-5 py-4 font-bold text-primary">HTA (Hierarchical Task Analysis)</td>
                <td className="px-5 py-4">Broke "cancel Prime" into atomic sub-tasks and exposed the forced handoff to the Shopping app</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-bold text-primary">Heuristic gap audit</td>
                <td className="px-5 py-4">Friction points scored by severity against Nielsen's heuristics</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-bold text-primary">SHERPA</td>
                <td className="px-5 py-4">Credible human errors predicted before testing, scored by Probability × Criticality</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-bold text-primary">Tobii eye-tracking + SUS</td>
                <td className="px-5 py-4">Gaze paths, heatmaps, time-on-task, and a standardised usability score</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-10">
          <ImageFigure
            src="/images/prime-hta-tree.png"
            alt="Hierarchical Task Analysis tree diagram"
            aspect="aspect-[16/9]"
            objectFit="contain"
          />
        </div>

        <div className="mt-10 max-w-3xl">
          <Prose>
            We tested with {bold('5 users between 18 and 30')}. When we asked them upfront how easy
            they'd rate Prime cancellation, the average was about 6.4 out of 10. Nobody called it
            easy. Most assumed the option would live somewhere in Profile or Settings. None of them
            were right.
          </Prose>
          <div className="h-4" />
          <Prose>
            We also ran a parallel survey with {bold('58 respondents')} in the same age range. The
            phrasing changed but the answer didn't: too much hassle, so I just kept paying.
          </Prose>
        </div>

        {/* Pull quote */}
        <figure className="mt-10 rounded-3xl bg-slate-50/70 border border-slate-100 p-8 md:p-12 text-center max-w-3xl mx-auto">
          <blockquote className="font-serif italic text-2xl md:text-3xl text-primary leading-snug">
            "Bahoot kich kich hai isliye rakh diya!"
          </blockquote>
          <figcaption className="mt-4 text-sm font-bold text-secondary">
            Survey respondent, age 24
          </figcaption>
        </figure>
      </div>

      {/* Five gaps */}
      <div className="mb-20">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="The findings">Five interface gaps</SectionHeading>
        </div>

        <div className="mt-8 mb-10">
          <DriveVideo
            fileId="1eajjmjz5QcrHZez9IyqzrJORFkKjs9PV"
            title="Cancellation journey: mobile screen recording"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {[
            {
              tag: 'HIGH',
              title: '1. Buried entry point',
              body: 'Cancel sits six taps deep. Sign-up takes one. The Account screen also looks almost identical to Home, so there\'s no signal you\'ve changed context. A "Subscriptions" option sits there pretending to be the right path. It isn\'t.',
            },
            {
              tag: 'MODERATE',
              title: '2. Misleading "Manage or cancel" label',
              body: 'It over-promises. The screen gives a renewal-notice toggle and a cancel link, then silently bounces you out to a browser. No warning. No auth continuity. No explanation of what cancelling will do.',
            },
            {
              tag: 'HIGH',
              title: '3. Guilt framing',
              body: 'On the way to the exit, the app shows a screen called "benefits you enjoyed." Loss aversion, deployed on purpose. A few participants visibly stalled when they hit this screen.',
            },
            {
              tag: 'HIGH',
              title: '4. Cancel hidden inside a collapsed row',
              body: 'The actual cancel action is buried inside a dropdown labelled "Manage membership, cancel and more." Wrong UI pattern for a destructive action. Users read it as a settings toggle and scroll right past.',
            },
            {
              tag: 'MODERATE',
              title: '5. Unclear outcome',
              body: 'The final confirmation never says when access ends, what you lose, or whether you can change your mind. You hit the last screen of an exhausting flow and now also have to guess what you just did.',
            },
          ].map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6"
            >
              <span
                className={`inline-block rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider ${
                  g.tag === 'HIGH'
                    ? 'bg-primary text-white'
                    : 'bg-slate-200 text-primary'
                }`}
              >
                {g.tag} severity
              </span>
              <h3 className="mt-3 font-bold text-primary text-lg leading-snug">{g.title}</h3>
              <p className="mt-3 text-sm text-secondary font-medium leading-relaxed">{g.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-3xl rounded-2xl border-l-4 border-primary bg-slate-50 p-6 md:p-8">
          <p className="font-serif text-xl md:text-2xl italic text-primary leading-snug">
            SHERPA called every one of these failure points before we ran a single eye-tracking
            session. The heatmaps then confirmed them, almost gaze for gaze.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <ImageFigure
            src="/images/prime-fake-entry-points.png"
            alt="Annotated Account screen showing fake entry points"
            aspect="aspect-[4/5]"
            objectFit="contain"
          />
          <ImageFigure
            src="/images/prime-benefits-enjoyed.png"
            alt='"Benefits you enjoyed" loss-aversion screen'
            aspect="aspect-[4/5]"
            objectFit="contain"
          />
        </div>

        <div className="mt-10">
          <ImageFigure
            src="/images/prime-sherpa.png"
            alt="SHERPA worksheet: predicted errors by probability and criticality"
            aspect="aspect-[16/9]"
            objectFit="contain"
          />
        </div>
      </div>

      {/* Redesign principles */}
      <div className="mb-20">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="Redesign">Four principles, not a re-skin</SectionHeading>
          <Prose>We didn't redesign the look. We redesigned the path.</Prose>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {[
            {
              title: '1. Symmetry of effort',
              body: "If sign-up takes three taps, cancel shouldn't take eleven.",
              fixes: 'Fixes Gap 1',
            },
            {
              title: '2. Honest labels',
              body: '"Cancel membership," said plainly. Drop the "…and more."',
              fixes: 'Fixes Gaps 2 & 4',
            },
            {
              title: '3. Neutral framing',
              body: 'Replace "benefits you enjoyed" with a factual summary of what ends, when it ends, and how to reverse it.',
              fixes: 'Fixes Gap 3',
            },
            {
              title: '4. A clear end-state',
              body: 'Show the exact date access stops. Send a confirmation email. Offer a real Undo for users who change their mind.',
              fixes: 'Fixes Gap 5',
            },
          ].map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6"
            >
              <h3 className="font-bold text-primary text-lg leading-snug">{p.title}</h3>
              <p className="mt-3 text-sm text-secondary font-medium leading-relaxed">{p.body}</p>
              <p className="mt-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                {p.fixes}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-3xl">
          <Prose>
            We also added an {bold('optional, skippable exit-feedback prompt')}. It never blocks the
            exit, so it adds no friction, but it gives the business a real signal about why someone
            is leaving. The argument is straightforward: you don't need dark patterns to learn why
            people churn. You just need to ask them after they've already left freely.
          </Prose>
        </div>

        <div className="mt-10">
          <DriveVideo
            fileId="1CWtbTP6Q-CmCkriJ9K9DIxyxrA7XwXmz"
            title="Redesigned cancellation flow: prototype walkthrough"
          />
        </div>
      </div>

      {/* Results */}
      <div className="mb-20">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="Results">What it moved</SectionHeading>
        </div>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-100">
          <table className="w-full text-left text-sm min-w-[720px]">
            <thead className="bg-slate-50 text-primary">
              <tr>
                <th className="px-5 py-3 font-bold">Metric</th>
                <th className="px-5 py-3 font-bold">Original</th>
                <th className="px-5 py-3 font-bold">Redesigned</th>
                <th className="px-5 py-3 font-bold">Δ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-secondary font-medium">
              <tr>
                <td className="px-5 py-4 font-bold text-primary">Average time-on-task</td>
                <td className="px-5 py-4">54.6s</td>
                <td className="px-5 py-4">26.8s</td>
                <td className="px-5 py-4 font-bold text-primary">~51% faster</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-bold text-primary">Taps to cancel</td>
                <td className="px-5 py-4">11</td>
                <td className="px-5 py-4">5</td>
                <td className="px-5 py-4 font-bold text-primary">−55%</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-bold text-primary">SUS score</td>
                <td className="px-5 py-4">38.5 / 100</td>
                <td className="px-5 py-4">92.0 / 100</td>
                <td className="px-5 py-4 font-bold text-primary">+139%</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-bold text-primary">SUS grade</td>
                <td className="px-5 py-4">F</td>
                <td className="px-5 py-4">A ("Excellent")</td>
                <td className="px-5 py-4">·</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 max-w-3xl">
          <Prose>
            Every single participant cancelled faster on the new flow. Every one of them rated it
            significantly more usable. And none of them noticed the absence of the dark patterns
            we'd pulled out.
          </Prose>
        </div>

        <div className="mt-10">
          <ImageFigure
            src="/images/prime-final-comparison.png"
            alt="Final comparison: original vs redesigned cancellation flow"
            aspect="aspect-[16/9]"
            objectFit="contain"
          />
        </div>

        <div className="mt-10">
          <DriveVideo
            fileId="1fKcpZdykhIj6aOQ03Va56v8unkvz6y-f"
            title="Original vs redesigned cancellation flow"
          />
        </div>
      </div>

      {/* Takeaways */}
      <div className="mb-20 max-w-3xl">
        <SectionHeading eyebrow="Takeaways">What I'd take into the next problem</SectionHeading>

        <ul className="space-y-6">
          {[
            ['Most friction is order, not absence', "The screens were already there. They were just stacked in a way designed to confuse. Labels and sequence did most of the damage."],
            ['SHERPA earned its reputation', 'Predicting failure modes on paper and then watching them play out frame by frame in eye-tracking was the most validating moment of the project.'],
            ['Users wanted honesty, not fewer screens', 'Nobody asked for a shorter flow. They asked for one that told them the truth.'],
            ['Triangulation is the ethics argument', "For a finding like this, one method isn't enough. Layering four is what made the case impossible to wave away."],
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

      {/* Limitations */}
      <div className="mb-20 max-w-3xl">
        <SectionHeading eyebrow="Limitations">What this didn't cover</SectionHeading>
        <Prose>
          Sample size is small (n=5), so the data is directional rather than statistical. We only
          audited mobile. The lab setting meant no real billing was at stake, so we couldn't
          capture genuine cancellation regret. Mobile eye-tracking is also fussier to calibrate
          than desktop, and we lost some data to that.
        </Prose>
        <div className="h-4" />
        <Prose>
          For next steps, I'd want to run the same protocol against Hotstar, SonyLIV and JioCinema
          for a proper cross-OTT benchmark, A/B test the redesign in a live environment, and find a
          way to actually {bold('quantify "dark-pattern intensity"')} so regulators have something
          to act on, not just describe.
        </Prose>
      </div>

      {/* Why on portfolio */}
      <div className="mb-20 max-w-3xl">
        <SectionHeading eyebrow="Why it's here">The methodology travels</SectionHeading>
        <Prose>
          The four-lens stack ({bold('HTA + Heuristic + SHERPA + eye-tracking + SUS')}) works on
          any flow with an exit problem. Onboarding. Paywalls. Account deletion. Plan downgrades.
          Anywhere a product makes leaving harder than arriving, this stack will surface why and
          where, before a single redesign decision gets made.
        </Prose>

        <div className="mt-10 rounded-2xl border-l-4 border-primary bg-slate-50 p-6 md:p-8">
          <p className="font-serif text-xl md:text-2xl italic text-primary leading-snug">
            Dark patterns are a design choice. So is the alternative.
          </p>
        </div>
      </div>

      <div className="mb-20">
        <div className="grid gap-6 md:grid-cols-2">
          <figure className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-50">
            <img
              src="/images/prime-eyetracking-1.png"
              alt="Moment during eye-tracking testing"
              className="h-full w-full object-cover"
            />
            <figcaption className="sr-only">Moment during eye-tracking testing</figcaption>
          </figure>
          <figure className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-50">
            <img
              src="/images/prime-eyetracking-2.png"
              alt="Moment during eye-tracking testing"
              className="h-full w-full object-cover"
            />
            <figcaption className="sr-only">Moment during eye-tracking testing</figcaption>
          </figure>
        </div>
        <p className="mt-4 text-center text-xs font-extrabold uppercase tracking-widest text-slate-400">
          Moments during eye-tracking testing
        </p>
      </div>

      {/* Footer meta */}
      <div className="mb-12 max-w-3xl border-t border-slate-100 pt-8">
        <div>
          <span className="font-bold text-slate-400 block uppercase text-xs tracking-wider">
            Tools
          </span>
          <span className="font-bold text-primary block mt-1">
            Figma · Tobii Pro Lab · Google Forms · SHERPA worksheet · Notion
          </span>
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
