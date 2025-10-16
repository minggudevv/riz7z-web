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
      tagline: "RIZ7Z, coin for the long term",
      joinCommunity: "Join Community",
      aboutTitle: "About RIZ7Z",
      aboutDesc: "RIZ7Z is a crypto project on Binance Smart Chain with small supply, community focus, and long-term vision.",
      tokenInfo: "Token Information",
      symbol: "Symbol",
      blockchain: "Blockchain",
      supply: "Total Supply",
      tokenAddress: "Token Address",
      pool: "Liquidity Pool",
      buyOnPancake: "Buy on PancakeSwap",
      priceStabilization: "Price Stabilization",
      mintBurn: "Mint & Burn",
      mintBurnDesc: "RIZ7Z tokens can be minted and burned to maintain price stability and prevent extreme volatility",
      liveTrading: "Live Trading Chart",
      liveTradingDesc: "Real-time price chart and trading data powered by DEXTools",
      viewOnDEXTools: "View on DEXTools",
      roadmap: "Roadmap",
      launch: "Launch",
      growingCommunity: "Community Growth",
      listing: "DEX Listings",
      comingSoon: "Coming Soon",
      tokenomics: "Tokenomics",
      tokenomicsComingSoon: "Coming Soon",
      faq: "FAQ",
      faq1: "What is RIZ7Z?",
      faq1Answer: "RIZ7Z is a community-driven cryptocurrency project built on Binance Smart Chain with a focus on long-term growth and community development.",
      faq2: "How to buy RIZ7Z?",
      faq2Answer: "You can buy RIZ7Z on PancakeSwap using the provided link. Make sure you have BNB in your wallet for gas fees.",
      faq3: "Is RIZ7Z safe?",
      faq3Answer: "RIZ7Z is built on Binance Smart Chain, one of the most secure and reliable blockchain networks. However, always do your own research before investing.",
      faq4: "What are RIZ7Z's future plans?",
      faq4Answer: "Our roadmap includes community growth, DEX listings, and exciting new features. Stay tuned for updates!",
      community: "Community & Contact",
      footer: "Copyright © 2025 RIZ7Z",
      copySuccess: "Successfully copied to clipboard!",
      copyError: "Failed to copy to clipboard",
      notification: {
        success: "Success!",
        error: "Error!"
      },
      features: {
        fastSecure: {
          title: "Fast & Secure",
          description: "Built on Binance Smart Chain for speed and security"
        },
        communityDriven: {
          title: "Community Driven",
          description: "Focused on building a strong and engaged community"
        },
        longTermVision: {
          title: "Long-term Vision",
          description: "Designed for sustainable growth and development"
        },
        priceStability: {
          title: "Price Stability",
          description: "Mint and burn mechanism to maintain stable token value"
        }
      },
      tokenSymbol: "Token Symbol",
      quickLinks: "Quick Links",
      connectWithUs: "Connect With Us",
      builtWithLove: "Built with ❤️ for the community",
      navigation: {
        about: "About",
        token: "Token",
        roadmap: "Roadmap",
        faq: "FAQ",
        community: "Community"
      },
      mintTokens: "Mint Tokens",
      burnTokens: "Burn Tokens",
      mintTokensDesc: "New tokens can be minted when price is too high to increase supply and stabilize the market",
      burnTokensDesc: "Existing tokens can be burned when price is too low to reduce supply and support price recovery",
      roadmapDescription: {
        launch: "Project launch and initial community building",
        growingCommunity: "Expanding community reach and engagement",
        listing: "Getting listed on major DEX tracking platforms",
        comingSoon: "Exciting new features and partnerships coming soon"
      },
      statusText: {
        completed: "Completed",
        ongoing: "Ongoing",
        upcoming: "Coming Soon",
        pending: "Pending"
      },
      communityDescription: "Join our growing community and stay updated with the latest news and developments.",
      readyToJoin: "Ready to join the R7Z community?",
      connectSocial: "Connect with us on social media and be part of our journey!",
      tokenomicsDesc: "Detailed tokenomics information will be released soon. Stay tuned for updates!",
      xTwitter: "X (Twitter)",
      telegram: "Telegram",
      email: "Email"
    },
    id: {
      tagline: "RIZ7Z, koin untuk jangka panjang",
      joinCommunity: "Bergabung Komunitas",
      aboutTitle: "Tentang RIZ7Z",
      aboutDesc: "RIZ7Z adalah project crypto di Binance Smart Chain dengan supply kecil, fokus komunitas, dan visi jangka panjang.",
      tokenInfo: "Informasi Token",
      symbol: "Simbol",
      blockchain: "Blockchain",
      supply: "Total Pasokan",
      tokenAddress: "Alamat Token",
      pool: "Pool Likuiditas",
      buyOnPancake: "Beli di PancakeSwap",
      priceStabilization: "Stabilisasi Harga",
      mintBurn: "Mint & Burn",
      mintBurnDesc: "Token RIZ7Z dapat di-mint dan di-burn untuk menjaga stabilitas harga dan mencegah volatilitas ekstrem",
      liveTrading: "Chart Trading Langsung",
      liveTradingDesc: "Chart harga real-time dan data trading yang didukung oleh DEXTools",
      viewOnDEXTools: "Lihat di DEXTools",
      roadmap: "Roadmap",
      launch: "Peluncuran",
      growingCommunity: "Pertumbuhan Komunitas",
      listing: "Listing di DEX",
      comingSoon: "Segera Hadir",
      tokenomics: "Tokenomics",
      tokenomicsComingSoon: "Segera Hadir",
      faq: "FAQ",
      faq1: "Apa itu RIZ7Z?",
      faq1Answer: "RIZ7Z adalah project cryptocurrency yang digerakkan komunitas yang dibangun di Binance Smart Chain dengan fokus pada pertumbuhan jangka panjang dan pengembangan komunitas.",
      faq2: "Bagaimana cara membeli RIZ7Z?",
      faq2Answer: "Anda dapat membeli RIZ7Z di PancakeSwap menggunakan link yang disediakan. Pastikan Anda memiliki BNB di wallet untuk biaya gas.",
      faq3: "Apakah RIZ7Z aman?",
      faq3Answer: "RIZ7Z dibangun di Binance Smart Chain, salah satu jaringan blockchain yang paling aman dan terpercaya. Namun, selalu lakukan riset sendiri sebelum berinvestasi.",
      faq4: "Apa rencana ke depan RIZ7Z?",
      faq4Answer: "Roadmap kami meliputi pertumbuhan komunitas, listing di DEX, dan fitur-fitur baru yang menarik. Pantau terus update-nya!",
      community: "Komunitas & Kontak",
      footer: "Hak Cipta © 2025 RIZ7Z",
      copySuccess: "Berhasil disalin ke clipboard!",
      copyError: "Gagal menyalin ke clipboard",
      notification: {
        success: "Berhasil!",
        error: "Gagal!"
      },
      features: {
        fastSecure: {
          title: "Cepat & Aman",
          description: "Dibangun di Binance Smart Chain untuk kecepatan dan keamanan"
        },
        communityDriven: {
          title: "Digerakkan Komunitas",
          description: "Fokus pada membangun komunitas yang kuat dan aktif"
        },
        longTermVision: {
          title: "Visi Jangka Panjang",
          description: "Dirancang untuk pertumbuhan dan pengembangan berkelanjutan"
        },
        priceStability: {
          title: "Stabilitas Harga",
          description: "Mekanisme mint dan burn untuk menjaga nilai token yang stabil"
        }
      },
      tokenSymbol: "Simbol Token",
      quickLinks: "Tautan Cepat",
      connectWithUs: "Hubungi Kami",
      builtWithLove: "Dibuat dengan ❤️ untuk komunitas",
      navigation: {
        about: "Tentang",
        token: "Token",
        roadmap: "Roadmap",
        faq: "FAQ",
        community: "Komunitas"
      },
      mintTokens: "Mint Token",
      burnTokens: "Bakar Token",
      mintTokensDesc: "Token baru dapat di-mint ketika harga terlalu tinggi untuk meningkatkan pasokan dan menstabilkan pasar",
      burnTokensDesc: "Token yang ada dapat dibakar ketika harga terlalu rendah untuk mengurangi pasokan dan mendukung pemulihan harga",
      roadmapDescription: {
        launch: "Peluncuran proyek dan membangun komunitas awal",
        growingCommunity: "Memperluas jangkauan dan keterlibatan komunitas",
        listing: "Listing di platform tracking DEX utama",
        comingSoon: "Fitur baru yang menarik dan kemitraan akan segera hadir"
      },
      statusText: {
        completed: "Selesai",
        ongoing: "Berlangsung",
        upcoming: "Segera Hadir",
        pending: "Menunggu"
      },
      communityDescription: "Bergabunglah dengan komunitas kami yang terus berkembang dan tetap update dengan berita dan perkembangan terbaru.",
      readyToJoin: "Siap bergabung dengan komunitas R7Z?",
      connectSocial: "Terhubung dengan kami di media sosial dan jadilah bagian dari perjalanan kami!",
      tokenomicsDesc: "Informasi tokenomics terperinci akan segera dirilis. Nantikan update-nya!",
      xTwitter: "X (Twitter)",
      telegram: "Telegram",
      email: "Email"
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
