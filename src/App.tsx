/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Catalog from './components/Catalog';
import Gallery from './components/Gallery';
import InteractiveQuote from './components/InteractiveQuote';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import LegalModals from './components/LegalModals';
import { ActiveTab } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('main');

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavigateToContact = () => {
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-dark-bg selection:bg-bogota-orange selection:text-white" id="main-applet-shell">
      
      {/* Decorative ambient lighting across entire page */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[30%] left-[-10%] w-[45rem] h-[45rem] bg-bogota-orange/3 rounded-full filter blur-[180px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[55rem] h-[55rem] bg-gold/4 rounded-full filter blur-[200px]"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navigation bar, persistent across all pages */}
        <Navbar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          onScrollToSection={handleScrollToSection} 
        />

        {/* Content Router */}
        {activeTab === 'main' ? (
          <main className="flex-grow">
            
            {/* 1. Fullscreen Cinematic Hero Section */}
            <Hero 
              onScrollToSection={handleScrollToSection}
              onNavigateToContact={handleNavigateToContact}
            />

            {/* 2. Structured Brand / History Section */}
            <AboutUs />

            {/* 3. Products / High Precision Tools Catalog */}
            <Catalog />

            {/* 4. Cinematic Materials in Action Gallery */}
            <Gallery />

            {/* 5. Interactive Architectural Planner / Budget Calculator */}
            <InteractiveQuote />

            {/* 6. Authentic Testimonials Panel */}
            <Testimonials />

          </main>
        ) : (
          <main className="flex-grow">
            {/* Legal Pages & Forms Controller */}
            <LegalModals activeTab={activeTab} setActiveTab={setActiveTab} />
          </main>
        )}

        {/* Dynamic & Compliant Corporate Footer */}
        <Footer 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          onScrollToSection={handleScrollToSection} 
        />

      </div>
    </div>
  );
}
