import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../../DataContext";
import {motion} from 'framer-motion'
import { Link } from "react-scroll";
import Home from './Home.css'



function HomePage() {
  const { darkMode } = useContext(DataContext);

  const handleDownloadResume = () => {
    try{
      const resumePath = process.env.PUBLIC_URL + '/VINEETH P V - Resume.pdf';
      const anchorElement = document.createElement('a');
      anchorElement.href = resumePath;
      anchorElement.download = 'vineeth.pdf';

      anchorElement.setAttribute('target', '_blank');
      anchorElement.setAttribute('rel', 'noopener noreferrer');
      document.body.appendChild(anchorElement);
      anchorElement.click();
    } catch (error) {
      console.error('Error downloading resume:', error);
    }

  };
  
  

  return(
    <div className=" p-2 flex font-serif ">
      <section className="homeSection  text-3xl md:text-5xl bg-transparent w-full py-24  flex flex-col items-center">

         <div className=" flex flex-col justify-center items-center ">
            <span className=" text-6xl">
              Hi,</span>
              <span>
               I'm Vineeth 
            </span>  
            <div className=" w-36 h-36 border-y-2 border-b-8  border-gray-300 hover:border-x-2 hover:border-b-4 transition-all duration-100 border-x-4  rounded-full flex items-center justify-center">
              <div className=" w-32 h-32 roundedImage rounded-full cursor-pointer flex items-center justify-center">

             </div>
            </div>
            <span className="coloredText  text-red-400 text-center">
           Frontend || React Developer</span>  <span> Based in India. 
            </span>
            <span className="  text-center">
            I Love Developing Beautiful Websites.
            </span>
           
           <div className=" flex flex-row  font-sans gap-3 font-semibold text-sm md:text-lg">
              <Link to='aboutSection'
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}>
                   <button className="button border-2 hover:text-white border-gray-300  mt-6 w-max h-10 p-2 
              f transition-all duration-500 uppercase">
                  About me
              </button>
                  </Link>
                  <button className="button border-2 hover:text-white border-gray-300  mt-6 w-max h-10 p-2 
              f transition-all duration-500 uppercase">
                <a href="https://github.com/callmeVineeth"  target="_blank">
                  GitHub
                  </a>
              </button>
                  <button
                  onClick={handleDownloadResume}
                   className="button  border-2 hover:text-white border-gray-300  mt-6 w-max h-10 p-2 
              f transition-all duration-500 uppercase">
                  Resume
              </button>
           </div>
         </div>
          <div className=" border-b-2 border-gray-300 h-10 w-2/3 md:mt-6">
        </div>

      </section>
     

    </div>
  );
}
export default HomePage;
