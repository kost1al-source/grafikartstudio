import React, { useState } from 'react';
import { Sparkles, X, ArrowUpRight, MapPin, Calendar, Tag, ShieldCheck } from 'lucide-react';
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
    <section id="portfolio" className="py-24 bg-[#05080e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal direction="up" delay={50}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-sky-500/30 text-sky-400 text-xs font-mono mb-4 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{content.portfolioSection.eyebrow}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
                {content.portfolioSection.title}
              </h2>
              <p className="text-base text-slate-300">
                {content.portfolioSection.subtitle}
              </p>
            </div>

            {/* Followers count pill */}
            <div className="hidden lg:flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
              <div className="text-xs">
                <span className="font-bold text-white">123+ postů na Instagramu</span>
                <span className="text-slate-400 block">Autentické fotky přímo z naší výroby</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Category Filters */}
        <Reveal direction="up" delay={150}>
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeFilter === f.key
                    ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Portfolio Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            const isFeatured = idx === 0 && activeFilter === 'all';

            return (
              <Reveal
                key={item.id}
                direction="up"
                delay={100 + (idx % 3) * 120}
                duration={750}
                className={isFeatured ? 'md:col-span-2' : ''}
              >
                <div
                  onClick={() => setActiveModalItem(item)}
                  className={`group cursor-pointer rounded-2xl overflow-hidden glass-panel border border-slate-800/80 hover:border-sky-500/50 transition-all duration-500 relative flex flex-col justify-end shadow-xl ${
                    isFeatured ? 'aspect-[16/10]' : 'aspect-[4/3]'
                  }`}
                >
                  {/* Background Image with Zoom */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b12] via-[#070b12]/50 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-sky-300">
                      {item.categoryLabel}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-sky-500 group-hover:text-white transition-all transform group-hover:scale-110">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Content Banner */}
                  <div className="relative p-6 z-10">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 group-hover:text-sky-300 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-slate-300 mb-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-sky-400" />
                        {item.location}
                      </span>
                      <span>•</span>
                      <span className="text-slate-400">{item.client}</span>
                    </div>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0b111e] border border-slate-700/80 shadow-2xl flex flex-col md:flex-row">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 border border-white/10 text-white hover:text-sky-400 hover:bg-black transition-colors"
              aria-label={content.portfolioSection.closeModal}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Half */}
            <div className="md:w-1/2 relative min-h-[300px] md:min-h-full bg-black flex items-center justify-center">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 px-3 py-1 rounded bg-black/70 backdrop-blur-md text-xs font-mono text-sky-300 border border-white/10">
                {activeModalItem.categoryLabel}
              </div>
            </div>

            {/* Modal Content Half */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs text-slate-400 font-mono mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    {activeModalItem.year}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    {activeModalItem.location}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {activeModalItem.title}
                </h3>

                <div className="mb-4 pb-4 border-b border-slate-800 text-xs text-sky-400 font-medium">
                  Klient: {activeModalItem.client}
                </div>

                <div className="space-y-4 text-sm text-slate-300 leading-relaxed mb-6">
                  <p>{activeModalItem.description}</p>
                </div>

                {/* Materials Breakdown */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 mb-6">
                  <div className="text-xs font-bold text-white mb-1.5 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>{content.portfolioSection.materialsUsed}:</span>
                  </div>
                  <p className="text-xs text-slate-300 font-mono">
                    {activeModalItem.materials}
                  </p>
                </div>
              </div>

              {/* Modal CTA */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <a
                  href="#calculator"
                  onClick={() => handleInquireFromModal(activeModalItem)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm transition-colors shadow-lg shadow-sky-500/25"
                >
                  <Tag className="w-4 h-4" />
                  <span>{content.portfolioSection.inquireSimilar}</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
};
