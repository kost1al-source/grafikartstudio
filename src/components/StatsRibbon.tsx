import React from 'react';
import { Award, Factory, ShieldCheck, Clock } from 'lucide-react';
import { Reveal } from './Reveal';
import type { ContentData } from '../data/content';

interface StatsRibbonProps {
  content: ContentData;
}

export const StatsRibbon: React.FC<StatsRibbonProps> = ({ content }) => {
  const stats = [
    {
      icon: Award,
      val: content.stats.completedProjects,
      label: content.stats.completedProjectsLabel,
      accent: 'text-sky-400',
    },
    {
      icon: Factory,
      val: content.stats.localProduction,
      label: content.stats.localProductionLabel,
      accent: 'text-emerald-400',
    },
    {
      icon: ShieldCheck,
      val: content.stats.warranty,
      label: content.stats.warrantyLabel,
      accent: 'text-amber-400',
    },
    {
      icon: Clock,
      val: content.stats.response,
      label: content.stats.responseLabel,
      accent: 'text-sky-400',
    },
  ];

  return (
    <section className="relative border-y border-white/[0.08] bg-[#06090f] py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" delay={100} duration={600}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 group relative"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-sky-500/40 transition-colors shadow-inner">
                    <IconComponent className={`w-5 h-5 ${item.accent}`} />
                  </div>

                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white font-headline tracking-tight">
                      {item.val}
                    </div>
                    <div className="text-xs text-slate-400 font-sans leading-tight mt-0.5">
                      {item.label}
                    </div>
                  </div>

                  {/* Divider Cross on Desktop */}
                  {index < stats.length - 1 && (
                    <span className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 text-white/15 font-tech text-xs select-none">
                      +
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
