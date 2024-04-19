import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" mb-10 flex h-auto min-h-[90vh] w-full items-center bg-[#0a192f]  text-gray-300  "
    >
      <div className="flex h-full min-h-full w-full flex-col items-center justify-center">
        <div className="grid w-full max-w-[1000px] grid-cols-2 gap-8">
          <div className=" pb-8 pl-4">
            <p className="inline border-b-4 border-pink-600 text-4xl font-bold">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="grid w-full max-w-[1000px] gap-8 px-4 sm:grid-cols-2">
          <div className="text-4xl font-bold sm:text-right">
            <p>
              Hi. I'm Taher Barakat, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
