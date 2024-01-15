import React from "react";

export default function MyInfo({ title, info, logo }) {
  return (
    <div>
      <h1 className="font-bold p-1 ml-2 dark:text-teal-500 text-blue-500 text-lg">
        {title}
      </h1>
      <div>{logo}</div>
      <div className="p-3 dark:text-teal-400 text-primary ml-10 space-y-3">
        {info}
      </div>
    </div>
  );
}
