"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="container mx-auto py-12 px-4">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-32 mb-8 items-center">
        
        {/* Text Block with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-left w-full"
        >
          <h1 className="text-4xl font-extrabold font-cormorant tracking-tight lg:text-6xl mb-6">
            Hi, I&apos;m Anna
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-4">
            Since I was small, I’ve been interested in computers. Growing up in
            Romania, I started playing video games on an old Nintendo console at
            the age of 7, often competing against my friends or parents. When I
            was 13, I got my first computer and began experimenting with
            creating graphics in Photoshop. It was cool to see how I could add
            my own touch to a picture and create something new.
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-4">
            Later on, I started learning how to code and quickly fell in love
            with all the possibilities that it would bring. I used to dream about
            spending all day at the computer, and now I get to do it for a
            living.
          </p>

          <div className="text-base md:text-lg text-muted-foreground mb-4">
            <h2 className="font-cormorant text-2xl font-semibold text-foreground mb-2">
              Education
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-foreground font-bold">+</span>
                <div>
                  <p className="font-medium">
                    Linnaeus University (2022–2025), BSc in Computer Science
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground font-bold">+</span>
                <div>
                  <p className="font-medium">
                    Dalarna University (2018–2021), BSc in Graphic Design
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Image with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-lg mx-auto lg:mx-0"
        >
          <Image
            src="/anna.png"
            alt="Anna Manole"
            width={500}
            height={500}
            className="rounded-2xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
