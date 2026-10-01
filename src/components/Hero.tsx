import React, { useState } from 'react';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import { Reveal } from './Reveal';
import type { ContentData } from '../data/content';
import { getAssetUrl } from '../utils/asset';

interface HeroProps {
  content: ContentData;
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  const [activeShowcase, setActiveShowcase] = useState<'signs' | 'cars' | 'metal'>('signs');

  const showcaseData = {
    signs: {
      image: getAssetUrl('assets/hero_signage.jpg'),
      tag: '3D SVĚTLO & HALO LED',
      title: 'Aurora & Co. Luxury Signage',
      desc: '3D profilová písmena s teplým nepřímým LED podsvícením 3000K na fasádě.',
      specs: 'Plexiglas® 20mm • Komaxitovaný hliník • IP67',
    },
    cars: {
      image: getAssetUrl('assets/car_wrap.jpg'),
      tag: 'LITÝ AUTOWRAP',
      title: 'Mercedes-Benz Sprinter Voltaic',
      desc: 'Kompletní aplikace litinové autofólie Oracal s matnou UV laminací.',
      specs: 'Oracal 970RA • 3M Gloss Cobalt • Záruka 7 let',
    },
    metal: {
      image: getAssetUrl('assets/aluminum_print.jpg'),
      tag: 'HD ART NA KOVU',
      title: 'Liquid Silver Dibond Art',
      desc: 'Přímý průmyslový UV tisk 1440 DPI na strojně broušený stříbrný hliník.',
      specs: 'Dibond Butlerfinish 3mm • Kinetický kovový lom',
    },
  };

  const current = showcaseData[activeShowcase];

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-grid-hairline">
      {/* Ambient Radial Backlights */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tactical Geolocation & Status Bar */}
        <Reveal direction="down" delay={50} duration={600}>
          <div className="inline-flex flex-wrap items-center gap-2.5 sm:gap-4 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md mb-8 text-xs font-tech">
            <div className="flex items-center gap-1.5 text-sky-400 font-semibold">
              <Compass className="w-3.5 h-3.5" />
              <span>{content.hero.coordinates}</span>
            </div>
            <span className="text-white/20 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{content.hero.status}</span>
            </div>
          </div>
        </Reveal>

        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Bold Monumental Headline & Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            <Reveal direction="up" delay={150} duration={750}>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.05] font-headline">
                {content.hero.leadTitle}{' '}
                <span className="cyan-gradient-text block sm:inline">
                  {content.hero.titleAccent}
                </span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={250} duration={750}>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-sans max-w-2xl">
                {content.hero.description}
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal direction="up" delay={350} duration={750}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#calculator"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-sm tracking-wide shadow-xl shadow-sky-500/25 transition-all duration-200 group"
                >
                  <span>{content.hero.ctaPrimary}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/12 hover:border-white/25 font-bold text-sm tracking-wide transition-all duration-200 backdrop-blur-md"
                >
                  <span>{content.hero.ctaSecondary}</span>
                </a>
              </div>
            </Reveal>

            {/* Tactical Specs Ticker */}
            <Reveal direction="up" delay={450} duration={750}>
              <div className="pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4">
                {content.hero.specs.map((item, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="text-[11px] font-tech text-slate-400 uppercase tracking-wider">
                      {item.label}
                    </div>
                    <div className="text-base font-bold text-white font-headline">
                      {item.val}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Studio Showcase Deck (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal direction="left" delay={300} duration={850}>
              <div className="relative">
                
                {/* Outer Brushed Glow Rim */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-sky-500/30 via-slate-800 to-amber-500/20 blur-xl opacity-70" />

                {/* Showcase Shell */}
                <div className="relative rounded-2xl overflow-hidden glass-atelier border border-white/15 shadow-2xl p-4 sm:p-5">
                  
                  {/* Mode Switcher Tabs */}
                  <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/50 border border-white/10 mb-4">
                    <button
                      onClick={() => setActiveShowcase('signs')}
                      className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-tech font-semibold transition-all cursor-pointer ${
                        activeShowcase === 'signs'
                          ? 'bg-sky-500 text-slate-950 shadow'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      3D Světlo
                    </button>
                    <button
                      onClick={() => setActiveShowcase('cars')}
                      className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-tech font-semibold transition-all cursor-pointer ${
                        activeShowcase === 'cars'
                          ? 'bg-sky-500 text-slate-950 shadow'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Autowrap
                    </button>
                    <button
                      onClick={() => setActiveShowcase('metal')}
                      className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-tech font-semibold transition-all cursor-pointer ${
                        activeShowcase === 'metal'
                          ? 'bg-sky-500 text-slate-950 shadow'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Broušený kov
                    </button>
                  </div>

                  {/* Main Visual Image */}
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 group mb-4">
                    <img
                      src={current.image}
                      alt={current.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

                    {/* Badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 font-tech text-xs text-sky-300 font-semibold tracking-wider">
                      {current.tag}
                    </div>

                    {/* Corner Pins */}
                    <span className="absolute top-3 right-3 font-tech text-white/40 text-xs select-none">+</span>
                    <span className="absolute bottom-3 left-3 font-tech text-white/40 text-xs select-none">+</span>
                  </div>

                  {/* Showcase Meta Information */}
                  <div className="space-y-1.5 px-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-base text-white font-headline">
                        {current.title}
                      </h3>
                      <span className="text-[11px] font-tech text-emerald-400">LIBEREC 2024</span>
                    </div>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed">
                      {current.desc}
                    </p>
                    <div className="pt-2 text-[11px] font-tech text-slate-400 border-t border-white/[0.06] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>{current.specs}</span>
                    </div>
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
