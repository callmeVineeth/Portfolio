import React from "react";
import profilePic from "../../Assets/Untitled (480 x 600 px) (260 x 350 px).png";

function About() {
  return (
    <div className=" px-4 font-serif">
      <div className=" flex flex-col-reverse justify-evenly items-center md:flex-row-reverse">
        <div className=" w-full md:w-1/2 h-full px-12  md:px-20 text-xl ">
        <h1 className=" text-4xl md:text-5xl py-4 my-10 border-b-2 w-max border-black"> About Me</h1>
          <p className=" leading-9">
              I’m a junior front-end developer looking for a new role in an exciting
              company. I focus on writing accessible HTML, using modern CSS
              practices and writing clean JavaScript. When writing JavaScript code,
              I mostly use React, but I can adapt to whatever tools are required.
              I’m based in Kerala, India but I’m happy working onsite and remotely and I have
              experience in remote teams. When I’m not coding, you’ll find me
              outdoors. I love being out in nature whether that’s going for a walk,
              run or cycling. I’d love you to check out my work.
              <div className=" w-max p-2 hover:bg-black hover:text-white transition-all duration-200 border-2 border-black">
               Read More
              </div>
              
          </p>
        </div>
        <div className=" bg-green-500  md:w-1/3   object-cover">
          <img
            src={profilePic}
            alt="profilePic"
            className=" object-cover w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
