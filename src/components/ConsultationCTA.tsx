import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function ConsultationCTA() {
  return (
    <section className="py-24 relative bg-[#1A1E33] overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF2FA5]/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#39FF14] glow-text-cyan">
            Bạn muốn nhận tư vấn sâu hơn cho ngôi nhà của mình?
          </h2>
          
          <p className="text-xl text-[#FFE2F7]/80 mb-12 leading-relaxed max-w-3xl mx-auto">
            Đội ngũ kiến trúc sư, nhà thiết kế nội thất và kỹ thuật thi công của chúng tôi có thể hỗ trợ bạn định hình giải pháp phù hợp với phong thủy, công năng và ngân sách thực tế.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="https://zalo.me/g/beetrn562" target="_blank" rel="noopener noreferrer" className="neon-button w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-[#FF2FA5] hover:bg-[#FF4FC3] rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,47,165,0.6)] hover:shadow-[0_0_40px_rgba(255,79,195,0.8)]">
              Nhận tư vấn từ A.D.N
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
