import React from "react";
import SectionStyle from './SectionStyle.css'
// import sampleVideo from '../MovieApp/Images/movieApp_preview.gif';
import samImg from "../../Assets/Space Tourism.gif";

function Part2({ projectTitle,projectDesc,previewVideo1,previewVideo2,
  samImg1,samImg2,samImg3,samImg4,samImg5,samImg6,samImg7,samImg8,samImg9,data
}) {
  return (
    <div className="scroll_bar  w-full h-screen text-md  p-4 md:px-10 md:overflow-y-scroll  bg-white text-black mr-32">
      <div className="  flex flex-col  gap-6">
        {/* <img src={samImg} alt="sampleImg" className=" w-full h-32 top-20 object-cover" /> */}

       <div>
        {data.map((project, key)=>(
          
         <>
            <div className=" text-3xl md:text-5xl text-center  w-full  md:w-10/12 ">{project.title}</div>
            <div className=" opacity-60 text-lg mt-4 italic">
             {project.description}
            </div>
         </>
        ))}
        </div>


       {/* -------Technologies Used --------------- */}


      <div className=" flex flex-col">
        <span className=" mt-14 font-bold text-xl"> Technologies Used ? </span>
        <ul className= "w-2/3 flex flex-col list-disc ml-12 md:ml-20  opacity-65">
          {data.map((project, techKey)=>(

          <>
          { project.technology1 && (<li>{project.technology1}</li>)}
          { project.technology2 && (<li>{project.technology2}</li>)}
          { project.technology3 && (<li>{project.technology3}</li>)}
          { project.technology4 && (<li>{project.technology4}</li>)}
          { project.technology5 && (<li>{project.technology5}</li>)}
          { project.technology6 && (<li>{project.technology6}</li>)}
          { project.technology7 && (<li>{project.technology7}</li>)}
          </>
          ))}
        </ul>
      </div>


    {/* ----------------- Features ----------------- */}

      <div className=" flex flex-col">  
        <span className=" font-bold text-xl">Features </span>
        <ul className=" w-2/3 flex flex-col list-disc ml-12 md:ml-20 opacity-65">
          {data.map((project, featureIndex)=>(
<>
  
            <li>{project.feature1}</li>
            <li>{project.feature2}</li>
            <li>{project.feature3}</li>
            {project.feature4 && (<li>{project.feature4}</li>) }
            {project.feature5 && (<li>{project.feature5}</li>) }
            {project.feature6 && (<li>{project.feature6}</li>) }
            {project.feature7 && (<li>{project.feature7}</li>) }
           
</>

          ))}
        </ul>
      </div>  
{/* ------------------ previews ------------------------------ */}


        <div className=" max-w-2/3 flex flex-col ">
          <h2 className=" text-xl font-bold mt-8">Preview</h2>
          <embed src={previewVideo1} className=" w-11/12" />
          <embed src={previewVideo2} className=" w-11/12" />
        </div>

        {/* -------------------------------  Screens ------------------------------- */}

        <div className=" text-2xl font-bold">Screens</div>

        <div className="grid grid-cols-2 md:grid-cols-3  gap-0.5 bg-black bg-opacity-10 ">
          <div className=" bg-white flex items-center justify-center ">
            <img src={samImg1} alt=" screen1" className=" img_grid w-8/12 h-auto " />
          </div>
          <div className=" bg-white flex items-center justify-center ">
            <img src={samImg2} alt=" screen2" className=" img_grid w-8/12 h-auto " />
          </div>
          <div className=" bg-white flex items-center justify-center ">
            <img src={samImg3} alt=" screen3" className=" img_grid w-8/12 h-auto " />
          </div>
          <div className=" bg-white flex items-center justify-center ">
            <img src={samImg4} alt=" screen4" className=" img_grid w-8/12 h-auto " />
          </div>
          <div className=" bg-white flex items-center justify-center  ">
            <img src={samImg5} alt=" screen5" className=" img_grid w-8/12 h-auto " />
          </div>
          <div className=" bg-white flex items-center justify-center ">
            <img src={samImg6} alt=" screen6" className=" img_grid w-8/12 h-auto " />
          </div>
          <div className=" bg-white flex items-center justify-center h-60 ">
            <img src={samImg7} alt=" screen7" className=" img_grid w-10/12 h-auto " />
          </div>
          <div className=" bg-white flex items-center justify-center h-60 ">
            <img src={samImg8} alt=" screen8" className=" img_grid w-10/12 h-auto " />
          </div>
          <div className=" bg-white flex items-center justify-center h-60 ">
            <img src={samImg9} alt=" screen9" className=" img_grid w-10/12 h-auto " />
          </div>
          <div className=" visible md:hidden bg-white flex items-center justify-center h-60 ">
            <img src={samImg7} alt=" screen7" className=" img_grid w-10/12 h-auto " />
          </div>
        </div>


        <h1 className=" font-bold text-xl mt-10">Getting Started</h1>
        <div className=" w-10/12 flex flex-col gap-4 rounded-lg overflow-x-scroll bg-gray-200 p-4">
          
          <span> git clone </span>
          <span> npm install </span>
          <span> npm start </span>
          
        </div>

        <div className=" flex flex-col gap-4 p-4">
            <span className=" font-bold text-2xl">Feedback</span>
            <div className=" opacity-70">
              In case you have any feedback or questions, 
              feel free to reach at <span className=" opacity-110 text-blue-800">https://github.com/callmeVineeth</span> and open a new issues on this repo or reach out to me 
              at <span className=" opacity-110  text-blue-900">vineethpv024@gmail.com</span>
            </div>
            <span className=" font-extralight opacity-70">Thanks</span>
        </div>
      </div>
    </div>
  );
}

export default Part2;
