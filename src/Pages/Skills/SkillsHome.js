import React, { useContext } from 'react'
import skills from './Skills.css'

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
import { DataContext } from '../../DataContext';



export default function SkillsHome(){
  const{darkMode} = useContext(DataContext)
  
    return (
      <div  className={`${darkMode && ''} skillSets w-full flex flex-col items-center justify-center gap-10  mt-24 md:mt-56 `}>
        <span className={`${darkMode && ' text-violet-600'}  text-3xl md:text-5xl text-left font-serif w-full px-20`}> My Toolbox</span>
        <section className='flex flex-row md:flex-col items-center justify-evenly gap-4 md:gap-10'>

            <div className=' grid grid-cols-3 md:grid-cols-4  gap-4'>
                <div className=' flex flex-col items-center justify-center backdrop-blur-sm p-2 rounded-md shadow-xl'> <span className={` ${darkMode && 'text-violet-600'} text-7xl md:ml-20`}><IoLogoHtml5/></span>   <span className=' font-semibold text-xl'>html</span></div>
                <div className=' flex flex-col items-center justify-center backdrop-blur-sm p-2 rounded-md shadow-xl'> <span className={` ${darkMode && 'text-violet-600'} text-7xl md:ml-20`}><IoLogoJavascript/></span>  <span className=' font-semibold text-xl'>javascript</span></div>
                <div className=' flex flex-col items-center justify-center backdrop-blur-sm p-2 rounded-md shadow-xl'> <span className={` ${darkMode && 'text-violet-600'} text-7xl md:ml-20`}><FaReact/></span>  <span className=' font-semibold text-xl'>ReactJs</span></div>
                <div className=' flex flex-col items-center justify-center backdrop-blur-sm p-2 rounded-md shadow-xl'> <span className={` ${darkMode && 'text-violet-600'} text-7xl md:ml-20`}><SiTailwindcss/></span>  <span className=' font-semibold text-xl'>TailwindCss</span></div>
                <div className=' flex flex-col items-center justify-center backdrop-blur-sm p-2 rounded-md shadow-xl'> <span className={` ${darkMode && 'text-violet-600'} text-7xl md:ml-20`}> <FaBootstrap/></span>   <span className=' font-semibold text-xl'>Bootstrap</span></div>
                <div className=' flex flex-col items-center justify-center backdrop-blur-sm p-2 rounded-md shadow-xl'> <span className={` ${darkMode && 'text-violet-600'} text-7xl md:ml-20`}><FaGitAlt/></span>  <span className=' font-semibold text-xl'>GitLab</span></div>
                <div className=' flex flex-col items-center justify-center backdrop-blur-sm p-2 rounded-md shadow-xl'> <span className={` ${darkMode && 'text-violet-600'} text-7xl md:ml-20`}><SiJquery/></span>  <span className=' font-semibold text-xl'>jQuery</span></div>
                <div className=' flex flex-col items-center justify-center backdrop-blur-sm p-2 rounded-md shadow-xl'> <span className={` ${darkMode && 'text-violet-600'} text-7xl md:ml-20`}><FaGitSquare/></span>  <span className=' font-semibold text-xl'>Github</span></div> 
                <div className=' flex flex-col items-center justify-center backdrop-blur-sm p-2 rounded-md shadow-xl'> <span className={` ${darkMode && 'text-violet-600'} text-7xl md:ml-20`}> <SiMui/></span>  <span className=' font-semibold text-xl'>M U I</span></div>
                <div className=' flex flex-col items-center justify-center backdrop-blur-sm p-2 rounded-md shadow-xl'> <span className={` ${darkMode && 'text-violet-600'} text-7xl md:ml-20`}> <FaSquareGithub/></span>  <span className=' font-semibold text-xl'>Github</span></div>
                <div className=' flex flex-col items-center justify-center backdrop-blur-sm p-2 rounded-md shadow-xl'> <span className={` ${darkMode && 'text-violet-600'} text-7xl md:ml-20`}><SiJest/></span>   <span className=' font-semibold text-xl'>Jest</span></div>
                <div className=' flex flex-col items-center justify-center backdrop-blur-sm p-2 rounded-md shadow-xl'> <span className={` ${darkMode && 'text-violet-600'} text-7xl md:ml-20`}> <TbBrandVscode/></span>  <span className=' font-semibold text-xl'>VsCode</span></div>
            </div>
          
             </section>
      </div>
    )
  }

