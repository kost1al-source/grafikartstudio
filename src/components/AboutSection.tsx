import React from 'react';
import { MapPin, CheckCircle2, Compass } from 'lucide-react';
import { Reveal } from './Reveal';
import type { ContentData } from '../data/content';
import { getAssetUrl } from '../utils/asset';

interface AboutSectionProps {
  content: ContentData;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ content }) => {
  return (
    <section id="about" className="py-28 relative overflow-hidden bg-[#070b12] border-t border-white/[0.06]">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Workshop Photo & Founder Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <Reveal direction="right" delay={150} duration={800}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Outer Glow */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-sky-500/20 via-slate-800 to-transparent blur-xl" />

                <div className="relative rounded-2xl overflow-hidden glass-atelier border border-white/12 shadow-2xl">
                  <img
                    src={getAssetUrl('assets/workshop_uv.jpg')}
                    alt="Výroba a tisk GraphicArt Studio Liberec"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  
                  <div className="p-6 bg-slate-950/90 border-t border-white/[0.08]">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl overflow-hidden ring-1 ring-sky-400/40 shrink-0">
                        <img
                          src={getAssetUrl('assets/logo.jpg')}
                          alt="Yeliena Loboda GraphicArt Studio"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm font-headline">
                          {content.aboutSection.leadDesigner}
                        </div>
                        <div className="text-xs text-sky-400 font-tech">
                          {content.aboutSection.leadRole}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Location Pill */}
                <div className="absolute -bottom-4 -right-4 p-3.5 rounded-xl bg-slate-900/95 border border-white/15 backdrop-blur-xl shadow-xl flex items-center gap-3 animate-float font-tech">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <div className="text-xs">
                    <div className="font-bold text-white">Liberec III-Jeřáb</div>
                    <div className="text-slate-400">Orlí 261/8</div>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

          {/* Right Column: Studio Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal direction="left" delay={200} duration={800}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-sky-400 font-tech text-xs tracking-wider uppercase mb-2">
                <Compass className="w-3.5 h-3.5 text-sky-400" />
                <span>{content.aboutSection.eyebrow}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-headline">
                {content.aboutSection.title}
              </h2>
            </Reveal>

            <Reveal direction="left" delay={300} duration={800}>
              <div className="space-y-4 text-slate-300 font-sans text-base sm:text-lg leading-relaxed">
                <p>{content.aboutSection.bioP1}</p>
                <p>{content.aboutSection.bioP2}</p>
              </div>
            </Reveal>

            <Reveal direction="left" delay={400} duration={800}>
              <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-4 text-xs font-tech text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Přímé jednání s tvůrcem</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Osobní konzultace u kávy v dílně</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Přesné zaměření po celém kraji</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
