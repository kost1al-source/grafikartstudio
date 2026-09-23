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
      caption: '💡 Nová 3D světelná vývěska s teplým LED podsvícením v centru Liberce. Akryl + hliník na míru.',
      likes: 68,
      comments: 7,
      tag: '#vyvesky #liberec',
    },
    {
      image: getAssetUrl('assets/car_wrap.jpg'),
      caption: '🚗 Kompletní firemní polep dodávky Sprinter. Litá fólie Oracal s matnou UV laminací.',
      likes: 94,
      comments: 12,
      tag: '#polepyaut #reklama',
    },
    {
      image: getAssetUrl('assets/aluminum_print.jpg'),
      caption: '🖼 HD obraz na kartáčovaném hliníku Dibond. Neuvěřitelný metalický lesk v moderním interiéru.',
      likes: 112,
      comments: 15,
      tag: '#obrazy #dibond',
    },
    {
      image: getAssetUrl('assets/window_wrap.jpg'),
      caption: '☕ Polep výlohy kavárny — pískovaná fólie s privátním efektem + zlaté řezané logo na sklo.',
      likes: 57,
      comments: 6,
      tag: '#vylohy #design',
    },
    {
      image: getAssetUrl('assets/apparel_glass.jpg'),
      caption: '👕 Textil & 🍷 sklo! Firemní trička s přesným tiskem a laserem gravírované sklenice s logem.',
      likes: 73,
      comments: 9,
      tag: '#merch #potisk',
    },
    {
      image: getAssetUrl('assets/photozone_decor.jpg'),
      caption: '📸 3D prostorová fotozóna pro slavnostní večer. Světelné nápisy a moderní dekor.',
      likes: 85,
      comments: 11,
      tag: '#fotozona #dekor',
    },
  ];

  return (
    <section className="py-24 bg-[#05080e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal direction="up" delay={50}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-pink-500/30 text-pink-400 text-xs font-mono mb-4 uppercase tracking-wider">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>{content.instagramSection.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
              {content.instagramSection.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {content.instagramSection.subtitle}
            </p>
          </div>
        </Reveal>

        {/* Profile Card Banner */}
        <Reveal direction="up" delay={150}>
          <div className="rounded-2xl glass-panel border border-slate-800 p-6 sm:p-8 mb-12 shadow-2xl">
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
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1.5">
                    <span className="text-xl font-bold text-white tracking-tight">graphic_art_studio</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-medium">
                      Oficiální profil
                    </span>
                  </div>
                  
                  <div className="text-xs text-slate-400 flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 mb-2">
                    <span><strong>754</strong> sledujících</span>
                    <span><strong>123</strong> příspěvků</span>
                    <span>Liberec, ČR</span>
                  </div>

                  <div className="text-xs text-slate-300 max-w-xl line-clamp-2">
                    💡 Vývěsky • 🎨 Design & tisk • 🚗 Výlohy / auta / polepy • 🖼 HD obrazy na hliníku • 👕 Textil / sklo • 🌐 Orlí 261/8, Liberec
                  </div>
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                <a
                  href="https://www.instagram.com/graphic_art_studio/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 hover:from-pink-500 hover:to-amber-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-pink-600/20 transition-all transform hover:-translate-y-0.5"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>{content.instagramSection.followBtn}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://ig.me/m/graphic_art_studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-200 text-xs sm:text-sm font-semibold transition-colors"
                >
                  <Send className="w-3.5 h-3.5 text-sky-400" />
                  <span>{content.instagramSection.directBtn}</span>
                </a>
              </div>

            </div>
          </div>
        </Reveal>

        {/* Visual Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post, idx) => (
            <Reveal
              key={idx}
              direction="up"
              delay={100 + idx * 80}
              duration={600}
            >
              <a
                href="https://www.instagram.com/graphic_art_studio/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-xl overflow-hidden glass-panel border border-slate-800/80 hover:border-pink-500/50 transition-all duration-300 shadow-md block"
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Instagram Hover Overlay */}
                <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-between text-white text-center">
                  <div className="flex items-center justify-center gap-4 text-xs font-bold pt-4">
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-4 h-4 text-sky-400" />
                      {post.comments}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-200 line-clamp-3 leading-tight px-1 pb-2">
                    {post.caption}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
