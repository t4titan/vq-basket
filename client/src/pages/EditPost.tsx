import { useState, useEffect } from "react";
import { useLocation, useRoute } from "wouter";
import { usePost, useUpdatePost } from "../hooks/use-posts";
import { RichTextEditor } from "../components/RichTextEditor";
import { Loader2, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function EditPost() {
  const [, params] = useRoute("/edit/:id");
  const id = params ? parseInt(params.id) : 0;
  const [, setLocation] = useLocation();

  const { data: post, isLoading: isLoadingPost, error: loadError } = usePost(id);
  const updatePost = useUpdatePost();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    setIsSubmitting(true);
    setError(null);

    try {
      await updatePost.mutateAsync({
        id,
        title,
        content,
      });
      setLocation(`/post/${id}`);
    } catch (err: any) {
      setError(err.message || "Failed to update post");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoadingPost) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  if (loadError || !post) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
          <h2 className="text-2xl font-bold mb-2">Post not found</h2>
          <Link href="/" className="text-primary hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <Navbar />

      <div className="container max-w-4xl mx-auto px-4 py-8">
        <Link href={`/post/${id}`} className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Article
        </Link>

        <div className="space-y-2 mb-8">
          <h1 className="font-display text-4xl font-bold tracking-tight">Edit Story</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Enter your title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-transparent text-4xl font-bold font-display placeholder:text-muted-foreground/50 border-none px-0 focus:ring-0 focus:outline-none"
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
            <Link href={`/post/${id}`}>
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
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
