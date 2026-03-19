import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const PROJECTS = [
  {
    title: "DJ Booking Platform",
    description: "A comprehensive booking and management platform for professional DJs. Features include real-time calendar syncing, automated invoicing, and a custom CRM dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe API"],
    link: "#",
    github: "#",
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "eCommerce Storefront",
    description: "High-performance headless eCommerce solution built with Next.js and Shopify. Includes advanced product filtering, cart management, and seamless checkout flow.",
    tech: ["Next.js", "TypeScript", "Shopify GraphQl", "Tailwind"],
    link: "#",
    github: "#",
    color: "from-purple-500 to-pink-400"
  },
  {
    title: "React Analytics Dashboard",
    description: "A beautiful, data-dense analytics dashboard for SaaS companies. Visualizes complex metrics using custom D3 charts with a highly responsive grid layout.",
    tech: ["React", "D3.js", "Framer Motion", "Firebase"],
    link: "#",
    github: "#",
    color: "from-orange-500 to-red-400"
  },
  {
    title: "Developer Portfolio",
    description: "A minimalist, high-performance personal portfolio website featuring 3D illustrations, smooth scroll animations, and dynamic CSS effects.",
    tech: ["React", "Vite", "Tailwind CSS", "Three.js"],
    link: "#",
    github: "#",
    color: "from-emerald-400 to-cyan-400"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-4 relative inline-block">
            Selected Work
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mt-4">
            A showcase of some of my recent projects. I've built everything from complex web applications to beautiful marketing sites.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              
              <div className="relative h-full glass-panel p-8 rounded-3xl border border-white/5 group-hover:border-white/20 transition-colors duration-500 flex flex-col">
                
                {/* Project Header */}
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 text-muted-foreground">
                    <a href={project.github} className="hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.link} className="hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-8 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
