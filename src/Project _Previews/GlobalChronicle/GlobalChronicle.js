import React, { useEffect } from 'react'
import Part1 from '../Sections/Part1'
import Part2 from '../Sections/Part2'

import preview1 from './Images/News_preview.gif'


import Img1 from './Images/Screenshot (289).png'
import Img2 from './Images/Screenshot (290).png'
import Img3 from './Images/Screenshot (292).png'
import Img4 from './Images/Screenshot (293).png'
import Img5 from './Images/Screenshot (295).png'
import Img6 from './Images/Screenshot (296).png'
import Img7 from './Images/Screenshot (297).png'
import Img8 from './Images/Screenshot (298).png'
import Img9 from './Images/Screenshot (299).png'

import {motion} from 'framer-motion'

import GlobalChronicleData from'../../Data/GlobalChronicle.json'

export default function GlobalChronicle() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (

    <motion.div
    className='flex flex-col md:flex-row'
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeInOut' } }}
    exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.5, ease: 'easeInOut' } }}
  >
        <Part1
         title={'GlobalChronicle'}
         liveSite={'https://github.com/callmeVineeth/Global-Chronicle'} gitCode={'https://github.com/callmeVineeth/Global-Chronicle'}
         sitelabel='Live not available at the movement due to Cors Policy'
         />
        
        <Part2 
        projectTitle={'Global Chronicle'}   previewVideo1={preview1}
        projectDesc={'A website for watching real time news.'} 
         secDesc={'kfhdhf sodhfodoffsdfdfffffff dfd '}  
         aboutProject={''}  
         samImg1={Img1}  samImg2={Img2}  samImg3={Img3}  samImg4={Img4}  samImg5={Img5}  samImg6={Img6} 
         samImg7={Img7} samImg8={Img8} samImg9={Img9}  data={GlobalChronicleData}
/>
      
    </motion.div>
  )
}
