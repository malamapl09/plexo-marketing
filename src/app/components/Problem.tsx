import { getTranslations } from "next-intl/server";
import { ReactNode } from "react";

interface PainPoint {
  icon: ReactNode;
  titleKey: string;
  descKey: string;
}

const painPoints: PainPoint[] = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    titleKey: "pain1Title",
    descKey: "pain1Desc",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    titleKey: "pain2Title",
    descKey: "pain2Desc",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titleKey: "pain3Title",
    descKey: "pain3Desc",
  },
];

export default async function Problem() {
  const t = await getTranslations("Problem");

  return (
    <section className="py-20 sm:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t("title")}{" "}
            <span className="text-violet-400">{t("titleHighlight")}</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point) => (
            <div
              key={point.titleKey}
              className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-violet-500/30 transition-colors"
            >
              <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center text-violet-400 mb-5">
                {point.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t(point.titleKey as Parameters<typeof t>[0])}</h3>
              <p className="text-slate-400 leading-relaxed">{t(point.descKey as Parameters<typeof t>[0])}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
