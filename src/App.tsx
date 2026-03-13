import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LeadForm } from './components/LeadForm';
import { LoadingState } from './components/LoadingState';
import { ResultDashboard } from './components/ResultDashboard';
import { ConsultationCTA } from './components/ConsultationCTA';
import { ServicesSection } from './components/ServicesSection';
import { Footer } from './components/Footer';
import { FormData, FengShuiResult, generateFengShuiAnalysis } from './lib/fengShuiLogic';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<FengShuiResult | null>(null);

  const handleFormSubmit = (data: FormData) => {
    setIsLoading(true);
    
    // Simulate API call / AI processing delay
    setTimeout(() => {
      const analysis = generateFengShuiAnalysis(data);
      setResult(analysis);
      setIsLoading(false);
      
      // Scroll to result section
      setTimeout(() => {
        document.getElementById('ket-qua')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#0E0F1A] text-[#FFE2F7] font-sans selection:bg-[#FF2FA5]/30 selection:text-white">
      <Header />
      
      <main>
        <HeroSection />
        
        {!result && !isLoading && (
          <LeadForm onSubmit={handleFormSubmit} isLoading={isLoading} />
        )}
        
        {isLoading && (
          <LoadingState />
        )}
        
        {result && !isLoading && (
          <div id="ket-qua">
            <ResultDashboard result={result} />
            <ConsultationCTA />
          </div>
        )}
        
        <ServicesSection />
      </main>
      
      <Footer />
    </div>
  );
}
