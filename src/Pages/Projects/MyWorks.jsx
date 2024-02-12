import React from 'react'
import myworksImg from '../../Assets/myworks.png'

function MyWorks() {
  return (
    <div className=' w-full flex flex-col items-center justify-center'>
        <div className=' w-full md:w-8/12  '>
            <img src={myworksImg} alt='myworks' className=' w-full h-full ' />

        </div>
    </div>
  )
}

export default MyWorks