import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getAlternates } from "@/lib/seo";
import FeaturePageLayout from "../../../components/FeaturePageLayout";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "FeaturesIssueTrackingPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: getAlternates("/features/issue-tracking", locale),
  };
}

// ---------------------------------------------------------------------------
// Dashboard Mockup
// ---------------------------------------------------------------------------

function DashboardMockup() {
  const stats = [
    { label: "Open Issues", value: "23", color: "text-rose-600", bg: "bg-rose-50" },
    { label: "Avg Resolution Time", value: "4.2 hrs", color: "text-amber-600", bg: "bg-amber-50" },
    { label: "SLA Compliance", value: "96%", color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Resolved Today", value: "8", color: "text-indigo-600", bg: "bg-indigo-50" },
  ];

  const categories: Record<string, { dot: string; label: string }> = {
    Maintenance: { dot: "bg-amber-400", label: "Maintenance" },
    Safety: { dot: "bg-rose-500", label: "Safety" },
    Equipment: { dot: "bg-violet-500", label: "Equipment" },
    IT: { dot: "bg-sky-500", label: "IT" },
  };

  const priorities: Record<string, { text: string; bg: string }> = {
    High: { text: "text-rose-700", bg: "bg-rose-100" },
    Medium: { text: "text-amber-700", bg: "bg-amber-100" },
    Low: { text: "text-slate-600", bg: "bg-slate-100" },
  };

  const statuses: Record<string, { text: string; bg: string; dot: string }> = {
    Open: { text: "text-rose-700", bg: "bg-rose-50", dot: "bg-rose-400" },
    "In Progress": { text: "text-amber-700", bg: "bg-amber-50", dot: "bg-amber-400" },
    Resolved: { text: "text-emerald-700", bg: "bg-emerald-50", dot: "bg-emerald-500" },
  };

  const issues = [
    {
      id: "ISS-041",
      title: "Broken refrigerator unit",
      category: "Equipment",
      store: "Store 003",
      priority: "High",
      assignee: "MR",
      status: "In Progress",
    },
    {
      id: "ISS-042",
      title: "Wet floor near entrance",
      category: "Safety",
      store: "Store 001",
      priority: "High",
      assignee: "JL",
      status: "Open",
    },
    {
      id: "ISS-043",
      title: "POS terminal offline",
      category: "IT",
      store: "Store 007",
      priority: "High",
      assignee: "TP",
      status: "In Progress",
    },
    {
      id: "ISS-044",
      title: "Damaged shelf in aisle 3",
      category: "Maintenance",
      store: "Store 002",
      priority: "Medium",
      assignee: "AK",
      status: "Open",
    },
    {
      id: "ISS-045",
      title: "AC not working",
      category: "Equipment",
      store: "Store 005",
      priority: "Medium",
      assignee: "SN",
      status: "Resolved",
    },
  ];

  return (
    <div className="space-y-5">
      {/* Stat cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`${stat.bg} rounded-xl p-4 flex flex-col gap-1`}
          >
            <span className={`text-2xl font-extrabold ${stat.color}`}>
              {stat.value}
            </span>
            <span className="text-xs font-medium text-slate-600 leading-tight">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Issues table */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-800">Active Issues</p>
          <span className="text-xs text-slate-400 font-medium">Last updated: just now</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm" aria-label="Issue tracking table">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="text-left text-xs font-semibold text-slate-500 px-4 py-2.5 uppercase tracking-wide">
                  #
                </th>
                <th className="text-left text-xs font-semibold text-slate-500 px-4 py-2.5 uppercase tracking-wide">
                  Title
                </th>
                <th className="text-left text-xs font-semibold text-slate-500 px-4 py-2.5 uppercase tracking-wide hidden sm:table-cell">
                  Category
                </th>
                <th className="text-left text-xs font-semibold text-slate-500 px-4 py-2.5 uppercase tracking-wide hidden md:table-cell">
                  Store
                </th>
                <th className="text-left text-xs font-semibold text-slate-500 px-4 py-2.5 uppercase tracking-wide">
                  Priority
                </th>
                <th className="text-left text-xs font-semibold text-slate-500 px-4 py-2.5 uppercase tracking-wide hidden sm:table-cell">
                  Assigned
                </th>
                <th className="text-left text-xs font-semibold text-slate-500 px-4 py-2.5 uppercase tracking-wide">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {issues.map((issue) => {
                const cat = categories[issue.category];
                const pri = priorities[issue.priority];
                const sts = statuses[issue.status];
                return (
                  <tr key={issue.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="px-4 py-3 text-xs font-mono text-slate-400 whitespace-nowrap">
                      {issue.id}
                    </td>
                    <td className="px-4 py-3 font-medium text-slate-800 whitespace-nowrap">
                      {issue.title}
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      <span className="inline-flex items-center gap-1.5 text-xs text-slate-600">
                        <span
                          className={`w-2 h-2 rounded-full flex-shrink-0 ${cat.dot}`}
                          aria-hidden="true"
                        />
                        {cat.label}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-500 hidden md:table-cell whitespace-nowrap">
                      {issue.store}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${pri.bg} ${pri.text}`}
                      >
                        {issue.priority}
                      </span>
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      <span
                        className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold"
                        aria-label={`Assigned to ${issue.assignee}`}
                      >
                        {issue.assignee}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold ${sts.bg} ${sts.text}`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${sts.dot}`}
                          aria-hidden="true"
                        />
                        {issue.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Mobile Mockup
// ---------------------------------------------------------------------------

function MobileMockup() {
  return (
    <div
      className="w-64 bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl shadow-slate-900/40"
      aria-label="Mobile issue reporting form mockup"
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
            New
          </p>
          <p className="text-base font-bold text-white leading-snug">
            Report Issue
          </p>
        </div>

        {/* Form body */}
        <div className="px-3 py-4 space-y-3">
          {/* Category field */}
          <div>
            <label className="block text-[10px] font-semibold text-slate-500 uppercase tracking-wide mb-1">
              Category
            </label>
            <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
              <span className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <span className="w-2 h-2 rounded-full bg-violet-500 inline-block" aria-hidden="true" />
                Equipment
              </span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>

          {/* Description field */}
          <div>
            <label className="block text-[10px] font-semibold text-slate-500 uppercase tracking-wide mb-1">
              Description
            </label>
            <div className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 h-14">
              <p className="text-xs text-slate-400 leading-relaxed">
                Freezer unit in produce section not maintaining temp&hellip;
              </p>
            </div>
          </div>

          {/* Priority selector */}
          <div>
            <label className="block text-[10px] font-semibold text-slate-500 uppercase tracking-wide mb-1">
              Priority
            </label>
            <div className="flex gap-1.5">
              <button
                type="button"
                className="flex-1 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-500"
                aria-label="Low priority"
              >
                Low
              </button>
              <button
                type="button"
                className="flex-1 py-1.5 rounded-lg text-xs font-semibold bg-amber-100 text-amber-700"
                aria-label="Medium priority"
              >
                Medium
              </button>
              <button
                type="button"
                className="flex-1 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 text-white ring-2 ring-indigo-600 ring-offset-1"
                aria-label="High priority, selected"
                aria-pressed="true"
              >
                High
              </button>
            </div>
          </div>

          {/* Submit button */}
          <button
            type="button"
            className="w-full bg-indigo-600 text-white text-xs font-bold py-2.5 rounded-xl mt-1"
            aria-label="Submit issue report"
          >
            Submit Issue
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function IssueTrackingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("FeaturesIssueTrackingPage");

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
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
          <line x1="9" y1="9" x2="15" y2="9" />
          <line x1="9" y1="13" x2="13" y2="13" />
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
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <line x1="11" y1="8" x2="11" y2="14" />
          <line x1="8" y1="11" x2="14" y2="11" />
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
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
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
          <polyline points="17 11 21 7 17 3" />
          <line x1="21" y1="7" x2="9" y2="7" />
          <polyline points="7 21 3 17 7 13" />
          <line x1="15" y1="17" x2="3" y2="17" />
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
