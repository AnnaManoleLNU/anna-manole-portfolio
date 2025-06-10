import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const projects = [
  {
    title: "Personal Web Desktop",
    type: "Programming",
    images: [
      "/pwd-chat.png",
      "/pwd-cookbook.png", 
      "/pwd-memory.png",
    ],
    technologies: ["WebComponents", "CSS", "ES6", "WebSockets", "Node.js"],
    description: "For this project I created a personal web desktop, which includes a chat application, a cookbook and a memory game. The web desktop is built using WebComponents, CSS and ES6. The chat application uses WebSockets for real-time communication. The cookbook allows users to see recipes, while the memory game is a card matching game with a timer and score tracking.",
    link: "/pwd",
  },
  {
    title: "Allel with CMS",
    type: "Programming",
    images: [
      "/allel-1.png",
      "/allel-2.png",
      "/allel-graphic-profile.png",
    ],
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Sanity CMS", "DigitalOcean"],
    description: "For this web application I worked together with my client, an electrical consulatancy, to create a new graphic profile, which included a rebranding through logotype. I have also given them the possibility to manage their own content through a CMS.",
    link: "/allel",
  },
]