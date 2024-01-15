import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Database from "./Database";
import Hosting from "./Hosting";

const Technologies = () => {
  return (
    <div className="shadow-lg h-auto mt-6 p-6">
      <h5 className="text-slate-500 font-semibold">Techologies Used</h5>
      <div className="p-2 lg:flex lg:justify-between">
        <Frontend />
        <Backend />
        <Database />
        <Hosting />
      </div>
    </div>
  );
};

export default Technologies;
