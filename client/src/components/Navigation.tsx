import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import logoImg from "@assets/vq_1768547763009.png";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { user } = useAuth();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/impact", label: "Impact" },
    { href: "/blog", label: "News" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 z-50">
            <img src={logoImg} alt="VQ Foundation Logo" className="w-12 h-12 object-contain" />
            <span className="font-serif font-bold text-xl md:text-2xl text-secondary leading-tight hidden sm:block">
              Victoria's Queens<br /><span className="text-sm font-sans font-normal text-muted-foreground">Basketball Foundation</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary relative group ${
                  isActive(link.href) ? "text-primary font-semibold" : "text-secondary"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
              </Link>
            ))}
            
            {user && (
              <Link href="/admin">
                 <Button variant="ghost" size="sm" className="font-medium">Admin</Button>
              </Link>
            )}

            <Link href="/donate">
              <Button className="btn-primary gap-2 rounded-full px-6">
                <Heart className="w-4 h-4 fill-current" />
                Donate
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden z-50 p-2 text-secondary hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-20 bg-background z-40 lg:hidden overflow-y-auto"
          >
            <div className="container-custom py-8 flex flex-col gap-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-serif font-bold ${
                    isActive(link.href) ? "text-primary" : "text-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-border my-2" />
              {user && (
                <Link href="/admin" onClick={() => setIsOpen(false)} className="text-lg font-medium text-secondary">
                  Admin Dashboard
                </Link>
              )}
              <Link href="/donate" onClick={() => setIsOpen(false)}>
                <Button className="w-full btn-primary text-lg py-6 mt-4">
                  Donate Now
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
