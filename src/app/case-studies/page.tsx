import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const cases = [
  {
    title: "FinFlow — Financial Dashboard SaaS",
    industry: "FinTech",
    summary:
      "Built a real-time financial analytics platform with Supabase, Next.js, and D3.js. Launched in 10 weeks.",
    results: ["10K+ users in 3 months", "99.9% uptime", "$2M seed round led by Accel"],
    color: "border-blue-500",
  },
  {
    title: "MediTrack — Healthcare CRM",
    industry: "HealthTech",
    summary:
      "Designed and developed a HIPAA-compliant patient management system for a 200-physician network.",
    results: ["200+ clinics onboarded", "40% reduction in admin time", "SOC 2 Type II certified"],
    color: "border-green-500",
  },
  {
    title: "EduNest — EdTech Platform",
    industry: "Education",
    summary:
      "Launched a collaborative learning platform with real-time whiteboarding, video conferencing, and AI-driven assessments.",
    results: ["50K+ students", "95% satisfaction", "Partnership with 30 universities"],
    color: "border-purple-500",
  },
  {
    title: "LogiCore — Supply Chain SaaS",
    industry: "Logistics",
    summary:
      "End-to-end supply chain visibility platform integrating with 15+ carriers and real-time tracking.",
    results: ["$500M shipments tracked", "30 enterprise clients", "Acquired for $45M"],
    color: "border-accent",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-heading text-5xl md:text-6xl text-text_primary">Case Studies</h1>
            <p className="mt-4 text-text_secondary text-lg max-w-2xl mx-auto">
              Real projects, real results. See how we help startups and enterprises ship faster and smarter.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {cases.map((c) => (
              <div
                key={c.title}
                className={`bg-surface border-l-4 ${c.color} border-t border-r border-b border-border rounded-xl p-8`}
              >
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {c.industry}
                </span>
                <h3 className="font-heading text-2xl text-text_primary mt-2">{c.title}</h3>
                <p className="mt-3 text-text_secondary text-sm leading-relaxed">{c.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {c.results.map((r) => (
                    <span
                      key={r}
                      className="text-xs bg-background text-text_secondary px-3 py-1 rounded-full border border-border"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <p className="text-text_secondary text-lg mb-6">Have a project in mind?</p>
            <Link
              href="/contact"
              className="bg-primary text-background px-8 py-3 rounded-lg text-base font-semibold hover:bg-primary/90 transition-colors inline-block"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}