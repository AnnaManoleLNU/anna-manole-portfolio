"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "Programming", href: "/projects" },
    { label: "Graphic Design", href: "/design" },
    { label: "About Me", href: "/about" },
  ];

  return (
    <nav className="flex flex-wrap gap-3 sm:gap-6 justify-center items-center text-center">
      {links.map(({ label, href }) => (
        <Link
          key={href}
          href={href}
          className={clsx(
            "uppercase font-sans tracking-wide transition-colors duration-300",
            "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl",
            pathname === href
              ? "text-foreground font-medium"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
