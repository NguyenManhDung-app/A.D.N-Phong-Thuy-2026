import React from 'react';
import { motion } from 'motion/react';
import { FengShuiResult } from '../lib/fengShuiLogic';
import { 
  User, Compass, Flame, Cross, DoorOpen, Droplets, Palette, Layout, ShieldCheck, Lightbulb 
} from 'lucide-react';

interface ResultDashboardProps {
  result: FengShuiResult;
}

export function ResultDashboard({ result }: ResultDashboardProps) {
  return (
    <section className="py-24 relative bg-[#0E0F1A]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1A1E33_0%,transparent_70%)] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#39FF14] glow-text-cyan">
            Kết quả phân tích
          </h2>
          <p className="text-[#FFE2F7]/70 text-lg">
            Kết quả phân tích đã được tạo riêng cho bạn.
          </p>
        </div>

        {/* Score Section */}
        <div className="flex justify-center mb-16">
          <ScoreMeter score={result.diemTongQuan} label={result.xepLoaiTongQuan} />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1. Tổng quan bản mệnh */}
          <ResultCard 
            icon={User} 
            title="Tổng quan bản mệnh" 
            badge={result.tongQuanBanMenh.nhomMenh}
          >
            <p className="text-[#FFE2F7]/80 leading-relaxed mb-3">{result.tongQuanBanMenh.moTa}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-xs text-[#FFE2F7]/50 uppercase tracking-wider block w-full mb-1">Hướng phù hợp:</span>
              {result.tongQuanBanMenh.nhomHuongPhuHop.map(h => (
                <span key={h} className="px-3 py-1 bg-[#2B3154]/50 border border-[#8C6CFF]/30 rounded-full text-sm text-[#FFE2F7]">{h}</span>
              ))}
            </div>
          </ResultCard>

          {/* 2. Đánh giá hướng nhà hiện tại */}
          <ResultCard 
            icon={Compass} 
            title="Hướng nhà hiện tại" 
            badge={result.danhGiaHuongNhaHienTai.mucDo}
            highlight={result.danhGiaHuongNhaHienTai.huongNha}
          >
            <p className="text-[#FFE2F7]/80 leading-relaxed mb-4">{result.danhGiaHuongNhaHienTai.moTa}</p>
            <div className="p-4 bg-[#00F0FF]/10 border border-[#00F0FF]/30 rounded-xl glow-border-cyan">
              <p className="text-sm text-[#00F0FF] italic">"{result.danhGiaHuongNhaHienTai.goiYDieuChinh}"</p>
            </div>
          </ResultCard>

          {/* 3. Hướng bếp */}
          <ResultCard 
            icon={Flame} 
            title="Gợi ý hướng bếp" 
            badge={result.huongBep.mucDo}
          >
            <div className="flex gap-2 mb-4">
              {result.huongBep.huongDeXuat.map(h => (
                <span key={h} className="px-3 py-1 bg-[#FF2FA5]/20 border border-[#FF4FC3]/30 rounded-full text-sm font-medium text-[#FFE2F7]">{h}</span>
              ))}
            </div>
            <p className="text-[#FFE2F7]/80 leading-relaxed mb-4">{result.huongBep.moTa}</p>
            <p className="text-sm text-[#FFE2F7]/60 border-l-2 border-[#8C6CFF] pl-3">{result.huongBep.luuY}</p>
          </ResultCard>

          {/* 4. Hướng bàn thờ */}
          <ResultCard 
            icon={Cross} 
            title="Hướng bàn thờ" 
            badge={result.huongBanTho.mucDo}
          >
            <div className="flex gap-2 mb-4">
              {result.huongBanTho.huongDeXuat.map(h => (
                <span key={h} className="px-3 py-1 bg-[#D94DFF]/20 border border-[#D94DFF]/30 rounded-full text-sm font-medium text-[#FFE2F7]">{h}</span>
              ))}
            </div>
            <p className="text-[#FFE2F7]/80 leading-relaxed mb-4">{result.huongBanTho.moTa}</p>
            <p className="text-sm text-[#FFE2F7]/60 border-l-2 border-[#8C6CFF] pl-3">{result.huongBanTho.luuY}</p>
          </ResultCard>

          {/* 5. Hướng cửa chính */}
          <ResultCard 
            icon={DoorOpen} 
            title="Hướng cửa chính" 
            badge={result.huongCuaChinh.mucDo}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {result.huongCuaChinh.huongDeXuat.map(h => (
                <span key={h} className="px-3 py-1 bg-[#8C6CFF]/20 border border-[#8C6CFF]/30 rounded-full text-sm font-medium text-[#FFE2F7]">{h}</span>
              ))}
            </div>
            <p className="text-[#FFE2F7]/80 leading-relaxed mb-4">{result.huongCuaChinh.moTa}</p>
            <p className="text-sm text-[#FFE2F7]/60 border-l-2 border-[#8C6CFF] pl-3">{result.huongCuaChinh.luuY}</p>
          </ResultCard>

          {/* 6. Hướng nhà vệ sinh */}
          <ResultCard 
            icon={Droplets} 
            title="Hướng nhà vệ sinh" 
            badge={result.huongNhaVeSinh.mucDo}
          >
            <div className="mb-4">
              <span className="text-xs text-[#FFE2F7]/50 uppercase tracking-wider block mb-2">Nên đặt tại:</span>
              <div className="flex gap-2">
                {result.huongNhaVeSinh.huongNenDat.map(h => (
                  <span key={h} className="px-3 py-1 bg-[#2B3154]/50 border border-[#2B3154] rounded-full text-sm text-[#FFE2F7]/80">{h}</span>
                ))}
              </div>
            </div>
            <p className="text-[#FFE2F7]/80 leading-relaxed mb-4">{result.huongNhaVeSinh.moTa}</p>
            <p className="text-sm text-[#FFE2F7]/60 border-l-2 border-[#8C6CFF] pl-3">{result.huongNhaVeSinh.luuY}</p>
          </ResultCard>

          {/* 7. Màu sắc chủ đạo */}
          <ResultCard 
            icon={Palette} 
            title="Màu sắc chủ đạo" 
            className="lg:col-span-2"
          >
            <div className="grid sm:grid-cols-3 gap-4 mt-4">
              {result.mauSacChuDao.map(color => (
                <div key={color.tenMau} className="flex flex-col gap-3 p-4 bg-[#1A1E33] rounded-xl border border-[#2B3154]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full shadow-inner border border-white/10" style={{ backgroundColor: color.hex }}></div>
                    <span className="font-medium text-[#FFE2F7]">{color.tenMau}</span>
                  </div>
                  <p className="text-xs text-[#FFE2F7]/60 uppercase tracking-wider">{color.yNghia}</p>
                  <p className="text-sm text-[#FFE2F7]/80">{color.ungDung}</p>
                </div>
              ))}
            </div>
          </ResultCard>

          {/* 8. Lời khuyên chuyên gia */}
          <ResultCard 
            icon={ShieldCheck} 
            title="Lời khuyên chuyên gia" 
            className="lg:col-span-1"
          >
            <div className="h-full flex flex-col justify-center">
              <p className="text-[#FFE2F7]/90 leading-relaxed italic text-lg">
                "{result.loiKhuyenChuyenGia}"
              </p>
            </div>
          </ResultCard>

          {/* 9. Định hướng không gian sống */}
          <ResultCard 
            icon={Layout} 
            title="Định hướng không gian sống" 
            className="lg:col-span-3"
          >
            <p className="text-[#FFE2F7] text-lg mb-6 max-w-3xl">{result.dinhHuongKhongGianSong.moTaTongQuan}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {result.dinhHuongKhongGianSong.goiYBoTri.map((goiY, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-[#1A1E33]/50 rounded-xl border border-[#8C6CFF]/20">
                  <Lightbulb className="w-5 h-5 text-[#FF4FC3] shrink-0 mt-0.5" />
                  <p className="text-[#FFE2F7]/80 leading-relaxed">{goiY}</p>
                </div>
              ))}
            </div>
          </ResultCard>
        </div>
      </div>
    </section>
  );
}

function ResultCard({ icon: Icon, title, badge, highlight, children, className = "" }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`glass-panel p-6 rounded-2xl hover:border-[#8C6CFF]/40 transition-colors flex flex-col ${className}`}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#1A1E33] border border-[#8C6CFF]/30 flex items-center justify-center">
            <Icon className="w-5 h-5 text-[#F6B8FF]" />
          </div>
          <h3 className="text-lg font-semibold text-[#FFE2F7]">{title}</h3>
        </div>
        {badge && (
          <span className="px-3 py-1 bg-[#2B3154] text-[#FFE2F7] text-xs font-medium rounded-full border border-[#8C6CFF]/20">
            {badge}
          </span>
        )}
      </div>
      {highlight && (
        <div className="text-2xl font-bold text-[#FF4FC3] mb-4">{highlight}</div>
      )}
      <div className="flex-1">
        {children}
      </div>
    </motion.div>
  );
}

