import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" bg-primary mb-10  flex h-auto min-h-[100vh] w-full items-center  pt-10"
    >
      {/* Container */}
      <div className="mx-auto flex h-full max-w-[1000px] flex-col justify-center  px-8">
        <p className="text-accent">Hi, my name is</p>
        <h1 className="text-text text-4xl font-bold sm:text-7xl">
          Taher Barakat.
        </h1>
        <h2 className="text-text-dark text-4xl font-bold sm:text-7xl">
          I can center a div.
        </h2>
        <p className="text-text-dark max-w-[700px] py-4">
          I’m a front-end developer | data analyst specialized in building (and
          occasionally designing) exceptional digital experiences. Currently,
          I’m focused on building responsive full-stack web applications.
        </p>
        <Link to="work" smooth={true} duration={500}>
          <div>
            <button className="hover:border-accent hover:bg-accent text-text border-text group my-2 flex items-center border-2 px-6 py-3">
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
