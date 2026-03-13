import React from 'react';
import { BrandLogo } from './BrandLogo';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <BrandLogo />
        
        <a 
          href="https://zalo.me/g/beetrn562"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#0068FF] hover:bg-[#0054cc] rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(0,104,255,0.4)] hover:shadow-[0_0_25px_rgba(0,104,255,0.8)]"
        >
          Tham gia nhóm Zalo
        </a>
      </div>
    </header>
  );
}
