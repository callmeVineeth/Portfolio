import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav.css";
import { DataContext } from "../../DataContext";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const { darkMode, setDarkMode } = useContext(DataContext);
  const [show, handleShow] = useState(false);

  const handleMode = () => {
    setDarkMode((PrevState) => !PrevState);
    console.log("mode Clicked", darkMode);
  };
  useEffect(() => {
    const ScrollHandler = () => {
      if (window.scrollY > 200) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };
    window.addEventListener("scroll", ScrollHandler);
    return () => {
      window.removeEventListener("scroll", ScrollHandler);
    };
  }, []);

  return (
    <div
      className={`${show ? 'block' : 'hidden'}  ${
        darkMode && " bg-black text-white"
      }  navbar mt-4 md:mt-0 bg-white text-black w-full  rounded-full md:rounded-sm fixed  transition-all 
                 duration-1000 md:h-20 flex items-center md:justify-around`}
    >
   
      <div className=" flex flex-row">
        <ul className=" flex flex-row gap-3 md:gap-6 text-lg md:text-xl font-bold">
          <li className=" cursor-pointer">
            <Link
              to="homeSection"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              
              home
            </Link>
          </li>
          <li className=" cursor-pointer">
            <Link
              to="projectSection"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              
              projects
            </Link>
          </li>
          <li className=" cursor-pointer">
            <Link
              to="skillSection"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              
            skills
            </Link>
          </li>
          <li className=" cursor-pointer">
            <Link
              to="contactSection"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              
              contact
            </Link>
          </li>
        </ul>

        <div className=" ml-8 md:ml-20">
          {darkMode ? (
            <span className=" absolute text-2xl" onClick={handleMode}>
              
              <MdDarkMode />
            </span>
          ) : (
            <span className=" absolute text-2xl" onClick={handleMode}>
              
              <MdLightMode />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
