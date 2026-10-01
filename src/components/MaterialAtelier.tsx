import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, Compass } from 'lucide-react';
import { Reveal } from './Reveal';
import type { ContentData, MaterialItem } from '../data/content';

interface MaterialAtelierProps {
  content: ContentData;
  onSelectMaterialForQuote: (serviceId: string, materialName: string) => void;
}

export const MaterialAtelier: React.FC<MaterialAtelierProps> = ({
  content,
  onSelectMaterialForQuote,
}) => {
  const materials = content.materialsSection.items;
  const [activeMaterial, setActiveMaterial] = useState<MaterialItem>(materials[0]);

  const handleInquire = () => {
    // Map material to service
    const serviceMap: Record<string, string> = {
      dibond: 'metal',
      acrylic_led: 'signs',
      oracal_cast: 'cars',
      frosted_glass: 'windows',
      flatbed_uv: 'signs',
    };
    onSelectMaterialForQuote(serviceMap[activeMaterial.id] || 'signs', activeMaterial.name);
  };

  return (
    <section id="materials" className="py-28 relative overflow-hidden bg-[#070a10] border-t border-b border-white/[0.06]">
      {/* Subtle Background Architectural Grids */}
      <div className="absolute inset-0 bg-grid-hairline opacity-60 pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up" delay={50}>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-sky-400 font-tech text-xs tracking-wider uppercase mb-4">
              <Compass className="w-3.5 h-3.5 text-sky-400" />
              <span>{content.materialsSection.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 font-headline">
              {content.materialsSection.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              {content.materialsSection.subtitle}
            </p>
          </div>
        </Reveal>

        {/* Material Selection Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {materials.map((mat) => {
            const isActive = activeMaterial.id === mat.id;
            return (
              <button
                key={mat.id}
                onClick={() => setActiveMaterial(mat)}
                className={`group relative shrink-0 px-4 py-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-slate-800/90 border-sky-400/50 shadow-lg shadow-sky-950/30'
                    : 'bg-slate-900/40 border-white/[0.08] hover:bg-slate-800/50 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: mat.accent }}
                  />
                  <span className="font-tech text-[11px] text-slate-400 tracking-wider">
                    {mat.code}
                  </span>
                </div>
                <div className={`text-sm font-semibold tracking-tight transition-colors ${
                  isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                }`}>
                  {mat.name.split('®')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Material Active Spec Deck */}
        <div className="rounded-2xl glass-atelier border border-white/10 overflow-hidden shadow-2xl p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual Showcase (7 cols) */}
            <div className="lg:col-span-7 relative group">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={activeMaterial.image}
                  alt={activeMaterial.name}
                  className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Tactical Corner Pins */}
                <span className="absolute top-3 left-3 font-tech text-white/40 text-xs select-none">+</span>
                <span className="absolute top-3 right-3 font-tech text-white/40 text-xs select-none">+</span>
                <span className="absolute bottom-3 left-3 font-tech text-white/40 text-xs select-none">+</span>
                <span className="absolute bottom-3 right-3 font-tech text-white/40 text-xs select-none">+</span>

                {/* Overlaid Badges */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 font-tech text-xs text-slate-200">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeMaterial.accent }} />
                    <span>{activeMaterial.code}</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 font-tech text-xs text-sky-300">
                    LIBEREC SPEC
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Specifications (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-block text-xs font-tech tracking-wider uppercase text-sky-400 mb-2">
                  {activeMaterial.category}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-headline mb-4">
                  {activeMaterial.name}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans mb-6">
                  {activeMaterial.description}
                </p>

                {/* 4 Technical Metrics Grid */}
                <div className="grid grid-cols-2 gap-3.5 mb-8">
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="text-[11px] font-tech text-slate-400 uppercase tracking-wider mb-1">
                      {content.materialsSection.thicknessLabel}
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {activeMaterial.thickness}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="text-[11px] font-tech text-slate-400 uppercase tracking-wider mb-1">
                      {content.materialsSection.durabilityLabel}
                    </div>
                    <div className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 shrink-0" />
                      <span>{activeMaterial.durability.split(' ')[0]}</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] col-span-2">
                    <div className="text-[11px] font-tech text-slate-400 uppercase tracking-wider mb-1">
                      {content.materialsSection.finishLabel}
                    </div>
                    <div className="text-sm font-medium text-slate-200">
                      {activeMaterial.finish}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] col-span-2">
                    <div className="text-[11px] font-tech text-slate-400 uppercase tracking-wider mb-1">
                      {content.materialsSection.bestForLabel}
                    </div>
                    <div className="text-sm font-medium text-sky-200">
                      {activeMaterial.bestFor}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleInquire}
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm tracking-wide transition-all duration-200 shadow-xl shadow-sky-500/25 cursor-pointer group"
              >
                <span>{content.materialsSection.inquireMaterialBtn}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
