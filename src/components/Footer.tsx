import React from 'react';
import { Phone, MapPin, ArrowUp, MessageCircle } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import type { ContentData } from '../data/content';

interface FooterProps {
  content: ContentData;
}

export const Footer: React.FC<FooterProps> = ({ content }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#03060a] border-t border-slate-900 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          
          {/* Col 1 & 2: Brand & Address (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden ring-1 ring-sky-500/30">
                <img
                  src="/assets/logo.jpg"
                  alt="GraphicArt Studio Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight">GraphicArt Studio</span>
                <span className="block text-[11px] text-sky-400 font-mono">LIBEREC • CZECH REPUBLIC</span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Zakázková výroba světelných vývěsek, polepy automobilů a výloh, velkoformátový UV tisk a originální HD obrazy na broušeném hliníku.
            </p>

            <div className="pt-2 text-xs space-y-1.5 text-slate-300">
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

          {/* Col 3: Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">
              {content.nav.services}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-sky-300 transition-colors">
                  Světelné vývěsky & 3D písmo
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-300 transition-colors">
                  Polepy aut & dodávek
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-300 transition-colors">
                  Polepy výloh & pískované fólie
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-300 transition-colors">
                  HD Obrazy na hliníku (Dibond)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-300 transition-colors">
                  Textil & brandované sklo
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">
              Navigace
            </h4>
            <ul className="space-y-2 text-xs">
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
              <li>
                <a href="#contact" className="hover:text-sky-300 transition-colors">
                  {content.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Social Channels */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">
              Sledujte studio
            </h4>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/graphic_art_studio/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500/40 text-xs text-slate-300 hover:text-white transition-all group"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
                <span>@graphic_art_studio</span>
              </a>

              <a
                href="https://wa.me/420607150507"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 text-xs text-slate-300 hover:text-white transition-all group"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>WhatsApp chat</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} GraphicArt Studio. Všechna práva vyhrazena. Liberec, Česká republika.
          </div>

          <div className="flex items-center gap-6">
            <span>Design & Výroba: Yeliena Loboda</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              aria-label="Zpět nahoru"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
