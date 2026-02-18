"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Inputs {
  stores: number;
  teamMembersPerStore: number;
  hoursPerStore: number;
  hourlyCost: number;
}

interface Results {
  weeklyHoursSaved: number;
  monthlySavings: number;
  annualSavings: number;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatNumber(n: number, locale: string): string {
  return Math.round(n).toLocaleString(locale);
}

function formatDollars(n: number, locale: string): string {
  return "$" + Math.round(n).toLocaleString(locale);
}

function calculate(inputs: Inputs): Results {
  const weeklyHoursSaved = inputs.stores * inputs.hoursPerStore * 0.6;
  const monthlySavings = weeklyHoursSaved * inputs.hourlyCost * 4.33;
  const annualSavings = monthlySavings * 12;
  return { weeklyHoursSaved, monthlySavings, annualSavings };
}

// ─── Sub-components ───────────────────────────────────────────────────────────

interface SliderFieldProps {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  prefix?: string;
  suffix?: string;
  locale: string;
  numberInputLabel: string;
  onChange: (v: number) => void;
}

function SliderField({
  id,
  label,
  value,
  min,
  max,
  prefix,
  suffix,
  locale,
  numberInputLabel,
  onChange,
}: SliderFieldProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label
          htmlFor={id}
          className="text-sm font-medium text-slate-700"
        >
          {label}
        </label>
        <span className="text-sm font-semibold text-indigo-600 tabular-nums">
          {prefix}
          {value.toLocaleString(locale)}
          {suffix}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="flex-1 h-2 accent-indigo-600 cursor-pointer"
          aria-label={label}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
        />
        <input
          type="number"
          min={min}
          max={max}
          value={value}
          onChange={(e) => {
            const clamped = Math.min(max, Math.max(min, Number(e.target.value)));
            onChange(clamped);
          }}
          className="w-20 px-2 py-1 text-sm text-slate-800 text-right border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          aria-label={`${label} ${numberInputLabel}`}
        />
      </div>

      <div className="flex justify-between mt-1">
        <span className="text-xs text-slate-400">
          {prefix}
          {min.toLocaleString(locale)}
          {suffix}
        </span>
        <span className="text-xs text-slate-400">
          {prefix}
          {max.toLocaleString(locale)}
          {suffix}
        </span>
      </div>
    </div>
  );
}

interface ResultCardProps {
  label: string;
  value: string;
  sublabel?: string;
  icon: React.ReactNode;
  accent: string;
}

