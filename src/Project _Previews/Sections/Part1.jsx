import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { FaRegFileCode } from 'react-icons/fa6';
import { IoIosLink } from 'react-icons/io';
import { motion } from 'framer-motion';

function Part1({ title, description, liveSite, gitCode , sitelabel='Live Site'}) {


  return (
    <motion.div className='w-full md:w-1/3 flex flex-col justify-between p-5 text-black md:ml-32 bg-gray-100'
    initial={{ y:800, transition:{ duration: 0.9, delay:1} }}
    animate={{ y:0, transition: { duration: 0.9, ease: 'easeInOut' } }}
    exit={{  y:-800, transition: { duration: 1, ease: 'easeInOut'} }}
    >

      <div className='fixed'><Link to='/'><IoMdArrowBack size={30} /></Link></div>
      <div className='flex flex-col p-12 gap-2'>
        <h1 className='text-4xl font-semibold text-blue-600'>
          <a href={liveSite} target='_blank' rel='noopener noreferrer'>{title}</a>
        </h1>
        <div className='opacity-90 mt-1 md:mt-4'>{description}</div>

        <div className='mt-12 flex flex-col'>
          <span className='text-md font-thin text-blue-900'>View the Project on GitHub:</span>
          <a className='mt-4 flex flex-row gap-4 text-blue-600 w-44' target='_blank' href={liveSite}><IoIosLink size={23} />{sitelabel}</a>
          <a className='flex flex-row gap-4 text-blue-600 w-44' target='_blank' href={gitCode}><FaRegFileCode size={23} />Check Code</a>
        </div>
      </div>

      <div className='opacity-60'>Feedback will be appreciated</div>

    </motion.div>
  );
}

export default Part1;
