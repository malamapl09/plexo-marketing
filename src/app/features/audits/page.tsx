import { Metadata } from "next";
import FeaturePageLayout from "../../components/FeaturePageLayout";

export const metadata: Metadata = {
  title: "Store Audits & Inspections — Plexo",
  description:
    "Run scheduled or surprise audits across every location. Score compliance, capture photo evidence, and trigger corrective actions automatically.",
};

const auditRows = [
  {
    store: "Downtown Flagship",
    type: "Safety Audit",
    date: "Feb 14, 2026",
    score: 92,
    status: "Completed",
  },
  {
    store: "Westfield Mall",
    type: "Merchandise Check",
    date: "Feb 13, 2026",
    score: 78,
    status: "Completed",
  },
  {
    store: "Airport Terminal",
    type: "Safety Audit",
    date: "Feb 17, 2026",
    score: 0,
    status: "Scheduled",
  },
  {
    store: "Harbor View",
    type: "Hygiene Inspection",
    date: "Feb 12, 2026",
    score: 61,
    status: "Completed",
  },
  {
    store: "North Suburbs",
    type: "Merchandise Check",
    date: "Feb 17, 2026",
    score: 0,
    status: "In Progress",
  },
];

function scoreBarColor(score: number) {
  if (score >= 85) return "bg-emerald-500";
  if (score >= 70) return "bg-amber-400";
  return "bg-red-500";
}

function statusBadge(status: string) {
  if (status === "Completed")
    return (
      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
        Completed
      </span>
    );
  if (status === "Scheduled")
    return (
      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
        Scheduled
      </span>
    );
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700">
      In Progress
    </span>
  );
}

