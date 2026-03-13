import React from 'react';
import { motion } from 'motion/react';
import { Compass, Sparkles, Building2 } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="gioi-thieu" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1A1E33_0%,#0E0F1A_60%)]"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF2FA5]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8C6CFF]/10 rounded-full blur-[120px]"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVoNDBWMGgtdi0uNUgwem0wIDBoLjVWMEgweiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIvPjwvc3ZnPg==')] opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A1E33] border border-[#00F0FF]/50 mb-8 glow-border-cyan">
              <Sparkles className="w-4 h-4 text-[#00F0FF] animate-pulse" />
              <span className="text-xs font-medium text-[#00F0FF] tracking-wider uppercase glow-text-cyan">Công Nghệ x Kiến Trúc</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-[#FFE2F7] to-[#8C6CFF]">
              Phong Thủy 2026
            </h1>
            
            <p className="text-xl lg:text-2xl text-[#FFE2F7]/90 font-light mb-4">
              Định hướng phong thủy và không gian sống cho ngôi nhà hiện đại
            </p>
            
            <p className="text-base text-[#FFE2F7]/60 mb-8 leading-relaxed max-w-xl">
              Nhập ngày sinh và hướng nhà hiện tại để nhận phân tích sơ bộ về phong thủy, màu sắc, bố trí không gian và định hướng thiết kế phù hợp với nhu cầu sống thực tế.
            </p>
            
            <div className="inline-block">
              <div className="flex items-center gap-3 mb-8 text-sm text-[#8C6CFF] font-medium">
                <Building2 className="w-5 h-5 shrink-0" />
                <span>Được phát triển bởi đơn vị thiết kế kiến trúc, nội thất và xây dựng đồng bộ.</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#phan-tich"
                  className="neon-button inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-[#FF2FA5] hover:bg-[#FF4FC3] rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,47,165,0.6)] hover:shadow-[0_0_40px_rgba(255,79,195,0.8)]"
                >
                  Nhận phân tích miễn phí
                </a>
              </div>
            </div>
          </motion.div>

          {/* Visual / Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF2FA5]/20 to-[#8C6CFF]/20 rounded-full blur-3xl"></div>
            
            {/* Abstract Compass / Architectural Visual */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border border-[#00F0FF]/50 animate-[spin_20s_linear_infinite] shadow-[0_0_15px_rgba(0,240,255,0.3)]"></div>
              <div className="absolute inset-4 rounded-full border border-[#FF2FA5]/50 animate-[spin_15s_linear_infinite_reverse] shadow-[0_0_15px_rgba(255,47,165,0.3)]"></div>
              
              {/* Architectural Lines */}
              <svg className="absolute inset-0 w-full h-full text-[#FFE2F7]/20" viewBox="0 0 100 100">
                <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" />
                <line x1="15" y1="15" x2="85" y2="85" stroke="currentColor" strokeWidth="0.5" />
                <line x1="15" y1="85" x2="85" y2="15" stroke="currentColor" strokeWidth="0.5" />
                
                {/* Center Core */}
                <circle cx="50" cy="50" r="10" fill="#1A1E33" stroke="#00F0FF" strokeWidth="1" className="drop-shadow-[0_0_5px_rgba(0,240,255,0.8)]" />
                <circle cx="50" cy="50" r="2" fill="#00F0FF" className="animate-pulse drop-shadow-[0_0_5px_rgba(0,240,255,1)]" />
              </svg>

              {/* Floating Cards Mockup */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -left-12 w-64 glass-panel p-4 rounded-2xl shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#FF2FA5]/20 flex items-center justify-center">
                    <Compass className="w-4 h-4 text-[#FF4FC3]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#FFE2F7]/60 uppercase tracking-wider">Hướng Nhà</div>
                    <div className="text-sm font-semibold text-[#FFE2F7]">Đông Nam - Cần tối ưu</div>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-[#1A1E33] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#FF2FA5] to-[#D94DFF] w-[65%]"></div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 -right-12 w-64 glass-panel p-4 rounded-2xl shadow-2xl"
              >
                <div className="text-xs text-[#FFE2F7]/60 uppercase tracking-wider mb-2">Định Hướng Không Gian</div>
                <div className="text-sm text-[#FFE2F7]/90 leading-relaxed">
                  "Khu sinh hoạt chung nên dùng bảng màu nền sáng dịu để tạo cảm giác rộng, thoáng và ổn định."
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
