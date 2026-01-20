import { useState } from "react";
import { useLocation } from "wouter";
import { useCreatePost } from "../hooks/use-posts";
import { RichTextEditor } from "../components/RichTextEditor";
import { Loader2, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { SEO } from "../components/seo/SEO";

export default function CreatePost() {
  const [, setLocation] = useLocation();
  const createPost = useCreatePost();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setError("Please provide both a title and content.");
      return;
    }

    // Simple check to see if content is just empty HTML tags
    if (content === '<p></p>' || content === '<p><br></p>') {
      setError("Please write some content for your post.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await createPost.mutateAsync({
        title,
        content,
      });
      setLocation("/");
    } catch (err: any) {
      setError(err.message || "Failed to create post");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <SEO title="Meet the Team" />

      <div className="container max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Feed
        </Link>

        <div className="space-y-2 mb-8">
          <h1 className="font-display text-4xl font-bold tracking-tight">Create New Story</h1>
          <p className="text-muted-foreground">Share your thoughts with the world. Use the editor below to format your post.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Enter your title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-transparent text-4xl font-bold font-display placeholder:text-muted-foreground/50 border-none px-0 focus:ring-0 focus:outline-none"
              autoFocus
            />
            <div className="h-px w-full bg-border" />
          </div>

          <div className="min-h-[400px]">
            <RichTextEditor 
              content={content} 
              onChange={setContent} 
            />
          </div>

          {error && (
            <div className="p-4 rounded-lg bg-destructive/10 text-destructive text-sm font-medium border border-destructive/20">
              {error}
            </div>
          )}

          <div className="flex justify-end pt-4 border-t border-border">
            <Link href="/">
              <button
                type="button"
                className="mr-4 px-6 py-2.5 rounded-full text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              disabled={isSubmitting || !title || !content}
              className="
                px-8 py-2.5 rounded-full font-semibold text-sm
                bg-primary text-primary-foreground shadow-lg shadow-primary/25
                hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5
                active:translate-y-0 active:shadow-md
                disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                transition-all duration-200 ease-out flex items-center
              "
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Publishing...
                </>
              ) : (
                "Publish Story"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
