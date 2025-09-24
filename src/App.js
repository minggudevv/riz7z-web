import React from 'react';
import { LanguageProvider } from './components/LanguageContext';
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

function App() {
  return (
    <LanguageProvider>
      <div className="App min-h-screen bg-r7z-darker">
        <ParticleBackground />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <TokenInfo />
          <Roadmap />
          <Tokenomics />
          <FAQ />
          <Community />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
