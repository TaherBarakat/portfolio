import { motion } from "framer-motion";
import { slideUp } from "./animations";
// import { slideDown } from "./animations";
// import { slideRight } from "./animations";
import { slidDescription } from "./animations";
export default function Section({ children, title, description }) {
  return (
    <motion.section
      name={title.toLowerCase()}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.45 }} // <-- control when animation triggers
      className=" mb-10 flex h-auto min-h-[100vh] w-full items-center  overflow-hidden  bg-primary text-text"
    >
      {/* <img src={dd} alt="" /> */}
      <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4">
        <div className="pb-8">
          <motion.div variants={slideUp}>
            <h3 className="inline border-b-4 border-accent text-4xl font-bold text-text">
              {title}
            </h3>
          </motion.div>
          {description && (
            <motion.div variants={slidDescription}>{description}</motion.div>
          )}
        </div>

        {/*  */}
        {children}
        {/*  */}
      </div>
    </motion.section>
  );
}
