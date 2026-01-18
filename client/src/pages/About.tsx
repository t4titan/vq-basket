import { motion } from "framer-motion";
import { 
  Trophy, 
  GraduationCap, 
  Heart, 
  Users, 
  Target, 
  ShieldCheck, 
  Compass, 
  Zap, 
  Briefcase,
  Globe,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const features = [
  {
    title: "Basketball Development",
    description: "Training, competitions, mentorship, and leadership through sport.",
    icon: Trophy,
    color: "bg-primary"
  },
  {
    title: "Empowerment Programs",
    description: "Vocational skills like hair braiding and tailoring, plus entrepreneurial training.",
    icon: Briefcase,
    color: "bg-secondary"
  },
  {
    title: "Educational Support",
    description: "Scholarships and academic resources to open doors to further learning.",
    icon: GraduationCap,
    color: "bg-accent"
  },
  {
    title: "Community Outreach",
    description: "Grassroots engagement, community clinics, and local empowerment initiatives.",
    icon: Globe,
    color: "bg-blue-500"
  }
];

const values = [
  { title: "Empowerment", icon: Zap },
  { title: "Discipline & Excellence", icon: Target },
  { title: "Inclusivity & Opportunity", icon: Users },
  { title: "Integrity & Community", icon: ShieldCheck },
  { title: "Growth & Sustainability", icon: Compass }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://vqbasketballfoundation.org/wp-content/uploads/2025/01/D609731-scaled.jpg" 
            alt="About VQBF" 
            className="w-full h-full object-cover object-center brightness-[0.4]"
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
              About Victoria’s Queens <br /> <span className="text-primary">Basketball Foundation</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
              Empowering young girls to rise with confidence, purpose, and opportunity—on and off the court.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Who We Are */}
      <section className="py-24 container-custom">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Who <span className="text-primary">We Are</span></h2>
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
              <p>
                VQBF is a nonprofit organization committed to the holistic development of young girls across Nigeria. We believe that true empowerment starts with providing the right tools and a supportive community.
              </p>
              <p>
                The foundation uses basketball as a powerful tool for transformation, alongside education and vocational empowerment programs, to create a lasting, sustainable impact in the lives of girls from underserved and grassroots communities.
              </p>
            </div>
          </motion.div>
          <div className="relative">
            <img 
              src="https://vqbasketballfoundation.org/wp-content/uploads/2024/05/who-we-are.jpg" 
              className="rounded-[3rem] shadow-2xl aspect-square object-cover" 
              alt="Who We Are" 
            />
            <div className="absolute -bottom-6 -left-6 bg-secondary p-8 rounded-3xl text-white shadow-xl hidden md:block max-w-[240px]">
              <p className="text-lg font-bold italic font-serif">“Built on faith, driven by impact, and dedicated to the girl child.”</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & 4. Vision */}
      <section className="py-24 bg-muted/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary text-white p-12 md:p-16 rounded-[4rem] shadow-2xl space-y-8"
            >
              <h2 className="text-4xl font-serif font-bold border-b border-white/20 pb-6 text-secondary">Our Mission</h2>
              <p className="text-2xl leading-relaxed italic font-serif">
                “To empower young girls through basketball, education, and life-changing opportunities, building their confidence, discipline, and leadership to create pathways for personal and economic growth.”
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-secondary text-white p-12 md:p-16 rounded-[4rem] shadow-2xl space-y-8"
            >
              <h2 className="text-4xl font-serif font-bold border-b border-white/20 pb-6 text-primary">Our Vision</h2>
              <p className="text-2xl leading-relaxed italic font-serif">
                “A future where every girl has access to opportunity regardless of her background, becoming a confident, skilled, and empowered young woman who contributes positively to society.”
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. What We Do */}
      <section className="py-24 container-custom">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">What <span className="text-primary">We Do</span></h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Providing a holistic ecosystem for development and growth.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-10 rounded-[2.5rem] border border-border shadow-lg flex flex-col items-center text-center space-y-6 hover-elevate"
            >
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Our Values */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
        <div className="container-custom relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Our Core <span className="text-primary">Values</span></h2>
            <p className="text-white/60">The pillars that guide our every action and decision.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {values.map((v, index) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 px-8 py-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors"
              >
                <v.icon className="w-6 h-6 text-primary" />
                <span className="font-bold tracking-wide uppercase text-sm">{v.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Impact Mindset */}
      <section className="py-24 container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Why It <span className="text-primary">Matters</span></h2>
          <div className="space-y-8 text-xl text-muted-foreground leading-relaxed italic font-serif">
            <p>
              “Many girls across Nigeria face significant barriers to education, sports, and skill development. These barriers often lead to limited opportunities and a cycle of poverty.”
            </p>
            <p className="text-foreground font-medium not-italic">
              VQBF exists to bridge this gap. Every program we run—from grassroots clinics to vocational workshops—is designed to create lasting impact, not just temporary support. We are building the next generation of leaders.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Call-to-Action Section */}
      <section className="py-24 container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-3xl"
        >
          <div className="relative z-10 max-w-4xl mx-auto space-y-10">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-serif font-bold">Be Part of the <span className="text-secondary">Impact</span></h2>
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Together, we can empower more girls, reach more communities, and create lasting change.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="rounded-full px-12 h-18 text-xl font-bold shadow-2xl hover:scale-105 transition-all">
                  Partner With Us
                </Button>
              </Link>
              <Link href="/donate">
                <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white rounded-full px-12 h-18 text-xl font-bold backdrop-blur-md shadow-xl">
                  Support Our Mission
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 rounded-full px-12 h-18 text-xl font-bold">
                  Join as a Volunteer
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
