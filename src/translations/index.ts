// texts.js
export const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      skills: "Habilidades",
      projects: "Projetos",
      experience: "Experiência",
      contact: "Contato",
      cta: "Diga olá"
    },
    hero: {
      title: "Olá, sou",
      subtitle: "desenvolvedor full stack e engenheiro da computação. Projeto e construo sistemas completos, de apps mobile a APIs, com foco em performance, escalabilidade e impacto real, unindo forte raciocínio lógico a código limpo e sustentável.",
      cta: "Ver projetos",
      contactMe: "Contatar-me"
    },
    about: {
      title: "Sobre mim",
      text: "Sou um desenvolvedor full stack apaixonado por criar soluções completas e reais. Desenvolvo aplicações web e mobile escaláveis, com interfaces intuitivas e backends eficientes, focando em performance, funcionamento offline e impacto por meio de sistemas bem estruturados.",
      skillTitle: "Ferramentas",
      skills: ["Desing responsivo", "Código limpo", "Performance"],
      topSkill: ["Typescrypt", "React tsx", "React Native", "Firebase", "Supabase", "Postgres", "Node.js", "Next.js"],
      complementarySkills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Git", "Webpack", "Vite", "Sass/SCSS", "Tailwind CSS", "Figma"]
    },
    projects: {
      title: "Projetos",
      description: "Uma mostra de alguns dos meus projetos recentes. Construí tudo desde aplicativos web complexos até sites de marketing incríveis.",
      data: [{
        title: "Plataforma de DJ",
        description: "A comprehensive booking and management platform for professional DJs. Features include real-time calendar syncing, automated invoicing, and a custom CRM dashboard.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
        links: {
          github: "",
          website: ""
        }
      }, {
        title: "eCommerce ",
        description: "High-performance headless eCommerce solution built with Next.js and Shopify. Includes advanced product filtering, cart management, and seamless checkout flow.",
        technologies: ["Next.js", "TypeScript", "Shopify GraphQl", "Tailwind"],
        links: {
          github: "",
          website: ""
        }
      }, {
        title: "Dashboard de Analytics React",
        description: "A beautiful, data-dense analytics dashboard for SaaS companies. Visualizes complex metrics using custom D3 charts with a highly responsive grid layout.",
        technologies: ["React", "D3.js", "Framer Motion", "Firebase"],
        links: {
          github: "",
          website: ""
        }

      }, {
        title: "Portfolio de desenvolvedor",
        description: "A minimalist, high-performance personal portfolio website featuring 3D illustrations, smooth scroll animations, and dynamic CSS effects.",
        technologies: ["React", "Vite", "Tailwind CSS", "Three.js"],
        links: {
          github: "",
          website: ""
        }
      }]
    },
    experience: [{
      period: "11/2024 — Presente",
      role: "Gestor de contratos",
      company: "Cibam engenharia",
      description: `Coordenação operacional de contrato de manutenção com mais de 5.000 pontos de atendimento em São Paulo, liderando 10 equipes e cerca de 30 profissionais. Responsável pelo planejamento das atividades, gestão de recursos e acompanhamento de indicadores para garantir o cumprimento de metas e níveis de serviço. Atuação na organização de fluxos de trabalho, resolução de incidentes e desenvolvimento das equipes por meio de alinhamentos e feedbacks. Utilização de ferramentas digitais e dispositivos móveis para monitoramento das operações e melhoria contínua dos processos.`
    },
    // {
    //   period: "08/2020 - Presente",
    //   role: "Desenvolvedor full-stack",
    //   company: "Freelancer",
    //   description: `Desenvolvimento completo de um ecossistema digital, incluindo site responsivo, aplicativo mobile e servidor integrado.
    //       Interfaces modernas e responsivas com React.js e React Native.
    //       API desenvolvida em Node.js com Express.
    //       Integração com banco de dados SQL.
    //       Implementação de autenticação de usuários, upload de arquivos e sincronização offline.
    //       Atuação em todo o ciclo de desenvolvimento: arquitetura, testes e deploy.`,
    // }
  ],
    contact: {
      title: "Entre em contato",
      text: "Estou procurando novas oportunidades. Se você tem uma pergunta, uma proposta de projeto, ou apenas quer dizer olá, eu tentarei o meu melhor para te responder!",
      cta: "Diga olá",
      subtitle: "O que vem a seguir?",
    },


  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      cta: "Say Hello"
    },
    hero: {
      title: "Hi, I'm",
      subtitle: "a full-stack developer and computer engineer. I design and build complete systems—from mobile apps to APIs—focused on performance, scalability, and real-world impact, combining strong problem-solving skills with clean, maintainable code.",
      cta: "View My Work",
      contactMe: "Contact me"
    },
    about: {
      title: "About me",
      text: "I’m a full-stack developer passionate about building complete, real-world solutions. I create scalable web and mobile applications with intuitive interfaces and efficient backends, focusing on performance, offline capabilities, and delivering meaningful impact through well-structured systems.",
      skillTitle: "My Toolkit",
      skills: ["Responsive Design", "Clean Code", "Performance"],
      topSkill: ["Typescrypt", "React tsx", "React Native", "Firebase", "Supabase", "Postgres", "Node.js", "Next.js"],
      complementarySkills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Git", "Webpack", "Vite", "Sass/SCSS", "Tailwind CSS", "Figma"]
    },
    projects: {
      title: "Projects",
      description: "A showcase of some of my recent projects. I've built everything from complex web applications to beautiful marketing sites.",
      data: [{
        title: "DJ Booking Platform",
        description: "A comprehensive booking and management platform for professional DJs, Includes advanced product filtering, Features include real-time calendar syncing.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
        links: {
          github: "",
          website: ""
        }
      }, {
        title: "eCommerce Storefront",
        description: "High-performance headless eCommerce solution built with Next.js and Shopify, Includes advanced product filtering, Features include real-time calendar syncing.",
        technologies: ["Next.js", "TypeScript", "Shopify GraphQl", "Tailwind"],
        links: {
          github: "",
          website: ""
        }
      }, {
        title: "React Analytics Dashboard",
        description: "A beautiful, data-dense analytics dashboard for SaaS companies, Includes advanced product filtering, Features include real-time calendar syncing.",
        technologies: ["React", "D3.js", "Framer Motion"],
        links: {
          github: "",
          website: ""
        }

      }, {
        title: "Developer Portfolio",
        description: "A minimalist, high-performance personal portfolio website featuring 3D illustrations, Includes advanced product filtering, Features include real-time calendar syncing.",
        technologies: ["React", "Vite", "Tailwind CSS", "Three.js"],
        links: {
          github: "http://github.com/",
          website: "http://www.google.com.br/"
        }
      }]
    },
    experience: [{
      period: "11/2024 — Present",
      role: "Contract manager",
      company: "Cibam engenharia",
      description: "Operational coordination of a maintenance contract with more than 5,000 service points in São Paulo, leading 10 teams and around 30 professionals. Responsible for activity planning, resource management, and monitoring of indicators to ensure the achievement of goals and service levels. Involved in organizing workflows, resolving incidents, and developing teams through alignment and feedback. Use of digital tools and mobile devices for monitoring operations and continuous process improvement."
    },
    // {
    //   period: "08/2020 - Present",
    //   role: "Developer full-stack",
    //   company: "Freelancer",
    //   description: "Developed and maintained highly responsive marketing sites and eCommerce platforms."
    // }
  ],
    contact: {
      title: "Get in touch",
      text: "I'm currently looking for new opportunities. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!",
      cta: "Say Hello",
      subtitle: "What's next?",
    }
  }
};


export const profile = {
  name: "Gabriel Jorge",
  email: "gabrielbielcruz1.007@gmail.com",
  phone: "+55 (11) 977725547",
  whatsapp: "https://wa.me/5511977725547?text=Ol%C3%A1%2C%20acabei%20de%20acessar%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20poss%C3%ADveis%20oportunidades.%0A",
  linkedin: "http://linkedin.com/in/gabriel-jorge-da-cruz-a5b2bb15b/",
  github: "https://www.github.com/gabrieljorge",
}


