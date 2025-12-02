import { ArrowRight, Lightbulb, X, ZoomIn } from 'lucide-react';
import { useState } from 'react';
import chinaPriceImg from 'figma:asset/f8e9dd9a821bfc2b0ae8b8abcb23ab779c290e38.png';
import europePriceImg from 'figma:asset/7db8aba9206574064be23356715420f6ee23662c.png';
import { useLanguage } from '../contexts/LanguageContext';
import { LineIcon } from './LineIcon';

export function PriceDifferenceSection() {
  const { t } = useLanguage();
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 px-5 py-16">
      <div className="max-w-md mx-auto">
        <h3 className="text-[#0A1E5A] mb-6 text-center">{t('price.title')}</h3>
        
        {/* Two-Column Comparison */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {/* Left Column - China Purchase Price */}
          <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
            <div className="relative group">
              <img
                src={chinaPriceImg}
                alt="China Purchase Price"
                className="w-full h-40 object-cover rounded-lg mb-3 cursor-pointer transition-opacity hover:opacity-90"
                onClick={() => setZoomedImage(chinaPriceImg)}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-black/50 rounded-full p-2">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <h4 className="text-[#0A1E5A] text-sm mb-1">{t('price.china.label')}</h4>
            <p className="text-xs text-gray-600 mb-2">{t('price.subtitle')}</p>
            <div className="text-[#005CE6] text-xl">$188.70</div>
          </div>

          {/* Right Column - Europe Selling Price */}
          <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
            <div className="relative group">
              <img
                src={europePriceImg}
                alt="Europe Selling Price"
                className="w-full h-40 object-cover rounded-lg mb-3 cursor-pointer transition-opacity hover:opacity-90"
                onClick={() => setZoomedImage(europePriceImg)}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-black/50 rounded-full p-2">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <h4 className="text-[#0A1E5A] text-sm mb-1">{t('price.europe.label')}</h4>
            <p className="text-xs text-gray-600 mb-2">{t('price.subtitle')}</p>
            <div className="text-[#005CE6] text-xl">$299.99</div>
          </div>
        </div>

        {/* Arrow Indicator */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-[#0A1E5A]">China</span>
          <ArrowRight className="w-5 h-5 text-[#005CE6]" />
          <span className="text-[#0A1E5A]">Europe</span>
        </div>

        {/* Profit Highlight */}
        <div className="bg-gradient-to-r from-[#005CE6] to-[#0A1E5A] rounded-2xl p-6 text-center shadow-lg mb-6">
          <div className="text-white text-2xl mb-2">{t('price.profit.perOrder')}</div>
          <p className="text-white/90 text-sm">
            {t('price.profit.flow')}
          </p>
        </div>

        {/* Compliance Disclaimer */}
        <p className="text-center text-[#9FA6B2] italic mb-10" style={{ fontSize: '11px', lineHeight: '1.5' }}>
          {t('price.profit.note')}
        </p>

        {/* WhatsApp CTA Button */}
        <div>
          <button
            onClick={() => setIsRevealed(!isRevealed)}
            className={`flex items-center justify-center gap-3 w-full py-5 px-8 rounded-2xl shadow-xl transition-all duration-500 active:scale-95 ${
              isRevealed 
                ? 'bg-gradient-to-r from-[#1A73E8] to-[#3BB273] text-white' 
                : 'bg-[#25D366] hover:bg-[#20BA5A] text-white hover:shadow-2xl'
            }`}
          >
            <LineIcon className={`w-7 h-7 transition-transform duration-500 ${isRevealed ? 'rotate-12 scale-110' : ''}`} />
            <span className="text-xl">
              {isRevealed ? t('whatsapp.revealed') : t('whatsapp.cta')}
            </span>
          </button>
        </div>
      </div>

      {/* Zoomed Image Modal */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setZoomedImage(null)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <img
              src={zoomedImage}
              alt="Zoomed Image"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute -top-4 -right-4 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-colors"
              onClick={() => setZoomedImage(null)}
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
              {t('price.zoom.close')}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}