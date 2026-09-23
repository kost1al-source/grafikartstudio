import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import type { ContentData } from '../data/content';
import { getAssetUrl } from '../utils/asset';

interface NavbarProps {
  content: ContentData;
  lang: 'cs' | 'en';
  setLang: (lang: 'cs' | 'en') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ content, lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: content.nav.services },
    { href: '#portfolio', label: content.nav.portfolio },
    { href: '#process', label: content.nav.process },
    { href: '#calculator', label: content.nav.calculator },
    { href: '#about', label: content.nav.about },
    { href: '#contact', label: content.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070b12]/90 backdrop-blur-md border-b border-sky-950/40 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden ring-1 ring-sky-500/30 group-hover:ring-sky-400 transition-all duration-300 shadow-lg shadow-sky-950/50">
              <img
                src={getAssetUrl('assets/logo.jpg')}
                alt="GraphicArt Studio Logo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-sky-300 transition-colors">
                  GraphicArt
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-400 font-mono border border-sky-500/20">
                  STUDIO
                </span>
              </div>
              <span className="text-[11px] text-slate-400 tracking-wider uppercase font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Liberec • Orlí 261/8
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-sky-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-900/80 rounded-lg p-0.5 border border-slate-800 text-xs font-semibold">
              <button
                onClick={() => setLang('cs')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  lang === 'cs'
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                aria-label="Přepnout do češtiny"
              >
                CZ
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  lang === 'en'
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>

            {/* Quick Phone */}
            <a
              href="tel:+420607150507"
              className="flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-sky-300 transition-colors px-3 py-1.5 rounded-lg hover:bg-slate-800/60"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>607 150 507</span>
            </a>

            {/* Primary CTA */}
            <a
              href="#calculator"
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 shadow-md shadow-sky-500/20 hover:shadow-sky-500/35 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{content.nav.quoteBtn}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Mobile Lang */}
            <button
              onClick={() => setLang(lang === 'cs' ? 'en' : 'cs')}
              className="text-xs px-2 py-1 rounded bg-slate-800 border border-slate-700 text-sky-300 font-semibold"
            >
              {lang === 'cs' ? 'EN' : 'CZ'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Otevřít menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] bg-[#070b12]/95 backdrop-blur-xl z-40 border-t border-slate-800/80 px-6 py-8 flex flex-col justify-between">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400/80">Menu studia</span>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-semibold text-slate-200 hover:text-sky-300 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-5 h-5 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-slate-800">
            <a
              href="tel:+420607150507"
              className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>+420 607 150 507</span>
            </a>
            <a
              href="https://wa.me/420607150507"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 font-semibold text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-500 text-white font-semibold text-sm shadow-lg shadow-sky-500/25"
            >
              <span>{content.nav.quoteBtn}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