const DashboardMockup = (
  <div>
    {/* Stat cards */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
      <div className="bg-white border border-slate-200 rounded-xl p-4">
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-1">
          Audits This Month
        </p>
        <p className="text-3xl font-extrabold text-slate-900">47</p>
      </div>
      <div className="bg-white border border-slate-200 rounded-xl p-4">
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-1">
          Average Score
        </p>
        <p className="text-3xl font-extrabold text-emerald-600">87%</p>
      </div>
      <div className="bg-white border border-slate-200 rounded-xl p-4">
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-1">
          Stores Audited
        </p>
        <p className="text-3xl font-extrabold text-slate-900">
          23
          <span className="text-base font-semibold text-slate-400">/30</span>
        </p>
      </div>
      <div className="bg-white border border-slate-200 rounded-xl p-4">
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-1">
          Critical Findings
        </p>
        <p className="text-3xl font-extrabold text-red-600">3</p>
      </div>
    </div>

    {/* Recent audits table */}
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-900">Recent Audits</p>
        <span className="text-xs text-indigo-600 font-medium cursor-pointer hover:underline">
          View all
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="text-left px-4 py-2.5 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Store
              </th>
              <th className="text-left px-4 py-2.5 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Audit Type
              </th>
              <th className="text-left px-4 py-2.5 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Date
              </th>
              <th className="text-left px-4 py-2.5 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Score
              </th>
              <th className="text-left px-4 py-2.5 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {auditRows.map((row) => (
              <tr key={row.store} className="hover:bg-slate-50 transition-colors">
                <td className="px-4 py-3 font-medium text-slate-900">
                  {row.store}
                </td>
                <td className="px-4 py-3 text-slate-600">{row.type}</td>
                <td className="px-4 py-3 text-slate-500">{row.date}</td>
                <td className="px-4 py-3">
                  {row.score > 0 ? (
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-2 rounded-full ${scoreBarColor(row.score)}`}
                          style={{ width: `${row.score}%` }}
                        />
                      </div>
                      <span
                        className={`text-xs font-semibold ${
                          row.score >= 85
                            ? "text-emerald-600"
                            : row.score >= 70
                            ? "text-amber-600"
                            : "text-red-600"
                        }`}
                      >
                        {row.score}%
                      </span>
                    </div>
                  ) : (
                    <span className="text-slate-400 text-xs">—</span>
                  )}
                </td>
                <td className="px-4 py-3">{statusBadge(row.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const MobileMockup = (
  <div className="w-64 bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl shadow-slate-900/50">
    <div className="bg-slate-800 rounded-[2rem] overflow-hidden">
      {/* Status bar */}
      <div className="flex justify-between items-center px-5 pt-3 pb-1">
        <span className="text-white text-xs font-medium">9:41</span>
        <div className="flex gap-1 items-center">
          <div className="flex gap-0.5">
            <div className="w-1 h-2 bg-white rounded-sm opacity-60" />
            <div className="w-1 h-2.5 bg-white rounded-sm opacity-80" />
            <div className="w-1 h-3 bg-white rounded-sm" />
          </div>
          <svg
            className="text-white ml-1"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="2" y="7" width="20" height="11" rx="2" />
            <path d="M22 11v4" />
          </svg>
        </div>
      </div>

      {/* Indigo header */}
      <div className="bg-indigo-600 px-4 py-4">
        <div className="flex items-center gap-2 mb-1">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-indigo-200"
          >
            <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
            <rect x="9" y="3" width="6" height="4" rx="1" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <span className="text-indigo-200 text-xs font-medium">
            Surprise Audit
          </span>
        </div>
        <p className="text-white font-bold text-base">Safety Audit</p>
        <p className="text-indigo-200 text-xs mt-0.5">Store #12 — Harbor View</p>
      </div>

      {/* Audit section body */}
      <div className="bg-white px-4 pt-4 pb-3">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-bold text-slate-900 uppercase tracking-wide">
            Fire Exits
          </p>
          <span className="text-xs text-slate-400">3 items</span>
        </div>
        <div className="space-y-2.5">
          {/* Item 1 — pass */}
          <div className="flex items-center gap-2.5 bg-emerald-50 rounded-lg px-3 py-2">
            <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <p className="text-xs text-slate-700 font-medium">
              Exit signs illuminated
            </p>
          </div>
          {/* Item 2 — pass */}
          <div className="flex items-center gap-2.5 bg-emerald-50 rounded-lg px-3 py-2">
            <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <p className="text-xs text-slate-700 font-medium">
              Pathways unobstructed
            </p>
          </div>
          {/* Item 3 — fail */}
          <div className="flex items-center gap-2.5 bg-red-50 rounded-lg px-3 py-2">
            <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </div>
            <p className="text-xs text-slate-700 font-medium">
              Door hardware functional
            </p>
          </div>
        </div>

        {/* Camera capture button */}
        <div className="mt-4 flex items-center gap-2">
          <button className="flex-1 flex items-center justify-center gap-1.5 bg-indigo-600 text-white text-xs font-semibold rounded-lg py-2.5">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
            Add Photo Evidence
          </button>
        </div>

        {/* Score indicator */}
        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
          <p className="text-xs text-slate-500 font-medium">Section Score</p>
          <div className="flex items-center gap-2">
            <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-1.5 bg-amber-400 rounded-full" style={{ width: "67%" }} />
            </div>
            <span className="text-xs font-bold text-amber-600">67%</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-slate-50 px-4 py-2.5 border-t border-slate-200 flex justify-around">
        <div className="flex flex-col items-center gap-0.5">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-indigo-600"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
          <span className="text-indigo-600 text-[9px] font-semibold">Home</span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-slate-400"
          >
            <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
            <rect x="9" y="3" width="6" height="4" rx="1" />
          </svg>
          <span className="text-slate-400 text-[9px] font-semibold">Tasks</span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-slate-400"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
          </svg>
          <span className="text-slate-400 text-[9px] font-semibold">Profile</span>
        </div>
      </div>
    </div>
  </div>
);

const capabilities = [
  {
    title: "Customizable audit forms",
    desc: "Build scoring templates with sections, weights, and pass/fail criteria tailored to every audit type and department.",
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
      >
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 12h6M9 16h4" />
      </svg>
    ),
  },
  {
    title: "Photo evidence",
    desc: "Capture and annotate photos for every finding directly in the app. All evidence is stored alongside the audit record.",
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
      >
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    title: "Automated scheduling",
    desc: "Set recurring audit schedules by store, region, or audit type. Surprise audits can be dispatched instantly to any location.",
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
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
  },
  {
    title: "Instant corrective actions",
    desc: "Automatically create follow-up tasks when items fail an audit. Assign owners, set deadlines, and track resolution in real time.",
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
      >
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

export default function AuditsPage() {
  return (
    <FeaturePageLayout
      badge="Store Audits &amp; Inspections"
      title="Inspect with confidence, act on data."
      subtitle="Run scheduled or surprise audits across every location. Score compliance, capture photo evidence, and trigger corrective actions automatically."
      mockup={DashboardMockup}
      mobileMockup={MobileMockup}
      capabilities={capabilities}
    />
  );
}
