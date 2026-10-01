import React, { useState } from 'react';
import { X, MapPin, Calendar, Tag, ArrowRight, Eye } from 'lucide-react';
import { portfolioData } from '../data/content';
import { Reveal } from './Reveal';
import type { ContentData, PortfolioItem } from '../data/content';

interface PortfolioSectionProps {
  content: ContentData;
  onInquireProject?: (projectTitle: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ content, onInquireProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  const filters = [
    { key: 'all', label: content.portfolioSection.filterAll },
    { key: 'signs', label: content.portfolioSection.filterSigns },
    { key: 'cars', label: content.portfolioSection.filterCars },
    { key: 'windows', label: content.portfolioSection.filterWindows },
    { key: 'metal', label: content.portfolioSection.filterMetal },
    { key: 'merch', label: content.portfolioSection.filterMerch },
    { key: 'events', label: content.portfolioSection.filterEvents },
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioData
    : portfolioData.filter((item) => item.category === activeFilter);

  const handleInquireFromModal = (item: PortfolioItem) => {
    setActiveModalItem(null);
    if (onInquireProject) {
      onInquireProject(item.title);
    }
  };

  return (
    <section id="portfolio" className="py-28 bg-[#060910] relative">
      {/* Background Grids */}
      <div className="absolute inset-0 bg-dot-hairline opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up" delay={50}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-sky-400 font-tech text-xs tracking-wider uppercase mb-4">
                <Tag className="w-3.5 h-3.5 text-sky-400" />
                <span>{content.portfolioSection.eyebrow}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 font-headline">
                {content.portfolioSection.title}
              </h2>
              <p className="text-base text-slate-300 font-sans">
                {content.portfolioSection.subtitle}
              </p>
            </div>

            <div className="hidden lg:flex items-center gap-3 p-3.5 rounded-xl glass-atelier border border-white/10">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <div className="text-xs font-tech text-slate-300">
                <span className="font-bold text-white">ORLÍ 261/8</span> • LIBEREC MANUFAKTURA
              </div>
            </div>
          </div>
        </Reveal>

        {/* Filter Pills */}
        <Reveal direction="up" delay={100}>
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
            {filters.map((f) => {
              const isActive = activeFilter === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`px-4 py-2 rounded-xl text-xs font-tech tracking-wider uppercase transition-all duration-200 shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-sky-500 text-slate-950 font-bold shadow-lg shadow-sky-500/25'
                      : 'bg-white/[0.03] text-slate-300 hover:text-white hover:bg-white/[0.07] border border-white/[0.08]'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Asymmetrical Masonry Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredItems.map((item: PortfolioItem, idx: number) => {
            const isFeatured = idx === 0 && activeFilter === 'all';

            return (
              <Reveal
                key={item.id}
                direction="up"
                delay={100 + (idx % 3) * 100}
                duration={700}
                className={isFeatured ? 'md:col-span-2' : ''}
              >
                <div
                  onClick={() => setActiveModalItem(item)}
                  className={`group relative rounded-2xl glass-atelier border border-white/10 hover:border-sky-400/50 transition-all duration-300 overflow-hidden cursor-pointer shadow-xl ${
                    isFeatured ? 'aspect-[16/10] sm:aspect-[16/9]' : 'aspect-[4/3]'
                  }`}
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Corner Pins */}
                  <span className="absolute top-3 left-3 font-tech text-white/30 text-xs select-none">+</span>
                  <span className="absolute top-3 right-3 font-tech text-white/30 text-xs select-none">+</span>

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-xs font-tech text-sky-300">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Quick Expand Icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4 text-sky-400" />
                  </div>

                  {/* Bottom Information */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                    <div className="text-[11px] font-tech text-slate-400 flex items-center gap-3">
                      <span>{item.client}</span>
                      <span>•</span>
                      <span>{item.year}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white font-headline group-hover:text-sky-300 transition-colors line-clamp-1">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-300 font-sans line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>

      {/* Lightbox Case Study Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl glass-atelier border border-white/15 bg-slate-950 p-6 sm:p-8 shadow-2xl space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-4">
              <div>
                <span className="text-xs font-tech text-sky-400 uppercase tracking-wider block mb-1">
                  {activeModalItem.categoryLabel}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-headline">
                  {activeModalItem.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalItem(null)}
                className="p-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white cursor-pointer"
                aria-label={content.portfolioSection.closeModal}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Large Image */}
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-tech text-xs border-y border-white/[0.08] py-4">
              <div className="space-y-1">
                <span className="text-slate-400 uppercase tracking-wider">Klient</span>
                <div className="font-semibold text-white">{activeModalItem.client}</div>
              </div>
              <div className="space-y-1">
                <span className="text-slate-400 uppercase tracking-wider">Lokalita</span>
                <div className="font-semibold text-white flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  <span>{activeModalItem.location}</span>
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-slate-400 uppercase tracking-wider">Rok výroby</span>
                <div className="font-semibold text-white flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>{activeModalItem.year}</span>
                </div>
              </div>
            </div>

            {/* Narrative & Materials */}
            <div className="space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {activeModalItem.description}
              </p>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-1">
                <div className="text-xs font-tech text-slate-400 uppercase tracking-wider">
                  {content.portfolioSection.materialsUsed}:
                </div>
                <div className="text-xs text-sky-300 font-tech font-semibold">
                  {activeModalItem.materials}
                </div>
              </div>
            </div>

            {/* Bottom Modal CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                onClick={() => setActiveModalItem(null)}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/[0.04] text-slate-300 hover:text-white border border-white/10 text-xs font-tech cursor-pointer"
              >
                {content.portfolioSection.closeModal}
              </button>

              <button
                onClick={() => handleInquireFromModal(activeModalItem)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs font-tech tracking-wide shadow-lg shadow-sky-500/25 cursor-pointer group"
              >
                <span>{content.portfolioSection.inquireSimilar}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
