import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';
import type { ContentData } from '../data/content';

interface ProcessSectionProps {
  content: ContentData;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ content }) => {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal direction="up" delay={50}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-sky-500/30 text-sky-400 text-xs font-mono mb-4 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{content.processSection.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
              {content.processSection.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {content.processSection.subtitle}
            </p>
          </div>
        </Reveal>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {content.processSection.steps.map((step, idx) => (
            <Reveal
              key={idx}
              direction="up"
              delay={100 + idx * 140}
              duration={700}
              className="h-full"
            >
              <div className="relative h-full p-6 rounded-2xl glass-panel border border-slate-800 hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-sky-500/10">
                <div>
                  {/* Step Number with Glow */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-tech text-3xl font-extrabold text-sky-400 group-hover:text-sky-300 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-sky-500/40 transition-colors">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Highlight Tag */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-[11px] font-medium text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
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
