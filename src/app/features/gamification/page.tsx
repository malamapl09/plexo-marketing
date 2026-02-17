import { Metadata } from "next";
import FeaturePageLayout from "../../components/FeaturePageLayout";

export const metadata: Metadata = {
  title: "Gamification & Leaderboards — Plexo",
  description:
    "Motivate store teams with points, badges, and leaderboards. Turn compliance into competition and make operational excellence something your teams actually want to achieve.",
};

function DashboardMockup() {
  const leaderboard = [
    {
      rank: 1,
      store: "Downtown Flagship",
      points: 2450,
      completion: 98,
      trend: "up",
    },
    {
      rank: 2,
      store: "Westside Mall",
      points: 2310,
      completion: 95,
      trend: "up",
    },
    {
      rank: 3,
      store: "Airport Terminal",
      points: 2180,
      completion: 92,
      trend: "down",
    },
    {
      rank: 4,
      store: "Midtown Branch",
      points: 1990,
      completion: 88,
      trend: "neutral",
    },
    {
      rank: 5,
      store: "Eastside Plaza",
      points: 1840,
      completion: 85,
      trend: "up",
    },
    {
      rank: 6,
      store: "Northgate Center",
      points: 1720,
      completion: 81,
      trend: "down",
    },
  ];

  const badges = [
    { name: "Perfect Week", color: "bg-amber-100", iconColor: "text-amber-600" },
    { name: "Speed Demon", color: "bg-indigo-100", iconColor: "text-indigo-600" },
    { name: "Audit Ace", color: "bg-emerald-100", iconColor: "text-emerald-600" },
    { name: "First Place", color: "bg-violet-100", iconColor: "text-violet-600" },
  ];

  const rankConfig: Record<
    number,
    { bg: string; text: string; medal: string }
  > = {
    1: { bg: "bg-amber-50 border border-amber-200", text: "text-amber-600", medal: "bg-amber-400" },
    2: { bg: "bg-slate-50", text: "text-slate-500", medal: "bg-slate-400" },
    3: { bg: "bg-slate-50", text: "text-slate-500", medal: "bg-amber-700" },
  };

  const TrendArrow = ({ trend }: { trend: string }) => {
    if (trend === "up") {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="w-4 h-4 text-emerald-500"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      );
    }
    if (trend === "down") {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="w-4 h-4 text-red-500"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      );
    }
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="w-4 h-4 text-slate-400"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
      </svg>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="text-sm font-semibold text-slate-800">
            Store Leaderboard
          </span>
          <span className="ml-1 text-xs text-slate-400 font-medium">Feb 2026</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-7 px-3 rounded-md bg-slate-100 flex items-center">
            <span className="text-xs font-medium text-slate-600">All Regions</span>
          </div>
          <div className="h-7 px-3 rounded-md bg-indigo-600 flex items-center">
            <span className="text-xs font-semibold text-white">Export</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-0">
        {/* Leaderboard table */}
        <div className="flex-1">
          {/* Table header */}
          <div className="grid grid-cols-12 gap-2 px-5 py-2.5 border-b border-slate-100 bg-slate-50/50">
            <div className="col-span-1">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                #
              </span>
            </div>
            <div className="col-span-5">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Store
              </span>
            </div>
            <div className="col-span-2 text-right">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Points
              </span>
            </div>
            <div className="col-span-3 text-right">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Completion
              </span>
            </div>
            <div className="col-span-1 text-right">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Trend
              </span>
            </div>
          </div>

          {/* Leaderboard rows */}
          <div className="divide-y divide-slate-50">
            {leaderboard.map((row) => {
              const rc = rankConfig[row.rank as keyof typeof rankConfig];
              const isFirst = row.rank === 1;
              return (
                <div
                  key={row.rank}
                  className={`grid grid-cols-12 gap-2 px-5 py-3 items-center transition-colors ${
                    isFirst ? "bg-amber-50/60" : "hover:bg-slate-50/70"
                  }`}
                >
                  {/* Rank */}
                  <div className="col-span-1 flex items-center">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                        rc ? rc.medal : "bg-slate-300"
                      }`}
                    >
                      {row.rank}
                    </span>
                  </div>

                  {/* Store name */}
                  <div className="col-span-5 flex items-center gap-2">
                    <span
                      className={`text-sm font-semibold truncate ${
                        isFirst ? "text-amber-800" : "text-slate-800"
                      }`}
                    >
                      {row.store}
                    </span>
                    {isFirst && (
                      <span className="shrink-0 text-xs font-bold px-1.5 py-0.5 rounded-full bg-amber-400 text-white">
                        Leader
                      </span>
                    )}
                  </div>

                  {/* Points */}
                  <div className="col-span-2 text-right">
                    <span
                      className={`text-sm font-bold ${
                        isFirst ? "text-amber-700" : "text-slate-700"
                      }`}
                    >
                      {row.points.toLocaleString()}
                    </span>
                  </div>

                  {/* Completion */}
                  <div className="col-span-3 flex items-center justify-end gap-2">
                    <div className="w-16 h-1.5 rounded-full bg-slate-200 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          row.completion >= 95
                            ? "bg-emerald-500"
                            : row.completion >= 88
                            ? "bg-amber-400"
                            : "bg-slate-400"
                        }`}
                        style={{ width: `${row.completion}%` }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-slate-600 w-8 text-right">
                      {row.completion}%
                    </span>
                  </div>

                  {/* Trend */}
                  <div className="col-span-1 flex justify-end">
                    <TrendArrow trend={row.trend} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Badges sidebar */}
        <div className="lg:w-48 border-t lg:border-t-0 lg:border-l border-slate-100 bg-slate-50/40 px-4 py-4">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
            Recent Badges
          </p>
          <div className="space-y-3">
            {badges.map((badge) => (
              <div key={badge.name} className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full ${badge.color} flex items-center justify-center shrink-0`}
                >
                  {badge.name === "Perfect Week" && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      className={`w-5 h-5 ${badge.iconColor}`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  )}
                  {badge.name === "Speed Demon" && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      className={`w-5 h-5 ${badge.iconColor}`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                      />
                    </svg>
                  )}
                  {badge.name === "Audit Ace" && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      className={`w-5 h-5 ${badge.iconColor}`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                  {badge.name === "First Place" && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      className={`w-5 h-5 ${badge.iconColor}`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                      />
                    </svg>
                  )}
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-700 leading-tight">
                    {badge.name}
                  </p>
                  <p className="text-xs text-slate-400">Downtown</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer summary */}
      <div className="flex items-center justify-between px-5 py-3 border-t border-slate-100 bg-slate-50/50">
        <span className="text-xs text-slate-400">
          6 stores &bull; 12,490 total points &bull; Updated now
        </span>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs text-emerald-600 font-medium">Live</span>
        </div>
      </div>
    </div>
  );
}

function MobileMockup() {
  const topStores = [
    { rank: 1, name: "Downtown", points: 2450, medal: "bg-amber-400" },
    { rank: 2, name: "Westside", points: 2310, medal: "bg-slate-400" },
    { rank: 3, name: "Airport", points: 2180, medal: "bg-amber-700" },
  ];

  const earnedBadges = [
    { color: "bg-amber-100", iconColor: "text-amber-600" },
    { color: "bg-indigo-100", iconColor: "text-indigo-600" },
    { color: "bg-emerald-100", iconColor: "text-emerald-600" },
  ];

  return (
    <div className="w-64 bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl shadow-slate-900/50">
      {/* Phone notch */}
      <div className="flex justify-center mb-2">
        <div className="w-20 h-6 bg-slate-800 rounded-full flex items-center justify-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
          <div className="w-8 h-1.5 rounded-full bg-slate-700" />
        </div>
      </div>

      {/* Phone screen */}
      <div className="bg-white rounded-3xl overflow-hidden min-h-[440px]">
        {/* App header */}
        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 px-4 pt-5 pb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
            <span className="text-sm font-bold text-white">Leaderboard</span>
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                />
              </svg>
            </div>
          </div>
          {/* Score pill */}
          <div className="bg-white/15 rounded-2xl px-4 py-3 text-center">
            <p className="text-xs text-white/70 font-medium">Your Store Score</p>
            <p className="text-2xl font-extrabold text-white mt-0.5">2,450</p>
            <p className="text-xs text-amber-300 font-semibold mt-0.5">
              #1 in Region
            </p>
          </div>
        </div>

        {/* Top 3 */}
        <div className="px-3 pt-3 -mt-2 space-y-2">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide px-1">
            Top Stores
          </p>
          {topStores.map((store) => (
            <div
              key={store.rank}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-2xl border ${
                store.rank === 1
                  ? "bg-amber-50 border-amber-200"
                  : "bg-white border-slate-100"
              } shadow-sm`}
            >
              <span
                className={`w-6 h-6 rounded-full ${store.medal} flex items-center justify-center text-xs font-bold text-white shrink-0`}
              >
                {store.rank}
              </span>
              <span
                className={`flex-1 text-xs font-semibold ${
                  store.rank === 1 ? "text-amber-800" : "text-slate-700"
                }`}
              >
                {store.name}
              </span>
              <span
                className={`text-xs font-bold ${
                  store.rank === 1 ? "text-amber-600" : "text-slate-500"
                }`}
              >
                {store.points.toLocaleString()} pts
              </span>
            </div>
          ))}
        </div>

        {/* Your Badges */}
        <div className="px-3 pt-4 pb-2">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide px-1 mb-2">
            Your Badges
          </p>
          <div className="flex gap-2 px-1">
            {earnedBadges.map((badge, idx) => (
              <div
                key={idx}
                className={`w-10 h-10 rounded-full ${badge.color} flex items-center justify-center`}
              >
                {idx === 0 && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className={`w-5 h-5 ${badge.iconColor}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                )}
                {idx === 1 && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className={`w-5 h-5 ${badge.iconColor}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                )}
                {idx === 2 && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className={`w-5 h-5 ${badge.iconColor}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
              </div>
            ))}
            <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center">
              <span className="text-slate-400 text-lg font-bold leading-none">+</span>
            </div>
          </div>
        </div>

        {/* Motivational bar */}
        <div className="mx-3 mb-3 mt-2 rounded-2xl bg-indigo-50 border border-indigo-100 px-3 py-2.5">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-semibold text-indigo-700">
              125 points to next rank!
            </span>
            <span className="text-xs text-indigo-500 font-medium">Elite</span>
          </div>
          <div className="h-2 bg-indigo-100 rounded-full overflow-hidden">
            <div className="h-full w-4/5 bg-indigo-500 rounded-full" />
          </div>
        </div>
      </div>

      {/* Home indicator */}
      <div className="flex justify-center mt-2">
        <div className="w-24 h-1 bg-slate-600 rounded-full" />
      </div>
    </div>
  );
}

const capabilities = [
  {
    title: "Points system",
    desc: "Award points for task completion, audit scores, and training milestones. Every action your team takes contributes to a running score.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Store leaderboards",
    desc: "Rank stores against each other to drive healthy competition across regions. Real-time standings keep teams motivated week over week.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
  },
  {
    title: "Achievement badges",
    desc: "Unlock badges for streaks, perfect scores, and special accomplishments. Recognizable icons that teams wear with pride on their profiles.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
        />
      </svg>
    ),
  },
  {
    title: "Custom rewards",
    desc: "Define your own reward tiers and recognition programs for top performers. Tie point thresholds to real incentives that matter to your teams.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
        />
      </svg>
    ),
  },
];

export default function GamificationPage() {
  return (
    <FeaturePageLayout
      badge="Gamification &amp; Leaderboards"
      title="Turn compliance into competition."
      subtitle="Motivate store teams with points, badges, and leaderboards. Make operational excellence something your teams actually want to achieve."
      capabilities={capabilities}
      mockup={<DashboardMockup />}
      mobileMockup={<MobileMockup />}
    />
  );
}
