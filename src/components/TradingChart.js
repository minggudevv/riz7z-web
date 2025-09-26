import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from './LanguageContext';

const TradingChart = () => {
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

  return (
    <motion.div
      ref={ref}
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            {t('liveTrading')}
          </h3>
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {t('liveTradingDesc')}
          </p>
        </div>
        
        <div className="flex justify-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-xl border border-r7z-blue/30 w-full max-w-2xl"
          >
            <div className="flex justify-center p-4">
              <iframe 
                id="dextools-widget"
                title="DEXTools Trading Chart"
                width="500" 
                height="400"
                src="https://www.dextools.io/widget-chart/en/bnb/pe-light/0xc638d263345c3faea3de3c6bd3957b1408ffec2b?theme=light&chartType=2&chartResolution=30&drawingToolbars=false"
                className="rounded-lg"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
        
        <div className="mt-6 text-center">
          <motion.a
            href="https://www.dextools.io/app/en/bnb/pair-explorer/0xc638d263345c3faea3de3c6bd3957b1408ffec2b"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-r7z-blue to-r7z-red text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span>{t('viewOnDEXTools')}</span>
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TradingChart;
