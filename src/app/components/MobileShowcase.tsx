import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function MobileShowcase() {
  const t = await getTranslations("MobileShowcase");

  return (
    <section className="py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-3">
              {t("sectionLabel")}
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              {t("title")}
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              {t("subtitle")}
            </p>
            <ul className="mt-8 space-y-4">
              {[
                t("feature1"),
                t("feature2"),
                t("feature3"),
                t("feature4"),
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-600/25 transition-all"
              >
                {t("ctaText")}
              </Link>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone frame */}
              <div className="w-64 sm:w-72 bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-10" />
                {/* Screen */}
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-indigo-600 px-6 pt-8 pb-4">
                    <p className="text-white/70 text-xs">Good morning, Maria</p>
                    <p className="text-white text-lg font-bold mt-1">My Tasks</p>
                    <div className="flex gap-2 mt-3">
                      <span className="bg-white/20 text-white text-xs px-2.5 py-1 rounded-full">
                        5 pending
                      </span>
                      <span className="bg-emerald-400/20 text-emerald-200 text-xs px-2.5 py-1 rounded-full">
                        12 done
                      </span>
                    </div>
                  </div>
                  {/* Task list */}
                  <div className="p-4 space-y-3">
                    {[
                      { title: "Check endcap displays", store: "Store #3", urgent: true },
                      { title: "Complete safety checklist", store: "Store #3", urgent: false },
                      { title: "Upload promo photos", store: "Store #3", urgent: false },
                      { title: "Restock aisle 7 signage", store: "Store #3", urgent: true },
                    ].map((task) => (
                      <div
                        key={task.title}
                        className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl"
                      >
                        <div className="mt-0.5 w-5 h-5 border-2 border-slate-300 rounded-md flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-slate-800 truncate">
                            {task.title}
                          </p>
                          <p className="text-xs text-slate-500 mt-0.5">{task.store}</p>
                        </div>
                        {task.urgent && (
                          <span className="text-[10px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded font-medium">
                            Urgent
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                  {/* Bottom nav */}
                  <div className="flex justify-around py-3 border-t border-slate-100">
                    {["Home", "Tasks", "Audit", "More"].map((tab, i) => (
                      <div key={tab} className="text-center">
                        <div
                          className={`w-5 h-5 mx-auto rounded ${
                            i === 1 ? "bg-indigo-600" : "bg-slate-300"
                          }`}
                        />
                        <p
                          className={`text-[10px] mt-1 ${
                            i === 1 ? "text-indigo-600 font-medium" : "text-slate-400"
                          }`}
                        >
                          {tab}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating notification */}
              <div className="absolute -left-8 top-1/3 bg-white rounded-xl shadow-xl p-3 w-48 border border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-800">Task Completed</p>
                    <p className="text-[10px] text-slate-500">Endcap display verified</p>
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
