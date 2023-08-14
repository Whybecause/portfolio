import Image from "next/image";
import Link from "next/link";

import styles from "./Hero.module.css";
import background from "../../../public/hero.jpg";

function Hero() {
  return (
    <div className="fixed w-full min-h-screen inset-0 z-1">
      <Image
        alt="a nice background pitcure"
        src={background}
        fill
        style={{ objectFit: "cover" }}
        quality={100}
        priority
      />
      <div className="w-full absolute h-full text-white flex justify-center flex-col py-4">
        <div className="2xl:w-4/5 max-w-7xl mx-auto w-11/12">
          <div className={styles.flexContainer}>
            <h1 className="lg:text-8xl md:text-7xl text-5xl text-center">
              Full-stack developer <br /> programing with love
            </h1>
            <a
              href="/#projects"
              className={`${styles.btnCTA} md:text-lg md:px-8 md:py-4 hover:[&:not(:disabled)]:tracking-[0.075em]`}
            >
              Discover
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
