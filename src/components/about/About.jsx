import React from "react";
import MessageForm from "../home/MessageForm";
import Projects from "../home/Projects";
import AboutMe from "./AboutMe";
import { useMessageStore } from "../store/messageStore";

const About = () => {
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
      <div className="w-[70%] my-20 space-y-6">
        <p className="p-6 text-md text-slate-600 text-justify shadow-md">
          Hi visitor, my name is Johnny Antiojo I'm 29 years old and your
          software engineer, i am profecient in c++, .net, php, react js ,react
          ,vanillaJS, VScode and working and It specialist for almost 5 years, i
          started my career last 2019 where and i work as a full stack developer
          here in our local community{" "}
        </p>

        <p className="p-6 text-md text-slate-600 text-justify shadow-md">
          I developed several operating system several web several web
          application and managed to automate some of the offices here in our
          locality last 2020 i work in a clinical research organization located
          at miami florida i work there for almost 3 years i was i started my
          career there as a junior developer and then promoted to the developer
          by the august of 2023
        </p>

        <p className="p-6 text-md text-slate-600 text-justify shadow-md">
          I started my career there as a database administrator and i work in
          production department and also work for the development as well as a
          train some of the newcomers I resign i left the company last august
          2023 due to my personal reason i{" "}
        </p>

        <p className="p-6 text-md text-slate-600 text-justify shadow-md">
          Now i'm working as a freelance developer in a lead generation company
          i was a full stock developer here managing three person under me and
          now i'm trying to search for an opportunity for i can use my technical
          skills and import my ideas of web developer please{" "}
        </p>

        <p className="p-6 text-md text-slate-600 text-justify shadow-md">
          If you're interested in my services let's let me know and contact me
          at 0938-07 6 3 8 and please send me an email in jr until boy at
          gmail.com thank you for visiting in my website
        </p>
      </div>
    </div>
  );
};

export default About;
