import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-purple-500/10 blur-[100px] -z-10" />
      
      <div className="text-center z-10 glass-panel p-12 rounded-3xl">
        <h1 className="text-8xl font-display font-black text-outline mb-4">404</h1>
        <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <Link href="/" className="inline-block">
          <Button variant="glow" size="lg">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
