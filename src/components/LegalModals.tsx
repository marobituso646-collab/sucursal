/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, ShieldCheck, FileText, CheckCircle } from 'lucide-react';
import { ActiveTab } from '../types';
import { PRIVACY_POLICY, COOKIES_POLICY, TERMS_CONDITIONS, LEGAL_DISCLAIMER } from '../data';

interface LegalModalsProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export default function LegalModals({ activeTab, setActiveTab }: LegalModalsProps) {
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  if (activeTab === 'main') return null;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setFormSent(true);
  };

  const handleResetForm = () => {
    setFormSent(false);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-dark-bg tech-grid" id="legal-layout-container">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header and Go back */}
        <div className="mb-10 text-left">
          <button
            onClick={() => {
              setActiveTab('main');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-mono text-bogota-orange hover:underline uppercase flex items-center gap-1.5"
          >
            ← Volver a la Experiencia Principal
          </button>
          
          <h1 className="font-display font-bold text-3xl text-white mt-4">
            {activeTab === 'privacy' && 'Política de Privacidad'}
            {activeTab === 'cookies' && 'Política de Cookies'}
            {activeTab === 'terms' && 'Términos y Condiciones'}
            {activeTab === 'disclaimer' && 'Aviso Legal y Transparencia'}
            {activeTab === 'contact' && 'Contacto y Asesoramiento Corporativo'}
          </h1>
          <p className="text-gray-400 text-xs font-mono mt-1.5 uppercase tracking-widest">
            Ferretería Bogotana S.A.S. • Bogotá, Colombia
          </p>
        </div>

        {/* Content Panel */}
        <div className="rounded-2xl glass-panel-heavy p-6 sm:p-10 border border-white/10 text-left">
          
          {/* STATIC LEGAL TRANSLATIONS */}
          {activeTab === 'privacy' && (
            <div className="prose prose-invert max-w-none text-xs sm:text-sm text-gray-300 leading-relaxed whitespace-pre-wrap">
              {PRIVACY_POLICY}
            </div>
          )}

          {activeTab === 'cookies' && (
            <div className="prose prose-invert max-w-none text-xs sm:text-sm text-gray-300 leading-relaxed whitespace-pre-wrap">
              {COOKIES_POLICY}
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="prose prose-invert max-w-none text-xs sm:text-sm text-gray-300 leading-relaxed whitespace-pre-wrap">
              {TERMS_CONDITIONS}
            </div>
          )}

          {activeTab === 'disclaimer' && (
            <div className="prose prose-invert max-w-none text-xs sm:text-sm text-gray-300 leading-relaxed whitespace-pre-wrap">
              {LEGAL_DISCLAIMER}
            </div>
          )}

          {/* CONTACT FORM PAGE */}
          {activeTab === 'contact' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start" id="contact-core-interface">
              
              {/* Form Column (7 cols) */}
              <div className="md:col-span-7">
                {!formSent ? (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <p className="text-xs text-gray-400 mb-4">
                      Complete este formulario y nos pondremos en contacto con usted para programar asistencia de cubicación y entrega en Bogotá Región.
                    </p>

                    <div>
                      <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1">
                        Nombre Completo u Organización *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Ej: Constructora El Retiro S.A.S."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-black/40 border border-white/10 focus:border-bogota-orange text-xs text-white p-3 rounded-lg outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1">
                        Correo de Contacto Corporativo *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="Ej: ingenieria@retiro.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-black/40 border border-white/10 focus:border-bogota-orange text-xs text-white p-3 rounded-lg outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1">
                        Requerimiento Técnico o Consulta de Material *
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Describa el volumen, especificaciones de acero o herramientas de precisión que requiere cotizar..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-black/40 border border-white/10 focus:border-bogota-orange text-xs text-white p-3 rounded-lg outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-lg bg-bogota-orange hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <span>Establecer Contacto Seguro</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8 animate-fade-in">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    </div>
                    
                    <h3 className="font-display font-bold text-base text-white">¡Mensaje Enviado con Éxito!</h3>
                    <p className="text-xs text-gray-300 mt-3 leading-relaxed max-w-sm mx-auto">
                      Hemos registrado su solicitud en nuestro sistema de Ferretería Bogotana S.A.S. Un ingeniero técnico civil revisará la dosificación recomendada y le enviará un correo a <strong>{email}</strong> con la cotización completa.
                    </p>

                    <button
                      onClick={handleResetForm}
                      className="mt-6 px-4 py-2 rounded bg-white/5 hover:bg-white/10 text-[10px] font-mono text-white uppercase tracking-wider border border-white/10 transition-colors"
                    >
                      Enviar Nuevo Mensaje
                    </button>
                  </div>
                )}
              </div>

              {/* Business Info sidebar Column (5 cols) */}
              <div className="md:col-span-5 p-5 rounded-xl bg-white/5 border border-white/10 space-y-6">
                
                <div>
                  <h4 className="font-display font-bold text-xs text-white uppercase tracking-widest pb-1.5 border-b border-white/5 mb-3">
                    Información Legal
                  </h4>
                  <ul className="space-y-3.5 text-xs text-gray-300">
                    <li className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-bogota-orange mt-0.5 shrink-0" />
                      <div>
                        <span className="block font-medium">Sede Principal</span>
                        <span className="text-gray-400 text-[11px]">Avenida El Dorado # 69B - 10, Edificio Capital Towers, Bogotá</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Phone className="w-4 h-4 text-bogota-orange mt-0.5 shrink-0" />
                      <div>
                        <span className="block font-medium">Línea de Atención</span>
                        <span className="text-gray-400 text-[11px]">+57 (601) 980-8000</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Mail className="w-4 h-4 text-bogota-orange mt-0.5 shrink-0" />
                      <div>
                        <span className="block font-medium">Correo Central</span>
                        <span className="text-gray-400 text-[11px]">contacto@ferreteriabogotana.com</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-bogota-yellow mt-0.5 shrink-0" />
                      <div>
                        <span className="block font-medium">Horario de Despachos</span>
                        <span className="text-gray-400 text-[11px]">Lunes a Viernes de 7:00 AM a 5:30 PM • Sábados 8:00 AM a 1:00 PM</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-orange-600/10 border border-bogota-orange/20">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="w-4.5 h-4.5 text-bogota-orange" />
                    <span className="text-[10px] font-mono text-white uppercase tracking-wider font-bold">Datos Protegidos</span>
                  </div>
                  <p className="text-[10px] text-gray-400 leading-normal">
                    Ferretería Bogotana S.A.S. cumple con la Ley de Hábeas Data 1581 de 2012 de la República de Colombia. Sus datos están completamente seguros con nosotros.
                  </p>
                </div>

              </div>

            </div>
          )}

        </div>

        {/* Back navigation footer */}
        <div className="mt-8 text-center">
          <button
            onClick={() => {
              setActiveTab('main');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 hover:text-white font-medium transition-colors"
          >
            Volver al Menú de Inicio
          </button>
        </div>

      </div>
    </div>
  );
}
