import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import LinkComp from "./LinkComp";
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
    <FaReact size={50} title="React" className="text-text-dark" key={1} />,
    <SiRedux size={50} title="Redux" className="text-text-dark" key={2} />,
    <FaGithub size={50} title="Github" className="text-text-dark" key={3} />,
    <FaAngular size={50} title="Angular" className="text-text-dark" key={4} />,
    <FaJs size={50} title="Java Script" className="text-text-dark" key={5} />,
    <FaDatabase
      size={50}
      title="OracleDB"
      className="text-text-dark"
      key={6}
    />,
    <FaHtml5 size={50} title="HTML" className="text-text-dark" key={7} />,
    <FaCss3 size={50} title="CSS" className="text-text-dark" key={8} />,
    <FaBootstrap
      size={50}
      title="Bootstrap"
      className="text-text-dark"
      key={9}
    />,
    <SiTailwindcss
      size={50}
      title="Tailwind"
      className="text-text-dark"
      key={10}
    />,
  ];
  return (
    <>
      <div
        name="skills"
        className="text-text-dark bg-primary mb-10 flex h-auto min-h-[100vh] w-full   items-center"
      >
        {/* {mySkills} */}
        {/* Container */}
        <div className=" mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4">
          <div>
            <p className="border-accent text-text inline border-b-4 text-4xl font-bold">
              Skills
            </p>
            <p className="py-4">
              These are the technologies I've worked with, for more info check
              out my{" "}
              <LinkComp href="https://www.linkedin.com/in/Taher-Barakat">
                Linkedin
              </LinkComp>
            </p>
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
