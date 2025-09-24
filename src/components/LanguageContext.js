import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Auto-detect language based on browser language
    const browserLang = navigator.language || navigator.userLanguage;
    const detectedLang = browserLang.startsWith('id') ? 'id' : 'en';
    setLanguage(detectedLang);
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'id' : 'en');
  };

  const translations = {
    en: {
      tagline: "R7Z, coin for the long term",
      joinCommunity: "Join Community",
      aboutTitle: "About R7Z",
      aboutDesc: "R7Z is a crypto project on Binance Smart Chain with small supply, community focus, and long-term vision.",
      tokenInfo: "Token Information",
      blockchain: "Blockchain",
      supply: "Supply",
      tokenAddress: "Token Address",
      pool: "Pool",
      buyOnPancake: "Buy on PancakeSwap",
      priceStabilization: "Price Stabilization",
      mintBurn: "Mint & Burn",
      mintBurnDesc: "R7Z tokens can be minted and burned to maintain price stability and prevent extreme volatility",
      liveTrading: "Live Trading Chart",
      liveTradingDesc: "Real-time price chart and trading data powered by DEXTools",
      viewOnDEXTools: "View on DEXTools",
      roadmap: "Roadmap",
      launch: "Launch",
      growingCommunity: "Growing Community",
      listing: "Listing on DEXTools & Dexscreener",
      comingSoon: "Coming Soon",
      tokenomics: "Tokenomics",
      tokenomicsComingSoon: "Coming Soon",
      faq: "FAQ",
      faq1: "What is R7Z?",
      faq1Answer: "R7Z is a community-driven cryptocurrency project built on Binance Smart Chain with a focus on long-term growth and community development.",
      faq2: "How to buy R7Z?",
      faq2Answer: "You can buy R7Z on PancakeSwap using the provided link. Make sure you have BNB in your wallet for gas fees.",
      faq3: "Is R7Z safe?",
      faq3Answer: "R7Z is built on Binance Smart Chain, one of the most secure and reliable blockchain networks. However, always do your own research before investing.",
      faq4: "What are R7Z's future plans?",
      faq4Answer: "Our roadmap includes community growth, DEX listings, and exciting new features. Stay tuned for updates!",
      community: "Community & Contact",
      footer: "Copyright © 2025 R7Z",
      navigation: {
        about: "About",
        token: "Token",
        roadmap: "Roadmap",
        faq: "FAQ",
        community: "Community"
      }
    },
    id: {
      tagline: "R7Z, koin untuk jangka panjang",
      joinCommunity: "Bergabung Komunitas",
      aboutTitle: "Tentang R7Z",
      aboutDesc: "R7Z adalah project crypto di Binance Smart Chain dengan supply kecil, fokus komunitas, dan visi jangka panjang.",
      tokenInfo: "Informasi Token",
      blockchain: "Blockchain",
      supply: "Supply",
      tokenAddress: "Alamat Token",
      pool: "Pool",
      buyOnPancake: "Beli di PancakeSwap",
      priceStabilization: "Stabilisasi Harga",
      mintBurn: "Mint & Burn",
      mintBurnDesc: "Token R7Z dapat di-mint dan di-burn untuk menjaga stabilitas harga dan mencegah volatilitas ekstrem",
      liveTrading: "Chart Trading Langsung",
      liveTradingDesc: "Chart harga real-time dan data trading yang didukung oleh DEXTools",
      viewOnDEXTools: "Lihat di DEXTools",
      roadmap: "Roadmap",
      launch: "Launch",
      growingCommunity: "Mengembangkan Komunitas",
      listing: "Listing di DEXTools & Dexscreener",
      comingSoon: "Segera Hadir",
      tokenomics: "Tokenomics",
      tokenomicsComingSoon: "Segera Hadir",
      faq: "FAQ",
      faq1: "Apa itu R7Z?",
      faq1Answer: "R7Z adalah project cryptocurrency yang digerakkan komunitas yang dibangun di Binance Smart Chain dengan fokus pada pertumbuhan jangka panjang dan pengembangan komunitas.",
      faq2: "Bagaimana cara membeli R7Z?",
      faq2Answer: "Anda dapat membeli R7Z di PancakeSwap menggunakan link yang disediakan. Pastikan Anda memiliki BNB di wallet untuk biaya gas.",
      faq3: "Apakah R7Z aman?",
      faq3Answer: "R7Z dibangun di Binance Smart Chain, salah satu jaringan blockchain yang paling aman dan terpercaya. Namun, selalu lakukan riset sendiri sebelum berinvestasi.",
      faq4: "Apa rencana ke depan R7Z?",
      faq4Answer: "Roadmap kami meliputi pertumbuhan komunitas, listing di DEX, dan fitur-fitur baru yang menarik. Pantau terus update-nya!",
      community: "Komunitas & Kontak",
      footer: "Hak Cipta © 2025 R7Z",
      navigation: {
        about: "Tentang",
        token: "Token",
        roadmap: "Roadmap",
        faq: "FAQ",
        community: "Komunitas"
      }
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
