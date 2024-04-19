import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "/logo.svg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed z-10 flex h-[10vh] min-h-[40px] w-full items-center justify-between bg-[#0a192f] px-[5vw] text-gray-300 md:px-10">
      <div>
        <img
          src={Logo}
          alt="Logo Image"
          style={{
            width: "4vmax",
            maxWidth: "3.5rem",
          }}
        />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="z-10 md:hidden">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-[#0a192f]"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="fixed left-0 top-[35%] hidden flex-col lg:flex">
        <ul>
          <li className="ml-[-100px] flex h-[60px] w-[160px] items-center justify-between bg-[#ccd6f6] duration-300 hover:ml-[-10px] ">
            <a
              className="flex w-full items-center justify-between text-[#0a192f] "
              href="https://www.linkedin.com/in/Taher-Barakat"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="ml-[-100px] flex h-[60px] w-[160px] items-center justify-between bg-[#ccd6f6] duration-300 hover:ml-[-10px]">
            <a
              className="flex w-full items-center justify-between text-[#0a192f]"
              href="https://github.com/TaherBarakat"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          {/* <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
                              <a
                                   className="flex justify-between items-center w-full text-gray-300"
                                   href="https://taher.barakat12223@gmail.com"
                                   target="_blank"
                              >
                                   Email <HiOutlineMail size={30} />
                              </a>
                         </li> */}
          <li className="ml-[-100px] flex h-[60px] w-[160px] items-center justify-between bg-[#ccd6f6] duration-300 hover:ml-[-10px]">
            <a
              className="flex w-full items-center justify-between text-[#0a192f] "
              // href="https://cvdesignr.com/p/62e8113a68805"
              href="https://cdn2.cvdesignr.com/u/cv/pdf/62e8113a68805_38f3f6ea9b9ec4d0d6df92b4b6b973fd28fffce4_e1eeb.pdf"
              target="_blank"
              download
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
