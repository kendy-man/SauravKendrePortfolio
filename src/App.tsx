import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { AboutMe } from './pages/AboutMe';
import { ProjectDetail } from './pages/ProjectDetail';
import { VisualDesign } from './pages/VisualDesign';
import { AmazonPrime } from './pages/AmazonPrime';
import { CostEstimates } from './pages/CostEstimates';
import { HelpCentre } from './pages/HelpCentre';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState(null, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const renderPage = () => {
    const cleanPath = currentPath.toLowerCase();

    if (cleanPath === '/' || cleanPath === '') {
      return <Home navigateTo={navigateTo} />;
    }

    if (cleanPath === '/about-me') {
      return <AboutMe navigateTo={navigateTo} />;
    }

    const projectId = (currentPath.startsWith('/') ? currentPath.slice(1) : currentPath).toLowerCase();

    if (projectId === 'visualdesign') {
      return <VisualDesign navigateTo={navigateTo} />;
    }

    if (projectId === 'amazon-prime-cancellation') {
      return <AmazonPrime navigateTo={navigateTo} />;
    }

    if (projectId === 'updaing-cost-estimates') {
      return <CostEstimates navigateTo={navigateTo} />;
    }

    if (projectId === 'helpcentre-website-design') {
      return <HelpCentre navigateTo={navigateTo} />;
    }

    const projectKeys = [
      'jiostream-studio',
      'pret-a-manger',
      'pret-loyalty',
    ];

    if (projectKeys.includes(projectId)) {
      return <ProjectDetail projectId={projectId} navigateTo={navigateTo} />;
    }

    return <Home navigateTo={navigateTo} />;
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header currentPath={currentPath} navigateTo={navigateTo} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer navigateTo={navigateTo} />
      <Analytics />
    </div>
  );
}
