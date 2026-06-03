/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ArrowUpRight, CheckCircle2, Globe, Clock, MessageSquare, X } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS_DATA } from '../data';

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  // Filter logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((p) => {
      const categoryMatch = selectedCategory === 'all' || p.category === selectedCategory;
      const searchMatch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.specs.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section 
      id="productos" 
      className="relative py-24 bg-dark-bg/90 tech-grid border-t border-dark-border"
    >
      <div className="absolute top-1/2 left-0 w-[40rem] h-[40rem] bg-bogota-orange/5 rounded-full filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="catalog-container">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-bogota-orange uppercase tracking-widest">
            PORTAFOLIO DE ALTA ESPECIFICACIÓN
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3 tracking-tight">
            Materiales y Herramientas Inteligentes
          </h2>
          <div className="w-16 h-1 bg-bogota-orange mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-5 text-sm sm:text-base">
            Equipamiento original certificado y materias primas dosificadas bajo estándares de máxima tenacidad estructural.
          </p>
        </div>

        {/* SEARCH AND FILTER BAR */}
        <div className="mb-12 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 p-4 rounded-xl glass-panel border border-white/10">
          
          {/* Tabs Filter */}
          <div className="flex flex-wrap gap-2" id="family-filter-tabs">
            {['all', 'construction', 'tools', 'remodeling', 'industrial'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-bogota-orange to-bogota-yellow text-white shadow-md shadow-bogota-orange/20'
                    : 'text-gray-400 hover:text-white bg-white/5 hover:bg-white/10'
                }`}
              >
                {cat === 'all' && 'Todos'}
                {cat === 'construction' && 'Construcción'}
                {cat === 'tools' && 'Herramientas'}
                {cat === 'remodeling' && 'Remodelación'}
                {cat === 'industrial' && 'Soluciones Industriales'}
              </button>
            ))}
          </div>

          {/* Text Search Bar */}
          <div className="relative flex-1 max-w-md w-full lg:w-auto" id="search-input-wrapper">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-500" />
            </span>
            <input
              type="text"
              placeholder="Buscar por marca, especificación técnica..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-black/40 border border-white/10 hover:border-white/20 focus:border-bogota-orange focus:ring-1 focus:ring-bogota-orange text-xs text-white placeholder-gray-500 transition-all outline-none"
            />
          </div>

        </div>

        {/* INVENTORY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => setActiveProduct(product)}
                className="group rounded-2xl overflow-hidden glass-card flex flex-col justify-between hover:scale-[1.02] cursor-pointer"
              >
                
                {/* Product Static Header Image */}
                <div className="relative aspect-[4/3] bg-dark-bg overflow-hidden border-b border-white/5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-4 left-4 px-2.5 py-1 rounded bg-black/75 backdrop-blur-sm border border-white/10 text-[9px] font-mono text-bogota-orange font-bold uppercase tracking-wider">
                      {product.badge}
                    </span>
                  )}

                  {/* Category Pill */}
                  <span className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-white/10 text-[8px] font-semibold text-gray-300 uppercase tracking-widest">
                    {product.category === 'construction' && 'Materiales'}
                    {product.category === 'tools' && 'Herramientas'}
                    {product.category === 'remodeling' && 'Acabados'}
                    {product.category === 'industrial' && 'Industrial'}
                  </span>
                </div>

                {/* Info block */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{product.brand}</span>
                    <h3 className="font-display font-semibold text-base text-white mt-1.5 line-clamp-2 group-hover:text-bogota-orange transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2.5 line-clamp-3 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Specs Quick Preview */}
                  <div className="mt-5 pt-4 border-t border-white/5">
                    <div className="flex items-center justify-between text-[11px] font-mono text-gray-400">
                      <span>Origen: {product.origin.split('/')[0]}</span>
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-bogota-yellow" />
                        Stock {product.availability}
                      </span>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between text-xs text-bogota-orange font-semibold group-hover:translate-x-1 transition-transform">
                      <span>Ver Ficha Técnica</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                </div>

              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 px-4 rounded-xl border border-dashed border-white/10">
              <span className="text-gray-500 font-mono text-sm block">No se encontraron productos coincidentes</span>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 rounded bg-white/5 border border-white/10 text-xs text-white hover:bg-white/10 font-semibold"
              >
                Restablecer filtros
              </button>
            </div>
          )}
        </div>

        {/* DEEP SPECIFICATIONS MODAL / DRAWER */}
        {activeProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-2xl rounded-2xl glass-panel-heavy overflow-hidden border border-white/15 max-h-[90vh] overflow-y-auto">
              
              {/* Close Button */}
              <button
                onClick={() => setActiveProduct(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 border border-white/10 hover:border-white/20 text-gray-400 hover:text-white transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Header */}
              <div className="relative aspect-video w-full bg-dark-bg border-b border-white/10">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] font-mono text-bogota-orange uppercase tracking-wider">{activeProduct.brand}</span>
                  <h2 className="font-display font-bold text-xl sm:text-2xl text-white mt-1">{activeProduct.name}</h2>
                </div>
              </div>

              {/* Specs Details */}
              <div className="p-6 sm:p-8">
                
                <p className="text-sm text-gray-300 leading-relaxed mb-6 font-normal">
                  {activeProduct.description}
                </p>

                <h3 className="font-display font-bold text-xs text-white tracking-widest uppercase mb-3.5 border-b border-white/5 pb-2">
                  ESPECIFICACIONES DEL INGENIERO
                </h3>
                
                <ul className="space-y-2.5 mb-8">
                  {activeProduct.specs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-bogota-orange mt-0.5 shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>

                {/* Double Checked Information Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-white/5 border border-white/10 mb-8">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-gray-500 uppercase">Procedencia</span>
                    <span className="text-xs font-semibold text-white mt-1 flex items-center gap-1">
                      <Globe className="w-3.5 h-3.5 text-gray-400" />
                      {activeProduct.origin}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-gray-500 uppercase">Disponibilidad en Bogotá</span>
                    <span className="text-xs font-semibold text-white mt-1 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-bogota-yellow" />
                      Suministro {activeProduct.availability}
                    </span>
                  </div>
                  <div className="col-span-2 sm:col-span-1 flex flex-col">
                    <span className="text-[9px] font-mono text-gray-500 uppercase">Cumplimiento Legal</span>
                    <span className="text-xs font-semibold text-green-400 mt-1">Homologado NSR-10</span>
                  </div>
                </div>

                {/* Direct Action */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/573000000000?text=Hola%20Ferreter%C3%ADa%20Bogotana%2C%20solicito%20cotizaci%C3%B3n%20formal%20para%20el%20producto%3A%20${encodeURIComponent(activeProduct.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-5 rounded-lg bg-bogota-orange text-white text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Cotizar Formalmente</span>
                  </a>
                  <button
                    onClick={() => setActiveProduct(null)}
                    className="py-3 px-5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-gray-300 font-semibold uppercase tracking-wider border border-white/10 transition-colors"
                  >
                    Cerrar Detalle
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
