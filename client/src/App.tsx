import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Mission from "@/pages/mission";
import Origin from "@/pages/origin";
import Pipeline from "@/pages/pipeline";
import Team from "@/pages/team";

// Assicura che la pagina inizi sempre dall'alto quando si cambia route
function ScrollToTop() {
  const [pathname] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Mantiene il server attivo facendo una richiesta ogni 5 minuti
function KeepAlive() {
  useEffect(() => {
    const interval = setInterval(() => {
      fetch('/').catch(() => {});
    }, 5 * 60 * 1000); // 5 minuti

    return () => clearInterval(interval);
  }, []);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/mission" component={Mission} />
      <Route path="/origin" component={Origin} />
      <Route path="/pipeline" component={Pipeline} />
      <Route path="/team" component={Team} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <KeepAlive />
        <ScrollToTop />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
