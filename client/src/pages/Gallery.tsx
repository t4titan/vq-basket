import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Trophy, 
  Users, 
  Target, 
  Heart, 
  Play, 
  Maximize2,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const categories = [
  "All",
  "3ON3 Tournament",
  "Basketball Clinics",
  "Training Sessions",
  "Outreach Programs",
  "Empowerment Programs",
  "Competitions"
];

const galleryItems = [
  {
    id: 1,
    type: "image",
    category: "3ON3 Tournament",
    url: "https://vqbasketballfoundation.org/wp-content/uploads/2024/05/3on3-1.jpg",
    caption: "3ON3 Tournament – Lagos"
  },
  {
    id: 2,
    type: "video",
    category: "Basketball Clinics",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    thumbnail: "https://vqbasketballfoundation.org/wp-content/uploads/2024/05/clinic-thumb.jpg",
    title: "Summer Basketball Clinic 2024"
  },
  {
    id: 3,
    type: "image",
    category: "Empowerment Programs",
    url: "https://vqbasketballfoundation.org/wp-content/uploads/2024/05/empowerment-1.jpg",
    caption: "Vocational Skills Training"
  },
  {
    id: 4,
    type: "video",
    category: "3ON3 Tournament",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    thumbnail: "https://vqbasketballfoundation.org/wp-content/uploads/2024/05/3on3-thumb.jpg",
    title: "Tournament Highlights"
  },
  {
    id: 5,
    type: "image",
    category: "Outreach Programs",
    url: "https://vqbasketballfoundation.org/wp-content/uploads/2024/05/outreach-1.jpg",
    caption: "Community Outreach – Ogun"
  },
  {
    id: 6,
    type: "image",
    category: "Training Sessions",
    url: "https://vqbasketballfoundation.org/wp-content/uploads/2024/05/training-1.jpg",
    caption: "Elite Training Session"
  }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedMedia, setSelectedMedia] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="bg-secondary py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
        <div className="container-custom relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
          >
            VQBF <span className="text-primary">Gallery</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto italic font-serif"
          >
            “Moments, memories, and milestones from our journey of empowering young girls.”
          </motion.p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-12 border-b border-border sticky top-20 bg-background/80 backdrop-blur-md z-30">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-4 overflow-x-auto pb-2 no-scrollbar">
            <Filter className="w-5 h-5 text-muted-foreground shrink-0" />
            <div className="flex gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? "default" : "outline"}
                  onClick={() => setActiveCategory(cat)}
                  className="rounded-full whitespace-nowrap"
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 container-custom">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative group cursor-pointer overflow-hidden rounded-[2rem] shadow-xl border border-border bg-card"
                onClick={() => setSelectedMedia(item)}
              >
                <div className="aspect-[4/3] relative">
                  <img 
                    src={item.type === 'video' ? item.thumbnail : item.url} 
                    alt={item.caption || item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    {item.type === 'video' ? (
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-2xl">
                        <Play className="w-8 h-8 fill-current ml-1" />
                      </div>
                    ) : (
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                        <Maximize2 className="w-8 h-8" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">{item.category}</span>
                  <p className="font-serif font-bold text-lg">{item.caption || item.title}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-video rounded-[2.5rem] overflow-hidden bg-black shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-6 right-6 z-50 text-white hover:bg-white/10 rounded-full w-12 h-12"
                onClick={() => setSelectedMedia(null)}
              >
                <Users className="w-6 h-6 rotate-45" /> {/* Close icon workaround with lucide */}
              </Button>

              {selectedMedia.type === 'video' ? (
                <iframe
                  src={`${selectedMedia.url}?autoplay=1`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <img 
                  src={selectedMedia.url} 
                  alt={selectedMedia.caption} 
                  className="w-full h-full object-contain"
                />
              )}
              
              <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-2xl font-serif font-bold">{selectedMedia.caption || selectedMedia.title}</p>
                <p className="text-white/60 uppercase text-xs font-bold tracking-widest mt-2">{selectedMedia.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="py-24 container-custom">
        <div className="bg-primary rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl md:text-6xl font-serif font-bold">Be Part of the Story</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto italic">
              Join us in our mission to empower the next generation of female leaders in Nigeria.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <Link href="/donate">
                <Button size="lg" variant="secondary" className="rounded-full px-12 h-18 text-xl font-bold shadow-xl">
                  Support Our Programs
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white rounded-full px-12 h-18 text-xl font-bold backdrop-blur-md">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
