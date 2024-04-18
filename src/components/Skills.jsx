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
               className="w-full  h-auto md:h-screen   bg-[#0a192f] text-gray-300"
          >
               {/* {mySkills} */}
               {/* Container */}
               <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                    <div>
                         <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
                              Skills
                         </p>
                         <p className="py-4">
                              // These are the technologies I've worked with
                         </p>
                    </div>

                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 sm:grid-cols-4 gap-[1rem] text-center py-8">
                         <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                              <img
                                   className="w-20 mx-auto"
                                   src={HTML}
                                   alt="HTML icon"
                              />
                              <p className="my-4">HTML</p>
                         </div>
                         <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                              <img
                                   className="w-20 mx-auto"
                                   src={CSS}
                                   alt="HTML icon"
                              />
                              <p className="my-4">CSS</p>
                         </div>
                         <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                              <img
                                   className="w-20 mx-auto"
                                   src={JavaScript}
                                   alt="HTML icon"
                              />
                              <p className="my-4">JAVASCRIPT</p>
                         </div>
                         <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                              <img
                                   className="w-20 mx-auto"
                                   src={ReactImg}
                                   alt="HTML icon"
                              />
                              <p className="my-4">REACT</p>
                         </div>
                         <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                              <img
                                   className="w-20 mx-auto"
                                   src={GitHub}
                                   alt="HTML icon"
                              />
                              <p className="my-4">GITHUB</p>
                         </div>
                         <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                              <img
                                   className="w-20 mx-auto"
                                   src={Node}
                                   alt="HTML icon"
                              />
                              <p className="my-4">NODE JS</p>
                         </div>
                         <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                              <img
                                   className="w-20 mx-auto"
                                   src={Mongo}
                                   alt="HTML icon"
                              />
                              <p className="my-4">MONGO DB</p>
                         </div>
                         <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                              <img
                                   className="w-20 mx-auto"
                                   src={Tailwind}
                                   alt="HTML icon"
                              />
                              <p className="my-4">TAILWIND</p>
                         </div>
                         <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                              <img
                                   className="w-20 mx-auto"
                                   src={FireBase}
                                   alt="HTML icon"
                              />
                              <p className="my-4">FIREBASE</p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Skills;
