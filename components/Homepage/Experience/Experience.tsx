const EXPERIENCES = [
  "2022-2023: hired by LaBelleAssiette as full-stack developer.",
  "2021-2022: work-study at LaBelleAssiette as full-stack developer",
  "2020-2021: work-study at Staedtler for digital marketing missions.",
  "2019: Started a school program at My Digital School.",
];

export default function Experience() {
  return (
    <div id="experience" className="min-h-screen relative mainBg md:py-20">
      <div className="container py-16 mx-auto">
        <h2 className="pb-14">{`< Experience />`}</h2>

        <ul className="pl-8 pr-4 flex flex-col">
          {EXPERIENCES.map((experience) => (
            <>
              <li key={experience} className="list-disc">
                {experience}
              </li>
              <br />
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}
