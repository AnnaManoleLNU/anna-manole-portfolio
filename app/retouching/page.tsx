"use client";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/utils";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export default function Retouching() {
  return (
    <section className="container mx-auto py-12 ">
      <h1 className="text-4xl font-extrabold  tracking-tight lg:text-6xl mb-2">
        Selected Retouching Projects
      </h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {projects
          .find((project) => project.link === "/retouching")
          ?.technologies.map((tech, i) => (
            <Badge key={i} variant="outline">
              {tech}
            </Badge>
          ))}
      </div>

      <div className="mt-12 space-y-12 text-base leading-relaxed">
        <div className="flex flex-col lg:flex-col xl:flex-row gap-14 items-center">
          <div className="flex-1">
            <p className="text-muted-foreground text-justify">
              In this section, I showcase a selection of my retouching projects
              where I utilized Photoshop, Lightroom, and Canva to enhance the
              visual appeal of various images. These projects include retouching
              portraits, product photography, and nature photography.
            </p>
          </div>
        </div>
        {/* Do a before and after image comparison slider */}

        <div className="flex flex-col xl:flex-row gap-0 md:gap-8 items-center">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold ">Acqua di Gioia Perfume</h2>
            <p className="text-muted-foreground text-justify">
              This project involved retouching a product photograph of the Acqua
              di Gioia perfume. The goal was to enhance the image&apos;s clarity and
              color vibrancy while maintaining the product&apos;s natural look. The
              final result showcases a polished and appealing representation of
              the perfume. 
              <br />
              <br />
              The surface of the image has been cleaned up, the pictures behind the glass, as well as the greenery. The bottle has been cleaned up, hose has been removed, cap has been polished. I have created a vector of the logo and placed it on the bottle, to give it a more professional look high quality look, suitable for advertising and marketing purposes.
              <br />
              <br />
              I have also added a reflection to the bottle, to give it an enchanted look by distorting the orriginal reflections in the glass table. The colors have been enachaned to be warmer and more inviting, while the overall composition has been balanced to draw attention to the product.
               
            </p>
          </div>
        
            {/* React Compare Slider for before and after images */}
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage
                  src="/retouching-1.jpg"
                  srcSet="/retouching-1.jpg"
                  alt="Before Retouching"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src="/retouching-1-before.jpg"
                  srcSet="/retouching-1-before.jpg"
                  alt="After Retouching"
                />
              }
              position={50}
            />
          
        </div>
      </div>
    </section>
  );
}
