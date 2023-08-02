"use client";

import About from "./About/About";
import Experience from "./Experience/Experience";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";

export default function Homepage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
    </>
  );
}
