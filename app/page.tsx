import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const navLinks = ["projects", "about", "contact"];

  const footerLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/anna-manole/",
    },
    { name: "GitHub", url: "https://github.com/AnnaManoleLNU" },
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="row-start-1 flex flex-col items-center justify-center">
        <nav className="flex gap-4">
          {navLinks.map((url) => (
            <Link href={url} key={url} className="hover:text-accent">
              {url}
            </Link>
          ))}
        </nav>
      </div>
      <main className="frow-start-2 lex flex-col items-center sm:items-start">
        <h1 className="text-5xl font-bold text-foreground transition-colors duration-1000 animate-[fadeIn_1s_ease-out_forwards]">
          Anna Manole
        </h1>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {footerLinks.map(({ name, url }) => (
          <a
            href={url}
            target="_blank"
            className="flex gap-2 text-muted-foreground hover:text-primary"
            key={url}
          >
            <small className="text-sm font-medium leading-none">{name}</small>
            <SquareArrowOutUpRight size={16} />
          </a>
        ))}
      </footer>
    </div>
  );
}
