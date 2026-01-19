import { motion } from "framer-motion";
import { 
  Trophy, 
  Target, 
  Users, 
  Zap,
  ArrowRight,
  Heart
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "wouter";

const tournamentBenefits = [
  {
    title: "Builds Confidence",
    description: "Helps girls believe in their abilities and develop a competitive spirit.",
    icon: Zap,
    color: "bg-primary"
  },
  {
    title: "Skill Development",
    description: "Improves basketball skills and fast-paced decision-making on the court.",
    icon: Target,
    color: "bg-secondary"
  },
  {
    title: "Leadership & Teamwork",
    description: "Encourages communication, discipline, and mutual respect among players.",
    icon: Users,
    color: "bg-accent"
  },
  {
    title: "Grassroots Opportunity",
    description: "Creates a platform for girls from underserved communities to shine.",
    icon: Trophy,
    color: "bg-blue-500"
  }
];

export default function Tournament3ON3() {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* 1. Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://vqbasketballfoundation.org/wp-content/uploads/2025/04/DSC_1076-scaled.jpg" 
            alt="3ON3 Tournament" 
            className="w-full h-full object-cover object-top brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              VQBF 3ON3 <span className="text-primary">Tournament</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto italic font-serif">
              “A platform for young girls to compete, grow, and believe in themselves.”
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-10 h-16 text-lg font-bold shadow-2xl hover-elevate">
                Support the Tournament
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. About the Tournament */}
      <section className="py-24 container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">About the <span className="text-primary">Tournament</span></h2>
          <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
            <p>
              The VQBF 3ON3 tournament is a fast-paced basketball competition designed specifically for young girls at the grassroots level. 
            </p>
            <p>
              This format is ideal for youth development because it allows every player to be active, involved, and seen. Smaller teams mean more touches, more decisions, and more opportunities for every girl to lead.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Why the Tournament Matters */}
      <section className="py-24 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Why It <span className="text-primary">Matters</span></h2>
            <p className="text-xl text-muted-foreground">Beyond the game, we are building character.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {tournamentBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-card p-8 rounded-3xl shadow-xl border border-border group hover-elevate"
              >
                <div className={`w-14 h-14 ${benefit.color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg`}>
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Impact on Girls */}
      <section className="py-24 container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Shaping the <span className="text-primary">Competitive Spirit</span></h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Participation in our 3ON3 tournament helps girls believe in their own abilities. Through healthy competition, they learn to navigate wins and losses with grace and resilience.
              </p>
              <p>
                We inspire them to pursue basketball seriously while confidently applying the lessons of discipline and sportsmanship to every other area of their lives.
              </p>
            </div>
            <div className="flex items-center gap-4 text-primary font-bold">
              <Heart className="w-6 h-6 fill-current" />
              <span>Inspiring growth, one game at a time.</span>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://vqbasketballfoundation.org/wp-content/uploads/2025/04/DSC_1115-scaled.jpg" className="rounded-2xl shadow-lg aspect-square object-cover" alt="Tournament Action 1" />
            <img src="https://vqbasketballfoundation.org/wp-content/uploads/2025/04/DSC_1215-scaled.jpg" className="rounded-2xl shadow-lg aspect-[3/4] object-cover mt-8" alt="Tournament Action 2" />
          </div>
        </div>
      </section>

      {/* 5. Call to Action */}
      <section className="py-24 container-custom">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-secondary rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-3xl"
        >
          <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
          <div className="relative z-10 max-w-4xl mx-auto space-y-10">
            <h2 className="text-5xl md:text-6xl font-serif font-bold">Support Girls Through <span className="text-primary">Competitive Sports</span></h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed italic font-serif">
              “Your support helps us organize more tournaments and reach more girls who are ready to rise.”
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <Link href="/donate">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 h-18 text-xl font-bold shadow-2xl hover:scale-105 transition-all">
                  Support the Tournament
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
