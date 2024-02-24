import React, { useContext, useEffect } from "react";
import skills from "./Skills.css";
import { addAnimation } from "./skillsanimation";
import { FaLaptopCode } from "react-icons/fa";
// import { FaReact } from "react-icons/fa";
import { IoColorPaletteSharp } from "react-icons/io5";


import { SiJquery } from "react-icons/si";
import { FaGitSquare, FaReact } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiJest } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { SiMui } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { TbBrandRedux } from "react-icons/tb";

import { FaArrowRight } from "react-icons/fa6";
import { DataContext } from "../../DataContext";
import SkillsCard from "./SkillsCard";

export default function SkillsHome() {
  const { darkMode } = useContext(DataContext);
  useEffect(() => {
    addAnimation(); // Call addAnimation when the component mounts
  }, []);

  return (
    <div
      className={`${
        darkMode && ""
      } skillSets w-full flex flex-col items-center justify-center gap-10  mt-24 md:mt-56 `}
    >
      <span
        className={`${
          darkMode && " text-red-600"
        }  text-3xl md:text-5xl text-left font-serif w-full px-20`}
      >
        My Toolbox 
      </span>
      <div className=" w-10/12 grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-4 md:gap-12 items-start justify-center ">

        <div className=" flex justify-center items-center  md:border-r-2 border-gray-300">
          <SkillsCard
          ImageIcon={<FaLaptopCode/>}
          heading={'Frontend Development'}
          skill1={'Html'}
          skill2={'CSS'}
          skill3={'JavaScript'}
          skill4={'SCSS'}/>
        </div>

        <div className=" flex justify-center items-center  md:border-l-2 border-gray-300">
          
          <SkillsCard                                               
           ImageIcon={<FaReact/>}
          heading={'React'}
          skill1={'Hooks'}
          skill2={'States and Props'}
          skill3={'Redux '}
          skill4={'ContextAPI '}
           />
        </div>

        <div className=" flex justify-center items-center  md:border-r-2 border-gray-300">
          
          <SkillsCard
          ImageIcon={<IoColorPaletteSharp/>}
          heading={'UI Frameworks'}
          skill1={'TailwindCSS'}
          skill2={'MaterialUI'}
          skill3={'Bootstrap'}
          skill4={'Responsive Designing'}
          />
        </div>

        <div className=" flex justify-center items-center  md:border-l-2 border-gray-300">
          
          <SkillsCard
          ImageIcon={<IoColorPaletteSharp/>}
          heading={'Other Tools'}
          skill1={'GitHub'} 
          skill2={'API Intergration'} 
          skill3={'PostmanAPI'} 
          skill4={'VS Code'}
          />
        </div>
        </div>

      <div className=" w-11/12 flex flex-row shadow-lg p-4 md:p-10 bg-gradient-to-r from-violet-100 via-violet-50 to-tranparent">
        {/* <div className=' bg-green-400 w-1/3'>What are my stacks</div> */}


        <div className=" w-1/2 text-md text-black md:text-3xl transform -rotate-90 font-bold flex items-center"> My Stacks</div>
        <div className="scroller flex flex-col" data-speed="fast">
          <ul className="tag-list scroller__inner  text-red-600 gap-32 text-6xl transition">
            <li className="box text-2xl md:text-6xl text-black  hover:scale-125">
              <FaGitSquare  />
            </li>
            <li className="box text-2xl md:text-6xl text-blue-500  hover:scale-125">
              <FaReact  />
            </li>
            <li className="box text-2xl md:text-6xl  text-orange-600 hover:scale-125">
              <IoLogoHtml5  />
            </li>
            <li className="box text-2xl md:text-6xl text-amber-400 hover:scale-125">
              <IoLogoJavascript />
            </li>
            <li className="box text-2xl md:text-6xl  text-sky-500 hover:scale-125">
              <SiTailwindcss  />
            </li>
            <li className="box text-2xl md:text-6xl  text-violet-700 hover:scale-125">
              <FaBootstrap  />
            </li>
            <li className="box text-2xl md:text-6xl  text-black hover:scale-125">
              <FaSquareGithub  />
            </li>
            <li className="box text-2xl md:text-6xl  text-blue-500 hover:scale-125">
              <SiMui  />
            </li>
            <li className="box text-2xl md:text-6xl  text-blue-600 hover:scale-125">
              <TbBrandVscode  />
              </li>
            <li className="box text-2xl md:text-6xl  text-violet-600 hover:scale-125">
              <TbBrandRedux />
              </li>
            <li className="box text-2xl md:text-6xl  text-rose-600 hover:scale-125">
              <SiJest />
            </li>
          </ul>
          <div className="scroller" data-speed="fast">
          <ul className=" tag-list scroller__inner  flex flex-row transition">
            <li className=" skills bg-blue-600">Html</li>
            <li className=" skills bg-blue-600">CSS</li>
            <li className=" skills bg-blue-600">Javascript</li>
            <li className=" skills bg-blue-600">SCSS</li>
            <li className=" skills bg-blue-600">React</li>
            <li className=" skills bg-blue-600">TailwindCSS</li>
            <li className=" skills bg-blue-600">React</li>
            <li className=" skills bg-blue-600">MaterialUI</li>
            <li className=" skills bg-blue-600">API</li>
            <li className=" skills bg-blue-600">GitHub</li>
            <li className=" skills bg-blue-600">Bootstrap</li>
          </ul>
          </div>
        </div>
        
      </div>

     
    </div>
  );
}
