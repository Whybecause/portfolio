import Image from "next/image";

import about from "../../../public/about.jpg";

function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-screen relative mainBg">
      <div className="">
        <Image
          src={about}
          alt="a picture"
          className="rounded-lg w-full inset-0 object-cover h-full max-h-screen object-center"
          loading="lazy"
        />
      </div>
      <div id="about" className="flex justify-center items-center text-center flex-col">
        <h2>{`< About />`}</h2>
        <p>Hey, I am a French developer around Paris.</p>
      </div>
    </div>
  );
}

export default About;
