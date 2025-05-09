import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import ThemeToggle from "./ThemeToggle";
// import LinkComp from "./LinkComp";

import Logo from "/logo.svg";
import { Button } from "react-scroll";
import { navbarAnimations } from "../shared/animations";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  // Animation variants for navbar elements

  return (
    <motion.div
      className="fixed z-40 flex h-[9vh] min-h-[40px] w-full items-center justify-between bg-primary px-[5vw] text-text md:justify-start md:px-10"
      initial="initial"
      animate="animate"
      variants={navbarAnimations.container}
    >
      <motion.div
        variants={navbarAnimations.logoItem}
        style={{
          height: "70%",
          aspectRatio: "1 / 1",
        }}
      >
        <img
          src={Logo}
          alt="Logo Image"
          style={{
            height: "100%",
          }}
        />
      </motion.div>

      {/* menu */}
      <ul className="ml-10 hidden md:flex">
        {["home", "about", "skills", "work", "contact"].map((item, index) => (
          <motion.li
            key={item}
            variants={navbarAnimations.navItem}
            custom={index}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <Button to={item} smooth={true} duration={500}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Button>
          </motion.li>
        ))}
      </ul>

      <motion.div
        className="absolute right-[5vw] hidden md:block"
        variants={navbarAnimations.navItem}
        transition={{ delay: 0.7 }}
      >
        <ThemeToggle />
      </motion.div>

      {/* Hamburger */}
      <div className="flex w-[18vw] flex-row items-center justify-between">
        <motion.div
          className="z-10 md:hidden"
          variants={navbarAnimations.navItem}
        >
          <ThemeToggle />
        </motion.div>

        <motion.div
          onClick={handleClick}
          className="z-10 md:hidden"
          variants={navbarAnimations.navItem}
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </motion.div>
      </div>

      {/* Mobile menu */}
      <motion.ul
        className={
          !nav
            ? "hidden"
            : "absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-primary"
        }
        initial="initial"
        animate={nav ? "animate" : "initial"}
        variants={navbarAnimations.container}
      >
        <li className="py-6 text-4xl"></li>
        {["home", "about", "skills", "work", "contact"].map((item, index) => (
          <motion.li
            key={item}
            className="py-6 text-4xl"
            variants={navbarAnimations.navItem}
            custom={index}
            transition={{ delay: index * 0.1 }}
          >
            <Button
              onClick={handleClick}
              to={item}
              smooth={true}
              duration={500}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Button>
          </motion.li>
        ))}
      </motion.ul>

      {/* Social icons */}
      <motion.div
        className="fixed left-0 top-[35%] hidden flex-col lg:flex"
        initial="initial"
        animate="animate"
        variants={navbarAnimations.container}
      >
        <ul>
          {[
            {
              name: "Linkedin",
              icon: <FaLinkedin size={30} />,
              href: "https://www.linkedin.com/in/Taher-Barakat",
            },
            {
              name: "Github",
              icon: <FaGithub size={30} />,
              href: "https://github.com/TaherBarakat",
            },
            {
              name: "Resume",
              icon: <BsFillPersonLinesFill size={30} />,
              href: "https://raw.githubusercontent.com/TaherBarakat/taher-barakat-cv-generator-v2/main/taher-barakat-cv.pdf",
              download: "Taher-Barakat-Resume.pdf",
            },
            {
              name: "Whatsapp",
              icon: <FaWhatsapp size={30} />,
              href: "https://wa.me/+963938907414",
            },
          ].map((social, index) => (
            <motion.li
              key={social.name}
              className="ml-[-100px] flex h-[60px] w-[160px] items-center justify-between bg-text duration-300"
              variants={navbarAnimations.socialItem}
              initial="initial"
              animate="animate"
              whileHover="hover"
              custom={index}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <a
                className="flex w-full items-center justify-between text-primary"
                href={social.href}
                target="_blank"
                download={social.download || null}
              >
                {social.name} {social.icon}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
