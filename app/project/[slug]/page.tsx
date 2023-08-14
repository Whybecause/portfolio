import { Metadata } from "next";

import Custom404 from "@/app/not-found";
import { PROJECTS } from "../../../fakeDb/projects/index";
import Image from "next/image";
import GithubIcon from "@/components/styled/svg-icons/GithubIcon";
import ArrowDownIcon from "@/components/styled/svg-icons/ArrowDownIcon";

type MetadataProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const slug = params.slug;

  return {
    title: `Project | ${slug}`,
    description: `Presentation of the ${slug} project`,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((project) => project.slug === params.slug);

  if (!project) {
    return <Custom404 />;
  }

  const githubBaseURL = "https://github.com/Whybecause";

  return (
    <>
      <div className="min-h-screen">
        <div className="flex after:absolute after:bg-gradient-to-t after:from-gray-900 after:h-full after:inset-0 after:to-gray-900/60 after:w-full bg-gray-900 min-h-screen py-[14vh] relative w-full">
          <Image
            className="w-full object-center object-cover absolute h-full inset-0"
            fill
            alt="Picture of the project"
            src={project.imgSrc}
          />
          <div className="max-w-7xl mx-auto 2xl:w-4/5 w-11/12">
            <div className="flex justify-end flex-col h-full relative z-10">
              <p className="text-xs uppercase lg:text-sm mb-4 text-gray-300">
                {project.date}
              </p>
              <h1 className="font-bold mb-4 lg:text-6xl text-4xl">
                {project.title}
              </h1>
              <p className="max-w-prose leading-relaxed mb-8 text-gray-300">
                {project.technos}
              </p>
              <hr className="bg-gradient-to-r border-0 h-px to-transparent from-gray-100 mb-8 mt-4" />
              <div className="flex gap-x-4">
                <a
                  href={`${githubBaseURL}/${project.slug}`}
                  className="flex justify-center items-center active:[&:not(:disabled)]:scale-[1.01] align-middle before:-left-3 before:-skew-x-[16deg] before:-z-10 before:absolute before:duration-500 before:h-full before:origin-left before:scale-x-0 before:top-0 before:transition-transform before:w-[calc(100%+1.5rem)] border-2 disabled:opacity-70 duration-500 focus-visible:[&:not(:disabled)]:before:scale-x-100 hover:[&:not(:disabled)]:before:scale-x-100 isolate md:px-4 md:py-2 md:text-base overflow-hidden px-3 py-1.5 relative rounded-sm select-none text-sm transition-all
                  bg-gray-300
                  border-gray-300
                  text-gray-900
                  before:bg-gray-900
                  hover:border-green-500
                  hover:[&:not(:disabled)]:text-gray-300
                  "
                >
                  <GithubIcon />
                  View code
                </a>
              </div>
            </div>
            <ArrowDownIcon />
          </div>
        </div>
      </div>

      <div className="container mx-auto h-full max-w-7xl 2xl:w-4/5 w-11/12">
        <div className="pt-10">
          <h2 className="p-0">Description</h2>
          <div className="px-4 pt-8">
            {project?.description?.header?.map((header) => (
              <p key={header}>{header}</p>
            ))}
          </div>
        </div>

        <hr className="bg-gradient-to-r border-0 h-px to-transparent mt-10 mb-10 from-gray-100 " />

        {Boolean(project?.description?.features?.length) && (
          <div className="pb-20">
            <h2 className="p-0">Features</h2>
            <ul className="flex flex-col justify-center px-8 pt-8">
              {project?.description?.features?.map((feature) => (
                <li key={feature} className="list-disc">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="relative container mx-auto h-screen">
        <Image
          src={project.imgSrc}
          alt={`Picture of ${project.title}`}
          objectFit="contain"
          objectPosition="top"
          className="rounded-lg"
          fill
        />
      </div>
    </>
  );
}
