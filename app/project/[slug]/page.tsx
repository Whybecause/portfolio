import { Metadata } from "next";

import Custom404 from "@/app/not-found";
import { PROJECTS_LIST } from "@/components/Homepage/Projects/Projects";
import Image from "next/image";

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
  const project = PROJECTS_LIST.find((project) => project.slug === params.slug);

  if (!project) {
    return <Custom404 />;
  }

  return (
    <>
      <div className="h-screen">
        <div className="flex after:absolute after:bg-gradient-to-t after:from-gray-900 after:h-full after:inset-0 after:to-gray-900/60 after:w-full bg-gray-900 min-h-screen py-[14vh] relative w-full">
          <Image
            className="w-full object-center object-cover absolute h-full inset-0"
            fill
            alt="Picture of the project"
            src={project.imgSrc}
          />
          <div className="max-w-7xl mx-auto 2xl:w-4/5 w-11/12">
            <div className="flex justify-end flex-col h-full relative z-10">
              <p className="text-xs uppercase lg:text-sm mb-4 text-neutrals-50/90">
                {project.date}
              </p>
              <h1 className="font-bold mb-4 lg:text-6xl text-4xl">
                {project.title}
              </h1>
              <p className="max-w-prose leading-relaxed mb-8 text-neutrals-50/90">
                {project.technos}
              </p>
              <hr className="bg-gradient-to-r border-0 h-px to-transparent from-gray-100 mb-8 mt-4" />
              <div className="flex gap-x-4">
                <a
                  href="/"
                  className="flex justify-center items-center active:[&:not(:disabled)]:scale-[1.01] align-middle before:-left-3 before:-skew-x-[16deg] before:-z-10 before:absolute before:duration-500 before:h-full before:origin-left before:scale-x-0 before:top-0 before:transition-transform before:w-[calc(100%+1.5rem)] border-2 border-neutrals-50 disabled:opacity-70 duration-500 focus-visible:[&:not(:disabled)]:before:scale-x-100 hover:[&:not(:disabled)]:before:scale-x-100 isolate md:px-4 md:py-2 md:text-base overflow-hidden px-3 py-1.5 relative rounded-sm select-none text-sm transition-all before:bg-neutrals-900 bg-neutrals-50 focus-visible:text-neutrals-50 hover:[&:not(:disabled)]:text-neutrals-50 text-neutrals-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  View code
                </a>
              </div>
            </div>
            <svg
              className="-translate-x-1/2 absolute animate-bounce bottom-[3vh] h-9 left-1/2 w-9 z-10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.53 14.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="h-screen">
        <div className="container mx-auto px-4">
          <p>PICTURES</p>
        </div>
      </div>
    </>
  );
}