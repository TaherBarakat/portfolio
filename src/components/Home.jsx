import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" mb-10 flex  h-auto min-h-[100vh] w-full items-center bg-primary  pt-10"
    >
      {/* Container */}
      <div className="mx-auto flex h-full max-w-[1000px] flex-col justify-center  px-8">
        <p className="text-accent">Hi, my name is</p>
        <h1 className="text-4xl font-bold text-text sm:text-7xl">
          Taher Barakat.
        </h1>
        <h2 className="text-4xl font-bold text-text-dark sm:text-7xl">
          I can center a div.
        </h2>
        <p className="max-w-[700px] py-4 text-text-dark">
          I’m a web developer specialized in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <Link to="work" smooth={true} duration={500}>
          <div>
            <button className="group my-2 flex items-center border-2 border-text px-6 py-3 text-text hover:border-accent hover:bg-accent">
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
