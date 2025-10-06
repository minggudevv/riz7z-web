import React from 'react';
import { LanguageProvider } from './components/LanguageContext';
import { NotificationProvider, useNotification } from './components/NotificationContext';
import Notification from './components/Notification';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TokenInfo from './components/TokenInfo';
import Roadmap from './components/Roadmap';
import Tokenomics from './components/Tokenomics';
import FAQ from './components/FAQ';
import Community from './components/Community';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

const AppContent = () => {
  const { notification, hideNotification } = useNotification();

  return (
    <div className="App min-h-screen bg-r7z-darker flex flex-col">
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10 flex-1">
        <Hero />
        <About />
        <TokenInfo />
        <Roadmap />
        <Tokenomics />
        <FAQ />
        <Community />
      </main>
      <Footer />
      <ScrollToTopButton />
      <Notification
        message={notification.message}
        type={notification.type}
        isVisible={notification.isVisible}
        onClose={hideNotification}
      />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <NotificationProvider>
        <AppContent />
      </NotificationProvider>
    </LanguageProvider>
  );
}

export default App;
