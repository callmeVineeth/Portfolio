import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { FaRegFileCode } from 'react-icons/fa6';
import { IoIosLink } from 'react-icons/io';

function Part1({ title, description, liveSite, gitCode , sitelabel='Live Site'}) {


  return (
    <div className='w-full md:w-1/3 flex flex-col justify-between p-5 text-black md:ml-32 bg-white'>

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

    </div>
  );
}

export default Part1;