function ResultCard({ label, value, sublabel, icon, accent }: ResultCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 flex flex-col gap-3">
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center ${accent}`}
        aria-hidden="true"
      >
        {icon}
      </div>
      <div>
        <p className="text-3xl font-bold text-slate-900 tabular-nums leading-tight">
          {value}
        </p>
        <p className="text-sm font-medium text-slate-600 mt-1">{label}</p>
        {sublabel && (
          <p className="text-xs text-slate-400 mt-0.5">{sublabel}</p>
        )}
      </div>
    </div>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const IconClock = (
  <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
  </svg>
);

const IconDollar = (
  <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
  </svg>
);

const IconTrending = (
  <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>
);

const IconRocket = (
  <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);

// ─── Main page ────────────────────────────────────────────────────────────────

export default function ROICalculatorPage() {
  const t = useTranslations("ROICalculatorPage");
  const locale = useLocale();

  const [inputs, setInputs] = useState<Inputs>({
    stores: 25,
    teamMembersPerStore: 15,
    hoursPerStore: 10,
    hourlyCost: 25,
  });

  const [view, setView] = useState<"form" | "results">("form");
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const results = calculate(inputs);

  function handleField(key: keyof Inputs) {
    return (v: number) => setInputs((prev) => ({ ...prev, [key]: v }));
  }

  async function handleEmailSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEmailStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/mvzbredr", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          stores: inputs.stores,
          teamMembersPerStore: inputs.teamMembersPerStore,
          hoursPerStore: inputs.hoursPerStore,
          hourlyCost: inputs.hourlyCost,
          weeklyHoursSaved: Math.round(results.weeklyHoursSaved),
          monthlySavings: Math.round(results.monthlySavings),
          annualSavings: Math.round(results.annualSavings),
        }),
      });
      if (res.ok) {
        setEmailStatus("success");
      } else {
        setEmailStatus("error");
      }
    } catch {
      setEmailStatus("error");
    }
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-50 pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Page header */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold uppercase tracking-wide mb-4">
              {t("badge")}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              {t("title")}
            </h1>
            <p className="mt-3 text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
              {t("subtitle")}
            </p>
          </div>

          {/* Input form */}
          {view === "form" && (
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-slate-800 mb-6">
                {t("formTitle")}
              </h2>

              <div className="space-y-8">
                <SliderField
                  id="stores"
                  label={t("labelStores")}
                  value={inputs.stores}
                  min={1}
                  max={500}
                  locale={locale}
                  numberInputLabel={t("numberInputSuffix")}
                  onChange={handleField("stores")}
                />
                <SliderField
                  id="team-members"
                  label={t("labelTeamMembers")}
                  value={inputs.teamMembersPerStore}
                  min={1}
                  max={100}
                  locale={locale}
                  numberInputLabel={t("numberInputSuffix")}
                  onChange={handleField("teamMembersPerStore")}
                />
                <SliderField
                  id="hours-per-store"
                  label={t("labelHours")}
                  value={inputs.hoursPerStore}
                  min={1}
                  max={40}
                  suffix={t("suffixHrs")}
                  locale={locale}
                  numberInputLabel={t("numberInputSuffix")}
                  onChange={handleField("hoursPerStore")}
                />
                <SliderField
                  id="hourly-cost"
                  label={t("labelHourlyCost")}
                  value={inputs.hourlyCost}
                  min={10}
                  max={100}
                  prefix="$"
                  locale={locale}
                  numberInputLabel={t("numberInputSuffix")}
                  onChange={handleField("hourlyCost")}
                />
              </div>

              {/* Live preview */}
              <div className="mt-8 p-4 rounded-xl bg-indigo-50 border border-indigo-100">
                <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wide mb-2">
                  {t("quickEstimateBadge")}
                </p>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {t("quickEstimateBefore")}{" "}
                  <span className="font-bold text-indigo-700">
                    {formatNumber(results.weeklyHoursSaved, locale)} {t("quickEstimateHoursPerWeek")}
                  </span>{" "}
                  {t("quickEstimateWorth")}{" "}
                  <span className="font-bold text-indigo-700">
                    {formatDollars(results.annualSavings, locale)} {t("quickEstimateAnnually")}
                  </span>
                  .
                </p>
              </div>

              <button
                type="button"
                onClick={() => setView("results")}
                className="mt-6 w-full py-3.5 rounded-xl bg-indigo-600 text-white font-semibold text-base hover:bg-indigo-700 active:bg-indigo-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                {t("calculateButton")}
              </button>
            </div>
          )}

          {/* Results display */}
          {view === "results" && (
            <div className="space-y-6">

              {/* Summary banner */}
              <div className="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 p-6 sm:p-8 text-white">
                <p className="text-sm font-semibold text-indigo-200 uppercase tracking-wide mb-1">
                  {t("resultsBadge")}
                </p>
                <p className="text-4xl sm:text-5xl font-bold tabular-nums leading-tight">
                  {formatDollars(results.annualSavings, locale)}
                </p>
                <p className="text-indigo-200 mt-2 text-sm">
                  {t("resultsSummaryBefore")} {inputs.stores.toLocaleString(locale)}{" "}
                  {inputs.stores === 1 ? t("storeSingular") : t("storePlural")} {t("resultsSummaryAfter")}
                </p>
              </div>

              {/* Result cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ResultCard
                  label={t("weeklyHoursSaved")}
                  value={formatNumber(results.weeklyHoursSaved, locale)}
                  sublabel={t("weeklyHoursSavedSub")}
                  accent="bg-indigo-50"
                  icon={IconClock}
                />
                <ResultCard
                  label={t("monthlyCostSavings")}
                  value={formatDollars(results.monthlySavings, locale)}
                  sublabel={t("monthlyCostSavingsSub")}
                  accent="bg-emerald-50"
                  icon={IconDollar}
                />
                <ResultCard
                  label={t("annualCostSavings")}
                  value={formatDollars(results.annualSavings, locale)}
                  sublabel={t("annualCostSavingsSub")}
                  accent="bg-violet-50"
                  icon={IconTrending}
                />
                <ResultCard
                  label={t("timeToROI")}
                  value={t("timeToROIValue")}
                  sublabel={t("timeToROISub")}
                  accent="bg-amber-50"
                  icon={IconRocket}
                />
              </div>

              <p className="text-xs text-slate-400 text-center px-4">
                {t("disclaimer")}
              </p>

              {/* Email capture */}
              <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 sm:p-8">
                <h2 className="text-lg font-semibold text-slate-800">
                  {t("emailTitle")}
                </h2>
                <p className="text-sm text-slate-500 mt-1 mb-5">
                  {t("emailSubtitle", { stores: inputs.stores })}
                </p>

                {emailStatus === "success" ? (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                    <svg className="w-5 h-5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm font-medium text-emerald-700">
                      {t("emailSuccess")}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3" noValidate>
                    <label htmlFor="report-email" className="sr-only">
                      {t("emailLabel")}
                    </label>
                    <input
                      id="report-email"
                      type="email"
                      required
                      placeholder={t("emailPlaceholder")}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      aria-label={t("emailAriaLabel")}
                    />
                    <button
                      type="submit"
                      disabled={emailStatus === "loading"}
                      className="shrink-0 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 active:bg-indigo-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      {emailStatus === "loading" ? t("emailSending") : t("emailButton")}
                    </button>
                  </form>
                )}

                {emailStatus === "error" && (
                  <p className="mt-2 text-xs text-red-500">
                    {t("emailErrorBefore")}{" "}
                    <a href="mailto:sales@plexoapp.com" className="underline hover:text-red-700">
                      sales@plexoapp.com
                    </a>
                    {t("emailErrorAfter")}
                  </p>
                )}
              </div>

              {/* Recalculate */}
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => { setView("form"); setEmailStatus("idle"); }}
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-800 underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
                >
                  {t("recalculate")}
                </button>
              </div>

              {/* CTA */}
              <div className="mt-4 rounded-xl bg-slate-900 p-6 sm:p-8 text-center">
                <h3 className="text-lg font-semibold text-white">
                  {t("ctaTitle")}
                </h3>
                <p className="text-slate-400 text-sm mt-1 mb-5">
                  {t("ctaSubtitle")}
                </p>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 active:bg-indigo-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  {t("ctaButton")}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
