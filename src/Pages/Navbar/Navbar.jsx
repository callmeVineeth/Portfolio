import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav.css";
import { DataContext } from "../../DataContext";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { motion, useScroll } from "framer-motion"

import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const { scrollYProgress } = useScroll();
  const { darkMode, setDarkMode } = useContext(DataContext);


  const handleMode = () => {
    setDarkMode((PrevState) => !PrevState);
    console.log("mode Clicked", darkMode);
  };


  return (
    <div
      className="navbar bg-black bg-opacity-20 text-white border-black w-full uppercase  fixed  transition-all 
      duration-1000 md:h-16 flex flex-col items-center md:justify-around" >
      <div className=" w-full flex flex-col h-20 items-center justify-center">
   
      <div className=" flex flex-row">
        <ul className=" flex flex-row gap-3 md:gap-6 text-sm md:text-lg font-semibold tracking-wide ">
          <li className=" cursor-pointer hover:opacity-60 ">
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
          <li className=" cursor-pointer hover:opacity-60">
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
          <li className=" cursor-pointer hover:opacity-60">
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
          <li className=" cursor-pointer hover:opacity-60">
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

        {/*--------------------------- darkMode  option --------------- */}

        {/* <div className=" ml-8 md:ml-20">
          {darkMode ? (
            <span className=" absolute text-2xl" onClick={handleMode}>
              
              <MdDarkMode />
            </span>
          ) : (
            <span className=" absolute text-2xl" onClick={handleMode}>
              
              <MdLightMode />
            </span>
          )}
        </div> */}
      </div>

    </div>
      <motion.div className=" w-full bg-red-600 rounded-full h-2 " style={{ scaleX: scrollYProgress }}></motion.div>
    </div>
  );
}

export default Navbar;
