import React,{useContext} from 'react'
import SocialMedias from './SocialMedias'
import { DataContext } from '../../DataContext'
import {motion} from 'framer-motion'



function Contact() {
const{darkMode} = useContext(DataContext);

  return (

    <div className={`${darkMode && ' text-violet-600'} transition-colors duration-500 mt-20 md:mt-24 w-full mb-4`}>
        <span className='w-full text-3xl md:text-5xl font-serif mt-20 px-6 md:px-24'>Contact.</span>

          <div className={` ${darkMode && ' text-violet-600'} text-md md:text-2xl font-bold flex  tracking-widest flex-col items-center justify-center gap-2 mt-4 md:m-10 md:p-4`}>
            <motion.span whileHover={{scale:1.3, color:'darkblue'}} transition={{ type:'spring', stiffness:'300'}} className=' cursor-pointer'> vineethpv024@gmail.com </motion.span>
            <motion.span whileHover={{scale:1.3, color:'darkblue'}} transition={{ type:'spring', stiffness:'300'}} className=' cursor-pointer'><a href='https://github.com/callmeVineeth' target='_newpage'> GitHub   </a> </motion.span>
            <motion.span whileHover={{scale:1.3, color:'darkblue'}} transition={{ type:'spring', stiffness:'300'}} className=' cursor-pointer'><a href='https://www.linkedin.com/in/vineeth-p-v-9216021b8/' target='_newpage'> LinkedIn </a> </motion.span>
            <motion.span whileHover={{scale:1.3, color:'darkblue'}} transition={{ type:'spring', stiffness:'300'}} className=' cursor-pointer'><a href='https://twitter.com/callmeVineeth24' target='_newpage'> Twitter  </a> </motion.span>
               <SocialMedias/>     
          </div>
           

       <div className='w-full text-center mt-10 text-sm md:text-lg'>Copyright © 2024. All Rights Reserved.</div>
    </div>
  )
}

export default Contact