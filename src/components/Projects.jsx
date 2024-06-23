import React from "react";
import lung from "../assets/portfolio/lung.jpeg";
import bakery from "../assets/portfolio/bakery.png";
import reactWeather from "../assets/portfolio/weather.jpeg";
import ecommerce from "../assets/portfolio/e-commerce.jpeg";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: lung,
      projectname:"LungVision-In Humans Calssification of Lung cancer Using CNN and Vision Transformer",
    },
    {
      id: 2,
      src: bakery,
      projectname:"Bakery Management System",
    },
    {
      id: 3,
      src: reactWeather,
      projectname:"Weather Application",
    },
    {
      id: 4,
      src: ecommerce,
      projectname:"E-commerce Webiste",
    },
  ];

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-green-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-2  md:grid-cols-4 gap-8 px-1 sm:px-0">
          {portfolios.map(({ id, src,projectname }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className=" flex py-5   justify-center items-center">{projectname}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;