import React, { useEffect, useRef } from 'react';
import { SectionTabs } from '../components/SectionTabs';
import './loremiq.css';

interface LoremIQProps {
  navigateTo: (path: string) => void;
}

const PROTOTYPE = '/prototypes/loremiq-revenue-workspace.html';
const img = (name: string) => `/images/loremiq/${name}.webp`;

const sections = [
  { id: 'summary', label: 'Summary' },
  { id: 'people', label: 'Users' },
  { id: 'process', label: 'Process' },
  { id: 'colour', label: 'Colour and type' },
  { id: 'pipeline', label: 'Pipeline' },
  { id: 'preview', label: 'Deal preview' },
  { id: 'forecast', label: 'Forecast' },
  { id: 'states', label: 'States' },
  { id: 'responsive', label: 'Responsive' },
  { id: 'outcomes', label: 'Outcomes' },
];

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const Check = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

/** A zoomable screenshot. The link opens the full image without JS; the lightbox takes over with it. */
const Zoom: React.FC<{ name: string; w: number; h: number; alt: string; eager?: boolean }> = ({ name, w, h, alt, eager }) => (
  <a className="zoom" href={img(name)}>
    <img src={img(name)} width={w} height={h} alt={alt} loading={eager ? undefined : 'lazy'} decoding="async" />
  </a>
);

const Shot: React.FC<{
  name: string;
  w?: number;
  h?: number;
  alt: string;
  tag?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  eager?: boolean;
}> = ({ name, w = 2400, h = 1707, alt, tag, children, style, eager }) => (
  <figure className="shot" style={style}>
    <div className="frame">
      <Zoom name={name} w={w} h={h} alt={alt} eager={eager} />
    </div>
    {(tag || children) && (
      <figcaption>
        {tag}
        {children}
      </figcaption>
    )}
  </figure>
);

const Tag: React.FC<{ kind?: 'final' | 'no' | 'yes'; children: React.ReactNode }> = ({ kind, children }) => (
  <span className={kind ? `tag ${kind}` : 'tag'}>{children}</span>
);

// Pins are placed by fraction of the image, inside the frame's padding.
const pinPos = (f: number) => `calc(var(--pad) + (100% - 2 * var(--pad)) * ${f})`;
const Pin: React.FC<{ n: number; x: number; y: number }> = ({ n, x, y }) => (
  <span className="pin" style={{ left: pinPos(x), top: pinPos(y) }}>
    {n}
  </span>
);

