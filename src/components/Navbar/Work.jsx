import React from "react";
// import { FaCode } from "react-icons/fa";
import article from "../../assets/projects/article.png";
import { TbTargetArrow } from "react-icons/tb";
import sales from "../../assets/sales.png";
import weather from "../../assets/weather.png";
import code from "../../assets/code.png";
const Work = () => {
  // projects file
  const project = [
    {
      id: 1,
      name: "Article App- Subscription App",
      image: article,
      github: "https://github.com/mani1916/subscription",
      live: "https://cenzo-article.netlify.app/",
    },
    {
      id: 2,
      name: "BUSINESS DATA AND SALES FORECASTING",
      image: sales,
      github: "https://github.com/mani1916/DIGIVERSE",
      live: "https://kaar-e74a3.web.app/",
    },
    {
      id: 3,
      name: "Weather App",
      image: weather,
      github: "https://github.com/mani1916/weatherApp",
      live: "https://weather-forecast-app-bowd.onrender.com/",
    },
    {
      id: 4,
      name: "CodePen-Clone",
      image: code,
      github: "",
      live: "",
    },
  ];
  //setProject(data);

  return (
    <div name="work" className="w-full md:h-screen ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-2 flex">
          <TbTargetArrow
            className=" mt-2 mr-1 bg-[#e2ecf3]  p-[4px] rounded-lg text-[#0a85d1]"
            size={40}
          />

          <p className="text-4xl font-bold inline border-b-4 text-[#0a85d1] border-[black]">
            Projects
          </p>
        </div>
        <p className="py-6">Check out some of my recent work</p>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-1xl font bold text-[#0a85d1] tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-2 m-2
                       font-bold text-md bg-[#e2ecf3] text-[#0a85d1]"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-2 m-2
                        font-bold text-md bg-[#e2ecf3] text-[#0a85d1]"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
