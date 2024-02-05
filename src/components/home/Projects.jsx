import React, { useEffect, useState } from "react";
import Tabs from "./Tabs";
import ProjectContent from "./ProjectContent";
import LoadingProjects from "../loading/LoadingProjects";

const Projects = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => setloading(false), 300);
  }, []);

  return (
    <>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {loading ? <LoadingProjects /> : <ProjectContent activeTab={activeTab} />}
    </>
  );
};

export default Projects;
