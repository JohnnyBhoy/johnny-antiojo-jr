import React from "react";
import { myEducation, myEducation2 } from "../utils/data/educations";
import {
  BsCursor,
  BsEmojiExpressionlessFill,
  BsFilePerson,
  BsFilePlus,
  BsFolderPlus,
  BsHourglass,
  BsPen,
  BsPercent,
  BsPersonBadge,
  BsPersonBadgeFill,
  BsPersonDash,
} from "react-icons/bs";

const Education = () => {
  return (
    <>
      <div className="shadow h-auto bg-white p-6">
        <h2 className="font-semibold">CEDAR College</h2>
        <ul>
          {myEducation?.map((item) => (
            <li key={item?.id} className="flex mt-1  pl-2 gap-3 text-slate-600">
              <BsPersonBadge className="mt-1" />
              {item?.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="shadow h-auto bg-white p-6">
        <h2 className="font-semibold">CEDAR College Inc</h2>
        <ul>
          {myEducation2?.map((item) => (
            <li key={item?.id} className="flex mt-1  pl-2 gap-3 text-slate-600">
              <BsFilePlus className="mt-1" />
              {item?.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Education;
