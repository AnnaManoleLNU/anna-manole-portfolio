export default function Home() {
  return (
    <section className="flex items-center relative">
      <div className="mt-24 w-full max-w-5xl text-center flex flex-col items-center space-y-8 animate-fade-in">
        <div className="space-y-4 relative">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-cormorant font-light text-foreground relative z-10">
            Hello!
          </h1>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-cormorant font-normal text-foreground relative z-10">
            I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-600 via-green-700 to-green-800 bg-clip-text text-transparent">
              Anna Manole
            </span>
            .
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-xs sm:text-base md:text-lg font-sans uppercase font-light tracking-[0.2em] max-w-2xl">
          <div className="flex items-center gap-3 group">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full group-hover:scale-110 transition-transform"></div>
            <span className="text-muted-foreground group-hover:text-blue-500 transition-colors">
              Frontend Developer
            </span>
          </div>

          {/* Separator */}
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-muted-foreground to-transparent md:hidden"></div>
          <div className="hidden md:block w-px h-8 bg-gradient-to-b from-transparent via-muted-foreground to-transparent"></div>

          <div className="flex items-center gap-3 group">
            <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full group-hover:scale-110 transition-transform"></div>
            <span className="text-muted-foreground group-hover:text-green-500 transition-colors">
              Graphic Designer
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
