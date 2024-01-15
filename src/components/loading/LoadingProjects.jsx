import React from "react";
import { projects } from "../utils/projects";

const LoadingProjects = () => {
  return (
    <div className="lg:flex justify-between mt-6 w-full gap-3">
      {projects?.map((project) => (
        <div
          className="shadow-lg bg-white p-3 w-full h-40 bg-slate-300 rounded animate-pulse"
          key={project?.id}
        />
      ))}
    </div>
  );
};

export default LoadingProjects;
