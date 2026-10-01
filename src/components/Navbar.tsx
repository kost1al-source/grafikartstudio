import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: content.nav.services },
    { href: '#materials', label: content.nav.materials },
    { href: '#transformation', label: content.nav.beforeAfter },
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
          ? 'bg-[#080c14]/90 backdrop-blur-xl border-b border-white/[0.08] py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Identity & Location */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-1 ring-white/20 group-hover:ring-sky-400 transition-all duration-300 shadow-lg shadow-black/50 shrink-0">
              <img
                src={getAssetUrl('assets/logo.jpg')}
                alt="GraphicArt Studio Logo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-headline font-extrabold text-lg tracking-tight text-white group-hover:text-sky-300 transition-colors">
                  GraphicArt
                </span>
                <span className="text-[10px] font-tech uppercase tracking-wider px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 font-semibold">
                  ATELIER
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-tech text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>LIBEREC • VÝROBA V PROVOZU</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium font-sans tracking-wide text-slate-300 hover:text-white transition-colors duration-200 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center p-0.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-tech">
              <button
                onClick={() => setLang('cs')}
                className={`px-2.5 py-1 rounded-md transition-all duration-200 cursor-pointer ${
                  lang === 'cs'
                    ? 'bg-sky-500 text-slate-950 font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                CZ
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-md transition-all duration-200 cursor-pointer ${
                  lang === 'en'
                    ? 'bg-sky-500 text-slate-950 font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* Direct Phone */}
            <a
              href="tel:+420607150507"
              className="hidden lg:flex items-center gap-2 text-xs font-tech text-slate-300 hover:text-sky-300 transition-colors py-1.5 px-3 rounded-lg border border-white/[0.08] hover:border-white/20"
              title="Zavolat do ateliéru"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>607 150 507</span>
            </a>

            {/* Quote Primary CTA */}
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs tracking-wide shadow-lg shadow-sky-500/20 transition-all duration-200 group"
            >
              <span>{content.nav.quoteBtn}</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-3 xl:hidden">
            <div className="flex items-center p-0.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-tech sm:hidden">
              <button
                onClick={() => setLang('cs')}
                className={`px-2 py-0.5 rounded ${lang === 'cs' ? 'bg-sky-500 text-slate-950 font-bold' : 'text-slate-400'}`}
              >
                CZ
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded ${lang === 'en' ? 'bg-sky-500 text-slate-950 font-bold' : 'text-slate-400'}`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200 hover:text-white"
              aria-label="Přepnout navigaci"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#080c14]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-8 animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-200 hover:text-sky-400 transition-colors py-2 border-b border-white/[0.04]"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="tel:+420607150507"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 border border-white/10 text-slate-200 text-sm font-tech"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>+420 607 150 507</span>
              </a>

              <a
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-sky-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-sky-500/25"
              >
                <span>{content.nav.quoteBtn}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
