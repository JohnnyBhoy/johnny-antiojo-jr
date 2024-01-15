import React from "react";
import Experience from "./Experience";
import MyInformation from "./MyInformation";

const About = () => {
  return (
    <div className="p-6 shadow space-y-4 mt-12">
      <MyInformation />
      <Experience />
    </div>
  );
};

export default About;
