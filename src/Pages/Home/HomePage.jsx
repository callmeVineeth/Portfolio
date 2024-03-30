import React, { useContext } from "react";
import { DataContext } from "../../DataContext";
// import {motion} from 'framer-motion'
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
    <div className=" flex ">
      <section className="homeSection text-white bg-transparent w-full py-28 flex flex-col items-center">

         <div className=" flex flex-col justify-center items-center mt-36">
            <span className=" italic text-6xl font-extrabold">
              Hi,
               I'm Vineeth 
            </span>  
     
            <span className="text-lg font-mono text-white text-center tracking-widest">
           FRONT-END REACT DEV BASED IN INDIA 
            </span>
           
           <div className=" flex flex-row gap-3 font-semibold text-sm md:text-lg">
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

      </section>

      <section className="bgImage w-full bg-red-500 ">
      <div class="absolute inset-0  w-full bg-gradient-to-r from-black via-transparent  to-blur-lg"></div>

      </section>
     

    </div>
  );
}
export default HomePage;
