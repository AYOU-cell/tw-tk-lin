import { HeroSection } from './components/HeroSection';
import { PriceDifferenceSection } from './components/PriceDifferenceSection';
import { FixedWhatsAppBar } from './components/FixedWhatsAppBar';
import { Footer } from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <FixedWhatsAppBar />
        <div className="pt-[140px]">
          <HeroSection />
          <PriceDifferenceSection />
        </div>
        <Footer />
      </div>
    </LanguageProvider>
  );
}