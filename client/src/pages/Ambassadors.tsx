import { motion } from "framer-motion";
import { useTeamMembers } from "@/hooks/use-team";
import { SiInstagram } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Ambassadors() {
  const { data: team } = useTeamMembers();
  const ambassadors = team?.filter(m => m.type === 'ambassador');

  return (
    <div className="container-custom py-20">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-serif font-bold mb-6">Brand Ambassadors</h1>
        <p className="text-xl text-muted-foreground">
          Inspiring the next generation of athletes through excellence, character, and leadership.
        </p>
      </div>

      <div className="grid gap-12 max-w-5xl mx-auto mb-24">
        {ambassadors?.map((ambassador) => (
          <motion.div 
            key={ambassador.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl border border-border flex flex-col md:flex-row items-center p-8 md:p-12 gap-12"
          >
            <div className="w-full md:w-2/5 aspect-[4/5] relative rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <img 
                src={ambassador.imageUrl || "https://images.unsplash.com/photo-1544919978-ddb7105fb2c3?auto=format&fit=crop&q=80"} 
                alt={ambassador.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="w-full md:w-3/5 space-y-6">
              <div className="space-y-2">
                <h3 className="text-3xl font-serif font-bold text-secondary">Meet Our Ambassador</h3>
                <p className="text-xl font-bold text-primary uppercase tracking-tight">{ambassador.name}</p>
              </div>
              
              <div className="text-lg text-muted-foreground leading-relaxed">
                <p>{ambassador.bio}</p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <SiInstagram className="w-6 h-6 text-[#E4405F]" />
                <span className="font-bold text-secondary hover:text-primary transition-colors cursor-pointer">
                  {ambassador.name.split(' ')[0].toLowerCase()}{ambassador.id}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
        
        {(!ambassadors || ambassadors.length === 0) && (
          <div className="text-center py-20 bg-muted rounded-3xl border-2 border-dashed">
            <p className="text-xl text-muted-foreground font-medium">Our ambassadors will be featured here soon.</p>
          </div>
        )}
      </div>

      {/* Ambassador CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-secondary rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          {/* Subtle background pattern/glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10 space-y-8">
            <div className="space-y-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              <p className="font-serif italic">
                “Welcome to the VQBF Brand Ambassador page, where we partner with girls at all levels who have a strong pulse for community and servant leadership.”
              </p>
              <p>
                Our ambassadors represent more than basketball — they embody purpose, impact, and a commitment to uplifting others.
              </p>
              <p>
                If you believe in using your voice, influence, and passion to make a difference, we’d love to hear from you.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 space-y-6">
              <p className="text-xl font-medium text-white/80">
                Think this is you? Click below to apply and become the next VQBF Brand Ambassador.
              </p>
              
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-16 text-lg font-bold shadow-lg hover:scale-105 transition-all">
                  Apply to Become a Brand Ambassador
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
