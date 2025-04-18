import { Geist, Geist_Mono } from "next/font/google";
import { SquareArrowOutUpRight } from "lucide-react";
import { ThemeProvider } from "./theme-provider";
import { ModeToggle } from "./mode-toggle";
import Navigation from "./navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Anna Manole",
  description: "Anna Manole Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
            <header className="row-start-1 flex items-center justify-between  py-2">
              <Navigation /> {/* Client Component handles navigation */}
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
                  className="flex gap-2 text-muted-foreground hover:text-foreground"
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
