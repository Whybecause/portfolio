"use client";

import About from "./About/About";
import Experience from "./Experience/Experience";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";

export default function Homepage() {
  return (
    <div id="homepage">
      <Hero />
      <div className="h-screen"></div>
      <About />
      <Projects />
      <Experience />
    </div>
  );
}
