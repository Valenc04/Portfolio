// Textos de la interfaz. `es.ts` debe tener exactamente las mismas claves.
// En los párrafos, **texto** se renderiza en negrita (ver components/rich.tsx).
const en = {
  meta: {
    title: "Valentín Cabanas | Portfolio",
    description:
      "Portfolio of Valentín Cabanas, Salesforce Administrator at Grupo Datco and Systems Engineering student at UTN-FRBA. Full-stack web development with React, Next.js and Node.js.",
  },
  skipToContent: "Skip to content",
  nav: {
    home: "Home",
    about: "About me",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menu: "Navigation",
    language: "Change language",
  },
  hero: {
    badge: "Salesforce Administrator @ Grupo Datco",
    greeting: "Hi, I'm Valentín Cabanas",
    role: "Salesforce Administrator · Full-Stack Developer",
    description:
      "I manage and automate Salesforce CRM at Grupo Datco, and I build web applications end to end with React, Next.js and Node.js.",
    viewProjects: "View projects",
    contactMe: "Contact me",
    scrollDown: "Scroll to About me",
    portraitAlt: "Illustrated portrait of Valentín Cabanas",
  },
  about: {
    eyebrow: "Who I am",
    title: "About me",
    photoAlt: "Photo of Valentín Cabanas",
    paragraphs: [
      "I'm Valentín, a **Systems Engineering student** at Universidad Tecnológica Nacional (UTN-FRBA).",
      "Throughout my academic journey, I have worked on several projects that allowed me to develop strong technical and problem-solving skills, from university assignments to real apps used by my sports club.",
      "Since March 2026 I work as a **Salesforce Administrator at Grupo Datco**, where I manage the CRM, build automations and integrations, and support users every day. I combine that experience with full-stack development, and I keep learning and growing as a developer.",
    ],
  },
  experience: {
    eyebrow: "Where I've worked",
    title: "Experience",
    current: "Current",
  },
  skills: {
    eyebrow: "What I work with",
    title: "Skills",
  },
  projects: {
    eyebrow: "What I've built",
    title: "Projects",
    screenshotOf: "Screenshot of",
    logoOf: "Logo of",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's get in touch",
    text: "I'm always open to new opportunities and interesting projects. If you have any questions or want to discuss a potential collaboration, feel free to reach out.",
    sayHello: "Say hello",
    copyEmail: "Copy email",
    copied: "Email copied",
  },
  footer: {
    rights: "All rights reserved.",
  },
  project: {
    back: "Back to projects",
    liveDemo: "Live demo",
    liveApp: "Live app",
    overview: "Overview",
    howIBuilt: "How I built it",
    techStack: "Tech stack",
    credentials: "Demo credentials",
    nextProject: "Next project",
  },
  gallery: {
    open: "Open screenshot",
    close: "Close",
    previous: "Previous",
    next: "Next",
  },
};

export default en;
export type Dictionary = typeof en;
