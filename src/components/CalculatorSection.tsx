import React, { useState } from 'react';
import { Calculator, MessageCircle, Send, CheckCircle2, Phone } from 'lucide-react';
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
}

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({
  content,
  preselectedService,
  prefilledNote,
}) => {
  const serviceOptions: ServiceOption[] = [
    { id: 'signs', label: 'Světelná vývěska / 3D písmo', basePrice: 8500, unit: 'od 8 500 Kč' },
    { id: 'cars', label: 'Polep vozu / dodávky', basePrice: 4500, unit: 'od 4 500 Kč' },
    { id: 'windows', label: 'Polep výlohy / skla', basePrice: 3200, unit: 'od 3 200 Kč' },
    { id: 'metal', label: 'HD Obraz na hliníku (Dibond)', basePrice: 2400, unit: 'od 2 400 Kč' },
    { id: 'merch', label: 'Textil & Firemní merch', basePrice: 1800, unit: 'od 1 800 Kč' },
  ];

  const sizeMultipliers = [
    { id: 'small', label: 'Základní rozsah (menší plocha / kusová výroba)', multiplier: 1 },
    { id: 'medium', label: 'Střední rozsah (standardní výloha / bočnice / 2-3 ks)', multiplier: 1.8 },
    { id: 'large', label: 'Komplexní rozsah (celopolep / velká fasáda / série)', multiplier: 3.2 },
  ];

  const [selectedService, setSelectedService] = useState<string>(preselectedService || 'signs');
  const [selectedSize, setSelectedSize] = useState<string>('medium');
  const [needDesign, setNeedDesign] = useState<boolean>(true);
  const [needInstallation, setNeedInstallation] = useState<boolean>(true);
  const [clientName, setClientName] = useState<string>('');
  const [clientContact, setClientContact] = useState<string>('');
  const [clientNote, setClientNote] = useState<string>(prefilledNote || '');
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Synchronize when props change
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

  // Calculate price estimate
  const currentServiceObj = serviceOptions.find((s) => s.id === selectedService) || serviceOptions[0];
  const currentSizeObj = sizeMultipliers.find((s) => s.id === selectedSize) || sizeMultipliers[1];
  
  const estimatedPrice = Math.round(
    currentServiceObj.basePrice * currentSizeObj.multiplier +
    (needDesign ? 1200 : 0) +
    (needInstallation ? 1500 : 0)
  );

  const generateWhatsAppUrl = () => {
    const text = `Dobrý den, posílám poptávku z webu GraphicArt Studio:
• Služba: ${currentServiceObj.label}
• Rozsah: ${currentSizeObj.label}
• Grafický návrh: ${needDesign ? 'ANO' : 'Mám hotová tisková data'}
• Montáž v Liberci: ${needInstallation ? 'ANO' : 'Vlastní odběr'}
• Odhad z kalkulačky: cca ${estimatedPrice.toLocaleString('cs-CZ')} Kč
• Jméno: ${clientName || 'Nezadáno'}
• Kontakt: ${clientContact || 'Nezadáno'}
• Poznámka: ${clientNote || 'Bez poznámky'}`;

    return `https://wa.me/420607150507?text=${encodeURIComponent(text)}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <section id="calculator" className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal direction="up" delay={50}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-sky-500/30 text-sky-400 text-xs font-mono mb-4 uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5" />
              <span>{content.calculatorSection.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
              {content.calculatorSection.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {content.calculatorSection.subtitle}
            </p>
          </div>
        </Reveal>

        {/* Calculator Interactive Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Options Column (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal direction="right" delay={150} duration={750}>
              <div className="glass-panel rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-8 shadow-xl">
                
                {/* Step 1: Select Service */}
                <div>
                  <label className="block text-sm font-bold text-white mb-3">
                    1. {content.calculatorSection.serviceLabel}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {serviceOptions.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSelectedService(opt.id)}
                        className={`p-3.5 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between ${
                          selectedService === opt.id
                            ? 'bg-sky-500/15 border-sky-400 text-white shadow-md shadow-sky-500/10'
                            : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <span className="font-semibold text-xs sm:text-sm">{opt.label}</span>
                        <span className="text-[11px] text-sky-400 font-mono mt-1">{opt.unit}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Select Size / Scope */}
                <div>
                  <label className="block text-sm font-bold text-white mb-3">
                    2. {content.calculatorSection.sizeLabel}
                  </label>
                  <div className="space-y-2.5">
                    {sizeMultipliers.map((size) => (
                      <button
                        key={size.id}
                        type="button"
                        onClick={() => setSelectedSize(size.id)}
                        className={`w-full p-3 rounded-xl text-left text-xs sm:text-sm border transition-all duration-200 flex items-center justify-between ${
                          selectedSize === size.id
                            ? 'bg-sky-500/15 border-sky-400 text-white font-medium shadow-sm'
                            : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <span>{size.label}</span>
                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-3 ${
                          selectedSize === size.id ? 'border-sky-400 bg-sky-400 text-black' : 'border-slate-600'
                        }`}>
                          {selectedSize === size.id && <span className="w-1.5 h-1.5 rounded-full bg-black"></span>}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Add-ons checkboxes */}
                <div>
                  <label className="block text-sm font-bold text-white mb-3">
                    3. Doplňkové služby
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
                      <input
                        type="checkbox"
                        checked={needDesign}
                        onChange={(e) => setNeedDesign(e.target.checked)}
                        className="w-4 h-4 rounded border-slate-700 text-sky-500 focus:ring-sky-500 focus:ring-offset-0 bg-slate-800"
                      />
                      <div className="text-xs">
                        <span className="font-semibold text-white block">Grafický návrh & vizualizace</span>
                        <span className="text-slate-400 text-[11px]">+1 200 Kč</span>
                      </div>
                    </label>

                    <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
                      <input
                        type="checkbox"
                        checked={needInstallation}
                        onChange={(e) => setNeedInstallation(e.target.checked)}
                        className="w-4 h-4 rounded border-slate-700 text-sky-500 focus:ring-sky-500 focus:ring-offset-0 bg-slate-800"
                      />
                      <div className="text-xs">
                        <span className="font-semibold text-white block">Montáž / lepení v Liberci</span>
                        <span className="text-slate-400 text-[11px]">+1 500 Kč</span>
                      </div>
                    </label>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

          {/* Pricing & Inquiry Submission Column (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal direction="left" delay={250} duration={750}>
              <div className="glass-panel-glow rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
                <div>
                  
                  {/* Estimated Price Display */}
                  <div className="text-center pb-6 border-b border-slate-800">
                    <span className="text-xs font-mono uppercase tracking-wider text-sky-400 block mb-2">
                      {content.calculatorSection.estimatedPrice}
                    </span>
                    <div className="text-4xl sm:text-5xl font-extrabold text-white font-tech tracking-tight">
                      ~ {estimatedPrice.toLocaleString('cs-CZ')}{' '}
                      <span className="text-xl sm:text-2xl text-sky-400 font-sans">Kč</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-3 leading-relaxed">
                      {content.calculatorSection.priceNotice}
                    </p>
                  </div>

                  {/* Contact Inputs */}
                  <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        {content.calculatorSection.formName} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Např. Jan Novák / Květinářství Liberec"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        {content.calculatorSection.formPhone} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="+420 123 456 789 nebo email@firma.cz"
                        value={clientContact}
                        onChange={(e) => setClientContact(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        {content.calculatorSection.formNote}
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Např. rozměr výlohy 2x1.5m, logo máme ve vektoru..."
                        value={clientNote}
                        onChange={(e) => setClientNote(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-sky-500 transition-colors resize-none"
                      />
                    </div>

                    {submitted && (
                      <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>{content.calculatorSection.successMessage}</span>
                      </div>
                    )}

                    {/* Primary WhatsApp Action */}
                    <div className="pt-2 space-y-2.5">
                      <a
                        href={generateWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-all transform hover:-translate-y-0.5"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>{content.calculatorSection.sendWhatsapp}</span>
                      </a>

                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-xs transition-colors"
                      >
                        <Send className="w-3.5 h-3.5 text-sky-400" />
                        <span>{content.calculatorSection.sendEmail}</span>
                      </button>
                    </div>
                  </form>

                </div>

                {/* Quick Assistance Note */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-sky-400" />
                    <span>Dotaz? Volejte: <strong>607 150 507</strong></span>
                  </span>
                  <span className="text-emerald-400 font-medium">Reagujeme obratem</span>
                </div>

              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
};
