import React from 'react';
import { Heart, MessageSquare, ExternalLink, Send } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import { Reveal } from './Reveal';
import type { ContentData } from '../data/content';
import { getAssetUrl } from '../utils/asset';

interface InstagramFeedProps {
  content: ContentData;
}

interface IgPost {
  image: string;
  caption: string;
  likes: number;
  comments: number;
  tag: string;
}

export const InstagramFeed: React.FC<InstagramFeedProps> = ({ content }) => {
  const posts: IgPost[] = [
    {
      image: getAssetUrl('assets/hero_signage.jpg'),
      caption: '💡 3D světelná vývěska s teplým LED podsvícením v centru Liberce. Akryl + hliník na míru.',
      likes: 84,
      comments: 9,
      tag: '#vyvesky #liberec',
    },
    {
      image: getAssetUrl('assets/car_wrap.jpg'),
      caption: '🚗 Celopolep dodávky Sprinter. Litá fólie Oracal 970RA s matnou UV laminací.',
      likes: 118,
      comments: 14,
      tag: '#polepyaut #reklama',
    },
    {
      image: getAssetUrl('assets/aluminum_print.jpg'),
      caption: '🖼 HD obraz na kartáčovaném hliníku Dibond. Unikátní kinetický kovový lesk.',
      likes: 142,
      comments: 19,
      tag: '#obrazy #dibond',
    },
    {
      image: getAssetUrl('assets/window_wrap.jpg'),
      caption: '☕ Polep výlohy kavárny — pískovaná fólie pro soukromí + zlaté řezané logo.',
      likes: 76,
      comments: 8,
      tag: '#vylohy #design',
    },
    {
      image: getAssetUrl('assets/apparel_glass.jpg'),
      caption: '👕 Textil & sklo! Značková trička a laserem gravírované sklenice s logem.',
      likes: 95,
      comments: 11,
      tag: '#merch #potisk',
    },
    {
      image: getAssetUrl('assets/photozone_decor.jpg'),
      caption: '📸 3D prostorová fotostěna pro gala večer. Světelné nápisy a zlatá geometrie.',
      likes: 104,
      comments: 13,
      tag: '#fotozona #dekor',
    },
  ];

  return (
    <section className="py-28 bg-[#060910] relative overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal direction="up" delay={50}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-pink-500/30 text-pink-400 font-tech text-xs tracking-wider uppercase mb-4">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>{content.instagramSection.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 font-headline">
              {content.instagramSection.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              {content.instagramSection.subtitle}
            </p>
          </div>
        </Reveal>

        {/* Profile Card Banner */}
        <Reveal direction="up" delay={150}>
          <div className="rounded-2xl glass-atelier border border-white/10 p-6 sm:p-8 mb-12 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Profile Info */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
                <div className="relative w-20 h-20 rounded-2xl p-1 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shadow-xl shrink-0">
                  <img
                    src={getAssetUrl('assets/logo.jpg')}
                    alt="@graphic_art_studio"
                    className="w-full h-full object-cover rounded-xl border-2 border-black"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                    <h3 className="text-xl font-bold text-white font-headline">
                      GraphicArt Studio
                    </h3>
                    <span className="w-4 h-4 rounded-full bg-sky-500 text-slate-950 flex items-center justify-center text-[10px] font-bold">
                      ✓
                    </span>
                  </div>
                  <div className="text-sm font-tech text-sky-400 mb-2">
                    {content.instagramSection.handle}
                  </div>
                  <p className="text-xs text-slate-300 max-w-md font-sans">
                    Reklama & Grafické studio • Vývěsky, Polepy, HD obrazy na hliníku • Liberec, Orlí 261/8
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/graphic_art_studio/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 text-white font-bold text-xs font-tech tracking-wide shadow-lg shadow-pink-500/20 hover:opacity-95 transition-opacity"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>{content.instagramSection.followBtn}</span>
                </a>

                <a
                  href="https://ig.me/m/graphic_art_studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 text-xs font-tech tracking-wide transition-colors"
                >
                  <Send className="w-4 h-4 text-sky-400" />
                  <span>{content.instagramSection.directBtn}</span>
                </a>
              </div>

            </div>
          </div>
        </Reveal>

        {/* 6 Visual Feed Posts */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post, idx) => (
            <Reveal
              key={idx}
              direction="up"
              delay={100 + idx * 80}
              duration={600}
              className="h-full"
            >
              <a
                href="https://www.instagram.com/graphic_art_studio/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-xl overflow-hidden glass-atelier border border-white/10 block shadow-lg hover:border-pink-500/40 transition-all duration-300"
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5">
                  <div className="flex items-center justify-end text-white">
                    <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-[11px] text-white font-sans line-clamp-2 leading-tight">
                      {post.caption}
                    </p>
                    <div className="flex items-center gap-3 text-[10px] font-tech text-slate-300 pt-1">
                      <span className="flex items-center gap-1">
                        <Heart className="w-3 h-3 fill-rose-500 text-rose-500" />
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-3 h-3 text-sky-400" />
                        {post.comments}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
