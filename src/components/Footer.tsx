/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, HelpCircle, HardHat, ExternalLink } from 'lucide-react';
import { ActiveTab } from '../types';

interface FooterProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ activeTab, setActiveTab, onScrollToSection }: FooterProps) {
  
  const handleLegalClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (sectionId: string) => {
    setActiveTab('main');
    setTimeout(() => {
      onScrollToSection(sectionId);
    }, 100);
  };

  return (
    <footer 
      id="main-footer" 
      className="relative bg-dark-bg border-t border-dark-border pt-16 pb-8 overflow-hidden"
    >
      {/* Decorative ambient light */}
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-bogota-orange/5 rounded-full filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="footer-container">
        
        {/* TOP BLOCK: LOGO & CONTACT INFO & SCHEMATIC MAP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          
          {/* Column 1: Brand presentation (4 cols) */}
          <div className="lg:col-span-4 text-left">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-bogota-orange to-bogota-yellow flex items-center justify-center font-display font-bold text-white text-lg">
                FB
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base text-white tracking-widest leading-none">
                  FERRETERÍA BOGOTANA
                </span>
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest mt-1">
                  INGENIERÍA E INSUMOS S.A.S.
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              Suministramos materiales certificados bajo la norma sismorresistente NSR-10 y herramientas de alta especificación técnica de fabricantes líderes globales para proyectos de gran calado en Bogotá y Cundinamarca.
            </p>

            <div className="flex flex-col gap-2.5 text-xs text-gray-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-bogota-orange shrink-0" />
                <span>Avenida El Dorado # 69B - 10, Edificio Capital Towers, Bogotá</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-bogota-orange shrink-0" />
                <span>+57 (601) 980-8000 (Despachos Directos)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-bogota-orange shrink-0" />
                <span>contacto@ferreteriabogotana.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-bogota-yellow shrink-0" />
                <span>Lunes a Viernes: 7:00 AM - 5:30 PM • Sábados: 8:00 AM - 1:00 PM</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 text-left">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-widest mb-5 border-b border-white/5 pb-2">
              Secciones
            </h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li>
                <button onClick={() => handleNavClick('hero')} className="hover:text-bogota-orange transition-colors">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('nosotros')} className="hover:text-bogota-orange transition-colors">
                  Nosotros y Valores
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('productos')} className="hover:text-bogota-orange transition-colors">
                  Portafolio Técnico
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('galeria')} className="hover:text-bogota-orange transition-colors">
                  Galería de Proyectos
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('simulador')} className="hover:text-bogota-orange transition-colors">
                  Planificador Virtual
                </button>
              </li>
              <li>
                <button onClick={() => handleLegalClick('contact')} className="hover:text-bogota-orange transition-colors">
                  Contacto Comercial
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal Links (2 cols) */}
          <div className="lg:col-span-2 text-left">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-widest mb-5 border-b border-white/5 pb-2">
              Legales y Ads
            </h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li>
                <button onClick={() => handleLegalClick('privacy')} className="hover:text-bogota-orange transition-colors">
                  Política de Privacidad
                </button>
              </li>
              <li>
                <button onClick={() => handleLegalClick('cookies')} className="hover:text-bogota-orange transition-colors">
                  Política de Cookies
                </button>
              </li>
              <li>
                <button onClick={() => handleLegalClick('terms')} className="hover:text-bogota-orange transition-colors">
                  Términos de Negocio
                </button>
              </li>
              <li>
                <button onClick={() => handleLegalClick('disclaimer')} className="hover:text-bogota-orange transition-colors">
                  Aviso Jurídico
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Elegant High Tech Map Display (4 cols) */}
          <div className="lg:col-span-4 text-left flex flex-col justify-between">
            <div>
              <h4 className="font-display font-bold text-xs text-white uppercase tracking-widest mb-4 border-b border-white/5 pb-2">
                Sede Central Bogotá
              </h4>
              <p className="text-[11px] text-gray-400 leading-normal mb-3">
                Ubicados estratégicamente para envíos urgentes a obras en la Autopista Norte, Avenida El Dorado, Avenida Caracas y zonas periféricas como Soacha, Tocancipá y Chía.
              </p>
            </div>

            {/* Custom stylized map mock representation, dark futuristic mode */}
            <div className="w-full h-36 rounded-xl relative overflow-hidden bg-black/50 border border-white/10 flex items-center justify-center tech-dots">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              
              {/* Fake grid map trails */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-0 right-0 h-[2px] bg-white"></div>
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white"></div>
                <div className="absolute top-3/4 left-0 right-0 h-[2px] bg-white"></div>
                <div className="absolute left-1/3 top-0 bottom-0 w-[2px] bg-white"></div>
                <div className="absolute left-2/3 top-0 bottom-0 w-[1px] bg-white"></div>
              </div>

              {/* Glowing Target bogota pin */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-bogota-orange flex items-center justify-center animate-pulse">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>
                <span className="text-[9px] font-mono text-white tracking-widest font-bold bg-dark-bg/90 border border-white/15 px-2 py-0.5 rounded-full mt-2 uppercase shadow-lg">
                  Capital Towers
                </span>
                <span className="text-[8px] font-mono text-gray-400 tracking-wider">4.6545° N, 74.0945° W</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BLOCK: COPYRIGHTS & GOOGLE ADS TRANSPARENCY NOTICE */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono text-gray-400">
          <div>
            <p>© {new Date().getFullYear()} Ferretería Bogotana S.A.S. Todos los derechos reservados.</p>
            <p className="text-gray-500 mt-1">Superintendencia de Industria y Comercio - Registro de Comercio de Bogotá Colombia.</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 text-gray-500 max-w-sm text-right justify-end">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
              <span>Pauta Google Ads Transparente</span>
            </span>
            <span className="text-gray-600">|</span>
            <span>Estándar de Transparencia de Anuncios Seguro</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
