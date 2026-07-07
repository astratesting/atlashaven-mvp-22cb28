import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <span className="font-heading text-xl text-primary">ATLASHAVEN</span>
            <p className="mt-2 text-text_secondary text-sm max-w-sm">
              SaaS consultancy helping startups transform ideas into scalable, beautiful products.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-lg text-text_primary mb-3">Pages</h4>
            <ul className="space-y-2">
              <li><Link href="/pricing" className="text-text_secondary hover:text-primary text-sm transition-colors">Pricing</Link></li>
              <li><Link href="/case-studies" className="text-text_secondary hover:text-primary text-sm transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="text-text_secondary hover:text-primary text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg text-text_primary mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-text_secondary hover:text-primary text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-text_secondary hover:text-primary text-sm transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-text_secondary text-sm">
          &copy; {new Date().getFullYear()} AtlasHaven. All rights reserved.
        </div>
      </div>
    </footer>
  );
}