import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage,
  FormDescription
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { SEO } from "@/components/seo/SEO";
import { CheckCircle2, Star, Trophy, Users, Heart } from "lucide-react";

const registerSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  dob: z.string().min(1, "Date of birth is required"),
  age: z.string().min(1, "Age is required"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  guardianName: z.string().min(2, "Guardian name is required"),
  guardianPhone: z.string().min(10, "Guardian phone is required"),
  programInterest: z.string().min(1, "Please select a program"),
  state: z.string().min(1, "State is required"),
  city: z.string().min(1, "City/Community is required"),
  about: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must provide consent to participate",
  }),
});

type RegisterValues = z.infer<typeof registerSchema>;

export default function Register() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      dob: "",
      age: "",
      phone: "",
      email: "",
      guardianName: "",
      guardianPhone: "",
      programInterest: "",
      state: "",
      city: "",
      about: "",
      consent: false,
    },
  });

  function onSubmit(values: RegisterValues) {
    console.log("Registration attempt:", values);
    setIsSubmitted(true);
    toast({
      title: "Registration Successful",
      description: "Welcome to the VQBF family!",
    });
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background pt-32 pb-20 px-4">
        <SEO title="Registration Successful" />
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600"
          >
            <CheckCircle2 className="w-12 h-12" />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary">Thank You!</h1>
            <p className="text-xl text-muted-foreground">
              Thank you for registering with Victoria's Queens Basketball Foundation. We will be in touch soon.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button asChild size="lg" className="rounded-full px-8">
              <a href="/">Return Home</a>
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <SEO title="Girls Registration" />
      
      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
        <div className="container-custom relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
          >
            Girls <span className="text-primary">Registration</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-serif italic"
          >
            Register to be part of VQ Basketball Foundation programs and activities.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-white/60 max-w-xl mx-auto text-sm"
          >
            Your registration helps VQBF plan trainings, events, and empowerment programs effectively to better serve our community.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 container-custom">
        <div className="max-w-3xl mx-auto">
          <Card className="border-none shadow-2xl rounded-[2.5rem] overflow-hidden bg-card">
            <CardContent className="p-8 md:p-12">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
                  
                  {/* Personal Info */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-border pb-4">
                      <Users className="w-5 h-5 text-primary" />
                      <h2 className="text-2xl font-serif font-bold text-secondary">Personal Information</h2>
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-bold">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter girl's full name" className="h-14 rounded-xl text-lg px-6 bg-muted/30 border-none" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="dob"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-bold">Date of Birth</FormLabel>
                            <FormControl>
                              <Input type="date" className="h-14 rounded-xl text-lg px-6 bg-muted/30 border-none" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="age"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-bold">Age</FormLabel>
                            <FormControl>
                              <Input type="number" placeholder="e.g. 14" className="h-14 rounded-xl text-lg px-6 bg-muted/30 border-none" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-bold">Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter active phone number" className="h-14 rounded-xl text-lg px-6 bg-muted/30 border-none" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-bold">Email Address (Optional)</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="jane@example.com" className="h-14 rounded-xl text-lg px-6 bg-muted/30 border-none" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Guardian Info */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-border pb-4">
                      <Heart className="w-5 h-5 text-primary" />
                      <h2 className="text-2xl font-serif font-bold text-secondary">Guardian Information</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="guardianName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-bold">Parent/Guardian Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter parent/guardian full name" className="h-14 rounded-xl text-lg px-6 bg-muted/30 border-none" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="guardianPhone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-bold">Guardian Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter guardian phone number" className="h-14 rounded-xl text-lg px-6 bg-muted/30 border-none" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Program Interest */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-border pb-4">
                      <Star className="w-5 h-5 text-primary" />
                      <h2 className="text-2xl font-serif font-bold text-secondary">Program Details</h2>
                    </div>
                    <FormField
                      control={form.control}
                      name="programInterest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-bold">Program Interest</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-14 rounded-xl text-lg px-6 bg-muted/30 border-none">
                                <SelectValue placeholder="Select a program" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="training">Basketball Training</SelectItem>
                              <SelectItem value="tournament">3ON3 Tournament</SelectItem>
                              <SelectItem value="clinics">Basketball Clinics</SelectItem>
                              <SelectItem value="empowerment">Empowerment Programs</SelectItem>
                              <SelectItem value="outreach">Outreach Programs</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-bold">State</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter state" className="h-14 rounded-xl text-lg px-6 bg-muted/30 border-none" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-bold">Community / City</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter city or community" className="h-14 rounded-xl text-lg px-6 bg-muted/30 border-none" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="about"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-bold">About You (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about yourself or why you want to join VQBF..." 
                              className="min-h-[120px] rounded-xl text-lg p-6 bg-muted/30 border-none"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Consent */}
                  <div className="pt-6">
                    <FormField
                      control={form.control}
                      name="consent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="w-6 h-6 rounded-md data-[state=checked]:bg-primary"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-medium leading-relaxed">
                              I confirm that the information provided is correct and that I have parental/guardian consent to participate.
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                    {form.formState.errors.consent && (
                      <p className="text-sm font-medium text-destructive mt-2">
                        {form.formState.errors.consent.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-8 space-y-6 text-center">
                    <Button type="submit" size="lg" className="w-full h-16 rounded-2xl text-xl font-bold shadow-xl shadow-primary/20">
                      Register Now
                    </Button>
                    <p className="text-sm text-muted-foreground font-medium italic">
                      Our team will contact you after reviewing your registration.
                    </p>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
