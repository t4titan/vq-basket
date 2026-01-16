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
            src="https://images.unsplash.com/photo-1544919978-ddb7105fb2c3?auto=format&fit=crop&q=80" 
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
            <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight">
              More Than <span className="text-primary">A Game</span>.
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
                  <img src="https://images.unsplash.com/photo-1544919978-ddb7105fb2c3?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="About VQ 1" />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1519766304800-096cdef43329?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="About VQ 2" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1544919978-ddb7105fb2c3?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="About VQ 3" />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1519766304800-096cdef43329?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="About VQ 4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visioneer Message Section */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">A Message from Visioneer</h2>
            <p className="text-xl text-white/80">Hear from our founder about the vision and passion behind Victoria's Queens.</p>
          </div>
          <div className="max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder YouTube video
              title="Visioneer Message"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
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
              <Button variant="link" className="text-primary font-semibold group p-0">
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
