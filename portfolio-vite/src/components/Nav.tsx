// src/components/NavBar.tsx
import React, { type JSX } from "react";
import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from 'lucide-react'; 
import Project from "../pages/Project";
import Article from "../pages/Article";

const NavBar = (): JSX.Element => {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <><header className="bg-white shadow w-full">
          <div className="w-full mx-auto px-4 py-4 flex justify-between justify-items-start items-center ">
              <h1 className="text-2xl font-bold text-pink-600">BTech</h1>
              
              {/**Desktop View */}
              <nav className="hidden md:block">
                <ul className="flex gap-6 text-gray-700 font-medium">
                 {["/", "/project", "/article", "/contact"].map((path, idx)=>{
                      const labels = ["Home", "Projects", "Articles", "Contact"]
                      return(
                        <li key={path}>
                            <Link
                            to={path}
                            className={`hover:text-blue-600 ${
                            location.pathname === path ? "text-blue-600" : ""
                            }`}
                            >
                             {labels[idx]}
                            </Link>
                        </li>
                      ) 
                 })}
                </ul>
              </nav>
                    {/*Mobile Toggle Button*/}
                <button
                className="md:hidden"
                onClick={()=>setIsMobileOpen(!isMobileOpen)}
                >
                {isMobileOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
          </div>
          {/* Mobile Nav */}
          {
            isMobileOpen && (
                <nav className="md:hidden px-4 pb-4">
                  <ul className="flex flex-col gap-3 text-gray-700 font-medium">
                    {["/", "/project", "/article", "/contact"].map((path, idx)=>{
                        const labels =["Home", "Projects", "Articles", "Contact"]
                        return(
                            <li key={path}>
                              <Link 
                              to={path}
                              onClick={()=>{setIsMobileOpen(false)}}
                              className={`block hover:text-blue-600 ${
                                location.pathname === path ? "text-blue-600" : ""
                                }`}
                              >
                              {labels[idx]}
                              </Link>
                            </li>
                        )
                    })}
                  </ul>
                </nav>
            )
          }
      </header>
      <Project />
      <Article />
      </>
  );
};

export default NavBar;
