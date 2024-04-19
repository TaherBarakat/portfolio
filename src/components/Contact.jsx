import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
const Contact = () => {
     return (
          <div
               name="contact"
               className=" min-h-full w-full  bg-[#0a192f] h-auto  pt-[10vh] flex flex-col justify-end items-center p-4"
          >
               <form
                    method="POST"
                    action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
                    className="flex flex-col max-w-[600px] w-full"
               >
                    <div className="pb-8">
                         <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
                              Contact
                         </p>
                         <p className="text-gray-300 py-4">
                              // Submit the form below or shoot me an email -
                              vutukuri.kumar192st.niituniversity.in
                         </p>
                    </div>
                    <input
                         className="bg-[#ccd6f6] p-2"
                         type="text"
                         placeholder="Name"
                         name="name"
                    />
                    <input
                         className="my-4 p-2 bg-[#ccd6f6]"
                         type="email"
                         placeholder="Email"
                         name="email"
                    />
                    <textarea
                         className="bg-[#ccd6f6] p-2"
                         name="message"
                         rows="10"
                         placeholder="Message"
                    ></textarea>
                    <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
                         Let's Collaborate
                    </button>
               </form>{" "}
               <div className=" lg:hidden w-[80vw]  mx:10 my:5 flex flex-col justify-center align-bottom ">
                    <p className="text-[#8892b0] m-8:"> For more info:</p>
                    <ul className="flex items-center justify-between w-full my-5 ">
                         <li className="w-[20vw] h-[60px] flex justify-between items-center    ">
                              <a
                                   className="flex justify-between  flex-col items-center w-full text-[#8892b0] "
                                   href="https://www.linkedin.com/in/Taher-Barakat"
                                   target="_blank"
                              >
                                   <FaLinkedin size={25} /> Linkedin
                              </a>
                         </li>
                         <li className="w-[20vw] h-[60px] flex justify-between items-center    ">
                              <a
                                   className="flex justify-between  flex-col items-center  w-full text-[#8892b0]"
                                   href="https://github.com/TaherBarakat"
                                   target="_blank"
                              >
                                   <FaGithub size={25} />
                                   Github
                              </a>
                         </li>

                         <li className="w-[20vw] h-[60px] flex justify-between items-center">
                              <a
                                   className="flex justify-between flex-col items-center w-full text-[#8892b0]"
                                   href="https://cdn2.cvdesignr.com/u/cv/pdf/62e8113a68805_38f3f6ea9b9ec4d0d6df92b4b6b973fd28fffce4_e1eeb.pdf"
                                   target="_blank"
                                   download
                              >
                                   <BsFillPersonLinesFill size={25} />
                                   Resume
                              </a>
                         </li>
                    </ul>
               </div>
          </div>
     );
};

export default Contact;
