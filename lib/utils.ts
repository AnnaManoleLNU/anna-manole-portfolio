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
    date: "December 2023",
    type: "Programming",
    images: ["/pwd-chat.png", "/pwd-cookbook.png", "/pwd-memory.png"],
    technologies: ["WebComponents", "CSS", "ES6", "WebSockets", "Node.js"],
    description:
      "For this project I created a personal web desktop, which includes a chat application, a cookbook and a memory game. The web desktop is built using WebComponents, CSS and ES6. The chat application uses WebSockets for real-time communication. The cookbook allows users to see recipes, while the memory game is a card matching game with a timer and score tracking.",
    link: "/pwd",
  },
  {
    title: "CMS-Driven Company Website",
    website: "https://cms-company-website.vercel.app",
    github: "https://github.com/AnnaManoleLNU/CMS-Driven-Company-Website/",
    date: "November 2023",
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
      "This project involved building a modern, responsive company website using a headless CMS. The goal was to enable easy content management, SEO optimization, and scalability—while maintaining a professional, uniform design.",
    link: "/cms",
  },
  {
    title: "Selected Retouching Projects",
    type: "Design",
    website: "",
    github: "",
    date: "October 2023",
    images: [
      "/retouching-1.jpg",
      "/retouching-2.jpg",
      "/retouching-3.jpg",
      "/retouching-4.jpg",
    ],
    technologies: ["Photoshop", "Lightroom", "Canva"],
    description:
      "I have worked with different retouching projects, where I have used Photoshop, Lightroom and Canva to create visually appealing images. These projects include retouching portraits, product photography and nature photography.",
    link: "/retouching",
  },
];
