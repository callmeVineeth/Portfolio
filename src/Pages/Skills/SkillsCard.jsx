import React from 'react'
import { FaLaptopCode } from "react-icons/fa";

function SkillsCard({heading, skill1, skill2,skill3, skill4, skill5, ImageIcon}) {
  return (
    <div className='  flex flex-col items-center font-serif shadow-xl tracking-widest justify-center p-10  hover:scale-110 transition-all duration-300'>
        <span className=' text-6xl text-red-400 hover:text-red-300 bg-gray-100 p-4 rounded-full'> {ImageIcon}</span>
       <h1 className=' font-bold text-xl flex items-center tracking-widest'> {heading} </h1>
       <ul className= 'flex flex-col items-center mt-4'>
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