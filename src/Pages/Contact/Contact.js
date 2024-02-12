import React,{useContext} from 'react'
import SocialMedias from './SocialMedias'
import { DataContext } from '../../DataContext'
import {motion} from 'framer-motion'



function Contact() {
const{darkMode} = useContext(DataContext);

  return (

    <div className={`${darkMode && ' text-white'} transition-colors duration-500 mt-20 md:mt-24 w-full mb-4`}>
        <span className='w-full text-3xl md:text-5xl font-serif mt-20 px-6 md:px-24'> Contact</span>

          <div className={` text-md md:text-xl font-serif flex  flex-col items-center justify-center gap-2 mt-4 md:m-10 md:p-4`}>
            <div className=' w-full flex flex-col md:w-2/3 p-4 h-auto'>
              <h1 className=' text-2xl'>Let's get in touch!</h1>
              <span>
                Thank you for the visit! Feel free to contact me regarding any kind of jobs,collaborations or if you just want to 
                say hello.
              </span>
              <span className=' mt-2'>
                Find me on <a href='https://github.com/callmeVineeth' target='_blank' className=' text-blue-700'>github</a> or
                <a target='_blank' href="https://mail.google.com/mail/?view=cm&fs=1&to=vineethpv024@gmail.com" className=' text-blue-700'> email </a>
               vineethpv024@gmail.com </span>

            </div>
               <SocialMedias/>     
          </div>
           

       <div className='w-full text-center mt-10 text-sm md:text-lg'>Copyright © 2024. All Rights Reserved.</div>
    </div>
  )
}

export default Contact