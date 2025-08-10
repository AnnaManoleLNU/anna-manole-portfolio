"use client";

import Image from "next/image";
import { projects } from "@/lib/utils";
import ProjectInfo from "@/components/custom/projectInfo";

export default function Pwd() {
  const pwdProject = projects.find(
    (project) => project.title === "Personal Web Desktop"
  );

  if (!pwdProject) return <div>Project not found</div>;

  return (
    <section className="container mx-auto py-16">
      <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-12 pb-6 border-b">
        {pwdProject.title}
      </h1>

      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_auto] gap-12 xl:gap-16 items-end">
        <div className="flex flex-col gap-10 max-w-3xl">
          <ProjectInfo
            website={pwdProject.website}
            github={pwdProject.github}
            date={pwdProject.date}
            technologies={pwdProject.technologies}
          />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Main Application</h2>
            <p className="text-muted-foreground leading-relaxed">
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

        {/* RIGHT: Main image — intrinsic sizing, right-aligned, no upscaling */}
        <div className="justify-self-end self-end">
          <Image
            src="/pwd.png"
            alt="Personal Web Desktop Screenshot"
            width={1200}
            height={1800}
            className="w-auto h-auto max-h-full "
            sizes="(max-width: 1279px) 100vw, 600px"
            quality={90}
            priority
          />
        </div>
      </div>

      {/* Sub-Applications */}
      <div className="mt-20 text-base leading-relaxed space-y-16">
        {/* Memory: text | image (grid, bottom aligned) */}
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

          <Image
            src="/pwd-memory.png"
            alt="Memory Game Screenshot"
            width={800}
            height={1200}
            className="w-auto h-auto max-w-full "
            quality={90}
          />
        </div>

        {/* Chat: text | image (grid, bottom aligned) */}
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

          <Image
            src="/pwd-chat.png"
            alt="Chat App Screenshot"
            width={800}
            height={1200}
            className="w-auto h-auto max-w-full"
          />
        </div>

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

          <Image
            src="/pwd-cookbook.png"
            alt="Recipe Browser Screenshot"
            width={800}
            height={1200}
            className="w-auto h-auto max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
