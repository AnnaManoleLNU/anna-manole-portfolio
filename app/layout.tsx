import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
// import { ThemeProvider } from "./theme-provider";

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
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} antialiased`}
      >
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
        <div className="flex flex-col min-h-screen p-2 mt-8 md:mt-0 md:p-8">
          <Navigation />

          <main className="flex flex-col flex-1 font-sans ">{children}</main>

          <footer className="w-full border-t font-sans">
            <div className=" grid grid-cols-2 md:grid-cols-3 items-end gap-4 p-4 text-sm">
              <div className="flex flex-col gap-1 text-left">
                <a
                  href="https://linkedin.com/in/anna-manole"
                  className="hover:underline font-semibold"
                >
                  Linkedin
                </a>
                <a
                  href="https://github.com/AnnaManoleLNU"
                  className="hover:underline font-semibold"
                >
                  Github
                </a>
                <a
                  href="mailto:manoleann@gmail.com"
                  className="hover:underline uppercase tracking-wide text-xs md:text-sm"
                >
                  manoleann@gmail.com
                </a>
              </div>

              <p className="font-semibold text-left md:text-center col-start-1 row-start-2 md:col-start-auto md:row-start-auto">
                annamanole.com
              </p>

              <p className="font-semibold text-right justify-self-end self-end col-start-2 row-span-2 md:col-start-auto md:row-span-1">
                © {new Date().getFullYear()}
              </p>
            </div>
          </footer>
        </div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
