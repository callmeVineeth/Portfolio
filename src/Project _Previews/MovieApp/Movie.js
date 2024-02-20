import React, { useEffect } from 'react'
import Part1 from '../Sections/Part1'
import Part2 from '../Sections/Part2'

import preview1 from './Images/movieApp_preview.gif'
import preview2 from './Images/preview2.gif'
import projectImg from '../../Assets/Movieflix.png'

import Img1 from './Images/Screenshot (259).png'
import Img2 from './Images/Screenshot (260).png'
import Img3 from './Images/Screenshot (262).png'
import Img4 from './Images/Screenshot (263).png'
import Img5 from './Images/Screenshot (260).png'
import Img6 from './Images/Screenshot (262).png'
import Img7 from './Images/Screenshot (266).png'
import Img8 from './Images/Screenshot (267).png'
import Img9 from './Images/Screenshot (269).png'

import MovieFlixData from '../../Data/Movieflix.json'
import { motion, AnimatePresence } from 'framer-motion'


export default function Movie() {

  useEffect(()=>{
    window.scrollTo(0,0)
  })


  return (
    <AnimatePresence>
    <motion.div
  className='flex flex-col md:flex-row'
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeInOut' } }}
  exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.5, ease: 'easeInOut' } }}
>
      <Part1
        title={'Movieflix'}
        liveSite={'https://callmevineeth.github.io/MovieApp/'}  gitCode={'https://github.com/callmeVineeth/MovieApp'}
      />
        
      <Part2 
        projectTitle={'MovieFlix'}   previewVideo1={preview1} previewVideo2={preview2} 
        projectDesc={'An unofficial Netflix clone where you can explore different movies and series'}  
        samImg1={Img1}  samImg2={Img2}  samImg3={Img3}  samImg4={Img4}  samImg5={Img5}  samImg6={Img6} 
        samImg7={Img7} samImg8={Img8} samImg9={Img9} data={MovieFlixData}
      />
    </motion.div>
    </AnimatePresence>
  )
}
