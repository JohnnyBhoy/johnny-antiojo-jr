import React from "react";
import johnb from "../../image/johnb.jpg";
import SocialMediaLinks from "../SocialMediaLinks";
import Followers from "../home/Followers";
import Information from "../home/Information";
import MessageMe from "../home/MessageMe";

export default function AboutMe(showMessage) {
  let yearsOfExperience = new Date();
  yearsOfExperience = yearsOfExperience.getFullYear() - 2019;

  return (
    <div>
      <div className="grid place-items-center space-y-6">
        <div className="">
          <img src={johnb} alt="" className="rounded-full h-48" />
        </div>

        <div className="text-center">
          <MessageMe />
        </div>

        <Information yearsOfExperience={yearsOfExperience} />

        <Followers />
      </div>

      <SocialMediaLinks />
    </div>
  );
}
