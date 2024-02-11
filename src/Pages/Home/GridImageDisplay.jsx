import React from 'react'
import Home from './Home.css'
import { motion } from 'framer-motion'
import { fadeInTopVariant } from '../../Utils/Variants'


function GridImageDisplay() {
  return (
    
         <section
         as={motion.div}
         variants={fadeInTopVariant}
         initial="hidden"
         whileInView="visible"
          className=" md:w-2/3 h-72 md:h-64 relative object-cover">
            <div className=' absolute right-20 top-20 gridImage hover:scale-105'> </div>
            {/* <div className=' absolute -z-50  top-20 px-6 w-full
             grid grid-cols-5 grid-rows-5'>
            </div> */}
             
      </section>
  )
}

export default GridImageDisplay