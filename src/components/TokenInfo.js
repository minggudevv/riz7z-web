import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from './LanguageContext';
import TradingChart from './TradingChart';

const TokenInfo = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const tokenData = [
    {
      label: t('blockchain'),
      value: 'Binance Smart Chain (BSC)',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      )
    },
    {
      label: t('supply'),
      value: '9.99K',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      label: t('tokenAddress'),
      value: '0x098112b15a58a916339232be2ac6e95d1d146f30',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      copyable: true
    },
    {
      label: t('pool'),
      value: '0xc638d263345c3faea3de3c6bd3957b1408ffec2b',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      copyable: true
    }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <section id="token" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-r7z-darker to-r7z-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-r7z-blue to-r7z-red bg-clip-text text-transparent">
              {t('tokenInfo')}
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {tokenData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -2, scale: 1.02 }}
              className="group p-6 bg-gradient-to-br from-r7z-dark/50 to-r7z-darker/50 rounded-xl border border-r7z-blue/20 hover:border-r7z-blue/40 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-r7z-blue to-r7z-red rounded-lg flex items-center justify-center text-white group-hover:animate-glow">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-r7z-blue mb-2">
                    {item.label}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <p className="text-white font-mono text-sm break-all">
                      {item.value}
                    </p>
                    {item.copyable && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => copyToClipboard(item.value)}
                        className="text-r7z-blue hover:text-r7z-red transition-colors duration-200"
                        title="Copy to clipboard"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </motion.button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Price Stabilization Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-r7z-dark/50 to-r7z-darker/50 rounded-2xl p-8 border border-r7z-blue/20 hover:border-r7z-blue/40 transition-all duration-300"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-r7z-blue to-r7z-red rounded-xl flex items-center justify-center text-white mx-auto mb-4 animate-glow">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {t('priceStabilization')}
              </h3>
              <h4 className="text-xl font-semibold text-r7z-blue mb-4">
                {t('mintBurn')}
              </h4>
              <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                {t('mintBurnDesc')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="p-6 bg-gradient-to-br from-r7z-blue/10 to-r7z-red/10 rounded-xl border border-r7z-blue/20"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h5 className="text-lg font-semibold text-white">Mint Tokens</h5>
                </div>
                <p className="text-gray-300 text-sm">
                  New tokens can be minted when price is too high to increase supply and stabilize the market
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="p-6 bg-gradient-to-br from-r7z-red/10 to-r7z-blue/10 rounded-xl border border-r7z-red/20"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                    </svg>
                  </div>
                  <h5 className="text-lg font-semibold text-white">Burn Tokens</h5>
                </div>
                <p className="text-gray-300 text-sm">
                  Existing tokens can be burned when price is too low to reduce supply and support price recovery
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Live Trading Chart */}
        <TradingChart />

        {/* PancakeSwap Button */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.a
            href="https://pancakeswap.finance/swap?outputCurrency=0x098112B15A58a916339232bE2ac6E95D1d146f30"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-r7z-blue to-r7z-red text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span>{t('buyOnPancake')}</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TokenInfo;
