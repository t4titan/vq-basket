import { useEffect } from "react";
import { useLocation } from "wouter";

interface SEOProps {
  title?: string;
}

export function SEO({ title }: SEOProps) {
  const [location] = useLocation();

  useEffect(() => {
    const baseTitle = "VQBF";
    let pageTitle = "";

    if (title) {
      pageTitle = `${title} | ${baseTitle}`;
    } else {
      // Fallback based on route if no title provided
      const path = location === "/" ? "Home" : location.slice(1).charAt(0).toUpperCase() + location.slice(2);
      pageTitle = `${path} | ${baseTitle}`;
    }

    document.title = pageTitle;
  }, [title, location]);

  return null;
}
