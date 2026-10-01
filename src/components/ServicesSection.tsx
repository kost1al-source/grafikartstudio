import React, { useState } from 'react';
import { ArrowRight, Layers, ChevronDown, ChevronUp } from 'lucide-react';
import { servicesData } from '../data/content';
import { Reveal } from './Reveal';
import type { ContentData, Service } from '../data/content';

interface ServicesSectionProps {
  content: ContentData;
  onSelectServiceForQuote?: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  content,
  onSelectServiceForQuote,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const flagshipService = servicesData[0]; // 3D vývěsky
  const otherServices = servicesData.slice(1);

  return (
    <section id="services" className="py-28 relative overflow-hidden bg-[#070b12]">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal direction="up" delay={50}>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-sky-400 font-tech text-xs tracking-wider uppercase mb-4">
              <Layers className="w-3.5 h-3.5 text-sky-400" />
              <span>{content.servicesSection.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 font-headline">
              {content.servicesSection.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              {content.servicesSection.subtitle}
            </p>
          </div>
        </Reveal>

        {/* 1. Flagship Featured Service Banner (3D Vývěsky) */}
        <Reveal direction="up" delay={100} duration={800}>
          <div className="rounded-2xl glass-atelier border border-white/12 overflow-hidden shadow-2xl p-6 sm:p-8 lg:p-10 mb-8 group hover:border-sky-400/40 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Image with technical overlay (6 cols) */}
              <div className="lg:col-span-6 relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10">
                <img
                  src={flagshipService.image}
                  alt={flagshipService.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 font-tech text-xs text-sky-300">
                  FLAGSHIP 01
                </div>
              </div>

              {/* Description & Specs (6 cols) */}
              <div className="lg:col-span-6 space-y-5">
                <div className="space-y-2">
                  <div className="text-xs font-tech text-sky-400 uppercase tracking-wider">
                    {flagshipService.number} • ARCHITEKTONICKÁ REALIZACE
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-headline tracking-tight">
                    {flagshipService.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                    {flagshipService.shortDesc}
                  </p>
                </div>

                {/* Materials Tags */}
                <div className="space-y-2">
                  <div className="text-xs font-tech text-slate-400 uppercase tracking-wider">
                    {content.servicesSection.materialsLabel}:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {flagshipService.materials.map((m, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 font-tech text-xs text-slate-200"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-4 pt-3">
                  <button
                    onClick={() => onSelectServiceForQuote?.(flagshipService.id)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs tracking-wide shadow-lg shadow-sky-500/20 transition-all cursor-pointer group"
                  >
                    <span>Nacenit vývěsku</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => toggleExpand(flagshipService.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-tech text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>{expandedId === flagshipService.id ? 'Méně informací' : 'Technické detaily'}</span>
                    {expandedId === flagshipService.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {/* Expanded Details */}
                {expandedId === flagshipService.id && (
                  <div className="pt-4 mt-4 border-t border-white/[0.06] text-xs text-slate-300 space-y-2 animate-in fade-in duration-200">
                    <p className="leading-relaxed">{flagshipService.fullDesc}</p>
                    <div className="text-sky-300 font-tech">
                      Vhodné pro: {flagshipService.popularFor}
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </Reveal>

        {/* 2. Grid for remaining 4 services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherServices.map((svc: Service, idx: number) => {
            const isExpanded = expandedId === svc.id;

            return (
              <Reveal
                key={svc.id}
                direction="up"
                delay={150 + idx * 100}
                duration={700}
                className="h-full"
              >
                <div className="group h-full rounded-2xl glass-atelier border border-white/10 hover:border-sky-400/40 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between shadow-xl">
                  
                  <div className="space-y-4">
                    {/* Image with Tag */}
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-slate-950">
                      <img
                        src={svc.image}
                        alt={svc.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 font-tech text-xs text-sky-300">
                        {svc.number}
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-white font-headline group-hover:text-sky-300 transition-colors">
                        {svc.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                        {svc.shortDesc}
                      </p>
                    </div>

                    {/* Materials */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {svc.materials.slice(0, 3).map((m, mIdx) => (
                        <span
                          key={mIdx}
                          className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] font-tech text-[11px] text-slate-300"
                        >
                          {m}
                        </span>
                      ))}
                    </div>

                    {/* Expandable text */}
                    {isExpanded && (
                      <div className="pt-3 border-t border-white/[0.06] text-xs text-slate-300 space-y-2 animate-in fade-in duration-200">
                        <p className="leading-relaxed">{svc.fullDesc}</p>
                        <div className="text-sky-300 font-tech">
                          Doporučeno pro: {svc.popularFor}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-5 mt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <button
                      onClick={() => toggleExpand(svc.id)}
                      className="text-xs font-tech text-slate-400 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>{isExpanded ? 'Skrýt' : 'Detaily'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    <button
                      onClick={() => onSelectServiceForQuote?.(svc.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 font-tech uppercase tracking-wider transition-colors cursor-pointer group/btn"
                    >
                      <span>Nacenit službu</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
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
