import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <>
    <main id="home" className="flex flex-col w-full min-w-0 max-w-full px-4 sm:px-6 box-border bg-[#f5f1e6] py-16">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-2 order-1 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans text-green-900">Valentín Cabanas</h1>
          <h2 className="text-lg sm:text-xl font-extrabold font-sans text-green-800">Web Developer</h2>
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
                href="https://github.com/Valenc04"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 w-full max-w-sm justify-start"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0b1f17] text-[#f5f1e6] shadow-sm transition-transform duration-200 ease-out group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-md">
                  <Github className="w-5 h-5" />
                </span>
                <span className="font-medium group-hover:underline transition-colors duration-150">
                  GitHub
                </span>
              </a>
            </li>
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
