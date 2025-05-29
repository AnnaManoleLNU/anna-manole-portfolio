"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Allel Electrical Consultancy",
    slug: "allel",
    description:
      "Designed and developed the allel.se website with a clean layout and custom CMS.",
    image: "/allel.png",
    url: "https://allel.se",
    technologies: ["React", "Tailwind CSS", "Typescript", "Sanity", "Figma"],
  },
  {
    title: "Personal Web Desktop",
    slug: "pwd",
    description:
      "Single-page desktop-like application featuring a memory game, a real-time chat app using WebSockets, and a recipe browser using an external API.",
    image: "/pwd.png",
    url: "https://personal-web-desktop.vercel.app/",
    github:
      "https://github.com/AnnaManoleLNU/food-production-visualization-original",
    technologies: [
      "JavaScript",
      "WebSockets",
      "WebComponents",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Global Food Visualization",
    slug: "global-food-visualization",
    description:
      "Data visualization tool showing global food production trends with interactive graphs.",
    image: "/global-food.png",
    url: "https://food-production-visualization.vercel.app/",
    github: "https://github.com/yourname/global-food-visualization",
    technologies: [
      "Next.js",
      "D3.js",
      "Elastic Search",
      "MongoDB",
      "Tailwind CSS",
    ],
  },
];

export default function Projects() {

  return (
    <section className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-extrabold font-cormorant tracking-tight lg:text-6xl mb-2">
        Programming Projects
      </h1>

      <p className="text-lg text-muted-foreground mb-4">
        Here are some of my recent projects that showcase my skills in web
        development and programming.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const TriggerCard = (
            <Card className="flex flex-col h-full min-h-[500px] overflow-hidden shadow-md">
              <div className="relative h-48 w-full overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-500 ease-in-out group-hover:blur-0 blur-sm scale-105"
                />

                <div className="absolute inset-0 bg-black/50 z-10 transition-all duration-500 group-hover:bg-black/20" />

                <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl md:text-3xl lg:text-4xl font-bold z-20 text-center px-4">
                  {project.title}
                </h2>
              </div>

              <CardHeader>
                <CardTitle className="font-cormorant text-2xl"></CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col justify-between flex-grow">
                <p className="mb-4 text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={`/programming/${project.slug}`} className="block">
                {TriggerCard}
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
