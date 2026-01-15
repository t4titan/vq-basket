import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="pt-20 pb-24">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Our Story</span>
          <h1 className="text-5xl md:text-6xl font-serif text-secondary mb-6">Empowering Through Sport</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Founded with a vision to create opportunities for young women in Victoria, we leverage the discipline of basketball to teach life lessons that extend far beyond the court.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5]">
             {/* Unsplash: Coach mentoring a player */}
             <img 
              src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&q=80"
              alt="Mentorship" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold">History & Vision</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                The Victoria's Queens Basketball Foundation began as a small community initiative to provide safe recreational spaces for girls. We noticed that while boys had ample leagues and support, girls often lacked the same resources and encouragement to pursue athletic excellence.
              </p>
              <p>
                Today, we have grown into a comprehensive organization offering elite training, academic support, and leadership development. Our vision is a world where every girl, regardless of her background, has the confidence and skills to achieve her dreams.
              </p>
              <p>
                We believe that the resilience learned in the fourth quarter translates directly to resilience in the boardroom, classroom, and community.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-secondary text-white rounded-3xl p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Our Core Values</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {[
              { title: "Integrity", desc: "Doing the right thing, even when no one is watching." },
              { title: "Teamwork", desc: "Success is sweeter when shared with others." },
              { title: "Resilience", desc: "Bouncing back stronger from every setback." },
              { title: "Service", desc: "Using our talents to uplift our community." }
            ].map((value, i) => (
              <div key={i} className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold mb-3 text-primary">{value.title}</h3>
                <p className="text-white/80">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
