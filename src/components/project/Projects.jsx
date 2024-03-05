import React from "react";
import { BsGithub, BsGlobe } from "react-icons/bs";
import { projects } from "../utils/projects";
import ai from "../../image/ai.png";
import rs from "../../image/rs.png";

const Projects = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
            My Projects
          </h1>

          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Below are the projects that I made and had been colloborated since I
            started my career in 2019, I built them using different programming
            languages and when I work as a software developer in different
            companies for both local and international clients
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects?.map((project) => (
            <div className="p-4 lg:w-1/2" key={project?.id}>
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 bg-blue-50"
                  src={
                    project?.id === 1
                      ? rs
                      : project?.id === 2
                      ? ai
                      : project?.imageUrl
                  }
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    {project?.title}
                  </h2>
                  <h3 className="text-gray-500 mb-3">{project?.type}</h3>
                  <p className="mb-4">{project?.description}</p>
                  <span className="inline-flex gap-3">
                    <a
                      href="https://github.com/JohnnyBhoy?tab=repositories"
                      target="_blank"
                    >
                      <BsGithub size={20} />
                    </a>

                    <a href={project?.href} target="_blank">
                      <BsGlobe size={20} />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
