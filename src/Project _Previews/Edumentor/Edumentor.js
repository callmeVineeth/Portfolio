import React, { useEffect } from 'react'
import Part1 from '../Sections/Part1'
import Part2 from '../Sections/Part2'

import preview1 from './Images/elearning_preview1.gif'
import preview2 from './Images/Elearning_preview2.gif'


import Img1 from './Images/Screenshot (317).png'
import Img2 from './Images/Screenshot (320).png'
import Img3 from './Images/Screenshot (315).png'
import Img4 from './Images/Screenshot (318).png'
import Img5 from './Images/Screenshot (316).png'
import Img6 from './Images/Screenshot (327) - Copy.png'
import Img7 from './Images/Screenshot (325).png'
import Img8 from './Images/Screenshot (326) - Copy.png'
import Img9 from './Images/Screenshot (324).png'

import EdumentorData from '../../Data/Edumentor.json'

import {motion} from 'framer-motion'

export default function Edumentor() {

  useEffect(()=>{
    window.scrollTo(0,0)
  })


  return (
    <motion.div
  className='flex flex-col md:flex-row'
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeInOut' } }}
  exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.5, ease: 'easeInOut' } }}
>
        <Part1
         title={'EduMentor'}
         liveSite={'https://callmevineeth.github.io/EdMentor02/'}  gitCode={'https://github.com/callmeVineeth/EdMentor02'}
         />
        
        <Part2 
         previewVideo1={preview1}
         previewVideo2={preview2}
         samImg1={Img1}  samImg2={Img2}  samImg3={Img3}  samImg4={Img4}  samImg5={Img5}  samImg6={Img6} 
         samImg7={Img7} samImg8={Img8} samImg9={Img9}  data={EdumentorData}
/>
      
    </motion.div>
  )
}
