import { useLanguages } from '@/context/translationsContext';
import { motion } from 'framer-motion';
import { Github, Linkedin, Phone } from 'lucide-react';

export function Contact() {

  const { translation, profile } = useLanguages();

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
          <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">{translation.contact.subtitle}</span>
          <h2 className="text-4xl sm:text-6xl font-display font-bold text-white mb-8">
            {translation.contact.title}
          </h2>

          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            {translation.contact.text}
          </p>

          <a
            href={profile.whatsapp}
            target="_blank"
            className="px-20 py-5 rounded-full border border-primary/50 text-primary text-2xl font-medium hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
            {translation.contact.cta}
          </a>

          <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex gap-6">
              <a href={profile.github} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href={profile.linkedin} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href={profile.whatsapp} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Phone size={24} />
                <span className="sr-only">WhatsApp</span>
              </a>
            </div>

            <p className="text-sm text-muted-foreground font-mono">
              Designed & Built by {profile.name}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
