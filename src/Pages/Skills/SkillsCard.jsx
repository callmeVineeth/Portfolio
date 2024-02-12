import React from 'react'
import { FaLaptopCode } from "react-icons/fa";

function SkillsCard({heading, skill1, skill2,skill3, skill4}) {
  return (
    <div className=' bg-gray-200 flex flex-col items-center justify-center  p-10 shadow-lg'>
        {/* <span> <FaLaptopCode size={60}/> </span> */}
       <h1 className=' font-bold text-xl flex flex-wrap'> {heading} </h1>
       <ul className= 'flex flex-col gap-5'>
       {skill1 && <li>{skill1}</li>}
       {skill2 && <li>{skill2}</li>}
       {skill3 && <li>{skill3}</li>}
       {skill4 && <li>{skill4}</li>}
        
       </ul>

    </div>
  )
}

export default SkillsCard