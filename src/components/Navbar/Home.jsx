import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[white]">
      <div class="flex lg:grid grid-cols-2 divide-x max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full divide-transparent">
        <div className="mt-[80px] lg:mt-0 lg:max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <img
            className="h-[230px] lg:h-[480px]"
            src="https://img.freepik.com/premium-vector/man-with-cup-coffee-stands-near-workplace_753539-239.jpg?w=740"
            alt=""
          />
        </div>
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center hover:translate-y-30">
          <p> Hi, my name is </p>
          <h1 className="text-4xl sm:text-7xl font-bold">Manikandan</h1>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#424949]">
            I'm a Full Stack Developer
          </h2>
          <p className="text-[#424949]">Keep reading for further details...</p>
          <div>
            <button className="border-2 group border-black px-6 py-3 my-2 flex items-center rounded-md text-2xl hover:bg-black hover:text-white">
              <Link activeClass="active" to="work" smooth={true} duration={500}>
                Work
              </Link>
              <FaArrowRight className="ml-2 group-hover:rotate-90 duration-200" />
            </button>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Home