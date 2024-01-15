import React from "react";
import { projects } from "../utils/projects";
import ProjectDetails from "./ProjectDetails";
import Technologies from "./Technologies";

const MyProject = () => {
  return (
    <>
      <div className="lg:flex justify-between mt-6 w-full gap-2 cursor-pointer">
        {projects?.map((project) => (
          <div
            className="shadow-lg bg-white p-3 w-full grid place-items-center  hover:shadow-2xl"
            key={project?.id}
          >
            <img
              src={project?.imageUrl ?? "Project image"}
              alt=""
              className="h-24 p-2"
            />
            <p className="text-center font-bold text-blue-500">
              {project?.label ?? "Null"}
            </p>
          </div>
        ))}
      </div>
      <ProjectDetails />
      <Technologies />
    </>
  );
};

export default MyProject;
