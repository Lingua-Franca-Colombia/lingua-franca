import React from 'react';

export default function BrandLogo({ size = 44, showText = true }) {
  return (
    <div className="inline-flex items-center gap-3 select-none">
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-[0_0_12px_rgba(88,24,232,0.45)]"
        aria-hidden="true"
      >
        <circle cx="60" cy="60" r="54" fill="#F3F4F6" stroke="#5818E8" strokeWidth="10" />
        {/* Monitor */}
        <rect x="33" y="34" width="54" height="38" rx="4" stroke="#22C55E" strokeWidth="4.5" fill="none" />
        <line x1="48" y1="79" x2="72" y2="79" stroke="#22C55E" strokeWidth="4.5" strokeLinecap="round" />
        <line x1="60" y1="72" x2="60" y2="79" stroke="#22C55E" strokeWidth="4.5" />
        {/* Pencil */}
        <path d="M43 65V43L48 34L53 43V65H43Z" stroke="#22C55E" strokeWidth="3.5" strokeLinejoin="round" />
        <line x1="43" y1="43" x2="53" y2="43" stroke="#22C55E" strokeWidth="3.5" />
        <line x1="48" y1="43" x2="48" y2="65" stroke="#22C55E" strokeWidth="3" />
        {/* Ruler */}
        <rect x="59" y="45" width="10" height="20" rx="1.5" stroke="#22C55E" strokeWidth="3.5" />
        <line x1="59" y1="51" x2="64" y2="51" stroke="#22C55E" strokeWidth="3" />
        <line x1="59" y1="57" x2="64" y2="57" stroke="#22C55E" strokeWidth="3" />
        {/* Eraser */}
        <rect x="74" y="53" width="8" height="12" rx="1.5" stroke="#22C55E" strokeWidth="3.5" />
        <line x1="74" y1="58" x2="82" y2="58" stroke="#22C55E" strokeWidth="3" />
      </svg>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white">
            Lingua Franca
          </span>
          <span className="font-heading font-semibold text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-[#5818E8] dark:text-[#22C55E]">
            Idiomas • Desarrollo Web
          </span>
        </div>
      )}
    </div>
  );
}
