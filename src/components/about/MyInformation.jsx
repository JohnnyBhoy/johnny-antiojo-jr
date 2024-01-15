import React from "react";
import AboutTitle from "./AboutTitle";
import AboutContent from "./AboutContent";

const MyInformation = () => {
  return (
    <div className="">
      <div className="text-sm text-slate-500">
        <AboutTitle title="About Johnny Antiojo Jr." />
        <AboutContent
          content=" A highly motivated Software Engineer seeking to get a position in a
          reputed company, where I can use my skills and knowledge to learn new
          things and grow as a software developer and put all I have to the
          table where I can be efficient to contribute for the company’s goal
          and success."
        />
      </div>
    </div>
  );
};

export default MyInformation;
