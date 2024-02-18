import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../../DataContext";
import {motion} from 'framer-motion'
import { Link } from "react-scroll";
import Home from './Home.css'



function HomePage() {
  const { darkMode } = useContext(DataContext);

  const handleDownloadResume = () => {
    const resumePath = process.env.PUBLIC_URL + 'VINEETH P V - Resume.pdf';

                                                                   
    const anchorElement = document.createElement('a');
    anchorElement.href = resumePath;
    anchorElement.download = 'vineeth.pdf';
  
    anchorElement.setAttribute('target', '_blank');
    anchorElement.setAttribute('rel', 'noopener noreferrer');
  
    document.body.appendChild(anchorElement);
  
    anchorElement.click();
  };
  
  

  return(
    <div className=" p-2 flex flex-col-reverse md:flex-row font-serif">
      <section className=" text-3xl md:text-5xl w-full py-32  flex flex-col items-center">

         <div className=" flex flex-col justify-center items-center ">
            <span className="">
              Hi,</span>
              <span>
               I'm Vineeth 
            </span>
            <div className=" w-36 h-36 border-black border-x-4  rounded-full flex items-center justify-center">
              <div className=" w-32 h-32 roundedImage rounded-full flex items-center justify-center">

              
              </div>
            </div>
            <span className="  text-center">
           Frontend || React Developer Based in India.
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
                  GitHub
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
