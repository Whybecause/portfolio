import Image from "next/image";

import about from "../../../public/about.jpg";

function About() {
  return (
    <div
      id="about"
      className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-screen relative mainBg"
    >
      <Image
        src={about}
        alt="a picture"
        className="rounded-lg w-full inset-0 object-cover h-full max-h-screen object-center"
        loading="lazy"
      />
      <div className="flex justify-center items-center flex-col">
        <h2 className="pb-14">{`< About />`}</h2>
        <div className="flex flex-col px-4 lg:px-12">
          <p>Hey, I am a French developer around Paris.</p>
          <p>
            Attracted by the computer world from a very young age, I am
            passionated about web development.
          </p>
          <p>
            My various professional experiences and my passion for music have
            allowed me to acquire transversal skills: rigour, work, curiosity
            and adaptability that I convert within this profession.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
