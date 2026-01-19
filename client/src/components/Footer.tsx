import { Link } from "wouter";
import { Facebook, Instagram, Mail, Phone, Youtube, Send } from "lucide-react";
import { SiX as XIcon, SiTiktok as TiktokIcon } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast({
      title: "Subscribed Successfully",
      description: "Thank you for joining our newsletter!",
    });
    setEmail("");
  };

  return (
    <footer className="bg-secondary text-white py-16 md:py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand & Nonprofit Status */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-serif font-bold text-xl">VQ</span>
              </div>
              <span className="font-serif font-bold text-xl leading-tight">
                Victoria's Queens<br />
                <span className="text-xs font-sans font-normal text-white/70">Basketball Foundation</span>
              </span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Victoria's Queens Basketball Foundation is a registered 501(c)(3) Nonprofit Organization. | EIN: 33-3667260
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="https://web.facebook.com/people/Victorias-Queens-Basketball-Foundation/61565570947352/#" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all duration-300 border border-white/10">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all duration-300 border border-white/10">
                <XIcon className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/vqbasketballfoundation" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all duration-300 border border-white/10">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.tiktok.com/@vqbasketballfoundation" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all duration-300 border border-white/10">
                <TiktokIcon className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/@vqbasketballfoundation" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all duration-300 border border-white/10">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif font-bold">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Programs", href: "/programs" },
                { label: "Impact", href: "/impact" },
                { label: "Gallery", href: "/gallery" },
                { label: "Donate", href: "/donate" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif font-bold">Stay Updated</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Subscribe to our newsletter for the latest news and impact stories.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-11 pr-12 rounded-xl focus-visible:ring-primary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button 
                  type="submit" 
                  size="icon" 
                  className="absolute right-1 top-1 h-9 w-9 rounded-lg"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif font-bold">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+14707730076" className="text-white/70 hover:text-primary transition-colors text-sm">
                  +1 (470) 773-0076
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:contact@vqbasketballfoundation.org" className="text-white/70 hover:text-primary transition-colors text-sm break-all">
                  contact@vqbasketballfoundation.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-xs text-center md:text-left">
            Copyright © 2026. Victoria's Queens Basketball Foundation
          </p>
          <div className="flex gap-6 text-xs font-medium">
            <Link href="/privacy" className="text-white/30 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/30 hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
