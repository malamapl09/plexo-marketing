"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const FAQ_KEYS = [1, 2, 3, 4, 5, 6, 7] as const;

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const t = useTranslations("FAQ");

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-3">
            {t("sectionLabel")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {t("title")}
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_KEYS.map((n, i) => (
            <div
              key={n}
              className="border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-sm sm:text-base font-semibold text-slate-900 pr-4">
                  {t(`q${n}`)}
                </span>
                <svg
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-slate-600 leading-relaxed">{t(`a${n}`)}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
