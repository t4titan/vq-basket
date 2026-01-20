import { Link } from "wouter";
import { format } from "date-fns";
import { type Post } from "../../../shared/schema";
import { ArrowRight, Calendar, Trash2, Edit } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";
import { useDeletePost } from "../hooks/use-posts";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const deletePost = useDeletePost();

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-card p-6 shadow-sm border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
      <div>
        <div className="flex items-center text-xs text-muted-foreground mb-3 font-medium tracking-wide uppercase">
          <Calendar className="mr-1.5 h-3.5 w-3.5" />
          {format(new Date(post.createdAt), "MMMM d, yyyy")}
        </div>

        <Link href={`/post/${post.id}`}>
          <h2 className="mb-3 font-display text-2xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors cursor-pointer">
            {post.title}
          </h2>
        </Link>

        <p className="mb-6 text-muted-foreground line-clamp-3 text-sm leading-relaxed">
          {post.excerpt}
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-border/50 pt-4">
        <Link href={`/post/${post.id}`} className="inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary/80">
          Read Article <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>

        <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Link href={`/edit/${post.id}`}>
            <button className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full transition-colors" title="Edit">
              <Edit className="h-4 w-4" />
            </button>
          </Link>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-full transition-colors" title="Delete">
                <Trash2 className="h-4 w-4" />
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your post entitled "{post.title}".
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction 
                  onClick={() => deletePost.mutate(post.id)}
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}
