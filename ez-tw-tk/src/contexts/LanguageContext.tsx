import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'zh-TW';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  'zh-TW': {
    // Hero Section
    'hero.badge': '免費加入',
    'hero.title': '賦能有志之士，建立真實技能與可擴展收入 — 完全免費',
    'hero.description': '學習經過驗證的策略，從中國採購產品並銷往全球。加入數千名已經通過我們全面培訓改變財務未來的學員。',
    'hero.cta': '免費開始學習',
    'hero.stats.students': '活躍學員',
    'hero.stats.rating': '平均評分',
    'hero.stats.countries': '個國家遍布全球',
    
    // Price Difference Section
    'price.title': '價差利潤展示',
    'price.subtitle': '真實案例：Michael Kors 手錶',
    'price.china.label': '中國價格',
    'price.china.price': '¥580',
    'price.china.usd': '≈ HK$620',
    'price.europe.label': '歐洲零售價',
    'price.europe.price': '€299',
    'price.europe.usd': '≈ HK$2,500',
    'price.profit.title': '您的潛在利潤',
    'price.profit.margin': 'HK$1,880 每件',
    'price.profit.percentage': '300% 加價潛力',
    'price.profit.note': '*利潤率可能因運費、稅收和市場條件而有所不同。這是一個教育示例。',
    'price.clickToZoom': '點擊圖片放大',
    'price.profit.perOrder': '每單利潤：US$110+',
    'price.profit.flow': '低成本採購 → 高利潤銷售 → 輕鬆跨境賺錢',
    'price.zoom.close': '點擊任意位置關閉',
    
    // Footer
    'footer.disclaimer.title': '重要免責聲明',
    'footer.disclaimer.income': '收入免責聲明',
    'footer.disclaimer.income.text': '任何收入或收益聲明，或任何收入或收益示例，僅是我們認為您可能賺取的估計。無法保證您會像示例中所述那樣取得成功。如果您依賴所提供的任何數字，您必須接受未能達到信息所示結果的全部風險。無論收入或收益示例是貨幣性質還是與可能賺取的廣告積分有關（無論這些積分是否可轉換為現金），這都適用。',
    'footer.disclaimer.guarantee': '無保證',
    'footer.disclaimer.guarantee.text': '不保證您會使用這些材料中的技術和想法賺到任何錢。這些材料中的示例不應被解釋為收入的承諾或保證。收入潛力完全取決於使用我們產品、想法、技術的人以及所付出的努力。我們不將此視為"快速致富計劃"。',
    'footer.disclaimer.liability': '責任免責聲明',
    'footer.disclaimer.liability.text': '您明確同意，您使用或無法使用該服務的風險由您自行承擔。該服務以及通過該服務向您提供的所有產品和服務（除非我們明確說明）均"按原樣"和"按可用性"提供給您使用，不作任何明示或暗示的陳述、保證或條件。',
    'footer.disclaimer.affiliate': '聯盟披露',
    'footer.disclaimer.affiliate.text': '此頁面上的某些鏈接可能是聯盟鏈接。如果您通過聯盟鏈接購買產品或服務，我們可能會收到佣金。這不會影響您支付的價格。',
    'footer.disclaimer.testimonials': '推薦免責聲明',
    'footer.disclaimer.testimonials.text': '所使用的推薦和示例是特殊結果，不適用於普通購買者，也不旨在代表或保證任何人會取得相同或類似的結果。每個人的成功取決於他或她的背景、奉獻精神、願望和動力。',
    'footer.links': '快速鏈接',
    'footer.privacy': '隱私政策',
    'footer.terms': '服務條款',
    'footer.contact': '聯絡我們',
    'footer.copyright': '© 2025 EZ Entrepreneur Academy。保留所有權利。',
    'footer.contact.info': '電郵：a2487806918@gmail.com  紐約，美國',
    
    // WhatsApp Bar
    'whatsapp.title': 'EZ Entrepreneur Academy',
    'whatsapp.cta': '了解更多或聯繫我們',
    'whatsapp.revealed': '添加Line：@ecpro并發送名字',
  },
  en: {
    // Hero Section
    'hero.badge': 'Free to Join',
    'hero.title': 'Empowering Ambitious People to Build Real Skills and Scalable Income — For Free',
    'hero.description': 'Learn proven strategies to source products from China and sell globally. Join thousands who have transformed their financial future with our comprehensive training.',
    'hero.cta': 'Start Learning Free',
    'hero.stats.students': 'Active Students',
    'hero.stats.rating': 'Average Rating',
    'hero.stats.countries': 'Countries Worldwide',
    
    // Price Difference Section
    'price.title': 'The Price Difference Profit Showcase',
    'price.subtitle': 'Real Example: Michael Kors Watches',
    'price.china.label': 'China Price',
    'price.china.price': '¥580',
    'price.china.usd': '≈ $80 USD',
    'price.europe.label': 'Europe Retail',
    'price.europe.price': '€299',
    'price.europe.usd': '≈ $320 USD',
    'price.profit.title': 'Your Potential Profit',
    'price.profit.margin': '$240 per unit',
    'price.profit.percentage': '300% markup potential',
    'price.profit.note': '*Profit margins may vary based on shipping, taxes, and market conditions. This is an educational example.',
    'price.clickToZoom': 'Click images to zoom',
    'price.profit.perOrder': 'Profit per order: $110+',
    'price.profit.flow': 'Low-cost sourcing → High-margin sales → Easy cross-border earnings',
    'price.zoom.close': 'Click anywhere to close',
    
    // Footer
    'footer.disclaimer.title': 'Important Disclaimers',
    'footer.disclaimer.income': 'Income Disclaimer',
    'footer.disclaimer.income.text': 'Any earnings or income statements, or any earnings or income examples, are only estimates of what we think you could earn. There is no assurance you will do as well as stated in any examples. If you rely upon any figures provided, you must accept the entire risk of not doing as well as the information indicates. This applies whether the earnings or income examples are monetary in nature or pertain to advertising credits which may be earned (whether such credits are convertible to cash or not).',
    'footer.disclaimer.guarantee': 'No Guarantee',
    'footer.disclaimer.guarantee.text': 'There is no guarantee that you will earn any money using the techniques and ideas in these materials. Examples in these materials are not to be interpreted as a promise or guarantee of earnings. Earning potential is entirely dependent on the person using our product, ideas, techniques and the effort put forth. We do not purport this as a "get rich scheme."',
    'footer.disclaimer.liability': 'Liability Disclaimer',
    'footer.disclaimer.liability.text': 'You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided "as is" and "as available" for your use, without any representation, warranties or conditions of any kind, either express or implied.',
    'footer.disclaimer.affiliate': 'Affiliate Disclosure',
    'footer.disclaimer.affiliate.text': 'Some links on this page may be affiliate links. If you purchase a product or service through an affiliate link, we may receive a commission. This does not affect the price you pay.',
    'footer.disclaimer.testimonials': 'Testimonials Disclaimer',
    'footer.disclaimer.testimonials.text': 'The testimonials and examples used are exceptional results, which do not apply to the average purchaser, and are not intended to represent or guarantee that anyone will achieve the same or similar results. Each individual\'s success depends on his or her background, dedication, desire and motivation.',
    'footer.links': 'Quick Links',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.contact': 'Contact Us',
    'footer.copyright': '© 2025 EZ Entrepreneur Academy. All Rights Reserved.',
    'footer.contact.info': 'Email: a2487806918@gmail.com  New York, USA',
    
    // WhatsApp Bar
    'whatsapp.title': 'EZ Entrepreneur Academy',
    'whatsapp.cta': 'Learn More or Contact Us',
    'whatsapp.revealed': 'Add Line: @ecpro and send your name',
  },
};

const languageNames: Record<Language, string> = {
  'zh-TW': '🇭🇰 繁體中文',
  'en': '🇺🇸 English',
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh-TW');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export { languageNames };
