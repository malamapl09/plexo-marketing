import { getTranslations } from "next-intl/server";
import { ReactNode } from "react";

interface Step {
  number: string;
  titleKey: string;
  descKey: string;
  icon: ReactNode;
}

const steps: Step[] = [
  {
    number: "01",
    titleKey: "step1Title",
    descKey: "step1Desc",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    number: "02",
    titleKey: "step2Title",
    descKey: "step2Desc",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    number: "03",
    titleKey: "step3Title",
    descKey: "step3Desc",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default async function HowItWorks() {
  const t = await getTranslations("HowItWorks");

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-3">
            {t("badge")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-indigo-300 to-transparent -translate-x-8 z-0" />
              )}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-indigo-600/25">
                  {step.icon}
                </div>
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
                  {t("stepLabel")} {step.number}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3">
                  {t(step.titleKey as Parameters<typeof t>[0])}
                </h3>
                <p className="text-slate-600 leading-relaxed">{t(step.descKey as Parameters<typeof t>[0])}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
