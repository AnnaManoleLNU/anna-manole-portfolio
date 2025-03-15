import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

//import Image from "next/image";
export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="row-start-1 flex flex-col items-center justify-center">
        <nav className="flex gap-4">
          <Link href="/projects" className="hover:text-accent">
            projects
          </Link>

          <Link href="/about" className="hover:text-accent">
            about
          </Link>

          <Link href="/contact" className="hover:text-accent">
            contact
          </Link>
        </nav>
        <main className="flex flex-col items-center sm:items-start">
          <h1 className="text-5xl font-bold">Anna Manole</h1>
        </main>
      </div>
      <footer className="row-start-2 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          href="https://www.linkedin.com/in/anna-manole/"
          target="_blank"
          className="flex gap-2 text-muted-foreground hover:text-primary"
        >
          <small className="text-sm font-medium leading-none">LinkedIn</small>
          <SquareArrowOutUpRight size={16} />
        </a>

        <a
          href="https://github.com/AnnaManoleLNU"
          target="_blank"
          className="flex gap-2 text-muted-foreground hover:text-primary"
        >
          <small className="text-sm font-medium leading-none">GitHub</small>
          <SquareArrowOutUpRight size={16} />
        </a>
      </footer>
    </div>
  );
}
