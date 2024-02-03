import React, { useState } from "react";
import AboutMe from "./about/AboutMe";
import Projects from "./home/Projects";
import MessageForm from "./home/MessageForm";
import { useMessageStore } from "./store/messageStore";

export default function HomePage({ image }) {
  const { show } = useMessageStore();

  console.log(show);

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
