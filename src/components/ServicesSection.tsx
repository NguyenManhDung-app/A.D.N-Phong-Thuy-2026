import React from 'react';
import { motion } from 'motion/react';
import { PenTool, Sofa, HardHat } from 'lucide-react';

const services = [
  {
    icon: PenTool,
    title: "Thiết kế kiến trúc",
    description: "Kiến tạo không gian sống hiện đại, tối ưu vi khí hậu và hài hòa phong thủy ngay từ bản vẽ mặt bằng."
  },
  {
    icon: Sofa,
    title: "Thiết kế nội thất",
    description: "Cá nhân hóa không gian sống với ngôn ngữ thiết kế tinh tế, vật liệu cao cấp và màu sắc tương sinh."
  },
  {
    icon: HardHat,
    title: "Thi công xây dựng",
    description: "Hiện thực hóa bản vẽ với độ chính xác cao, quản lý chất lượng chặt chẽ và tiến độ đảm bảo."
  }
];

export function ServicesSection() {
  return (
    <section id="dich-vu" className="py-24 relative bg-[#0E0F1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FFE2F7]">
            Dịch vụ của chúng tôi
          </h2>
          <p className="text-[#FFE2F7]/60 text-lg">
            A.D.N không chỉ dừng lại ở tư vấn phong thủy, chúng tôi là đơn vị cung cấp giải pháp không gian sống đồng bộ từ thiết kế đến thi công.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl border border-[#2B3154] hover:border-[#8C6CFF]/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1A1E33] to-[#2B3154] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-[#FF4FC3]" />
              </div>
              <h3 className="text-xl font-semibold text-[#FFE2F7] mb-4">{service.title}</h3>
              <p className="text-[#FFE2F7]/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
