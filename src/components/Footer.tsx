import React from 'react';
import { BrandLogo } from './BrandLogo';

export function Footer() {
  return (
    <footer id="lien-he" className="bg-[#0E0F1A] border-t border-[#2B3154] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <BrandLogo className="mb-6" />
            <p className="text-[#FFE2F7]/60 max-w-sm leading-relaxed">
              A.D.N Phong Thủy 2026 là công cụ định hướng không gian sống, được phát triển bởi đơn vị thiết kế kiến trúc, nội thất và xây dựng chuyên nghiệp.
            </p>
          </div>
          
          <div>
            <h4 className="text-[#FFE2F7] font-semibold mb-6 uppercase tracking-wider text-sm">Lĩnh vực</h4>
            <ul className="space-y-4 text-[#FFE2F7]/60">
              <li><a href="#" className="hover:text-[#FF4FC3] transition-colors">Thiết kế kiến trúc</a></li>
              <li><a href="#" className="hover:text-[#FF4FC3] transition-colors">Thiết kế nội thất</a></li>
              <li><a href="#" className="hover:text-[#FF4FC3] transition-colors">Thi công xây dựng</a></li>
              <li><a href="#" className="hover:text-[#FF4FC3] transition-colors">Tư vấn phong thủy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[#FFE2F7] font-semibold mb-6 uppercase tracking-wider text-sm">Liên hệ</h4>
            <ul className="space-y-4 text-[#FFE2F7]/60">
              <li>Hotline: 0985.048.888</li>
              <li>Email: kientrucnoithatxaydungadn@gmail.com</li>
              <li>Địa chỉ: Quan Triều Thái Nguyên</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#2B3154] flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#FFE2F7]/40">
          <p>&copy; 2026 A.D.N Architecture & Interior. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#FFE2F7] transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-[#FFE2F7] transition-colors">Điều khoản dịch vụ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
