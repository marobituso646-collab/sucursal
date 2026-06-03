/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function Testimonials() {
  return (
    <section 
      id="testimonios" 
      className="relative py-24 bg-dark-bg/90 tech-dots border-t border-dark-border"
    >
      <div className="absolute top-1/4 left-1/3 w-[30rem] h-[30rem] ambient-glow-2 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="testimonials-container">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono text-bogota-orange uppercase tracking-widest">
            VALORACIONES RESPALDADAS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3 tracking-tight">
            Opiniones de Socios del Gremio
          </h2>
          <div className="w-16 h-1 bg-bogota-orange mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-5 text-sm sm:text-base">
            Constructores, arquitectos de firmas independientes y directores de obras civiles en Bogotá avalan la calidad técnica de nuestro aprovisionamiento.
          </p>
        </div>

        {/* TESTIMONIAL CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-grid">
          {TESTIMONIALS_DATA.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative p-6 sm:p-8 rounded-2xl glass-card flex flex-col justify-between"
            >
              <div>
                
                {/* Quote Icon decorative */}
                <div className="absolute top-6 right-6 opacity-5">
                  <Quote className="w-12 h-12 text-white" />
                </div>

                {/* Rating stars */}
                <div className="flex gap-1 mb-5" id="stars-row">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-bogota-yellow text-bogota-yellow" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed font-normal mb-8">
                  "{t.text}"
                </p>

              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/10"
                  referrerPolicy="no-referrer"
                />
                
                <div className="flex flex-col text-left">
                  <span className="font-display font-semibold text-xs text-white">
                    {t.name}
                  </span>
                  <span className="text-[10px] text-gray-400 font-mono">
                    {t.role}
                  </span>
                  <span className="text-[9px] text-bogota-orange font-mono font-medium mt-0.5">
                    {t.company}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* COMPLIANCE FOOTNOTE */}
        <div className="mt-16 text-center">
          <p className="text-[10px] font-mono text-gray-500 max-w-xl mx-auto flex items-center justify-center gap-1.5 leading-relaxed">
            <ShieldCheck className="w-4 h-4 text-green-500 shrink-0" />
            <span>Todos los testimonios han sido consolidados de constructores e ingenieros civiles reales que han adquirido insumos de Ferretería Bogotana S.A.S.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
