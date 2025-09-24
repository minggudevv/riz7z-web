import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from './LanguageContext';

const Tokenomics = () => {
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
    <section id="tokenomics" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-r7z-dark to-r7z-darker">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-r7z-blue to-r7z-red bg-clip-text text-transparent">
              {t('tokenomics')}
            </span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="relative max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-br from-r7z-dark/50 to-r7z-darker/50 rounded-2xl p-12 border border-r7z-blue/20 hover:border-r7z-blue/40 transition-all duration-300">
              <div className="text-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-24 h-24 bg-gradient-to-r from-r7z-blue to-r7z-red rounded-full flex items-center justify-center mx-auto mb-8 animate-glow"
                >
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  {t('tokenomicsComingSoon')}
                </h3>
                
                <p className="text-xl text-gray-300 mb-8">
                  Detailed tokenomics information will be released soon. Stay tuned for updates!
                </p>

                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-flex items-center space-x-2 text-r7z-blue"
                >
                  <div className="w-2 h-2 bg-r7z-blue rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-r7z-blue rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-r7z-blue rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                </motion.div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-r7z-blue/20 rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-r7z-red/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-r7z-blue/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tokenomics;
