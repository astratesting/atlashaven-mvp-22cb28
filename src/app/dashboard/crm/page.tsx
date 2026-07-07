"use client";

import { useState } from "react";

interface Client {
  id: number;
  name: string;
  company: string;
  email: string;
  status: "Active" | "Lead" | "Inactive";
  lastContact: string;
}

const initialClients: Client[] = [
  { id: 1, name: "Sarah Chen", company: "FinFlow", email: "sarah@finflow.io", status: "Active", lastContact: "2026-07-05" },
  { id: 2, name: "Marcus Webb", company: "MediTrack", email: "marcus@meditrack.com", status: "Active", lastContact: "2026-07-06" },
  { id: 3, name: "Elena Rossi", company: "EduNest", email: "elena@edunest.com", status: "Lead", lastContact: "2026-07-04" },
  { id: 4, name: "David Park", company: "LogiCore", email: "david@logicore.io", status: "Active", lastContact: "2026-07-01" },
  { id: 5, name: "Aisha Patel", company: "HealthBridge", email: "aisha@healthbridge.com", status: "Lead", lastContact: "2026-06-30" },
  { id: 6, name: "Tom Baker", company: "CloudStack", email: "tom@cloudstack.io", status: "Inactive", lastContact: "2026-06-15" },
];

const statusColors: Record<Client["status"], string> = {
  Active: "bg-green-500/10 text-green-400 border-green-500/30",
  Lead: "bg-accent/10 text-accent border-accent/30",
  Inactive: "bg-text_secondary/10 text-text_secondary border-text_secondary/30",
};

export default function CRMPage() {
  const [clients] = useState<Client[]>(initialClients);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");

  const filtered = clients.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.company.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All" || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6 md:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl text-text_primary">CRM</h1>
          <p className="text-text_secondary mt-1">Manage your client relationships.</p>
        </div>
        <button className="bg-primary text-background px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
          + Add Client
        </button>
      </div>

      {/* Filters */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Search clients..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-surface border border-border rounded-lg px-4 py-2 text-text_primary placeholder:text-text_secondary focus:outline-none focus:border-primary transition-colors"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-surface border border-border rounded-lg px-4 py-2 text-text_primary focus:outline-none focus:border-primary transition-colors"
        >
          <option value="All">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Lead">Lead</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      {/* Table */}
      <div className="mt-6 bg-surface border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-6 py-3 text-xs font-semibold text-text_secondary uppercase tracking-wider">
                  Name
                </th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-text_secondary uppercase tracking-wider">
                  Company
                </th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-text_secondary uppercase tracking-wider">
                  Email
                </th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-text_secondary uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-text_secondary uppercase tracking-wider">
                  Last Contact
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => (
                <tr key={c.id} className="border-b border-border last:border-0 hover:bg-background/50 transition-colors">
                  <td className="px-6 py-4 text-text_primary text-sm font-medium">{c.name}</td>
                  <td className="px-6 py-4 text-text_secondary text-sm">{c.company}</td>
                  <td className="px-6 py-4 text-text_secondary text-sm">{c.email}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-block text-xs px-2.5 py-1 rounded-full border ${statusColors[c.status]}`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-text_secondary text-sm">{c.lastContact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-12 text-text_secondary text-sm">No clients found.</div>
        )}
      </div>
    </div>
  );
}