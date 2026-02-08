import {
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  // DiVisualstudio,
  SiVim,
} from "react-icons/si";

import {
  FaAngular,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
export let mySkills = [
  <FaAngular size={50} title="Angular 2" className="text-text-dark" key={1} />,
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
    title=".NET Core"
    className="text-text-dark"
    key={6}
  />,
  <FaDatabase size={50} title="OracleDB" className="text-text-dark" key={7} />,
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
  <SiVim size={50} title="Vim" className="text-text-dark" key={9}></SiVim>,
];
