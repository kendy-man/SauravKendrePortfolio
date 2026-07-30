import React from 'react';

interface JioEventsProps {
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

const Slide: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <figure className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#1a0f2e] shadow-sm ring-1 ring-black/5">
    <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
  </figure>
);

const SlideStack: React.FC<{ slides: Array<{ src: string; alt: string }> }> = ({ slides }) => (
  <div className="space-y-6">
    {slides.map((s) => (
      <Slide key={s.src} src={s.src} alt={s.alt} />
    ))}
  </div>
);

const img = (n: string) => `/images/jioevents/${n}.png`;

export const JioEvents: React.FC<JioEventsProps> = ({ navigateTo }) => {
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
          Product Design · Enterprise SaaS
        </p>
        <h1 className="mt-3 text-4xl font-black text-primary md:text-5xl lg:text-6xl tracking-tight">
          JioEvents Revamp
        </h1>
        <p className="mt-6 max-w-3xl text-lg md:text-xl text-secondary font-medium leading-relaxed">
          Reimagining Jio&apos;s virtual events platform end to end. Taking a boilerplate meeting
          tool and turning it into something organisers, speakers, and attendees actually enjoy
          using.
        </p>
      </div>

      {/* Hero cover slide */}
      <div className="mb-16">
        <Slide src={img('7')} alt="JioEvents Revamp case study cover" />
      </div>

      {/* Quick-facts strip */}
      <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ['Role', 'Product Design Lead, leading a team of 4 designers'],
          ['Team', '1 Design Head, 1 Tech Lead, 1 CSM Lead, 3 PMs, 1 QA Lead'],
          ['Platform', 'JioEvents, built on top of JioMeet'],
          ['Timeline', '12 weeks, from research to evaluation'],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
              {label}
            </span>
            <p className="mt-2 text-sm font-bold text-primary leading-snug">{value}</p>
          </div>
        ))}
      </div>

      {/* Headline impact */}
      <div className="mb-20">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="TL;DR">Six months after launch</SectionHeading>
          <Prose>
            Organiser retention more than doubled. Event creation grew by almost half. The time it
            took a first-time organiser to publish an event dropped from over two days to under
            one. Both organisers and attendees rated the new experience noticeably higher.
          </Prose>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['+133%', 'Organiser retention (21% to 49%)'],
            ['+48%', 'Total events conducted (97 to 144)'],
            ['−50%', 'Time to publish first event (2.3d to 0.9d)'],
            ['+24 / +14', 'Organiser and attendee CSAT points'],
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

      {/* 01 · Overview (text-first with a single hero image) */}
      <div className="mb-20">
        <div className="mb-10 max-w-3xl">
          <SectionHeading eyebrow="01 · Overview">The project and my role</SectionHeading>
          <Prose>
            JioEvents is the virtual-events extension of {bold('JioMeet')}, Jio&apos;s meeting
            platform. Every month it serves 1300+ active organisers and roughly 1.5 to 2 lakh
            attendees, adding up to about 4 million cumulative attendee minutes.
          </Prose>
          <div className="h-4" />
          <Prose>
            It started life as a webinar mode bolted onto the meeting tool. That worked to get
            things off the ground, but it also meant the product looked and felt like a meeting
            room with an audience, not an event. Organisers were leaving after their first event.
            Attendees showed up, sat through, and left. Nobody hated it. Nobody loved it.
          </Prose>
          <div className="h-4" />
          <Prose>
            I led the redesign as {bold('Product Design Lead')}, running a team of four designers.
            Beyond leading the team, I owned research direction, solution definition, and hands-on
            UI execution across most of the modules. I also stayed close to engineering and PM
            through the build so that what shipped matched what we designed.
          </Prose>
        </div>

        <figure className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#1a0f2e] shadow-sm ring-1 ring-black/5">
          <img
            src="/images/jioevents/overview-hero.png"
            alt="From JioMeet to JioEvents: the virtual events surface built on top of Jio's meeting platform"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </figure>

        <div className="mt-10">
          <Slide src={img('9')} alt="My role and how the team was set up around the design lead" />
        </div>
      </div>

      {/* 02 · Approach */}
      <div className="mb-20">
        <div className="mb-8 max-w-3xl">
          <SectionHeading eyebrow="02 · Approach">A 12-week plan, five stages</SectionHeading>
          <Prose>
            Research and analysis, defining the problem, ideation and wireframing, UI design, and
            evaluation. Each stage had a concrete output that fed the next one, so we were never
            debating in the abstract.
          </Prose>
        </div>
        <Slide src={img('10')} alt="Execution plan: a 12-week timeline broken across five stages" />
      </div>

      {/* 03 · Research */}
      <div className="mb-20">
        <div className="mb-8 max-w-3xl">
          <SectionHeading eyebrow="03 · Research & Analysis">
            What worked, what hurt, and what the market was doing
          </SectionHeading>
          <Prose>
            Three tracks running in parallel. Stakeholder sessions to figure out what people
            genuinely liked about the current product (so we didn&apos;t accidentally break it).
            User interviews and CSM tracker data to surface where organisers and attendees were
            actually stuck. And a 125+ parameter sweep across Airmeet, Hopin, Hubilo, and BigMarker
            to see where the market was going.
          </Prose>
        </div>
        <SlideStack
          slides={[
            { src: img('11'), alt: 'What organisers loved about the product: trust, simplicity, streaming quality, sponsor value' },
            { src: img('12'), alt: 'Where users were stuck: customisation, engagement, networking, analytics, and the dull feel of it all' },
            { src: img('13'), alt: 'Competitor analysis across 125+ parameters vs Airmeet, Hopin, Hubilo, and BigMarker' },
          ]}
        />
      </div>

      {/* 04 · Personas */}
      <div className="mb-20">
        <div className="mb-8 max-w-3xl">
          <SectionHeading eyebrow="04 · Personas & Requirements">
            Three users, one platform
          </SectionHeading>
          <Prose>
            Whatever we built had to work equally well for the organiser setting up an event, the
            speaker delivering it, and the attendee sitting through it. Insights from interviews,
            personas, journey maps, and an audit of the old UI eventually mapped onto a shared set
            of requirements for each of them.
          </Prose>
        </div>
        <SlideStack
          slides={[
            { src: img('14'), alt: 'Redefined personas: Shristy the organiser, Dr. Rawat the speaker, Sohan the attendee' },
            { src: img('14a'), alt: 'Redesign requirements mapped to each of the three personas' },
          ]}
        />
      </div>

      {/* 05 · Organiser: Dashboard */}
      <div className="mb-20">
        <div className="mb-8 max-w-3xl">
          <SectionHeading eyebrow="05 · Organiser Journey">
            Shristy at the dashboard
          </SectionHeading>
          <Prose>
            The old dashboard basically offered two verbs: start an event, or download a report.
            Everything else took a click or three to find. The new home surfaces upcoming events,
            cross-event analytics, and a quick create action right on the first screen. Same
            organiser, a lot less hunting.
          </Prose>
        </div>
        <SlideStack
          slides={[
            { src: img('15'), alt: 'Old dashboard: event team hidden, no easy way to reuse assets from earlier events' },
            { src: img('16'), alt: 'Old dashboard: analytics buried inside each event, with no cross-event view' },
            { src: img('17a'), alt: 'What the new dashboard needed to do' },
            { src: img('17b'), alt: 'New dashboard: welcome state with quick create, schedule, and events analytics all in view' },
            { src: img('17c'), alt: 'Scheduled events with clear ongoing and upcoming states' },
            { src: img('17d'), alt: 'Overall events analytics visible right on the home' },
            { src: img('17e'), alt: 'Global left nav that ties every part of the platform together' },
          ]}
        />
      </div>

      {/* 06 · Organiser: Event Creation */}
      <div className="mb-20">
        <div className="mb-8 max-w-3xl">
          <SectionHeading eyebrow="06 · Organiser Journey">
            Event creation, first impressions
          </SectionHeading>
          <Prose>
            The old create-event modal was one cramped form and a slightly sad photo. The new flow
            splits it into basic and additional information, adds visual category chips, and treats
            event creation as a moment worth spending a bit of design on.
          </Prose>
        </div>
        <SlideStack
          slides={[
            { src: img('19'), alt: 'Old event creation: a small, boring modal that made a poor first impression' },
            { src: img('19b-1'), alt: 'New event creation: full-screen, categorised, and a lot more inviting' },
          ]}
        />
      </div>

      {/* 07 · Organiser: Setup */}
      <div className="mb-20">
        <div className="mb-8 max-w-3xl">
          <SectionHeading eyebrow="07 · Organiser Journey">
            Setup and customisation, organising the chaos
          </SectionHeading>
          <Prose>
            Setup was where organisers dropped off. Too many settings, no grouping, no sense of
            what belonged with what. I laid out every card the platform exposed, sorted them into
            four buckets (Event and Team, Setup, Customise, Content), and rebuilt the information
            architecture around those groups.
          </Prose>
        </div>
        <SlideStack
          slides={[
            { src: img('20'), alt: 'Old setup: a wall of toggles that overwhelmed the organiser' },
            { src: img('21'), alt: 'Card sort: every setting grouped into four coherent buckets' },
            { src: img('22'), alt: 'New global navigation reflecting the grouped information architecture' },
            { src: img('23'), alt: 'New in-event settings with clear cards, previews, and inline explanations' },
            { src: img('24'), alt: 'Setup screen detail' },
            { src: img('25'), alt: 'Setup screen detail' },
            { src: img('26'), alt: 'Setup screen detail' },
            { src: img('27'), alt: 'Setup screen detail' },
          ]}
        />
      </div>

      {/* 08 · Organiser: Live */}
      <div className="mb-20">
        <div className="mb-8 max-w-3xl">
          <SectionHeading eyebrow="08 · Organiser Journey">
            Live event, controls in reach
          </SectionHeading>
          <Prose>
            While the event is live, the organiser needs to nudge, moderate, and monitor without
            pulling attention away from the audience. The new live controls surface the fast
            actions right where the hand goes, and keep the rest tucked away until you ask for
            them.
          </Prose>
        </div>
        <SlideStack
          slides={[
            { src: img('28'), alt: 'Live event: starting layout wireframe' },
            { src: img('29'), alt: 'Live event: control affordances appearing on demand' },
            { src: img('30'), alt: 'Live event: moderation controls' },
            { src: img('31'), alt: 'Live event: engagement panel' },
            { src: img('32'), alt: 'Live event: final high-fidelity view' },
            { src: img('33'), alt: 'Live event: organiser view with sponsor rail' },
          ]}
        />
      </div>

      {/* 09 · Organiser: Post-event */}
      <div className="mb-20">
        <div className="mb-8 max-w-3xl">
          <SectionHeading eyebrow="09 · Organiser Journey">
            Post-event, closing the loop
          </SectionHeading>
          <Prose>
            The old flow ended with a &quot;download reports&quot; button and a folder full of
            PDFs. The new post-event surface tells a story instead: a summary, an engagement
            timeline, video snippets, and shareable takeaways. Designed to be read, not filed.
          </Prose>
        </div>
        <SlideStack
          slides={[
            { src: img('34'), alt: 'Old post-event: download the reports and figure it out yourself' },
            { src: img('35'), alt: 'New post-event: summary, engagement timeline, video snippets, and reports in one place' },
          ]}
        />
      </div>

      {/* 10 · Attendee */}
      <div className="mb-20">
        <div className="mb-8 max-w-3xl">
          <SectionHeading eyebrow="10 · Attendee Journey">
            Sohan: arrive, join, engage, connect
          </SectionHeading>
          <Prose>
            Attendees don&apos;t sign up for logistics. They sign up for the event. The new
            attendee flow leads with a branded landing page, opens straight into the main stage,
            and layers in networking, contests, and booths without ever getting in the way of what
            people came for.
          </Prose>
        </div>
        <SlideStack
          slides={[
            { src: img('36'), alt: 'Attendee flow: before' },
            { src: img('37'), alt: 'Attendee flow: landing detail' },
            { src: img('38'), alt: 'Attendee flow: event discovery' },
            { src: img('39'), alt: 'Attendee flow: registration' },
            { src: img('40'), alt: 'Attendee landing page: branded and engaging' },
            { src: img('41'), alt: 'Attendee flow: schedule check' },
            { src: img('42'), alt: 'Attendee flow: joining the main event' },
            { src: img('43'), alt: 'Attendee flow: sponsor rails and reactions' },
            { src: img('44'), alt: 'Attendee flow: engagement panel' },
            { src: img('44a'), alt: 'Attendee main stage: high-fidelity view with sponsors and reactions' },
            { src: img('45'), alt: 'Attendee flow: post-event follow up' },
          ]}
        />
      </div>

      {/* 11 · Did it work? (text-first) */}
      <div className="mb-20">
        <div className="mb-10 max-w-3xl">
          <SectionHeading eyebrow="11 · Did it work?">Measuring against the old product</SectionHeading>
          <Prose>
            To know whether the redesign actually moved the needle, we set up a clean before and
            after. Six months of pre-launch analytics, then six months of post-launch analytics,
            for the same set of metrics. Alongside that, {bold('user observations and interviews')}{' '}
            gave us the qualitative side of the story.
          </Prose>
          <div className="h-4" />
          <Prose>
            The metrics we cared about were the ones tied to the pain we&apos;d heard in research:
            organiser retention, number of events created, time to publish the first event, CSAT
            for both sides, and how much attendees were actually clicking during a live event.
          </Prose>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              label: 'Organiser Retention Rate',
              detail: 'Organisers who came back to run another event within six months.',
              before: '21%',
              after: '49%',
              delta: '+133%',
            },
            {
              label: 'Total Events Conducted',
              detail: 'Events created and run on the platform over six months.',
              before: '97 events',
              after: '144 events',
              delta: '+48%',
            },
            {
              label: 'Average Event Publish Time',
              detail: 'How long a new organiser took to publish their first event after signing up.',
              before: '2.3 days',
              after: '0.9 days',
              delta: '−50%',
            },
            {
              label: 'Attendee Interaction Rate',
              detail: 'Polls, chats, reactions, and comments per attendee per 60 mins of event.',
              before: '7 clicks',
              after: '11 clicks',
              delta: '+57%',
            },
            {
              label: 'Organiser CSAT',
              detail: 'Satisfaction rating (4+ out of 5) collected from organisers after each event.',
              before: '65%',
              after: '89%',
              delta: '+24 pts',
            },
            {
              label: 'Attendee CSAT',
              detail: 'Satisfaction rating (4+ out of 5) collected from attendees after each event.',
              before: '74%',
              after: '88%',
              delta: '+14 pts',
            },
          ].map((m) => (
            <div key={m.label} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xs">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Metric
                  </p>
                  <h3 className="mt-1 text-base font-extrabold text-primary leading-tight">
                    {m.label}
                  </h3>
                </div>
                <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-700">
                  {m.delta}
                </span>
              </div>
              <p className="mt-3 text-sm text-secondary font-medium leading-relaxed">
                {m.detail}
              </p>
              <div className="mt-5 flex items-center gap-4 border-t border-slate-100 pt-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Before
                  </p>
                  <p className="mt-1 text-base font-bold text-secondary">{m.before}</p>
                </div>
                <div className="text-slate-300" aria-hidden>
                  →
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    After
                  </p>
                  <p className="mt-1 text-base font-extrabold text-primary">{m.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 12 · Key Takeaways (text-first) */}
      <div className="mb-20">
        <div className="mb-8 max-w-3xl">
          <SectionHeading eyebrow="12 · Reflection">What I&apos;m taking with me</SectionHeading>
          <Prose>
            A revamp of this size only lands with tight planning, honest conversations with
            stakeholders, and a team that trusts each other enough to execute in parallel. Three
            things stuck with me.
          </Prose>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: 'Planning and execution',
              body:
                "A 12-week plan sounds like a lot of scaffolding until you're in week four and everyone knows what &quot;done&quot; means for the current stage. Time spent up front kept us out of loops later.",
            },
            {
              title: 'Stakeholder collaboration',
              body:
                "Product, engineering, CSM, and business each had their own version of what &quot;better&quot; meant. Getting to a shared version took real conversations, not just kickoff decks.",
            },
            {
              title: 'Team co-ordination',
              body:
                "Four designers moving in parallel needed clear ownership, one source of truth for the design system, and short daily loops so we caught drift before it compounded.",
            },
          ].map((t) => (
            <div key={t.title} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6">
              <h3 className="text-base font-extrabold text-primary leading-tight">{t.title}</h3>
              <p
                className="mt-3 text-sm text-secondary font-medium leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t.body }}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-3xl">
          <div className="rounded-2xl border-l-4 border-primary bg-slate-50 p-6 md:p-8">
            <p className="font-serif text-2xl md:text-3xl italic text-primary leading-snug">
              Make it exist first. Make it better later.
            </p>
            <p className="mt-3 text-base md:text-lg text-secondary font-medium">
              A note to my future self, more than a takeaway.
            </p>
          </div>
        </div>
      </div>

      {/* Back to projects */}
      <div className="mt-24 border-t border-slate-100 pt-8">
        <button
          onClick={() => navigateTo('/')}
          className="text-sm font-bold text-secondary hover:text-primary transition-colors cursor-pointer"
        >
          ← Back to Projects
        </button>
      </div>
    </div>
  );
};
