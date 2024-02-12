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
          darkMode && " text-violet-600"
        }  text-3xl md:text-5xl text-left font-serif w-full px-20`}
      >
        My Toolbox
      </span>
      <div className=" w-10/12 gap-6 items-start justify-center grid grid-cols-1 md:grid-cols-4">

        <SkillsCard
        ImageIcon={<FaLaptopCode/>}
        heading={'Frontend Development'}
        skill1={'Html'}
        skill2={'CSS'}
        skill3={'JavaScript'}
        skill4={'SCSS'}/>
        <SkillsCard
         ImageIcon={<FaReact/>}
        heading={'React'}
        skill1={'Hooks'}
        skill2={'State and Props'}
        skill3={'Redux '}
        skill4={'Context API '}
        skill5={'Typescript'} />
        <SkillsCard
        ImageIcon={<IoColorPaletteSharp/>}
        heading={'UI Frameworks'}
        skill1={'TailwindCSS'}
        skill2={'MaterialUI'}
        skill3={'Bootstrap'}/>
        <SkillsCard
        ImageIcon={<IoColorPaletteSharp/>}
        heading={'Other Tools'}
        skill1={'GitHub'}
        skill2={'API Intergration'}
        skill3={'Postman API'}
        skill4={'Responsive Designing'}
        />
              </div>
      <div className=" w-full flex flex-row  border-2 p-4 md:p-10  bg-gray-200">
        {/* <div className=' bg-green-400 w-1/3'>What are my stacks</div> */}


        <div className=" w-1/2 text-sm md:text-2xl flex items-center"> My Stacks</div>
        <div className="scroller flex  flex-row" data-speed="fast">
          <ul className="tag-list scroller__inner  text-red-600">
            <li className="box text-xl">
              <FaGitSquare  />
            </li>
            <li className="box">
              <FaReact  />
            </li>
            <li className="box">
              <IoLogoHtml5  />
            </li>
            <li className="box">
              <IoLogoJavascript  />
            </li>
            <li className="box">
              <SiTailwindcss  />
            </li>
            <li className="box">
              <FaBootstrap  />
            </li>
            <li className="box">
              <FaSquareGithub  />
            </li>
            <li className="box">
              <SiMui  />
            </li>
            <li className="box">
              <TbBrandVscode  />
            </li>
          </ul>
        </div>
        
      </div>

     
    </div>
  );
}
