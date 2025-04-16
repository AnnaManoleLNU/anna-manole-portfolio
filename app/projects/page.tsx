"use client";

import Image from "next/image";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import allelImage from "../public/projects/allel.png";

const projects = [
  {
    title: "Allel Website",
    description:
      "Designed and developed the allel.se website with a clean layout and custom CMS.",
    image: allelImage,
    technologies: ["React", "Tailwind CSS", "Typescript", "Sanity", "Figma"],
  },
  {
    title: "Personal Web Desktop (PWD)",
    description:
      "Single-page desktop-like application featuring a memory game, a real-time chat app using WebSockets, and a recipe browser using an external API.",
    image: "/projects/pwd.png",
    technologies: [
      "JavaScript",
      "WebSockets",
      "WebComponents",
      "HTML5",
      "CSS3",
      "PWA",
    ],
  },
  {
    title: "Global Food Visualization",
    description:
      "Data visualization tool showing global food production trends with interactive graphs.",
    image: "/projects/global-food.png",
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
    <section className="container mx-auto py-12">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Dialog>
              <Card className="flex flex-col h-full min-h-[500px] overflow-hidden shadow-md">
                <DialogTrigger asChild>
                  <div className="h-48 w-full relative grayscale hover:grayscale-0 cursor-pointer transition-all">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </DialogTrigger>

                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
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

              <DialogContent className="max-w-3xl">
                <div className="relative w-full h-[400px]">
                  <Image
                    src={project.image}
                    alt={`Full preview of ${project.title}`}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="mt-4">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p className="text-sm text-muted-foreground mt-2">
                    {project.description}
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
