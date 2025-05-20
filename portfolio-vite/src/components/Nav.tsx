// src/components/NavBar.tsx
import React, { type JSX } from "react";
import { Link, useLocation } from "react-router-dom";
import Project from "../pages/Project";

const NavBar = (): JSX.Element => {
  const location = useLocation();

  return (
    <><header className="bg-white shadow w-full">
          <div className="w-full mx-auto px-4 py-4 flex justify-between justify-items-start items-center ">
              <h1 className="text-2xl font-bold text-pink-600">BTech</h1>
              <nav aria-label="Main ">
                  <ul className="flex gap-6 text-gray-700 font-medium">
                      <li>
                          <Link
                              to="/"
                              className={`hover:text-blue-600 ${location.pathname === "/" ? "text-blue-600" : ""}`}
                          >
                              Home
                          </Link>
                      </li>
                      <li>
                          <Link
                              to="/project"
                              className={`hover:text-blue-600 ${location.pathname === "/project" ? "text-blue-600" : ""}`}
                          >
                              Projects
                          </Link>
                      </li>
                      <li>
                          <Link
                              to="/article"
                              className={`hover:text-blue-600 ${location.pathname === "/article" ? "text-blue-600" : ""}`}
                          >
                              Articles
                          </Link>
                      </li>
                      <li>
                          <Link
                              to="/contact"
                              className={`hover:text-blue-600 ${location.pathname === "/contact" ? "text-blue-600" : ""}`}
                          >
                              Contact
                          </Link>
                      </li>
                  </ul>
              </nav>
          </div>
      </header>
      <Project />
      </>
  );
};

export default NavBar;
