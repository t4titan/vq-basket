import { motion } from "framer-motion";
import { 
  Scissors, 
  GraduationCap, 
  Lightbulb, 
  TrendingUp, 
  Heart,
  Briefcase,
  Users,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const empowermentPrograms = [
  {
    title: "Creative & Entrepreneurial Skill-Building",
    description: "Hands-on training in hair styling, braiding, beauty techniques, and creative arts. We focus on income-generating skills that help girls earn and support themselves and their families.",
    icon: Scissors,
    color: "bg-primary",
    image: "https://vqbasketballfoundation.org/wp-content/uploads/2024/05/hair-braiding.jpg"
  },
  {
    title: "Vocational Training & Career Readiness",
    description: "Tailoring and practical skills training to prepare girls for careers or small business ventures. Highlight confidence-building, hands-on mentorship, and real-world workforce preparation.",
    icon: Briefcase,
    color: "bg-secondary",
    image: "https://vqbasketballfoundation.org/wp-content/uploads/2024/05/tailoring.jpg"
  },
  {
    title: "Scholarship & Educational Support",
    description: "Financial support for academic costs — including fees, exam preparation, and access to educational resources. Educational support opens doors to further learning and career opportunities.",
    icon: GraduationCap,
    color: "bg-accent",
    image: "https://vqbasketballfoundation.org/wp-content/uploads/2024/05/education.jpg"
  },
  {
    title: "Entrepreneurial Skills & Career Pathways",
    description: "Workshops and mentorship on business basics, financial literacy, leadership, and career planning. These skills help girls start small businesses or succeed in various professions.",
    icon: Lightbulb,
    color: "bg-blue-500",
    image: "https://vqbasketballfoundation.org/wp-content/uploads/2024/05/entrepreneur.jpg"
  }
];

const testimonials = [
  {
    quote: "This training has helped me start my own tailoring business, and now I can support my younger siblings.",
    author: "Blessing A.",
    role: "Vocational Program Graduate"
  },
  {
    quote: "I never thought I could lead a team until I joined the leadership workshop. It changed how I see my future.",
    author: "Favour J.",
    role: "Scholarship Recipient"
  }
];

const stats = [
  { label: "Girls Trained", value: "200+", icon: Users },
  { label: "Scholarships", value: "50+", icon: GraduationCap },
  { label: "Communities", value: "15+", icon: Heart },
  { label: "Training Sessions", value: "120+", icon: CheckCircle2 }
];

export default function Empowerment() {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* 1. Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://vqbasketballfoundation.org/wp-content/uploads/2024/05/empowerment-hero.jpg" 
            alt="Empowerment Hero" 
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
              Empowering Girls for Life — <span className="text-primary">On and Off the Court</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl">
              Equipping young girls with skills, education, confidence, and opportunities for a brighter future.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link href="/donate">
                <Button size="lg" className="rounded-full px-10 h-16 text-lg font-bold shadow-2xl hover-elevate">
                  Support Our Empowerment Programs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Why Empowerment Matters */}
      <section className="py-24 container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Beyond the <span className="text-primary">Basketball Court</span></h2>
          <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
            <p>
              VQ’s empowerment initiatives go beyond basketball — they prepare girls for sustainable livelihoods, leadership, and community contribution. 
            </p>
            <p className="font-medium text-foreground">
              We recognize that many girls in underserved communities lack access to skills training and opportunities that could lead to economic independence.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Core Empowerment Programs */}
      <section className="py-24 bg-muted/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {empowermentPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-card rounded-[3rem] overflow-hidden shadow-xl border border-border group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-6 left-6 w-14 h-14 bg-white/90 dark:bg-card/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-primary shadow-lg">
                    <program.icon className="w-7 h-7" />
                  </div>
                </div>
                <div className="p-10 space-y-6">
                  <h3 className="text-2xl font-bold font-serif">{program.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Empowerment in Action (Gallery/Slider Concept) */}
      <section className="py-24 container-custom">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Empowerment in <span className="text-primary">Action</span></h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Seeing the change we create in real-time across Nigeria.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="relative rounded-[2rem] overflow-hidden aspect-video shadow-2xl group">
              <img src="https://vqbasketballfoundation.org/wp-content/uploads/2024/05/action-1.jpg" alt="Hair Braiding Class" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white text-lg font-medium">Girls learning hair braiding at U&I Beauty Zone training center.</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="relative rounded-[2rem] overflow-hidden aspect-square shadow-xl group">
              <img src="https://vqbasketballfoundation.org/wp-content/uploads/2024/05/action-2.jpg" alt="Tailoring Workshop" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-sm font-medium">Hands-on tailoring mentorship in local communities.</p>
              </div>
            </div>
            <div className="relative rounded-[2rem] overflow-hidden aspect-square shadow-xl group">
              <img src="https://vqbasketballfoundation.org/wp-content/uploads/2024/05/action-3.jpg" alt="Classroom Session" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-sm font-medium">Academic support and exam preparation sessions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Impact at the Grassroots Level */}
      <section className="py-24 bg-secondary text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold">Impact at the <span className="text-primary">Grassroots Level</span></h2>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary mb-4">
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <p className="text-4xl font-bold">{stat.value}</p>
                    <p className="text-white/60 uppercase text-xs font-bold tracking-widest">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              {testimonials.map((t, index) => (
                <motion.div
                  key={t.author}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 relative"
                >
                  <Heart className="absolute top-10 right-10 w-12 h-12 text-primary/20" />
                  <p className="text-2xl font-serif italic mb-8 leading-relaxed">"{t.quote}"</p>
                  <div>
                    <p className="text-xl font-bold text-primary">{t.author}</p>
                    <p className="text-white/60">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Call-to-Action / Support Section */}
      <section className="py-24 container-custom">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-3xl"
        >
          <div className="relative z-10 max-w-4xl mx-auto space-y-10">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-serif font-bold">Support Empowerment for <span className="text-secondary">More Girls</span></h2>
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed italic">
                “Your support expands access to vocational training, scholarships, and life-changing opportunities for girls at the grassroots.”
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <Link href="/donate">
                <Button size="lg" variant="secondary" className="rounded-full px-12 h-18 text-xl font-bold shadow-2xl hover:scale-105 transition-all">
                  Donate to Programs
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white rounded-full px-12 h-18 text-xl font-bold backdrop-blur-md">
                  Volunteer & Mentor
                </Button>
              </Link>
            </div>
            
            <Link href="/contact">
              <Button variant="link" className="text-white/60 hover:text-white text-lg font-medium p-0 h-auto">
                Interested in partnership? Let's talk
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
