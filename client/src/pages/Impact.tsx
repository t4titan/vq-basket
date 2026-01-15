import { motion } from "framer-motion";
import { Award, GraduationCap, Users } from "lucide-react";

export default function Impact() {
  const stats = [
    { number: "500+", label: "Girls Served", icon: Users },
    { number: "100%", label: "Graduation Rate", icon: GraduationCap },
    { number: "50+", label: "Scholarships Earned", icon: Award },
  ];

  return (
    <div className="pt-20 pb-24">
      {/* Stats Hero */}
      <section className="container-custom mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-serif font-bold text-secondary mb-6">Our Impact</h1>
          <p className="text-xl text-muted-foreground">
            Measuring success not just in wins, but in lives changed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-lg border border-border text-center"
            >
              <stat.icon className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-5xl font-bold text-secondary mb-2">{stat.number}</h2>
              <p className="text-muted-foreground font-medium text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary text-white py-24">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">Stories of Change</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-card bg-white/10 p-8 rounded-2xl border-white/10">
              <p className="text-lg italic text-white/90 mb-6 leading-relaxed">
                "Before joining Victoria's Queens, I didn't think college was an option for me. The mentorship and academic support I received gave me the confidence to apply. I'm now a sophomore on a full scholarship."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-xl">S</div>
                <div>
                  <h4 className="font-bold">Sarah Jenkins</h4>
                  <p className="text-sm opacity-70">Alumni, Class of 2022</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card bg-white/10 p-8 rounded-2xl border-white/10">
              <p className="text-lg italic text-white/90 mb-6 leading-relaxed">
                "The foundation taught my daughter that she is capable of anything. The leadership skills she learned on the court have made her a leader in her school community."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center font-bold text-xl text-secondary">M</div>
                <div>
                  <h4 className="font-bold">Michelle Obama</h4>
                  <p className="text-sm opacity-70">Parent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
