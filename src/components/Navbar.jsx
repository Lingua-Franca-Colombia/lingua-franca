import React, { useState } from 'react';
import { Sun, Moon, Globe, Menu, X, MessageCircle } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { WHATSAPP_NUMBER } from '../data/translations';

export default function Navbar({ lang, setLang, darkMode, setDarkMode, t }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'));
  const toggleTheme = () => setDarkMode((prev) => !prev);

  const quickWaUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    lang === 'es'
      ? '¡Hola Lingua Franca! Me gustaría recibir más información.'
      : 'Hi Lingua Franca! I would like to get more information.'
  )}`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/85 dark:bg-[#0B0A14]/85 border-b border-slate-200/80 dark:border-purple-900/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#" aria-label="Lingua Franca Home">
          <BrandLogo size={42} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-body font-bold text-sm text-slate-700 dark:text-slate-200">
          <a href="#idiomas" className="hover:text-[#5818E8] dark:hover:text-[#22C55E] transition-colors">
            {t.nav.languages}
          </a>
          <a href="#desarrollo-web" className="hover:text-[#5818E8] dark:hover:text-[#22C55E] transition-colors">
            {t.nav.webdev}
          </a>
          <a href="#nosotros" className="hover:text-[#5818E8] dark:hover:text-[#22C55E] transition-colors">
            {t.nav.about}
          </a>
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <button
            type="button"
            onClick={toggleLang}
            aria-label="Cambiar idioma / Switch language"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-heading font-bold border border-slate-300 dark:border-purple-700/60 bg-slate-100/80 dark:bg-[#141226] text-slate-800 dark:text-slate-100 hover:border-[#5818E8] dark:hover:border-[#22C55E] transition-all"
          >
            <Globe className="w-3.5 h-3.5 text-[#5818E8] dark:text-[#22C55E]" />
            <span>{lang === 'es' ? 'ES' : 'EN'}</span>
          </button>

          {/* Theme Switcher */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={darkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
            className="p-2.5 rounded-full border border-slate-300 dark:border-purple-700/60 bg-slate-100/80 dark:bg-[#141226] text-slate-800 dark:text-[#22C55E] hover:border-[#5818E8] dark:hover:border-[#22C55E] transition-all"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-[#5818E8]" />}
          </button>

          {/* Desktop CTA */}
          <a
            href={quickWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider bg-[#5818E8] hover:bg-[#4912C4] text-white shadow-neon-purple transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#22C55E]" />
            {t.nav.cta}
          </a>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
            className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-purple-900/30"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 space-y-3 bg-white dark:bg-[#0B0A14] border-b border-slate-200 dark:border-purple-900/40">
          <a
            href="#idiomas"
            onClick={() => setMenuOpen(false)}
            className="block py-2 font-heading font-bold text-sm text-slate-800 dark:text-slate-100"
          >
            {t.nav.languages}
          </a>
          <a
            href="#desarrollo-web"
            onClick={() => setMenuOpen(false)}
            className="block py-2 font-heading font-bold text-sm text-slate-800 dark:text-slate-100"
          >
            {t.nav.webdev}
          </a>
          <a
            href="#nosotros"
            onClick={() => setMenuOpen(false)}
            className="block py-2 font-heading font-bold text-sm text-slate-800 dark:text-slate-100"
          >
            {t.nav.about}
          </a>
          <a
            href={quickWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-heading font-bold text-xs uppercase tracking-wider bg-[#5818E8] text-white"
          >
            <MessageCircle className="w-4 h-4 text-[#22C55E]" />
            {t.nav.cta}
          </a>
        </div>
      )}
    </header>
  );
}
