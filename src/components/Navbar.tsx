/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShieldAlert, Award, FileText } from 'lucide-react';
import { ActiveTab } from '../types';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({ activeTab, setActiveTab, onScrollToSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    setActiveTab('main');
    // Allow React to switch tab to main first, then scroll
    setTimeout(() => {
      onScrollToSection(sectionId);
    }, 100);
  };

  const handleLegalClick = (tab: ActiveTab) => {
    setIsOpen(false);
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="top-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-bg/85 backdrop-blur-md py-4 border-b border-dark-border shadow-lg shadow-dark-bg/20'
          : 'bg-transparent py-6 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <div 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-3 cursor-pointer group"
            id="brand-logo"
          >
            <div className="relative w-10 h-10 rounded-lg bg-gradient-to-tr from-bogota-orange via-bogota-yellow to-gold flex items-center justify-center overflow-hidden shadow-md shadow-bogota-orange/20">
              <span className="font-display font-bold text-white text-lg tracking-tighter">FB</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-bogota-orange transition-colors duration-300">
                FERRETERÍA BOGOTANA
              </span>
              <span className="text-[10px] font-mono text-gray-400 tracking-widest uppercase">
                Calidad de Confianza • Bogotá
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
            <button
              onClick={() => handleNavClick('hero')}
              className={`px-4 py-2 rounded-full transition-all duration-300 hover:text-bogota-orange ${
                activeTab === 'main' ? 'text-white' : 'text-gray-300'
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => handleNavClick('nosotros')}
              className="px-4 py-2 rounded-full text-gray-300 hover:text-bogota-orange transition-all duration-300"
            >
              Nosotros
            </button>
            <button
              onClick={() => handleNavClick('productos')}
              className="px-4 py-2 rounded-full text-gray-300 hover:text-bogota-orange transition-all duration-300"
            >
              Portafolio
            </button>
            <button
              onClick={() => handleNavClick('galeria')}
              className="px-4 py-2 rounded-full text-gray-300 hover:text-bogota-orange transition-all duration-300"
            >
              Galería
            </button>
            <button
              onClick={() => handleNavClick('simulador')}
              className="px-4 py-2 rounded-full text-gray-300 hover:text-bogota-orange transition-all duration-300 flex items-center gap-1.5"
            >
              Simulador
            </button>
            <button
              onClick={() => handleLegalClick('contact')}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'contact' ? 'text-bogota-orange bg-white/5 font-semibold' : 'text-gray-300 hover:text-bogota-orange'
              }`}
            >
              Contacto
            </button>

            {/* Legal Dropdown or Simple Mini link */}
            <div className="h-4 w-[1px] bg-white/10 mx-2"></div>
            
            <button
              onClick={() => handleLegalClick('disclaimer')}
              className={`p-2 rounded-full text-gray-400 hover:text-white transition-colors duration-300 ${activeTab === 'disclaimer' ? 'text-white' : ''}`}
              title="Aviso Legal"
            >
              <ShieldAlert className="w-4 h-4" />
            </button>
          </nav>

          {/* CTA WhatsApp Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/573000000000?text=Hola%20Ferreter%C3%ADa%20Bogotana%2C%20quisiera%20solicitar%20asesor%C3%ADa%20t%C3%A9cnica%20para%20un%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-bogota-orange to-bogota-yellow hover:from-bogota-orange/90 hover:to-bogota-yellow/90 text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-2 shadow-lg shadow-bogota-orange/25 group border border-white/10"
              id="cta-whatsapp-nav"
            >
              <Phone className="w-4 h-4 transition-transform group-hover:rotate-12" />
              <span>Cotización Rápida</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-white transition-colors focus:outline-none"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-bg/95 border-b border-dark-border backdrop-blur-xl animate-fade-in py-6 px-4 flex flex-col gap-4">
          <button
            onClick={() => handleNavClick('hero')}
            className="text-left text-base font-medium text-gray-200 py-2 border-b border-white/5"
          >
            Inicio
          </button>
          <button
            onClick={() => handleNavClick('nosotros')}
            className="text-left text-base font-medium text-gray-200 py-2 border-b border-white/5"
          >
            Nosotros
          </button>
          <button
            onClick={() => handleNavClick('productos')}
            className="text-left text-base font-medium text-gray-200 py-2 border-b border-white/5"
          >
            Portafolio de Productos
          </button>
          <button
            onClick={() => handleNavClick('galeria')}
            className="text-left text-base font-medium text-gray-200 py-2 border-b border-white/5"
          >
            Galería del Proyecto
          </button>
          <button
            onClick={() => handleNavClick('simulador')}
            className="text-left text-base font-medium text-gray-200 py-2 border-b border-white/5"
          >
            Simulador de Construcción
          </button>
          <button
            onClick={() => handleLegalClick('contact')}
            className="text-left text-base font-medium text-gray-200 py-2 border-b border-white/5"
          >
            Contacto Directo
          </button>
          
          <div className="grid grid-cols-2 gap-2 pt-2">
            <button
              onClick={() => handleLegalClick('privacy')}
              className="text-xs text-left text-gray-400 hover:text-white py-1 flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" /> Privacidad
            </button>
            <button
              onClick={() => handleLegalClick('terms')}
              className="text-xs text-left text-gray-400 hover:text-white py-1 flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" /> Términos
            </button>
            <button
              onClick={() => handleLegalClick('cookies')}
              className="text-xs text-left text-gray-400 hover:text-white py-1 flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" /> Cookies
            </button>
            <button
              onClick={() => handleLegalClick('disclaimer')}
              className="text-xs text-left text-gray-400 hover:text-white py-1 flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" /> Aviso Legal
            </button>
          </div>

          <a
            href="https://wa.me/573000000000"
            className="mt-4 px-4 py-3 rounded-lg bg-orange-600 text-white font-semibold text-sm text-center flex items-center justify-center gap-2 shadow-lg shadow-orange-600/20"
          >
            <Phone className="w-4 h-4" />
            <span>Asesoría Directa WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}
