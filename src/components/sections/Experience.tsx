import { useLanguages } from '@/context/translationsContext';
import { motion } from 'framer-motion';


export function Experience() {

  const { translation } = useLanguages();

  return (
    <section id="experience" className="py-24 bg-card relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {translation.experience.map((exp: any, index: any) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line & Dot (Desktop) */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
              <div className="hidden md:block absolute left-[50%] top-2 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] -translate-x-1/2 z-10 border-4 border-card"></div>

              {/* Timeline Line & Dot (Mobile) */}
              <div className="md:hidden absolute left-0 top-2 bottom-0 w-px bg-white/10"></div>
              <div className="md:hidden absolute left-[-6px] top-2 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)] z-10 border-2 border-card"></div>

              <div className={`md:w-1/2 flex flex-col ${index % 2 === 0 ? 'md:pr-16 md:ml-0 md:items-end md:text-right' : 'md:pl-16 md:ml-auto md:items-start md:text-left'}`}>
                <span className="text-primary font-mono text-sm mb-2 block">{exp.period}</span>
                <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                <h4 className="text-lg font-medium text-gray-400 mb-4">{exp.company}</h4>
                <div className="glass-panel p-6 rounded-2xl text-muted-foreground w-full">
                  {exp.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
