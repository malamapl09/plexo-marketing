import { Metadata } from "next";
import FeaturePageLayout from "../../components/FeaturePageLayout";

export const metadata: Metadata = {
  title: "Visual Merchandising & Planograms — Plexo",
  description:
    "Share planograms and visual standards with every store, then verify compliance with photo comparisons. No more guessing if the display went up correctly.",
};

// ── Dashboard Mockup ──────────────────────────────────────────────────────────

const referenceSlots = [
  ["bg-red-400", "bg-red-400", "bg-red-400", "bg-blue-400", "bg-blue-400"],
  ["bg-red-400", "bg-red-400", "bg-blue-400", "bg-blue-400", "bg-blue-400"],
  ["bg-yellow-400", "bg-yellow-400", "bg-yellow-400", "bg-yellow-400", "bg-green-400"],
  ["bg-yellow-400", "bg-green-400", "bg-green-400", "bg-green-400", "bg-green-400"],
];

const submissionSlots = [
  ["bg-red-400", "bg-red-400", "bg-blue-400", "bg-blue-400", "bg-blue-400"],
  ["bg-red-400", "bg-red-400", "bg-blue-400", "bg-blue-400", "bg-blue-400"],
  ["bg-yellow-400", "bg-yellow-400", "bg-yellow-400", "bg-green-400", "bg-green-400"],
  ["bg-yellow-400", "bg-yellow-400", "bg-green-400", "bg-green-400", "bg-green-400"],
];

const storeStatuses = [
  { name: "Store #2", status: "pass" },
  { name: "Store #5", status: "warn" },
  { name: "Store #8", status: "pass" },
  { name: "Store #11", status: "warn" },
];

function PlanogramGrid({ slots }: { slots: string[][] }) {
  return (
    <div className="flex flex-col gap-1 p-2 bg-slate-100 rounded-lg border border-slate-200">
      {slots.map((row, rIdx) => (
        <div key={rIdx} className="flex gap-1">
          {row.map((color, cIdx) => (
            <div
              key={cIdx}
              className={`${color} rounded w-8 h-7 flex-shrink-0 opacity-90`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function PassIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 text-green-600"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function WarnIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 text-amber-500"
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function DashboardMockup() {
  return (
    <div className="flex flex-col gap-4 text-sm">
      {/* Header bar */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-slate-900 text-base">Endcap Display — Week 8</h3>
          <p className="text-xs text-slate-500 mt-0.5">Promoted by HQ &middot; 14 stores assigned</p>
        </div>
        <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-full px-3 py-1">
          Active Campaign
        </span>
      </div>

      {/* Split comparison */}
      <div className="grid grid-cols-2 gap-4">
        {/* Reference side */}
        <div className="bg-white border border-slate-200 rounded-xl p-3">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Reference
          </p>
          <PlanogramGrid slots={referenceSlots} />
          <p className="text-xs text-slate-400 mt-2 text-center">HQ Planogram v3</p>
        </div>

        {/* Submission side */}
        <div className="bg-white border border-slate-200 rounded-xl p-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Store #5 Submission
            </p>
            <span className="text-xs font-medium text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5">
              Review
            </span>
          </div>
          <PlanogramGrid slots={submissionSlots} />
          <p className="text-xs text-slate-400 mt-2 text-center">Submitted Feb 17, 9:04 AM</p>
        </div>
      </div>

      {/* Compliance score */}
      <div className="bg-white border border-slate-200 rounded-xl px-4 py-3">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-medium text-slate-600">Compliance Score</span>
          <span className="text-sm font-bold text-green-600">92% Match</span>
        </div>
        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-2.5 bg-green-500 rounded-full" style={{ width: "92%" }} />
        </div>
        <p className="text-xs text-slate-400 mt-1.5">
          2 slots differ from reference &mdash; minor positional variance
        </p>
      </div>

      {/* Store thumbnails */}
      <div className="flex gap-2">
        {storeStatuses.map((store) => (
          <div
            key={store.name}
            className={`flex-1 bg-white border rounded-xl px-3 py-2.5 flex flex-col items-center gap-1.5 ${
              store.status === "pass"
                ? "border-green-200"
                : "border-amber-200"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                store.status === "pass" ? "bg-green-50" : "bg-amber-50"
              }`}
            >
              {store.status === "pass" ? <PassIcon /> : <WarnIcon />}
            </div>
            <p className="text-xs font-semibold text-slate-700">{store.name}</p>
            <p
              className={`text-xs font-medium ${
                store.status === "pass" ? "text-green-600" : "text-amber-600"
              }`}
            >
              {store.status === "pass" ? "Compliant" : "Needs Review"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Mobile Mockup ─────────────────────────────────────────────────────────────

function MobileMockup() {
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
            <span className="text-xs font-semibold text-indigo-200">Store #5</span>
          </div>
          <h4 className="text-base font-bold text-white leading-tight">Endcap Display</h4>
          <p className="text-xs text-indigo-200 mt-0.5">Week 8 &middot; Due Feb 19</p>
        </div>

        {/* Reference image placeholder */}
        <div className="px-3 pt-3">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Reference Planogram
          </p>
          <div className="rounded-xl overflow-hidden border border-slate-200">
            <div className="bg-slate-100 p-2 flex flex-col gap-1">
              {[
                ["bg-red-400", "bg-red-400", "bg-red-400", "bg-blue-400", "bg-blue-400"],
                ["bg-yellow-400", "bg-yellow-400", "bg-yellow-400", "bg-yellow-400", "bg-green-400"],
              ].map((row, rIdx) => (
                <div key={rIdx} className="flex gap-1 justify-center">
                  {row.map((color, cIdx) => (
                    <div key={cIdx} className={`${color} rounded w-9 h-6 flex-shrink-0 opacity-90`} />
                  ))}
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-slate-400 bg-white py-1.5">HQ Planogram v3</p>
          </div>
        </div>

        {/* Instruction text */}
        <div className="px-3 pt-2">
          <p className="text-xs text-slate-500 text-center leading-relaxed">
            Match the reference image above
          </p>
        </div>

        {/* Take Photo button */}
        <div className="px-3 pt-3 pb-4">
          <button className="w-full bg-indigo-600 text-white text-xs font-bold rounded-xl py-3 flex items-center justify-center gap-2">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
            Take Photo
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

// ── Capabilities ──────────────────────────────────────────────────────────────

const capabilities = [
  {
    title: "Planogram sharing",
    desc: "Upload reference images and distribute to stores instantly. Every location sees exactly what the display should look like before they touch a single product.",
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
    title: "Photo comparison",
    desc: "Side-by-side comparison of reference vs actual store execution. Spot discrepancies at a glance without traveling to the location.",
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
    title: "Compliance scoring",
    desc: "Automated or manual scoring of visual merchandising accuracy. Get a clear percentage match so you know exactly how well each store executed the display.",
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
  {
    title: "Regional standards",
    desc: "Set different visual standards for different store formats or regions. A flagship on Fifth Avenue and a suburban strip mall don&apos;t need the same planogram.",
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
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function VisualMerchandisingPage() {
  return (
    <FeaturePageLayout
      badge="Visual Merchandising"
      title="Every display, exactly as planned."
      subtitle="Share planograms and visual standards with every store, then verify compliance with photo comparisons. No more guessing if the display went up correctly."
      mockup={<DashboardMockup />}
      mobileMockup={<MobileMockup />}
      capabilities={capabilities}
    />
  );
}
