import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin, ExternalLink, Sparkles } from 'lucide-react';
import { Reveal } from './Reveal';
import type { ContentData } from '../data/content';

interface HeroProps {
  content: ContentData;
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Subtle Grid Lines Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Status Pill */}
            <Reveal direction="down" delay={100}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/30 text-sky-300 text-xs font-medium mb-6 shadow-sm shadow-sky-950/40">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping"></span>
                <span>{content.hero.badge}</span>
              </div>
            </Reveal>

            {/* Main Headline */}
            <Reveal direction="up" delay={200} duration={750}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
                {content.hero.titleStart}{' '}
                <span className="cyan-gradient-text inline-block">
                  {content.hero.titleAccent}
                </span>
              </h1>
            </Reveal>

            {/* Description */}
            <Reveal direction="up" delay={350} duration={700}>
              <p className="text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mb-8">
                {content.hero.description}
              </p>
            </Reveal>

            {/* Action Buttons */}
            <Reveal direction="up" delay={450}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base"
                >
                  <span>{content.hero.ctaPrimary}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#calculator"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-sky-500/50 transition-all duration-200 text-sm sm:text-base"
                >
                  <span>{content.hero.ctaSecondary}</span>
                </a>
              </div>
            </Reveal>

            {/* Trust Points */}
            <Reveal direction="up" delay={550}>
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Bezplatná konzultace & zaměření</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                  <span>Odolnost proti UV záření a mrazu</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Rychlý servis v Liberci a okolí</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Hero Showcase Visual */}
          <div className="lg:col-span-5 relative">
            <Reveal direction="left" delay={300} duration={850}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Outer Decorative Glow Frame */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-sky-500/30 via-slate-800 to-sky-400/20 blur-xl opacity-70"></div>

                {/* Main Visual Container */}
                <div className="relative rounded-2xl overflow-hidden glass-panel border border-slate-700/80 shadow-2xl">
                  <div className="relative aspect-[4/3] overflow-hidden group">
                    <img
                      src="/assets/hero_signage.jpg"
                      alt="Světelná vývěska Aurora and Co — ukázka realizace GraphicArt Studio"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070b12] via-transparent to-transparent opacity-80" />

                    {/* Overlaid Badges on Image */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-mono">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>REALIZACE 2024</span>
                    </div>

                    <div className="absolute top-4 right-4">
                      <a 
                        href="#portfolio" 
                        className="p-2 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-white hover:text-sky-300 transition-colors inline-flex"
                        title="Prohlédnout projekt"
                        aria-label="Prohlédnout projekt"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Bottom Image Info Banner */}
                    <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/60">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-white tracking-wide">
                          Světelná 3D vývěska Aurora & Co.
                        </span>
                        <span className="text-[11px] px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-medium">
                          3D Akryl & LED
                        </span>
                      </div>
                      <p className="text-[12px] text-slate-300 line-clamp-1">
                        Kompletní návrh, výroba hliníkového korpusu a montáž v centru Liberce.
                      </p>
                    </div>
                  </div>

                  {/* Micro Stats Bar Below Image */}
                  <div className="p-4 bg-slate-900/90 border-t border-slate-800 grid grid-cols-3 gap-2 text-center">
                    <div className="border-r border-slate-800/80">
                      <div className="text-base font-bold text-white font-mono">1440 DPI</div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider">UV Rozlišení</div>
                    </div>
                    <div className="border-r border-slate-800/80">
                      <div className="text-base font-bold text-sky-400 font-mono">Oracal / 3M</div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider">Lité fólie</div>
                    </div>
                    <div>
                      <div className="text-base font-bold text-emerald-400 font-mono">100%</div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider">Na míru</div>
                    </div>
                  </div>
                </div>

                {/* Floating Pill on bottom left with gentle CSS float */}
                <div className="absolute -bottom-5 -left-4 sm:-left-6 hidden sm:flex items-center gap-3 p-3 rounded-2xl bg-slate-900/95 border border-sky-500/30 backdrop-blur-xl shadow-xl animate-float">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">HD tisk na hliník</div>
                    <div className="text-[11px] text-slate-400">Brushed Dibond metal art</div>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
