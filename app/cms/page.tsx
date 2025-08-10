"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/utils";
import ProjectInfo from "@/components/custom/projectInfo";
import { AnimatePresence, motion } from "framer-motion";
import BackButton from "@/components/custom/backButton";

export default function ProjectPage() {
  const [zoomSrc, setZoomSrc] = useState<string | null>(null);

  const cmsProject = projects.find((p) => p.link === "/cms");

  const handleZoom = useCallback((src: string) => setZoomSrc(src), []);
  const closeZoom = useCallback(() => setZoomSrc(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeZoom();
    if (zoomSrc) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [zoomSrc, closeZoom]);

  if (!cmsProject)
    return (
      <section className="container mx-auto py-16">Project not found</section>
    );

  return (
    <section className="container mx-auto py-16 relative">
      <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-12 pb-6 border-b">
        CMS-Driven Company Website
      </h1>

      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_auto] gap-12 xl:gap-16 items-start">
        <div className="flex flex-col gap-20 w-full xl:max-w-3xl">
          <ProjectInfo
            website={cmsProject.website}
            github={cmsProject.github}
            date={cmsProject.date}
            technologies={cmsProject.technologies}
          />

          <div className="space-y-20 text-base leading-relaxed">
            <p className="text-2xl font-bold leading-12">
              This project involved building a modern, responsive company
              website using a headless CMS. The goal was to enable easy content
              management, SEO optimization, and scalability—while maintaining a
              professional, uniform design.
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Key Features</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li className="text-muted-foreground">
                  <strong className="text-foreground">CMS Integration: </strong>
                  Easy project and content updates without touching code.
                </li>
                <li className="text-muted-foreground">
                  <strong className="text-foreground">
                    SEO Optimization:{" "}
                  </strong>
                  Built-in SSR via Next.js ensures visibility in search engines.
                </li>
                <li className="text-muted-foreground">
                  <strong className="text-foreground">
                    Modern Tech Stack:{" "}
                  </strong>
                  Combines JAMstack principles with Next.js, Tailwind CSS,
                  Sanity, and Vercel.
                </li>
              </ol>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold mb-1">Technology Stack</h2>

              <h3 className="text-xl font-semibold mt-4">Next.js</h3>
              <p className="text-muted-foreground">
                Offers server-side rendering, structured content, and great
                performance out-of-the-box.
              </p>

              <h3 className="text-xl font-semibold mt-4">Tailwind CSS</h3>
              <p className="text-muted-foreground">
                Enables a responsive and accessible UI using utility-first
                styling.
              </p>

              <h3 className="text-xl font-semibold mt-4">Sanity CMS</h3>
              <p className="text-muted-foreground">
                Flexible and scalable content management, with real-time editing
                and image support.
              </p>

              <h3 className="text-xl font-semibold mt-4">Vercel</h3>
              <p className="text-muted-foreground">
                Deployed on Vercel for optimal performance, CI/CD, and global
                availability.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => handleZoom("/cms-graphic-profile.png")}
          className="inline-block cursor-zoom-in"
        >
          <figure className="max-w-full">
            <Image
              src="/cms-graphic-profile.png"
              alt="Cool Company website preview"
              width={800}
              height={1200}
              className="w-auto h-auto max-w-full"
              quality={90}
              priority
            />
            <figcaption className="mt-2 text-center text-sm text-muted-foreground italic">
              Visual concept of the CMS-driven company website
            </figcaption>
          </figure>
        </button>
      </div>

      <AnimatePresence>
        {zoomSrc && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={closeZoom}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeZoom} 
            >
              <Image
                src={zoomSrc}
                alt="Zoomed"
                width={1600}
                height={2400}
                className="w-auto h-auto max-w-[90vw] max-h-[90vh] cursor-zoom-out"
                quality={95}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

       <BackButton />
    </section>
  );
}
