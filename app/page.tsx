import Project from "@/components/project";

export default function Home() {
  return (
    <>
    <section className="flex flex-col py-12  border-b border-foreground w-full">
      <h1 className="text-xl md:text-2xl lg:text-5xl font-cormorant">
        Hi, I am Anna Manole,
        <br />
        <span className="font-bold text-blue-500">
          full-stack developer
        </span>{" "}
        and <span className="font-bold text-green-600">graphic designer</span>.
      </h1>

      <p className="text-sm md:text-base lg:text-lg font-sans">
        Currently based in Sweden and with over 3 years of experience in
        programming and design, let’s work together!
      </p>
    </section>
      <Project />
    </>
  );
}
