import React from "react";
import aws from "../../image/hosting/aws.png";
import azure from "../../image/hosting/azure.png";
import dot from "../../image/hosting/do.png";
import ifs from "../../image/hosting/if.png";
import netlify from "../../image/hosting/netlify.png";
import render from "../../image/hosting/render.png";
import vercel from "../../image/hosting/vercel.png";

const Hosting = () => {
  const hostings = [aws, azure, dot, ifs, netlify, render, vercel];

  return (
    <div>
      <h5 className="text-blue-500 font-semibold">Cloud Hosting</h5>
      <div className="lg:grid grid-wrap grid-cols-3 gap-2">
        {hostings?.map((hosting, i) => (
          <img
            src={hosting}
            alt=""
            className="h-12 w-12 shadow-lg p-2 rounded"
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Hosting;
