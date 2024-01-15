import React from "react";
import Education from "./tabs/Education";
import Experiences from "./tabs/Experiences";
import Overview from "./tabs/Overview";
import Project from "./tabs/Project";

const ProjectContent = ({ activeTab }) => {
  return activeTab === 1 ? (
    <Project />
  ) : activeTab === 2 ? (
    <Experiences />
  ) : activeTab === 3 ? (
    <Education />
  ) : activeTab === 4 ? (
    <Overview />
  ) : (
    ""
  );
};

export default ProjectContent;
