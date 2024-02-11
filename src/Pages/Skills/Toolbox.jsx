import React, { useContext } from "react";
import { DataContext } from "../../DataContext";

import { IoLogoReact } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { SiMui } from "react-icons/si";
import { IoLogoSass } from "react-icons/io5";
import { DiJavascript1 } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { SiJest } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

function Toolbox() {
  const { darkMode, setDarkMode } = useContext(DataContext);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-600 text-white" : "bg-white text-black"
      }  transition-all duration-1000 px-10 `}
    >

    <span>#My Toolbox</span>

      <div className="w-full flex items-center justify-center">
        <div class="grid grid-cols-3 gap-2 items-center justify-center p-2">
          <div class=" transition-all duration-300 hover:scale-105 bg-black p-2 flex flex-col items-center justify-center md:h-24 md:w-24 text-3xl  text-white ">
            <IoLogoReact />
            <span className="  absolute text-8 text-3xl  md:l font-bold text-gray-400 opacity-60 font-sans ">

            <span className=" text-sm md:text-md text-white">React</span>
          </div>
          <div class=" transition-all duration-300 hover:scale-105 bg-gray-100 text-black p-2 flex flex-col items-center justify-center md:h-24 md:w-24 text-3xl  ">
            <SiTailwindcss />

            <span className=" text-sm md:text-md text-black">TailwindCSS</span>
          </div>
          <div class=" transition-all duration-300 hover:scale-105 bg-black   p-2 flex flex-col items-center justify-center md:h-24 md:w-24 text-3xl  text-white ">
            <FaBootstrap />

            <span className=" text-sm md:text-md text-white">Bootstrap</span>
          </div>
          <div class=" transition-all duration-300 hover:scale-105 bg-gray-100 text-black p-2 flex flex-col items-center justify-center md:h-24 md:w-24 text-3xl  ">
            <SiMui />

            <span className=" text-sm md:text-md text-black">MaterialUI</span>
          </div>
          <div class=" transition-all duration-300 hover:scale-105 bg-black   p-2 flex flex-col items-center justify-center md:h-24 md:w-24 text-3xl  text-white ">
            <IoLogoSass />

            <span className=" text-sm md:text-md text-white">SASS</span>
          </div>
          <div class=" transition-all duration-300 hover:scale-105 bg-gray-100 text-black p-2 flex flex-col items-center justify-center md:h-24 md:w-24 text-3xl  ">
            <TbApi />

            <span className=" text-sm md:text-md text-black">API</span>
          </div>
          <div class=" transition-all duration-300 hover:scale-105 bg-black   p-2 flex flex-col items-center justify-center md:h-24 md:w-24 text-3xl  text-white ">
            <SiJest />

            <span className=" text-sm md:text-md text-white">Jest</span>
          </div>
          <div class=" transition-all duration-300 hover:scale-105 bg-gray-100 text-black p-2 flex flex-col items-center justify-center md:h-24 md:w-24 text-3xl  ">
            <DiJavascript1 />

            <span className=" text-sm md:text-md text-black">JavaScript</span>
          </div>
          <div class=" transition-all duration-300 hover:scale-105 bg-black   p-2 flex flex-col items-center justify-center md:h-24 md:w-24 text-3xl  text-white ">
            <TbBrandRedux />

            <span className=" text-sm md:text-md text-white"> Redux</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toolbox;
