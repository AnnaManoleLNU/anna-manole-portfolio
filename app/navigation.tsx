"use client"; 
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowLeft} from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();

  const isProjectsPage = pathname === "/projects";

  const navLink = isProjectsPage ? (
    <Link href="/" className="text-muted-foreground hover:text-foreground">
      <ArrowLeft size={24} />
     
    </Link>
  ) : (
    <Link
      href="/projects"
      className="text-muted-foreground hover:text-foreground"
    >
      Projects
    </Link>
  );

  return (
    <nav className="flex gap-4 items-center justify-center text-center">
      {navLink}
    </nav>
  );
}
