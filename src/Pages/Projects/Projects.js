import React, { useContext } from 'react';
import ProjectTiles from './ProjectTiles';
import movieapp from '../../Assets/Movieflix.png';
import newsapp from '../../Assets/globalChronicle.gif';
import foodapp from '../../Assets/savora.png';
import elearning from '../../Assets/elearning.png';
import spaceTourism from '../../Assets/Space Tourism.gif';
import { DataContext } from '../../DataContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LazyLoad from 'react-lazyload';

function Projects() {
  const { darkMode, setDarkMode } = useContext(DataContext);

  return (
    <div className={`transition-colors duration-500 mt-12 md:mt-32 flex flex-col items-center font-serif justify-center px-10`}>
      <span className={` ${darkMode && 'text-violet-700 '} w-full text-4xl md:text-5xl px-20`}>
        Projects.
      </span>
      <div className='flex flex-wrap mt-8 md:mt-10'>
        <div className=' flex-wrap gap-1 grid grid-cols-1 md:grid-cols-3 '>
          <div>
            <LazyLoad>
              <Link to='/movieApp'>
                <ProjectTiles sampleImg={movieapp} content={'An unofficial Netflix clone '}/>
              </Link>
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <Link to='/globalChronicle'>
                <ProjectTiles sampleImg={newsapp} content={'Real time news website'}/>
              </Link>
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <Link to='/savora'>
                <ProjectTiles sampleImg={foodapp} content={'Restaurant website '}/>
              </Link>
            </LazyLoad>
          </div>
          <div className=''>
            <LazyLoad>
              <Link to='/eduMentor'>
                <ProjectTiles sampleImg={elearning} content={'EduMentor - "Learn Anytime Anywhere'}/>
              </Link>
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <Link to='/spaceTour'>
                <ProjectTiles sampleImg={spaceTourism} content={'Space Tour website'}/>
              </Link>
            </LazyLoad>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
