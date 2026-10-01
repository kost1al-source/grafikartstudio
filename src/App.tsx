import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsRibbon } from './components/StatsRibbon';
import { MaterialAtelier } from './components/MaterialAtelier';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyUsSection } from './components/WhyUsSection';
import { CalculatorSection } from './components/CalculatorSection';
import { InstagramFeed } from './components/InstagramFeed';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AmbientSpotlight } from './components/AmbientSpotlight';
import { useLenis } from './hooks/useLenis';
import { contentCS, contentEN } from './data/content';
import { Phone, MessageCircle } from 'lucide-react';

export function App() {
  // Initialize Awwwards-caliber smooth inertial scroll
  useLenis();

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

  const handleSelectMaterialForQuote = (serviceId: string, materialName: string) => {
    setPreselectedService(serviceId);
    setPrefilledNote(`Mám zájem o kalkulaci materiálu: ${materialName}`);
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
    <div className="min-h-screen bg-[#080b11] text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-white relative">
      {/* Subtle Interactive Ambient Lighting */}
      <AmbientSpotlight />

      {/* Sticky Studio Navigation */}
      <Navbar content={currentContent} lang={lang} setLang={setLang} />

      <main className="flex-grow">
        {/* 1. Monumental Atelier Hero */}
        <Hero content={currentContent} />

        {/* 2. Studio Stats & Trust Ribbon */}
        <StatsRibbon content={currentContent} />

        {/* 3. NEW: Tactile Material Atelier & Sample Board */}
        <MaterialAtelier
          content={currentContent}
          onSelectMaterialForQuote={handleSelectMaterialForQuote}
        />

        {/* 4. NEW: Interactive Before & After Visualizer */}
        <BeforeAfterSlider
          content={currentContent}
          onInquire={() => handleSelectServiceForQuote('cars')}
        />

        {/* 5. Craft Disciplines / Services */}
        <ServicesSection
          content={currentContent}
          onSelectServiceForQuote={handleSelectServiceForQuote}
        />

        {/* 6. Filterable Asymmetrical Portfolio & Lightbox Modal */}
        <PortfolioSection
          content={currentContent}
          onInquireProject={handleInquireProject}
        />

        {/* 7. Production Process */}
        <ProcessSection content={currentContent} />

        {/* 8. Why GraphicArt Studio */}
        <WhyUsSection content={currentContent} />

        {/* 9. Interactive Specifier & WhatsApp Quote Generator */}
        <CalculatorSection
          content={currentContent}
          preselectedService={preselectedService}
          prefilledNote={prefilledNote}
        />

        {/* 10. Live Instagram Feed & Social Proof */}
        <InstagramFeed content={currentContent} />

        {/* 11. About Yeliena Loboda & Liberec Studio */}
        <AboutSection content={currentContent} />

        {/* 12. Contact & Maps Card */}
        <ContactSection content={currentContent} />
      </main>

      {/* Studio Footer */}
      <Footer content={currentContent} />

      {/* Floating Quick Action Buttons on Desktop/Mobile */}
      <aside aria-label="Rychlé kontakty" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <a
          href="https://wa.me/420607150507"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-all duration-200 group"
          title="Napsat na WhatsApp"
          aria-label="Napsat na WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-slate-950" />
        </a>

        <a
          href="tel:+420607150507"
          className="w-12 h-12 rounded-2xl bg-sky-500 hover:bg-sky-400 text-slate-950 flex items-center justify-center shadow-2xl shadow-sky-500/40 hover:scale-110 transition-all duration-200 group"
          title="Zavolat do ateliéru: 607 150 507"
          aria-label="Zavolat do ateliéru"
        >
          <Phone className="w-5 h-5 fill-slate-950" />
        </a>
      </aside>
    </div>
  );
}

export default App;
