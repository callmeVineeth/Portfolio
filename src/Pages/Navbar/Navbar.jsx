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
        darkMode && " "
      }  navbar bg-white text-black border-black w-full uppercase  fixed  transition-all 
      duration-1000 md:h-20 flex flex-col items-center md:justify-around`}
    >
      <div className=" w-full flex flex-col h-20 items-center justify-center">
   
      <div className=" flex flex-row">
        <ul className=" flex flex-row gap-3 md:gap-6 text-sm md:text-lg ">
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
      <motion.div className=" w-full bg-red-700 rounded-full h-2 " style={{ scaleX: scrollYProgress, backgroundColor: 'red' }}></motion.div>
    </div>
  );
}

export default Navbar;
