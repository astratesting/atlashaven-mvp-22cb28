import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-heading text-5xl md:text-6xl text-text_primary">Get in Touch</h1>
            <p className="mt-4 text-text_secondary text-lg">
              Tell us about your project. We&apos;ll get back within 24 hours.
            </p>
          </div>
          <form className="bg-surface border border-border rounded-xl p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text_primary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-text_primary placeholder:text-text_secondary focus:outline-none focus:border-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text_primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-text_primary placeholder:text-text_secondary focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@company.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-text_primary mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-text_primary placeholder:text-text_secondary focus:outline-none focus:border-primary transition-colors"
                placeholder="Acme Inc."
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text_primary mb-2">
                Tell us about your project
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-text_primary placeholder:text-text_secondary focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Describe what you're building, your timeline, budget, and any technical requirements..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-background py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
            <p className="text-text_secondary text-xs text-center">
              By submitting, you agree to our Privacy Policy and Terms of Service.
            </p>
          </form>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-surface border border-border rounded-xl p-6">
              <div className="text-3xl mb-2">📧</div>
              <h4 className="font-heading text-lg text-text_primary">Email</h4>
              <p className="text-text_secondary text-sm">hello@atlashaven.com</p>
            </div>
            <div className="bg-surface border border-border rounded-xl p-6">
              <div className="text-3xl mb-2">📞</div>
              <h4 className="font-heading text-lg text-text_primary">Phone</h4>
              <p className="text-text_secondary text-sm">+1 (555) 123-4567</p>
            </div>
            <div className="bg-surface border border-border rounded-xl p-6">
              <div className="text-3xl mb-2">📍</div>
              <h4 className="font-heading text-lg text-text_primary">Location</h4>
              <p className="text-text_secondary text-sm">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}