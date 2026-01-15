import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      title: "Elite Academy",
      desc: "For advanced players looking to compete at collegiate levels. Includes intensive skills training, strength conditioning, and exposure tournaments.",
      features: ["Advanced skill development", "Strength & conditioning", "College recruiting support"],
      image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80"
    },
    {
      title: "Community League",
      desc: "A recreational league focusing on fundamentals, fun, and teamwork. Open to all skill levels ages 8-16.",
      features: ["Weekly games", "Skill clinics", "End-of-season tournament"],
      image: "https://images.unsplash.com/photo-1533591380348-14193f1de18f?auto=format&fit=crop&q=80"
    },
    {
      title: "Leadership Workshop",
      desc: "Off-court sessions teaching public speaking, financial literacy, and goal setting to prepare athletes for life.",
      features: ["Guest speakers", "Financial literacy", "Career planning"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="pt-20 pb-24">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-serif font-bold text-secondary mb-6">Our Programs</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive pathways for athletic and personal development. Find the program that fits your goals.
          </p>
        </div>

        <div className="space-y-24">
          {programs.map((program, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 mix-blend-multiply z-10" />
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{program.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {program.desc}
                </p>
                <ul className="space-y-3">
                  {program.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 font-medium text-secondary">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
