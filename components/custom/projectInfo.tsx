type ProjectInfoProps = {
  title: string;
  website: string;
  github: string;
  date: string;
  technologies: string[];
};

export default function ProjectInfo({
  title,
  website,
  github,
  date,
  technologies,
}: ProjectInfoProps) {
  return (
    <div>
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl mb-12 pb-4 border-b">
        {title}
      </h1>

      <div className="lg:w-1/2 flex flex-col gap-4">
        {/* Row */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] pb-4 border-b items-center gap-x-8">
          <h2 className="font-semibold text-left">Live Website</h2>
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="md:justify-self-end text-left md:text-right text-sm text-muted-foreground underline break-words break-all"
          >
            {website}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-center pb-4 border-b gap-x-8">
          <h2 className="font-semibold text-left">GitHub Repository</h2>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="md:justify-self-end text-left md:text-right text-sm text-muted-foreground underline break-words break-all"
          >
            {github}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-center pb-4 border-b gap-x-8">
          <h2 className="font-semibold text-left">Date</h2>
          <p className="md:justify-self-end text-left md:text-right text-sm text-muted-foreground break-words break-all">
            {date}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-center pb-4 gap-x-8">
          <h2 className="font-semibold text-left">Technologies</h2>
          <p className="md:justify-self-end text-left md:text-right text-sm text-muted-foreground break-words break-all">
            {technologies.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}
