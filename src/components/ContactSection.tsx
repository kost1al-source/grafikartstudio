import React, { useState } from 'react';
import { Phone, MapPin, Clock, MessageCircle, Send, CheckCircle2, ExternalLink } from 'lucide-react';
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
    <section id="contact" className="py-28 bg-[#060910] relative overflow-hidden border-t border-white/[0.06]">
      {/* Background Lighting */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal direction="up" delay={50}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-sky-400 font-tech text-xs tracking-wider uppercase mb-4">
              <MessageCircle className="w-3.5 h-3.5 text-sky-400" />
              <span>{content.contactSection.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 font-headline">
              {content.contactSection.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
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
                <div className="p-6 rounded-2xl glass-atelier border border-white/10 hover:border-white/20 transition-colors shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-tech text-slate-400 uppercase tracking-wider font-semibold">
                        {content.contactSection.addressTitle}
                      </h4>
                      <div className="font-bold text-white text-base font-headline">
                        Orlí 261/8, 460 07 Liberec III-Jeřáb
                      </div>
                      <div className="text-xs text-slate-400 font-sans">
                        Česká republika • Liberecký kraj
                      </div>
                      <div className="pt-2">
                        <a
                          href="https://maps.google.com/?q=Orli+261/8,+46007+Liberec"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-tech text-sky-400 hover:text-sky-300 transition-colors"
                        >
                          <span>Otevřít v Google Maps</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Telephone & WhatsApp Card */}
                <div className="p-6 rounded-2xl glass-atelier border border-white/10 hover:border-white/20 transition-colors shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-tech text-slate-400 uppercase tracking-wider font-semibold">
                        {content.contactSection.phoneTitle}
                      </h4>
                      <a
                        href="tel:+420607150507"
                        className="block font-bold text-white text-xl font-headline hover:text-sky-300 transition-colors"
                      >
                        +420 607 150 507
                      </a>
                      <div className="text-xs text-slate-400 font-sans">
                        Dostupní na telefonu i WhatsAppu Po–Pá
                      </div>
                      <div className="pt-2">
                        <a
                          href="https://wa.me/420607150507"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-tech text-emerald-400 hover:text-emerald-300 transition-colors"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Otevřít chat na WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Working Hours Card */}
                <div className="p-6 rounded-2xl glass-atelier border border-white/10 hover:border-white/20 transition-colors shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-tech text-slate-400 uppercase tracking-wider font-semibold">
                        {content.contactSection.hoursTitle}
                      </h4>
                      <div className="font-bold text-white text-sm font-headline">
                        {content.contactSection.hoursVal}
                      </div>
                      <div className="text-xs text-slate-400 font-sans">
                        Zaměření v terénu a konzultace po dohodě
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

          {/* Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal direction="left" delay={200} duration={750}>
              <div className="p-6 sm:p-8 rounded-2xl glass-atelier border border-white/10 shadow-2xl">
                <div className="mb-6 space-y-1">
                  <h3 className="text-2xl font-bold text-white font-headline">
                    {content.contactSection.formTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans">
                    {content.contactSection.formSubtitle}
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-8 text-center space-y-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                    <h4 className="text-lg font-bold text-white font-headline">
                      Zpráva byla úspěšně odeslána
                    </h4>
                    <p className="text-xs text-slate-300 font-sans max-w-md mx-auto">
                      Děkujeme za váš zájem. Ozveme se vám v co nejkratším možném čase na uvedený kontakt.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-tech text-slate-300 block">
                          Jméno a příjmení / Název firmy *
                        </label>
                        <input
                          type="text"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder="Jan Novák"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-tech text-slate-300 block">
                          Telefon nebo E-mail *
                        </label>
                        <input
                          type="text"
                          required
                          value={formContact}
                          onChange={(e) => setFormContact(e.target.value)}
                          placeholder="+420 ... nebo email@firma.cz"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-tech text-slate-300 block">
                        O jakou službu máte zájem?
                      </label>
                      <select
                        value={formService}
                        onChange={(e) => setFormService(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-sky-400 transition-colors"
                      >
                        <option value="Vývěsky & Světelná reklama">3D Světelné vývěsky & nápisy</option>
                        <option value="Polepy aut & vozových parků">Polepy aut & vozových parků</option>
                        <option value="Výlohy & Interiérová grafika">Polepy výloh & pískovaná skla</option>
                        <option value="HD obrazy na hliníku Dibond">HD obrazy na hliníku Dibond</option>
                        <option value="Textil & Sklo">Brandovaný textil & gravírované sklo</option>
                        <option value="Jiné / Individuální projekt">Jiné / Individuální poptávka</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-tech text-slate-300 block">
                        Zpráva / Popis vašeho projektu *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formMessage}
                        onChange={(e) => setFormMessage(e.target.value)}
                        placeholder="Napište nám přibližné rozměry, představu nebo termín otevření..."
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs font-tech uppercase tracking-wider transition-all duration-200 shadow-xl shadow-sky-500/25 cursor-pointer group"
                    >
                      <span>{content.contactSection.submitBtn}</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
};