export const LoremIQ: React.FC<LoremIQProps> = ({ navigateTo }) => {
  const lbRef = useRef<HTMLDialogElement>(null);
  const lbImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const prev = document.title;
    document.title = 'LoremIQ Revenue Workspace · Saurav Kendre';
    return () => {
      document.title = prev;
    };
  }, []);

  const onClick = (e: React.MouseEvent) => {
    const a = (e.target as HTMLElement).closest('a.zoom');
    const lb = lbRef.current;
    const lbImg = lbImgRef.current;
    if (!a || !lb || !lbImg || typeof lb.showModal !== 'function') return;
    e.preventDefault();
    const src = a.querySelector('img');
    lbImg.src = a.getAttribute('href') ?? '';
    lbImg.alt = src ? src.alt : '';
    lb.showModal();
  };

  return (
    <div className="cs-loremiq" onClick={onClick}>
      <header className="hero wrap">
        <button type="button" className="back" onClick={() => navigateTo('/')}>
          ← Back to Projects
        </button>
        <div className="eyebrow">
          <span>
            <b>Case study</b>
          </span>
          <span>LoremIQ</span>
          <span>Product design take-home</span>
          <span>Sep 2026</span>
        </div>
        <h1>One set of parts, two different questions</h1>
        <p className="lede">A revenue workspace where a sales rep and her manager each get their answer in ten seconds, from the same system.</p>
        <div className="ctas">
          <a className="btn btn-primary" href={PROTOTYPE} target="_blank" rel="noopener">
            Open the clickable prototype
            <Arrow />
          </a>
          <a className="btn" href="#pipeline">
            See the screens
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </a>
        </div>
        <dl className="meta">
          <div>
            <dt>Role</dt>
            <dd>Product designer, solo</dd>
          </div>
          <div>
            <dt>Timeline</dt>
            <dd>4 days</dd>
          </div>
          <div>
            <dt>Asked for</dt>
            <dd>3 screens, 1440 to 834</dd>
          </div>
          <div>
            <dt>Delivered</dt>
            <dd>24 boards, foundations, a clickable prototype</dd>
          </div>
        </dl>
        <Shot
          name="pipeline"
          eager
          style={{ marginTop: 36 }}
          alt="My Pipeline at 1440: quota attainment, gap to quota, coverage and needs attention above a deal table grouped by stage"
        />
        <p className="note">A take-home exercise for LoremIQ's product designer role. My own work, with sample data from the brief.</p>
      </header>

      <SectionTabs
        sections={sections}
        trailing={{ label: 'Prototype', href: PROTOTYPE }}
        className="bg-[#F6F6F8]/90"
        innerClassName="wrap"
      />

      <div>
        <section className="band wrap" id="summary">
          <p className="kicker">In 30 seconds</p>
          <h2>Dense revenue data that feels calm</h2>
          <div className="stack">
            <div className="g3 tldr">
              <div className="card">
                <span className="lbl">The brief</span>
                <h3>Two people, one laptop screen, a few minutes between meetings</h3>
                <p>A rep needs today's deals. Her manager needs the team's gap. Both open the product in passing.</p>
              </div>
              <div className="card">
                <span className="lbl">The approach</span>
                <h3>Read the numbers first, then cut</h3>
                <p>Every element had to change a decision. Colour marks only what needs action.</p>
              </div>
              <div className="card">
                <span className="lbl">The result</span>
                <h3>3 screens asked, 24 boards delivered</h3>
                <p>Every state, tablet and laptop, a full foundations sheet and a working prototype.</p>
              </div>
            </div>
            <div className="figs">
              <div>
                <span className="big">4 of 7</span>
                <p>KPIs kept on the rep's screen. The other three moved onto the bars that give them meaning.</p>
              </div>
              <div>
                <span className="big risk">38</span>
                <p>Vertex's health score. Her whole commit, and her first row by default.</p>
              </div>
              <div>
                <span className="big">$1.11M</span>
                <p>The gap no amount of upside closes. The first thing the manager sees.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="band wrap" id="people">
          <p className="kicker">Users</p>
          <h2>The data had a story before I drew anything</h2>
          <p className="sub">I worked through the sample numbers before opening Figma. Each person's first question was sitting in them.</p>
          <div className="g2 stack">
            <article className="persona">
              <div className="who">
                <span className="av" aria-hidden="true">PN</span>
                <div>
                  <b>Priya Nair</b>
                  <span>Account executive · 22 open deals</span>
                </div>
              </div>
              <p className="q">"What do I touch today?"</p>
              <dl className="facts">
                <dt>The data</dt>
                <dd>Her whole commit is one deal: Vertex, $310K, health 38, close date slipped twice.</dd>
                <dt>So</dt>
                <dd>Vertex is her first row by default, before she touches a filter.</dd>
              </dl>
            </article>
            <article className="persona">
              <div className="who">
                <span className="av" aria-hidden="true">DO</span>
                <div>
                  <b>Daniel Okafor</b>
                  <span>Sales manager · 7 reps · $8.4M target</span>
                </div>
              </div>
              <p className="q">"Where is the gap, and which deal is causing it?"</p>
              <dl className="facts">
                <dt>The data</dt>
                <dd>Even if every best-case deal closes, the team ends at 87%, still $1.11M short.</dd>
                <dt>So</dt>
                <dd>His screen leads with the gap, not attainment. It is about finding new commit.</dd>
              </dl>
            </article>
          </div>
        </section>

        <section className="band wrap" id="process">
          <p className="kicker">Process</p>
          <h2>How I worked</h2>
          <ol className="steps stack">
            <li>
              <span className="sn">01</span>
              <b>Principles</b>
              <p>Data-ink ratio, no redundant data, related numbers together, a Z-pattern scan. Target: a ten-second read.</p>
            </li>
            <li>
              <span className="sn">02</span>
              <b>Benchmark</b>
              <p>Stripe and Linear sandboxes for two days, four sessions a day. Jira for what to keep, Salesforce for what to avoid.</p>
            </li>
            <li>
              <span className="sn">03</span>
              <b>Iterate</b>
              <p>Screen 1 until the visual language was right, then Screens 2 and 3 on the same parts.</p>
            </li>
            <li>
              <span className="sn">04</span>
              <b>Scale with Claude</b>
              <p>Components, variables and edge-case boards built under rules I set. The ideas and the visual language are mine.</p>
            </li>
          </ol>
        </section>

        <section className="band wrap" id="colour">
          <p className="kicker">Colour and type</p>
          <h2>Colour only where it changes what someone does next</h2>
          <div className="stack">
            <div className="evo">
              <Shot name="direction-1" alt="Direction 1: green accent, green data bars, a flag on almost every row" tag={<Tag>Explored</Tag>}>
                <b>Direction 1</b>Green everywhere and a flag on most rows. Red meant nothing.
              </Shot>
              <Shot name="direction-2" alt="Direction 2: teal accent, stage grouping, health bars still coloured" tag={<Tag>Explored</Tag>}>
                <b>Direction 2</b>Teal accent and stage grouping. Health bars still coloured.
              </Shot>
              <Shot name="pipeline" alt="Final: indigo for actions, slate for data, red only for deals to act on today" tag={<Tag kind="final">Final</Tag>}>
                <b>Four colours, four jobs</b>Indigo to act, slate for data, red only for today.
              </Shot>
            </div>
            <div className="swatches" role="list" aria-label="Colour roles">
              <div className="sw" role="listitem">
                <i style={{ background: '#5B4FE0' }}></i>
                <div>
                  <b>Indigo</b>
                  <span>You can act on it</span>
                </div>
              </div>
              <div className="sw" role="listitem">
                <i style={{ background: '#334155' }}></i>
                <div>
                  <b>Slate</b>
                  <span>Data: bars, meters, segments</span>
                </div>
              </div>
              <div className="sw" role="listitem">
                <i style={{ background: '#B42318' }}></i>
                <div>
                  <b>Red</b>
                  <span>Act today: health under 50</span>
                </div>
              </div>
              <div className="sw" role="listitem">
                <i style={{ background: '#B54708' }}></i>
                <div>
                  <b>Amber</b>
                  <span>CRM sync failed. Only that.</span>
                </div>
              </div>
            </div>
            <p className="rule">A healthy deal is the normal state, so it gets no colour. That is what lets Vertex's 38 read from across the room.</p>
            <div className="numrules" aria-label="Number formatting rules">
              <div>
                <span className="v">$310,000</span>
                <span>Tables: full value</span>
              </div>
              <div>
                <span className="v">$742K</span>
                <span>Summaries: 3 significant figures</span>
              </div>
              <div>
                <span className="v">4.6×</span>
                <span>Ratios: one decimal</span>
              </div>
              <div>
                <span className="v">–</span>
                <span>Nothing to measure yet</span>
              </div>
            </div>
            <p className="sub" style={{ marginTop: 0 }}>
              Geist for words, Geist Mono for every number in a column, so amounts line up on the units. Seven sizes from 12 to 32, a 4px spacing base, 48px rows.
            </p>
            <div className="g2">
              <Shot name="foundations-colour-type" w={2000} h={2500} alt="Foundations: colour roles and the type scale" tag={<Tag kind="final">Final</Tag>}>
                Colour roles and the type scale.
              </Shot>
              <Shot name="foundations-components" w={2000} h={1569} alt="Foundations: every component with its states" tag={<Tag kind="final">Final</Tag>}>
                Every component with its states.
              </Shot>
            </div>
          </div>
        </section>

        <section className="band wrap" id="pipeline">
          <p className="kicker">Screen 1 · My Pipeline · Priya</p>
          <h2>Four KPIs instead of seven, and the riskiest deal first</h2>
          <div className="stack">
            <figure className="shot">
              <div className="frame">
                <Zoom name="pipeline" w={2400} h={1707} alt="My Pipeline with six numbered callouts" />
                <Pin n={1} x={0.1785} y={0.0742} />
                <Pin n={2} x={0.5014} y={0.0742} />
                <Pin n={3} x={0.834} y={0.0742} />
                <Pin n={4} x={0.3472} y={0.3076} />
                <Pin n={5} x={0.7937} y={0.291} />
                <Pin n={6} x={0.3681} y={0.4404} />
              </div>
            </figure>
            <ol className="legend">
              <li>
                <span className="n">1</span>
                <div>
                  <b>Commit and best case on one bar</b>
                  <span>Commit lands at 88%, $148K short. Best case clears it by $37K.</span>
                </div>
              </li>
              <li>
                <span className="n">2</span>
                <div>
                  <b>The gap names deals, not a bar</b>
                  <span>3 deals can still close by 30 Sep. Vertex is $310K of that.</span>
                </div>
              </li>
              <li>
                <span className="n">3</span>
                <div>
                  <b>Needs attention filters the table</b>
                  <span>4 deals, $749K at risk. "Show these 4" is one click.</span>
                </div>
              </li>
              <li>
                <span className="n">4</span>
                <div>
                  <b>What changed today</b>
                  <span>A quiet indigo dot on each updated row and a "4 new" toggle.</span>
                </div>
              </li>
              <li>
                <span className="n">5</span>
                <div>
                  <b>The default sort is the decision</b>
                  <span>Grouped by stage, needs attention first inside each group.</span>
                </div>
              </li>
              <li>
                <span className="n">6</span>
                <div>
                  <b>Vertex is row one</b>
                  <span>A close-date sort would show Northwind first. An amount sort would bury Lumen.</span>
                </div>
              </li>
            </ol>
            <div className="cut">
              <Tag kind="no">Cut</Tag>
              <p>
                <b>A progress bar on the gap tile.</b> Its track was the gap and commit filled it, so it emptied when a committed deal closed. It ran backwards on the best news.
              </p>
            </div>
            <Shot name="for-you" alt="The For you panel open over the pipeline" tag={<Tag kind="final">Final</Tag>}>
              "What changed without me doing anything?" The For you panel holds manager questions, suggestions to confirm and meeting prep.
            </Shot>
          </div>
        </section>

        <section className="band wrap" id="preview">
          <p className="kicker">Screen 2 · Deal preview</p>
          <h2>A panel, because the list is the point</h2>
          <p className="sub">Priya opens deals in a rhythm: open, read, close, next. Daniel drills down and can't lose his place. I tested four patterns against that.</p>
          <div className="stack">
            <div className="g4">
              <div className="opt">
                <div className="thumb">
                  <Zoom name="rejected-split" w={2400} h={1707} alt="Split view" />
                </div>
                <div className="body">
                  <span>
                    <Tag kind="no">Rejected</Tag>
                  </span>
                  <h3>Split view</h3>
                  <p>Left 624px for columns that need 974. The table reflowed on every open.</p>
                </div>
              </div>
              <div className="opt">
                <div className="thumb">
                  <Zoom name="rejected-dialog" w={2400} h={1707} alt="Centred dialog" />
                </div>
                <div className="body">
                  <span>
                    <Tag kind="no">Rejected</Tag>
                  </span>
                  <h3>Centred dialog</h3>
                  <p>Best read of one deal, but it covers the list. 22 deals means 22 close-and-reopens.</p>
                </div>
              </div>
              <div className="opt">
                <div className="thumb">
                  <span className="ph">
                    Full page
                    <br />
                    (no board kept)
                  </span>
                </div>
                <div className="body">
                  <span>
                    <Tag kind="no">Rejected</Tag>
                  </span>
                  <h3>Full page</h3>
                  <p>Lost the list, and Daniel's filter, halfway through a drill-down.</p>
                </div>
              </div>
              <div className="opt pick">
                <div className="thumb">
                  <Zoom name="deal-preview" w={2400} h={1707} alt="720px panel over the list" />
                </div>
                <div className="body">
                  <span>
                    <Tag kind="yes">Chosen</Tag>
                  </span>
                  <h3>720px panel over the list</h3>
                  <p>The list keeps its shape. The next deal is one key away.</p>
                </div>
              </div>
            </div>
            <Shot name="deal-preview" alt="Deal preview for Vertex Manufacturing Group, health 38" tag={<Tag kind="final">Final</Tag>}>
              Inside, the order is diagnosis, then commitment, then evidence: health and its reasons, the agreed next step, then the last call and stakeholders.
            </Shot>
            <div className="g2">
              <div className="wf" aria-label="How Vertex's health score is built">
                <h3>The why is bigger than the number</h3>
                <p className="sub2">Every deal in Negotiation starts at 75. Each signal moves it.</p>
                <div className="wf-rows">
                  <span className="lab">Start, Negotiation</span>
                  <span className="bar">
                    <span className="base" style={{ left: 0, width: '75%' }}></span>
                  </span>
                  <span className="val">75</span>
                  <span className="lab">Momentum</span>
                  <span className="bar">
                    <span className="down" style={{ left: '57%', width: '18%' }}></span>
                  </span>
                  <span className="val neg">−18</span>
                  <span className="lab">Engagement</span>
                  <span className="bar">
                    <span className="down" style={{ left: '45%', width: '12%' }}></span>
                  </span>
                  <span className="val neg">−12</span>
                  <span className="lab">Stakeholders</span>
                  <span className="bar">
                    <span className="down" style={{ left: '36%', width: '9%' }}></span>
                  </span>
                  <span className="val neg">−9</span>
                  <span className="lab">Stage age</span>
                  <span className="bar">
                    <span className="down" style={{ left: '30%', width: '6%' }}></span>
                  </span>
                  <span className="val neg">−6</span>
                  <span className="lab">Champion</span>
                  <span className="bar">
                    <span className="up" style={{ left: '30%', width: '8%' }}></span>
                  </span>
                  <span className="val">+8</span>
                  <span className="lab tot">Health</span>
                  <span className="bar">
                    <span className="end" style={{ left: 0, width: '38%' }}></span>
                  </span>
                  <span className="val r">38</span>
                </div>
              </div>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <h3>Designing the AI honestly</h3>
                <p style={{ margin: 0 }}>
                  Every signal says where it came from: <span className="chip">From CRM</span> for what a person entered, <span className="chip inf">Inferred</span> for the product's reading, with its source.
                </p>
                <ol className="flow" style={{ gridTemplateColumns: '1fr' }}>
                  <li>
                    <b>The AI reads the call</b>
                    <span>
                      <span className="strike">"Pricing is settled."</span> Inferred from transcript, 12:40.
                    </span>
                  </li>
                  <li>
                    <b>Priya says "No, correct it"</b>
                    <span>Her note replaces the AI's line, which stays visible, struck through.</span>
                  </li>
                  <li>
                    <b>Health recalculates in place</b>
                    <span className="scoreflip">
                      <s>41</s> → <strong>38</strong>
                    </span>
                  </li>
                </ol>
                <p style={{ margin: 0 }}>The score went down after her correction. It is there to be accurate, not kind.</p>
              </div>
            </div>
            <div className="g2">
              <Shot name="deal-healthy" alt="Healthy deal, Northwind at 82" tag={<Tag kind="final">Final</Tag>}>
                Healthy deal. Northwind at 82 reads calm, not bland.
              </Shot>
              <Shot name="deal-thin" alt="Thin data deal created two days ago" tag={<Tag kind="final">Final</Tag>}>
                Thin data. Two days old gets "Too early to score" and why, not a guess.
              </Shot>
            </div>
          </div>
        </section>

        <section className="band wrap" id="forecast">
          <p className="kicker">Screen 3 · Team forecast · Daniel</p>
          <h2>The pixel Daniel looks at first</h2>
          <div className="stack">
            <div
              className="fbar"
              role="img"
              aria-label="Team forecast against an $8.4M target: 49% closed, commit reaches 68%, best case reaches 87%, leaving $1.11M short"
            >
              <div className="fbar-top">
                <span>
                  Team target <b>$8.4M</b>
                </span>
                <span>
                  Best case lands at <b>87%</b>
                </span>
              </div>
              <div className="ftrack">
                <span className="c" style={{ width: '49%' }}></span>
                <span className="m" style={{ width: '19%' }}></span>
                <span className="b" style={{ width: '19%' }}></span>
                <span className="gap" style={{ width: '13%' }}></span>
              </div>
              <div className="fkey">
                <span>
                  <i style={{ background: 'var(--slate)' }}></i>Closed 49%
                </span>
                <span>
                  <i style={{ background: 'var(--slate-2)' }}></i>Commit to 68%
                </span>
                <span>
                  <i style={{ background: 'var(--slate-3)' }}></i>Best case to 87%
                </span>
                <span className="g">Dashed end: $1.11M short</span>
              </div>
            </div>
            <Shot name="forecast" alt="Team Forecast screen" tag={<Tag kind="final">Final</Tag>}>
              One bar, one comparison against Q2, a rep table sorted lowest projection first, and five deals worth a conversation.
            </Shot>
            <div className="g4">
              <div className="card">
                <span className="lbl">One comparison</span>
                <h3>13 points behind Q2 at the same week</h3>
                <p>The gap narrowed by $310K since last Monday.</p>
              </div>
              <div className="card">
                <span className="lbl">Awkward reps</span>
                <h3>One row format for all three</h3>
                <p>Grace ramping at $0, Tom below pace, Marcus past quota. No badges, just a status line.</p>
              </div>
              <div className="card">
                <span className="lbl">Falling numbers</span>
                <h3>−$40K in ink, not red</h3>
                <p>Red is saved for deals to act on today. A drop is information, not failure.</p>
              </div>
              <div className="card">
                <span className="lbl">Monday agenda</span>
                <h3>5 deals, $960K</h3>
                <p>"Worth a conversation", largest first, one line of why each.</p>
              </div>
            </div>
            <Shot name="forecast-drill" alt="Drilling into Tom's deals" tag={<Tag kind="final">Final</Tag>}>
              Drilling into Tom: the same table and preview Priya uses, filtered to one rep. Consistency broken on purpose in three places: his hero is the gap, his rep table is all numbers, his saved views are his own.
            </Shot>
          </div>
        </section>

        <section className="band wrap" id="states">
          <p className="kicker">States</p>
          <h2>Each state says one honest sentence</h2>
          <div className="stack">
            <Shot name="states" w={2800} h={1998} alt="Loading, empty, filtered to nothing and stale sync" />
            <div className="g4">
              <div className="card state">
                <span className="lbl">Loading</span>
                <q>Pulling your deals from Salesforce. This usually takes a few seconds.</q>
              </div>
              <div className="card state">
                <span className="lbl">Empty, new rep</span>
                <q>$0 is expected in your first weeks.</q>
                <p>Coverage shows a dash: not the same as 0×.</p>
              </div>
              <div className="card state">
                <span className="lbl">Filtered to nothing</span>
                <q>4 deals are in Negotiation and 1 is Stalled, but none is both.</q>
              </div>
              <div className="card state">
                <span className="lbl">Stale sync</span>
                <q>As of 6:52 AM</q>
                <p>Numbers stay visible, dated, under an amber banner.</p>
              </div>
            </div>
            <Shot name="zero-vs-failed" alt="Grace's real zero next to Tom's failed load" tag={<Tag kind="final">Final</Tag>}>
              Zero versus didn't load. Grace's $0 is real. Tom's failed load shows a dash, a Retry banner, and totals that say they leave him out.
            </Shot>
          </div>
        </section>

        <section className="band wrap" id="responsive">
          <p className="kicker">Responsive</p>
          <h2>Restructure, don't scroll</h2>
          <div className="g2 stack">
            <Shot name="laptop" h={1500} alt="Laptop 1280 with rail sidebar and bulk selection" tag={<Tag kind="final">1280</Tag>}>
              Chrome compresses before data does. The sidebar becomes a 56px rail and every column stays.
            </Shot>
            <Shot name="tablet" h={1570} alt="Tablet 834 with two-line rows and the preview as a sheet" tag={<Tag kind="final">834</Tag>}>
              Two-line 72px rows keep amount and health on screen. 44px targets, nothing on hover, the preview becomes a sheet.
            </Shot>
          </div>
        </section>

        <section className="band wrap" id="outcomes">
          <p className="kicker">Outcomes</p>
          <h2>What the design does for the two people it serves</h2>
          <p className="sub">No usage numbers on a take-home, so these are what I can stand behind.</p>
          <ul className="checks stack">
            <li>
              <Check />
              <div>
                <b>Seven KPIs became four</b>
                <span>Each ends in an answer, not a figure to interpret.</span>
              </div>
            </li>
            <li>
              <Check />
              <div>
                <b>Priya's first row is her biggest risk</b>
                <span>By default, before any filter.</span>
              </div>
            </li>
            <li>
              <Check />
              <div>
                <b>Daniel lands on the $1.11M</b>
                <span>The number that decides his Monday call.</span>
              </div>
            </li>
            <li>
              <Check />
              <div>
                <b>Colour means four things</b>
                <span>Red is rare enough to matter.</span>
              </div>
            </li>
            <li>
              <Check />
              <div>
                <b>The AI can be wrong in public</b>
                <span>Labelled, correctable, and the score follows the correction.</span>
              </div>
            </li>
            <li>
              <Check />
              <div>
                <b>24 boards and a prototype</b>
                <span>Every state and edge case, clickable from KPI to filtered list to preview.</span>
              </div>
            </li>
          </ul>
          <div className="cut" style={{ marginTop: 28 }}>
            <Tag>Next</Tag>
            <p>
              <b>Wrap text, found in Stripe.</b> Names truncate by default because even rows scan fastest. The spec is written: wrap to two lines, numbers never wrap, the setting saves with the view. I ran out of time to draw it.
            </p>
          </div>

          <div className="ctaband">
            <div>
              <h2>Click through it yourself</h2>
              <p>Switch between Priya and Daniel, open a deal, correct the AI and watch the score move. Best on a laptop: it is the 1440 design scaled to fit.</p>
            </div>
            <a className="btn btn-primary" href={PROTOTYPE} target="_blank" rel="noopener">
              Open the prototype
              <Arrow />
            </a>
          </div>
        </section>
      </div>

      <div className="wrap">
        <div className="credit">
          <span>Saurav Kendre · Product designer</span>
          <span>Designed in Figma and on a code canvas with Claude. Sample data from the brief.</span>
        </div>
      </div>

      <dialog
        className="lb"
        ref={lbRef}
        aria-label="Screenshot, full size"
        onClick={(e) => {
          if (e.target === lbRef.current) lbRef.current?.close();
        }}
      >
        <button type="button" onClick={() => lbRef.current?.close()}>
          Close
        </button>
        <img ref={lbImgRef} src={undefined} alt="" />
      </dialog>
    </div>
  );
};
