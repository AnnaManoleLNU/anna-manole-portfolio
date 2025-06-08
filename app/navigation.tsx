"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Programming", href: "/programming" },
    { label: "Design", href: "/design" },
    { label: "About", href: "/about" },
  ];

   return (
    <nav className="relative ">
      {/* Desktop Navigation */}
      <div className="hidden sm:flex items-center space-x-8">
        {links.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>

        {isOpen && (
          <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-40 flex items-center justify-center">
            <div className="flex flex-col items-center space-y-8">
              {links.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-2xl font-medium text-foreground hover:text-muted-foreground transition-colors duration-200 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

