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
      border: 'border-sky-500/20',
    },
    {
      icon: Factory,
      val: content.stats.localProduction,
      label: content.stats.localProductionLabel,
      accent: 'text-emerald-400',
      border: 'border-emerald-500/20',
    },
    {
      icon: ShieldCheck,
      val: content.stats.warranty,
      label: content.stats.warrantyLabel,
      accent: 'text-amber-400',
      border: 'border-amber-500/20',
    },
    {
      icon: Clock,
      val: content.stats.response,
      label: content.stats.responseLabel,
      accent: 'text-purple-400',
      border: 'border-purple-500/20',
    },
  ];

  return (
    <section className="relative z-10 -mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal direction="up" delay={100} duration={700}>
        <div className="rounded-2xl glass-panel border border-slate-800 p-6 sm:p-8 shadow-2xl bg-gradient-to-b from-slate-900/90 to-[#0b111e]/90">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-800/40 transition-colors"
                  style={{
                    animationDelay: `${idx * 150}ms`,
                  }}
                >
                  <div className={`p-3 rounded-xl bg-slate-900 border ${item.border} shrink-0`}>
                    <Icon className={`w-5 h-5 ${item.accent}`} />
                  </div>
                  <div>
                    <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight font-tech ${item.accent}`}>
                      {item.val}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-300 font-medium leading-snug mt-0.5">
                      {item.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
};
