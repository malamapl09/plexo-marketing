import { Metadata } from "next";
import FeaturePageLayout from "../../components/FeaturePageLayout";

export const metadata: Metadata = {
  title: "Tasks & Assignments — Plexo",
  description:
    "Create, assign, and track tasks across every store with deadlines, priorities, and real-time progress tracking.",
};

function DashboardMockup() {
  const tasks = [
    {
      name: "Restock seasonal display — Aisle 4",
      store: "Downtown Branch",
      assignee: "Maria R.",
      due: "Feb 17",
      status: "Completed",
      priority: "P2",
    },
    {
      name: "Update pricing signage — Electronics",
      store: "Mall Location",
      assignee: "James T.",
      due: "Feb 17",
      status: "Pending",
      priority: "P1",
    },
    {
      name: "Deep clean refrigeration units",
      store: "Airport Store",
      assignee: "Sofia L.",
      due: "Feb 16",
      status: "Overdue",
      priority: "P1",
    },
    {
      name: "Train new hire on POS system",
      store: "Westside Branch",
      assignee: "Carlos M.",
      due: "Feb 19",
      status: "Pending",
      priority: "P2",
    },
    {
      name: "Submit weekly inventory report",
      store: "All Stores",
      assignee: "Ana P.",
      due: "Feb 20",
      status: "Completed",
      priority: "P3",
    },
  ];

  const statusConfig: Record<
    string,
    { bg: string; text: string; dot: string }
  > = {
    Completed: {
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      dot: "bg-emerald-500",
    },
    Pending: {
      bg: "bg-amber-50",
      text: "text-amber-700",
      dot: "bg-amber-400",
    },
    Overdue: { bg: "bg-red-50", text: "text-red-700", dot: "bg-red-500" },
  };

  const priorityConfig: Record<string, { bg: string; text: string }> = {
    P1: { bg: "bg-red-100", text: "text-red-700" },
    P2: { bg: "bg-amber-100", text: "text-amber-700" },
    P3: { bg: "bg-slate-100", text: "text-slate-600" },
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-indigo-500" />
          <span className="text-sm font-semibold text-slate-800">
            Task Management
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-7 px-3 rounded-md bg-indigo-600 flex items-center">
            <span className="text-xs font-semibold text-white">+ New Task</span>
          </div>
          <div className="h-7 px-3 rounded-md bg-slate-100 flex items-center">
            <span className="text-xs font-medium text-slate-600">Filter</span>
          </div>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-1 px-5 py-3 border-b border-slate-100 bg-slate-50">
        {["All Tasks", "Pending", "Overdue", "Completed"].map((tab, i) => (
          <button
            key={tab}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              i === 0
                ? "bg-white text-indigo-600 shadow-sm border border-slate-200"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            {tab}
            {i === 0 && (
              <span className="ml-1.5 bg-indigo-100 text-indigo-600 text-xs font-semibold px-1.5 py-0.5 rounded-full">
                5
              </span>
            )}
            {i === 1 && (
              <span className="ml-1.5 bg-amber-100 text-amber-700 text-xs font-semibold px-1.5 py-0.5 rounded-full">
                2
              </span>
            )}
            {i === 2 && (
              <span className="ml-1.5 bg-red-100 text-red-700 text-xs font-semibold px-1.5 py-0.5 rounded-full">
                1
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Table header */}
      <div className="grid grid-cols-12 gap-2 px-5 py-2.5 border-b border-slate-100 bg-slate-50/50">
        <div className="col-span-1 flex items-center">
          <div className="w-4 h-4 rounded border border-slate-300 bg-white" />
        </div>
        <div className="col-span-4">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
            Task
          </span>
        </div>
        <div className="col-span-2">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
            Store
          </span>
        </div>
        <div className="col-span-2">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
            Assignee
          </span>
        </div>
        <div className="col-span-1">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
            Due
          </span>
        </div>
        <div className="col-span-2">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
            Status
          </span>
        </div>
      </div>

      {/* Task rows */}
      <div className="divide-y divide-slate-50">
        {tasks.map((task, idx) => {
          const sc = statusConfig[task.status];
          const pc = priorityConfig[task.priority];
          return (
            <div
              key={idx}
              className="grid grid-cols-12 gap-2 px-5 py-3 items-center hover:bg-slate-50/70 transition-colors"
            >
              {/* Checkbox */}
              <div className="col-span-1 flex items-center">
                <div
                  className={`w-4 h-4 rounded border flex items-center justify-center ${
                    task.status === "Completed"
                      ? "bg-emerald-500 border-emerald-500"
                      : "border-slate-300 bg-white"
                  }`}
                >
                  {task.status === "Completed" && (
                    <svg
                      className="w-2.5 h-2.5 text-white"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </div>

              {/* Task name + priority */}
              <div className="col-span-4 flex items-center gap-2 min-w-0">
                <span
                  className={`shrink-0 text-xs font-bold px-1.5 py-0.5 rounded ${pc.bg} ${pc.text}`}
                >
                  {task.priority}
                </span>
                <span
                  className={`text-sm font-medium truncate ${
                    task.status === "Completed"
                      ? "text-slate-400 line-through"
                      : "text-slate-800"
                  }`}
                >
                  {task.name}
                </span>
              </div>

              {/* Store */}
              <div className="col-span-2">
                <span className="text-xs text-slate-500 truncate block">
                  {task.store}
                </span>
              </div>

              {/* Assignee */}
              <div className="col-span-2 flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                  <span className="text-xs font-semibold text-indigo-600">
                    {task.assignee.charAt(0)}
                  </span>
                </div>
                <span className="text-xs text-slate-600 truncate">
                  {task.assignee}
                </span>
              </div>

              {/* Due date */}
              <div className="col-span-1">
                <span
                  className={`text-xs font-medium ${
                    task.status === "Overdue"
                      ? "text-red-600"
                      : "text-slate-500"
                  }`}
                >
                  {task.due}
                </span>
              </div>

              {/* Status badge */}
              <div className="col-span-2">
                <span
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${sc.bg} ${sc.text}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
                  {task.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer summary */}
      <div className="flex items-center justify-between px-5 py-3 border-t border-slate-100 bg-slate-50/50">
        <span className="text-xs text-slate-400">
          5 tasks &bull; 2 completed &bull; 1 overdue
        </span>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <div className="h-1.5 w-16 rounded-full bg-slate-200 overflow-hidden">
              <div className="h-full w-2/5 rounded-full bg-emerald-500" />
            </div>
            <span className="text-xs text-slate-500">40%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileMockup() {
  const mobileTasks = [
    { name: "Restock seasonal display", done: true, priority: "P2" },
    { name: "Update pricing signage", done: false, priority: "P1", overdue: false },
    { name: "Deep clean refrigeration", done: false, priority: "P1", overdue: true },
    { name: "Submit inventory report", done: false, priority: "P3", overdue: false },
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
            <span className="text-sm font-bold text-white">My Tasks</span>
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
                  d="M12 5v.01M12 12v.01M12 19v.01"
                />
              </svg>
            </div>
          </div>
          {/* Progress pill */}
          <div className="bg-white/15 rounded-2xl px-4 py-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-white/80 font-medium">
                Today&apos;s progress
              </span>
              <span className="text-xs font-bold text-white">1 / 4</span>
            </div>
            <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full w-1/4 bg-white rounded-full" />
            </div>
          </div>
        </div>

        {/* Task list */}
        <div className="px-3 py-3 -mt-2 space-y-2">
          {mobileTasks.map((task, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-3 p-3 rounded-2xl border ${
                task.done
                  ? "bg-emerald-50 border-emerald-100"
                  : task.overdue
                  ? "bg-red-50 border-red-100"
                  : "bg-white border-slate-100"
              } shadow-sm`}
            >
              {/* Checkbox */}
              <div
                className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  task.done
                    ? "bg-emerald-500 border-emerald-500"
                    : task.overdue
                    ? "border-red-300"
                    : "border-slate-300"
                }`}
              >
                {task.done && (
                  <svg
                    className="w-3 h-3 text-white"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>

              {/* Task info */}
              <div className="flex-1 min-w-0">
                <p
                  className={`text-xs font-semibold leading-snug ${
                    task.done
                      ? "text-emerald-700 line-through"
                      : task.overdue
                      ? "text-red-700"
                      : "text-slate-800"
                  }`}
                >
                  {task.name}
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span
                    className={`text-xs font-bold px-1.5 py-0.5 rounded ${
                      task.priority === "P1"
                        ? "bg-red-100 text-red-600"
                        : task.priority === "P2"
                        ? "bg-amber-100 text-amber-600"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {task.priority}
                  </span>
                  {task.overdue && (
                    <span className="text-xs text-red-500 font-medium">
                      Overdue
                    </span>
                  )}
                  {task.done && (
                    <span className="text-xs text-emerald-600 font-medium">
                      Done
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom action */}
        <div className="px-3 pb-4">
          <button className="w-full py-3 rounded-2xl bg-indigo-600 flex items-center justify-center gap-2">
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span className="text-sm font-semibold text-white">Add Task</span>
          </button>
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
    title: "Priority-based assignment",
    desc: "Assign tasks by urgency with P1, P2, and P3 priority levels so your teams always know what to tackle first.",
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
    title: "Recurring schedules",
    desc: "Set daily, weekly, or monthly task recurrence automatically so routine operations never fall through the cracks.",
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
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
    ),
  },
  {
    title: "Real-time tracking",
    desc: "See completion status across all stores instantly. Get notified when tasks are finished, skipped, or running late.",
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
          d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
        />
      </svg>
    ),
  },
  {
    title: "Photo verification",
    desc: "Require photo proof before marking tasks complete. Build an auditable record of work done across every location.",
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
          d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
        />
      </svg>
    ),
  },
];

export default function TasksPage() {
  return (
    <FeaturePageLayout
      badge="Tasks & Assignments"
      title="Assign, track, and complete &mdash; across every store."
      subtitle="Create tasks with deadlines and priorities, assign them to specific stores or teams, and track completion in real time. No more chasing updates."
      capabilities={capabilities}
      mockup={<DashboardMockup />}
      mobileMockup={<MobileMockup />}
    />
  );
}
