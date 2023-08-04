import Card from "./Card";
import { PROJECTS } from '../../../fakeDb/projects/index';

export default function Projects() {
  return (
    <div
      id="projects"
      className="h-screen relative mainBg md:py-20 flex items-center"
    >
      <div className="container flex-grow w-full sm:py-16 mx-auto px-0">
        <h2 className="text-center pb-14">{`< Projects />`}</h2>

        <div className="mx-auto w-full md:w-4/5 px-4">
          <div
            id="scrollContainer"
            className="flex pb-4 flex-no-wrap overflow-x-scroll scrolling-touch items-start"
          >
            {PROJECTS.map((project) => (
              <Card
                key={project.title}
                imgSrc={project.imgSrc}
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
