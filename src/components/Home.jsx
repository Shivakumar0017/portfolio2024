import React from "react";
import HeroImage from "../assets/HeroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div
      name="home"
      className="h-full w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mt-[120px] uppercase ">
          I'm A Developer
           </h2>
           <h2 className="text-green-500 text-2xl italic">
            DEBUGGING LIFE
            <ReactTyped strings={[", slowly" , ", ONE STEP AT A TIME"]}
          typeSpeed={140} backSpeed={60} loop/>
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          Highly organized and hard-working individual looking for a responsible  position in a company making a significant contribution to the success of the company from where I can develop my skills and ability to acquire a career as a professional Software Engineer
          </p>

          <div 
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-500 to-lime-500 cursor-pointer  mx-auto"  >
               <a
              href="/resume.pdf"
              className="flex justify-between items-center w-full text-white"
              download={true}
              target="_blank"
              rel="noreferrer"
            >Resume</a>
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="md:rounded-3xl h-[310px] w-[240px] rounded-3xl  md:w-[260px] md:mt-[150px] md:h-[340px] mx-auto mt-4 md:ml-[60px] md:mr-[60px] hover:scale-110 duration-500 hover:shadow-lg shadow-green-500/90"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;