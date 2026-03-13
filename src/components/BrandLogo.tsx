import React from 'react';
import { cn } from '../lib/utils';

interface BrandLogoProps {
  className?: string;
  iconOnly?: boolean;
}

export function BrandLogo({ className, iconOnly = false }: BrandLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Icon */}
      <div className="relative flex items-center justify-center w-10 h-10">
        <div className="absolute inset-0 rounded-full border border-[#FF2FA5] opacity-30 animate-[spin_10s_linear_infinite]"></div>
        <div className="absolute inset-1 rounded-full border border-[#8C6CFF] opacity-50 animate-[spin_7s_linear_infinite_reverse]"></div>
        <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-[#FF2FA5] to-[#8C6CFF] opacity-20 blur-sm"></div>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#FFE2F7] z-10">
          <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="3" stroke="#FF4FC3" strokeWidth="1.5"/>
        </svg>
      </div>
      
      {/* Text */}
      {!iconOnly && (
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FFE2F7] to-[#F6B8FF] font-display">
            A.D.N
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C6CFF] font-medium leading-none mt-0.5">
            Phong Thủy 2026
          </span>
        </div>
      )}
    </div>
  );
}
