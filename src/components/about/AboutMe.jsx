import React from "react";
import { BsDownload, BsEnvelope } from "react-icons/bs";
import john from "../../image/john.png";
//import john from "../../../public/files/Johnny_Antiojo_Jr_Resume.pdf";

export default function AboutMe(showMessage) {
  let yearsOfExperience = new Date();
  yearsOfExperience = yearsOfExperience.getFullYear() - 2019;

  return (
    <section className="text-gray-600 body-font z-100">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Hi I'm Johnny Antiojo Jr.
            <br className="hidden lg:inline-block" />A Full Stack Web Developer
          </h1>
          <p className="mb-8 leading-relaxed">
            Software Developer with {yearsOfExperience} of experience in
            Software Development industry, I am profecient in various
            programming languages such as Php(Laravel), Javascript(NodeJS,
            ReactJS, VueJS) and C#(.NET Framework), MERN, LAMP Stack.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Message <BsEnvelope className="m-1" />
            </button>
            <a href="files/Johnny_Antiojo_Jr_Resume.pdf" download>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                DownloadCV
                <BsDownload className="m-1" />
              </button>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover lg:h-[33rem] object-center rounded"
            alt="hero"
            src={john}
          />
        </div>
      </div>
    </section>
  );
}
