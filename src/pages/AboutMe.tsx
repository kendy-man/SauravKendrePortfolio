import React from 'react';

interface AboutMeProps {
  navigateTo: (path: string) => void;
}

// Featured YouTube video ID (https://youtu.be/QHu4QI06K4c).
const YOUTUBE_VIDEO_ID = 'QHu4QI06K4c';

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

const ImgPlaceholder: React.FC<{ label: string; aspect?: string; className?: string }> = ({
  label,
  aspect = 'aspect-[4/3]',
  className = '',
}) => (
  <div
    className={`flex ${aspect} w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-center ${className}`}
  >
    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
      Image placeholder
    </span>
    <span className="mt-2 text-sm font-bold text-primary leading-snug">{label}</span>
  </div>
);

export const AboutMe: React.FC<AboutMeProps> = ({ navigateTo }) => {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage: 'url(/images/about-me-bg.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
          backgroundSize: 'cover',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-gradient-to-b from-white/0 via-white/40 to-white"
      />

      <div className="animate-fade-in mx-auto max-w-3xl px-6 py-12 md:py-20">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">About</p>

          <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_minmax(220px,280px)] sm:items-end">
            <div>
              <h1 className="text-4xl font-black text-primary md:text-5xl lg:text-6xl tracking-tight leading-tight">
                I’m Saurav Kendre.
                <br />
                My friends call me{' '}
                <span className="font-serif italic font-normal text-primary">Kendy</span>.
              </h1>
            </div>
            <figure className="w-full max-w-[280px] mx-auto sm:mx-0">
              <img
                src="/images/about-me-photo.png"
                alt="Saurav Kendre"
                className="h-auto w-full object-contain"
              />
            </figure>
          </div>

          <div className="mt-8">
            <Prose>
              I'm a UXID designer based in Mumbai, but that's the easy half of the answer. The
              harder half is that I'm someone who doesn't sit still well. There's almost always a
              camera, a game, a half-built prototype, a debate, a cycle ride, or a cat demanding
              attention somewhere in the picture.
            </Prose>
            <div className="h-4" />
            <p className="text-base md:text-lg text-secondary font-medium italic">
              This page is the long version.
            </p>
          </div>
        </div>

        <hr className="my-12 border-slate-100" />

        {/* What I do */}
        <div className="mb-16">
          <SectionHeading eyebrow="What I actually do for a living">
            End to end. The awkward edge cases included.
          </SectionHeading>
          <div className="space-y-5">
            <Prose>
              I lead UI/UX at {bold('LogiNext')}, sole designer for a B2B SaaS product. End to end.
              Research, IA, interaction, UI, UAT — and the awkward edge cases nobody else wants to
              look at.
            </Prose>
            <Prose>
              On the side, I help friends vibe-code their ideas — product, design, AI architecture,
              business strategy. Many hats at once, more fun than expected.
            </Prose>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ['/images/work-moment-whiteboard.jpg', 'Whiteboard session at the office'],
              ['/images/work-moment-office.jpg', 'On-site at the office'],
              ['/images/work-moment-desk.jpg', 'At my desk, working late'],
            ].map(([src, alt]) => (
              <figure
                key={src}
                className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-100"
              >
                <img src={src} alt={alt} className="h-full w-full object-cover" />
              </figure>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border-l-4 border-primary bg-slate-50 p-6 md:p-8">
            <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-3">
              My one rule, for any project, with anyone
            </p>
            <p className="font-serif text-xl md:text-2xl italic text-primary leading-snug">
              The success of a project is built on good collaboration and being kind.
            </p>
            <p className="mt-4 text-sm text-secondary font-medium">
              That's it. That's the whole philosophy. Everything else is technique.
            </p>
          </div>
        </div>

        <hr className="my-12 border-slate-100" />

        {/* What I'm fixing */}
        <div className="mb-16">
          <SectionHeading eyebrow="The thing I’m trying to fix about myself">
            Focus and distribution.
          </SectionHeading>
          <Prose>
            I've been told my constraint isn't capability. It's focus and distribution. I can build
            the thing. I'm still learning to pick {bold('the')} thing and stand behind it long
            enough for it to matter. Says more about me than any skills list.
          </Prose>
        </div>
      </div>

      {/* Bento — full width breakout */}
      <div className="mx-auto max-w-6xl px-6 mb-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="The lives I run in parallel">
            Eight versions of the same person.
          </SectionHeading>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[minmax(180px,auto)]">
          {/* Designer */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xs lg:col-span-3">
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">01</p>
            <h3 className="mt-2 font-bold text-primary text-lg">Designer</h3>
            <p className="mt-2 text-sm text-secondary font-medium leading-relaxed">
              Five-ish years deep. Enterprise SaaS, consumer mobile, D2C. I care more about
              cognitive load and Norman's gulfs than the latest Figma plugin.
            </p>
          </div>

          {/* Student */}
          <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6 lg:col-span-3">
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">02</p>
            <h3 className="mt-2 font-bold text-primary text-lg">Student (still, at this age)</h3>
            <p className="mt-2 text-sm text-secondary font-medium leading-relaxed">
              ePG Diploma in Interaction Design at IIT Bombay, 2027. The moment you stop being a
              student is the moment you start being boring.
            </p>
          </div>

          {/* Photographer — large with media */}
          <div className="rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-xs sm:col-span-2 lg:col-span-4 lg:row-span-2 flex flex-col">
            <div className="flex-1 min-h-[260px] bg-slate-50">
              <img
                src="/images/photography-sample.jpg"
                alt="A photograph by Saurav Kendre — orange cosmos flower in golden light"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">03</p>
              <h3 className="mt-2 font-bold text-primary text-lg">Photographer</h3>
              <p className="mt-2 text-sm text-secondary font-medium leading-relaxed">
                Most weekends end behind a lens. Same discipline as design: pay close attention.
              </p>
            </div>
          </div>

          {/* Cyclist — with media */}
          <div className="rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-xs lg:col-span-2 flex flex-col">
            <div className="flex-1 min-h-[120px] bg-slate-50">
              <img
                src="/images/cycling-photo.jpg"
                alt="My bike, parked on a sandy trail at golden hour"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-5">
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">04</p>
              <h3 className="mt-1 font-bold text-primary text-base">Cyclist</h3>
              <p className="mt-1 text-xs text-secondary font-medium leading-relaxed">
                Good ideas arrive around km eight.
              </p>
            </div>
          </div>

          {/* Vibecoder */}
          <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6 lg:col-span-2">
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">05</p>
            <h3 className="mt-2 font-bold text-primary text-lg">Vibecoder</h3>
            <p className="mt-2 text-sm text-secondary font-medium leading-relaxed">
              If I can picture it clearly, I build a rough version before I talk myself out of it.
            </p>
          </div>

          {/* YouTube — embed, wide */}
          <div className="rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-xs sm:col-span-2 lg:col-span-6 flex flex-col md:flex-row">
            <div className="md:w-2/3 bg-black aspect-video md:aspect-auto md:min-h-[260px]">
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                title="Saurav Kendre — Featured video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
            <div className="md:w-1/3 p-6 flex flex-col justify-center">
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">06</p>
              <h3 className="mt-2 font-bold text-primary text-lg">YouTuber, on and off</h3>
              <p className="mt-2 text-sm text-secondary font-medium leading-relaxed">
                Thinking out loud about things that don't fit in a caption.
              </p>
              <a
                href="https://www.youtube.com/@sauravkendre02"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-xs font-bold text-primary underline underline-offset-4"
              >
                Visit channel ↗
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6 lg:col-span-3">
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">07</p>
            <h3 className="mt-2 font-bold text-primary text-lg">Curious about product</h3>
            <p className="mt-2 text-sm text-secondary font-medium leading-relaxed">
              Spent time on the other side of the table. Recommend it to every designer.
            </p>
          </div>

          {/* Debater */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xs lg:col-span-3">
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">08</p>
            <h3 className="mt-2 font-bold text-primary text-lg">Debater</h3>
            <p className="mt-2 text-sm text-secondary font-medium leading-relaxed">
              History, human behaviour, fashion, art. Bring me a question without a clean answer.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6">
        <hr className="my-12 border-slate-100" />

        {/* Off the clock — Gabriel */}
        <div className="mb-16">
          <SectionHeading eyebrow="Off the clock">Gabriel runs the house.</SectionHeading>
          <Prose>
            {bold('Gabriel runs the house.')} He's my cat. He approves of nothing, supervises
            everything, and has slept through every deadline I've ever had. Best roommate I've had.
          </Prose>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ['/images/gabriel-1.jpg', 'Gabriel, looking unimpressed as usual'],
              ['/images/gabriel-2.jpg', 'Gabriel, posed like he owns the place — because he does'],
            ].map(([src, alt]) => (
              <figure
                key={src}
                className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-100"
              >
                <img src={src} alt={alt} className="h-full w-full object-cover" />
              </figure>
            ))}
          </div>

          <div className="mt-8 space-y-5">
            <Prose>
              {bold('On the screen,')} I rewatch <em>Game of Thrones</em> more than is reasonable,
              hold <em>Black Mirror</em> up as the gold standard for "what if," let{' '}
              <em>The Big Bang Theory</em> play while having food, and laugh at <em>Family Guy</em>{' '}
              without apologising. I fantasize about the wizarding world.
            </Prose>
            <Prose>
              {bold('I collect certificates the way some people collect books.')} A pile of them,
              across UX, product, AI, and whatever rabbit hole I've fallen into that quarter.
            </Prose>
          </div>
        </div>

        <hr className="my-12 border-slate-100" />

        {/* Where I'm headed */}
        <div className="mb-16">
          <SectionHeading eyebrow="Where I’m headed">In ten years.</SectionHeading>
          <div className="space-y-5">
            <Prose>
              In ten years I want to be building {bold('my own idea')}. Something that's mine end
              to end, that creates real value, and that leaves a mark large enough to be worth the
              work.
            </Prose>
            <Prose>
              Everything I'm doing right now — the design lead role, the startup, the diploma, the
              certificates, the side projects, the photography, the conversations — is groundwork
              for that. I'm collecting range. Range is the only thing I've consistently bet on.
            </Prose>
          </div>
        </div>

        <hr className="my-12 border-slate-100" />

        {/* Certificates */}
        <div className="mb-16">
          <SectionHeading eyebrow="Certificates">A pile, and growing.</SectionHeading>
          <ul className="mt-6 divide-y divide-slate-100 rounded-2xl border border-slate-100 bg-white shadow-xs">
            {[
              ['ePG Diploma, Interaction Design', 'IDC School of Design, IIT Bombay', 'In progress · 2027'],
              ['Upraised Product Management', 'Upraised', 'May 2023'],
              ['Jio Certified Blockchain Professional', 'Jio Platforms', 'May 2023'],
              ['Using AI For Market Research', 'Coursera', 'May 2023'],
              ['Digital Product Management Specialization', 'University of Virginia Darden School of Business', 'Jan 2023'],
            ].map(([name, issuer, year], i) => (
              <li
                key={`${name}-${i}`}
                className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-bold text-primary text-sm">{name}</p>
                  <p className="text-xs text-secondary font-semibold mt-0.5">{issuer}</p>
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400">
                  {year}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <hr className="my-12 border-slate-100" />

        {/* CTA */}
        <div className="mb-12">
          <SectionHeading eyebrow="Want to talk?">
            Debate something with depth, hire me, or send me a photo of your cat.
          </SectionHeading>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              ['LinkedIn', 'https://www.linkedin.com/in/sauravkendre'],
              ['YouTube', 'https://www.youtube.com/@sauravkendre02'],
              ['Instagram', 'https://www.instagram.com/saurav.kendre/'],
              ['Email', 'mailto:sauravsunilkendre@gmail.com'],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/60 px-5 py-4 hover:bg-slate-100 transition-colors"
              >
                <span className="font-bold text-primary text-sm">{label}</span>
                <span className="text-primary text-base font-bold transition-transform group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="mailto:sauravsunilkendre@gmail.com"
              className="font-serif italic text-2xl md:text-4xl text-primary font-normal hover:text-slate-800 transition-colors underline underline-offset-8 decoration-1"
            >
              Get in touch.
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
    </div>
  );
};
