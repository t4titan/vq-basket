import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Programs from "@/pages/Programs";
import Impact from "@/pages/Impact";
import Contact from "@/pages/Contact";
import Donate from "@/pages/Donate";
import NotFound from "@/pages/not-found";
import MeetTheTeam from "@/pages/MeetTheTeam";
import WhatWeDoNigeria from "@/pages/WhatWeDoNigeria";
import WhatWeHaveDone from "@/pages/WhatWeHaveDone";
import ShoeDrive from "@/pages/ShoeDrive";
import Tournament3ON3 from "@/pages/Tournament3ON3";
import Empowerment from "@/pages/Empowerment";
import Ambassadors from "@/pages/Ambassadors";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/impact" component={Impact} />
      <Route path="/team" component={MeetTheTeam} />
      <Route path="/ambassadors" component={Ambassadors} />
      <Route path="/programs" component={Programs} />
      <Route path="/nigeria" component={WhatWeDoNigeria} />
      <Route path="/empowerment" component={Empowerment} />
      <Route path="/history" component={WhatWeHaveDone} />
      <Route path="/shoe-drive" component={ShoeDrive} />
      <Route path="/3on3" component={Tournament3ON3} />
      <Route path="/blog" component={() => <div className="pt-24 text-center"><h1>Blog Coming Soon</h1></div>} />
      <Route path="/contact" component={Contact} />
      <Route path="/donate" component={Donate} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
