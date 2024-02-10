import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../../DataContext";
// import Button from '../CustomComponents/Button'
import {motion} from 'framer-motion'
import GridImageDisplay from "./GridImageDisplay";
import { Link } from "react-scroll";

function HomePage() {
  const { darkMode } = useContext(DataContext);

  return(
    <div className=" p-2 flex flex-col-reverse md:flex-row font-serif">
      <section className=" text-3xl md:text-6xl w-full py-44 pl-4 flex flex-col items-center">

         <div>
            <p>
              Hi, I'm Vineeth and I love developing beautiful websites
            </p>
            <button className="text-xl text-white md:text-2xl mt-6 w-max h-16 bg-green-900 p-4 
            font-bold shadow-md  hover:scale-105 hover:shadow-2xl transition-all duration-500 uppercase">
            <Link to='aboutSection'
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}>About me</Link>
            </button>
         </div>
          <div className=" border-b-2 border-black h-10 w-2/3 md:mt-6">
        </div>

      </section>
     
      <GridImageDisplay/>
     

    </div>
  );
}
export default HomePage;
