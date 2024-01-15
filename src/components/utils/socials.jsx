import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsSkype,
  BsTwitter,
} from "react-icons/bs";

export const socials = [
  {
    id: 1,
    icon: <BsLinkedin size={20} className="text-slate-500" />,
    link: "https://www.linkedin.com/in/johnny-antiojo-jr-967644167",
    label: "in/johnny-antiojo-jr-967644167",
  },
  {
    id: 2,
    icon: <BsFacebook size={20} className="text-slate-500" />,
    link: "https://www.facebook.com/johnny.pelegro",
    label: "johnny.pelegro",
  },
  {
    id: 3,
    icon: <BsTwitter size={20} className="text-slate-500" />,
    link: "https://twitter.com/AntiojoJr29945",
    label: "@AntiojoJr29945",
  },
  {
    id: 4,
    icon: <BsGithub size={20} className="text-slate-500" />,
    link: "https://github.com/johnnybhoy",
    label: "github.com/johnnybhoy",
  },
  {
    id: 5,
    icon: <BsSkype size={20} className="text-slate-500" />,
    link: "https://web.skype.com/",
    label: "skype/johnnybhoy",
  },
];
