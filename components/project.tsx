import Image from "next/image";
import { projects } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function Project() {
  return (
    <section className="flex flex-col border-b border-foreground font-sans w-full py-12">
      <div className="flex flex-col gap-20">
        {projects.map((project) => (
          <div key={project.title} className="flex flex-col gap-4">
            {/* Images duplicated for carousel effect */}
            <div className="carousel">
              <div className="carsousel-inner">
                {project.images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`${project.title} image ${index + 1}`}
                    width={300}
                    height={300}
                    className="object-cover w-[300px] h-[300px] border border-foreground grayscale card"
                    quality={100}
                  />
                ))}
              </div>
              <div aria-hidden className="carsousel-inner">
                {project.images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`${project.title} image ${index + 1}`}
                    width={300}
                    height={300}
                    className="object-cover w-[300px] h-[300px] border border-foreground grayscale card"
                    quality={100}
                  />
                ))}
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-4 md:flex-row md:justify-between  lg:gap-64  text-muted-foreground">
              <div className="flex gap-2 flex-1">
                <p className="text-sm text-blue-500">{project.type}</p>
                <div className="flex flex-col">
                  <h2 className="text-sm font-bold m-0 text-foreground">
                    {project.title}
                  </h2>
                  <p className="text-sm text-muted-foreground m-0">
                    {project.technologies.join(" / ")}
                  </p>
                </div>
              </div>
              <div className="flex flex-col flex-1 md:ml-48">
                <p className="text-sm">{project.description}</p>
                <div className="group font-semibold mt-2 flex items-center">
      <a
        href={project.link}
        className="text-muted-foreground"
      >
        View Project
      </a>
      <ArrowRight className="inline ml-1 h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1" />
    </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
