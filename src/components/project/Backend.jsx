import React from "react";
import php from "../../image/backend/php.png";
import express from "../../image/backend/express.png";
import laravel from "../../image/backend/laravel.png";
import node from "../../image/backend/node.png";

const Backend = () => {
  const beckEndImages = [php, express, laravel, node];

  return (
    <div>
      <h5 className="text-blue-500 font-semibold">Backend</h5>
      <div className="lg:grid grid-wrap grid-cols-3 gap-2">
        {beckEndImages?.map((image, i) => (
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

export default Backend;
