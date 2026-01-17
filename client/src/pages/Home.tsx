import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, Users, Heart, Calendar, Image as ImageIcon } from "lucide-react";
import { useEvents } from "@/hooks/use-events";
import { useGallery } from "@/hooks/use-gallery";
import { format } from "date-fns";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  const { data: events } = useEvents();
  const { data: galleryItems } = useGallery();

  const partners = [
    { name: "Partner 1", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=40" },
    { name: "Partner 2", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=40" },
    { name: "Partner 3", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=40" },
    { name: "Partner 4", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=40" },
    { name: "Partner 5", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=40" },
    { name: "Partner 6", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=40" },
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
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            <h1 className="text-5xl text-primary lg:text-7xl font-serif font-bold leading-tight">
              More Than <span className="text-white">A Game</span>.
            </h1>
            <p className="text-xl text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We empower young women to become leaders on and off the court through mentorship, education, and community service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/programs">
                <Button className="btn-primary text-lg px-8 py-6 rounded-full w-full sm:w-auto">
                  Our Programs
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="text-lg px-8 py-6 rounded-full w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-secondary">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
          
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
            <div className="absolute -bottom-6 -left-6 z-20 bg-white text-secondary p-6 rounded-2xl shadow-xl max-w-xs">
              <p className="font-serif font-bold text-2xl text-primary">500+</p>
              <p className="font-medium text-sm">Young athletes empowered through our programs since 2020.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Snippet Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <img src="https://vqbasketballfoundation.org/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-16-at-06.32.25-1-2048x1603.jpeg" className="w-full h-full object-cover" alt="About VQ 1" />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img src="https://vqbasketballfoundation.org/wp-content/uploads/2025/01/D609719-1536x1019.jpg" className="w-full h-full object-cover" alt="About VQ 2" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img src="https://vqbasketballfoundation.org/wp-content/uploads/2025/01/D609681-1440x2048.jpg" className="w-full h-full object-cover" alt="About VQ 3" />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <img src="https://vqbasketballfoundation.org/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-16-at-06.32.22-1.jpeg" className="w-full h-full object-cover" alt="About VQ 4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visioneer Message Section */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
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
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Mission</span>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary mt-2 mb-6">Empowering Through Basketball</h2>
            <p className="text-lg text-muted-foreground">
              We are committed to providing more than just sports training; we are building a foundation for life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background p-8 rounded-3xl border border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <Trophy className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-secondary mb-4">Provide Opportunities</h3>
              <p className="text-muted-foreground leading-relaxed">
                Offer free basketball programs to girls from underserved communities, helping them develop athletic skills, teamwork, and discipline.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background p-8 rounded-3xl border border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <Heart className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-secondary mb-4">Provide a Safe Haven</h3>
              <p className="text-muted-foreground leading-relaxed">
                Offer structured, engaging basketball programs that provide a positive alternative to life on the streets, fostering a safe and nurturing environment where girls can thrive.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-background p-8 rounded-3xl border border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <Users className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-secondary mb-4">Develop Skills and Character</h3>
              <p className="text-muted-foreground leading-relaxed">
                Teach basketball fundamentals and teamwork to build physical fitness, discipline, confidence, and leadership skills, helping participants reach their full potential both on and off the court.
              </p>
            </motion.div>
          </div>
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
            {galleryItems?.slice(0, 4).map((item, i) => (
              <div key={item.id} className={`aspect-square rounded-2xl overflow-hidden shadow-md group ${i % 3 === 0 ? 'md:col-span-2 md:row-span-2 md:aspect-auto' : ''}`}>
                <img 
                  src={item.imageUrl} 
                  alt={item.title || "Gallery Item"} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
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
          <div className="bg-primary rounded-3xl p-12 text-center text-white mb-20 shadow-xl relative overflow-hidden">
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
          </div>

          <div className="text-center mb-10">
            <h3 className="text-2xl font-serif text-secondary opacity-60">Supported by Industry Leaders</h3>
          </div>
          
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 3000 })]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/4 lg:basis-1/6">
                  <div className="p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                    <img src={partner.logo} alt={partner.name} className="h-12 object-contain" />
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
        <div className="container-custom relative z-10 text-center">
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
        </div>
      </section>
    </div>
  );
}
