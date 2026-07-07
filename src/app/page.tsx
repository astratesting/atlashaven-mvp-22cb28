import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        {/* Hero */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-none">
              <span className="text-text_primary">Build Your </span>
              <span className="text-primary">SaaS</span>
              <br />
              <span className="text-text_primary">With Confidence</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-text_secondary">
              AtlasHaven partners with startups and enterprises to design, architect, and
              launch world-class SaaS products. From MVP to scale, we turn vision into revenue.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/signup"
                className="bg-primary text-background px-8 py-3 rounded-lg text-base font-semibold hover:bg-primary/90 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href="/case-studies"
                className="border border-border text-text_primary px-8 py-3 rounded-lg text-base font-medium hover:bg-surface transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 bg-surface/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl text-text_primary">What We Do</h2>
              <p className="mt-4 text-text_secondary text-lg">
                End-to-end SaaS consulting to bring your product to market faster.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Strategy & Architecture",
                  desc: "We map your business goals to a scalable technical architecture. Cloud-native, microservices, or monolith — we pick the right stack.",
                  icon: "🏗️",
                },
                {
                  title: "MVP Development",
                  desc: "Rapid prototyping and iterative development. Go from idea to launched product in weeks, not months.",
                  icon: "🚀",
                },
                {
                  title: "Scale & Optimize",
                  desc: "Performance tuning, cost optimization, and team mentoring. We help you cross the chasm from startup to scale-up.",
                  icon: "📈",
                },
              ].map((s) => (
                <div
                  key={s.title}
                  className="bg-surface border border-border rounded-xl p-8 hover:border-primary/50 transition-colors"
                >
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="font-heading text-2xl text-text_primary mb-3">{s.title}</h3>
                  <p className="text-text_secondary text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto text-center bg-surface border border-border rounded-2xl p-12">
            <h2 className="font-heading text-4xl md:text-5xl text-text_primary">
              Ready to Launch?
            </h2>
            <p className="mt-4 text-text_secondary text-lg max-w-xl mx-auto">
              Book a free discovery call. We&apos;ll review your idea, suggest an approach, and give you a ballpark estimate — no strings attached.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-8 bg-accent text-background px-8 py-3 rounded-lg text-base font-semibold hover:bg-accent/90 transition-colors"
            >
              Book a Call
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}