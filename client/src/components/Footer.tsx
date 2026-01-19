import { Link } from "wouter";
import { Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react";
import { SiX as XIcon, SiTiktok as TiktokIcon } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-secondary text-white py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-serif font-bold text-2xl">VQ</span>
              </div>
              <span className="font-serif font-bold text-2xl leading-tight">
                Victoria's Queens<br />
                <span className="text-sm font-sans font-normal text-white/70">Basketball Foundation</span>
              </span>
            </div>
            <p className="text-white/80 leading-relaxed text-lg italic font-serif">
              "Empowering young women through basketball, education, and community service."
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="https://web.facebook.com/people/Victorias-Queens-Basketball-Foundation/61565570947352/#" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all duration-300 border border-white/10">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all duration-300 border border-white/10">
                <XIcon className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/vqbasketballfoundation" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all duration-300 border border-white/10">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@vqbasketballfoundation" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all duration-300 border border-white/10">
                <TiktokIcon className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@vqbasketballfoundation" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all duration-300 border border-white/10">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8 md:pl-8">
            <h3 className="text-xl font-serif font-bold border-l-4 border-primary pl-4">Explore</h3>
            <ul className="space-y-4">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Programs", href: "/programs" },
                { label: "Impact", href: "/impact" },
                { label: "Gallery", href: "/gallery" },
                { label: "Donate", href: "/donate" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-8">
            <h3 className="text-xl font-serif font-bold border-l-4 border-primary pl-4">Contact</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 group">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white/50 uppercase tracking-widest">Call Us</span>
                  <a href="tel:+14707730076" className="text-white/90 hover:text-primary transition-colors font-medium">
                    +1 (470) 773-0076
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white/50 uppercase tracking-widest">Email Us</span>
                  <a href="mailto:contact@vqbasketballfoundation.org" className="text-white/90 hover:text-primary transition-colors font-medium break-all">
                    contact@vqbasketballfoundation.org
                  </a>
                </div>
              </li>
            </ul>
          </div>

          

        {/* Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col items-center gap-6">
          {/* Legal/Nonprofit Info */}
            <div className="space-y-8">
              <h3 className="text-xl font-serif font-bold border-l-4 border-primary pl-4">Foundation</h3>
              <div className="space-y-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-white/80 leading-relaxed text-sm">
                  Victoria's Queens Basketball Foundation is a registered <span className="text-white font-bold underline decoration-primary underline-offset-4">501(c)(3) Nonprofit Organization</span>.
                </p>
                <div className="pt-2 border-t border-white/10">
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest">Tax ID / EIN</p>
                  <p className="text-primary font-mono font-bold">33-3667260</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm font-medium">
              Copyright © {new Date().getFullYear()}. Victoria's Queens Basketball Foundation
            </p>
            <div className="flex gap-8 text-sm font-medium">
              <Link href="/privacy" className="text-white/40 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-white/40 hover:text-white transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
