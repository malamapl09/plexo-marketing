export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 via-violet-500/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Retail Operations,{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">
              Perfected.
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            The all-in-one platform to manage tasks, audits, training, and
            campaigns across every store.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/demo"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-600/25 transition-all hover:shadow-xl hover:shadow-indigo-600/30"
            >
              Book a Demo
            </a>
            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-slate-700 bg-white border-2 border-slate-200 rounded-xl hover:border-indigo-300 hover:text-indigo-600 transition-all"
            >
              See What&apos;s Included
            </a>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="mt-16 sm:mt-20 relative">
          <div className="relative mx-auto max-w-5xl">
            {/* Laptop frame */}
            <div className="bg-slate-800 rounded-t-2xl p-2 pt-6 relative">
              {/* Browser dots */}
              <div className="absolute top-2 left-4 flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
              </div>
              {/* Dashboard content */}
              <div className="bg-slate-50 rounded-lg p-6 sm:p-8">
                <div className="grid grid-cols-4 gap-4 mb-6">
                  {[
                    { label: "Active Tasks", value: "247", color: "bg-indigo-600" },
                    { label: "Compliance", value: "94%", color: "bg-emerald-500" },
                    { label: "Open Audits", value: "12", color: "bg-violet-500" },
                    { label: "Campaigns", value: "8", color: "bg-amber-500" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                      <div className={`w-8 h-1.5 rounded ${stat.color} mb-2`} />
                      <p className="text-lg sm:text-2xl font-bold text-slate-800">{stat.value}</p>
                      <p className="text-xs text-slate-500 hidden sm:block">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 bg-white rounded-lg p-4 shadow-sm h-32 sm:h-40">
                    <div className="w-20 h-2 bg-slate-200 rounded mb-3" />
                    <div className="flex gap-2 items-end h-20 sm:h-28">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-indigo-600/20 rounded-t"
                          style={{ height: `${h}%` }}
                        >
                          <div
                            className="w-full bg-indigo-600 rounded-t"
                            style={{ height: `${h * 0.7}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-16 h-2 bg-slate-200 rounded mb-3" />
                    <div className="space-y-2">
                      {[85, 92, 78, 96].map((val, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="flex-1 bg-slate-100 rounded-full h-2">
                            <div
                              className="bg-emerald-500 h-2 rounded-full"
                              style={{ width: `${val}%` }}
                            />
                          </div>
                          <span className="text-xs text-slate-500 w-8">{val}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Laptop base */}
            <div className="bg-slate-700 h-4 rounded-b-lg mx-16" />
            <div className="bg-slate-600 h-2 rounded-b-xl mx-24" />
          </div>

          {/* Phone mockup floating */}
          <div className="absolute -right-4 sm:right-8 bottom-4 sm:bottom-8 w-28 sm:w-40">
            <div className="bg-slate-800 rounded-2xl p-1.5 shadow-2xl">
              <div className="bg-white rounded-xl p-2 sm:p-3">
                <div className="w-8 h-1 bg-slate-300 rounded mx-auto mb-2" />
                <div className="space-y-1.5">
                  {["Task completed", "Audit due", "New campaign"].map((t) => (
                    <div key={t} className="bg-slate-50 rounded p-1.5">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full inline-block mr-1" />
                      <span className="text-[8px] sm:text-[10px] text-slate-600">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
