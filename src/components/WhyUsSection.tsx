import React from 'react';
import { Sparkles, ShieldCheck, Zap, Clock, Palette } from 'lucide-react';
import { Reveal } from './Reveal';
import type { ContentData } from '../data/content';

interface WhyUsSectionProps {
  content: ContentData;
}

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({ content }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return Sparkles;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Clock':
        return Clock;
      case 'Palette':
        return Palette;
      default:
        return Zap;
    }
  };

  return (
    <section className="py-28 bg-[#060910] relative overflow-hidden border-t border-white/[0.06]">
      {/* Ambient Radial Lights */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal direction="up" delay={50}>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-sky-400 font-tech text-xs tracking-wider uppercase mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>{content.whyUsSection.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 font-headline">
              {content.whyUsSection.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              {content.whyUsSection.subtitle}
            </p>
          </div>
        </Reveal>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.whyUsSection.items.map((item, idx) => {
            const Icon = getIcon(item.iconName);

            return (
              <Reveal
                key={idx}
                direction="up"
                delay={100 + idx * 100}
                duration={700}
                className="h-full"
              >
                <div className="h-full p-8 rounded-2xl glass-atelier border border-white/10 hover:border-sky-400/40 transition-all duration-300 flex items-start gap-6 group shadow-xl">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:border-sky-400/50 flex items-center justify-center text-sky-400 shrink-0 group-hover:scale-105 transition-all shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors font-headline">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-sans">
                      {item.description}
                    </p>
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
