import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";

import {
  FaAngular,
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaBootstrap,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
const Skills = () => {
  let mySkills = [
    <FaAngular key={1} />,
    <FaReact key={2} />,
    <FaHtml5 key={3} />,
    <FaCss3 key={4} />,
    <FaJs key={5} />,
    <FaBootstrap key={6} />,
    <FaGithub key={7} />,
    <FaDatabase key={8} />,
  ];
  return (
    <div
      name="skills"
      className="mb-10  h-auto min-h-[100vh] w-full bg-[#0a192f]   text-gray-300 "
    >
      {/* {mySkills} */}
      {/* Container */}
      <div className=" mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4">
        <div>
          <p className="inline border-b-4 border-pink-600 text-4xl font-bold ">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="grid w-full grid-cols-2 gap-[1rem] py-8 text-center sm:grid-cols-3 sm:grid-cols-4">
          <div className="shadow-md shadow-[#040c16] duration-500 hover:scale-110">
            <img className="mx-auto w-20" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] duration-500 hover:scale-110">
            <img className="mx-auto w-20" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] duration-500 hover:scale-110">
            <img className="mx-auto w-20" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] duration-500 hover:scale-110">
            <img className="mx-auto w-20" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] duration-500 hover:scale-110">
            <img className="mx-auto w-20" src={GitHub} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] duration-500 hover:scale-110">
            <img className="mx-auto w-20" src={Node} alt="HTML icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] duration-500 hover:scale-110">
            <img className="mx-auto w-20" src={Mongo} alt="HTML icon" />
            <p className="my-4">MONGO DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] duration-500 hover:scale-110">
            <img className="mx-auto w-20" src={Tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] duration-500 hover:scale-110">
            <img className="mx-auto w-20" src={FireBase} alt="HTML icon" />
            <p className="my-4">FIREBASE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
