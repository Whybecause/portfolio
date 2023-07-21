"use client";

import Hero from "./Hero/Hero";

export default function Homepage() {
  return (
    <>
      <Hero />

      <div>
        <h2>About</h2>
        <h3>Animated title: Full stack developer</h3>
        <p>description</p>
      </div>

      <div id="projects">
        <h2>Projects</h2>
        <p>discover blabla</p>
        <p>Cards of projects + responsive carousel scrolling that links to project detail</p>
      </div>

      <div>
        <h2>Experience</h2>

      </div>
    </>
  );
}
