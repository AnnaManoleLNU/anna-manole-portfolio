import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Allel Website",
    description:
      "Designed and developed the allel.se website with a clean layout and custom CMS.",
    image: "/projects/allel.png",
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
    image: "/projects/food-viz.png",
    technologies: ["Next.js", "D3.js", "Elastic Search", "MongoDB", "Tailwind CSS"],
  },
]

export default function Projects() {
  return (
    <section className="container mx-auto py-12">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden shadow-md">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={300}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
