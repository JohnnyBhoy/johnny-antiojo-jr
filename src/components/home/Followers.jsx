import React from "react";
import { BsPeople, BsPerson } from "react-icons/bs";

const Followers = () => {
  return (
    <div className="mt-2 flex gap-6 mb-2">
      <div className="flex">
        <BsPeople className="" size={22} />
        <h6 className="ml-2"> 0 Followers</h6>
      </div>

      <div className="flex">
        <BsPerson className="" size={22} />
        <h6 className="ml-2"> 0 Following</h6>
      </div>
    </div>
  );
};

export default Followers;
