"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/utils";
import ProjectInfo from "@/components/custom/projectInfo";
import { AnimatePresence, motion } from "framer-motion";

export default function Pwd() {
  const [zoomSrc, setZoomSrc] = useState<string | null>(null);

  const pwdProject = projects.find(
    (project) => project.title === "Personal Web Desktop"
  );

  const handleZoom = useCallback((src: string) => setZoomSrc(src), []);
  const closeZoom = useCallback(() => setZoomSrc(null), []);

  // Lock scroll & ESC to close
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

  if (!pwdProject) return <div>Project not found</div>;

  return (
    <section className="container mx-auto py-16 relative">
      <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-12 pb-6 border-b">
        {pwdProject.title}
      </h1>

      {/* Main Application Section */}
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_auto] gap-12 xl:gap-16 items-end">
        <div className="flex flex-col gap-10 w-full xl:max-w-3xl">
          <ProjectInfo
            website={pwdProject.website}
            github={pwdProject.github}
            date={pwdProject.date}
            technologies={pwdProject.technologies}
          />

          <div className="space-y-10 text-base leading-relaxed">
            
            <p className="text-2xl font-bold leading-12">
              The Personal Web Desktop application mimics a desktop environment
              within a browser. It features a dock where users can launch
              different sub-applications and manage them just like in a
              traditional operating system. Multiple instances of the same or
              different sub-applications can be opened and freely dragged around
              the interface. The focused sub-application always appears in front
              of others, ensuring smooth multitasking.
            </p>
          </div>
        </div>

        <button
          onClick={() => handleZoom("/pwd.png")}
          className="inline-block cursor-zoom-in"
        >
          <Image
            src="/pwd.png"
            alt="Personal Web Desktop Screenshot"
            width={1200}
            height={1800}
            className="w-auto h-auto max-w-full"
            sizes="(max-width: 1279px) 100vw, 600px"
            quality={90}
            priority
          />
        </button>
      </div>

      {/* Sub-App Sections */}
      <div className="mt-20 text-base leading-relaxed space-y-16">
        {/* Memory Sub-App */}
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] gap-10 md:gap-16 items-end">
          <div className="flex flex-col gap-4 max-w-prose">
            <h2 className="text-2xl font-bold">Memory Sub-App</h2>
            <p className="text-muted-foreground text-justify">
              The Memory sub-application offers a classic memory game experience
              where players aim to find matching pairs of tiles. When tiles are
              flipped and do not match, they return to their original state,
              while successfully matched pairs disappear from the board. Players
              can choose from three difficulty levels and track their attempts
              and completion time.
            </p>
          </div>

          <button
            onClick={() => handleZoom("/pwd-memory.png")}
            className="inline-block cursor-zoom-in"
          >
            <Image
              src="/pwd-memory.png"
              alt="Memory Game Screenshot"
              width={800}
              height={1200}
              className="w-auto h-auto max-w-full"
              quality={90}
            />
          </button>
        </div>

        {/* Chat Sub-App */}
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] gap-10 md:gap-16 items-end">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Chat Sub-App</h2>
            <p className="text-muted-foreground text-justify">
              The Chat sub-application enables real-time communication using
              WebSockets. Users can set their username and start chatting
              instantly in the internal school system. Messages are displayed in
              a scrollable window and support multiple users simultaneously.
            </p>
          </div>

          <button
            onClick={() => handleZoom("/pwd-chat.png")}
            className="inline-block cursor-zoom-in"
          >
            <Image
              src="/pwd-chat.png"
              alt="Chat App Screenshot"
              width={800}
              height={1200}
              className="w-auto h-auto max-w-full"
            />
          </button>
        </div>

        {/* Recipe Browser Sub-App */}
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] gap-10 md:gap-16 items-end">
          <div className="flex flex-col gap-4 ">
            <h2 className="text-2xl font-bold">Recipe Browser Sub-App</h2>
            <p className="text-muted-foreground text-justify">
              The Recipe Browser sub-application lets users search for recipes
              using an external API. It retrieves and displays recipe details,
              including ingredients and cooking instructions, to help users find
              new culinary inspiration.
            </p>
          </div>

          <button
            onClick={() => handleZoom("/pwd-cookbook.png")}
            className="inline-block cursor-zoom-in"
          >
            <Image
              src="/pwd-cookbook.png"
              alt="Recipe Browser Screenshot"
              width={800}
              height={1200}
              className="w-auto h-auto max-w-full"
            />
          </button>
        </div>
      </div>

      {/* Zoom Overlay */}
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
              onClick={closeZoom} // Clicking image also closes
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
    </section>
  );
}
