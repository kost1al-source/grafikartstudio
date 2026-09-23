import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, Layers, ChevronDown, ChevronUp } from 'lucide-react';
import { servicesData } from '../data/content';
import { Reveal } from './Reveal';
import type { ContentData, Service } from '../data/content';

interface ServicesSectionProps {
  content: ContentData;
  onSelectServiceForQuote?: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ content, onSelectServiceForQuote }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Subtle Ambient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal direction="up" delay={50}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-sky-500/30 text-sky-400 text-xs font-mono mb-4 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{content.servicesSection.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
              {content.servicesSection.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {content.servicesSection.subtitle}
            </p>
          </div>
        </Reveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((svc: Service, idx: number) => {
            const isExpanded = expandedId === svc.id;

            return (
              <Reveal
                key={svc.id}
                direction="up"
                delay={100 + (idx % 3) * 150}
                duration={700}
                className="h-full"
              >
                <div className="group relative h-full rounded-2xl glass-panel border border-slate-800 hover:border-sky-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-sky-500/10">
                  {/* Image Cover */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b111e] via-[#0b111e]/40 to-transparent" />
                    
                    {/* Number Badge */}
                    <span className="absolute top-4 left-4 font-mono font-bold text-xs px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-sky-400">
                      {svc.number}
                    </span>

                    <span className="absolute top-4 right-4 text-[11px] font-medium px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-slate-300">
                      {svc.popularFor.split(',')[0]}
                    </span>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-sky-300 transition-colors">
                        {svc.title}
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed mb-4">
                        {svc.shortDesc}
                      </p>

                      {/* Features Bullet List */}
                      <div className="space-y-1.5 mb-5">
                        {svc.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-400">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Expandable Details */}
                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-slate-800/80 animate-fadeIn space-y-3">
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {svc.fullDesc}
                          </p>
                          <div>
                            <div className="text-[11px] font-semibold uppercase tracking-wider text-sky-400 mb-1.5 flex items-center gap-1">
                              <Layers className="w-3 h-3" />
                              <span>{content.servicesSection.materialsLabel}:</span>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {svc.materials.map((mat, mIdx) => (
                                <span
                                  key={mIdx}
                                  className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-slate-300 font-mono"
                                >
                                  {mat}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Actions Bar */}
                    <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between gap-3">
                      <button
                        onClick={() => toggleExpand(svc.id)}
                        className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? 'Méně informací' : content.servicesSection.detailBtn}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      <a
                        href="#calculator"
                        onClick={() => onSelectServiceForQuote && onSelectServiceForQuote(svc.id)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 hover:text-sky-300 text-xs font-semibold border border-sky-500/20 transition-all"
                      >
                        <span>Nacenit</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>

                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
