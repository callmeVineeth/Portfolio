import React from 'react'
import { FaLaptopCode } from "react-icons/fa";

function SkillsCard({heading, skill1, skill2,skill3, skill4, skill5, ImageIcon}) {
  return (
    <div className=' bg-gray-200 flex flex-col items-center font-serif  tracking-widest justify-center border-2 border-red-200  p-10 shadow-lg'>
        <span className=' text-6xl text-red-600 hover:text-red-300 bg-gray-100 p-4 rounded-full'> {ImageIcon}</span>
       <h1 className=' font-bold text-xl flex flex-wrap tracking-widest'> {heading} </h1>
       <ul className= 'flex flex-col gap-5 mt-4'>
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