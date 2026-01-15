import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertDonationSchema, type InsertDonation } from "@shared/schema";
import { useCreateDonation } from "@/hooks/use-donations";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Heart, Check } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

export default function Donate() {
  const { toast } = useToast();
  const createDonation = useCreateDonation();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [success, setSuccess] = useState(false);

  const form = useForm<InsertDonation>({
    resolver: zodResolver(insertDonationSchema),
    defaultValues: {
      donorName: "",
      amount: 5000, // cents
      currency: "USD",
      status: "completed", // Mocking success
    },
  });

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    form.setValue("amount", amount * 100);
  };

  const onSubmit = (data: InsertDonation) => {
    createDonation.mutate(data, {
      onSuccess: () => {
        setSuccess(true);
        toast({
          title: "Thank You!",
          description: "Your donation has been received.",
        });
      },
      onError: () => {
        toast({
          title: "Error",
          description: "Something went wrong processing your donation.",
          variant: "destructive",
        });
      },
    });
  };

  if (success) {
    return (
      <div className="pt-24 pb-32 container-custom flex flex-col items-center text-center">
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8 animate-in zoom-in duration-500">
          <Check className="w-12 h-12" />
        </div>
        <h1 className="text-4xl font-serif font-bold text-secondary mb-4">Thank You for Your Generosity!</h1>
        <p className="text-xl text-muted-foreground max-w-lg">
          Your support helps us continue empowering young athletes. A receipt has been sent to your email.
        </p>
        <Button onClick={() => setSuccess(false)} className="mt-8 btn-primary">Donate Again</Button>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-24">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif font-bold text-secondary mb-6">Support Our Mission</h1>
          <p className="text-xl text-muted-foreground">
            Your contribution directly funds scholarships, equipment, and mentorship programs.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[25, 50, 100, 250].map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => handleAmountClick(amt)}
                className={cn(
                  "py-4 rounded-xl border-2 text-xl font-bold transition-all",
                  selectedAmount === amt 
                    ? "border-primary bg-primary/5 text-primary" 
                    : "border-border hover:border-primary/50 text-muted-foreground"
                )}
              >
                ${amt}
              </button>
            ))}
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-4">
                 <h3 className="text-lg font-bold">Your Information</h3>
                 <FormField
                  control={form.control}
                  name="donorName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="h-12 rounded-xl" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                     <FormItem className="hidden">
                       <Input {...field} type="number" />
                     </FormItem>
                  )}
                />
              </div>

              {/* Payment Mockup */}
              <div className="p-6 bg-muted/50 rounded-xl border border-border">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Payment Details (Secure)</h3>
                <div className="space-y-4">
                   <Input placeholder="Card Number" className="bg-white" disabled />
                   <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="MM/YY" className="bg-white" disabled />
                      <Input placeholder="CVC" className="bg-white" disabled />
                   </div>
                   <p className="text-xs text-muted-foreground flex items-center gap-1">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                     This is a demo payment form. No real charge will occur.
                   </p>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full h-14 text-lg rounded-xl btn-primary gap-2"
                disabled={createDonation.isPending}
              >
                {createDonation.isPending ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Heart className="w-5 h-5 fill-current" />
                )}
                Donate ${selectedAmount || (form.getValues("amount") / 100)}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
