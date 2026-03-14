import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LeadForm } from './components/LeadForm';
import { LoadingState } from './components/LoadingState';
import { ResultDashboard } from './components/ResultDashboard';
import { ConsultationCTA } from './components/ConsultationCTA';
import { ServicesSection } from './components/ServicesSection';
import { Footer } from './components/Footer';
import { FormData, FengShuiResult } from './lib/fengShuiLogic';
import { generateFengShuiWithAI } from './lib/geminiService';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<FengShuiResult | null>(null);

  const handleFormSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      setResult(null);

      const analysis = await generateFengShuiWithAI(data);
      setResult(analysis);

      setTimeout(() => {
        document.getElementById('ket-qua')?.scrollIntoView({
          behavior: 'smooth',
        });
      }, 100);
    } catch (error) {
      console.error('Lỗi phân tích AI:', error);

      const message =
        error instanceof Error ? error.message : 'Có lỗi khi phân tích phong thủy';

      if (
        message.includes('quota') ||
        message.includes('RESOURCE_EXHAUSTED') ||
        message.includes('429')
      ) {
        alert('Bạn đã dùng hết quota tạm thời. Vui lòng chờ khoảng 1 phút rồi thử lại.');
      } else {
        alert(message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0E0F1A] text-[#FFE2F7] font-sans selection:bg-[#FF2FA5]/30 selection:text-white">
      <Header />

      <main>
        <HeroSection />

        {!result && !isLoading && (
          <LeadForm onSubmit={handleFormSubmit} />
        )}

        {isLoading && <LoadingState />}

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