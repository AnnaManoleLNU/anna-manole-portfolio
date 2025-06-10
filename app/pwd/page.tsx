import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { projects } from "@/lib/utils";

export default function Pwd() {
  return (
    <section className="container mx-auto py-12 ">
      <h1 className="text-4xl font-extrabold  tracking-tight lg:text-6xl mb-2">
        Personal Web Desktop Application
      </h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {projects
          .find((project) => project.link === "/pwd")
          ?.technologies.map((tech, i) => (
            <Badge key={i} variant="outline">
              {tech}
            </Badge>
          ))}
      </div>

      <div className="mt-12 space-y-12 text-base leading-relaxed text-justify">
        <div className="flex flex-col lg:flex-col xl:flex-row gap-14 items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Main Application</h2>
            <p className="text-muted-foreground">
              The Personal Web Desktop application mimics a desktop environment
              within a browser. It features a dock where users can launch
              different sub-applications and manage them just like in a
              traditional operating system. Multiple instances of the same or
              different sub-applications can be opened and freely dragged around
              the interface. The focused sub-application always appears in front
              of others, ensuring smooth multitasking.
            </p>
          </div>
          <Image
            src="/pwd.png"
            alt="Personal Web Desktop Screenshot"
            width={800}
            height={1200}
            className="object-cover h-full border border-foreground"
          />
        </div>

        {/* Sub-Applications Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Memory App */}
          <div className="flex flex-col items-center">
            <Image
              src="/pwd-memory.png"
              alt="Memory Game Screenshot"
              width={400}
              height={600}
              className="object-cover  border border-foreground"
            />
            <h2 className="text-xl font-bold mt-4">Memory Sub-App</h2>
            <p className="text-muted-foreground">
              The Memory sub-application offers a classic memory game experience
              where players aim to find matching pairs of tiles. When tiles are
              flipped and do not match, they return to their original state,
              while successfully matched pairs disappear from the board. Players
              can choose from three difficulty levels and track their attempts
              and completion time.
            </p>
          </div>

          {/* Chat App */}
          <div className="flex flex-col items-center">
            <Image
              src="/pwd-chat.png"
              alt="Chat App Screenshot"
              width={400}
              height={600}
              className="object-cover  border border-foreground"
            />
            <h2 className="text-xl font-bold mt-4">Chat Sub-App</h2>
            <p className="text-muted-foreground">
              The Chat sub-application enables real-time communication using
              WebSockets. Users can set their username and start chatting
              instantly in the internal school system. Messages are displayed in
              a scrollable window and support multiple users simultaneously.
            </p>
          </div>

          {/* Recipe Browser App */}
          <div className="flex flex-col items-center">
            <Image
              src="/pwd-cookbook.png"
              alt="Recipe Browser Screenshot"
              width={400}
              height={600}
              className="object-cover border border-foreground"
            />
            <h2 className="text-xl font-bold mt-4">Recipe Browser Sub-App</h2>
            <p className="text-muted-foreground">
              The Recipe Browser sub-application lets users search for recipes
              using an external API. It retrieves and displays recipe details,
              including ingredients and cooking instructions, to help users find
              new culinary inspiration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
