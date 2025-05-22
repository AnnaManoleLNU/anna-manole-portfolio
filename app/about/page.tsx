import Image from "next/image";

export default function About() {
  return (
    <section className="container mx-auto px-6 md:px-12 lg:px-32 py-12">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 mb-8">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-extrabold font-cormorant tracking-tight lg:text-6xl mb-6">
            Anna Manole
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            sollicitudin, nunc et bibendum facilisis, nisi nunc aliquet nunc,
            nec tincidunt nunc nunc euismod nunc.
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-4">
            Sed euismod, nisl eget consectetur adipiscing, nunc nisl aliquet
            nunc, eget tincidunt nunc nunc euismod nunc.
          </p>
        </div>

        <div className="w-full max-w-lg mx-auto lg:mx-0">
          <Image
            src="/anna.png"
            alt="Anna Manole"
            width={800}
            height={800}
            className="w-full h-auto object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
