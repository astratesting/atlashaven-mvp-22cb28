import Link from "next/link";
import type { ReactNode } from "react";

const navLinks = [
  { href: "/dashboard", label: "Overview", exact: true },
  { href: "/dashboard/crm", label: "CRM" },
  { href: "/dashboard/proposals", label: "Proposals" },
  { href: "/dashboard/intake", label: "Intake" },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="hidden md:flex md:flex-col w-64 bg-surface border-r border-border">
        <div className="p-6">
          <Link href="/dashboard" className="font-heading text-xl text-primary">
            ATLASHAVEN
          </Link>
          <p className="text-text_secondary text-xs mt-1">Dashboard</p>
        </div>
        <nav className="flex-1 px-3 space-y-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block px-4 py-2.5 rounded-lg text-sm text-text_secondary hover:bg-background hover:text-text_primary transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-border">
          <Link
            href="/auth/login"
            className="block text-center text-text_secondary text-sm hover:text-primary transition-colors"
          >
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Mobile nav */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-surface border-b border-border z-50 px-4 py-3">
        <span className="font-heading text-lg text-primary">ATLASHAVEN</span>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-border z-50">
        <div className="flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="flex-1 text-center py-3 text-xs text-text_secondary hover:text-primary transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 pt-14 pb-16 md:pt-0 md:pb-0">{children}</main>
    </div>
  );
}