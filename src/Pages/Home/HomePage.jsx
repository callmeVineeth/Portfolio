import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../../DataContext";
// import Button from '../CustomComponents/Button'
import {motion} from 'framer-motion'
import GridImageDisplay from "./GridImageDisplay";
import { Link } from "react-scroll";
import Home from './Home.css'



function HomePage() {
  const { darkMode } = useContext(DataContext);

  return(
    <div className=" p-2 flex flex-col-reverse md:flex-row font-serif">
      <section className=" text-3xl md:text-5xl w-full py-44 pl-12 flex flex-col items-center">

         <div className=" flex flex-col">
            <span className="">
              Hi,</span>
              <span>
               I'm Vineeth 
            </span>
            <span>
            React Developer based in India.
            </span>
            <span>
            I Love Developing Beautiful Websites.
            </span>
           
            <Link to='aboutSection'
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}>
                 <button className="btn text-xl border-2 hover:text-white border-black  md:text-2xl mt-6 w-max h-16 p-4 
            font-bold transition-all duration-500 uppercase">
                About me
            </button>
                </Link>
         </div>
          <div className=" border-b-2 border-black h-10 w-2/3 md:mt-6">
        </div>

      </section>
     
      <GridImageDisplay/>
     

    </div>
  );
}
export default HomePage;
