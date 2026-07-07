interface Proposal {
  id: number;
  client: string;
  title: string;
  value: string;
  status: "Draft" | "Sent" | "Accepted" | "Rejected";
  sentDate: string;
}

const proposals: Proposal[] = [
  { id: 1, client: "FinFlow", title: "Phase 2: Analytics Dashboard", value: "$45,000", status: "Accepted", sentDate: "2026-06-20" },
  { id: 2, client: "MediTrack", title: "HIPAA Compliance Overhaul", value: "$80,000", status: "Sent", sentDate: "2026-07-01" },
  { id: 3, client: "EduNest", title: "AI Tutoring Module", value: "$120,000", status: "Draft", sentDate: "—" },
  { id: 4, client: "LogiCore", title: "Carrier API Integration", value: "$35,000", status: "Accepted", sentDate: "2026-05-15" },
  { id: 5, client: "HealthBridge", title: "Patient Portal MVP", value: "$60,000", status: "Sent", sentDate: "2026-07-03" },
  { id: 6, client: "CloudStack", title: "Infrastructure Audit", value: "$25,000", status: "Rejected", sentDate: "2026-06-10" },
];

const statusColors: Record<Proposal["status"], string> = {
  Draft: "bg-text_secondary/10 text-text_secondary border-text_secondary/30",
  Sent: "bg-primary/10 text-primary border-primary/30",
  Accepted: "bg-green-500/10 text-green-400 border-green-500/30",
  Rejected: "bg-red-500/10 text-red-400 border-red-500/30",
};

export default function ProposalsPage() {
  const totalValue = proposals
    .filter((p) => p.status !== "Rejected" && p.status !== "Draft")
    .reduce((sum, p) => sum + parseInt(p.value.replace(/[^0-9]/g, "")), 0);

  return (
    <div className="p-6 md:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl text-text_primary">Proposals</h1>
          <p className="text-text_secondary mt-1">Track and manage client proposals.</p>
        </div>
        <button className="bg-primary text-background px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
          + New Proposal
        </button>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        <div className="bg-surface border border-border rounded-xl p-5">
          <p className="text-text_secondary text-sm">Total Pipeline</p>
          <p className="font-heading text-3xl text-text_primary mt-1">${totalValue.toLocaleString()}</p>
        </div>
        <div className="bg-surface border border-green-500/30 rounded-xl p-5">
          <p className="text-text_secondary text-sm">Accepted</p>
          <p className="font-heading text-3xl text-green-400 mt-1">
            {proposals.filter((p) => p.status === "Accepted").length}
          </p>
        </div>
        <div className="bg-surface border border-primary/30 rounded-xl p-5">
          <p className="text-text_secondary text-sm">Outstanding</p>
          <p className="font-heading text-3xl text-primary mt-1">
            {proposals.filter((p) => p.status === "Sent").length}
          </p>
        </div>
      </div>

      {/* Proposals list */}
      <div className="mt-8 space-y-4">
        {proposals.map((p) => (
          <div
            key={p.id}
            className="bg-surface border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h3 className="font-heading text-lg text-text_primary">{p.title}</h3>
                <p className="text-text_secondary text-sm mt-0.5">
                  {p.client} · Sent: {p.sentDate}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-heading text-xl text-text_primary">{p.value}</span>
                <span
                  className={`inline-block text-xs px-2.5 py-1 rounded-full border ${statusColors[p.status]}`}
                >
                  {p.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}