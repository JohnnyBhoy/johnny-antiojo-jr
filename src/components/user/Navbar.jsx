import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth, useTheme } from "../../hooks";
import Container from "../Container";
import Code from "../../image/code.png";

export default function Navbar() {
  const { toggleTheme } = useTheme();
  const { authInfo, handleLogout } = useAuth();
  const { isLoggedIn } = authInfo;

  return (
    <div className="fixed bg-secondary shadow-sm shadow-gray-500 w-full">
      <Container className="p-2">
        <div className="flex justify-between items-center">
          <div className="flex space-x-5">
            <div>
              <img
                src={Code}
                alt=""
                className="h-10 bg-transparent"
              />
            </div>
            <div>
              <Link to="/">
                <h1 className="text-white text-xl">
                  Developer
                  <span className="text-green-500 text-2xl ml-2 font-bold">
                    J
                  </span>
                </h1>
              </Link>
            </div>
          </div>
          <ul className="flex items-center space-x-16">
            <li>
              <Link
                className="text-teal-500 font-semibold text-lg"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-white font-semibold text-lg hover:text-teal-500"
                to="/"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-white font-semibold text-lg  hover:text-teal-500"
                to="/"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="text-white font-semibold text-lg  hover:text-teal-500"
                to="/"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <input
                type="text"
                className="border-2 border-dark-subtle p-1 rounded bg-transparent text-xl outline-none focus:border-white transition text-white"
                placeholder="search..."
              />
            </li>
            <li>
              <button
                onClick={toggleTheme}
                className="dark:bg-white bg-dark-subtle p-1 rounded"
              >
                <BsFillSunFill className="text-secondary" size={24} />
              </button>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
