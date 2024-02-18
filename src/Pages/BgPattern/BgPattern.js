import React from 'react'
import  Bg from './bg.css'

function BgPattern() {
  return (
    <div className='bgPattern'>

    <div className='gridLayout grid grid-cols-4 grid-rows-4 gap-2'>
        <div className=' bg-red-200 bg-transparent circle1 w-60 h-60 rounded-full'></div>
        <div className=' bg-green-500 circle1 w-32 h-32 rounded-full'></div>
        <div className=' bg-green-500 circle1 w-32 h-32 rounded-full'></div>
        <div className=' bg-green-500 circle1 w-32 h-32 rounded-full'></div>
        <div className=' bg-green-500 circle2 w-32 h-32 rounded-full'></div>
        <div className=' bg-green-500 circle3 w-32 h-32 rounded-full'></div>
        <div className=' grid-cols-4 grid-rows-4 bg-green-500 circle4 w-32 h-32 rounded-full'></div>

    </div>

    </div>
  )
}

export default BgPattern
