import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <>
    <main id="home" className="flex flex-col w-full min-w-0 max-w-full px-4 sm:px-6 box-border bg-[#f5f1e6] py-16">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-2 order-1 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans text-green-900">Valentín Cabanas</h1>
          <h2 className="text-lg sm:text-xl font-extrabold font-sans text-green-800">Systems Engineer Student</h2>
        </div>
        <Image
          className="w-full max-w-[200px] sm:max-w-[260px] md:max-w-[300px] rounded-full h-auto shrink-0 order-2"
          src="/images/chico-crema5.png"
          alt="Portrait"
          width={300}
          height={200}
        />
      </div>
    </main>
    <section
      id="sobre"
      className="w-full min-w-0 px-4 sm:px-6 py-16 bg-[#f0f0f0]"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center gap-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-sans text-green-900 tracking-wide">
          About me
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
          <div className="w-full max-w-[200px] sm:max-w-[200px] shrink-0 overflow-hidden rounded-sm aspect-[3/4] sm:aspect-square">
            <Image 
              className="w-full h-full object-cover"
              src="/images/foto-personal.jpeg" alt="Personal Photo" 
              width={300} height={400}
              sizes="(max-width: 640px) 200px, 200px"
            />
          </div>
          <div className="space-y-4 text-base sm:text-lg text-green-800 font-sans text-left w-full">
            <p>
              I am Valentín Cabanas, an Engineering student at Universidad Tecnológica Nacional (UTN-FRBA).
            </p>
            <p>
              Throughout my academic journey, I have worked on several projects that allowed me to develop strong technical and problem-solving skills.
            </p>
            <p>
              I am currently seeking my first professional experience as a Software Developer, where I can continue growing, improving my abilities, and gaining hands-on experience in the field.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section
      id="proyectos"
      className="w-full min-w-0 px-4 sm:px-6 py-16 bg-[#f5f1e6]"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-sans text-green-900 tracking-wide text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-6xl mx-auto">
        <a href="https://note-life.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex flex-col h-full gap-4 rounded-lg bg-white p-4 min-h-0 transition-all duration-200 ease-out hover:-translate-y-2 hover:shadow-lg hover:bg-green-50/70">
          <header className="flex flex-row gap-4 flex-shrink-0 items-center">
            <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-gray-100">
              <Image src="/images/favicon.jpg" alt="NoteLife Logo" width={28} height={28} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-2 min-w-0">
              <h3 className="text-lg font-bold text-green-900 leading-7">NoteLife - Notes App</h3>
            </div>
          </header>
          <p className="text-sm text-gray-500">
                NoteLife is a simple web app that allows you to create, edit and delete personal notes. 
                Also you can create filter and organize them by categories that are created by yourself.
                The architecture is based on a React web app with a Node.js backend and SQLite database.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="px-2 py-1 text-[10px] sm:text-xs bg-green-900/20 text-green-900 rounded-md">Nest.js</span>
            <span className="px-2 py-1 text-[10px] sm:text-xs bg-green-900/20 text-green-900 rounded-md">Node.js</span>
            <span className="px-2 py-1 text-[10px] sm:text-xs bg-green-900/20 text-green-900 rounded-md">SQLite</span>
            <span className="px-2 py-1 text-[10px] sm:text-xs bg-green-900/20 text-green-900 rounded-md">React</span>
            <span className="px-2 py-1 text-[10px] sm:text-xs bg-green-900/20 text-green-900 rounded-md">Vite</span>
            <span className="px-2 py-1 text-[10px] sm:text-xs bg-green-900/20 text-green-900 rounded-md">Tailwind CSS</span>
            <span className="px-2 py-1 text-[10px] sm:text-xs bg-green-900/20 text-green-900 rounded-md">TypeScript</span>
          </div>
        </a>
        <a href="https://birbnb-2.netlify.app/app" target="_blank" rel="noopener noreferrer" className="flex flex-col h-full gap-4 rounded-lg bg-white p-4 min-h-0 transition-all duration-200 ease-out hover:-translate-y-2 hover:shadow-lg hover:bg-green-50/70">
          <header className="flex flex-row gap-4 flex-shrink-0 items-center">
            <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-gray-100">
              <Image src="/images/birbnb.jpg" alt="Birbnb Logo" width={28} height={28} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-2 min-w-0">
              <h3 className="text-lg font-bold text-green-900 leading-7">Birbnb - Booking Platform</h3>
            </div>
          </header>
          <p className="text-sm text-gray-500">
            Birbnb is a web platform that allows users to search and book accommodations easily and quickly. 
            Travelers can explore properties, view photos, prices, and availability. Hosts can view reservation requests, 
            accept or deny them, and receive notifications about new bookings or updates. It connects people looking for a place 
            to stay with those who have spaces to offer. 🏡✈️
            The architecture is based on a React web app with a Node.js + express backend and MongoDB database.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="px-2 py-1 text-[10px] sm:text-xs bg-green-900/20 text-green-900 rounded-md">Swagger</span>
            <span className="px-2 py-1 text-[10px] sm:text-xs bg-green-900/20 text-green-900 rounded-md">Node.js</span>
            <span className="px-2 py-1 text-[10px] sm:text-xs bg-green-900/20 text-green-900 rounded-md">MongoDB</span>
            <span className="px-2 py-1 text-[10px] sm:text-xs bg-green-900/20 text-green-900 rounded-md">React</span>
            <span className="px-2 py-1 text-[10px] sm:text-xs bg-green-900/20 text-green-900 rounded-md">Express</span>
            <span className="px-2 py-1 text-[10px] sm:text-xs bg-green-900/20 text-green-900 rounded-md">Axios</span>
            <span className="px-2 py-1 text-[10px] sm:text-xs bg-green-900/20 text-green-900 rounded-md">MUI</span>
            <span className="px-2 py-1 text-[10px] sm:text-xs bg-green-900/20 text-green-900 rounded-md">JavaScript</span>
          </div>
        </a>
        <a href="#projects" className="flex flex-col h-full gap-4 rounded-lg bg-white p-4 min-h-0 transition-all duration-200 ease-out hover:-translate-y-2 hover:shadow-lg hover:bg-green-50/70">
          <header className="flex flex-row gap-4 flex-shrink-0 items-center">
            <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-gray-100">
              <Image src="/images/mgrc.jpg" alt="MGRCApp Logo" width={28} height={28} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-2 min-w-0">
              <h3 className="text-lg font-bold text-green-900 leading-7">MGRC - News Portal</h3>
            </div>
          </header>
          <p className="text-sm text-gray-500">
            Coming soon...
          </p>
        </a>
      </div>
    </section>
    <section
      id="contacto"
      className="w-full min-w-0 px-4 sm:px-6 py-16 bg-[#f0f0f0]"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center gap-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-sans text-green-900 tracking-wide">Let's get in touch</h2>
        <div className="space-y-6 text-base sm:text-lg text-green-800 font-sans w-full">
          <p>
            I am always looking for new opportunities to work on interesting projects. If you have any questions or want to discuss a potential collaboration, please feel free to contact me.
          </p>
          <p>
            You can contact me through the following channels:
          </p>
          <ul className="flex flex-col gap-4 w-full">
            <li className="w-full flex justify-center">
              <a
                href="https://www.linkedin.com/in/valentin-cabanas-455158389"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 w-full max-w-sm justify-start"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0b1f17] text-[#f5f1e6] shadow-sm transition-transform duration-200 ease-out group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-md">
                  <Linkedin className="w-5 h-5" />
                </span>
                <span className="font-medium group-hover:underline transition-colors duration-150">
                  LinkedIn
                </span>
              </a>
            </li>
            <li className="w-full flex justify-center">
              <a
                href="mailto:valentincabanas04@gmail.com"
                className="group flex items-center gap-4 w-full max-w-sm justify-start"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0b1f17] text-[#f5f1e6] shadow-sm transition-transform duration-200 ease-out group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-md">
                  <Mail className="w-5 h-5" />
                </span>
                <span className="font-medium group-hover:underline transition-colors duration-150">
                  valentincabanas04@gmail.com
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    </>
  );
}
