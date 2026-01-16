import { motion } from "framer-motion";
import { useTeam } from "@/hooks/use-team";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export default function MeetTheTeam() {
  const { data: team } = useTeam();
  const staff = team?.filter(m => m.type === 'team');

  return (
    <div className="container-custom py-20">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-serif font-bold mb-6">Meet the Team</h1>
        <p className="text-xl text-muted-foreground">
          The dedicated individuals behind Victoria's Queens Basketball Foundation.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {staff?.map((member) => (
          <Card key={member.id} className="overflow-hidden border-none shadow-lg">
            <div className="aspect-square relative">
              <img src={member.imageUrl || "https://images.unsplash.com/photo-1544919978-ddb7105fb2c3?auto=format&fit=crop&q=80"} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-primary font-medium">{member.role}</p>
              <p className="text-sm text-muted-foreground mt-4 line-clamp-3">{member.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
