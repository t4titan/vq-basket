import { motion } from "framer-motion";
import { 
  Trophy, 
  Users, 
  Globe, 
  Target, 
  ArrowRight,
  TrendingUp,
  Heart,
  Briefcase
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "wouter";

const metrics = [
  { label: "Young Girls Trained", value: "500+", icon: Users },
  { label: "Vocational Skills Empowered", value: "200+", icon: Briefcase },
  { label: "Tournaments Organized", value: "25+", icon: Trophy },
  { label: "Communities Reached", value: "45+", icon: Target },
  { label: "States Covered", value: "12", icon: Globe }
];

const impactAreas = [
  {
    title: "Basketball Development",
    description: "Intensive training programs focusing on technical skills, sportsmanship, and the discipline required for elite competition.",
    icon: Trophy,
    color: "bg-primary"
  },
  {
    title: "Vocational & Life Skills",
    description: "Empowering girls with practical skills including tailoring, computer literacy, and financial management for long-term independence.",
    icon: Briefcase,
    color: "bg-secondary"
  },
  {
    title: "Community Engagement",
    description: "Building strong support networks through local partnerships and youth leadership development initiatives.",
    icon: Heart,
    color: "bg-accent"
  }
];

const testimonials = [
  {
    quote: "Being part of VQBF has not only improved my basketball skills but has given me the confidence to lead in my school and community.",
    author: "Faith O.",
    role: "Athlete & Student"
  },
  {
    quote: "The vocational training I received here has opened doors for me that I never thought possible. I am now helping my family with my skills.",
    author: "Sarah J.",
    role: "Vocational Program Participant"
  },
  {
    quote: "VQBF is more than a foundation; it's a family that believes in the potential of every girl, regardless of where they come from.",
    author: "Coach Ibrahim",
    role: "Technical Director"
  }
];

export default function Impact() {
  return (
    <div className="min-h-screen bg-background">
      {/* 1. Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://vqbasketballfoundation.org/wp-content/uploads/2025/01/D609413-scaled.jpg" 
            alt="Impact Hero" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        
        <div className="container-custom relative z-10 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Creating Lasting Impact Through <span className="text-primary">Basketball & Empowerment</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl">
              Empowering young girls across Nigeria with skills, confidence, and opportunities—on and off the court.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link href="/donate">
                <Button size="lg" className="rounded-full px-10 h-16 text-lg font-bold shadow-2xl hover-elevate">
                  Support Our Mission
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Impact Statistics Section */}
      <section className="py-24 -mt-24 relative z-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-card p-8 rounded-3xl shadow-2xl border border-border text-center group hover-elevate"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary transition-transform group-hover:rotate-12">
                  <metric.icon className="w-7 h-7" />
                </div>
                <h3 className="text-5xl font-bold mb-2 tracking-tight">{metric.value}</h3>
                <p className="text-muted-foreground font-medium text-sm leading-tight uppercase tracking-wider">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Impact Explanation Section */}
      <section className="py-24 container-custom">
        <div className="grid md:grid-cols-3 gap-12">
          {impactAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="space-y-6 text-center"
            >
              <div className={`w-20 h-20 ${area.color} rounded-full flex items-center justify-center mx-auto text-white shadow-xl`}>
                <area.icon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-serif font-bold">{area.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Geographic Reach Section */}
      <section className="py-24 bg-muted/30">
        <div className="container-custom text-center space-y-12">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Geographic Reach</h2>
            <p className="text-xl text-muted-foreground">“Expanding our reach, one community at a time”</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto aspect-[4/3] bg-white dark:bg-card rounded-[3rem] shadow-xl p-8 flex items-center justify-center border border-border">
            {/* Placeholder for Nigeria Map - Using an icon/illustration concept */}
            <div className="relative w-full h-full flex items-center justify-center opacity-80">
              <Globe className="w-64 h-64 text-primary/20 absolute" />
              <div className="grid grid-cols-3 gap-8 relative z-10">
                {['Lagos', 'Ogun', 'Oyo', 'Osun', 'Ekiti', 'Ondo'].map(state => (
                  <div key={state} className="flex flex-col items-center gap-2">
                    <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
                    <span className="font-bold text-sm uppercase tracking-widest">{state}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-10 right-10 bg-primary/10 px-6 py-4 rounded-2xl border border-primary/20 backdrop-blur-md">
              <p className="text-primary font-bold text-2xl">12 States</p>
              <p className="text-xs uppercase font-bold text-muted-foreground">Active Operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
        <div className="container-custom relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Voice of the <span className="text-primary">Community</span></h2>
            <p className="text-white/60">Real stories from the girls and mentors we support.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 flex flex-col justify-between"
              >
                <Heart className="w-10 h-10 text-primary/20 mb-6" />
                <p className="text-xl font-serif italic mb-8 leading-relaxed">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-primary">{t.author}</p>
                  <p className="text-sm text-white/60">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Growth & Vision Section */}
      <section className="py-24 container-custom">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold">We’ve Made Progress — <span className="text-primary">But There’s More to Do</span></h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                While we celebrate our achievements since 2024, the reality is that many young girls across Nigeria still lack access to sports and empowerment programs that could change their lives.
              </p>
              <p>
                There are hundreds of communities and more states that need our support. We have the vision and the commitment, but we need the resources to scale.
              </p>
              <p className="font-bold text-secondary">
                Increased funding and strategic partnerships will accelerate our impact, allowing us to reach more girls, faster.
              </p>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <img src="https://vqbasketballfoundation.org/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-16-at-06.32.33.jpeg" className="rounded-3xl shadow-xl aspect-[3/4] object-cover" alt="Vision 1" />
              <img src="https://vqbasketballfoundation.org/wp-content/uploads/2025/01/D609719-scaled.jpg" className="rounded-3xl shadow-xl aspect-square object-cover" alt="Vision 2" />
            </div>
            <div className="space-y-4">
              <img src="https://vqbasketballfoundation.org/wp-content/uploads/2025/01/D609675-scaled.jpg" className="rounded-3xl shadow-xl aspect-square object-cover" alt="Vision 3" />
              <img src="https://vqbasketballfoundation.org/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-17-at-10.19.39_9b3f3954.jpg" className="rounded-3xl shadow-xl aspect-[3/4] object-cover" alt="Vision 4" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Sponsorship & Partnership CTA */}
      <section className="py-24 container-custom">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-secondary rounded-[4rem] p-12 md:p-12 text-center text-white relative overflow-hidden shadow-3xl"
        >
          {/* Background Wash */}
          <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-10">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-white">Partner With Us to <span className="text-primary">Multiply Impact</span></h2>
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Your sponsorship helps us scale our programs, provide more scholarships, and build a brighter future for young athletes across Africa.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 h-18 text-xl font-bold shadow-2xl hover:scale-105 transition-all">
                  Become a Sponsor
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white rounded-full px-12 h-18 text-xl font-bold backdrop-blur-md shadow-xl">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
