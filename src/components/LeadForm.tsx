import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FormData, Direction, Gender } from '../lib/fengShuiLogic';

interface LeadFormProps {
  onSubmit: (data: FormData) => void;
  isLoading: boolean;
}

const directions: Direction[] = ["Bắc", "Nam", "Đông", "Tây", "Đông Bắc", "Tây Bắc", "Đông Nam", "Tây Nam"];

export function LeadForm({ onSubmit, isLoading }: LeadFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    day: '',
    month: '',
    year: '',
    gender: 'Nam',
    currentDirection: 'Bắc'
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Vui lòng nhập họ và tên";
    if (!formData.day || parseInt(formData.day) < 1 || parseInt(formData.day) > 31) newErrors.day = "Ngày không hợp lệ";
    if (!formData.month || parseInt(formData.month) < 1 || parseInt(formData.month) > 12) newErrors.month = "Tháng không hợp lệ";
    if (!formData.year || parseInt(formData.year) < 1900 || parseInt(formData.year) > new Date().getFullYear()) newErrors.year = "Năm không hợp lệ";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <section id="phan-tich" className="py-24 relative bg-[#0E0F1A]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1A1E33_0%,transparent_70%)] opacity-50"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel p-8 md:p-12 rounded-[2rem] shadow-[0_0_50px_rgba(26,30,51,0.5)] border border-[#8C6CFF]/20 relative overflow-hidden"
        >
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF2FA5]/10 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8C6CFF]/10 rounded-full blur-[80px]"></div>

          <div className="text-center mb-10 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#FFE2F7] glow-text">
              Phong Thủy Cá Nhân Hóa Cho Ngôi Nhà Của Bạn
            </h2>
            <p className="text-[#FFE2F7]/60">
              Điền thông tin cơ bản để hệ thống của chúng tôi định hướng không gian sống cho bạn.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {/* Họ và tên */}
            <div>
              <label className="block text-sm font-medium text-[#FFE2F7]/80 mb-2">Họ và tên</label>
              <input 
                type="text"
                value={formData.fullName}
                onChange={e => setFormData({...formData, fullName: e.target.value})}
                className="w-full bg-[#0E0F1A]/50 border border-[#2B3154] rounded-xl px-4 py-3 text-[#FFE2F7] focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all"
                placeholder="Nguyễn Văn A"
              />
              {errors.fullName && <p className="text-[#FF2FA5] text-xs mt-1">{errors.fullName}</p>}
            </div>

            {/* Ngày tháng năm sinh */}
            <div>
              <label className="block text-sm font-medium text-[#FFE2F7]/80 mb-2">Ngày sinh (Dương lịch)</label>
              <div className="grid grid-cols-3 gap-4">
                <div className="relative">
                  <select 
                    value={formData.day}
                    onChange={e => setFormData({...formData, day: e.target.value})}
                    className="w-full bg-[#0E0F1A]/50 border border-[#2B3154] rounded-xl px-4 py-3 text-[#FFE2F7] focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all appearance-none"
                  >
                    <option value="" disabled>Ngày</option>
                    {Array.from({ length: 31 }, (_, i) => i + 1).map(d => (
                      <option key={d} value={d.toString()} className="bg-[#1A1E33] text-[#FFE2F7]">{d}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#FFE2F7]/50">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  {errors.day && <p className="text-[#FF2FA5] text-xs mt-1">{errors.day}</p>}
                </div>
                <div className="relative">
                  <select 
                    value={formData.month}
                    onChange={e => setFormData({...formData, month: e.target.value})}
                    className="w-full bg-[#0E0F1A]/50 border border-[#2B3154] rounded-xl px-4 py-3 text-[#FFE2F7] focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all appearance-none"
                  >
                    <option value="" disabled>Tháng</option>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map(m => (
                      <option key={m} value={m.toString()} className="bg-[#1A1E33] text-[#FFE2F7]">{m}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#FFE2F7]/50">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  {errors.month && <p className="text-[#FF2FA5] text-xs mt-1">{errors.month}</p>}
                </div>
                <div className="relative">
                  <select 
                    value={formData.year}
                    onChange={e => setFormData({...formData, year: e.target.value})}
                    className="w-full bg-[#0E0F1A]/50 border border-[#2B3154] rounded-xl px-4 py-3 text-[#FFE2F7] focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all appearance-none"
                  >
                    <option value="" disabled>Năm</option>
                    {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map(y => (
                      <option key={y} value={y.toString()} className="bg-[#1A1E33] text-[#FFE2F7]">{y}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#FFE2F7]/50">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  {errors.year && <p className="text-[#FF2FA5] text-xs mt-1">{errors.year}</p>}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Giới tính */}
              <div>
                <label className="block text-sm font-medium text-[#FFE2F7]/80 mb-2">Giới tính</label>
                <div className="flex gap-4">
                  {(["Nam", "Nữ"] as Gender[]).map(g => (
                    <label key={g} className="flex-1 cursor-pointer">
                      <input 
                        type="radio" 
                        name="gender" 
                        value={g}
                        checked={formData.gender === g}
                        onChange={() => setFormData({...formData, gender: g})}
                        className="sr-only"
                      />
                      <div className={`text-center py-3 rounded-xl border transition-all duration-300 ${
                        formData.gender === g 
                          ? 'bg-[#00F0FF]/10 border-[#00F0FF] text-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.3)]' 
                          : 'bg-[#0E0F1A]/50 border-[#2B3154] text-[#FFE2F7]/50 hover:border-[#00F0FF]/50'
                      }`}>
                        {g}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Hướng nhà */}
              <div>
                <label className="block text-sm font-medium text-[#FFE2F7]/80 mb-2">Hướng nhà hiện tại</label>
                <div className="relative">
                  <select 
                    value={formData.currentDirection}
                    onChange={e => setFormData({...formData, currentDirection: e.target.value as Direction})}
                    className="w-full bg-[#0E0F1A]/50 border border-[#2B3154] rounded-xl px-4 py-3 text-[#FFE2F7] focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all appearance-none"
                  >
                    {directions.map(d => (
                      <option key={d} value={d} className="bg-[#1A1E33] text-[#FFE2F7]">{d}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#FFE2F7]/50">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button 
                type="submit"
                disabled={isLoading}
                className="neon-button w-full flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#FF2FA5] hover:bg-[#FF4FC3] rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(255,47,165,0.6)] hover:shadow-[0_0_40px_rgba(255,79,195,0.8)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Đang xử lý...' : 'Phân tích ngay'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
