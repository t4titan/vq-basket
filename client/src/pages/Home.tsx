import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, Users, Heart, Calendar } from "lucide-react";
import { useEvents } from "@/hooks/use-events";
import { format } from "date-fns";

export default function Home() {
  const { data: events } = useEvents();

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-secondary text-white overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
        </div>

        {/* Hero Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
           {/* Unsplash: Female basketball players huddled together representing teamwork */}
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
          
          {/* Floating Image Card */}
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Unsplash: determined female basketball player shooting */}
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

      {/* Mission Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Mission</span>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary">Building Champions for Life</h2>
            <p className="text-lg text-muted-foreground">
              We believe in the transformative power of sports. Our foundation focuses on three key pillars to ensure holistic development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Trophy, title: "Athletic Excellence", desc: "Elite training and competitive opportunities to develop skills and sportsmanship." },
              { icon: Users, title: "Leadership", desc: "Mentorship programs designed to build confidence, character, and leadership skills." },
              { icon: Heart, title: "Community Impact", desc: "Service projects that teach the value of giving back and civic engagement." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-border/50 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Events Preview */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-2">Upcoming Events</h2>
              <p className="text-muted-foreground">Join us at our next game or workshop.</p>
            </div>
            <Link href="/events">
              <Button variant="link" className="text-primary font-semibold group p-0">
                View all events <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events?.slice(0, 3).map((event) => (
              <div key={event.id} className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-muted">
                  {event.imageUrl ? (
                    <img 
                      src={event.imageUrl} 
                      alt={event.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-secondary/5 text-muted-foreground">
                      <Calendar className="w-12 h-12" />
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-bold text-secondary shadow-sm">
                    {format(new Date(event.date), "MMM d")}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{event.title}</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="truncate">{event.location}</span>
                </p>
              </div>
            ))}
            
            {!events?.length && (
              <div className="col-span-full text-center py-12 bg-muted/30 rounded-2xl border border-dashed border-border">
                <Calendar className="w-12 h-12 mx-auto text-muted-foreground mb-3" />
                <p className="text-muted-foreground">No upcoming events scheduled at the moment.</p>
              </div>
            )}
          </div>
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
