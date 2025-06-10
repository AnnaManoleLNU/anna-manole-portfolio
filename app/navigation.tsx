"use client";

import { Button } from "@/components/ui/button";
import { Menu, X, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
// import { ModeToggle } from "./mode-toggle";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const links = [
    { label: "GitHub", href: "https://github.com/AnnaManoleLNU", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/anna-manole/", external: true },
    { label: "About", href: "/about", external: false },
  ];

  return (
    <header className="fixed top-0 left-0 flex flex-row justify-between items-center w-full px-4 py-4  border-b border-foreground font-sans bg-background z-50">
   
        <Link className="font-bold" href="/">
          AM
        </Link>

        {/* Nav + Theme toggle */}
        <div className="flex ">
          <nav>
            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center space-x-8">
              {links.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-md text-foreground hover:text-muted-foreground transition-colors duration-200"
                  >
                    {item.label}
                    <SquareArrowOutUpRight size={16} />
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-md text-foreground hover:text-muted-foreground transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>

            {/* Mobile Navigation */}
            <div className="sm:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-50"
              >
                {isOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>

              {isOpen && (
                <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-40 flex items-center justify-center">
                  <div className="flex flex-col items-center space-y-8">
                    {links.map((item, index) =>
                      item.external ? (
                        <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-2xl font-medium text-foreground hover:text-muted-foreground transition-colors duration-200 animate-fade-in"
                          style={{ animationDelay: `${index * 0.1}s` }}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                          <SquareArrowOutUpRight size={16} />
                        </a>
                      ) : (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="text-2xl font-medium text-foreground hover:text-muted-foreground transition-colors duration-200 animate-fade-in"
                          style={{ animationDelay: `${index * 0.1}s` }}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </nav>
          {/* <ModeToggle /> */}
        </div>
      
    </header>
  );
}
