import React from "react";
import { ppdWork } from "../utils/data/work";
import WorkExperience from "./WorkExperience";
import { saltWork } from "../utils/data/salts";

const Index = () => {
  return (
    <>
      <WorkExperience
        company="SALT Marketing and Lead Generation"
        title="Web Developer || Aug. 2023 – Present || Colorado, US || WFH/Remote"
        works={saltWork}
      />

      <WorkExperience
        company="PPD Part of Thermofisher Scientific"
        title="Web Developer || Dec. 2020 – Aug. 2023 || Miami, Florida || WFH/Remote"
        works={ppdWork}
      />

      <WorkExperience
        company="LR Tech Computer & Software Provider"
        title="Software Engineer      ||     2019 – 2020     ||       Cadiz City, Philippines   ||     Onsite"
        works={ppdWork}
      />
    </>
  );
};

export default Index;
