/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Calculator, HardHat, ShieldCheck, Mail, ArrowRight, MessageSquare, Info, Hammer, Sparkles, CheckCircle } from 'lucide-react';

interface MaterialOption {
  id: string;
  name: string;
  unit: string;
  unitPrice: number;
  weightPerUnitKg: number; // in Kilograms
  nsr10Compliant: boolean;
}

const MATERIALS_DATABASE: Record<string, MaterialOption[]> = {
  estructural: [
    { id: 'm1', name: 'Barra de Acero Reforzado Grado 60 (Estándar NSR-10)', unit: 'Tonelada', unitPrice: 4200000, weightPerUnitKg: 1000, nsr10Compliant: true },
    { id: 'm2', name: 'Concreto Autocompactante F70 HighFlow (7000 PSI)', unit: 'Metro Cúbico', unitPrice: 380000, weightPerUnitKg: 2400, nsr10Compliant: true },
    { id: 'm3', name: 'Malla Electrosoldada de Alta Tenacidad', unit: 'Unidad', unitPrice: 85000, weightPerUnitKg: 18, nsr10Compliant: true }
  ],
  acabados: [
    { id: 'm4', name: 'Piso Epóxico Polimérico de Cuarzo Premium', unit: 'Metro Cuadrado', unitPrice: 125000, weightPerUnitKg: 4, nsr10Compliant: true },
    { id: 'm5', name: 'Panel Termoacústico de Fibra de Vidrio', unit: 'Unidad', unitPrice: 62000, weightPerUnitKg: 6, nsr10Compliant: true },
    { id: 'm6', name: 'Pintura Acrílica Mate de Alta Lavabilidad', unit: 'Galón', unitPrice: 110000, weightPerUnitKg: 5, nsr10Compliant: true }
  ],
  industrial: [
    { id: 'm7', name: 'Tubería de Termofusión IPS-Fusion PN20', unit: 'Tubo (6m)', unitPrice: 74000, weightPerUnitKg: 8, nsr10Compliant: true },
    { id: 'm8', name: 'Válvula de Esfera de Alta Presión Comprimida', unit: 'Unidad', unitPrice: 185000, weightPerUnitKg: 2.5, nsr10Compliant: true }
  ]
};

