import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const plans = [
  {
    name: "MVP Sprint",
    price: "$15,000",
    duration: "4-6 weeks",
    features: [
      "Product strategy session",
      "UI/UX design (up to 10 screens)",
      "Full-stack MVP development",
      "Supabase auth & database",
      "CI/CD pipeline setup",
      "1 month post-launch support",
    ],
    highlighted: false,
  },
  {
    name: "Growth Package",
    price: "$40,000",
    duration: "8-12 weeks",
    features: [
      "Everything in MVP Sprint",
      "Advanced feature development",
      "Payment integration (Stripe)",
      "Admin dashboard",
      "Analytics & monitoring",
      "3 months post-launch support",
      "Dedicated tech lead",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    duration: "Ongoing",
    features: [
      "Everything in Growth Package",
      "Custom architecture design",
      "Multi-tenant SaaS platform",
      "Compliance & security audit",
      "Team augmentation",
      "Quarterly strategy reviews",
      "24/7 priority support",
    ],
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-heading text-5xl md:text-6xl text-text_primary">Pricing</h1>
            <p className="mt-4 text-text_secondary text-lg max-w-2xl mx-auto">
              Transparent, fixed-price packages. No hidden fees. Every engagement starts with a free discovery call.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative border rounded-xl p-8 flex flex-col ${
                  plan.highlighted
                    ? "border-primary bg-surface ring-2 ring-primary"
                    : "border-border bg-surface"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-background text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-2xl text-text_primary">{plan.name}</h3>
                <div className="mt-4">
                  <span className="font-heading text-4xl text-text_primary">{plan.price}</span>
                  <p className="text-text_secondary text-sm mt-1">{plan.duration}</p>
                </div>
                <ul className="mt-8 space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-text_secondary text-sm">
                      <span className="text-primary mt-0.5 shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-8 block text-center py-3 rounded-lg font-semibold transition-colors ${
                    plan.highlighted
                      ? "bg-primary text-background hover:bg-primary/90"
                      : "border border-primary text-primary hover:bg-primary hover:text-background"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}