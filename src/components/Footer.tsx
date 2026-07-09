import Link from "next/link";
import { business, navLinks } from "@/lib/site-content";

export default function Footer() {
  return (
    <footer className="bg-primary text-secondary py-16">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-serif font-bold text-white mb-4">{business.shortName}</h3>
          <p className="text-secondary/80 text-sm leading-relaxed mb-6">
            Madison-area landscape design, hardscaping, drainage, seasonal cleanup, and native planting for residential yards.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-secondary/80">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link href={link.path} className="hover:text-white transition-colors">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <div className="text-sm text-secondary/80 space-y-2">
            <p>Serving {business.serviceArea}</p>
            <p className="text-xl text-white font-medium mt-4">
              <a href={business.phoneHref} className="hover:text-accent transition-colors">{business.phone}</a>
            </p>
            <div className="mt-6">
              <Link href="/contact" className="inline-block bg-accent text-primary px-6 py-2 rounded-md font-medium hover:bg-white transition-colors">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-secondary/20 text-center text-xs text-secondary/60">
        <p>&copy; {new Date().getFullYear()} {business.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
