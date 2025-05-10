import LinkComp from "./LinkComp";
import { motion } from "framer-motion";
import { slideLeft, slideRight } from "../shared/animations";
import Section from "../shared/Section";
const About = () => {
  // const slidRight = {
  //   offscreen: {
  //     x: 300,
  //   },
  //   onscreen: {
  //     x: 0,
  //     // rotate: -10,
  //     transition: {
  //       type: "tween",
  //       // bounce: 0.4,
  //       // duration: 0.8,
  //     },
  //   },
  // };

  return (
    <Section title="About">
      <div className="grid w-full max-w-[1000px] gap-8 px-4 sm:grid-cols-2">
        <div className="text-4xl font-bold text-text sm:text-right">
          <motion.p variants={slideRight}>
            Hi. I'm Taher Barakat, nice to meet you. I help individuals and
            small businesses launching their first website.
          </motion.p>
        </div>
        <div>
          <motion.p variants={slideLeft} className="text-text-dark">
            I am passionate about building excellent software that improves the
            working experiences for other teams. currently working as a web
            developer at{" "}
            <LinkComp href="http://my.syriatel.sy/index.php">Syriatel</LinkComp>{" "}
            biggest telecom company in syria. specialized in creating dashboards
            and software for clients ranging from individuals and
            small-businesses all the way to large enterprise corporations. What
            would you do if you had a software expert available at your
            fingertips?
          </motion.p>
        </div>
      </div>
    </Section>
  );
};

export default About;
