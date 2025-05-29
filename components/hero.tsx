import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="container mx-auto px-4 pt-10 pb-4 max-w-4xl">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
        <div className="flex items-center gap-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src="/avatar.png" alt="Ethan" />
            <AvatarFallback>ET</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-xl font-semibold">Ethan Diedericks</h1>
            <p className="text-gray-400">Software Developer & Entrepreneur</p>
          </div>
        </div>

        <div className="flex gap-3 sm:ml-auto">
          <a
            href="mailto:diedericksethan@gmail.com"
            className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/ethan-diedericks"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/ethandiedericks"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>

      <p className="text-lg text-gray-300 leading-relaxed ">
        I&apos;m a software developer and entrepreneur passionate about building
        modern web applications, mobile apps, and scalable solutions. I run a
        software development company specializing in full-stack development.
      </p>
    </section>
  );
}
