import React from "react";
import { BsBook, BsFolder, BsGraphUp, BsStack } from "react-icons/bs";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex gap-6">
      <div className="flex cursor-pointer" onClick={() => setActiveTab(1)}>
        <BsFolder className="" size={20} />
        <h6 className={`ml-2 ${activeTab === 1 ? " font-bold " : ""}`}>
          {" "}
          Projects
        </h6>
      </div>

      <div className="flex cursor-pointer" onClick={() => setActiveTab(2)}>
        <BsStack className="" size={20} />
        <h6 className={`ml-2 ${activeTab === 2 ? " font-bold " : ""}`}>
          {" "}
          Experience
        </h6>
      </div>

      <div className="flex cursor-pointer" onClick={() => setActiveTab(3)}>
        <BsBook className="" size={20} />
        <h6 className={`ml-2 ${activeTab === 3 ? " font-bold " : ""}`}>
          {" "}
          Education
        </h6>
      </div>

      <div className="flex cursor-pointer" onClick={() => setActiveTab(4)}>
        <BsGraphUp className="" size={20} />
        <h6 className={`ml-2 ${activeTab === 4 ? " font-bold " : ""}`}>
          {" "}
          Overview
        </h6>
      </div>
    </div>
  );
};

export default Tabs;
