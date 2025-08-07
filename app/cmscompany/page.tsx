"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";

export default function ProjectPage() {
  return (
    <section className="container mx-auto py-12">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl mb-2">
        CMS-Driven Company Website
      </h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {projects
          .find((project) => project.link === "/cmscompany")
          ?.technologies.map((tech, i) => (
            <Badge key={i} variant="outline">
              {tech}
            </Badge>
          ))}
      </div>

      <Button
        variant="outline"
        className=" mr-2 bg-red-600 hover:bg-red-700 text-white hover:text-white transition-colors"
        onClick={() => window.open("https://coolcompany.vercel.app/", "_blank")}
      >
        <span>Visit Website</span>
        <SquareArrowOutUpRight size={16} />
      </Button>

      <div className="mt-12 space-y-12 gap-4 text-base leading-relaxed text-justify">
        <div className="grid md:grid-cols-2 gap-14 items-stretch">
          {/* Left column: Text content */}
          <div className="flex flex-col justify-between space-y-8 h-full">
            <div>
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground">
                This project involved building a modern, responsive company website using a headless CMS. The goal was to enable easy content management, SEO optimization, and scalability—while maintaining a professional, uniform design.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li className="text-muted-foreground">
                  <strong className="text-foreground">CMS Integration:</strong> 
                  Easy project and content updates without touching code.
                </li>
                <li className="text-muted-foreground">
                  <strong className="text-foreground">SEO Optimization:</strong> 
                  Built-in SSR via Next.js ensures visibility in search engines.
                </li>
                <li className="text-muted-foreground">
                  <strong className="text-foreground">Cost Calculator:</strong> 
                  Optional utility feature for estimating service costs.
                </li>
                <li className="text-muted-foreground">
                  <strong className="text-foreground">Modern Tech Stack:</strong> 
                  Combines JAMstack principles with Next.js, Tailwind CSS, Sanity, and Vercel.
                </li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>

              <h3 className="text-xl font-semibold mt-4">Next.js</h3>
              <p className="text-muted-foreground">
                Offers server-side rendering, structured content, and great performance out-of-the-box.
              </p>

              <h3 className="text-xl font-semibold mt-4">Tailwind CSS</h3>
              <p className="text-muted-foreground">
                Enables a responsive and accessible UI using utility-first styling.
              </p>

              <h3 className="text-xl font-semibold mt-4">Sanity CMS</h3>
              <p className="text-muted-foreground">
                Flexible and scalable content management, with real-time editing and image support.
              </p>

              <h3 className="text-xl font-semibold mt-4">Vercel</h3>
              <p className="text-muted-foreground">
                Deployed on Vercel for optimal performance, CI/CD, and global availability.
              </p>
            </div>
          </div>

          {/* Right column: Optional image */}
          <div className="flex justify-center h-full">
            <figure>
              <Image
                src="/cms-project-thumbnail.png"
                alt="Cool Company website preview"
                width={800}
                height={1200}
                className="object-cover h-full border border-foreground"
              />
              <figcaption className="mt-2 text-center text-sm text-gray-600 italic">
                Visual concept of the CMS-driven company website
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
