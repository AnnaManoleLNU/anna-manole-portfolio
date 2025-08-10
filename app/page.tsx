import Project from "@/components/custom/project";

export default function Home() {
  return (
    <>
    <section className="flex flex-col pt-12 pb-8 border-b border-foreground w-full">
      <h1 className="text-xl md:text-2xl lg:text-5xl">
        Hi, I am Anna Manole,
        <br />
        <span className="font-bold text-blue-500">
          developer
        </span>{" "}
        and <span className="font-bold text-green-600">designer</span>.
      </h1>

      <p className="text-sm md:text-base lg:text-lg font-sans mt-2">
        Currently based in Sweden, I have over 3 years of experience in full-stack web
        development and graphic design such as logotypes, typography and retouching. Let’s work together!
      </p>
    </section>
      <Project />
    </>
  );
}