function ScoreMeter({ score, label }: { score: number, label: string }) {
  const percentage = Math.min(100, Math.max(0, score));
  
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* Background Circle */}
        <svg className="absolute inset-0 w-full h-full transform -rotate-90">
          <circle 
            cx="96" cy="96" r="88" 
            fill="none" 
            stroke="#1A1E33" 
            strokeWidth="12"
            strokeDasharray="553"
            strokeDashoffset="0"
          />
          {/* Progress Circle */}
          <motion.circle 
            initial={{ strokeDashoffset: 553 }}
            animate={{ strokeDashoffset: 553 - (553 * percentage) / 100 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            cx="96" cy="96" r="88" 
            fill="none" 
            stroke="url(#score-gradient)" 
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray="553"
          />
          <defs>
            <linearGradient id="score-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF2FA5" />
              <stop offset="100%" stopColor="#8C6CFF" />
            </linearGradient>
          </defs>
        </svg>
        
        <div className="text-center">
          <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FC3] to-[#F6B8FF]">
            {score}
          </div>
          <div className="text-xs text-[#FFE2F7]/50 uppercase tracking-widest mt-1">Điểm</div>
        </div>
      </div>
      
      <div className="mt-6 px-6 py-2 bg-[#1A1E33] border border-[#8C6CFF]/30 rounded-full">
        <span className="text-lg font-medium text-[#FFE2F7]">{label}</span>
      </div>
    </div>
  );
}
