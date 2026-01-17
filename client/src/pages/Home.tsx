import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, Users, Heart, Calendar, Image as ImageIcon } from "lucide-react";
import { useEvents } from "@/hooks/use-events";
import { useGallery } from "@/hooks/use-gallery";
import { format } from "date-fns";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  const [statIndex, setStatIndex] = useState(0);

  const heroStats = [
    { value: "500+", label: "Young athletes empowered through our programs since 2020." },
    { value: "12", label: "States across Nigeria reached with our grassroots initiatives." },
    { value: "100%", label: "Scholarship support for our most dedicated student-athletes." },
    { value: "25+", label: "Community tournaments organized to foster local talent." }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStatIndex((prev) => (prev + 1) % heroStats.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  
  const mockGalleryItems = [
    {
      id: 1,
      title: "Training Session",
      imageUrl: "https://vqbasketballfoundation.org/wp-content/uploads/2025/01/D609590-scaled.jpg",
    },
    {
      id: 2,
      title: "Community Outreach",
      imageUrl: "https://vqbasketballfoundation.org/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-05-at-21.31.12-1-768x1024.jpeg",
    },
    {
      id: 3,
      title: "Tournament Day",
      imageUrl: "https://vqbasketballfoundation.org/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-16-at-06.32.23.jpeg",
    },
    {
      id: 4,
      title: "Team Moments",
      imageUrl: "https://vqbasketballfoundation.org/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-16-at-06.31.59.jpeg",
    },
  ];

  const { data: events } = useEvents();
  const { data: galleryItemsFromDb } = useGallery();

  const galleryItems =
    galleryItemsFromDb && galleryItemsFromDb.length > 0
      ? galleryItemsFromDb
      : mockGalleryItems;

  const partners = [
    { name: "Partner 1", logo: "https://vqbasketballfoundation.org/wp-content/uploads/2025/01/1.png" },
    { name: "Partner 2", logo: "https://vqbasketballfoundation.org/wp-content/uploads/2025/08/unnamed.png" },
    { name: "Partner 3", logo: "https://vqbasketballfoundation.org/wp-content/uploads/2025/01/2.png" },
    { name: "Partner 4", logo: "https://vqbasketballfoundation.org/wp-content/uploads/2025/01/3.png" },
    { name: "Partner 5", logo: "https://vqbasketballfoundation.org/wp-content/uploads/2025/01/4.png" },
    { name: "Partner 6", logo: "https://vqbasketballfoundation.org/wp-content/uploads/2025/01/5.png" },
    { name: "Partner 5", logo: "https://vqbasketballfoundation.org/wp-content/uploads/2025/01/6.png" },
    { name: "Partner 6", logo: "https://vqbasketballfoundation.org/wp-content/uploads/2025/01/7.png" },
    { name: "Partner 6", logo: "https://vqbasketballfoundation.org/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-22-at-15.03.59.jpeg" },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://vqbasketballfoundation.org/wp-content/uploads/2025/01/D609554-2-1536x1025.jpg" 
            alt="Basketball Team Huddle" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl text-primary lg:text-7xl font-serif font-bold leading-tight"
            >
              More Than <span className="text-white">A Game</span>.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              We empower young women to become leaders on and off the court through mentorship, education, and community service.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/programs">
                <Button className="btn-primary text-lg px-8 py-3 rounded-full w-full sm:w-auto">
                  Our Programs
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="text-lg px-8 py-3 rounded-full w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-secondary">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>
          
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1519766304800-096cdef43329?auto=format&fit=crop&q=80"
                alt="Player shooting" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Impact Stats */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white text-secondary p-6 rounded-2xl shadow-xl max-w-xs min-h-[140px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={statIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="font-serif font-bold text-2xl text-primary">{heroStats[statIndex].value}</p>
                  <p className="font-medium text-sm text-secondary/80">{heroStats[statIndex].label}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Snippet Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-serif text-secondary mt-2 mb-6">Building Champions for Life</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Victoria's Queens Basketball Foundation is dedicated to the holistic development of young women in Nigeria. We use basketball as a tool for social change, providing elite training alongside life skills and vocational support.
              </p>
              <Link href="/about">
                <Button variant="outline" className="rounded-full px-8 py-6 border-primary text-primary hover:bg-primary hover:text-white">
                  Read Our Story <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg"
                >
                  <img src="https://vqbasketballfoundation.org/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-16-at-06.32.25-1-2048x1603.jpeg" className="w-full h-full object-cover" alt="About VQ 1" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="aspect-square rounded-2xl overflow-hidden shadow-lg"
                >
                  <img src="https://vqbasketballfoundation.org/wp-content/uploads/2025/01/D609719-1536x1019.jpg" className="w-full h-full object-cover" alt="About VQ 2" />
                </motion.div>
              </div>
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="aspect-square rounded-2xl overflow-hidden shadow-lg"
                >
                  <img src="https://vqbasketballfoundation.org/wp-content/uploads/2025/01/D609681-1440x2048.jpg" className="w-full h-full object-cover" alt="About VQ 3" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg"
                >
                  <img src="https://vqbasketballfoundation.org/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-16-at-06.32.22-1.jpeg" className="w-full h-full object-cover" alt="About VQ 4" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visioneer Message Section */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center mb-16"
          >
            <div className="space-y-6">
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Vision & Faith</span>
              <h2 className="text-4xl md:text-5xl font-serif">A Message from Visioneer</h2>
              <div className="space-y-4 text-xl text-white/80 leading-relaxed">
                <p className="font-bold text-white">ABOUT VICTORIA’S QUEENS BASKETBALL FOUNDATION</p>
                <p>
                  Victoria’s Queens Basketball Foundation is a faith-based nonprofit organization dedicated to empowering young girls through basketball. We provide free training, mentorship, and spiritual guidance to help girls from underserved communities thrive physically, mentally, and spiritually.
                </p>
                <p>
                  Our mission is to build strong leaders, foster academic success, and inspire hope through faith and teamwork, creating brighter futures both on and off the court.
                </p>
              </div>
              <p className="text-white/60 italic">Hear from our founder about the vision and passion behind Victoria's Queens.</p>
            </div>
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/gZM_VZbWB3Y" 
                title="Visioneer Message"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-2">Moments of Impact</h2>
              <p className="text-muted-foreground">Glimpses into our training sessions and community events.</p>
            </div>
            <Link href="/gallery">
              <Button variant="ghost" className="text-primary font-semibold group p-0 hover:bg-transparent">
                View full gallery <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mockGalleryItems?.slice(0, 4).map((item, i) => (
              <motion.div 
                key={item.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`aspect-square rounded-2xl overflow-hidden shadow-md group ${i % 3 === 0 ? 'md:col-span-2 md:row-span-2 md:aspect-auto' : ''}`}
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.title || "Gallery Item"} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
            {!galleryItems?.length && (
              [1,2,3,4].map((i) => (
                <div key={i} className="aspect-square bg-muted rounded-2xl animate-pulse" />
              ))
            )}
          </div>
        </div>
      </section>

      {/* Partner With Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary rounded-3xl p-12 text-center text-white mb-20 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10">
              <h2 className="text-4xl font-serif mb-6">Partner With Us</h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Join our mission to transform lives. We're looking for partners who share our commitment to empowering young African women.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-10 h-14 font-bold text-lg">
                  Become a Partner
                </Button>
              </Link>
            </div>
          </motion.div>

          <div className="text-center mb-10">
            <h3 className="text-2xl font-serif text-secondary opacity-60">Supported by Industry Leaders</h3>
          </div>
          
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 2000 })]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="pl-2 basis-1/2 md:basis-1/4 lg:basis-1/6">
                  <div className="py-4 px-1 flex items-center justify-center transition-all">
                    <img src={partner.logo} alt={partner.name} className="h-24 object-cover" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/basketball.png')] opacity-10"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container-custom relative z-10 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Join the Movement</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Whether you want to play, volunteer, or donate, your support helps us create future leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 h-14 rounded-full font-bold">
                Get Involved
              </Button>
            </Link>
            <Link href="/donate">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 hover:text-white text-lg px-8 h-14 rounded-full bg-transparent font-bold">
                Make a Donation
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
