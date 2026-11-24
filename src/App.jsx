import React, { useState, useEffect } from 'react';
import { translations } from './data/translations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import AboutAndContact from './components/AboutAndContact';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState('es');
  const [darkMode, setDarkMode] = useState(true); // Dark mode default
  const t = translations[lang];

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t.metaDesc);
    }
  }, [lang, t]);

  return (
    <div className="min-h-screen bg-[#F8F9FA] dark:bg-[#0B0A14] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar
        lang={lang}
        setLang={setLang}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        t={t}
      />
      <main>
        <Hero t={t} />
        <ServicesSection t={t} />
        <AboutAndContact t={t} lang={lang} />
      </main>
      <Footer t={t} lang={lang} />
    </div>
  );
}
