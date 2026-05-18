import { CommandNav } from "@/components/CommandNav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Extras } from "@/components/sections/Extras";
import { Contact } from "@/components/sections/Contact";

// Single-page composition.
// Each section is its own client component - server component renders the shell
// so the initial paint is fast and SEO-friendly.
export default function Home() {
  return (
    <>
      <CommandNav />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Extras />
        <Contact />
      </main>
    </>
  );
}
