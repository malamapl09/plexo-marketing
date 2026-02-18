import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getAlternates } from "@/lib/seo";
import FeaturePageLayout from "../../../components/FeaturePageLayout";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "FeaturesCampaignsPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: getAlternates("/features/campaigns", locale),
  };
}

// ---------------------------------------------------------------------------
// Dashboard Mockup
// ---------------------------------------------------------------------------

function DashboardMockup() {
  const stores = [
    { name: "Store 001 — Downtown", status: "completed", progress: 100 },
    { name: "Store 002 — Westside", status: "completed", progress: 100 },
    { name: "Store 003 — Northgate", status: "in-progress", progress: 62 },
    { name: "Store 004 — Eastview", status: "in-progress", progress: 41 },
    { name: "Store 005 — Southpark", status: "not-started", progress: 0 },
    { name: "Store 006 — Airport", status: "not-started", progress: 0 },
  ];

  const statusMeta: Record<
    string,
    { label: string; barColor: string; textColor: string; bgColor: string; icon: React.ReactNode }
  > = {
    completed: {
      label: "Completed",
      barColor: "bg-emerald-500",
      textColor: "text-emerald-700",
      bgColor: "bg-emerald-50",
      icon: (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ),
    },
    "in-progress": {
      label: "In Progress",
      barColor: "bg-amber-400",
      textColor: "text-amber-700",
      bgColor: "bg-amber-50",
      icon: (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" strokeDasharray="4 2" />
        </svg>
      ),
    },
    "not-started": {
      label: "Not Started",
      barColor: "bg-slate-300",
      textColor: "text-slate-500",
      bgColor: "bg-slate-50",
      icon: (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      ),
    },
  };

  // SVG circle progress ring: r=30, circumference ≈ 188.5
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const pct = 0.78;
  const offset = circumference * (1 - pct);

  return (
    <div className="space-y-5">
      {/* Campaign header card */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-lg font-bold text-slate-900 truncate">
              Summer Promo 2026
            </h3>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
              Active
            </span>
          </div>
          <p className="mt-1 text-sm text-slate-500">
            Jun 1 &ndash; Aug 31, 2026 &nbsp;&middot;&nbsp; 6 stores enrolled
          </p>
          <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-600">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              2 completed
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
              2 in progress
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-slate-300 inline-block" />
              2 not started
            </span>
          </div>
        </div>

        {/* Circular progress ring */}
        <div
          className="flex-shrink-0 flex flex-col items-center gap-1"
          aria-label="78% execution progress"
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            aria-hidden="true"
            className="rotate-[-90deg]"
          >
            <circle
              cx="40"
              cy="40"
              r={radius}
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="8"
            />
            <circle
              cx="40"
              cy="40"
              r={radius}
              fill="none"
              stroke="#6366f1"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${circumference}`}
              strokeDashoffset={`${offset}`}
            />
          </svg>
          <span className="text-lg font-bold text-slate-900 -mt-[4.5rem] mb-8">
            78%
          </span>
          <span className="text-xs text-slate-500 font-medium">Executed</span>
        </div>
      </div>

      {/* Store grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {stores.map((store) => {
          const meta = statusMeta[store.status];
          return (
            <div
              key={store.name}
              className="bg-white border border-slate-200 rounded-xl p-4 space-y-3 shadow-sm"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-semibold text-slate-800 leading-tight">
                  {store.name}
                </p>
                <span
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap ${meta.bgColor} ${meta.textColor}`}
                >
                  {meta.icon}
                  {meta.label}
                </span>
              </div>

              {/* Progress bar */}
              <div>
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>Progress</span>
                  <span>{store.progress}%</span>
                </div>
                <div
                  className="w-full bg-slate-100 rounded-full h-1.5"
                  role="progressbar"
                  aria-valuenow={store.progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className={`h-1.5 rounded-full transition-all ${meta.barColor}`}
                    style={{ width: `${store.progress}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Mobile Mockup
// ---------------------------------------------------------------------------

function MobileMockup() {
  const tasks = [
    { label: "Set up endcap display", done: true },
    { label: "Place window signage", done: true },
    { label: "Update price tags", done: false },
    { label: "Take verification photo", done: false },
  ];

  return (
    <div
      className="w-64 bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl shadow-slate-900/40"
      aria-label="Mobile app mockup"
    >
      {/* Speaker notch */}
      <div className="flex justify-center mb-2">
        <div className="w-16 h-1.5 bg-slate-700 rounded-full" />
      </div>

      {/* Screen */}
      <div className="bg-white rounded-[1.75rem] overflow-hidden">
        {/* Indigo header */}
        <div className="bg-indigo-600 px-4 pt-4 pb-5">
          <p className="text-xs font-semibold text-indigo-200 uppercase tracking-widest mb-1">
            Campaign
          </p>
          <p className="text-base font-bold text-white leading-snug">
            Summer Promo 2026
          </p>
          <div className="mt-2 flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-emerald-400/20 text-emerald-200 text-xs font-semibold px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              Active
            </span>
            <span className="text-xs text-indigo-200">2 of 4 done</span>
          </div>
        </div>

        {/* Task list */}
        <div className="px-3 py-3 space-y-2">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide px-1 mb-1">
            My Tasks
          </p>
          {tasks.map((task) => (
            <div
              key={task.label}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 ${
                task.done ? "bg-emerald-50" : "bg-slate-50"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center border-2 ${
                  task.done
                    ? "bg-emerald-500 border-emerald-500"
                    : "bg-white border-slate-300"
                }`}
                aria-hidden="true"
              >
                {task.done && (
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
              <span
                className={`text-xs font-medium leading-tight ${
                  task.done ? "text-emerald-700 line-through" : "text-slate-700"
                }`}
              >
                {task.label}
              </span>
            </div>
          ))}

          {/* Photo verification upload area */}
          <div className="mt-1 border-2 border-dashed border-indigo-200 rounded-xl p-3 flex flex-col items-center gap-1.5 bg-indigo-50/50">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6366f1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
            <p className="text-xs font-semibold text-indigo-600">
              Upload proof photo
            </p>
            <p className="text-[10px] text-slate-400 text-center">
              Tap to take or choose from gallery
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function CampaignsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("FeaturesCampaignsPage");

  const capabilities = [
    {
      title: t("cap1Title"),
      desc: t("cap1Desc"),
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      ),
    },
    {
      title: t("cap2Title"),
      desc: t("cap2Desc"),
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="8" y1="6" x2="21" y2="6" />
          <line x1="8" y1="12" x2="21" y2="12" />
          <line x1="8" y1="18" x2="21" y2="18" />
          <polyline points="3 6 4 7 6 5" />
          <polyline points="3 12 4 13 6 11" />
          <polyline points="3 18 4 19 6 17" />
        </svg>
      ),
    },
    {
      title: t("cap3Title"),
      desc: t("cap3Desc"),
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      ),
    },
    {
      title: t("cap4Title"),
      desc: t("cap4Desc"),
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
  ];

  return (
    <FeaturePageLayout
      badge={t("badge")}
      title={t("title")}
      subtitle={t("subtitle")}
      mockup={<DashboardMockup />}
      mobileMockup={<MobileMockup />}
      capabilities={capabilities}
    />
  );
}
