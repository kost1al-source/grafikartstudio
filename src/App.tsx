import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsRibbon } from './components/StatsRibbon';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyUsSection } from './components/WhyUsSection';
import { CalculatorSection } from './components/CalculatorSection';
import { InstagramFeed } from './components/InstagramFeed';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { contentCS, contentEN } from './data/content';
import { Phone, MessageCircle } from 'lucide-react';

export function App() {
  const [lang, setLang] = useState<'cs' | 'en'>('cs');
  const [preselectedService, setPreselectedService] = useState<string>('signs');
  const [prefilledNote, setPrefilledNote] = useState<string>('');

  const currentContent = lang === 'cs' ? contentCS : contentEN;

  const handleSelectServiceForQuote = (serviceId: string) => {
    setPreselectedService(serviceId);
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquireProject = (projectTitle: string) => {
    setPrefilledNote(`Mám zájem o realizaci podobnou projektu: "${projectTitle}".`);
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070b12] text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      {/* Sticky Studio Navigation */}
      <Navbar content={currentContent} lang={lang} setLang={setLang} />

      <main className="flex-grow">
        {/* Hero Banner */}
        <Hero content={currentContent} />

        {/* Studio Stats & Trust Ribbon */}
        <StatsRibbon content={currentContent} />

        {/* 5 Core Authentic Services */}
        <ServicesSection
          content={currentContent}
          onSelectServiceForQuote={handleSelectServiceForQuote}
        />

        {/* Filterable Portfolio & Lightbox */}
        <PortfolioSection
          content={currentContent}
          onInquireProject={handleInquireProject}
        />

        {/* 4-Step Production Process */}
        <ProcessSection content={currentContent} />

        {/* Why GraphicArt Studio */}
        <WhyUsSection content={currentContent} />

        {/* Interactive Instant Estimate & WhatsApp generator */}
        <CalculatorSection
          content={currentContent}
          preselectedService={preselectedService}
          prefilledNote={prefilledNote}
        />

        {/* Live Instagram Feed & Social Proof */}
        <InstagramFeed content={currentContent} />

        {/* About Yeliena Loboda & Liberec Studio */}
        <AboutSection content={currentContent} />

        {/* Contact & Map Card */}
        <ContactSection content={currentContent} />
      </main>

      {/* Studio Footer */}
      <Footer content={currentContent} />

      {/* Floating Quick Action Buttons on Desktop/Mobile */}
      <aside aria-label="Rychlé kontakty" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        <a
          href="https://wa.me/420607150507"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:scale-110 transition-all duration-200 group"
          title="Napsat na WhatsApp"
          aria-label="Napsat na WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>

        <a
          href="tel:+420607150507"
          className="w-12 h-12 rounded-2xl bg-sky-500 hover:bg-sky-400 text-white flex items-center justify-center shadow-xl shadow-sky-500/30 hover:scale-110 transition-all duration-200 group"
          title="Zavolat do studia: 607 150 507"
          aria-label="Zavolat do studia"
        >
          <Phone className="w-5 h-5" />
        </a>
      </aside>
    </div>
  );
}

export default App;
