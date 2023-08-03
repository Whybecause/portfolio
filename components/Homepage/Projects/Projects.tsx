import Card from "./Card";

export const PROJECTS_LIST = [
  {
    date: "Sept 2022",
    title: "TheTipTop",
    technos: "Node.js, Sequelize, React, Cypress",
    slug: "thetiptop",
    imgSrc: "/about.jpg",
  },
  {
    date: "Sept 2021",
    title: "Atypikhouse",
    technos: "Next.js, Typescript, Prisma",
    slug: "atypikhouse",
    imgSrc: "/about.jpg",
  },
  {
    date: "July 2021",
    title: "Ingredients Manager",
    technos: "Node.js, Express, React, mongoDB",
    slug: "ingredients-manager",
    imgSrc: "/about.jpg",
  },
  {
    date: "Feb 2021",
    title: "Spiid App",
    technos: "MERN Stack",
    slug: "spiid-app",
    imgSrc: "/about.jpg",
  },
  {
    date: "Jan 2021",
    title: "Mataviguette",
    technos: "MERN Stack",
    slug: "mataviguette",
    imgSrc: "/about.jpg",
  },
  {
    date: "Oct 2020",
    title: "Okessapar",
    technos: "MERN Stack",
    slug: "okessapar",
    imgSrc: "/about.jpg",
  },
  {
    date: "Oct 2020",
    title: "Amazon Checker",
    technos: "Node.js, Express, React, pupeteer",
    slug: "amazon-checker",
    imgSrc: "/about.jpg",
  },
  {
    date: "June 2020",
    title: "Weather App",
    technos: "Vanilla Javascript",
    slug: "weather-app",
    imgSrc: "/about.jpg",
  },
];

export default function Projects() {
  return (
    <div
      id="projects"
      className="h-screen relative mainBg py-20 flex items-center"
    >
      <div className="container flex-grow w-full sm:py-16 mx-auto px-0">
        <h2 className="text-center">{`< Projects />`}</h2>

        <div className="mx-auto w-full md:w-4/5 px-4">
          <div
            id="scrollContainer"
            className="flex pb-4 flex-no-wrap overflow-x-scroll scrolling-touch items-start"
          >
            {PROJECTS_LIST.map((project) => (
              <Card
                key={project.title}
                imgSrc={"/hero.jpg"}
                date={project.date}
                title={project.title}
                technos={project.technos}
                slug={project.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
