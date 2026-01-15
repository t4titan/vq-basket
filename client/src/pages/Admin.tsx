import { useAuth } from "@/hooks/use-auth";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Loader2, LogOut, LayoutDashboard, FileText, Calendar, Users, Image as ImageIcon, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { usePosts, useCreatePost, useDeletePost } from "@/hooks/use-posts";
import { useEvents, useCreateEvent, useDeleteEvent } from "@/hooks/use-events";
import { format } from "date-fns";

export default function Admin() {
  const { user, isLoading, logout } = useAuth();
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  
  // Checking auth
  useEffect(() => {
    if (!isLoading && !user) {
      setLocation("/api/login");
    }
  }, [user, isLoading, setLocation]);

  if (isLoading || !user) {
    return <div className="min-h-screen flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;
  }

  return (
    <div className="min-h-screen bg-muted/20">
      <nav className="bg-secondary text-white p-4 sticky top-0 z-50">
        <div className="container-custom flex justify-between items-center">
           <span className="font-serif font-bold text-xl">VQ Admin</span>
           <div className="flex items-center gap-4">
             <span className="text-sm opacity-80">Welcome, {user.firstName || 'Admin'}</span>
             <Button variant="destructive" size="sm" onClick={() => logout()} className="gap-2">
               <LogOut className="w-4 h-4" /> Logout
             </Button>
           </div>
        </div>
      </nav>

      <div className="container-custom py-8">
        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="bg-white p-1 mb-8 rounded-xl shadow-sm border border-border w-full flex justify-start overflow-x-auto">
            <TabsTrigger value="posts" className="gap-2"><FileText className="w-4 h-4" /> Posts</TabsTrigger>
            <TabsTrigger value="events" className="gap-2"><Calendar className="w-4 h-4" /> Events</TabsTrigger>
            {/* Add other tabs for Team, Gallery, etc. */}
          </TabsList>
          
          <TabsContent value="posts">
            <PostsManager />
          </TabsContent>
          <TabsContent value="events">
            <EventsManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

// Sub-components for Admin Managers
function PostsManager() {
  const { data: posts, isLoading } = usePosts(false); // Fetch all
  const deletePost = useDeletePost();
  
  if (isLoading) return <Loader2 className="animate-spin" />;

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Blog Posts</h2>
        <Button className="btn-primary">Create Post</Button>
      </div>
      
      <div className="space-y-4">
        {posts?.map((post) => (
          <div key={post.id} className="flex items-center justify-between p-4 border rounded-xl hover:bg-muted/30 transition-colors">
            <div>
              <h3 className="font-bold">{post.title}</h3>
              <p className="text-sm text-muted-foreground">{post.published ? 'Published' : 'Draft'}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Edit</Button>
              <Button 
                variant="destructive" 
                size="sm" 
                onClick={() => {
                   if(confirm('Delete this post?')) deletePost.mutate(post.id);
                }}
                disabled={deletePost.isPending}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
        {posts?.length === 0 && <p className="text-muted-foreground text-center py-8">No posts found.</p>}
      </div>
    </div>
  );
}

function EventsManager() {
  const { data: events, isLoading } = useEvents();
  const deleteEvent = useDeleteEvent();

  if (isLoading) return <Loader2 className="animate-spin" />;

  return (
     <div className="bg-white rounded-2xl shadow p-6">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Events</h2>
        <Button className="btn-primary">Add Event</Button>
      </div>
      
      <div className="space-y-4">
        {events?.map((event) => (
          <div key={event.id} className="flex items-center justify-between p-4 border rounded-xl hover:bg-muted/30 transition-colors">
            <div>
              <h3 className="font-bold">{event.title}</h3>
              <p className="text-sm text-muted-foreground">{format(new Date(event.date), 'PP')} at {event.location}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Edit</Button>
              <Button 
                variant="destructive" 
                size="sm"
                onClick={() => {
                   if(confirm('Delete this event?')) deleteEvent.mutate(event.id);
                }}
                disabled={deleteEvent.isPending}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
         {events?.length === 0 && <p className="text-muted-foreground text-center py-8">No events found.</p>}
      </div>
    </div>
  );
}
