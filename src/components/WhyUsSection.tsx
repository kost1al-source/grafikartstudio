import React from 'react';
import { Sparkles, MapPin, Layers, ShieldCheck, Zap } from 'lucide-react';
import { Reveal } from './Reveal';
import type { ContentData } from '../data/content';

interface WhyUsSectionProps {
  content: ContentData;
}

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({ content }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'MapPin':
        return MapPin;
      case 'Sparkles':
        return Layers;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Zap':
      default:
        return Zap;
    }
  };

  return (
    <section className="py-24 bg-[#05080e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal direction="up" delay={50}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-sky-500/30 text-sky-400 text-xs font-mono mb-4 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{content.whyUsSection.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
              {content.whyUsSection.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
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
                direction={idx % 2 === 0 ? 'right' : 'left'}
                delay={100 + idx * 120}
                duration={700}
                className="h-full"
              >
                <div className="h-full p-8 rounded-2xl glass-panel border border-slate-800/90 hover:border-sky-500/40 transition-all duration-300 flex items-start gap-5 group shadow-xl hover:shadow-sky-500/10">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700/80 group-hover:border-sky-500/50 flex items-center justify-center text-sky-400 shrink-0 group-hover:scale-105 transition-all shadow-md shadow-sky-950/40">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-sky-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
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
