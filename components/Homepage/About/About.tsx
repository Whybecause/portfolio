import Image from "next/image";

import about from "../../../public/about.jpg";

function About() {
  return (
    <div id="#about">
      <div className="grid grid-cols-2 gap-4 h-screen">
        <div className="relative h-full">
          <Image
            src={about}
            alt="a picture"
            className="rounded-lg w-full inset-0 object-cover h-full max-h-screen object-center"
            loading="lazy"
          />
        </div>
        <div className="flex justify-center items-center flex-col">
          <h2>{`< About />`}</h2>
          <p>Hey, I am a French developer around Paris.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
