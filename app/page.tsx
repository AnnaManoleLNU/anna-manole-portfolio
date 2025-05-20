export default function Home() {
  return (
    <section className="w-full max-w-5xl px-6 sm:px-12 text-foreground">
      <div className="flex flex-col items-center lg:flex-row gap-12">
        <div className="flex-[1.5]">
          <div className="inline-flex flex-col items-start sm:items-center">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-primary animate-[fadeIn_1s_ease-out_forwards] whitespace-nowrap">
              Anna Manole
            </h1>
            <p className="text-base sm:text-lg mt-1 text-muted-foreground text-center sm:text-left w-max">
              Frontend Developer & Graphic Designer
            </p>
          </div>
        </div>
        {/* Right block: About Me */}
        <div className="flex-[1.75] text-base sm:text-lg text-muted-foreground leading-relaxed italic">
          <p>
            I love making websites and thinking about my users. My background in graphic design gives me an eye for layout and detail, while my frontend expertise ensures responsive, performant, and user-centered web interfaces.
          </p>
        </div>
      </div>
    </section>
  );
}
