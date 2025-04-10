import React from "react";
import LinkComp from "./LinkComp";
const About = () => {
  return (
    <div
      name="about"
      className=" text-text bg-primary mb-10 flex h-auto min-h-[90vh] w-full  items-center "
    >
      <div className="flex h-full min-h-full w-full flex-col items-center justify-center">
        <div className="grid w-full max-w-[1000px] grid-cols-2 gap-8">
          <div className=" pb-8 pl-4">
            <p className="border-accent inline border-b-4 text-4xl font-bold">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="grid w-full max-w-[1000px] gap-8 px-4 sm:grid-cols-2">
          <div className="text-text text-4xl font-bold sm:text-right">
            <p>
              Hi. I'm Taher Barakat, nice to meet you. I help individuals and
              small businesses launching their first website.
            </p>
          </div>
          <div>
            <p className="text-text-dark">
              I am passionate about building excellent software that improves
              the working experiences for other teams. currently working as a
              front-end developer | data analyst at
              <LinkComp href="http://my.syriatel.sy/index.php">
                Syriatel
              </LinkComp>{" "}
              biggest telecom company in syria. specialized in creating
              dashboards and software for clients ranging from individuals and
              small-businesses all the way to large enterprise corporations.
              What would you do if you had a software expert available at your
              fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
