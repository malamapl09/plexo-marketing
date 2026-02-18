import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getAlternates } from "@/lib/seo";
import FeaturePageLayout from "../../../components/FeaturePageLayout";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "FeaturesChecklistsPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: getAlternates("/features/checklists", locale),
  };
}

// ── Dashboard Mockup ──────────────────────────────────────────────────────────

function CheckIcon({ checked }: { checked: boolean }) {
  if (!checked) {
    return (
      <span className="w-5 h-5 flex-shrink-0 rounded border-2 border-slate-300 bg-white" />
    );
  }
  return (
    <span className="w-5 h-5 flex-shrink-0 rounded border-2 border-green-500 bg-green-500 flex items-center justify-center">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-3 h-3 text-white"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

function PhotoBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5 ml-2 flex-shrink-0">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-3 h-3"
      >
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
      Photo required
    </span>
  );
}

const checklistItems = [
  { label: "Unlock and disarm security system", checked: true, photo: false },
  { label: "Turn on all lighting and signage", checked: true, photo: false },
  { label: "Inspect front entrance and windows", checked: true, photo: true },
  { label: "Verify cash drawer amounts", checked: true, photo: false },
  { label: "Confirm POS terminals are online", checked: true, photo: false },
  { label: "Restock front-of-store displays", checked: false, photo: true },
  { label: "Confirm staff schedule and assignments", checked: false, photo: false },
];

const templates = [
  { name: "Opening Checklist", count: 7, active: true },
  { name: "Closing Checklist", count: 9, active: false },
  { name: "Safety Inspection", count: 12, active: false },
  { name: "Clean Restroom", count: 5, active: false },
];

