import React from "react";
import { socials } from "./utils/socials";

export default function SocialMediaLinks() {
  return (
    <div className="mt-2 space-y-2 mt-2">
      {socials?.map((social) => (
        <a href={social?.link} target="_blank" key={social?.id}>
          <div className="flex mt-2">
            {social?.icon}
            <h6 className="ml-2"> {social?.label}</h6>
          </div>{" "}
        </a>
      ))}
    </div>
  );
}
