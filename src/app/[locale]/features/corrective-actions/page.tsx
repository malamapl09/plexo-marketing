import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getAlternates } from "@/lib/seo";
import FeaturePageLayout from "../../../components/FeaturePageLayout";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "FeaturesCorrectiveActionsPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: getAlternates("/features/corrective-actions", locale),
  };
}

// ---------------------------------------------------------------------------
// Dashboard Mockup
// ---------------------------------------------------------------------------

function DashboardMockup() {
  return (
    <div className="space-y-5">
      {/* Stat cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white border border-slate-200 rounded-xl p-4">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Open CAPAs</p>
          <p className="mt-1 text-3xl font-extrabold text-slate-900">14</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <p className="text-xs font-medium text-red-600 uppercase tracking-wide">Overdue</p>
          <p className="mt-1 text-3xl font-extrabold text-red-600">3</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Avg Resolution</p>
          <p className="mt-1 text-3xl font-extrabold text-slate-900">2.4<span className="text-base font-semibold text-slate-400 ml-1">days</span></p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Resolved This Month</p>
          <p className="mt-1 text-3xl font-extrabold text-slate-900">31</p>
        </div>
      </div>

      {/* Kanban columns */}
      <div className="grid grid-cols-3 gap-3">
        {/* Open */}
        <div className="bg-slate-100 rounded-xl p-3 space-y-2">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Open</span>
            <span className="text-xs font-bold text-white bg-slate-500 rounded-full px-2 py-0.5">3</span>
          </div>

          {/* CAPA card 1 */}
          <div className="bg-white border border-slate-200 rounded-lg p-3 space-y-2">
            <div className="flex items-start justify-between gap-1">
              <p className="text-xs font-semibold text-slate-800 leading-snug">Blocked fire exit</p>
              <span className="shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded bg-red-100 text-red-700">Critical</span>
            </div>
            <p className="text-[10px] text-slate-500">Audit #47 &middot; Store #8</p>
            <div className="flex items-center justify-between">
              <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white text-[9px] font-bold">JR</div>
              <span className="text-[10px] text-red-500 font-medium">Due Feb 18</span>
            </div>
          </div>

          {/* CAPA card 2 */}
          <div className="bg-white border border-slate-200 rounded-lg p-3 space-y-2">
            <div className="flex items-start justify-between gap-1">
              <p className="text-xs font-semibold text-slate-800 leading-snug">Missing price labels — aisle 4</p>
              <span className="shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-700">Major</span>
            </div>
            <p className="text-[10px] text-slate-500">Audit #51 &middot; Store #3</p>
            <div className="flex items-center justify-between">
              <div className="w-6 h-6 rounded-full bg-violet-600 flex items-center justify-center text-white text-[9px] font-bold">AM</div>
              <span className="text-[10px] text-slate-400 font-medium">Due Feb 22</span>
            </div>
          </div>

          {/* CAPA card 3 */}
          <div className="bg-white border border-slate-200 rounded-lg p-3 space-y-2">
            <div className="flex items-start justify-between gap-1">
              <p className="text-xs font-semibold text-slate-800 leading-snug">Expired products on shelf</p>
              <span className="shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-700">Major</span>
            </div>
            <p className="text-[10px] text-slate-500">Audit #49 &middot; Store #12</p>
            <div className="flex items-center justify-between">
              <div className="w-6 h-6 rounded-full bg-teal-600 flex items-center justify-center text-white text-[9px] font-bold">CL</div>
              <span className="text-[10px] text-slate-400 font-medium">Due Feb 25</span>
            </div>
          </div>
        </div>

        {/* In Progress */}
        <div className="bg-indigo-50 rounded-xl p-3 space-y-2">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wide">In Progress</span>
            <span className="text-xs font-bold text-white bg-indigo-500 rounded-full px-2 py-0.5">2</span>
          </div>

          {/* CAPA card 4 */}
          <div className="bg-white border border-indigo-200 rounded-lg p-3 space-y-2">
            <div className="flex items-start justify-between gap-1">
              <p className="text-xs font-semibold text-slate-800 leading-snug">Broken refrigeration unit</p>
              <span className="shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded bg-red-100 text-red-700">Critical</span>
            </div>
            <p className="text-[10px] text-slate-500">Audit #44 &middot; Store #2</p>
            <div className="flex items-center justify-between">
              <div className="w-6 h-6 rounded-full bg-rose-600 flex items-center justify-center text-white text-[9px] font-bold">PG</div>
              <span className="text-[10px] text-slate-400 font-medium">Due Feb 19</span>
            </div>
          </div>

          {/* CAPA card 5 */}
          <div className="bg-white border border-indigo-200 rounded-lg p-3 space-y-2">
            <div className="flex items-start justify-between gap-1">
              <p className="text-xs font-semibold text-slate-800 leading-snug">Staff handwashing non-compliance</p>
              <span className="shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-700">Minor</span>
            </div>
            <p className="text-[10px] text-slate-500">Audit #50 &middot; Store #6</p>
            <div className="flex items-center justify-between">
              <div className="w-6 h-6 rounded-full bg-sky-600 flex items-center justify-center text-white text-[9px] font-bold">LT</div>
              <span className="text-[10px] text-slate-400 font-medium">Due Feb 28</span>
            </div>
          </div>
        </div>

        {/* Resolved */}
        <div className="bg-emerald-50 rounded-xl p-3 space-y-2">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">Resolved</span>
            <span className="text-xs font-bold text-white bg-emerald-500 rounded-full px-2 py-0.5">2</span>
          </div>

          {/* CAPA card 6 */}
          <div className="bg-white border border-emerald-200 rounded-lg p-3 space-y-2">
            <div className="flex items-start justify-between gap-1">
              <p className="text-xs font-semibold text-slate-800 leading-snug line-through decoration-slate-400">Wet floor — no signage</p>
              <span className="shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-700">Minor</span>
            </div>
            <p className="text-[10px] text-slate-500">Audit #43 &middot; Store #1</p>
            <div className="flex items-center justify-between">
              <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center text-white text-[9px] font-bold">SK</div>
              <span className="text-[10px] text-emerald-600 font-medium">Closed Feb 15</span>
            </div>
          </div>

          {/* CAPA card 7 */}
          <div className="bg-white border border-emerald-200 rounded-lg p-3 space-y-2">
            <div className="flex items-start justify-between gap-1">
              <p className="text-xs font-semibold text-slate-800 leading-snug line-through decoration-slate-400">Incorrect product placement</p>
              <span className="shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-700">Major</span>
            </div>
            <p className="text-[10px] text-slate-500">Audit #46 &middot; Store #5</p>
            <div className="flex items-center justify-between">
              <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white text-[9px] font-bold">NB</div>
              <span className="text-[10px] text-emerald-600 font-medium">Closed Feb 14</span>
            </div>
          </div>
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
    <div className="w-64 bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl shadow-slate-900/40">
      {/* Notch */}
      <div className="relative bg-indigo-600 rounded-[2rem] overflow-hidden">
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-indigo-800 rounded-full" />

        {/* Header */}
        <div className="px-4 pt-7 pb-3">
          <p className="text-white font-bold text-sm text-center">Corrective Actions</p>
        </div>

        {/* Detail card */}
        <div className="bg-slate-50 mx-2 mb-2 rounded-2xl p-4 space-y-3">
          {/* Title + severity */}
          <div className="flex items-start justify-between gap-2">
            <p className="text-slate-900 font-bold text-sm leading-snug">Blocked fire exit — Store #8</p>
            <span className="shrink-0 text-[10px] font-bold px-2 py-1 rounded-full bg-red-100 text-red-700">Critical</span>
          </div>

          {/* Description */}
          <p className="text-slate-600 text-xs leading-relaxed">
            Emergency exit in the stock room is blocked by two pallets of inventory. Immediate removal required per fire code compliance.
          </p>

          {/* Meta rows */}
          <div className="space-y-1.5 border-t border-slate-200 pt-2.5">
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <p className="text-xs text-slate-700"><span className="font-medium">Assigned to</span> Juan Rodriguez</p>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <p className="text-xs text-slate-700"><span className="font-medium">Due date</span> Feb 18, 2026</p>
            </div>
          </div>

          {/* Upload button */}
          <button className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold py-2.5 rounded-xl transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            Upload Fix Photo
          </button>
        </div>
      </div>
    </div>
  );
}

export default async function CorrectiveActionsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("FeaturesCorrectiveActionsPage");

  const capabilities = [
    {
      title: t("cap1Title"),
      desc: t("cap1Desc"),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={24} height={24}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
    {
      title: t("cap2Title"),
      desc: t("cap2Desc"),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={24} height={24}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
    {
      title: t("cap3Title"),
      desc: t("cap3Desc"),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={24} height={24}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 0zM10.5 7.5v6m3-3h-6" />
        </svg>
      ),
    },
    {
      title: t("cap4Title"),
      desc: t("cap4Desc"),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={24} height={24}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
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
