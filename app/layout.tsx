import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import { ThemeProvider } from "./theme-provider";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen p-8 pb-4">
            <Navigation />

            <main className="flex flex-col flex-1 font-sans ">
              {children}
            </main>

            <footer>
              <p className="text-sm text-muted-foreground text-center w-full p-4 font-sans">
                © {new Date().getFullYear()} Anna Manole. All rights reserved.
              </p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
