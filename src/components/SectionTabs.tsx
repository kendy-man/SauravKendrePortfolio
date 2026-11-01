import React, { useEffect, useRef, useState } from 'react';

export interface SectionTab {
  id: string;
  label: string;
}

interface SectionTabsProps {
  sections: SectionTab[];
  /** Optional trailing link, e.g. a prototype. Rendered at the end of the strip. */
  trailing?: { label: string; href: string };
  /** Layout and background of the bar. Defaults to bleeding into a px-6 page container. */
  className?: string;
  /** Classes for the inner strip, e.g. a max-width wrapper on full-bleed pages. */
  innerClassName?: string;
}

// Height of the sticky site header, so the tabs sit right under it.
const headerHeight = () => document.querySelector('body > #root header')?.getBoundingClientRect().height ?? 65;

/**
 * Sticky in-page section tabs with scroll-spy and a reading-progress bar.
 * Sections are matched by element id; the active tab is the last section whose
 * top has scrolled past the bar.
 */
export const SectionTabs: React.FC<SectionTabsProps> = ({
  sections,
  trailing,
  className = '-mx-6 px-6 bg-white/90',
  innerClassName = '',
}) => {
  const [active, setActive] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [top, setTop] = useState(65);
  const barRef = useRef<HTMLElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  const offset = () => top + (barRef.current?.offsetHeight ?? 48) + 16;

  useEffect(() => {
    const measure = () => setTop(headerHeight());
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = offset() + 8;
      let current: string | null = null;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= line) current = s.id;
      }
      setActive(current);

      const first = document.getElementById(sections[0]?.id);
      const doc = document.documentElement;
      const start = first ? first.getBoundingClientRect().top + window.scrollY - line : 0;
      const end = doc.scrollHeight - window.innerHeight;
      const p = end > start ? (window.scrollY - start) / (end - start) : 0;
      setProgress(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [sections, top]);

  // Keep the active tab visible inside the horizontally scrolling strip.
  useEffect(() => {
    const strip = stripRef.current;
    const tab = active ? strip?.querySelector<HTMLElement>(`[data-tab="${active}"]`) : null;
    if (!strip || !tab) return;
    const left = tab.offsetLeft - strip.clientWidth / 2 + tab.offsetWidth / 2;
    strip.scrollTo({ left, behavior: 'smooth' });
  }, [active]);

  const go = (e: React.MouseEvent, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - offset(),
      behavior: reduce ? 'auto' : 'smooth',
    });
    window.history.replaceState(null, '', `#${id}`);
  };

  // Honour a section hash on first load.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id || !sections.some((s) => s.id === id)) return;
    const align = () => {
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset() });
    };
    const t = window.setTimeout(align, 50);
    // Images above the section can shift it while they load; re-align once they have.
    if (document.readyState !== 'complete') window.addEventListener('load', align, { once: true });
    return () => {
      window.clearTimeout(t);
      window.removeEventListener('load', align);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav
      ref={barRef}
      aria-label="Sections"
      style={{ top }}
      className={`sticky z-40 border-b border-slate-200 backdrop-blur-md ${className}`}
    >
      <div
        ref={stripRef}
        className={`flex gap-1 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${innerClassName}`}
      >
        {sections.map((s) => {
          const isActive = s.id === active;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              data-tab={s.id}
              aria-current={isActive ? 'location' : undefined}
              onClick={(e) => go(e, s.id)}
              className={`flex-none whitespace-nowrap rounded-lg px-3 py-1.5 text-[13.5px] transition-colors duration-200 ${
                isActive
                  ? 'bg-slate-100 font-semibold text-primary'
                  : 'font-medium text-secondary hover:bg-slate-50 hover:text-primary'
              }`}
            >
              {s.label}
            </a>
          );
        })}
        {trailing && (
          <a
            href={trailing.href}
            target="_blank"
            rel="noopener"
            className="ml-auto flex-none whitespace-nowrap rounded-lg px-3 py-1.5 text-[13.5px] font-semibold text-primary underline-offset-4 hover:underline"
          >
            {trailing.label} ↗
          </a>
        )}
      </div>
      <div className="absolute inset-x-0 -bottom-px h-0.5" aria-hidden="true">
        <div
          className="h-full origin-left bg-primary"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
    </nav>
  );
};
