import { useLanguages } from '@/context/translationsContext';
import { motion } from 'framer-motion';

export function Education() {
  const { translation } = useLanguages();

  const edu = translation.education;
  const langs = translation.languages;

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-foreground mb-4">
            {edu?.title ?? 'Education'}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            {edu?.items?.map((item: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="mb-6"
              >
                <h3 className="text-xl font-semibold text-foreground">{item.degree}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.finish}</p>
              </motion.div>
            ))}
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className=""
            >
              <h3 className="text-2xl font-semibold text-foreground mb-4">{langs?.title ?? 'Languages'}</h3>
              <ul className="space-y-4">
                {langs?.items?.map((l: any, i: number) => (
                  <li key={i} className="">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">{l.name} — {l.level}</p>
                        {l.details && <p className="text-sm text-muted-foreground">{l.details}</p>}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
