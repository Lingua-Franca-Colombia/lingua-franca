import React from 'react';
import { Sparkles, ArrowRight, Code2, Languages, Users, Globe2 } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/translations';

export default function Hero({ t }) {
  const waDemoUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.languages.waMsg)}`;
  const waWebUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.webdev.waMsg)}`;

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Ambient Neon Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#5818E8]/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-32 -right-24 w-96 h-96 rounded-full bg-[#22C55E]/15 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Copy Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5818E8]/15 dark:bg-[#5818E8]/25 border border-[#5818E8]/40 text-[#5818E8] dark:text-[#22C55E] font-heading font-bold text-xs tracking-wider uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.hero.badge}</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[52px] leading-[1.12] tracking-tight text-slate-900 dark:text-white mb-6">
              {t.hero.titleStart}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5818E8] via-[#7C3AED] to-[#22C55E]">
                {t.hero.titleHighlight}
              </span>{' '}
              {t.hero.titleEnd}
            </h1>

            <p className="font-body font-medium text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-9">
              {t.hero.subtitle}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={waDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-heading font-extrabold text-sm uppercase tracking-wide bg-[#5818E8] hover:bg-[#4912C4] text-white shadow-neon-purple hover:scale-[1.02] transition-all"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 text-[#22C55E]" />
              </a>

              <a
                href={waWebUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-heading font-extrabold text-sm uppercase tracking-wide bg-[#22C55E] hover:bg-[#16A34A] text-slate-950 shadow-neon-green hover:scale-[1.02] transition-all"
              >
                <Code2 className="w-4 h-4" />
                <span>{t.hero.ctaSecondary}</span>
              </a>
            </div>
          </div>

          {/* Conceptual Vector Illustration Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#141226] border-2 border-[#5818E8]/40 dark:border-[#5818E8]/60 shadow-2xl">
                {/* Browser Header Dots */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 dark:border-purple-900/50">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-[#22C55E]" />
                  </div>
                  <span className="font-heading font-bold text-[11px] uppercase tracking-wider text-slate-400">
                    lingua-franca.app
                  </span>
                </div>

                {/* Conceptual Dual Ecosystem Grid */}
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-100 dark:bg-[#0B0A14] border border-purple-500/30 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#5818E8] flex items-center justify-center text-white shrink-0">
                      <Languages className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                        {t.hero.floating1}
                      </p>
                      <p className="font-body font-semibold text-xs text-[#5818E8] dark:text-[#22C55E]">
                        {t.hero.floating2}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-100 dark:bg-[#0B0A14] border border-emerald-500/30 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#22C55E] flex items-center justify-center text-slate-950 shrink-0">
                      <Code2 className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                        {t.hero.floating3}
                      </p>
                      <p className="font-body font-semibold text-xs text-slate-500 dark:text-slate-400">
                        HTML • React • E-Commerce
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="p-3.5 rounded-2xl bg-[#5818E8]/10 dark:bg-[#5818E8]/20 border border-[#5818E8]/30 text-center">
                      <Users className="w-5 h-5 mx-auto mb-1 text-[#5818E8] dark:text-[#22C55E]" />
                      <span className="font-heading font-bold text-xs text-slate-800 dark:text-slate-100 block">
                        {t.hero.floating4}
                      </span>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-[#22C55E]/10 dark:bg-[#22C55E]/15 border border-[#22C55E]/30 text-center">
                      <Globe2 className="w-5 h-5 mx-auto mb-1 text-[#22C55E]" />
                      <span className="font-heading font-bold text-xs text-slate-800 dark:text-slate-100 block">
                        TOEFL • IELTS
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
