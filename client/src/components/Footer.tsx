import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-serif font-bold text-xl">VQ</span>
              </div>
              <span className="font-serif font-bold text-xl leading-tight">
                Victoria's Queens<br /><span className="text-sm font-sans font-normal opacity-80">Basketball Foundation</span>
              </span>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Empowering young women through basketball, education, and community service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Programs", href: "/programs" },
                { label: "Impact Stories", href: "/impact" },
                { label: "News & Events", href: "/blog" },
                { label: "Donate", href: "/donate" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-secondary-foreground/80 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif font-bold text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-secondary-foreground/80">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>123 Basketball Court,<br />Sports City, SC 12345</span>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/80">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/80">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>hello@victoriasqueens.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif font-bold text-white">Newsletter</h3>
            <p className="text-secondary-foreground/80">Subscribe to get the latest updates and news.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-primary text-white placeholder:text-white/50"
              />
              <button className="w-full btn-primary px-6 py-3 rounded-lg font-semibold">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-secondary-foreground/60">
          <p>© {new Date().getFullYear()} Victoria's Queens Basketball Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
