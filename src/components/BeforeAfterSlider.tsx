import React, { useState, useRef, useCallback } from 'react';
import { SlidersHorizontal, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Reveal } from './Reveal';
import type { ContentData } from '../data/content';
import { getAssetUrl } from '../utils/asset';

interface BeforeAfterSliderProps {
  content: ContentData;
  onInquire: () => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ content, onInquire }) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedPercentage = Math.min(Math.max((x / rect.width) * 100, 5), 95);
    setSliderPosition(clampedPercentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const imageSrc = getAssetUrl('assets/car_wrap.jpg');

  return (
    <section id="transformation" className="py-28 relative overflow-hidden bg-[#080c14]">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-sky-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <Reveal direction="up" delay={50}>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-sky-400 font-tech text-xs tracking-wider uppercase mb-4">
              <SlidersHorizontal className="w-3.5 h-3.5 text-sky-400" />
              <span>{content.beforeAfterSection.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 font-headline">
              {content.beforeAfterSection.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              {content.beforeAfterSection.subtitle}
            </p>
          </div>
        </Reveal>

        {/* Interactive Comparison Stage */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden select-none border border-white/12 shadow-2xl cursor-ew-resize glass-atelier"
          >
            {/* "AFTER" Layer (Full Color High-End Realization) */}
            <div className="absolute inset-0">
              <img
                src={imageSrc}
                alt="Voltaic Dynamics Realizace GraphicArt"
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute bottom-6 right-6 px-4 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-sky-400/40 text-xs font-tech text-sky-300 font-bold tracking-wider uppercase">
                {content.beforeAfterSection.afterLabel}
              </div>
            </div>

            {/* "BEFORE" Layer (Clipped with Desaturated / Blueprint Treatment) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div
                className="absolute inset-0 w-full h-full"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                }}
              >
                <img
                  src={imageSrc}
                  alt="Tovární stav vozidla před polepem"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-90"
                  draggable={false}
                />
                {/* Blueprint Grid Overlay to indicate raw/plain factory state */}
                <div className="absolute inset-0 bg-sky-950/30 bg-grid-hairline opacity-75" />
                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute bottom-6 left-6 px-4 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-xs font-tech text-slate-300 font-bold tracking-wider uppercase">
                  {content.beforeAfterSection.beforeLabel}
                </div>
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={handleMouseDown}
              onTouchStart={() => setIsDragging(true)}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center shadow-xl shadow-black/80 group">
                <SlidersHorizontal className="w-4 h-4 text-sky-400 transform -rotate-90 group-hover:scale-110 transition-transform" />
              </div>
            </div>

            {/* Top Tactical Prompt */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 font-tech text-[11px] text-slate-300 pointer-events-none select-none z-10">
              {content.beforeAfterSection.dragNotice}
            </div>
          </div>

          {/* Case Study Details Ribbon */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl glass-atelier border border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-2">
              <div className="flex items-center gap-2 text-xs font-tech text-sky-400 uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>PŘÍPADOVÁ STUDIE</span>
              </div>
              <h4 className="text-xl font-bold text-white font-headline">
                {content.beforeAfterSection.caseStudyTitle}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {content.beforeAfterSection.caseStudyDesc}
              </p>
              <div className="text-xs font-tech text-slate-400 pt-1">
                <span className="text-slate-500">Materiály: </span>
                {content.beforeAfterSection.materialsUsed}
              </div>
            </div>

            <div className="md:col-span-4 flex justify-start md:justify-end">
              <button
                onClick={onInquire}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm tracking-wide transition-all duration-200 shadow-xl shadow-sky-500/25 cursor-pointer group"
              >
                <span>Nacenit podobný vůz</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
