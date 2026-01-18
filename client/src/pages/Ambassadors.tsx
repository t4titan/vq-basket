import { motion } from "framer-motion";
import { SiInstagram, SiTiktok, SiYoutube, SiX, SiFacebook } from "react-icons/si";
import { AmbassadorRegistrationModal } from "@/components/AmbassadorRegistrationModal";

export default function Ambassadors() {
  const socialPlatforms = [
    { key: "instagram", icon: SiInstagram, color: "text-[#E4405F]" },
    { key: "tiktok", icon: SiTiktok, color: "text-black" },
    { key: "youtube", icon: SiYoutube, color: "text-[#FF0000]" },
    { key: "twitter", icon: SiX, color: "text-black" },
    { key: "facebook", icon: SiFacebook, color: "text-[#1877F2]" },
  ];

  const users = [
    {
      id: 1,
      name: "Tewogbade Mololuwa Ayomide",
      bio: "My name is Tewogbade Mololuwa Ayomide. I started playing basketball with WarQueens under Coach Peter Akindele and later joined Dolphins Basketball Club. I was born on October 1, 2007. I have represented Nigeria in the U16 tournament in Ghana (2023) and the U18 tournaments in Ivory Coast and South Africa (2024). I am currently a player for Dolphins Women Basketball Club and Victoria’s Queens Basketball Academy. We are proud to be the 2024 WESIE League champions.",
      imageUrl: "https://vqbasketballfoundation.org/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-16-at-7.20.50-AM-1.jpeg",
      socialMedia: { instagram: "www.instagram.com/mololuwa29" }
    },
    {
      id: 2,
      name: "Anari Favour Joy",
      bio: "My name is Anari Favour Joy. I started playing basketball with WarQueens under Coach Peter Akindele and later joined Dolphins Basketball Club. I was born on May 25, 2009. I proudly represented Nigeria in the U17 3×3 Dakar Olympic Games in 2024. That same year, my teammates and I won a trophy for Victoria’s Queens.",
      imageUrl: "https://vqbasketballfoundation.org/wp-content/uploads/2025/01/basketball-player.png",
      socialMedia: { tiktok: "www.tiktok.com/Fave6335" }
    },
    {
      id: 3,
      name: "Samuel Gbemisola Elizabeth",
      bio: "My name is Samuel Gbemisola Elizabeth, I was born on the 20th of August 2007, I’m 5’9, I play as a shooting guard… I’d like to share a little about myself and my journey in basketball… Growing up, I was always curious about trying different activities, but the day I picked up a basketball, everything changed. I started playing basketball 5 years ago under hope for girls academy. At first, I wasn’t very good but I kept practicing and still practicing. Over the time basketball became more than just a sport for me. I have represented Nigeria in the U16 tournament in Ghana (2023) and also in the U18 tournament in Côte d’Ivoire (2024). I am currently playing for dolphins women’s basketball club and Victoria’s queens basketball academy. We are the champions of the 2024 wesie league.",
      imageUrl: "https://vqbasketballfoundation.org/wp-content/uploads/2025/01/basketball-player-1-768x709.png",
      socialMedia: {}
    }
  ];

  return (
    <div className="container-custom py-20">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-serif font-bold mb-6">Brand Ambassadors</h1>
        <p className="text-xl text-muted-foreground">
          Inspiring the next generation of athletes through excellence, character, and leadership.
        </p>
      </div>

      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mb-12"
      >
        <div className="bg-secondary rounded-3xl p-10 md:p-6 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10 space-y-4">
            <div className="space-y-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              <p className="font-serif italic">
                “Welcome to the VQBF Brand Ambassador page, where we partner with girls at all levels who have a strong pulse for community and servant leadership.”
              </p>
              <p className="text-[16px]">
                Our ambassadors represent more than basketball — they embody purpose, impact, and a commitment to uplifting others.
              </p>
              <p className="text-[16px]">
                If you believe in using your voice, influence, and passion to make a difference, we’d love to hear from you.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 space-y-6">
              <p className="text-[16px] font-medium text-white/80">
                Think this is you? Click below to apply and become the next VQBF Brand Ambassador.
              </p>

              <AmbassadorRegistrationModal>
                <button className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-4 text-sm font-bold shadow-lg hover:scale-105 transition-all">
                  Apply to Become a Brand Ambassador
                </button>
              </AmbassadorRegistrationModal>
            </div>
          </div>
        </div>
      </motion.section>

      <div className="grid gap-12 max-w-5xl mx-auto mb-24">
        {users.map((ambassador) => (
          <motion.div 
            key={ambassador.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl border border-border flex flex-col md:flex-row items-center p-8 md:p-12 gap-12"
          >
            <div className="w-full md:w-2/5 aspect-[4/5] relative rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <img 
                src={ambassador.imageUrl} 
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

              <div className="flex items-center gap-4 pt-4 border-t border-border">
                {socialPlatforms.map(({ key, icon: Icon, color }) => {
                  const link = (ambassador.socialMedia as any)[key];
                  if (!link) return null;

                  return (
                    <motion.a
                      key={key}
                      href={link.startsWith("http") ? link : `https://${link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <Icon className={`w-6 h-6 ${color} drop-shadow-sm`} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
