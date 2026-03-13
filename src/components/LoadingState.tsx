import React from 'react';
import { motion } from 'motion/react';

export function LoadingState() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
      <div className="relative w-32 h-32 mb-8">
        {/* Outer Orbit */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-dashed border-[#8C6CFF]/40"
        ></motion.div>
        
        {/* Middle Orbit */}
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4 rounded-full border border-[#FF2FA5]/30"
        >
          <div className="absolute top-0 left-1/2 w-2 h-2 -ml-1 -mt-1 bg-[#FF4FC3] rounded-full shadow-[0_0_10px_#FF4FC3]"></div>
        </motion.div>
        
        {/* Inner Core */}
        <div className="absolute inset-10 rounded-full bg-gradient-to-br from-[#FF2FA5]/20 to-[#8C6CFF]/20 blur-md animate-pulse"></div>
        <div className="absolute inset-12 rounded-full border border-[#FFE2F7]/50 flex items-center justify-center">
          <div className="w-2 h-2 bg-[#FFE2F7] rounded-full animate-ping"></div>
        </div>
      </div>
      
      <h3 className="text-xl font-medium text-[#FFE2F7] mb-2 text-center">
        Hệ thống đang phân tích...
      </h3>
      <p className="text-[#FFE2F7]/60 text-sm text-center max-w-xs">
        Đang xử lý dữ liệu phong thủy và định hướng không gian sống cho bạn.
      </p>
    </div>
  );
}
