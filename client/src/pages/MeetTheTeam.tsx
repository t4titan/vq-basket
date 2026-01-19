import { motion } from "framer-motion";
import { SEO } from "../components/seo/SEO";
import { Link } from "wouter";
import { Button } from "../components/ui/button";
import { Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Deborah ",
    role: "Founder / President",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80",
    bio: "Passionate about girl-child empowerment and using sports as a tool for social change.",
  },
  
  {
    name: "AKINDELE PETER",
    role: "DIRECTOR AND HEAD COACH",
    image: "https://vqbasketballfoundation.org/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-01-16-at-8.06.04-AM-1-scaled-r03lx1s4gcqgwn9w4crb71luo7pkxicaem6oo2ddkw.jpeg",
    bio: "Expert in grassroots basketball development with over 15 years of coaching experience.",
  },
  {
    name: "YETUNDE ONAOLAPO VESSEL.",
    role: "ACADEMY ADMIN",
    image: "https://vqbasketballfoundation.org/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-01-16-at-4.44.27-PM-e1749804471416-r78o1u2gceb2ns2q78zvxlx8xhr0hmxeg0c23tcglc.jpeg",
    bio: "Managing our network of dedicated volunteers and grassroots coordinators.",
  },
  {
    name: "MUSTAPHA SALIU ABIODUN",
    role: "Coach",
    image: "https://vqbasketballfoundation.org/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-01-16-at-8.06.04-AM-2-scaled-r03lw7padnlal4hkzzr8z973nvtu370vmhb5b7lz40.jpeg",
    bio: "Providing assistant to the head caoch in training and team organisation.",
  },
  {
    name: "HAKEEM TAIWO",
    role: "Coach",
    image: "https://vqbasketballfoundation.org/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-01-16-at-8.06.04-AM-scaled-r03lxr5rkvp7m49105q8kd7apm8hpc51i3ssmjbqww.jpeg",
    bio: "Ensuring smooth execution of all VQBF tournaments and training clinics.",
  },
  {
    name: "Olamide Johnson Moyegun",
    role: "CREATIVE DIRECTOR | CINEMATOGRAPHER",
    image: "https://vqbasketballfoundation.org/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-30-at-06.09.38_3cd2e82e.jpg",
    bio: "Telling the VQBF story and managing our digital presence and community engagement.",
  },
  
];

export default function MeetTheTeam() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <SEO title="Meet the Team" />

      {/* Hero Section */}
      <section className="bg-secondary py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
        <div className="container-custom relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white"
          >
            Meet the <span className="text-primary">Team</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto italic font-serif"
          >
            The people committed to empowering young girls through basketball and opportunity.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl mb-6 bg-muted">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  
                </div>
              </div>
              <div className="space-y-2 px-2">
                <h3 className="text-2xl font-serif capitalize font-bold text-secondary group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary font-bold uppercase tracking-widest text-xs">
                  {member.role}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-24 bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-serif font-bold text-secondary">Our Commitment</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our team is made up of passionate individuals dedicated to creating a safe and empowering environment for every girl who joins VQBF. We focus on:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              {[
                { title: "Grassroots Development", desc: "Identifying and nurturing talent from underserved communities." },
                { title: "Girl-Child Empowerment", desc: "Building confidence, leadership, and life skills through sports." },
                { title: "Community Impact", desc: "Fostering positive change through basketball and education initiatives." }
              ].map((item) => (
                <div key={item.title} className="p-8 bg-background rounded-3xl shadow-sm border border-border space-y-4">
                  <h3 className="font-serif font-bold text-lg text-secondary">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 container-custom">
        <div className="bg-primary rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl md:text-6xl font-serif font-bold">Join Our Mission</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto italic">
              Help us empower the next generation of female leaders in Nigeria.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="rounded-full px-12 h-18 text-xl font-bold shadow-xl">
                  Partner With Us
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white rounded-full px-12 h-18 text-xl font-bold backdrop-blur-md">
                  Volunteer With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
