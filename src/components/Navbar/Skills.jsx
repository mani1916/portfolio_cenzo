import React from "react";
import {FaCode} from 'react-icons/fa';

import java from "../../assets/Java-Logo.png";
import py from "../../assets/pyth.png";
import JavaScript from "../../assets/javascript.png";
import ReactImg from "../../assets/react.png";
import Node from "../../assets/node.png";
import GitHub from "../../assets/github.png";
import Tailwind from "../../assets/tailwind.png";
import Mongo from "../../assets/mongo.png";
import { IoCodeSlash } from "react-icons/io5";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <div className="flex">
            <IoCodeSlash
              className=" mr-2 mt-1 bg-[#fce9e8] p-[4px] rounded-lg text-[#ea4e43]"
              size={40}
            />

            <p className="text-4xl font-bold inline border-b-4 border-[black] text-[#ea4e43]">
              Skills
            </p>
          </div>
          <p className="py-4 flex">
            <FaCode className="mr-2 mt-1" />
            These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 ">
          <div className="shadow-md shadow-[#ABB2B9] hover:scale-110 duration-500 bg-[#FEF9E7] rounded-lg	">
            <img
              className="w-20 mx-auto mt-4"
              src={JavaScript}
              alt="HTML icon"
            />
            <p className="my-4 text-[#F4D03F]">JavaScript</p>
          </div>{" "}
          <div className="shadow-md shadow-[#ABB2B9] hover:scale-110 duration-500 bg-[#DFF8FE] rounded-lg	">
            <img className="w-20 mx-auto mt-4" src={ReactImg} alt="HTML icon" />
            <p className="my-4 text-[#61dbfb]">React</p>
          </div>{" "}
          <div className="shadow-md shadow-[#ABB2B9] hover:scale-110 duration-500 bg-[#fce9e8] rounded-lg	">
            <img className="w-[130px] mx-auto mt-4" src={java} alt="HTML icon" />
            <p className="my-4 text-[#ea4e43]">Java</p>
          </div>
          <div className="shadow-md shadow-[#ABB2B9] hover:scale-110 duration-500 bg-[#e2ecf3] rounded-lg	">
            <img className="w-20 mx-auto mt-4" src={py} alt="HTML icon" />
            <p className="my-4 text-[#0a85d1]">Python</p>
          </div>
          <div className="shadow-md shadow-[#ABB2B9] hover:scale-110 duration-500 bg-[#ECFFEC] rounded-lg	">
            <img className="w-20 mx-auto mt-4" src={Node} alt="HTML icon" />
            <p className="my-4 text-[#3c873a]">Node</p>
          </div>{" "}
          <div className="shadow-md shadow-[#ABB2B9] hover:scale-110 duration-500 bg-[#2b3137] rounded-lg	">
            <img className="w-20 mx-auto mt-4" src={GitHub} alt="HTML icon" />
            <p className="my-4 text-[#E5E8E8]">GitHub</p>
          </div>{" "}
          <div className="shadow-md shadow-[#ABB2B9] hover:scale-110 duration-500 bg-[#E2FFEC] rounded-lg	">
            <img className="w-20 mx-auto mt-4" src={Mongo} alt="HTML icon" />
            <p className="my-4 text-[#369658]">MongoDB</p>
          </div>{" "}
          <div className="shadow-md shadow-[#ABB2B9] hover:scale-110 duration-500 bg-[#E8FBFF] rounded-lg	">
            <img className="w-20 mx-auto mt-4" src={Tailwind} alt="HTML icon" />
            <p className="my-4 text-[#0891b2]">Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
