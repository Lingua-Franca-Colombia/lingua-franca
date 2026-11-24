import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/translations';

export default function AboutAndContact({ t, lang }) {
  const [selectedService, setSelectedService] = useState(t.contact.options[0].label);
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const greeting =
      lang === 'es'
        ? `¡Hola Lingua Franca! Soy ${name || 'un interesado'}.`
        : `Hi Lingua Franca! My name is ${name || 'a prospective client'}.`;
    const interest =
      lang === 'es'
        ? `Me interesa: *${selectedService}*.`
        : `I'm interested in: *${selectedService}*.`;
    const extra = notes.trim()
      ? lang === 'es'
        ? ` Detalles: ${notes.trim()}`
        : ` Details: ${notes.trim()}`
      : '';

    const fullMsg = `${greeting} ${interest}${extra}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMsg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* ABOUT SECTION */}
      <section
        id="nosotros"
        className="py-20 bg-slate-100/70 dark:bg-[#0F0D1D] border-y border-slate-200/80 dark:border-purple-900/30"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider bg-[#5818E8]/15 dark:bg-[#5818E8]/30 text-[#5818E8] dark:text-[#22C55E] border border-[#5818E8]/30 mb-4">
            {t.about.badge}
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-6">
            {t.about.title}
          </h2>
          <p className="font-body font-medium text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            {t.about.p1}
          </p>
          <p className="font-body font-medium text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-12">
            {t.about.p2}
          </p>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
            {t.about.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-5 rounded-3xl bg-white dark:bg-[#141226] border border-slate-200 dark:border-purple-800/40"
              >
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#5818E8] dark:text-[#22C55E] block mb-1">
                  {stat.value}
                </span>
                <span className="font-body font-bold text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE WHATSAPP LEAD BUILDER */}
      <section id="contacto" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-10 bg-white dark:bg-[#141226] border-2 border-[#5818E8]/50 shadow-2xl">
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider bg-[#22C55E]/15 text-[#16A34A] dark:text-[#22C55E] mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                {t.contact.badge}
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-2">
                {t.contact.title}
              </h2>
              <p className="font-body font-medium text-sm sm:text-base text-slate-600 dark:text-slate-300">
                {t.contact.subtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-heading font-bold text-xs uppercase tracking-wider text-slate-700 dark:text-slate-200 mb-3">
                  {t.contact.serviceLabel}
                </label>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {t.contact.options.map((opt) => {
                    const active = selectedService === opt.label;
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setSelectedService(opt.label)}
                        className={`text-left px-4 py-3 rounded-2xl border font-body font-bold text-xs sm:text-sm flex items-center justify-between transition-all ${
                          active
                            ? 'bg-[#5818E8] text-white border-[#5818E8] shadow-md'
                            : 'bg-slate-50 dark:bg-[#0B0A14] text-slate-700 dark:text-slate-200 border-slate-200 dark:border-purple-900/50 hover:border-[#5818E8]'
                        }`}
                      >
                        <span>{opt.label}</span>
                        {active && <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 ml-2" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="lead-name"
                    className="block font-heading font-bold text-xs uppercase tracking-wider text-slate-700 dark:text-slate-200 mb-2"
                  >
                    {t.contact.nameLabel}
                  </label>
                  <input
                    id="lead-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#0B0A14] border border-slate-300 dark:border-purple-900/60 font-body font-medium text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#22C55E]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lead-notes"
                    className="block font-heading font-bold text-xs uppercase tracking-wider text-slate-700 dark:text-slate-200 mb-2"
                  >
                    {t.contact.notesLabel}
                  </label>
                  <input
                    id="lead-notes"
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={t.contact.notesPlaceholder}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#0B0A14] border border-slate-300 dark:border-purple-900/60 font-body font-medium text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#22C55E]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-full font-heading font-extrabold text-sm uppercase tracking-wider bg-[#22C55E] hover:bg-[#16A34A] text-slate-950 shadow-neon-green flex items-center justify-center gap-2.5 hover:scale-[1.01] transition-all"
              >
                <Send className="w-4 h-4" />
                <span>{t.contact.submitBtn}</span>
              </button>

              <p className="text-center font-body font-semibold text-xs text-slate-500 dark:text-slate-400">
                {t.contact.directNote}
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
