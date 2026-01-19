import { motion } from "framer-motion";
import { 
  Heart, 
  ShieldCheck, 
  Zap, 
  Users, 
  ArrowRight,
  Gift,
  Share2,
  PackageCheck
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Globe } from "lucide-react";
import { Link } from "wouter";

const impactPoints = [
  {
    title: "Access to Sports",
    description: "Proper footwear is the first step toward participating in basketball and other physical activities safely.",
    icon: Zap,
    color: "bg-primary"
  },
  {
    title: "Increased Confidence",
    description: "A new pair of shoes provides a sense of belonging and dignity, boosting a girl's self-esteem on and off the court.",
    icon: Heart,
    color: "bg-secondary"
  },
  {
    title: "Safer Movement",
    description: "Protects girls from injuries and foot-related health issues during their daily commute to school and community activities.",
    icon: ShieldCheck,
    color: "bg-accent"
  },
  {
    title: "Community Engagement",
    description: "Foster a culture of support where every girl knows her community cares about her journey.",
    icon: Users,
    color: "bg-blue-500"
  }
];

const supportOptions = [
  {
    title: "Donate Shoes",
    description: "We accept new or gently used shoes in good condition. These are collected and distributed to girls in underserved communities.",
    icon: PackageCheck,
    action: "Donate Now"
  },
  {
    title: "Sponsor a Shoe Bundle",
    description: "Financial donations support the logistics of shoe collection, cleaning, and distribution to those in need.",
    icon: Gift,
    action: "Sponsor Bundle"
  },
  {
    title: "Spread the Word",
    description: "Encourage sharing our Shoe Drive on social media to help us reach more donors and change more lives.",
    icon: Share2,
    action: "Share Drive"
  }
];

export default function ShoeDrive() {
  return (
    <div className="min-h-screen bg-background">
      {/* 1. Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://vqbasketballfoundation.org/wp-content/uploads/2025/06/VQ-SHOE-DRIVE-FLYER-2-1444x2048.jpg" 
            alt="Shoe Drive Hero" 
            className="w-full h-full object-cover brightness-[0.4]"
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
              Every Step <span className="text-primary">Counts</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto italic font-serif">
              “Because no girl should be left behind simply because she doesn’t have a pair of shoes.”
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-10 h-16 text-lg font-bold shadow-2xl hover-elevate">
                  Donate Shoes
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Purpose Section */}
      <section className="py-24 container-custom">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Why <span className="text-primary">Shoes Matter</span></h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Shoes are more than just footwear—they are tools of empowerment. For many young girls in underserved communities, a proper pair of shoes is the difference between participation and exclusion.
              </p>
              <p>
                Proper footwear protects them from injuries during sports, enables them to walk to school with dignity, and fosters the confidence needed to pursue their dreams on the court and in the classroom.
              </p>
              <p className="font-bold text-secondary italic font-serif">
                “Your donation can change a girl’s journey, one step at a time.”
              </p>
            </div>
          </motion.div>
          <div className="relative">
            <img 
              src="https://vqbasketballfoundation.org/wp-content/uploads/2025/01/D609681-scaled.jpg" 
              className="rounded-[3rem] shadow-2xl aspect-[4/5] object-cover" 
              alt="Shoes Matter" 
            />
            <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-3xl text-white shadow-xl hidden md:block max-w-[240px]">
              <p className="text-lg font-bold italic font-serif">“Empowerment begins with a solid foundation.”</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Impact of Shoe Donations */}
      <section className="py-24 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">How Your Donation Helps</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your contribution goes directly to supporting the health, confidence, and growth of young girls.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-card p-8 rounded-3xl shadow-xl border border-border group hover-elevate"
              >
                <div className={`w-14 h-14 ${point.color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg transition-transform group-hover:scale-110`}>
                  <point.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                <p className="text-muted-foreground leading-relaxed italic">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Ways to Support Section */}
      <section className="py-24 container-custom">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">How You Can Support the Shoe Drive</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether through physical donations or financial support, every bit counts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {supportOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-10 rounded-[2.5rem] border border-border shadow-lg flex flex-col items-center text-center space-y-6 hover-elevate"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <option.icon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold">{option.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                {option.description}
              </p>
              <Link href={index === 2 ? "#" : (index === 1 ? "/donate" : "/contact")}>
                <Button className="rounded-full px-8 shadow-md">
                  {option.action}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Donation Process Section */}
      <section className="py-24 bg-secondary text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
        <div className="container-custom relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">How to Donate</h2>
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                We've made the donation process as simple as possible. You can drop off your donations at designated points or ship them directly to our collection centers.
              </p>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 space-y-4">
                <h4 className="text-xl font-bold text-primary">Current logistics update:</h4>
                <p className="italic">
                  Donation drop-off points and specific shipping instructions will be provided upon contact. We are currently updating our permanent locations list.
                </p>
                <p className="text-sm font-medium">
                  Please stay tuned for upcoming shoe drive schedules and community collection events.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/5 aspect-square rounded-[2rem] border border-white/10 flex flex-col items-center justify-center p-6 text-center space-y-4">
              <PackageCheck className="w-12 h-12 text-primary" />
              <p className="font-bold">Step 1: Clean & Pack</p>
            </div>
            <div className="bg-white/5 aspect-square rounded-[2rem] border border-white/10 flex flex-col items-center justify-center p-6 text-center space-y-4">
              <ArrowRight className="w-12 h-12 text-primary" />
              <p className="font-bold">Step 2: Contact Us</p>
            </div>
            <div className="bg-white/5 aspect-square rounded-[2rem] border border-white/10 flex flex-col items-center justify-center p-6 text-center space-y-4">
              <Globe className="w-12 h-12 text-primary" />
              <p className="font-bold">Step 3: Drop-off / Ship</p>
            </div>
            <div className="bg-white/5 aspect-square rounded-[2rem] border border-white/10 flex flex-col items-center justify-center p-6 text-center space-y-4">
              <Users className="w-12 h-12 text-primary" />
              <p className="font-bold">Step 4: Impact Girls</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Call-to-Action Section */}
      <section className="py-12 container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[3rem] p-12 md:p-8 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl md:text-6xl font-serif font-bold leading-tight">Help Us Take Girls Further</h2>
            <p className="text-xl md:text-[18px] text-white/90 max-w-2xl mx-auto leading-relaxed italic">
              “Your donation—new, used, or financial—can change a girl’s journey, one step at a time.”
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="rounded-full px-12 h-18 text-xl font-bold shadow-xl hover:scale-105 transition-all">
                  Donate Shoes
                </Button>
              </Link>
              <Link href="/donate">
                <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white rounded-full px-12 h-18 text-xl font-bold backdrop-blur-md">
                  Support the Drive
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
