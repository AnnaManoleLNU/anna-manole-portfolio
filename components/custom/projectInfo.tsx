import { Button } from "../ui/button";

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
        <div className="flex justify-between pb-4 border-b">
          <h2 className="font-semibold">Live Website </h2>
          <Button
            variant="link"
            className="underline text-muted-foreground text-sm pr-0 font-normal"
            onClick={() => window.open(website, "_blank")}
          >
            {website}
          </Button>
        </div>

        <div className="flex justify-between pb-4 border-b">
          <h2 className="font-semibold">GitHub Repository</h2>
          <Button
            variant="link"
            className="underline text-muted-foreground text-sm pr-0 font-normal"
            onClick={() => window.open(github, "_blank")}
          >
            {github}
          </Button>
        </div>

        <div className="flex justify-between pb-4 border-b">
          <h2 className="font-semibold">Date</h2>
          <p className=" text-muted-foreground text-sm">{date}</p>
        </div>

        <div className="flex justify-between pb-4">
          <h2 className="font-semibold">Technologies</h2>

          <p className="text-muted-foreground text-sm">
            {technologies.join(",\u00A0\u00A0")}
          </p>
        </div>
      </div>
    </div>
  );
}
