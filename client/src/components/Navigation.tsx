import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

import logoImg from "@assets/vq_1768547763009.png";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { user } = useAuth();

  const isActive = (path: string) => location === path;

  const menuItems = [
    {
      label: "About Us",
      sublinks: [
        {href: "/about", label: "About Us"},
        { href: "/impact", label: "Impact" },
        { href: "/team", label: "Meet the Team" },
        { href: "/ambassadors", label: "Brand Ambassadors" },
      ]
    },
    {
      label: "Programs",
      sublinks: [
        { href: "/nigeria", label: "What We Do – Nigeria" },
        { href: "/empowerment", label: "Empowerment" },
      ]
    },
    {
      label: "Events",
      sublinks: [
        { href: "/history", label: "What We Have Done" },
        { href: "/shoe-drive", label: "Shoe Drive" },
        { href: "/3on3", label: "3ON3 Tournament" },
      ]
    },
  ];

  const links = [
    { href: "/blog", label: "News" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 z-50">
            <img src={logoImg} alt="VQ Foundation Logo" className="w-12 h-12 object-contain" />
            <span>
              <span className="font-serif font-bold text-xl md:text-2xl text-secondary leading-tight hidden sm:block">
                Victoria's Queens
              </span>
              <span className="text-sm font-sans font-normal text-muted-foreground">Basketball Foundation</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuTrigger className="bg-transparent text-secondary hover:text-primary transition-colors h-auto py-2">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-2 p-4 bg-white">
                        {item.sublinks.map((sub) => (
                          <li key={sub.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={sub.href}
                                className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${
                                  isActive(sub.href) ? "bg-accent" : ""
                                }`}
                              >
                                <div className="text-sm font-medium leading-none">{sub.label}</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.href) ? "text-primary font-semibold" : "text-secondary"
                }`}
              >
                {link.label}
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
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden z-50">
            <ThemeToggle />
            <button
              className="p-2 text-secondary hover:text-primary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
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
            <div className="container-custom py-8 flex flex-col gap-8">
              {menuItems.map((item) => (
                <div key={item.label} className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{item.label}</h3>
                  <div className="grid gap-4 pl-4">
                    {item.sublinks.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-xl font-serif font-bold ${
                          isActive(sub.href) ? "text-primary" : "text-secondary"
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="h-px bg-border my-2" />
              
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
