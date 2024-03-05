import React from "react";
import AboutMe from "./about/AboutMe";
import MessageForm from "./home/MessageForm";
import { useMessageStore } from "./store/messageStore";
import Projects from "./project/Projects";
import WorkExperience from "./experience/WorkExperience";
import About from "./about/About";

export default function HomePage({ image }) {
  const { show } = useMessageStore();

  return (
    <div className="flex flex-col p-10">
      {show ? (
        <div className="absolute z-50 h-screen w-screen grid place-items-center  backdrop-blur-sm bg-white/25  p-3  shadow">
          <MessageForm />
        </div>
      ) : null}

      <AboutMe />

      <Projects />

      <About />

      <WorkExperience />
    </div>
  );
}
