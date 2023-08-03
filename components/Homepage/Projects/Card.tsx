type CardProps = {
  imgSrc: string;
  date: string;
  title: string;
  technos: string;
  slug: string;
};

export default function Card ({ imgSrc, date, title, technos, slug }: CardProps) {
  return (
    <div className="flex-none mr-8 md:pb-4 rounded-lg overflow-hidden relative aspect-[2/3] h-[max(55vmin,20rem)] rounded-md transform">
      <a
        href={`/project/${slug}`}
        className="group"
        aria-label="Show contentary project details"
      >
        <div className="flex items-center justify-center flex-col text-center absolute backdrop-blur-sm duration-300 gap-y-2 group-focus-visible:opacity-100 group-hover:opacity-100 inset-0 opacity-0 p-4 transition-opacity">
          <div className="overflow-hidden">
            <p className="uppercase text-xs duration-300 group-focus-visible:translate-y-0 group-hover:translate-y-0 text-neutrals-50/90 transition-transform translate-y-full">
              {date}
            </p>
          </div>
          <div className="overflow-hidden">
            <h3 className="duration-300 group-focus-visible:translate-y-0 group-hover:translate-y-0 transition-transform translate-y-full font-bold lg:text-4xl text-2xl">
              {title}
            </h3>
          </div>
          <div className="overflow-hidden">
            <p className="duration-300 group-focus-visible:translate-y-0 group-hover:translate-y-0 transition-transform translate-y-full text-neutrals-50/90 text-xs lg:text-sm">
              {technos}
            </p>
          </div>
        </div>
        <img
          className="w-full inset-0 -z-10 absolute h-full duration-700 group-focus-visible:scale-105 group-hover:scale-105 object-cover pointer-events-none transition-transform"
          src={imgSrc}
          alt="project picture"
        />
      </a>
    </div>
  );
};
