import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
type Project = {
  title: string;
  website: string;
  github: string;
  date: string;
  type: string;
  images: string[];
  technologies: string[];
  description: string;
  link: string;
};

export const projects: Project[] = [
  {
    title: "Personal Web Desktop",
    website: "https://personal-web-desktop.vercel.app",
    github: "https://github.com/AnnaManoleLNU/pwd",
    date: "December 2022",
    type: "Programming",
    images: ["/pwd-chat.png", "/pwd-cookbook.png", "/pwd-memory.png"],
    technologies: ["WebComponents", "CSS", "ES6", "WebSockets", "Node.js"],
    description:
      "The Personal Web Desktop application mimics a desktop environment within a browser. It features a dock where users can launch different sub-applications and manage them just like in a traditional operating system.",
    link: "/pwd",
  },
  {
    title: "CMS-Driven Company Website",
    website: "https://cmscompany.vercel.app",
    github: "https://github.com/AnnaManoleLNU/cmscompany",
    date: "June 2023",
    type: "Programming",
    images: ["/cms-1.png", "/cms-2.png", "/cms-graphic-profile.png"],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Sanity CMS",
      "Vercel",
    ],
    description:
      "Fully customizable company website using Sanity, a headless CMS. The goal was to enable easy content management, SEO optimization, and scalability, while maintaining a professional, uniform design.",
    link: "/cms",
  },
  {
    title: "Selected Retouching Projects",
    type: "Design",
    website: "",
    github: "",
    date: "June 2021",
    images: [
      "/retouching-1.jpg",
      "/retouching-2.jpg",
      "/retouching-3.jpg",
      "/retouching-4.jpg",
    ],
    technologies: ["Photoshop", "Lightroom"],
    description:
      "Different retouching projects, where I have used Photoshop and Lightroom to for retouching or creative photography.",
    link: "/retouching",
  },
];