function DashboardMockup() {
  const completed = checklistItems.filter((i) => i.checked).length;
  const total = checklistItems.length;
  const pct = Math.round((completed / total) * 100);

  return (
    <div className="flex gap-0 min-h-[400px] rounded-lg overflow-hidden border border-slate-200 text-sm">
      {/* Sidebar */}
      <aside className="w-48 flex-shrink-0 bg-white border-r border-slate-200 flex flex-col">
        <div className="px-3 py-3 border-b border-slate-100">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Templates
          </p>
        </div>
        <nav className="flex-1 overflow-y-auto py-2">
          {templates.map((tpl) => (
            <div
              key={tpl.name}
              className={`mx-2 mb-1 px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${
                tpl.active
                  ? "bg-indigo-50 border border-indigo-200"
                  : "hover:bg-slate-50"
              }`}
            >
              <p
                className={`font-medium leading-tight ${
                  tpl.active ? "text-indigo-700" : "text-slate-700"
                }`}
              >
                {tpl.name}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">{tpl.count} steps</p>
            </div>
          ))}
        </nav>
        <div className="p-3 border-t border-slate-100">
          <button className="w-full flex items-center justify-center gap-1.5 text-xs font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg py-2 transition-colors">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            New Template
          </button>
        </div>
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col bg-slate-50">
        {/* Header */}
        <div className="bg-white border-b border-slate-200 px-5 py-4 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-slate-900">Opening Checklist</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Last updated by Maria G. &middot; Today 7:42 AM
            </p>
          </div>
          <span className="text-xs font-semibold text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1">
            In Progress
          </span>
        </div>

        {/* Progress bar */}
        <div className="bg-white border-b border-slate-100 px-5 py-3">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-medium text-slate-600">
              {completed} of {total} complete
            </span>
            <span className="text-xs font-semibold text-indigo-600">{pct}%</span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-2 bg-indigo-500 rounded-full transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        {/* Checklist items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-2">
          {checklistItems.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3 bg-white rounded-xl px-4 py-3 border transition-colors ${
                item.checked
                  ? "border-green-100 opacity-80"
                  : "border-slate-200 shadow-sm shadow-slate-100"
              }`}
            >
              <CheckIcon checked={item.checked} />
              <span
                className={`flex-1 font-medium ${
                  item.checked
                    ? "line-through text-slate-400"
                    : "text-slate-700"
                }`}
              >
                {item.label}
              </span>
              {item.photo && <PhotoBadge />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Mobile Mockup ─────────────────────────────────────────────────────────────

const mobileItems = [
  { label: "Unlock security system", checked: true },
  { label: "Turn on lighting", checked: true },
  { label: "Inspect entrance", checked: true, photo: true },
  { label: "Verify cash drawer", checked: false },
];

function MobileMockup() {
  const done = mobileItems.filter((i) => i.checked).length;
  const total = mobileItems.length;
  const pct = Math.round((done / total) * 100);

  return (
    <div className="w-64 bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl shadow-slate-900/40">
      {/* Screen */}
      <div className="bg-white rounded-[2rem] overflow-hidden">
        {/* Notch */}
        <div className="bg-slate-900 h-6 flex items-end justify-center pb-1">
          <div className="w-20 h-1.5 bg-slate-700 rounded-full" />
        </div>

        {/* Indigo header */}
        <div className="bg-indigo-600 px-4 pt-3 pb-4">
          <div className="flex items-center justify-between mb-1">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-indigo-200"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <span className="text-xs font-semibold text-indigo-200">
              Store #5
            </span>
          </div>
          <h4 className="text-base font-bold text-white leading-tight">
            Opening Checklist
          </h4>
          <p className="text-xs text-indigo-200 mt-0.5">Monday, Feb 17 &middot; 7:30 AM</p>

          {/* Progress bar */}
          <div className="mt-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-indigo-200">
                {done} of {total} steps
              </span>
              <span className="text-xs font-semibold text-white">{pct}%</span>
            </div>
            <div className="w-full h-1.5 bg-indigo-500/50 rounded-full overflow-hidden">
              <div
                className="h-1.5 bg-white rounded-full"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        </div>

        {/* Items */}
        <div className="px-3 py-3 space-y-2 bg-slate-50">
          {mobileItems.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-2.5 bg-white rounded-xl px-3 py-2.5 border ${
                item.checked ? "border-green-100" : "border-slate-200"
              }`}
            >
              {item.checked ? (
                <span className="w-4 h-4 flex-shrink-0 rounded border-2 border-green-500 bg-green-500 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-2.5 h-2.5 text-white"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
              ) : (
                <span className="w-4 h-4 flex-shrink-0 rounded border-2 border-slate-300 bg-white" />
              )}
              <span
                className={`text-xs font-medium flex-1 ${
                  item.checked
                    ? "line-through text-slate-400"
                    : "text-slate-700"
                }`}
              >
                {item.label}
              </span>
              {"photo" in item && item.photo && (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3.5 h-3.5 text-amber-500 flex-shrink-0"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* Bottom action */}
        <div className="px-3 pb-4 bg-slate-50">
          <button className="w-full bg-indigo-600 text-white text-xs font-semibold rounded-xl py-2.5 mt-1">
            Submit Checklist
          </button>
        </div>

        {/* Home indicator */}
        <div className="bg-white pb-2 flex justify-center">
          <div className="w-24 h-1 bg-slate-200 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default async function ChecklistsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("FeaturesChecklistsPage");

  const capabilities = [
    {
      title: t("cap1Title"),
      desc: t("cap1Desc"),
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <path d="M14 17.5h7M17.5 14v7" />
        </svg>
      ),
    },
    {
      title: t("cap2Title"),
      desc: t("cap2Desc"),
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <polyline points="16 3 21 3 21 8" />
          <line x1="4" y1="20" x2="21" y2="3" />
          <polyline points="21 16 21 21 16 21" />
          <line x1="15" y1="15" x2="21" y2="21" />
          <line x1="4" y1="4" x2="9" y2="9" />
        </svg>
      ),
    },
    {
      title: t("cap3Title"),
      desc: t("cap3Desc"),
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
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
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <line x1="2" y1="20" x2="22" y2="20" />
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
