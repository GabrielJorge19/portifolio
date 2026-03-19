import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full bg-primary/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">What's Next?</span>
          <h2 className="text-4xl sm:text-6xl font-display font-bold text-white mb-8">
            Get In Touch
          </h2>
          
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
          </p>

          <Button 
            variant="glow" 
            size="lg" 
            className="text-lg px-10 py-6"
            onClick={() => window.location.href = "mailto:hello@example.com"}
          >
            Say Hello
          </Button>

          <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
            
            <p className="text-sm text-muted-foreground font-mono">
              Designed & Built by Ian Dunkerley Clone
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
