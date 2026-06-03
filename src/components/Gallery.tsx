/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image, Maximize2, X, MapPin, Eye } from 'lucide-react';

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  location: string;
  tag: 'Obras' | 'Materiales' | 'Acabados';
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    title: 'Edificio Capital Towers - Suministro de Acero Estructural',
    location: 'Avenida El Dorado, Bogotá',
    tag: 'Obras'
  },
  {
    id: 'g2',
    src: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=800',
    title: 'Vaciado de Concreto de Alta Fluidez en Muros Esbeltos',
    location: 'Calle 100 con 15, Bogotá',
    tag: 'Materiales'
  },
  {
    id: 'g3',
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    title: 'Piso Epóxico Autonivelante de Cuarzo en Leds Corporativos',
    location: 'Chicó Reservado, Bogotá',
    tag: 'Acabados'
  },
  {
    id: 'g4',
    src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200',
    title: 'Montaje de Red Hidráulica Termofusionada Inteligente',
    location: 'Parque Industrial Tocancipá, Bogotá Región',
    tag: 'Obras'
  },
  {
    id: 'g5',
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    title: 'Despacho Automatizado de Acero Grado 60 sismorresistente',
    location: 'Centro de Distribución Occidente, Bogotá',
    tag: 'Materiales'
  },
  {
    id: 'g6',
    src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800',
    title: 'Aislamiento Termoacústico en Panel de Fibra de Vidrio',
    location: 'Residencias Cerros de Suba, Bogotá',
    tag: 'Acabados'
  }
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'Todos' | 'Obras' | 'Materiales' | 'Acabados'>('Todos');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_ITEMS.filter(
    item => activeFilter === 'Todos' || item.tag === activeFilter
  );

  return (
    <section 
      id="galeria" 
      className="relative py-24 bg-dark-bg tech-dots border-t border-dark-border"
    >
      <div className="absolute top-1/3 right-10 w-[30rem] h-[30rem] bg-gold/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="gallery-container">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-bogota-orange uppercase tracking-widest">
            REGISTRO CINEMÁTICO DE OBRAS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3 tracking-tight">
            Nuestros Materiales en Acción
          </h2>
          <div className="w-16 h-1 bg-bogota-orange mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-5 text-sm sm:text-base">
            Una mirada inmersiva al soporte estructural, acabados de lujo y obras de ingeniería civil ejecutados en conjunto con Ferretería Bogotana.
          </p>
        </div>

        {/* MASONRY FILTER TABS */}
        <div className="flex justify-center gap-3 mb-12" id="gallery-filter-tabs">
          {(['Todos', 'Obras', 'Materiales', 'Acabados'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-white text-dark-bg font-semibold shadow-md'
                  : 'text-gray-400 hover:text-white bg-white/5 border border-white/5'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* GRID STRUCTURE */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          id="masonry-mesh"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="break-inside-avoid relative rounded-xl overflow-hidden glass-card cursor-pointer group scale-100 hover:scale-[1.015] border border-white/10"
              >
                {/* Visual frame */}
                <div className="relative overflow-hidden w-full h-auto">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-auto object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-[1.06] transition-all duration-[900ms] ease-out rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Glassmorphic Card Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 rounded-xl">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      
                      <span className="px-2 py-0.5 rounded bg-bogota-orange text-[8px] font-mono font-bold uppercase tracking-widest text-white">
                        {item.tag}
                      </span>
                      
                      <h3 className="font-display font-bold text-xs sm:text-sm text-white mt-2 leading-snug">
                        {item.title}
                      </h3>
                      
                      <p className="text-[10px] text-gray-300 font-mono mt-1 flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-bogota-yellow shrink-0" />
                        {item.location}
                      </p>
                      
                    </div>
                  </div>

                  {/* Corner indicator */}
                  <div className="absolute top-4 right-4 p-1.5 rounded-lg bg-black/60 border border-white/10 text-white/50 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* LIGHTBOX SLIDE OVER */}
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 animate-fade-in">
            
            {/* Close handler close clicks */}
            <div className="absolute inset-0" onClick={() => setLightboxIndex(null)}></div>
            
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors border border-white/10 z-20"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative max-w-4xl w-full z-10 flex flex-col items-center justify-center p-4">
              <img
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[75vh] max-w-full object-contain rounded-lg border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="mt-5 text-center max-w-2xl">
                <span className="px-2 py-0.5 rounded bg-bogota-orange/20 border border-bogota-orange/30 text-[9px] font-mono text-bogota-orange uppercase tracking-widest font-bold">
                  {filteredItems[lightboxIndex].tag}
                </span>
                <h3 className="font-display font-bold text-base text-white mt-2">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-gray-400 text-xs font-mono mt-1 flex items-center justify-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-bogota-yellow" />
                  {filteredItems[lightboxIndex].location}
                </p>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
