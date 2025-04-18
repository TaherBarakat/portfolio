// import {  } from "react-icons/si";
import {
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  // DiVisualstudio,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

import LinkComp from "./LinkComp";
import {
  FaAngular,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
const Skills = () => {
  let mySkills = [
    <FaAngular
      size={50}
      title="Angular 2"
      className="text-text-dark"
      key={1}
    />,
    <FaReact size={50} title="React" className="text-text-dark" key={2} />,
    <SiRedux size={50} title="Redux" className="text-text-dark" key={3} />,
    <SiTypescript
      size={50}
      title="TypeScript"
      className="text-text-dark"
      key={4}
    />,
    <FaGithub size={50} title="Github" className="text-text-dark" key={5} />,
    <DiVisualstudio
      size={50}
      title="ADO.NET"
      className="text-text-dark"
      key={6}
    />,
    <FaDatabase
      size={50}
      title="OracleDB"
      className="text-text-dark"
      key={7}
    />,
    <SiTailwindcss
      size={50}
      title="Tailwind"
      className="text-text-dark"
      key={8}
    />,
    <FaBootstrap
      size={50}
      title="Bootstrap"
      className="text-text-dark"
      key={9}
    />,
  ];
  return (
    <>
      <div
        name="skills"
        className="mb-10 flex h-auto min-h-[100vh] w-full items-center bg-primary   text-text-dark"
      >
        {/* {mySkills} */}
        {/* Container */}
        <div className=" mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4">
          <div>
            <p className="inline border-b-4 border-accent text-4xl font-bold text-text">
              Skills
            </p>
            <p className="py-4">
              These are the technologies I&apos;ve worked with, for more info
              check out my{" "}
              <LinkComp href="https://www.linkedin.com/in/Taher-Barakat">
                Linkedin
              </LinkComp>
            </p>
          </div>

          <div className="grid w-full grid-cols-2 gap-[1rem] py-8 text-center sm:grid-cols-3">
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
