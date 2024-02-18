import React from 'react'
import HomePage from './Pages/Home/HomePage.jsx';
// import Navbar from './Pages/Navbar/Navbar';
// import { DataProvider } from './DataContext';
import SkillsHome from './Pages/Skills/SkillsHome';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';

import Movie from './Project _Previews/MovieApp/Movie';

import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Savora from './Project _Previews/Savora/Savora';
import SpaceTour from './Project _Previews/SpaceTour/SpaceTour';
import GlobalChronicle from './Project _Previews/GlobalChronicle/GlobalChronicle';
import Edumentor from './Project _Previews/Edumentor/Edumentor';
import {AnimatePresence} from 'framer-motion'
import Navbar from './Pages/Navbar/Navbar';
import About from './Pages/About/About.js';
import BgPattern from './Pages/BgPattern/BgPattern.js';




function AnimatedRoutes() {
 const location = useLocation();

  return (
    <AnimatePresence>
         <Routes location={location} key={location.pathname}>
              <Route path='/' element={
                <>
                <Navbar/>
                <BgPattern/>
                
               <div className='sections' id='homeSection'><HomePage/>   </div>
               <div className='sections' id='aboutSection'> <About/>   </div>
               <div className='sections' id='projectSection'><Projects/>   </div>
               <div className='sections' id='skillSection'><SkillsHome/> </div>
               <div className='sections' id='contactSection'><Contact/>    </div>
            </>
              } />
            
              <Route path='/movieApp' element={<Movie/>}>  </Route>
              <Route path='/globalChronicle' element={<GlobalChronicle/>}>  </Route>
              <Route path='/savora' element={<Savora/>}>  </Route>
              <Route path='/spaceTour' element={<SpaceTour/>}>  </Route>
              <Route path='/eduMentor' element={<Edumentor/>}>  </Route>
            </Routes>

    </AnimatePresence>
  )
}

export default AnimatedRoutes