import { slideLeft, slideRight } from "../shared/animations";
import { mySkills } from "../shared/myData";
import Section from "../shared/Section";

import LinkComp from "./LinkComp";
import { motion } from "framer-motion";
const Skills = () => {
  return (
    <Section
      title={"Skills"}
      description={
        <p className="py-6 text-text-dark">
          These are the technologies I&apos;ve worked with, for more info check
          out my{" "}
          <LinkComp href="https://www.linkedin.com/in/Taher-Barakat">
            Linkedin
          </LinkComp>
        </p>
      }
    >
      <div className="grid w-full grid-cols-2 gap-[1rem] py-8 text-center sm:grid-cols-3">
        {mySkills.map((skill, index) => {
          return (
            <motion.div
              variants={index % 2 == 0 ? slideLeft : slideRight}
              key={skill.props.title}
              className="flex flex-col items-center justify-center "
            >
              {skill}
              <p className="my-4">{skill.props.title}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;
