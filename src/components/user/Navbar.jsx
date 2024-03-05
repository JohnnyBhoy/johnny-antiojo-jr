import React from "react";
import {
  BsMailbox2,
  BsEnvelope,
  BsMessenger,
  BsPhoneVibrate,
  BsPhoneVibrateFill,
  BsMegaphoneFill,
  BsFillPhoneFill,
  BsTelephone,
  BsAt,
  BsEnvelopeFill,
} from "react-icons/bs";
import { BsJustify } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth, useTheme } from "../../hooks";
import Container from "../Container";
import Code from "../../image/code.png";
import { useMessageStore } from "../store/messageStore";

export default function Navbar() {
  const { toggleTheme } = useTheme();
  const { authInfo, handleLogout } = useAuth();
  const { isLoggedIn } = authInfo;
  const { setShow } = useMessageStore();

  return (
    <div className="fixed bg-blue-500 shadow-sm shadow-gray-500 w-full mt-o lg:mt-0 mt-[-5rem]">
      <Container className="p-2">
        <div className="flex justify-between items-center">
          <div className="flex space-x-5 mt-1">
            <div>
              <img src={Code} alt="" className="h-10 bg-transparent" />
            </div>
            <div>
              <Link to="/">
                <h1 className="text-white text-xl mt-1">
                  Dev
                  <span className="text-green-500 text-2xl ml-2 font-bold">
                    - John
                  </span>
                </h1>
              </Link>
            </div>
          </div>
          <ul className="flex items-center space-x-16">
            <li className=" hidden lg:block">
              <Link className="text-white hover:text-lg" to="/projects">
                Projects
              </Link>
            </li>
            <li className=" hidden lg:block">
              <Link className="text-white  hover:text-lg" to="/about">
                About
              </Link>
            </li>
            <li className=" hidden lg:block">
              <Link className="text-white  hover:text-lg" to="/experiences">
                Experiences
              </Link>
            </li>
            <li className=" hidden lg:block">
              <input
                type="text"
                className="border-2 border-dark-subtle p-1 rounded bg-transparent text-xl outline-none focus:border-white transition text-white"
                placeholder="search..."
              />
            </li>
            <li className=" hidden lg:block">
              <div className="space-x-10 flex">
                <div
                  className="flex cursor-pointer"
                  onClick={() => setShow(true)}
                >
                  <button>
                    <BsEnvelope className="text-white" size={18} />
                  </button>
                  <h6 className="text-white m-2">jrantiojobhoy@gmail.com</h6>
                </div>

                <div className="flex">
                  <button onClick={() => {}}>
                    <BsTelephone className="text-white" size={16} />
                  </button>
                  <h6 className="text-white m-2">+6393-8079-7638</h6>
                </div>
              </div>
            </li>
            <li className=" lg:hidden">
              <button
                onClick={toggleTheme}
                className="dark:bg-white bg-dark-subtle p-1 rounded"
              >
                <BsJustify className="text-secondary" size={24} />
              </button>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
