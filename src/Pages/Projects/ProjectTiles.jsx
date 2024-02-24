import React,{useContext} from 'react'
// import sampleImg from '../Assets/Movieflix.png'
import { DataContext } from '../../DataContext';


function ProjectTiles({sampleImg, content}) {
  const { darkMode } = useContext(DataContext);


  return (
    <div className={` ${darkMode && ' '} flex flex-col shadow-sm shadow-black 
            md:h-auto m-2 md:m-4 `}
       >
        {/* <img src={sampleImg} alt='projectPic' className='project_pic w-1/2 md:w-full z-0 '/> */}

        <div className=' overflow-hidden'>

          <img src={sampleImg} alt='' className='relative project_pic z-0 transition-all duration-700 hover:scale-125' />
          </div>

{/*        
        <span className='p-1 flex items-center justify-center tracking-wide font-bold font-serif'>
            {content}
        </span> */}

    </div>
  )
}

export default ProjectTiles