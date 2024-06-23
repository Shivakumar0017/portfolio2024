import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import cpp from "../assets/cpp.png";
import SQL from "../assets/sql.jpg"
import node from "../assets/nodejs.jpg"
import express from "../assets/express.jpg"
import python from "../assets/python.jpg"

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React Js",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: express,
      title: "Express JS",
      style: "shadow-red-400 pt-6",
    },
    {
      id: 6,
      src: node,
      title: "Node JS",
      style: "shadow-green-900 pt-6",
    },
    {
      id: 7,
      src: SQL,
      title: "SQL",
      style: "shadow-orange-400",
    },
    {
      id: 8,
      src: cpp,
      title: "C++",
      style: "shadow-gray-100 pt-6",
    },
    {
      id: 9,
      src: python,
      title: "Python",
      style: "shadow-yellow-100 pt-6",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full md:h-full max-h-full text-"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500  inline text-green-500">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;