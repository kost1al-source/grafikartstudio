import React from 'react';
import { Phone, MapPin, ArrowUp, MessageCircle } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import type { ContentData } from '../data/content';
import { getAssetUrl } from '../utils/asset';

interface FooterProps {
  content: ContentData;
}

export const Footer: React.FC<FooterProps> = ({ content }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#04060a] border-t border-white/[0.08] pt-20 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/[0.06]">
          
          {/* Brand & Address (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl overflow-hidden ring-1 ring-white/20 group-hover:ring-sky-400 transition-all">
                <img
                  src={getAssetUrl('assets/logo.jpg')}
                  alt="GraphicArt Studio Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight font-headline">
                  GraphicArt Studio
                </span>
                <span className="block text-[11px] text-sky-400 font-tech">
                  LIBEREC • CZECH REPUBLIC
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-sans">
              Zakázková manufaktura 3D světelných vývěsek, polepy automobilů a výloh, velkoformátový UV tisk a autorské HD obrazy na broušeném hliníku Dibond.
            </p>

            <div className="pt-2 text-xs font-tech space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Orlí 261/8, 460 07 Liberec III-Jeřáb</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:+420607150507" className="hover:text-white transition-colors">
                  +420 607 150 507
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links: Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-tech">
              {content.nav.services}
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <a href="#services" className="hover:text-sky-300 transition-colors">
                  3D Vývěsky & Písma
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-300 transition-colors">
                  Polepy aut & dodávek
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-300 transition-colors">
                  Výlohy & pískovaná skla
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-300 transition-colors">
                  HD Obrazy na Dibondu
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-300 transition-colors">
                  Firemní textil & sklo
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-tech">
              Ateliér & Výroba
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <a href="#materials" className="hover:text-sky-300 transition-colors">
                  {content.nav.materials}
                </a>
              </li>
              <li>
                <a href="#transformation" className="hover:text-sky-300 transition-colors">
                  {content.nav.beforeAfter}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-sky-300 transition-colors">
                  {content.nav.portfolio}
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-sky-300 transition-colors">
                  {content.nav.process}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-sky-300 transition-colors">
                  {content.nav.calculator}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-sky-300 transition-colors">
                  {content.nav.about}
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-tech">
              Kontakt & Sítě
            </h4>
            <ul className="space-y-3 text-xs font-tech">
              <li>
                <a
                  href="https://www.instagram.com/graphic_art_studio/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-400" />
                  <span>@graphic_art_studio</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/420607150507"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.04] hover:bg-white/10 text-white border border-white/10 transition-colors cursor-pointer"
                >
                  <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
                  <span>Zpět nahoru</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-tech text-slate-500">
          <div>
            © {new Date().getFullYear()} GraphicArt Studio • Yeliena Loboda. Všechna práva vyhrazena.
          </div>
          <div className="flex items-center gap-4">
            <span>Orlí 261/8, Liberec</span>
            <span>•</span>
            <span className="text-slate-400">Design & Manufaktura</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
