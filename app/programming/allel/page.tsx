import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function ProjectPage() {
  const technologies = [
    "Next.js",
    "Tailwind CSS",
    "Sanity",
    "DigitalOcean",
    "JavaScript",
  ];

  return (
    <section className="container mx-auto py-12 px-4 ">
      <h1 className="text-4xl font-extrabold font-cormorant tracking-tight lg:text-6xl mb-2">
        Allel Electrical Consultancy Website
      </h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech, i) => (
          <Badge key={i} variant="outline">
            {tech}
          </Badge>
        ))}
      </div>

      <div className="mt-12 space-y-12 gap-4 text-base leading-relaxed text-justify">
        {/* Requirements */}
        <div className="grid md:grid-cols-2 gap-14 items-stretch">
          {/* Left column: combined text sections */}
          <div className="flex flex-col justify-between space-y-8 h-full">
            <div>
              <h2 className="text-2xl font-bold mb-4">Project Vision</h2>
              <p className="text-muted-foreground">
                The electrical consultant firm Allel Elektrokonsult AB has hired
                me to deliver a website that would represent them in a suitable
                manner. The firm was grounded in 1968 and has its office in
                Stockholm. Since then, Allel has delivered quality services at
                an affordable price. Allel offers project planning for
                electrical and telecommunication installations (fire alarms,
                safety alarms, illumination systems, data networks, positioning
                systems) and provides electrical board authorized inspectors.
                <br />
                <br />
                Through their website they want to retain their current
                customers as well as attract new customers. They want to offer
                price estimates to their clients, organize and update the
                information present on the website easily, all while presenting
                themselves as a reliable contractor.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Target Groups</h2>
              <p className="text-muted-foreground">
                Previous clients that Allel had include municipal housing
                companies such as Stockholmshem, Svenska Bostäder and Sollentuna
                kommun. They would like to attract more private electricians as
                customers and offer them project planning and sketching of
                electrical systems. In summary, the target group is people who
                work in the industry, as well as any establishment in need of
                professional electrical consulting services.
                <br />
                <br />
                An intended user would also be the employees at Allel, who would
                like to easily update the projects on the website.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Basic Requirements & Unique Selling Points
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li className="text-muted-foreground">
                  <strong className="text-foreground">Uniform design:</strong> Allel would like a uniform
                  website design that signals professionalism and represents
                  their company values. They would like to be able to showcase
                  their work to previous, current and future customers.
                </li>
                <li className="text-muted-foreground">
                  <strong className="text-foreground">Search engine optimization (SEO):</strong> They want
                  to appear on the front page in search results for electrical
                  consultants in the Stockholm area.
                </li>
                <li className="text-muted-foreground">
                  <strong className="text-foreground">Cost calculator:</strong> Potential customers should
                  be able to calculate preliminary costs of services. This is a
                  unique selling point (USP), as no other similar establishment
                  currently offers this.
                </li>
                <li className="text-muted-foreground">
                  <strong className="text-foreground">Internal system:</strong> Allel would like an internal
                  system attached to the website for updating and managing
                  projects. This includes hosting high-resolution images and
                  sketches without impacting performance.
                </li>
              </ol>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">JAMstack</h2>
              <p className="text-muted-foreground">
                The application uses the JAM architecture. JAM stands for
                JavaScript, APIs and Markup. It removes the web experience layer
                from data and business logic, where 3rd party services are
                consumed through APIs. To do this the application uses a
                headless CMS (content managing system) that is an API driven
                platform for structured content. All the technologies used in
                this project are modern at the time the project is expected to
                be deployed.
              </p>

              <h3 className="text-xl font-semibold mt-4">Next.js</h3>
              <p className="text-muted-foreground">
                Next.js was chosen because of the SEO it provides through
                server-side rendering (SSR). When the pages are rendered on the
                server, all content is included in the HTML code sent to the
                client, allowing search engines to index the content more
                efficiently. Next.js also supports dynamical rendering. With the
                help of Next.js data can be easily structured, which makes it
                easy for search engines to know the contents of the website.
              </p>

              <h3 className="text-xl font-semibold mt-4">Tailwind CSS</h3>
              <p className="text-muted-foreground">
                Tailwind CSS was used to build a responsive, visually appealing
                and consistent webpage. Tailwind CSS has both predesigned
                classes to style CSS, as well as the ability to change the
                default value of these classes. By using Tailwind CSS&apos;s
                colour contrast classes, the web pages are user friendly and
                accessible to users with disabilities.
              </p>

              <h3 className="text-xl font-semibold mt-4">Sanity</h3>
              <p className="text-muted-foreground">
                Sanity uses an editing environment called Sanity Studio, that
                uses a custom schema with JavaScript. JavaScript is also used to
                add field validations, organize documents and set initial
                values. Sanity Studio was chosen for its scalability, image
                upload/edit support, and real-time collaboration. It uses a
                cloud-based data storage called the Sanity Content Lake,
                accessed through the Sanity API.
              </p>

              <h3 className="text-xl font-semibold mt-4">DigitalOcean</h3>
              <p className="text-muted-foreground">
                DigitalOcean was used to host both the main website and the CMS.
                It provides developer-friendly features like firewalls, SSH
                keys, and 2FA, while offering scalable infrastructure and access
                to APIs.
              </p>
            </div>
          </div>

          {/* Right column: Graphic profile image */}
          <div className="flex justify-center h-full">
            <figure>
              <Image
                src="/allel-graphic-profile.png"
                alt="Allel graphic profile"
                width={800}
                height={1200}
                className="rounded-lg shadow-md object-cover h-full"
              />
              <figcaption className="mt-2 text-center text-sm text-gray-600 italic">
                Graphic profile for Allel Elektrokonsult AB
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
