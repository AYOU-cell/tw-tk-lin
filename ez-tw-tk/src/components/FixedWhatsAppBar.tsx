import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useState } from 'react';
import { LineIcon } from './LineIcon';

export function FixedWhatsAppBar() {
  const { t } = useLanguage();
  const [isRevealed, setIsRevealed] = useState(false);
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: '#1A73E8' }}>
      <div className="max-w-md mx-auto px-5 py-3">
        <div className="flex items-center justify-between gap-3">
          {/* Left: Title */}
          <div className="text-white text-sm font-medium flex-shrink-0">
            {t('whatsapp.title')}
          </div>
          
          {/* Right: Language Switcher */}
          <div className="flex-shrink-0">
            <LanguageSwitcher />
          </div>
        </div>
        
        {/* WhatsApp CTA Button */}
        <button
          onClick={() => setIsRevealed(!isRevealed)}
          className={`flex items-center justify-center gap-3 w-full py-3 px-6 rounded-xl shadow-md transition-all duration-500 active:scale-95 mt-3 ${
            isRevealed 
              ? 'bg-gradient-to-r from-[#1A73E8] to-[#3BB273] text-white' 
              : 'bg-[#25D366] hover:bg-[#20BA5A] text-white hover:shadow-lg'
          }`}
        >
          <LineIcon className={`w-5 h-5 transition-transform duration-500 ${isRevealed ? 'rotate-12 scale-110' : ''}`} />
          <span className="font-medium">
            {isRevealed ? t('whatsapp.revealed') : t('whatsapp.cta')}
          </span>
        </button>
      </div>
    </div>
  );
}