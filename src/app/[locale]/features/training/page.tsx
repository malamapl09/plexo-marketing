import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getAlternates } from "@/lib/seo";
import FeaturePageLayout from "../../../components/FeaturePageLayout";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "FeaturesTrainingPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: getAlternates("/features/training", locale),
  };
}

const courses = [
  {
    title: "Food Safety Essentials",
    modules: 8,
    completion: 92,
    color: "bg-emerald-400",
  },
  {
    title: "Customer Service Excellence",
    modules: 6,
    completion: 74,
    color: "bg-indigo-400",
  },
  {
    title: "Loss Prevention Basics",
    modules: 5,
    completion: 58,
    color: "bg-amber-400",
  },
  {
    title: "New Employee Onboarding",
    modules: 10,
    completion: 100,
    color: "bg-rose-400",
  },
];

function DashboardMockup() {
  return (
    <div className="space-y-5">
      {/* Top stats row */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <p className="text-xs font-medium text-slate-500 mb-1">Active Courses</p>
          <p className="text-2xl font-extrabold text-slate-900">12</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <p className="text-xs font-medium text-slate-500 mb-1">Completion Rate</p>
          <p className="text-2xl font-extrabold text-indigo-600">89%</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <p className="text-xs font-medium text-slate-500 mb-1">Certs Expiring Soon</p>
          <p className="text-2xl font-extrabold text-amber-500">5</p>
        </div>
      </div>

      {/* Course list */}
      <div className="space-y-3">
        {courses.map((course) => (
          <div
            key={course.title}
            className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex items-center gap-4"
          >
            {/* Thumbnail placeholder */}
            <div
              className={`${course.color} w-14 h-14 rounded-lg flex-shrink-0 flex items-center justify-center`}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>

            {/* Course info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-semibold text-slate-900 truncate">
                  {course.title}
                </p>
                <span className="text-xs text-slate-500 ml-2 flex-shrink-0">
                  {course.modules} modules
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-slate-100 rounded-full h-1.5">
                  <div
                    className="bg-indigo-500 h-1.5 rounded-full"
                    style={{ width: `${course.completion}%` }}
                  />
                </div>
                <span className="text-xs font-medium text-slate-600 w-8 text-right">
                  {course.completion}%
                </span>
              </div>
            </div>

            {/* Assign button */}
            <button className="flex-shrink-0 text-xs font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition-colors">
              Assign
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileMockup() {
  return (
    <div className="w-64 bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl">
      {/* Status bar area */}
      <div className="bg-slate-800 rounded-t-[2rem] px-4 pt-3 pb-0">
        <div className="flex justify-between items-center mb-3">
          <span className="text-slate-400 text-[10px]">9:41</span>
          <div className="flex gap-1">
            <div className="w-3 h-1.5 bg-slate-400 rounded-sm" />
            <div className="w-1 h-1.5 bg-slate-400 rounded-sm" />
          </div>
        </div>

        {/* Header */}
        <div className="bg-indigo-600 -mx-4 px-4 py-3 mb-0">
          <p className="text-white font-bold text-base">My Training</p>
          <p className="text-indigo-200 text-xs mt-0.5">3 courses in progress</p>
        </div>
      </div>

      {/* Course cards */}
      <div className="bg-slate-100 rounded-b-[2rem] px-3 pt-3 pb-5 space-y-2.5">
        {/* Course 1 - in progress */}
        <div className="bg-white rounded-xl p-3 shadow-sm">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-400 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <p className="text-slate-900 font-semibold text-[11px] leading-tight">Food Safety</p>
                <p className="text-slate-500 text-[10px]">Module 6 of 8</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-100 rounded-full h-1.5 mb-2">
            <div className="bg-emerald-500 h-1.5 rounded-full w-3/4" />
          </div>
          <button className="w-full text-[10px] font-semibold text-white bg-indigo-600 rounded-lg py-1.5">
            Continue
          </button>
        </div>

        {/* Course 2 - in progress */}
        <div className="bg-white rounded-xl p-3 shadow-sm">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-400 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-900 font-semibold text-[11px] leading-tight">Customer Service</p>
                <p className="text-slate-500 text-[10px]">Module 4 of 6</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-100 rounded-full h-1.5 mb-2">
            <div className="bg-indigo-500 h-1.5 rounded-full w-2/3" />
          </div>
          <button className="w-full text-[10px] font-semibold text-white bg-indigo-600 rounded-lg py-1.5">
            Continue
          </button>
        </div>

        {/* Course 3 - completed */}
        <div className="bg-white rounded-xl p-3 shadow-sm">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-rose-400 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-900 font-semibold text-[11px] leading-tight">Onboarding</p>
                <p className="text-slate-500 text-[10px]">10 of 10 modules</p>
              </div>
            </div>
            <span className="text-[9px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded-full flex-shrink-0">
              Completed
            </span>
          </div>
          <div className="bg-slate-100 rounded-full h-1.5 mb-2">
            <div className="bg-emerald-500 h-1.5 rounded-full w-full" />
          </div>
          <button className="w-full text-[10px] font-semibold text-emerald-700 bg-emerald-50 rounded-lg py-1.5">
            Review
          </button>
        </div>
      </div>
    </div>
  );
}

export default async function TrainingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("FeaturesTrainingPage");

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
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
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
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
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
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
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
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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
