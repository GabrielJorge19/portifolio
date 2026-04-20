
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { LanguageSwitch } from "@/components/ui/languageSwitch"
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useLanguages } from '@/context/translationsContext';



export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { translation, profile } = useLanguages();


  const NAV_LINKS = [
    { name: translation.nav.home, href: '/portifolio/#hero' },
    { name: translation.nav.about, href: '/portifolio/#about' },
    { name: translation.nav.projects, href: '/portifolio/#projects' },
    { name: translation.nav.experience, href: '/portifolio/#experience' },
    { name: translation.nav.contact, href: '/portifolio/#contact' },
  ];



  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass-panel border-b border-white/5 shadow-2xl' : 'py-6 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-display font-bold text-foreground relative group">
          {/* GB<span className="text-primary">.</span> */}
          <img src="favicon.png" alt="Gabriel Jorge" width={54} height={54} className="mr-2" />
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={profile.whatsapp}
            target="_blank"
            className="px-5 py-2 rounded-full border border-primary/50 text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
          >
            {translation.nav.cta}
          </a>
          <div className="flex items-center gap-3">
            <LanguageSwitch />
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-background/95 backdrop-blur-xl border-t border-white/5 flex flex-col items-center justify-center gap-8 z-40"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <div className="flex items-center gap-3 pt-8">
              <LanguageSwitch />
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
