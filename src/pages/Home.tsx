import React from 'react';

interface HomeProps {
  navigateTo: (path: string) => void;
}

export const Home: React.FC<HomeProps> = ({ navigateTo }) => {
  const projects = [
    {
      id: 'amazon-prime-cancellation',
      title: 'Unsubscribing from Amazon Prime',
      category: 'Human Factors · UX Research',
      image: '/images/piXTO6xxF9ttNpvPptDDsk8JQU.png',
    },
    {
      id: 'updaing-cost-estimates',
      title: 'Updating Cost Estimates',
      category: 'Feature Updates',
      image: '/images/piXTO6xxF9ttNpvPptDDsk8JQU.png',
    },
    {
      id: 'helpcentre-website-design',
      title: 'Help Centre Website Design',
      category: 'Website Design',
      image: '/images/LI7d4N5GCHNpbVHwKlSlMmAB4.png',
    },
  ];

  const secondaryProjects = [
    {
      id: 'jiostream-studio',
      title: 'JioStream Studio',
      category: 'Product Design',
    },
    {
      id: 'jio-events',
      title: 'JioEvents',
      category: 'Product Design',
    },

    {
      id: 'pret-a-manger',
      title: 'Pret a Manger',
      category: 'Product Design',
    },
    {
      id: 'pret-loyalty',
      title: 'Pret Loyalty Research',
      category: 'User Research',
    },
    {
      id: 'visualdesign',
      title: 'Best of Visual Design',
      category: 'Visual Design',
    },
  ];

  return (
    <div className="animate-fade-in mx-auto max-w-5xl px-6 py-12 md:py-20">
      {/* Hero Section */}
      <section className="mb-20">
        <h1 className="text-4xl font-normal tracking-tight text-primary md:text-6xl lg:text-7xl leading-tight">
          My name is <span className="font-bold text-slate-900">Saurav K</span>,
          <br className="hidden sm:inline" />
          I’m a UX designer.
        </h1>
        <p className="mt-8 max-w-3xl text-lg md:text-xl text-secondary font-medium leading-relaxed">
          UX UI designer with <span className="font-bold text-primary">5+ years</span> of experience crafting intuitive, usable, and high-impact digital products. Strong background in <span className="font-bold text-primary">B2B product design</span>, with work spanning B2C platforms like JioPC, Tira Beauty, JioStream Studio (Tira), and Pret A Manger Loyalty. Actively leverage AI copilots & vibe coding to accelerate the process.
        </p>
      </section>

      {/* Projects Grid Section */}
      <section className="mb-24">
        <h2 className="sr-only">Selected Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => navigateTo(`/${project.id}`)}
              className="framer-card group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xs cursor-pointer"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-50">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-750 ease-out group-hover:scale-[1.03]"
                />
              </div>
              {/* Details */}
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-secondary">
                  {project.category}
                </p>
                <h3 className="mt-2 text-lg font-bold text-primary group-hover:text-slate-800 transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary projects (compact tiles, no cover image) */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {secondaryProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => navigateTo(`/${project.id}`)}
              className="framer-card group relative cursor-pointer rounded-xl border border-gray-100 bg-white p-5 shadow-xs"
            >
              <p className="text-[10px] font-bold uppercase tracking-wider text-secondary">
                {project.category}
              </p>
              <h3 className="mt-2 text-base font-bold text-primary group-hover:text-slate-800 transition-colors">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="mb-24 rounded-3xl bg-slate-50/50 border border-slate-100 p-8 md:p-12">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:text-left">
          {/* Avatar */}
          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-md">
            <img
              src="/images/aQ4umTSWEltlhuomeW8gava1Qw.jpeg"
              alt="Parth Anjaria"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Quote */}
          <div>
            <blockquote className="text-lg md:text-xl font-medium italic text-slate-800 leading-relaxed">
              "I had the pleasure of working closely with Saurav at Impact, where he showcased exceptional skills as a UI/UX designer. Saurav's passion for design is truly commendable, evident not only in his professional work but also in his keen eye for aesthetics."
            </blockquote>
            <div className="mt-6">
              <cite className="not-italic font-bold text-primary block">
                Parth Anjaria
              </cite>
              <span className="text-xs text-secondary font-semibold">
                Product Manager @ TripXOXO
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="text-center py-12 md:py-20 border-t border-slate-100">
        <h2 className="text-3xl font-extrabold text-primary md:text-5xl leading-tight">
          Let's get to know each other.
        </h2>
        <div className="mt-8">
          <a
            href="mailto:sauravsunilkendre@gmail.com"
            className="font-serif italic text-3xl md:text-5xl text-primary font-normal hover:text-slate-800 transition-colors underline underline-offset-8 decoration-1"
          >
            Get in touch.
          </a>
        </div>
      </section>
    </div>
  );
};
