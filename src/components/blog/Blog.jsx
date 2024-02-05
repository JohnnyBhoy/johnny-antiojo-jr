import React from "react";
import MessageForm from "../home/MessageForm";
import Projects from "../home/Projects";
import { useMessageStore } from "../store/messageStore";
import AboutMe from "../about/AboutMe";

export default function Blog() {
  const { show } = useMessageStore();
  let yearsOfExperience = new Date();
  yearsOfExperience = yearsOfExperience.getFullYear() - 2019;

  return (
    <div className="flex">
      {show ? (
        <div className="absolute z-50 h-screen w-screen grid place-items-center  backdrop-blur-sm bg-white/25  p-3  shadow">
          <MessageForm />
        </div>
      ) : null}

      <div className="w-[30%] m-20">
        <AboutMe />
      </div>
      <div className="w-[70%] my-20">
        <Projects />
      </div>
    </div>
  );
}
