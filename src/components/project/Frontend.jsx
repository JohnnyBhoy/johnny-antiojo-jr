import React from "react";
import css from "../../image/frontend/css.png";
import html from "../../image/frontend/html.png";
import mui from "../../image/frontend/mui.png";
import react from "../../image/frontend/react.png";
import tailwind from "../../image/frontend/tailwind.png";
import vue from "../../image/frontend/vue.png";

const Frontend = () => {
  const frontEndImages = [html, css, mui, react, tailwind, vue];

  return (
    <div>
      <h5 className="text-blue-500 font-semibold">Frontend</h5>
      <div className="lg:grid grid-wrap grid-cols-3 gap-2">
        {frontEndImages?.map((image, i) => (
          <img
            src={image}
            alt=""
            className="h-12 w-12 shadow-lg p-2 rounded"
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Frontend;
