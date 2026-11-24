import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { WHATSAPP_NUMBER } from '../data/translations';

export default function Footer({ t, lang }) {
  const [toast, setToast] = useState(false);

  const triggerSoonToast = () => {
    setToast(true);
    setTimeout(() => setToast(false), 4500);
  };

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    lang === 'es'
      ? '¡Hola Lingua Franca! Quiero conocer más sobre sus servicios.'
      : 'Hi Lingua Franca! I want to learn more about your services.'
  )}`;

  const socials = [
    { name: 'Instagram' },
    { name: 'Facebook' },
    { name: 'TikTok' },
  ];

  return (
    <footer className="bg-slate-100 dark:bg-[#08070F] border-t border-slate-200 dark:border-purple-900/40 pt-14 pb-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-200 dark:border-purple-900/30">
          <div className="text-center md:text-left">
            <BrandLogo size={40} />
            <p className="font-body font-medium text-sm text-slate-600 dark:text-slate-400 mt-3 max-w-sm">
              {t.footer.tagline}
            </p>
          </div>

          {/* Uniform Social Media Coming Soon Pills */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <span className="font-heading font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {t.footer.socialTitle}
            </span>
            <div className="flex flex-wrap justify-center gap-3">
              {socials.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={triggerSoonToast}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#141226] border border-slate-300 dark:border-purple-800/50 hover:border-[#5818E8] transition-all"
                >
                  <span className="font-heading font-bold text-xs text-slate-800 dark:text-slate-200">
                    {item.name}
                  </span>
                  <span className="font-heading font-bold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#5818E8]/15 dark:bg-[#5818E8]/35 text-[#5818E8] dark:text-purple-200 border border-[#5818E8]/30">
                    {t.footer.comingSoon}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body font-semibold text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Lingua Franca • {t.footer.rights}</p>
          <p>WhatsApp: +57 350 427 2851</p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-slate-950 shadow-neon-green flex items-center justify-center hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Coming Soon Toast */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-24 right-6 z-50 max-w-xs p-4 rounded-2xl bg-[#141226] text-white border border-[#5818E8] shadow-neon-purple font-body font-semibold text-xs leading-relaxed"
        >
          {t.footer.toastSoon}
        </div>
      )}
    </footer>
  );
}
