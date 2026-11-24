import React from 'react';
import {
  Languages,
  Award,
  Users,
  BookOpenCheck,
  Layout,
  ShoppingBag,
  Smartphone,
  Rocket,
  ArrowUpRight,
} from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/translations';

const langIcons = [Languages, BookOpenCheck, Award, Users];
const webIcons = [Layout, ShoppingBag, Smartphone, Rocket];

export default function ServicesSection({ t }) {
  const waLangUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.languages.waMsg)}`;
  const waWebUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.webdev.waMsg)}`;

  return (
    <>
      {/* SECTION 1: LANGUAGE CLASSES */}
      <section id="idiomas" className="py-20 bg-slate-100/70 dark:bg-[#0F0D1D] border-y border-slate-200/80 dark:border-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider bg-[#5818E8]/15 dark:bg-[#5818E8]/30 text-[#5818E8] dark:text-[#22C55E] border border-[#5818E8]/30 mb-4">
              {t.languages.badge}
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-4">
              {t.languages.title}
            </h2>
            <p className="font-body font-medium text-lg text-slate-600 dark:text-slate-300">
              {t.languages.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {t.languages.cards.map((card, idx) => {
              const Icon = langIcons[idx % langIcons.length];
              return (
                <article
                  key={card.title}
                  className="group rounded-3xl p-6 bg-white dark:bg-[#141226] border border-slate-200 dark:border-purple-800/40 hover:border-[#5818E8] dark:hover:border-[#22C55E] transition-all flex flex-col justify-between shadow-sm hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#5818E8]/10 dark:bg-[#5818E8]/25 flex items-center justify-center text-[#5818E8] dark:text-[#22C55E] group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-heading font-bold text-[11px] px-3 py-1 rounded-full bg-slate-100 dark:bg-[#0B0A14] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-purple-900/50">
                        {card.tag}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-3 leading-snug">
                      {card.title}
                    </h3>
                    <p className="font-body font-medium text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Language CTA Banner */}
          <div className="text-center">
            <a
              href={waLangUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-heading font-extrabold text-sm uppercase tracking-wide bg-[#5818E8] hover:bg-[#4912C4] text-white shadow-neon-purple hover:scale-[1.02] transition-all"
            >
              <span>{t.languages.cta}</span>
              <ArrowUpRight className="w-5 h-5 text-[#22C55E]" />
            </a>
            <p className="font-body font-semibold text-xs text-slate-500 dark:text-slate-400 mt-3">
              {t.languages.ctaSub}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: WEB DEVELOPMENT */}
      <section id="desarrollo-web" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider bg-[#22C55E]/15 text-[#16A34A] dark:text-[#22C55E] border border-[#22C55E]/40 mb-4">
              {t.webdev.badge}
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-4">
              {t.webdev.title}
            </h2>
            <p className="font-body font-medium text-lg text-slate-600 dark:text-slate-300">
              {t.webdev.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {t.webdev.features.map((feat, idx) => {
              const Icon = webIcons[idx % webIcons.length];
              return (
                <article
                  key={feat.title}
                  className="rounded-3xl p-7 bg-white dark:bg-[#141226] border border-slate-200 dark:border-purple-800/40 hover:border-[#22C55E] transition-all flex items-start gap-5 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#22C55E]/15 flex items-center justify-center text-[#16A34A] dark:text-[#22C55E] shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2">
                      {feat.title}
                    </h3>
                    <p className="font-body font-medium text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Web Dev CTA Banner */}
          <div className="text-center">
            <a
              href={waWebUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-heading font-extrabold text-sm uppercase tracking-wide bg-[#22C55E] hover:bg-[#16A34A] text-slate-950 shadow-neon-green hover:scale-[1.02] transition-all"
            >
              <span>{t.webdev.cta}</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
            <p className="font-body font-semibold text-xs text-slate-500 dark:text-slate-400 mt-3">
              {t.webdev.ctaSub}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
