import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home.tsx";
import NotFound from "@/pages/not-found";
import { TranslationsProvider } from "@/context/translationsContext"
import AutomacaoWeb from "./pages/projcts/automacao-web";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/automacao-web" component={AutomacaoWeb} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <TranslationsProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TranslationsProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
