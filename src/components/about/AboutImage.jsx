import React from "react";
import john from "../../image/john.png";

const AboutImage = () => {
  return (
    <div className="lg:fixed">
      <img
        src={john}
        alt=""
        className="lg:h-screen lg:w-[40rem] items-center justify-center content-center lg:m-auto mt-10 m-auto"
      />
    </div>
  );
};

export default AboutImage;
