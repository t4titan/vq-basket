import { Link, useLocation } from "wouter";
import { Button } from "../components/ui/button";
import { Menu, X, Heart, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (label: string) => {
    setOpenAccordion(prev => (prev === label ? null : label));
  };

  const isActive = (path: string) => location === path;

  const menuItems = [
    {
      label: "About Us",
      sublinks: [
        { href: "/about", label: "About Us" },
        { href: "/impact", label: "Impact" },
        { href: "/team", label: "Meet the Team" },
        { href: "/ambassadors", label: "Brand Ambassadors" },
        { href: "/gallery", label: "Gallery" },
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
    { href: "/blog", label: "Blogs and News" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 z-50">
            <img src={"https://vqbasketballfoundation.org/wp-content/uploads/2024/12/cropped-cropped-Victoria_s_2-removebg-preview-e1734333881434.png"} alt="VQ Foundation Logo" className="w-12 h-12 object-contain" />
            <span className="flex flex-col items-start">
              <h2 className="font-serif font-bold text-xl md:text-2xl text-secondary leading-tight">
                Victoria's Queens
              </h2>
              <p className="text-sm font-sans font-normal text-muted-foreground">Basketball Foundation</p>
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
                      <ul className="grid w-[400px] gap-2 p-4 bg-white">
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
            className="w-full absolute top-20 bg-background z-[999] lg:hidden overflow-y-auto"
          >
            <div className="container-custom py-8 flex flex-col gap-8">
              {menuItems.map((item) =>  {
            
            const isAccordionOpen = openAccordion === item.label;
            
            return (
                <div key={item.label} className="space-y-4">
                  <h3 
                    onClick={() => toggleAccordion(item.label)}
                    className="text-[12px] font-bold flex items-center gap-4 cursor-pointer uppercase tracking-wider text-secondary">{item.label}
                    <span
                      className={`transition-transform duration-200 ${
                        isAccordionOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown size={14} />
                    </span>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isAccordionOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden pl-4"
                      >
                        <div className="grid gap-3 pt-2">
                          {item.sublinks.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className={`text-[12px] font-serif font-semibold ${
                                isActive(sub.href)
                                  ? "text-primary"
                                  : "text-muted-foreground"
                              }`}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )})}
              
              <div className="h-px bg-border my-2" />
              
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-[12px] font-serif font-bold uppercase ${
                    isActive(link.href) ? "text-primary" : "text-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="h-px bg-border my-2" />
              
              <Link href="/donate" onClick={() => setIsOpen(false)}>
                <Button className="w-full btn-primary text-[12px] py-2 mt-4">
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
