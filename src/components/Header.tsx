import React, { useState, useEffect } from "react";

interface HeaderProps {
  currentPath: string;
  navigateTo: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, navigateTo }) => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about-me" },
  ];

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    setOpen(false);
    navigateTo(path);
  };

  useEffect(() => {
    setOpen(false);
  }, [currentPath]);

  const isActive = (path: string) =>
    currentPath.toLowerCase() === path.toLowerCase();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100/60 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, "/")}
          className="font-serif text-2xl font-bold tracking-tight text-primary transition-opacity hover:opacity-80"
        >
          KENDRE.
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={(e) => handleLinkClick(e, item.path)}
              className={`text-sm font-semibold transition-colors duration-200 ${
                isActive(item.path)
                  ? "text-primary"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {item.name}
            </a>
          ))}
          <a
            href="mailto:sauravsunilkendre@gmail.com"
            className="text-sm font-semibold text-secondary transition-colors duration-200 hover:text-primary"
          >
            Contact
          </a>
          <a
            href="/saurav_kendre_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-4 py-2 text-xs font-bold text-white transition-all duration-200 hover:bg-slate-800"
          >
            Download Resume
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md text-primary sm:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 sm:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleLinkClick(e, item.path)}
                className={`text-base font-semibold ${
                  isActive(item.path) ? "text-primary" : "text-secondary"
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="mailto:sauravsunilkendre@gmail.com"
              className="text-base font-semibold text-secondary"
            >
              Contact
            </a>
            <a
              href="/saurav_kendre_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit rounded-full bg-primary px-4 py-2 text-xs font-bold text-white"
            >
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