export default function InteractiveQuote() {
  const [projectType, setProjectType] = useState<'estructural' | 'acabados' | 'industrial'>('estructural');
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>('m1');
  const [quantity, setQuantity] = useState<number>(10);
  const [isSent, setIsSent] = useState<boolean>(false);
  const [leadName, setLeadName] = useState<string>('');
  const [leadPhone, setLeadPhone] = useState<string>('');

  // Auto-switch material on projectType change
  const currentOptions = MATERIALS_DATABASE[projectType];
  const activeMaterial = useMemo(() => {
    const found = currentOptions.find(m => m.id === selectedMaterialId);
    if (found) return found;
    // fallback if types mismatch
    return currentOptions[0];
  }, [projectType, selectedMaterialId, currentOptions]);

  const totalCost = useMemo(() => {
    return activeMaterial ? activeMaterial.unitPrice * quantity : 0;
  }, [activeMaterial, quantity]);

  const totalWeightTon = useMemo(() => {
    if (!activeMaterial) return 0;
    return (activeMaterial.weightPerUnitKg * quantity) / 1000;
  }, [activeMaterial, quantity]);

  const handleTypeChange = (type: 'estructural' | 'acabados' | 'industrial') => {
    setProjectType(type);
    setSelectedMaterialId(MATERIALS_DATABASE[type][0].id);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName) return;
    setIsSent(true);
  };

  return (
    <section 
      id="simulador" 
      className="relative py-24 bg-dark-bg/95 tech-grid border-t border-dark-border"
    >
      <div className="absolute top-2/3 right-1/4 w-[30rem] h-[30rem] bg-bogota-yellow/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="quote-container">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-bogota-orange uppercase tracking-widest">
            SIMULADOR TÉCNICO INTERACTIVO
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3 tracking-tight">
            Planificador de Estructuras y Acabados
          </h2>
          <div className="w-16 h-1 bg-bogota-orange mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-5 text-sm sm:text-base">
            Estime cargas físicas, volumen y costos base aproximados para su desarrollo comercial o residencial en Bogotá. No requiere registro para simular.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* SIMULATOR CONTROLS - LEFT (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl glass-panel p-6 sm:p-8 border border-white/10" id="simulator-left">
            
            <h3 className="font-display font-bold text-lg text-white mb-6 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-bogota-orange" />
              <span>Configuración del Insumo</span>
            </h3>

            {/* 1. Project Type Selector */}
            <div className="mb-6">
              <label className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-2">
                1. Selección del Sector
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['estructural', 'acabados', 'industrial'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handleTypeChange(type)}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                      projectType === type
                        ? 'bg-bogota-orange/15 border border-bogota-orange text-white'
                        : 'bg-white/5 border border-white/5 text-gray-400 hover:text-white'
                    }`}
                  >
                    {type === 'estructural' ? 'Estructura' : type === 'acabados' ? 'Acabados' : 'Industrial'}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Material Selector */}
            <div className="mb-6">
              <label className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-2">
                2. Tipo de Material Certificado
              </label>
              <select
                value={selectedMaterialId}
                onChange={(e) => setSelectedMaterialId(e.target.value)}
                className="w-full bg-black/40 border border-white/10 focus:border-bogota-orange text-xs text-white p-3 rounded-lg outline-none"
              >
                {currentOptions.map((opt) => (
                  <option key={opt.id} value={opt.id} className="bg-dark-card text-white">
                    {opt.name} ({opt.unit})
                  </option>
                ))}
              </select>
            </div>

            {/* 3. Slider Quantity */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                  3. Volumen / Cantidad Requerida
                </label>
                <span className="text-white font-mono text-xs font-bold bg-white/5 px-2.5 py-1 rounded border border-white/10">
                  {quantity} {activeMaterial?.unit}s
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="250"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-bogota-orange"
              />
              <div className="flex justify-between items-center text-[10px] text-gray-500 font-mono mt-2">
                <span>Min: 1 {activeMaterial?.unit}</span>
                <span>Max: 250 {activeMaterial?.unit}s</span>
              </div>
            </div>

            {/* Dynamic specs summary details card */}
            {activeMaterial && (
              <div className="p-4 rounded-xl bg-orange-500/5 border border-bogota-orange/15 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-bogota-orange/15 flex items-center justify-center shrink-0">
                  <HardHat className="w-4 h-4 text-bogota-orange" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Homologación Sismorresistente</h4>
                  <p className="text-[11px] text-gray-400 leading-normal mt-1">
                    Este material ({activeMaterial.name}) cumple rigurosamente con los coeficientes exigidos por la oficina de planeación urbana de Bogotá DF.
                  </p>
                </div>
              </div>
            )}

          </div>

          {/* SIMULATOR METRIQUES - RIGHT (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6" id="simulator-right">
            
            {/* Dynamic Results Card */}
            <div className="rounded-2xl glass-panel-heavy p-6 sm:p-8 border border-white/15 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-bogota-orange/5 rounded-full filter blur-2xl pointer-events-none"></div>

              <span className="text-[9px] font-mono text-bogota-orange uppercase tracking-widest font-extrabold block">
                Métricas Calculadas en Tiempo Real
              </span>
              
              <h3 className="font-display font-medium text-lg text-white mt-1.5 mb-6">
                Presupuesto Estimado de Obra
              </h3>

              {/* Stat 1: Estimated Cost */}
              <div className="mb-5 pb-5 border-b border-white/5">
                <span className="text-[10px] text-gray-500 font-mono uppercase block">Costo Base Suministrado</span>
                <span className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mt-1 ml-0 block">
                  $ {totalCost.toLocaleString('es-CO')} <span className="text-xs text-gray-400 font-normal">COP</span>
                </span>
                <span className="text-[9px] font-mono text-gray-400 leading-none mt-1.5 block">
                  *Precio referencial sujeto a descuentos por volumen comercial.
                </span>
              </div>

              {/* Stat 2: Estimated Weight */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[9px] text-gray-500 font-mono uppercase block">Carga Logística Total</span>
                  <span className="text-lg font-bold text-white mt-1 block">
                    {totalWeightTon.toFixed(2)} <span className="text-xs text-gray-400 font-normal">Ton</span>
                  </span>
                </div>
                <div>
                  <span className="text-[9px] text-gray-500 font-mono uppercase block">Norma de Seguridad</span>
                  <span className="text-xs font-semibold text-green-400 mt-2.5 flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-green-400" />
                    <span>NSR-10 Ok</span>
                  </span>
                </div>
              </div>

            </div>

            {/* Quick Contact Form inside Simulator, Google Ads Safe and Compliant */}
            <div className="rounded-2xl glass-panel p-6 border border-white/10">
              
              {!isSent ? (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
                  <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-bogota-yellow" />
                    <span>¿Desea formalizar esta cotización?</span>
                  </h4>
                  <p className="text-[11px] text-gray-400 leading-normal mb-2">
                    Envíe de manera transparente esta simulación a nuestros asesores. Le contactaremos en menos de 1 hora.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      required
                      type="text"
                      placeholder="Su Nombre / Empresa"
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      className="p-2.5 bg-black/40 border border-white/5 rounded-lg text-xs text-white placeholder-gray-500 focus:border-bogota-orange outline-none"
                    />
                    <input
                      required
                      type="tel"
                      placeholder="Celular de Contacto"
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                      className="p-2.5 bg-black/40 border border-white/5 rounded-lg text-xs text-white placeholder-gray-500 focus:border-bogota-orange outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Enviar Simulación</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              ) : (
                <div className="text-center py-4 animate-fade-in">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">¡Simulación Recibida Con Éxito!</h4>
                  <p className="text-[11px] text-gray-400 mt-2 max-w-sm mx-auto leading-relaxed">
                    Estimado/a <strong>{leadName}</strong>, uno de nuestros asesores técnicos de planta de Ferretería Bogotana le llamará al <strong>{leadPhone}</strong> para formalizar una cotización detallada con descuentos especiales de volumen.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSent(false);
                      setLeadName('');
                      setLeadPhone('');
                    }}
                    className="mt-3.5 text-[10px] font-mono text-bogota-orange hover:underline uppercase"
                  >
                    Simular Otro Insumo
                  </button>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
