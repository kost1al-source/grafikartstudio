import React, { useState } from 'react';
import { Phone, MapPin, Clock, MessageCircle, Send, CheckCircle2, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import { Reveal } from './Reveal';
import type { ContentData } from '../data/content';

interface ContactSectionProps {
  content: ContentData;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ content }) => {
  const [formName, setFormName] = useState('');
  const [formContact, setFormContact] = useState('');
  const [formService, setFormService] = useState('Vývěsky & Světelná reklama');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormName('');
      setFormContact('');
      setFormMessage('');
    }, 6000);
  };

  return (
    <section id="contact" className="py-24 bg-[#05080e] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal direction="up" delay={50}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-sky-500/30 text-sky-400 text-xs font-mono mb-4 uppercase tracking-wider">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{content.contactSection.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
              {content.contactSection.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {content.contactSection.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Studio Direct Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Reveal direction="right" delay={150} duration={750}>
              <div className="space-y-4">
                {/* Address Card */}
                <div className="p-6 rounded-2xl glass-panel border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                        {content.contactSection.addressTitle}
                      </div>
                      <div className="text-base font-bold text-white mb-1">
                        Orlí 261/8
                      </div>
                      <div className="text-xs text-slate-300">
                        460 07 Liberec III-Jeřáb, Česká republika
                      </div>
                      <a
                        href="https://maps.google.com/?q=Orl%C3%AD+261/8,+460+07+Liberec"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300 mt-2 font-medium"
                      >
                        <span>Otevřít v Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="p-6 rounded-2xl glass-panel border border-slate-800 hover:border-sky-500/40 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-sky-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                        {content.contactSection.phoneTitle}
                      </div>
                      <a
                        href="tel:+420607150507"
                        className="text-xl font-extrabold text-white hover:text-sky-300 font-tech transition-colors block"
                      >
                        +420 607 150 507
                      </a>
                      <div className="text-xs text-slate-400 mt-1 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>Dostupní na telefonu i WhatsApp</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Action Channels */}
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://wa.me/420607150507"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl glass-panel border border-emerald-500/30 hover:border-emerald-500/60 bg-emerald-950/20 text-emerald-300 flex flex-col items-center justify-center text-center gap-2 transition-all"
                  >
                    <MessageCircle className="w-6 h-6 text-emerald-400" />
                    <span className="text-xs font-bold">WhatsApp zpráva</span>
                  </a>

                  <a
                    href="https://ig.me/m/graphic_art_studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl glass-panel border border-pink-500/30 hover:border-pink-500/60 bg-pink-950/20 text-pink-300 flex flex-col items-center justify-center text-center gap-2 transition-all"
                  >
                    <InstagramIcon className="w-6 h-6 text-pink-400" />
                    <span className="text-xs font-bold">Instagram Direct</span>
                  </a>
                </div>

                {/* Working Hours Card */}
                <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex items-center gap-3">
                  <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                  <div>
                    <strong className="text-white block">{content.contactSection.hoursTitle}</strong>
                    <span>{content.contactSection.hoursVal}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal direction="left" delay={250} duration={750}>
              <div className="glass-panel-glow rounded-2xl p-6 sm:p-8 shadow-2xl">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {content.contactSection.formTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {content.contactSection.formSubtitle}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Vaše jméno nebo název firmy *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Např. Martin Dvořák"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Telefon nebo e-mail *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="+420 777 000 000 nebo email@adresa.cz"
                        value={formContact}
                        onChange={(e) => setFormContact(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Požadovaná služba
                    </label>
                    <select
                      value={formService}
                      onChange={(e) => setFormService(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-sky-500 transition-colors"
                    >
                      <option value="Vývěsky & Světelná reklama">Vývěsky & Světelná reklama</option>
                      <option value="Polepy aut a vozidel">Polepy aut a vozidel</option>
                      <option value="Výlohy a interiéry">Výlohy a interiéry</option>
                      <option value="HD Obraz na hliníku (Dibond)">HD Obraz na hliníku (Dibond)</option>
                      <option value="Potisk textilu a sklo">Potisk textilu a sklo</option>
                      <option value="Jiné / Komplexní firemní identita">Jiné / Komplexní firemní identita</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Detaily poptávky / zpráva
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Popište vaši představu, přibližné rozměry nebo termín realizace..."
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-sky-500 transition-colors resize-none"
                    />
                  </div>

                  {formSubmitted && (
                    <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                      <span>Děkujeme! Zpráva byla zaznamenána. Brzy se vám ozveme zpět.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 transition-all transform hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>{content.contactSection.submitBtn}</span>
                  </button>
                </form>
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
};
