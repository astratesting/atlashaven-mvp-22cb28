export default function DashboardPage() {
  const stats = [
    { label: "Active Projects", value: "12" },
    { label: "Clients", value: "47" },
    { label: "Proposals Sent", value: "89" },
    { label: "Revenue (YTD)", value: "$1.2M" },
  ];

  const recentActivity = [
    { action: "New client onboarding — FinFlow", time: "2 hours ago" },
    { action: "Proposal accepted — MediTrack Phase 2", time: "5 hours ago" },
    { action: "Intake form submitted — EduNest", time: "1 day ago" },
    { action: "Payment received — LogiCore Q2", time: "2 days ago" },
    { action: "Contract signed — HealthBridge", time: "3 days ago" },
  ];

  return (
    <div className="p-6 md:p-8">
      <h1 className="font-heading text-3xl text-text_primary">Dashboard</h1>
      <p className="text-text_secondary mt-1">Welcome back! Here&apos;s what&apos;s happening.</p>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {stats.map((s) => (
          <div key={s.label} className="bg-surface border border-border rounded-xl p-6">
            <p className="text-text_secondary text-sm">{s.label}</p>
            <p className="font-heading text-3xl text-text_primary mt-1">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="mt-8 bg-surface border border-border rounded-xl p-6">
        <h2 className="font-heading text-xl text-text_primary mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {recentActivity.map((a) => (
            <div
              key={a.action}
              className="flex items-center justify-between py-2 border-b border-border last:border-0"
            >
              <span className="text-text_secondary text-sm">{a.action}</span>
              <span className="text-text_secondary text-xs">{a.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}