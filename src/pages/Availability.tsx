import React, { useEffect, useRef, useState } from 'react';

interface AvailabilityProps {
  navigateTo: (path: string) => void;
}

export const Availability: React.FC<AvailabilityProps> = ({ navigateTo }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(760);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const resize = () => {
      try {
        const doc = iframe.contentWindow?.document;
        if (doc) {
          const h = doc.documentElement.scrollHeight || doc.body.scrollHeight;
          if (h) setHeight(h);
        }
      } catch {
        /* same-origin, so this should not throw; ignore if it ever does */
      }
    };

    iframe.addEventListener('load', resize);
    // The embedded page re-renders its clock on an interval and reflows on
    // viewport changes, so keep the frame height in step.
    const interval = window.setInterval(resize, 2000);
    window.addEventListener('resize', resize);
    resize();

    return () => {
      iframe.removeEventListener('load', resize);
      window.clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="animate-fade-in mx-auto max-w-5xl px-6 py-12 md:py-20">
      <button
        onClick={() => navigateTo('/')}
        className="mb-8 flex items-center gap-2 text-sm font-bold text-secondary hover:text-primary transition-colors cursor-pointer"
      >
        ← Back to Home
      </button>

      {/* Embedded, self-contained availability page */}
      <div className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/60 shadow-xs">
        <iframe
          ref={iframeRef}
          src="/availability.html"
          title="Saurav Kendre — interview availability"
          className="w-full"
          style={{ height, border: '0', display: 'block' }}
          scrolling="no"
        />
      </div>

      <div className="mt-12 text-center border-t border-slate-100 pt-16">
        <button
          onClick={() => navigateTo('/')}
          className="rounded-full bg-primary px-8 py-3 text-sm font-bold text-white hover:bg-slate-800 transition-colors cursor-pointer"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};
