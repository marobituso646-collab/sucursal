/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HardHat, Drill, Cpu, ArrowRight } from 'lucide-react';
import { HERO_IMAGE_URL } from '../data';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
  onNavigateToContact: () => void;
}

export default function Hero({ onScrollToSection, onNavigateToContact }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden tech-grid"
    >
      {/* Dynamic Background Mesh & Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-[40rem] h-[40rem] ambient-glow-1 rounded-full filter blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-20 w-[50rem] h-[50rem] ambient-glow-3 rounded-full filter blur-[150px] pointer-events-none"></div>
        <div className="absolute top-[40%] left-[60%] w-[35rem] h-[35rem] ambient-glow-2 rounded-full filter blur-[100px] pointer-events-none"></div>
        
        {/* Subtle grid pattern mask */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#07090e_90%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content Left */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left" id="hero-content">
            
            {/* Tagline / Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-6"
            >
              <ShieldCheck className="w-4 h-4 text-bogota-orange" />
              <span className="text-xs font-mono text-gray-300 tracking-wider">
                PROVEEDOR ESTRUCTURAL HOMOLOGADO • COLOMBIA
              </span>
            </motion.div>

            {/* Cinematic Headings */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-none mb-6"
            >
              Infraestructura que <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-bogota-orange via-bogota-yellow to-gold bg-clip-text text-transparent glow-text">
                Soporta el Futuro
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 max-w-xl font-normal leading-relaxed mb-8"
            >
              Ferretería Bogotana suministra herramientas de precisión de grado industrial y materiales de construcción certificados a gran escala. Diseñado para arquitectos, ingenieros civiles e instaladores técnicos que exigen resistencia certificada NSR-10.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
              id="hero-ctas"
            >
              <button
                onClick={() => onScrollToSection('productos')}
                className="px-8 py-4 rounded-lg bg-white hover:bg-gray-100 text-dark-bg font-semibold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl shadow-white/5 border border-white/10"
              >
                <span>Explorar Portafolio</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onNavigateToContact}
                className="px-8 py-4 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium text-sm tracking-wide transition-all duration-300 border border-white/10 hover:border-white/20 flex items-center justify-center gap-2"
              >
                <span>Solicitar Asesoría</span>
              </button>
            </motion.div>

            {/* Small Quick Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                  <HardHat className="w-4 h-4 text-bogota-orange" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-tight">Estructural</h4>
                  <p className="text-[10px] text-gray-400 font-mono">NSR-10 Norma</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                  <Drill className="w-4 h-4 text-bogota-yellow" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-tight">Equipos</h4>
                  <p className="text-[10px] text-gray-400 font-mono">Alta Precisión</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-tight">Sostenible</h4>
                  <p className="text-[10px] text-gray-400 font-mono">Material LEED</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Hero Visual Right */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex items-center justify-center" id="hero-graphic">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1 }}
              className="relative w-full max-w-md lg:max-w-none aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-dark-card/50"
            >
              {/* Animated mesh grid lines on visual wrapper */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/85 via-transparent to-transparent z-10"></div>
              
              <img
                src={HERO_IMAGE_URL}
                alt="Ferretería Bogotana high-tech industrial visual structure"
                className="w-full h-full object-cover grayscale-[35%] group-hover:scale-105 group-hover:grayscale-[0%] transition-all duration-1000 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Decorative Corner Borders */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-bogota-orange/70 z-20"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-bogota-orange/70 z-20"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-bogota-orange/70 z-20"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-bogota-orange/70 z-20"></div>

              {/* Holographic info badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel-heavy rounded-xl z-20 flex items-center justify-between border border-white/20">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-bogota-orange uppercase tracking-wider">SEDE PRINCIPAL</span>
                  <span className="text-white font-medium text-xs">Bogotá D.C. Calle 80</span>
                </div>
                <div className="px-2.5 py-1 rounded bg-bogota-orange/20 border border-bogota-orange/30 text-[10px] font-mono text-bogota-orange">
                  ACTIVO
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
