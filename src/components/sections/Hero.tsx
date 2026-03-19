import { useLanguages } from '@/context/translationsContext';
import { motion } from 'framer-motion';

export function Hero() {


  const { translation, profile } = useLanguages();


  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/bg-mesh.png`} 
          alt="" 
          className="w-full h-full object-cover opacity-50 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/80 to-background" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="relative">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-7xl sm:text-8xl lg:text-[120px] font-display font-black leading-none text-outline transition-all duration-500 cursor-default select-none"
            >
              Welcome.
            </motion.h1>
            <div className="absolute top-1/2 left-4 w-20 h-20 bg-primary/30 blur-[50px] -z-10 rounded-full" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
              {translation.hero.title} <span className='text-white font-medium'>{profile.name}</span>, {translation.hero.subtitle}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <a 
              href="#projects" 
              className="px-8 py-4 rounded-xl bg-white text-background font-bold hover:bg-gray-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              {translation.hero.cta}
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-xl bg-transparent text-white font-bold border border-white/20 hover:bg-white/5 transition-colors"
            >
              {translation.hero.contactMe}
            </a>
          </motion.div>
        </motion.div>

        {/* 3D Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 0.4, duration: 1, type: "spring" }}
          className="relative w-full aspect-square max-w-lg mx-auto lg:ml-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-full blur-[80px] -z-10" />
          <motion.img 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            src={`${import.meta.env.BASE_URL}images/hero-3d-laptop.png`}
            alt="3D Developer Setup" 
            className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Decorative Wave Divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-[50px] sm:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C73.23,28.62,146.2,50.7,223,59.3,255.85,63.02,289.47,60.83,321.39,56.44Z" className="fill-card"></path>
        </svg>
      </div>
    </section>
  );
}
