import React from "react";
import { info } from "../../utils/data/info";
import Objective from "../../overview/Objective";
import { saltWork } from "../../utils/data/salts";
import { ppdWork } from "../../utils/data/work";
import WorkExperience from "../../experience/WorkExperience";
import Education from "../../education/Education";
import { backEnd, cloud, database, frontEnd } from "../../utils/data/skills";
import {
  BsBack,
  BsClipboardData,
  BsCloud,
  BsFilePlus,
  BsFront,
} from "react-icons/bs";

const Overview = () => {
  return (
    <div className="p-6 shadow">
      <h3 className="font-semibold">JOHNNY P. ANTIOJO JR.</h3>
      <ul>
        {info?.map((item) => (
          <li className="" key={item?.id}>
            {item?.title}
          </li>
        ))}
      </ul>
      <div className="mt-3">
        <h3 className="font-semibold">About me</h3>
        <Objective />
      </div>
      <div className="mt-3">
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
      </div>
      <div className="">
        <Education />
      </div>
      <div className="shadow h-auto bg-white p-6">
        <h2 className="font-semibold"> Technical Skills</h2>
        <h3 className="font-semibold my-3">Front-end</h3>
        <ul className="flex-wrap grid grid-cols-4">
          {frontEnd?.map((item) => (
            <li key={item?.id} className="flex mt-1  pl-2 gap-3 text-slate-600">
              <BsFront className="mt-1" />
              {item?.skill}
            </li>
          ))}
        </ul>
        <h3 className="font-semibold my-3">Back-end</h3>
        <ul className="flex-wrap grid grid-cols-4">
          {backEnd?.map((item) => (
            <li key={item?.id} className="flex mt-1  pl-2 gap-3 text-slate-600">
              <BsBack className="mt-1" />
              {item?.skill}
            </li>
          ))}
        </ul>
        <h3 className="font-semibold my-3">Database</h3>
        <ul className="flex-wrap grid grid-cols-4">
          {database?.map((item) => (
            <li key={item?.id} className="flex mt-1  pl-2 gap-3 text-slate-600">
              <BsClipboardData className="mt-1" />
              {item?.skill}
            </li>
          ))}
        </ul>
        <h3 className="font-semibold my-3">Cloud</h3>
        <ul className="flex-wrap grid grid-cols-4">
          {cloud?.map((item) => (
            <li key={item?.id} className="flex mt-1  pl-2 gap-3 text-slate-600">
              <BsCloud className="mt-1" />
              {item?.skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Overview;
