import { motion } from "framer-motion";
import { 
  Trophy, 
  Users, 
  Globe, 
  Target, 
  ArrowRight,
  PlayCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const impactHighlights = [
  {
    title: "Basketball Clinics",
    summary: "Organized clinics with 100+ young girls from Southwest Nigeria focused on training, life skills, confidence, and teamwork.",
    visual: "https://vqbasketballfoundation.org/wp-content/uploads/2024/05/clinic.jpg",
    icon: Users,
    color: "bg-blue-500"
  },
  {
    title: "WESIE League 2024 — Champions",
    summary: "Showcase the team’s journey to becoming WESIE League 2024 champions, competing against 36 state-level teams.",
    stats: "36 Teams Competed",
    visual: "https://vqbasketballfoundation.org/wp-content/uploads/2024/09/champions.jpg",
    icon: Trophy,
    color: "bg-yellow-500"
  },
  {
    title: "FIBA Zone 3 Academies Tournament",
    summary: "Highlight progress to the finals and performance against regional academies. Visual focus on team spirit and competition.",
    visual: "https://vqbasketballfoundation.org/wp-content/uploads/2024/07/fiba.jpg",
    icon: Globe,
    color: "bg-primary"
  },
  {
    title: "Edem West Africa Basketball Championship 2025",
    summary: "Showcase participation and visibility at this major West African event in Lagos. Context about the event and participating teams.",
    visual: "https://vqbasketballfoundation.org/wp-content/uploads/2025/01/edem.jpg",
    icon: Target,
    color: "bg-secondary"
  },
  {
    title: "3ON3 Tournament 2025",
    summary: "Display the foundation-hosted tournament with middle & high school players. Promote excitement, skill, and community engagement.",
    visual: "https://vqbasketballfoundation.org/wp-content/uploads/2025/01/3on3.jpg",
    icon: Users,
    color: "bg-orange-500"
  }
];

const metrics = [
  { label: "Girls Trained", value: "500+", icon: Users },
  { label: "Events Hosted", value: "15+", icon: Target },
  { label: "Championships Won", value: "3", icon: Trophy },
  { label: "States Covered", value: "12", icon: Globe }
];

export default function Impact() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://vqbasketballfoundation.org/wp-content/uploads/2024/05/hero-impact.jpg" 
            alt="Our Impact" 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-7xl font-serif font-bold text-white mb-6">
              Our Impact & <span className="text-primary">Achievements</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Since 2024, we’ve empowered young girls through basketball, personal development, and competitive excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/gallery">
                <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                  View Gallery
                </Button>
              </Link>
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <span className="text-primary font-bold text-xl">100+</span>
                <span className="text-white text-sm font-medium">Girls Trained</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 -mt-20 relative z-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-card p-8 rounded-3xl shadow-xl border border-border text-center hover-elevate"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                  <metric.icon className="w-6 h-6" />
                </div>
                <h3 className="text-4xl font-bold mb-1">{metric.value}</h3>
                <p className="text-muted-foreground font-medium">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Highlights */}
      <section className="py-24 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Featured Impact Highlights</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A closer look at the key milestones and events that define our journey.
            </p>
          </div>

          <div className="space-y-24">
            {impactHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
              >
                <div className="w-full md:w-1/2 group relative">
                  <div className="aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-card">
                    <img 
                      src={highlight.visual} 
                      alt={highlight.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 md:-right-10 bg-white dark:bg-card p-4 rounded-2xl shadow-xl flex items-center gap-3">
                    <div className={`w-12 h-12 ${highlight.color} rounded-xl flex items-center justify-center text-white`}>
                      <highlight.icon className="w-6 h-6" />
                    </div>
                    {highlight.stats && (
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Statistic</p>
                        <p className="font-bold">{highlight.stats}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-full md:w-1/2 space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold">
                    <Trophy className="w-4 h-4" />
                    Key Achievement
                  </div>
                  <h3 className="text-4xl font-serif font-bold leading-tight">{highlight.title}</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {highlight.summary}
                  </p>
                  <Button variant="ghost" className="group p-0 hover:bg-transparent text-primary font-bold text-lg">
                    Read Story 
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Photo/Video Section Placeholder */}
      <section className="py-24 overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-serif font-bold">Moments in Action</h2>
              <p className="text-xl text-muted-foreground">Catch the energy and passion through our lens.</p>
            </div>
            <Link href="/gallery">
              <Button variant="outline" className="rounded-full px-8">
                Full Gallery
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 0.98 }}
                className="aspect-square rounded-3xl bg-muted overflow-hidden relative group cursor-pointer"
              >
                <img 
                  src={`https://vqbasketballfoundation.org/wp-content/uploads/2024/05/gallery-${i}.jpg`}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                {i === 2 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <PlayCircle className="w-16 h-16 text-white opacity-80" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 container-custom">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-secondary rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-5xl md:text-6xl font-serif font-bold">Ready to make a <span className="text-primary">difference?</span></h2>
            <p className="text-xl md:text-2xl text-white/80">
              Your support helps us continue our mission of empowering young girls through basketball and personal development.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <Link href="/donate">
                <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-12 h-16 text-xl font-bold shadow-2xl hover-elevate">
                  Support Our Work
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 rounded-full px-12 h-16 text-xl font-bold text-white backdrop-blur-sm">
                  Become a Volunteer
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
