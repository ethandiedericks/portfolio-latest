import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/project";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Companies } from "@/components/companies";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Companies />
      <Projects />
      <Experience />
      <Education />
    </main>
  );
}
