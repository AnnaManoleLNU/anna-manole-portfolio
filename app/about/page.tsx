import Image from "next/image";

export default function About() {
  return (
    <section className="container mx-auto py-12 px-32">
      <div className="flex gap-32 mb-8 items-center">
        <div>
          <h1 className="text-4xl font-extrabold font-cormorant tracking-tight lg:text-6xl mb-8">
            Anna Manole
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            sollicitudin, nunc et bibendum facilisis, nisi nunc aliquet nunc,
            nec tincidunt nunc nunc euismod nunc. Sed euismod, nisl eget
            consectetur adipiscing, nunc nisl aliquet nunc, eget tincidunt nunc
            nunc euismod nunc. Sed euismod, nisl eget consectetur adipiscing,
            nunc nisl aliquet nunc, eget tincidunt nunc nunc euismod nunc.
          </p>

          <p className="text-lg text-muted-foreground mb-4">
            Sed euismod, nisl eget consectetur adipiscing, nunc nisl aliquet
            nunc, eget tincidunt nunc nunc euismod nunc. Sed euismod, nisl eget
            consectetur adipiscing, nunc nisl aliquet nunc, eget tincidunt nunc
            nunc euismod nunc. Sed euismod,
          </p>
        </div>
        <Image
          src="/anna.png"
          alt="Anna Manole"
          width={500}
          height={500}
          className="object-cover"
        />
      </div>
    </section>
  );
}
