import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
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

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
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
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Use flex-col container for vertical layout */}
          <div className="flex flex-col min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <header className="flex items-center justify-between py-2">
              <Navigation /> {/* Client Component handles navigation */}
              <div>
                <ModeToggle />
              </div>
            </header>

            {/* Main takes all remaining space, center content vertically and horizontally */}
            <main className="flex-grow flex justify-center items-center w-full">
              {children}
            </main>

            <footer className="flex gap-[24px] flex-wrap items-center justify-center">
              {footerLinks.map(({ name, url }) => (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
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
