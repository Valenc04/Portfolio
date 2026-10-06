import type { Locale, Localized } from "../i18n/config";

/** Devuelve el texto en el idioma pedido */
export const tr = (text: Localized, lang: Locale) => text[lang];

export type Screenshot = { src: string; alt: Localized; width: number; height: number };

export type Project = {
  slug: string;
  name: string;
  subtitle: Localized;
  date: Localized;
  logo: string;
  /** Screenshot opcional para la card y el detalle (ej: "/images/projects/notelife.png") */
  screenshot?: string;
  /** Capturas extra para la galería de la página de detalle */
  gallery?: Screenshot[];
  summary: Localized;
  overview: Localized;
  howIBuilt: Localized;
  stack: string[];
  demoUrl: string;
  /** true muestra "Live app" en vez de "Live demo" */
  isLiveApp?: boolean;
  credentials?: string;
};

export type Job = {
  company: string;
  companyUrl?: string;
  /** Logo opcional (ej: "/images/experience/datco.png"); si falta se muestra un ícono */
  logo?: string;
  role: Localized;
  period: Localized;
  current?: boolean;
  tasks: Localized[];
  stack: string[];
};

export const experience: Job[] = [
  {
    company: "Grupo Datco",
    companyUrl: "https://www.grupodatco.com/",
    logo: "/images/experience/datco.png",
    role: { en: "Salesforce Administrator", es: "Administrador de Salesforce" },
    period: { en: "March 2026 – Present", es: "Marzo 2026 – Actualidad" },
    current: true,
    tasks: [
      {
        en: "Administer the company's Salesforce CRM: users, profiles and permissions, objects, fields and page layouts.",
        es: "Administración del CRM de Salesforce de la empresa: usuarios, perfiles y permisos, objetos, campos y layouts.",
      },
      {
        en: "Build automations and custom functionality with Flows, Apex and Lightning Web Components.",
        es: "Desarrollo de automatizaciones y funcionalidades a medida con Flows, Apex y Lightning Web Components.",
      },
      {
        en: "Integrate Salesforce with external systems through REST APIs.",
        es: "Integración de Salesforce con sistemas externos mediante APIs REST.",
      },
      {
        en: "Import, update and clean data with Data Loader, and build reports and dashboards for the business teams.",
        es: "Carga, actualización y depuración de datos con Data Loader, y armado de informes y dashboards para las áreas del negocio.",
      },
      {
        en: "Provide day-to-day support and training to users.",
        es: "Soporte y capacitación a usuarios en el día a día.",
      },
    ],
    stack: ["Salesforce", "Apex", "Lightning Web Components", "Flows", "REST APIs", "Data Loader", "Reports & Dashboards"],
  },
];

