import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" mb-10 flex  h-auto min-h-[100vh] w-full items-center bg-[#0a192f]  pt-10"
    >
      {/* Container */}
      <div className="mx-auto flex h-full max-w-[1000px] flex-col justify-center  px-8">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl font-bold text-[#ccd6f6] sm:text-7xl">
          Taher Barakat.
        </h1>
        <h2 className="text-4xl font-bold text-[#8892b0] sm:text-7xl">
          I can center a div.
        </h2>
        <p className="max-w-[700px] py-4 text-[#8892b0]">
          I’m a front-end developer/data analyst specializing in building (and
          occasionally designing) exceptional digital experiences. Currently,
          I’m focused on building responsive full-stack web applications.
        </p>
        <Link to="work" smooth={true} duration={500}>
          <div>
            <button className="group my-2 flex items-center border-2 px-6 py-3 text-white hover:border-pink-600 hover:bg-pink-600">
              View Work
              <span className="duration-300 group-hover:rotate-90">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
