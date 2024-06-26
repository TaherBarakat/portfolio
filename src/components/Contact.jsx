import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

import LinkComp from "./LinkComp";

const Contact = () => {
  const date = new Date();
  return (
    <div
      name="contact"
      className=" flex h-auto min-h-[100vh] w-full  flex-col items-center justify-end bg-[#0a192f] p-4 pt-[10vh]"
    >
      <form
        method="POST"
        action="https://getform.io/f/panvkqka"
        className="flex w-full max-w-[600px] flex-col"
      >
        <div className="pb-8">
          <p className="inline border-b-4 border-pink-600 text-4xl font-bold text-gray-300">
            Contact
          </p>
          <p className="py-4 text-gray-300">
            Shoot me an email at{" "}
            <LinkComp href="mailto:Taher.Barakat12223@gmail.com">
              Taher.Barakat12223@gmail.com{" "}
            </LinkComp>{" "}
            or just call me at this number{" "}
            <LinkComp href="tel:+963938907414">+963 938 907 414</LinkComp> ,also
            you can submit the form below
            <br />
          </p>
        </div>
        <input
          type="hidden"
          name="_gotcha"
          style={{ display: "none !important" }}
        />

        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 bg-[#ccd6f6] p-2"
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
        <button className="mx-auto my-8 flex items-center border-2 px-4 py-3 text-white hover:border-pink-600 hover:bg-pink-600">
          Let's Collaborate
        </button>
      </form>
      {/* ------------------------------------------------------------------------- */}
      <div className=" mx-0 mt-5  flex w-full max-w-[600px] flex-col justify-center align-bottom lg:hidden ">
        <p className="m-8: text-[#8892b0]">Get in touch</p>
        <ul className="mt-5 flex w-full flex-wrap items-center justify-center">
          <li className=" flex h-[60px] w-20 items-center justify-between    ">
            <a
              className="flex w-full flex-col items-center justify-between text-sm text-[#8892b0] "
              href="https://www.linkedin.com/in/Taher-Barakat"
              target="_blank"
            >
              <FaLinkedin size={25} /> Linkedin
            </a>
          </li>
          <li className=" flex h-[60px] w-20 items-center justify-between    ">
            <a
              className="flex w-full  flex-col items-center justify-between  text-sm text-[#8892b0]"
              href="https://github.com/TaherBarakat"
              target="_blank"
            >
              <FaGithub size={25} />
              Github
            </a>
          </li>

          <li className=" flex h-[60px] w-20 items-center justify-between    ">
            <a
              className="flex w-full  flex-col items-center  justify-between text-sm text-[#8892b0]"
              href="https://wa.me/+963938907414"
              target="_blank"
            >
              <FaWhatsapp size={25} />
              WhatsApp
            </a>
          </li>

          <li className=" flex h-[60px] w-20 items-center justify-between">
            <a
              className="flex w-full flex-col items-center justify-between text-sm text-[#8892b0]"
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
      <p className="p-10 text-sm text-[#8892b0]">
        &copy; {date.getFullYear()} Taher Barakat
      </p>
    </div>
  );
};

export default Contact;
