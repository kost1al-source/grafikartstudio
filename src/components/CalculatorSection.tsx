import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle2, SlidersHorizontal } from 'lucide-react';
import { Reveal } from './Reveal';
import type { ContentData } from '../data/content';

interface CalculatorSectionProps {
  content: ContentData;
  preselectedService?: string;
  prefilledNote?: string;
}

interface ServiceOption {
  id: string;
  label: string;
  basePrice: number;
  unit: string;
  code: string;
}

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({
  content,
  preselectedService,
  prefilledNote,
}) => {
  const serviceOptions: ServiceOption[] = [
    { id: 'signs', label: '3D Světelná vývěska / Písmena', basePrice: 8500, unit: 'od 8 500 Kč', code: 'SPEC-SIGN-3D' },
    { id: 'cars', label: 'Polep vozu / Celopolep dodávky', basePrice: 4500, unit: 'od 4 500 Kč', code: 'SPEC-WRAP-CAR' },
    { id: 'windows', label: 'Výloha / Pískované sklo', basePrice: 3200, unit: 'od 3 200 Kč', code: 'SPEC-GLS-FROST' },
    { id: 'metal', label: 'HD Obraz na hliníku (Dibond)', basePrice: 2400, unit: 'od 2 400 Kč', code: 'SPEC-DIB-ART' },
    { id: 'merch', label: 'Firemní textil & Merch', basePrice: 1800, unit: 'od 1 800 Kč', code: 'SPEC-APRL-GLS' },
  ];

  const sizeMultipliers = [
    { id: 'small', label: 'Základní rozsah (menší formát / 1 díl)', multiplier: 1 },
    { id: 'medium', label: 'Střední rozsah (standardní fasáda / dodávka)', multiplier: 1.8 },
    { id: 'large', label: 'Komplexní rozsah (celopolep / velký štít / série)', multiplier: 3.2 },
  ];

  const [selectedService, setSelectedService] = useState<string>(preselectedService || 'signs');
  const [selectedSize, setSelectedSize] = useState<string>('medium');
  const [needDesign, setNeedDesign] = useState<boolean>(true);
  const [needInstallation, setNeedInstallation] = useState<boolean>(true);
  const [clientName, setClientName] = useState<string>('');
  const [clientContact, setClientContact] = useState<string>('');
  const [clientNote, setClientNote] = useState<string>(prefilledNote || '');
  const [submitted, setSubmitted] = useState<boolean>(false);

  React.useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
    }
  }, [preselectedService]);

  React.useEffect(() => {
    if (prefilledNote) {
      setClientNote(prefilledNote);
    }
  }, [prefilledNote]);

  const currentServiceObj = serviceOptions.find((s) => s.id === selectedService) || serviceOptions[0];
  const currentSizeObj = sizeMultipliers.find((s) => s.id === selectedSize) || sizeMultipliers[1];

  const calculateEstimate = () => {
    let price = currentServiceObj.basePrice * currentSizeObj.multiplier;
    if (needDesign) price += 1500;
    if (needInstallation) price += 2500;
    return Math.round(price / 100) * 100;
  };

  const estimatedTotal = calculateEstimate();

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Dobrý den, posílám poptávku z kalkulátoru na webu GraphicArt Studio:\n\n` +
      `• Realizace: ${currentServiceObj.label} (${currentServiceObj.code})\n` +
      `• Rozsah: ${currentSizeObj.label}\n` +
      `• Grafický návrh: ${needDesign ? 'Ano' : 'Mám vlastní data'}\n` +
      `• Montáž: ${needInstallation ? 'Ano, požaduji montáž' : 'Bez montáže'}\n` +
      `• Orientační kalkulace: cca ${estimatedTotal.toLocaleString('cs-CZ')} Kč\n` +
      (clientName ? `• Jméno: ${clientName}\n` : '') +
      (clientContact ? `• Kontakt: ${clientContact}\n` : '') +
      (clientNote ? `• Poznámka: ${clientNote}\n` : '') +
      `\nRád bych konzultoval termín a přesné zaměření v Liberci.`
    );
    return `https://wa.me/420607150507?text=${text}`;
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="calculator" className="py-28 relative overflow-hidden bg-[#070b12] border-t border-white/[0.06]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-sky-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <Reveal direction="up" delay={50}>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-sky-400 font-tech text-xs tracking-wider uppercase mb-4">
              <SlidersHorizontal className="w-3.5 h-3.5 text-sky-400" />
              <span>{content.calculatorSection.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 font-headline">
              {content.calculatorSection.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              {content.calculatorSection.subtitle}
            </p>
          </div>
        </Reveal>

        {/* Spec Sheet Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Configuration (7 cols) */}
          <div className="lg:col-span-7 space-y-8 rounded-2xl glass-atelier border border-white/10 p-6 sm:p-8 shadow-2xl">
            
            {/* Step 1: Select Discipline */}
            <div className="space-y-3">
              <label className="text-xs font-tech text-sky-400 uppercase tracking-wider block font-bold">
                {content.calculatorSection.serviceLabel}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceOptions.map((opt) => {
                  const isSelected = selectedService === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedService(opt.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-slate-800/90 border-sky-400 shadow-md shadow-sky-950/40'
                          : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="font-tech text-[10px] text-slate-400 mb-1">{opt.code}</div>
                      <div className={`text-sm font-semibold mb-1 ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                        {opt.label}
                      </div>
                      <div className="text-xs font-tech text-sky-400">{opt.unit}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Scope / Dimensions */}
            <div className="space-y-3">
              <label className="text-xs font-tech text-sky-400 uppercase tracking-wider block font-bold">
                {content.calculatorSection.sizeLabel}
              </label>
              <div className="space-y-2">
                {sizeMultipliers.map((size) => {
                  const isSelected = selectedSize === size.id;
                  return (
                    <button
                      key={size.id}
                      type="button"
                      onClick={() => setSelectedSize(size.id)}
                      className={`w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-slate-800/90 border-sky-400 text-white'
                          : 'bg-white/[0.02] border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <span className="text-sm font-medium">{size.label}</span>
                      <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected ? 'border-sky-400 bg-sky-500' : 'border-slate-600'
                      }`}>
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Add-on Services */}
            <div className="space-y-3">
              <label className="text-xs font-tech text-sky-400 uppercase tracking-wider block font-bold">
                {content.calculatorSection.urgencyLabel}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 flex items-center gap-3 cursor-pointer hover:border-white/20 transition-colors">
                  <input
                    type="checkbox"
                    checked={needDesign}
                    onChange={(e) => setNeedDesign(e.target.checked)}
                    className="w-4 h-4 rounded border-white/20 text-sky-500 focus:ring-sky-500"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-white block">Grafický návrh & 3D náhled</span>
                    <span className="text-slate-400 font-tech">+1 500 Kč</span>
                  </div>
                </label>

                <label className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 flex items-center gap-3 cursor-pointer hover:border-white/20 transition-colors">
                  <input
                    type="checkbox"
                    checked={needInstallation}
                    onChange={(e) => setNeedInstallation(e.target.checked)}
                    className="w-4 h-4 rounded border-white/20 text-sky-500 focus:ring-sky-500"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-white block">Montáž & instalace v Liberci</span>
                    <span className="text-slate-400 font-tech">+2 500 Kč</span>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* Right Column: Live Output & Fast Direct Dispatch (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Price Certificate Card */}
            <div className="rounded-2xl glass-atelier border border-sky-400/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-tech text-slate-400 pb-3 border-b border-white/[0.08]">
                  <span>PASSPORT VÝROBY</span>
                  <span className="text-emerald-400">PŘESNÉ ZAMĚŘENÍ ZDARMA</span>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-tech uppercase text-slate-400 tracking-wider">
                    {content.calculatorSection.estimatedPrice}
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-headline tracking-tight">
                    {estimatedTotal.toLocaleString('cs-CZ')}{' '}
                    <span className="text-sky-400 text-2xl font-tech font-bold">Kč</span>
                  </div>
                  <div className="text-[11px] font-tech text-slate-400">
                    Cena bez DPH • Přesná kalkulace po schválení materiálů
                  </div>
                </div>

                {/* Instant WhatsApp Action */}
                <div className="pt-4 border-t border-white/[0.08] space-y-3">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-emerald-500/25 transition-all duration-200 group"
                  >
                    <MessageCircle className="w-5 h-5 fill-slate-950" />
                    <span>{content.calculatorSection.sendWhatsapp}</span>
                  </a>

                  <div className="text-center text-xs font-tech text-slate-400">
                    Nebo vyplňte formulář níže pro písemnou nabídku
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Inquiry Form Fallback */}
            <div className="rounded-2xl glass-atelier border border-white/10 p-6 shadow-xl">
              {submitted ? (
                <div className="p-6 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="font-bold text-white font-headline">Poptávka odeslána</h4>
                  <p className="text-xs text-slate-300 font-sans">
                    {content.calculatorSection.successMessage}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitForm} className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-xs font-tech text-slate-300 block">
                      {content.calculatorSection.formName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Např. Jan Novák / Kavárna Liberec"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-tech text-slate-300 block">
                      {content.calculatorSection.formPhone} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={clientContact}
                      onChange={(e) => setClientContact(e.target.value)}
                      placeholder="+420 600 000 000"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-tech text-slate-300 block">
                      {content.calculatorSection.formNote}
                    </label>
                    <textarea
                      rows={2}
                      value={clientNote}
                      onChange={(e) => setClientNote(e.target.value)}
                      placeholder="Specifikace rozměrů, termín otevření..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.05] hover:bg-white/10 text-white border border-white/15 text-xs font-tech font-bold uppercase tracking-wider transition-all cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-sky-400" />
                    <span>{content.calculatorSection.sendEmail}</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
