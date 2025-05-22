"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Globe, Github } from "lucide-react";
import { useMediaQuery } from "@/lib/hooks/use-media-query";

const projects = [
  {
    title: "Allel Electrical Consultancy",
    description:
      "Designed and developed the allel.se website with a clean layout and custom CMS.",
    image: "/allel.png",
    url: "https://allel.se",
    technologies: ["React", "Tailwind CSS", "Typescript", "Sanity", "Figma"],
  },
  {
    title: "Personal Web Desktop",
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
  const isDesktop = useMediaQuery("(min-width: 640px)");

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
              <div className="relative h-48 w-full overflow-hidden  group">
                {/* Background Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-500 ease-in-out group-hover:blur-0 blur-sm scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 z-10 transition-all duration-500 group-hover:bg-black/20" />

                {/* Title */}
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

          const DetailsContent = (
            <div className="flex flex-col gap-6">
              <div className="relative w-full h-64 md:h-96">
                <Image
                  src={project.image}
                  alt={`Full preview of ${project.title}`}
                  fill
                  className="object-cover rounded-md"
                />
              </div>

              <div>
                {/* <h2 className="text-2xl font-semibold">{project.title}</h2> */}
                <p className="text-muted-foreground mt-2 text-sm">
                  {project.description}
                </p>

                <div className="flex gap-3 mt-6 flex-wrap">
                  {project.url && (
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-input bg-background px-4 py-2 text-sm font-semibold shadow-sm transition hover:bg-accent hover:text-accent-foreground"
                    >
                      <Globe size={16} />
                      Visit Site
                    </Link>
                  )}
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-input bg-background px-4 py-2 text-sm font-semibold shadow-sm transition hover:bg-accent hover:text-accent-foreground"
                    >
                      <Github size={16} />
                      GitHub
                    </Link>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          );

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {isDesktop ? (
                <Dialog>
                  <DialogTrigger asChild>{TriggerCard}</DialogTrigger>
                  <DialogContent className="w-full max-w-[90vw] lg:max-w-[1200px] p-8">
                    <DialogTitle className="text-3xl font-semibold font-cormorant">
                      {project.title}
                    </DialogTitle>
                    {DetailsContent}
                  </DialogContent>
                </Dialog>
              ) : (
                <Drawer>
                  <DrawerTrigger asChild>{TriggerCard}</DrawerTrigger>
                  <DrawerContent className="p-6">
                    {DetailsContent}
                  </DrawerContent>
                </Drawer>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
