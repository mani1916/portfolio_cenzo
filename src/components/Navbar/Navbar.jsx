import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaHome } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { TbTargetArrow } from "react-icons/tb";
import { MdOutlineSms } from "react-icons/md";

import { BsFillPersonLinesFill } from "react-icons/bs";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { IoCodeSlash } from "react-icons/io5";

import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleclick = () => setNav(!nav);

  return (
    <div className="sticky top-0 w-full h-[80px] flex justify-between items-center px-4 bg-[white]">
      <div className="text-5xl ml-8 font-bold">CenZo</div>
      {/* menubar */}
      <div className="hidden md:flex">
        <ul className="hidden md:flex">
          <li>
            <Link
              className="flex hover:scale-110 duration-500 "
              activeClass="active"
              to="home"
              smooth={true}
              duration={500}
            >
              <FaHome className=" mr-2  bg-[#E5E8E8] w-6 h-6 p-[4px] rounded-lg 	" />{" "}
              Home
            </Link>
          </li>
          <li>
            <Link
              className="flex hover:scale-110 duration-500 hover:text-[#9d34da] "
              activeClass="active"
              to="about"
              smooth={true}
              duration={500}
            >
              <TbArrowRoundaboutRight className=" mr-2 bg-[#f0e1f9] w-6 h-6 p-[4px] rounded-lg text-[#9d34da]" />
              About
            </Link>
          </li>
          <li>
            <Link
              className="flex hover:scale-110 duration-500 hover:text-[#ea4e43] "
              activeClass="active"
              to="skills"
              smooth={true}
              duration={500}
            >
              <IoCodeSlash className=" mr-2 bg-[#fce9e8] w-6 h-6 p-[4px] rounded-lg text-[#ea4e43]" />
              Skills
            </Link>
          </li>
          <li>
            <Link
              className="flex hover:scale-110 duration-500 hover:text-[#0a85d1] "
              activeClass="active"
              to="work"
              smooth={true}
              duration={500}
            >
              <TbTargetArrow className=" mr-2 bg-[#e2ecf3] w-6 h-6 p-[4px] rounded-lg text-[#0a85d1]" />
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="flex hover:scale-110 duration-500 hover:text-[#fb3]"
              activeClass="active"
              to="contact"
              smooth={true}
              duration={500}
            >
              <MdOutlineSms className=" mr-2 bg-[#fff6d6] w-6 h-6 p-[4px] rounded-lg text-[#fb3]" />
              contact
            </Link>
          </li>
        </ul>
      </div>
      {/* baricon */}
      <div onClick={handleclick} className="md:hidden z-10">
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "md:hidden fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[white]"
        }
      >
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleclick}
            activeClass="active"
            to="home"
            smooth={true}
            duration={500}
            className="flex"
          >
            <FaHome
              className=" mr-1 bg-[#E5E8E8] p-[4px] rounded-lg 	"
              size={40}
            />{" "}
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleclick}
            activeClass="active"
            to="about"
            smooth={true}
            duration={500}
            className="flex"
          >
            <TbArrowRoundaboutRight
              className=" mr-1 bg-[#f0e1f9]  p-[4px] rounded-lg text-[#9d34da]"
              size={40}
            />
            about
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleclick}
            activeClass="active"
            to="skills"
            smooth={true}
            duration={500}
            className="flex"
          >
            <IoCodeSlash
              className=" mr-1 bg-[#fce9e8]  p-[4px] rounded-lg text-[#ea4e43]"
              size={40}
            />
            skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleclick}
            activeClass="active"
            to="work"
            smooth={true}
            duration={500}
            className="flex"
          >
            <TbTargetArrow
              className=" mr-1 bg-[#e2ecf3]  p-[4px] rounded-lg text-[#0a85d1]"
              size={40}
            />
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleclick}
            activeClass="active"
            to="contact"
            smooth={true}
            duration={500}
            className="flex"
          >
            <MdOutlineSms
              className=" mr-1 bg-[#fff6d6]  p-[4px] rounded-lg text-[#fb3]"
              size={40}
            />
            contact
          </Link>
        </li>
      </ul>
      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#e2ecf3]">
            <a
              className="flex justify-between items-center w-full text-[#0077b5]"
              href="https://www.linkedin.com/in/mani1916/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#E5E8E8]">
            <a
              className="flex justify-between items-center w-full text-[#2b3137]"
              href="https://github.com/mani1916"
            >
              Githhub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#F9EBEA]">
            <a
              className="flex justify-between items-center w-full text-[#E74C3C]"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FCF3CF]">
            <a
              className="flex justify-between items-center w-full text-[#F1C40F]"
              href="MANIKANDAN (RESUME)"
              download={"Manikandan Resume"}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
