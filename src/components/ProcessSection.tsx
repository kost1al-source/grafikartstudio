import React from 'react';
import { CheckCircle2, GitCommit } from 'lucide-react';
import { Reveal } from './Reveal';
import type { ContentData } from '../data/content';

interface ProcessSectionProps {
  content: ContentData;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ content }) => {
  return (
    <section id="process" className="py-28 relative overflow-hidden bg-[#070b12] border-t border-white/[0.06]">
      {/* Background Grids */}
      <div className="absolute inset-0 bg-grid-hairline opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up" delay={50}>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-sky-400 font-tech text-xs tracking-wider uppercase mb-4">
              <GitCommit className="w-3.5 h-3.5 text-sky-400" />
              <span>{content.processSection.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 font-headline">
              {content.processSection.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              {content.processSection.subtitle}
            </p>
          </div>
        </Reveal>

        {/* 4 Process Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.processSection.steps.map((step, idx) => (
            <Reveal
              key={idx}
              direction="up"
              delay={100 + idx * 120}
              duration={700}
              className="h-full"
            >
              <div className="relative h-full p-6 sm:p-7 rounded-2xl glass-atelier border border-white/10 hover:border-sky-400/40 transition-all duration-300 flex flex-col justify-between group shadow-xl">
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
                    <span className="font-tech text-3xl font-extrabold text-sky-400 group-hover:text-sky-300 transition-colors">
                      {step.number}
                    </span>
                    <span className="text-[11px] font-tech text-slate-400 uppercase tracking-wider">
                      FÁZE 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-sky-300 transition-colors font-headline">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                    {step.description}
                  </p>
                </div>

                {/* Highlight Badge */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2 text-xs font-tech text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{step.highlight}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
