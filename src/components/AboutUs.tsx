/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Cpu, Leaf, Truck, Award, Eye, Compass, Workflow } from 'lucide-react';
import { TIMELINE_DATA, VALUES_DATA, STATS_DATA } from '../data';

// Map icon names from data to real Lucide icons
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck: ShieldCheck,
  Cpu: Cpu,
  Leaf: Leaf,
  Truck: Truck
};

export default function AboutUs() {
  return (
    <section 
      id="nosotros" 
      className="relative py-24 bg-dark-bg overflow-hidden tech-dots border-t border-dark-border"
    >
      <div className="absolute top-1/4 right-[10%] w-[30rem] h-[30rem] bg-gold/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="about-us-container">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono text-bogota-orange uppercase tracking-widest">
            HISTORIA Y VALORES CORPORATIVOS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3 tracking-tight">
            Pilares de la Ferretería Moderna
          </h2>
          <div className="w-16 h-1 bg-bogota-orange mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-5 text-sm sm:text-base">
            Fundada en Bogotá, representamos una combinación inquebrantable de tradición ferretera y procesos logísticos de avanzada.
          </p>
        </div>

        {/* COMPREHENSIVE TIMELINE */}
        <div className="mb-24" id="timeline-block">
          <div className="text-center mb-12">
            <h3 className="font-display font-semibold text-xl text-white">Nuestra Evolución</h3>
            <p className="text-xs text-gray-400 mt-1">Más de dos décadas impulsando el desarrollo urbano de la capital colombiana.</p>
          </div>

          <div className="relative border-l border-white/10 md:border-l-0 md:grid md:grid-cols-4 md:gap-8 gap-10 pl-6 md:pl-0">
            {TIMELINE_DATA.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative mb-8 md:mb-0"
              >
                {/* Horizontal line for desktop, bullet for mobile */}
                <div className="hidden md:block absolute -top-4 left-0 right-0 h-[2px] bg-white/10">
                  <div className="absolute top-[-4px] left-0 w-3.5 h-3.5 rounded-full bg-bogota-orange border-2 border-dark-bg glow-orange"></div>
                </div>
                <div className="md:hidden absolute left-[-31px] top-1 w-3.5 h-3.5 rounded-full bg-bogota-orange border-2 border-dark-bg glow-orange"></div>

                <div className="pt-2">
                  <span className="font-display font-extrabold text-2xl text-bogota-orange tracking-tight block">
                    {event.year}
                  </span>
                  <h4 className="text-base font-semibold text-white mt-1">
                    {event.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CORE CORPORATE VALUES */}
        <div className="mb-24" id="values-block">
          <div className="text-center mb-12">
            <h3 className="font-display font-semibold text-xl text-white">Principios Fundacionales</h3>
            <p className="text-xs text-gray-400 mt-1">Nuestra promesa ética en cada cargamento de acero o herramienta tecnológica.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES_DATA.map((val, idx) => {
              const IconComp = iconMap[val.iconName] || Award;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-xl glass-card text-left flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                      <IconComp className="w-5 h-5 text-bogota-orange" />
                    </div>
                    <h4 className="font-display font-semibold text-base text-white">
                      {val.title}
                    </h4>
                    <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* STATISTICS BOARD */}
        <div id="statistics-board" className="relative p-8 md:p-12 rounded-2xl glass-panel overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-bogota-orange/10 via-transparent to-transparent z-0"></div>
          
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {STATS_DATA.map((stat, idx) => (
              <div key={stat.id} className="text-center lg:text-left">
                <div className="font-display font-bold text-3xl md:text-4xl text-white flex items-center justify-center lg:justify-start">
                  <span>{stat.value}</span>
                  {stat.suffix && <span className="text-bogota-orange ml-1">{stat.suffix}</span>}
                </div>
                <div className="font-mono text-[10px] text-bogota-yellow uppercase tracking-widest mt-2">
                  {stat.label}
                </div>
                <p className="text-xs text-gray-400 mt-2 max-w-xs mx-auto lg:mx-0">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
