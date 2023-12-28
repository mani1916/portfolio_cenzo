import React from 'react'
import { TbArrowRoundaboutRight } from "react-icons/tb";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[white]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4 flex">
            <TbArrowRoundaboutRight
              className=" mt-2 mr-2 bg-[#f0e1f9]  p-[4px] rounded-lg text-[#9d34da]"
              size={40}
            />

            <p className="text-4xl font-bold inline border-b-4  border-[black] text-[#9d34da]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 pl-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Manikandan, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About