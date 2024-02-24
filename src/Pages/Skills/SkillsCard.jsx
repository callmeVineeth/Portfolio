import React from 'react'
import { FaLaptopCode } from "react-icons/fa";

function SkillsCard({heading, skill1, skill2,skill3, skill4, skill5, ImageIcon}) {
  return (
    <div className='  flex flex-col w-max items-center bg-violet-300
     justify-center font-serif shadow-xl tracking-widest p-4 hover:scale-110 transition-all duration-300'>
        <span className=' text-red-600 text-6xl hover:text-red-300 bg-gray-100 p-4 rounded-full'> {ImageIcon}</span>
       <div className=' w-full font-bold flex flex-col items-center justify-center text- md:text-xl tracking-widest'> {heading} </div>
       <ul className= 'flex flex-col items-center justify-center mt-4'>
       {skill1 && <li>{skill1}</li>}
       {skill2 && <li>{skill2}</li>}
       {skill3 && <li>{skill3}</li>}
       {skill4 && <li>{skill4}</li>}
       {skill5 && <li>{skill5}</li>}
        
       </ul>

    </div>
  )
}

export default SkillsCard