import React, { useRef, useEffect } from 'react';
import './bg.css'; // Assuming bg.css contains your styling

function BgPattern() {
  const pageRef = useRef(null); // Create a ref for the page

  useEffect(() => {
    const handleScroll = (event) => {
      // Adjust the scrolling speed here if needed
      const scrollSpeed = 0.5; // Example: lower the speed to half
      
      // Modify the deltaY value to change the scrolling speed
      event.currentTarget.scrollTop += event.deltaY * scrollSpeed;
      
      // Prevent the default scrolling behavior
      event.preventDefault();
    };

    // Add wheel event listener when the component mounts
    pageRef.current.addEventListener('wheel', handleScroll, { passive: false });

    // Clean up the event listener when the component unmounts
    return () => {
      pageRef.current.removeEventListener('wheel', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className='bgPattern' ref={pageRef}> {/* Attach the ref to the outer div */}
      <div className='gridLayout grid grid-cols-4 grid-rows-4 gap-2'>
        <div className='bg-gray-50 circle1 w-32 h-32 md:w-48 md:h-48 rounded-full'></div>
        <div className='bg-gray-50 circle2 w-14 h-14 rounded-full'></div>
        <div className='bg-gray-50 circle3 w-20 h-20 md:w-32 md:h-32 rounded-full'></div>
        <div className='grid-cols-4 circle4 grid-rows-4 bg-gray-50 circle4 w-20 h-20 rounded-full'></div>
      </div>
    </div>
  );
}

export default BgPattern;
