import React from "react";

interface FooterProps {
  navigateTo: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer className="w-full border-t border-gray-100 bg-white py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-secondary">
          © Saurav Kendre 2026
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/sauravkendre"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-secondary transition-colors duration-200 hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sauravsunilkendre@gmail.com"
            className="text-sm font-semibold text-secondary transition-colors duration-200 hover:text-primary"
          >
            Mail
          </a>
        </div>
      </div>
    </footer>
  );
};
