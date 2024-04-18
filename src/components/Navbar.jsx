import React, { useState } from "react";
import {
     FaBars,
     FaTimes,
     FaGithub,
     FaLinkedin,
     FaFacebook,
     FaLinkedinIn,
} from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../../public/logo.svg";
import { Link } from "react-scroll";

const Navbar = () => {
     const [nav, setNav] = useState(false);
     const handleClick = () => setNav(!nav);

     return (
          <div className="fixed w-full  h-[8vh] md:h-[80px] flex justify-between items-center px-[5vw] md:px-10 bg-[#0a192f] text-gray-300">
               <div>
                    <img
                         src={Logo}
                         alt="Logo Image"
                         style={{
                              width: "65px",
                              maxWidth: "12vw",
                              marginTop: "1rem",
                              marginBottom: "1rem",
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
               <div onClick={handleClick} className="md:hidden z-10">
                    {!nav ? <FaBars /> : <FaTimes />}
               </div>

               {/* Mobile menu */}
               <ul
                    className={
                         !nav
                              ? "hidden"
                              : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
                    }
               >
                    <li className="py-6 text-4xl">
                         <Link
                              onClick={handleClick}
                              to="home"
                              smooth={true}
                              duration={500}
                         >
                              Home
                         </Link>
                    </li>
                    <li className="py-6 text-4xl">
                         {" "}
                         <Link
                              onClick={handleClick}
                              to="about"
                              smooth={true}
                              duration={500}
                         >
                              About
                         </Link>
                    </li>
                    <li className="py-6 text-4xl">
                         {" "}
                         <Link
                              onClick={handleClick}
                              to="skills"
                              smooth={true}
                              duration={500}
                         >
                              Skills
                         </Link>
                    </li>
                    <li className="py-6 text-4xl">
                         {" "}
                         <Link
                              onClick={handleClick}
                              to="work"
                              smooth={true}
                              duration={500}
                         >
                              Work
                         </Link>
                    </li>
                    <li className="py-6 text-4xl">
                         {" "}
                         <Link
                              onClick={handleClick}
                              to="contact"
                              smooth={true}
                              duration={500}
                         >
                              Contact
                         </Link>
                    </li>
               </ul>

               {/* Social icons */}
               <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                    <ul>
                         <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ccd6f6] ">
                              <a
                                   className="flex justify-between items-center w-full text-[#0a192f] "
                                   href="https://www.linkedin.com/in/Taher-Barakat"
                                   target="_blank"
                              >
                                   Linkedin <FaLinkedin size={30} />
                              </a>
                         </li>
                         <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ccd6f6]">
                              <a
                                   className="flex justify-between items-center w-full text-[#0a192f]"
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
                         <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ccd6f6]">
                              <a
                                   className="flex justify-between items-center w-full text-[#0a192f] "
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
