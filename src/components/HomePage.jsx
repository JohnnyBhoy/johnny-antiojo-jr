import React, { useState } from "react";
import AboutMe from "./about/AboutMe";
import Projects from "./home/Projects";

export default function HomePage({ image }) {
  return (
    <div className="flex">
      <div className="w-[30%] m-20">
        <AboutMe />
      </div>
      <div className="w-[70%] my-20">
        <Projects />
      </div>
    </div>
  );
}
