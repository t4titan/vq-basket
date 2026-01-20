import { usePosts } from "../hooks/use-posts";
import { PostCard } from "../components/PostCard";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Blogs() {
  const { data: posts, isLoading, error } = usePosts();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container max-w-5xl mx-auto px-4 py-12 flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold text-destructive mb-2">Something went wrong</h2>
          <p className="text-muted-foreground mb-6">Failed to load posts. Please try again later.</p>
          <button onClick={() => window.location.reload()} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="container max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6"
          >
            Stories that <span className="text-primary italic">Inspire.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            A dedicated space for sharing impactful stories, insights, and experiences from our community. Explore inspiring journeys, meaningful ideas, and voices that celebrate growth, empowerment, and the love of the game.
          </motion.p>
        </div>
      </section>

      {/* Posts Grid */}
      <main className="flex-1 bg-secondary/30 py-16">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-display text-3xl font-bold">Latest Articles</h2>
            <div className="h-px bg-border flex-1 ml-6 hidden md:block" />
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
            </div>
          ) : posts?.length === 0 ? (
            <div className="text-center py-20 bg-card rounded-2xl border border-dashed border-border">
              <h3 className="text-xl font-medium text-foreground mb-2">No posts yet</h3>
            </div>
          ) : (
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {posts?.map((post) => (
                <motion.div key={post.id} variants={item}>
                  <PostCard post={post} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
