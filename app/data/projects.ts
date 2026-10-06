export type Screenshot = { src: string; alt: string; width: number; height: number };

export type Project = {
  slug: string;
  name: string;
  subtitle: string;
  date: string;
  logo: string;
  /** Screenshot opcional para la card y el detalle (ej: "/images/projects/notelife.png") */
  screenshot?: string;
  /** Capturas extra para la galería de la página de detalle */
  gallery?: Screenshot[];
  summary: string;
  overview: string;
  howIBuilt: string;
  stack: string[];
  demoUrl: string;
  demoLabel?: string;
  credentials?: string;
};

export const projects: Project[] = [
  {
    slug: "mgrcApp",
    name: "MGRC App",
    subtitle: "Sports Club PWA",
    date: "February 2026 - May 2026",
    logo: "/images/mgrc.jpg",
    screenshot: "/images/projects/mgrc-home.png",
    gallery: [
      { src: "/images/projects/mgrc-home.png", alt: "MGRC home page with club news", width: 1895, height: 805 },
      { src: "/images/projects/mgrc-lineup.png", alt: "MGRC team line-up on the rugby field", width: 854, height: 818 },
      { src: "/images/projects/mgrc-standings.png", alt: "MGRC tournament standings table", width: 1855, height: 914 },
    ],
    summary:
      "Progressive Web App to manage a sports club: teams, fixtures, tournaments, memberships and club news, with push notifications.",
    overview:
      "MGRC is a Progressive Web App (PWA) for managing a sports club. It helps organize teams (e.g. rugby and hockey), players, fixtures and tournaments, standings, and membership fees. Members and visitors can browse club information, teams, and competitions; admins can maintain data, manage squads, and run day-to-day club operations. The app includes user authentication, a custom REST API, embedded editorial content, and push notifications for important updates. The architecture is a React application built with Next.js (App Router). The “backend” is implemented as Next.js route handlers on top of a PostgreSQL database accessed through Prisma, plus a headless CMS for content and Firebase for push messaging.",
    howIBuilt:
      "This project was created as part of a bigger idea that my brothers, a friend, and I came up with as club members. We wanted to build a platform that connected families, players, and fans in one place, where club members could interact with news, teams, match schedules, tournaments, and all the latest updates about the club. The main goal was to modernize the way the club communicates with its community and create a more engaging digital experience for everyone involved.",
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
    demoLabel: "Live app",
  },
  {
    slug: "notelife",
    name: "NoteLife",
    subtitle: "Notes App",
    date: "February 2026",
    logo: "/images/favicon.jpg",
    screenshot: "/images/projects/notelife-notes.png",
    gallery: [
      { src: "/images/projects/notelife-notes.png", alt: "NoteLife notes list with status and category filters", width: 1879, height: 905 },
      { src: "/images/projects/notelife-login.png", alt: "NoteLife login page", width: 1907, height: 909 },
      { src: "/images/projects/notelife-new-note.png", alt: "NoteLife new note form", width: 756, height: 594 },
    ],
    summary:
      "Web app to create, edit and organize personal notes with custom categories and filters. Built in 3 days as a technical challenge.",
    overview:
      "NoteLife is a simple web app that allows you to create, edit and delete personal notes. You can also create categories, then filter and organize your notes by them. The architecture is based on a React web app with a NestJS backend and SQLite database.",
    howIBuilt:
      "NoteLife was a project I created to complete a job test. I was given three days, so I chose simple technologies that wouldn’t cause many issues and that I was already somewhat familiar with from university projects. Additionally, one of the requirements was to build the project with a clear front-end/back-end separation and a back-end architecture including controller, service, and repository layers. Although it is a simple app, it helped me learn how to handle a challenge under time pressure and work with technologies I wasn’t fully comfortable with before.",
    stack: ["NestJS", "Node.js", "SQLite", "React", "Vite", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://note-life.vercel.app/",
    credentials: "admin / admin123",
  },
  {
    slug: "birbnb",
    name: "Birbnb",
    subtitle: "Booking Platform",
    date: "March 2025 - August 2025",
    logo: "/images/birbnb.jpg",
    screenshot: "/images/projects/birbnb-search.png",
    gallery: [
      { src: "/images/projects/birbnb-search.png", alt: "Birbnb accommodation search with filters", width: 1896, height: 919 },
      { src: "/images/projects/birbnb-listing.png", alt: "Birbnb listing detail with booking form", width: 1273, height: 907 },
    ],
    summary:
      "Accommodation booking platform: travelers search and book properties, hosts manage reservation requests and get notified.",
    overview:
      "Birbnb is a web platform that allows users to search and book accommodations easily and quickly. Travelers can explore properties, view photos, prices, and availability. Hosts can view reservation requests, accept or deny them, and receive notifications about new bookings or updates. It connects people looking for a place to stay with those who have spaces to offer. The architecture is based on a React web app with a Node.js + Express backend and MongoDB database.",
    howIBuilt:
      "This project was developed as part of a university assignment, where the main goal was to learn how to build both a back-end and a front-end for the first time. We started by developing the back-end, then moved on to the front-end, and finally integrated both parts at the end. Since it was our first experience working on a project of this kind, we focused more on understanding the fundamentals rather than design, which is why the application does not have a strong UX/UI.",
    stack: ["Node.js", "Express", "MongoDB", "React", "MUI", "Axios", "Swagger", "JavaScript"],
    demoUrl: "https://birbnb-2.netlify.app/app",
    credentials: "anfitrion.demo@birbnb.local / Demo1234",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Redux Toolkit"] },
  { group: "Backend", items: ["Node.js", "Express", "NestJS", "REST APIs", "Prisma"] },
  { group: "Databases", items: ["PostgreSQL", "MongoDB", "SQLite"] },
  { group: "Tools", items: ["Git", "GitHub", "Vercel", "Firebase", "Swagger"] },
];

export const links = {
  github: "https://github.com/Valenc04",
  linkedin: "https://www.linkedin.com/in/valentin-cabanas-455158389",
  email: "valentincabanas04@gmail.com",
};
