import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Impact from "./pages/Impact";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import NotFound from "./pages/not-found";
import MeetTheTeam from "./pages/MeetTheTeam";
import WhatWeDoNigeria from "./pages/WhatWeDoNigeria";
import WhatWeHaveDone from "./pages/WhatWeHaveDone";
import ShoeDrive from "./pages/ShoeDrive";
import Tournament3ON3 from "./pages/Tournament3ON3";
import Empowerment from "./pages/Empowerment";
import Ambassadors from "./pages/Ambassadors";
import Gallery from "./pages/Gallery";
import AdminLogin from "./pages/AdminLogin";
import Register from "./pages/Register";
import CreatePost from "./pages/CreatePost";

import { SEO } from "./components/seo/SEO";
import Blogs from "./pages/Blogs";
import PostDetail from "./pages/PostDetail";
import EditPost from "./pages/EditPost";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/admin" component={AdminLogin} />
      <Route path="/register" component={Register} />
      <Route path="/create-post" component={CreatePost} />
      <Route path="/post/:id" component={PostDetail} />
      <Route path="/edit/:id" component={EditPost} />
      <Route path="/about">
        <SEO title="About Us" />
        <About />
      </Route>
      <Route path="/impact">
        <SEO title="Our Impact" />
        <Impact />
      </Route>
      <Route path="/team">
        <SEO title="Meet the Team" />
        <MeetTheTeam />
      </Route>
      <Route path="/ambassadors">
        <SEO title="Brand Ambassadors" />
        <Ambassadors />
      </Route>
      <Route path="/gallery">
        <SEO title="Gallery" />
        <Gallery />
      </Route>
      <Route path="/programs">
        <SEO title="Our Programs" />
        <Programs />
      </Route>
      <Route path="/nigeria">
        <SEO title="What We Do - Nigeria" />
        <WhatWeDoNigeria />
      </Route>
      <Route path="/empowerment">
        <SEO title="Empowerment" />
        <Empowerment />
      </Route>
      <Route path="/history">
        <SEO title="What We Have Done" />
        <WhatWeHaveDone />
      </Route>
      <Route path="/shoe-drive">
        <SEO title="Shoe Drive" />
        <ShoeDrive />
      </Route>
      <Route path="/3on3">
        <SEO title="3ON3 Tournament" />
        <Tournament3ON3 />
      </Route>
      <Route path="/blog">
        <SEO title="Blogs and News" />
        <Blogs />
      </Route>
      <Route path="/contact">
        <SEO title="Contact Us" />
        <Contact />
      </Route>
      <Route path="/donate">
        <SEO title="Donate" />
        <Donate />
      </Route>
      <Route>
        <SEO title="404 Not Found" />
        <NotFound />
      </Route>
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
