import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectTiles from './ProjectTiles';
import movieapp from '../../Assets/Movieflix.png';
import newsapp from '../../Assets/globalChronicle.gif';
import foodapp from '../../Assets/savora.png';
import elearning from '../../Assets/elearning.png';
import spaceTourism from '../../Assets/Space Tourism.gif';
import { DataContext } from '../../DataContext';
import { Link } from 'react-router-dom';
import MyWorks from './MyWorks';

function Projects() {
  const { darkMode, setDarkMode } = useContext(DataContext);

  // Define transition animation
  const transition = {
    duration: 0.5, // Duration of the transition
    ease: 'easeInOut', // Easing function
  };

  // Define project tiles data
  const projectTilesData = [
    { id: 1, link: '/movieApp', sampleImg: movieapp, content: 'An unofficial Netflix clone' },
    { id: 2, link: '/globalChronicle', sampleImg: newsapp, content: 'Real time news website' },
    { id: 3, link: '/savora', sampleImg: foodapp, content: 'Restaurant website' },
    { id: 4, link: '/eduMentor', sampleImg: elearning, content: 'EduMentor -E Learning Platform' },
    { id: 5, link: '/spaceTour', sampleImg: spaceTourism, content: 'Space Tour website' },
  ];

  return (
    <div className={`transition-colors duration-500 w-full mt-12 md:mt-32 flex flex-col items-center font-serif justify-center md:px-10`}>
      <div className={` ${darkMode && 'text-red-600'} text-center w-full text-4xl md:text-5xl px-20`}>
        My Works
      </div>
       <MyWorks/>
       <h1 className=' text-md md:text-2xl font-bold hover:border-b-2 px-3 cursor-pointer '>Explore some of my projects here</h1>
      <div className='flex flex-wrap mt-8 md:mt-10 px-8'>
        <div className='flex-wrap gap-1 grid grid-cols-1 md:grid-cols-3  '>
          <AnimatePresence>
            {projectTilesData.map(tile => (
              <Link key={tile.id} to={tile.link}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={transition}
                >
                  <ProjectTiles sampleImg={tile.sampleImg} content={tile.content} />
                </motion.div>
              </Link>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Projects;
