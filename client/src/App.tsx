import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Services from "@/pages/services";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfUse from "@/pages/terms-of-use";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/serveis" component={Services} />
          <Route path="/sobre-mi" component={About} />
          <Route path="/contacte" component={Contact} />
          <Route path="/politica-privacitat" component={PrivacyPolicy} />
          <Route path="/condicions-us" component={TermsOfUse} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
