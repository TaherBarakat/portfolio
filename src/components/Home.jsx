import { HiArrowNarrowRight } from "react-icons/hi";
import { motion, useScroll, useTransform } from "framer-motion";
import { homeAnimation } from "../shared/animations";
import { Link } from "react-scroll";
// homeAnimation constants

const Home = () => {
  const { scrollY } = useScroll();

  // Scroll transforms
  const nameSlide = useTransform(
    scrollY,
    [0, 300],
    [0, homeAnimation.name.exit.x],
  );
  const titleSlide = useTransform(
    scrollY,
    [0, 300],
    [0, homeAnimation.title.exit.x],
  );
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <motion.div
      name="home"
      className="mb-10 flex h-auto min-h-[100vh] w-full items-center overflow-x-hidden bg-primary pt-10"
      style={{ opacity }}
    >
      <motion.div
        className="mx-auto flex h-full max-w-[1000px] flex-col justify-center px-8"
        initial="hidden"
        animate="visible"
        variants={homeAnimation.container}
      >
        <motion.p className="text-accent" variants={homeAnimation.greeting}>
          Hi, my name is
        </motion.p>

        <motion.h1
          className="text-4xl font-bold text-text sm:text-7xl"
          variants={homeAnimation.name}
          style={{ x: nameSlide }}
        >
          Taher Barakat.
        </motion.h1>

        <motion.h2
          className="text-4xl font-bold text-text-dark sm:text-7xl"
          variants={homeAnimation.title}
          style={{ x: titleSlide }}
        >
          I can center a div.
        </motion.h2>

        <motion.p
          className="max-w-[700px] py-4 text-text-dark"
          variants={homeAnimation.description}
        >
          I&apos;m a software developer specialized in building (and
          occasionally designing) exceptional digital experiences. Currently,
          I&apos;m focused on building responsive full-stack web applications.
        </motion.p>

        <Link to="work" smooth={true} duration={500}>
          <motion.div variants={homeAnimation.button}>
            <motion.button
              className="group my-2 flex items-center border-2 border-text px-6 py-3 text-text hover:border-accent hover:bg-accent"
              whileHover={homeAnimation.hover}
              whileTap={homeAnimation.tap}
            >
              View Work
              <span className="duration-300 group-hover:rotate-90">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </motion.button>
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Home;
