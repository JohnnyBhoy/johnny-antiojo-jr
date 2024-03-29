import React from "react";
const imageLabelClass =
  "mb-3 text-xl font-semibold tracking-tight text-teal-500 text-xl";
const imageLabelClassJob =
  "mb-3 text-xl font-semibold tracking-tight font-bold max-w-xs transition duration-300 ease-in-out hover:scale-110";

export default function LeftPic({ image }) {
  return (
    <div className="justify-center dark:bg-primary mt-14 z-1 overflow-hidden cursor-pointer">
      <div className="">
        <img src={image} className="fixed h-screen m-auto" alt="Avatar" />
      </div>
    </div>
  );
}
