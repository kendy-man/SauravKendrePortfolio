import React from 'react';

interface VisualDesignProps {
  navigateTo: (path: string) => void;
}

const IMAGES: string[] = [
  '/images/MJIWsffd9wAHm4oFQ8e6mam0PQ.png',
  '/images/W0JjstUXgGS0h211bv08DieAuPo.png',
  '/images/zhRAju2wk0xP7hpABXQUv4xJlCc.png',
  '/images/AaKm915mVaarVxJwuifnHFvVU.png',
  '/images/evX6GNFMYNh9PyPTp9mP7KNEXSw.jpg',
  '/images/FXRh22Fgw9xnyfnAj7vkffBZP1w.png',
];

export const VisualDesign: React.FC<VisualDesignProps> = ({ navigateTo }) => {
  return (
    <div className="animate-fade-in mx-auto max-w-5xl px-6 py-12 md:py-20">
      <button
        onClick={() => navigateTo('/')}
        className="mb-8 flex items-center gap-2 text-sm font-bold text-secondary hover:text-primary transition-colors cursor-pointer"
      >
        ← Back to Projects
      </button>

      <header className="mb-12 max-w-3xl">
        <p className="text-sm font-extrabold uppercase tracking-wider text-secondary">
          Visual Design
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-black text-primary tracking-tight">
          Here's snapshots of some of my{' '}
          <span className="font-serif italic font-normal">visual design portfolio</span>.
        </h1>
      </header>

      <div className="columns-1 sm:columns-2 gap-6 [column-fill:_balance]">
        {IMAGES.map((src, idx) => (
          <div
            key={idx}
            className="mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-slate-100 bg-slate-50"
          >
            <img
              src={src}
              alt={`Visual design ${idx + 1}`}
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mt-20 text-center border-t border-slate-100 pt-16">
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
