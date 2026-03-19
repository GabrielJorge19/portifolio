
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Code2, MonitorSmartphone, Cpu } from 'lucide-react';
import { useLanguages } from '@/context/translationsContext';

const SKILLS = [
  "HTML5", "CSS3", "JavaScript (ES6+)", "React", "Vue.js", 
  "TypeScript", "Node.js", "Git", "Webpack", "Vite", 
  "Sass/SCSS", "Tailwind CSS", "Next.js", "Figma"
];

export function About() {

  const { translation } = useLanguages();
  
  return (
    <section id="about" className="py-24 bg-card relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* About Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-8 relative inline-block">
              {translation.about.title}
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>{translation.about.text}</p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <MonitorSmartphone size={24} />
                </div>
                <h3 className="text-white font-medium">{translation.about.skills[0]}</h3>
              </div>
              <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-400">
                  <Code2 size={24} />
                </div>
                <h3 className="text-white font-medium">{translation.about.skills[1]}</h3>
              </div>
              <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-400">
                  <Cpu size={24} />
                </div>
                <h3 className="text-white font-medium">{translation.about.skills[2]}</h3>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div 
            id="skills"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-8">{translation.about.skillTitle}</h3>
            <div className="flex flex-wrap gap-3">
              {[...translation.about.topSkill, ...translation.about.complementarySkills].map((skill: any, index: any) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Badge 
                    variant="default" 
                    className="text-sm py-2 px-4 bg-white/5 border border-white/10 text-gray-200 hover:bg-primary/20 hover:text-white hover:border-primary/50 transition-all cursor-default"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
