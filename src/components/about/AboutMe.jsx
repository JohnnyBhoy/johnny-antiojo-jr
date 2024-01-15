import React from "react";
import { BsPeople, BsPerson } from "react-icons/bs";
import johnb from "../../image/johnb.jpg";
import SocialMediaLinks from "../SocialMediaLinks";
import Followers from "../home/Followers";
import Information from "../home/Information";
import MessageMe from "../home/MessageMe";

export default function AboutMe() {
  let yearsOfExperience = new Date();
  yearsOfExperience = yearsOfExperience.getFullYear() - 2019;

  return (
    <div className="">
      <div className="grid place-items-center">
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
