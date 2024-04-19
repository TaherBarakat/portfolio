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
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";

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
    <FaReact size={50} title="React" color={"#ccd6f6"} key={2} />,
    <SiRedux size={50} title="Redux" color={"#ccd6f6"} key={10} />,
    <FaGithub size={50} title="Github" color={"#ccd6f6"} key={7} />,
    <FaAngular size={50} title="Angular" color={"#ccd6f6"} key={1} />,
    <FaJs size={50} title="Java Script" color={"#ccd6f6"} key={5} />,
    <FaDatabase size={50} title="OracleDB" color={"#ccd6f6"} key={8} />,
    <FaHtml5 size={50} title="HTML" color={"#ccd6f6"} key={3} />,
    <FaCss3 size={50} title="CSS" color={"#ccd6f6"} key={4} />,
    <FaBootstrap size={50} title="Bootstrap" color={"#ccd6f6"} key={6} />,
    <SiTailwindcss size={50} title="Tailwind" color={"#ccd6f6"} key={9} />,
  ];
  return (
    <>
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
            <p className="py-4">These are the technologies I've worked with</p>
          </div>

          <div className="grid w-full grid-cols-2 gap-[1rem] py-8 text-center sm:grid-cols-3 sm:grid-cols-4">
            {mySkills.map((skill) => {
              return (
                <div
                  key={skill.props.title}
                  className="flex flex-col items-center justify-center  shadow-[#040c16] duration-500 hover:scale-110"
                >
                  {skill}
                  <p className="my-4">{skill.props.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