export const projects: Project[] = [
  {
    slug: "mgrcApp",
    name: "MGRC App",
    subtitle: { en: "Sports Club PWA", es: "PWA para un club deportivo" },
    date: { en: "February 2026 - May 2026", es: "Febrero 2026 - Mayo 2026" },
    logo: "/images/mgrc.jpg",
    screenshot: "/images/projects/mgrc-home.png",
    gallery: [
      { src: "/images/projects/mgrc-home.png", alt: { en: "MGRC home page with club news", es: "Inicio de MGRC con las noticias del club" }, width: 1895, height: 805 },
      { src: "/images/projects/mgrc-lineup.png", alt: { en: "MGRC team line-up on the rugby field", es: "Formación del equipo de MGRC en la cancha" }, width: 854, height: 818 },
      { src: "/images/projects/mgrc-standings.png", alt: { en: "MGRC tournament standings table", es: "Tabla de posiciones del torneo en MGRC" }, width: 1855, height: 914 },
    ],
    summary: {
      en: "Progressive Web App to manage a sports club: teams, fixtures, tournaments, memberships and club news, with push notifications.",
      es: "Progressive Web App para gestionar un club deportivo: equipos, fixture, torneos, cuotas y noticias del club, con notificaciones push.",
    },
    overview: {
      en: "MGRC is a Progressive Web App (PWA) for managing a sports club. It helps organize teams (e.g. rugby and hockey), players, fixtures and tournaments, standings, and membership fees. Members and visitors can browse club information, teams, and competitions; admins can maintain data, manage squads, and run day-to-day club operations. The app includes user authentication, a custom REST API, embedded editorial content, and push notifications for important updates. The architecture is a React application built with Next.js (App Router). The “backend” is implemented as Next.js route handlers on top of a PostgreSQL database accessed through Prisma, plus a headless CMS for content and Firebase for push messaging.",
      es: "MGRC es una Progressive Web App (PWA) para gestionar un club deportivo. Permite organizar equipos (por ejemplo, rugby y hockey), jugadores, fixture y torneos, tablas de posiciones y cuotas sociales. Socios y visitantes pueden consultar la información del club, los equipos y las competencias; los administradores mantienen los datos, gestionan los planteles y llevan la operación diaria del club. La app incluye autenticación de usuarios, una API REST propia, contenido editorial embebido y notificaciones push para las novedades importantes. La arquitectura es una aplicación React construida con Next.js (App Router). El “backend” está implementado con route handlers de Next.js sobre una base de datos PostgreSQL a la que se accede con Prisma, más un CMS headless para el contenido y Firebase para las notificaciones push.",
    },
    howIBuilt: {
      en: "This project was created as part of a bigger idea that my brothers, a friend, and I came up with as club members. We wanted to build a platform that connected families, players, and fans in one place, where club members could interact with news, teams, match schedules, tournaments, and all the latest updates about the club. The main goal was to modernize the way the club communicates with its community and create a more engaging digital experience for everyone involved.",
      es: "Este proyecto nació de una idea más grande que tuvimos con mis hermanos y un amigo, como socios del club. Queríamos construir una plataforma que reuniera en un solo lugar a familias, jugadores e hinchas, donde los socios pudieran seguir las noticias, los equipos, los horarios de los partidos, los torneos y todas las novedades del club. El objetivo principal era modernizar la forma en que el club se comunica con su comunidad y crear una experiencia digital más atractiva para todos.",
    },
    stack: [
      "Next.js",
      "React",
      "PostgreSQL",
      "Prisma",
      "Firebase",
      "Tailwind CSS",
      "shadcn/ui",
      "Redux Toolkit + RTK Query",
      "Clerk",
      "Serwist",
      "Sanity",
    ],
    demoUrl: "https://mgrc.app/",
    isLiveApp: true,
  },
  {
    slug: "notelife",
    name: "NoteLife",
    subtitle: { en: "Notes App", es: "App de notas" },
    date: { en: "February 2026", es: "Febrero 2026" },
    logo: "/images/favicon.jpg",
    screenshot: "/images/projects/notelife-notes.png",
    gallery: [
      { src: "/images/projects/notelife-notes.png", alt: { en: "NoteLife notes list with status and category filters", es: "Lista de notas de NoteLife con filtros por estado y categoría" }, width: 1879, height: 905 },
      { src: "/images/projects/notelife-login.png", alt: { en: "NoteLife login page", es: "Pantalla de login de NoteLife" }, width: 1907, height: 909 },
      { src: "/images/projects/notelife-new-note.png", alt: { en: "NoteLife new note form", es: "Formulario de nueva nota en NoteLife" }, width: 756, height: 594 },
    ],
    summary: {
      en: "Web app to create, edit and organize personal notes with custom categories and filters. Built in 3 days as a technical challenge.",
      es: "App web para crear, editar y organizar notas personales con categorías propias y filtros. Hecha en 3 días como challenge técnico.",
    },
    overview: {
      en: "NoteLife is a simple web app that allows you to create, edit and delete personal notes. You can also create categories, then filter and organize your notes by them. The architecture is based on a React web app with a NestJS backend and SQLite database.",
      es: "NoteLife es una app web simple que permite crear, editar y eliminar notas personales. También se pueden crear categorías para después filtrar y organizar las notas. La arquitectura se basa en una app web en React con un backend en NestJS y una base de datos SQLite.",
    },
    howIBuilt: {
      en: "NoteLife was a project I created to complete a job test. I was given three days, so I chose simple technologies that wouldn’t cause many issues and that I was already somewhat familiar with from university projects. Additionally, one of the requirements was to build the project with a clear front-end/back-end separation and a back-end architecture including controller, service, and repository layers. Although it is a simple app, it helped me learn how to handle a challenge under time pressure and work with technologies I wasn’t fully comfortable with before.",
      es: "NoteLife fue un proyecto que hice para una prueba técnica laboral. Tenía tres días, así que elegí tecnologías simples, que no me dieran muchos problemas y que ya conocía un poco por proyectos de la facultad. Además, uno de los requisitos era construir el proyecto con una separación clara entre front-end y back-end, y un back-end con capas de controller, service y repository. Aunque es una app simple, me ayudó a aprender a resolver un desafío con poco tiempo y a trabajar con tecnologías que antes no manejaba del todo.",
    },
    stack: ["NestJS", "Node.js", "SQLite", "React", "Vite", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://note-life.vercel.app/",
    credentials: "admin / admin123",
  },
  {
    slug: "birbnb",
    name: "Birbnb",
    subtitle: { en: "Booking Platform", es: "Plataforma de reservas" },
    date: { en: "March 2025 - August 2025", es: "Marzo 2025 - Agosto 2025" },
    logo: "/images/birbnb.jpg",
    screenshot: "/images/projects/birbnb-search.png",
    gallery: [
      { src: "/images/projects/birbnb-search.png", alt: { en: "Birbnb accommodation search with filters", es: "Búsqueda de alojamientos con filtros en Birbnb" }, width: 1896, height: 919 },
      { src: "/images/projects/birbnb-listing.png", alt: { en: "Birbnb listing detail with booking form", es: "Detalle de un alojamiento con el formulario de reserva en Birbnb" }, width: 1273, height: 907 },
    ],
    summary: {
      en: "Accommodation booking platform: travelers search and book properties, hosts manage reservation requests and get notified.",
      es: "Plataforma de reserva de alojamientos: los viajeros buscan y reservan, y los anfitriones gestionan las solicitudes y reciben notificaciones.",
    },
    overview: {
      en: "Birbnb is a web platform that allows users to search and book accommodations easily and quickly. Travelers can explore properties, view photos, prices, and availability. Hosts can view reservation requests, accept or deny them, and receive notifications about new bookings or updates. It connects people looking for a place to stay with those who have spaces to offer. The architecture is based on a React web app with a Node.js + Express backend and MongoDB database.",
      es: "Birbnb es una plataforma web para buscar y reservar alojamientos de forma fácil y rápida. Los viajeros pueden explorar propiedades y ver fotos, precios y disponibilidad. Los anfitriones pueden ver las solicitudes de reserva, aceptarlas o rechazarlas, y reciben notificaciones de nuevas reservas o cambios. Conecta a quienes buscan dónde hospedarse con quienes tienen espacios para ofrecer. La arquitectura se basa en una app web en React con un backend en Node.js + Express y una base de datos MongoDB.",
    },
    howIBuilt: {
      en: "This project was developed as part of a university assignment, where the main goal was to learn how to build both a back-end and a front-end for the first time. We started by developing the back-end, then moved on to the front-end, and finally integrated both parts at the end. Since it was our first experience working on a project of this kind, we focused more on understanding the fundamentals rather than design, which is why the application does not have a strong UX/UI.",
      es: "Este proyecto lo desarrollamos como trabajo práctico de la facultad, donde el objetivo principal era aprender a construir un back-end y un front-end por primera vez. Empezamos por el back-end, después seguimos con el front-end y al final integramos las dos partes. Como era nuestra primera experiencia con un proyecto de este tipo, nos enfocamos más en entender los fundamentos que en el diseño, por eso la aplicación no tiene una UX/UI muy trabajada.",
    },
    stack: ["Node.js", "Express", "MongoDB", "React", "MUI", "Axios", "Swagger", "JavaScript"],
    demoUrl: "https://birbnb-2.netlify.app/app",
    credentials: "anfitrion.demo@birbnb.local / Demo1234",
  },
];

export const skills: { group: Localized; items: string[] }[] = [
  {
    group: { en: "CRM", es: "CRM" },
    items: ["Salesforce", "Apex", "Lightning Web Components", "Flows", "Data Loader", "Reports & Dashboards"],
  },
  { group: { en: "Frontend", es: "Frontend" }, items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Redux Toolkit"] },
  { group: { en: "Backend", es: "Backend" }, items: ["Node.js", "Express", "NestJS", "REST APIs", "Prisma"] },
  { group: { en: "Databases", es: "Bases de datos" }, items: ["PostgreSQL", "MongoDB", "SQLite"] },
  { group: { en: "Tools", es: "Herramientas" }, items: ["Git", "GitHub", "Vercel", "Firebase", "Swagger"] },
];

export const links = {
  github: "https://github.com/Valenc04",
  linkedin: "https://www.linkedin.com/in/valentin-cabanas-455158389",
  email: "valentincabanas04@gmail.com",
};
