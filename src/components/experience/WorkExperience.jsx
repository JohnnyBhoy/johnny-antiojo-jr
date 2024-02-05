import React from "react";
import { ppdWork } from "../utils/data/work";
import { BsFolderPlus } from "react-icons/bs";

const WorkExperience = ({ company, title, works }) => {
  return (
    <div className="shadow h-auto bg-white p-6">
      <h2 className="font-semibold">{company}</h2>
      <h3 className="font-semibold text-slate-700">
        {title}
        <ul>
          {works?.map((item) => (
            <li key={item?.id} className="flex mt-1  pl-2 gap-3 text-slate-600">
              <BsFolderPlus className="mt-1" />
              {item?.title}
            </li>
          ))}
        </ul>
      </h3>
    </div>
  );
};

export default WorkExperience;
