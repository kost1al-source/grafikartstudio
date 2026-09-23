import React from 'react';
import { Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { Reveal } from './Reveal';
import type { ContentData } from '../data/content';

interface AboutSectionProps {
  content: ContentData;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ content }) => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-sky-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image & Studio Snapshot (5 cols) */}
          <div className="lg:col-span-5 relative">
            <Reveal direction="right" delay={150} duration={800}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Decorative Frame */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-sky-500/20 via-slate-800 to-transparent blur-lg"></div>

                <div className="relative rounded-2xl overflow-hidden glass-panel border border-slate-700/80 shadow-2xl">
                  <img
                    src="/assets/workshop_uv.jpg"
                    alt="Výroba a tisk GraphicArt Studio Liberec"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  
                  <div className="p-6 bg-slate-900/90 border-t border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl overflow-hidden ring-2 ring-sky-500/40 shrink-0">
                        <img
                          src="/assets/logo.jpg"
                          alt="Yeliena Loboda GraphicArt Studio"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">
                          {content.aboutSection.leadDesigner}
                        </div>
                        <div className="text-xs text-sky-400">
                          {content.aboutSection.leadRole}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Pill */}
                <div className="absolute -bottom-4 -right-4 p-3.5 rounded-xl bg-slate-900/95 border border-sky-500/30 backdrop-blur-xl shadow-xl flex items-center gap-3 animate-float">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
                  <div className="text-xs">
                    <div className="font-bold text-white">Liberec III-Jeřáb</div>
                    <div className="text-[11px] text-slate-400">Orlí 261/8, 460 07</div>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

          {/* Text Content (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal direction="left" delay={200} duration={750}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-sky-500/30 text-sky-400 text-xs font-mono mb-4 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{content.aboutSection.eyebrow}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
                {content.aboutSection.title}
              </h2>

              <div className="space-y-4 text-base text-slate-300 leading-relaxed mb-8">
                <p>{content.aboutSection.bioP1}</p>
                <p>{content.aboutSection.bioP2}</p>
              </div>

              {/* Core Values / Commitments */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white block mb-0.5">Žádné anonymní zakázky</strong>
                    S každým klientem komunikujeme osobně od návrhu po montáž.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white block mb-0.5">Certifikované materiály</strong>
                    Výrobky navrhujeme tak, aby vydržely mrazy, slunce i mytí.
                  </div>
                </div>
              </div>

              {/* Quick Contact Link */}
              <div className="flex items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm transition-colors shadow-lg shadow-sky-500/20"
                >
                  <span>Domluvit osobní schůzku</span>
                </a>
                <a
                  href="https://www.instagram.com/graphic_art_studio/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                >
                  @graphic_art_studio na Instagramu →
                </a>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
