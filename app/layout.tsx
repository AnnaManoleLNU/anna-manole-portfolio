import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { ThemeProvider } from "./theme-provider";
import { ModeToggle } from "./mode-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anna Manole",
  description: "Anna Manole Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = ["projects", "about", "contact"];

  const footerLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/anna-manole/",
    },
    { name: "GitHub", url: "https://github.com/AnnaManoleLNU" },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <header className="row-start-1 flex items-center justify-between px-4 py-2">
              <nav className="flex gap-4 items-center justify-center text-center">
                <Link href="/" className="flex items-center sm:block">
                  <h1 className="text-2xl font-bold">AM</h1>
                </Link>
                {navLinks.map((url) => (
                  <Link href={url} key={url} className="hover:border-b-2">
                    {url}
                  </Link>
                ))}
              </nav>
              <div>
                <ModeToggle />
              </div>
            </header>

            <main className="row-start-2 sm:items-start">{children}</main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
              {footerLinks.map(({ name, url }) => (
                <a
                  href={url}
                  target="_blank"
                  className="flex gap-2 text-muted-foreground hover:text-accent"
                  key={url}
                >
                  <small className="text-sm font-medium leading-none">
                    {name}
                  </small>
                  <SquareArrowOutUpRight size={16} />
                </a>
              ))}
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
