import { Github, Linkedin, Mail } from "lucide-react";

export default function Footercpt() {
    return(
        <footer className="w-full min-w-0 flex flex-col items-center justify-center px-4 sm:px-6 py-8 bg-[#0b1f17] text-[#f5f1e6] border-t border-[#132c22] gap-4 box-border">
            <div className="flex flex-row gap-4 shrink-0">
                <a href="https://github.com/Valenc04" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 hover:opacity-70"/>
                </a>

                <a href="https://www.linkedin.com/in/valentin-cabanas-455158389" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 hover:opacity-70"/>
                </a>

                <a href="mailto:valentincabanas04@gmail.com">
                    <Mail className="w-5 h-5 hover:opacity-70"/>
                </a>
            </div>
            <p className="text-xs md:text-sm text-center max-w-full break-words px-2">COPYRIGHT@2026 VALENTÍN CABANAS ALL RIGHTS RESERVED</p>
        </footer>
    )
}