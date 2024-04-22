// import React, { useEffect, useState } from "react";

// function capitalizeFirstLetter(arr) {
//      let mArr = [];
//      arr.forEach((element) => {
//           mArr.push(element.charAt(0).toUpperCase() + element.slice(1));
//      });

//      return mArr;
// }
import LinkComp from "./LinkComp";

import NoteApp from "../assets/NoteApp.png";
import ReactBudgetApp from "../assets/ReactBudgetApp.png";
import ReactFlashcardApp from "../assets/ReactFlashcardApp.png";
import ReactFoodOrderApp from "../assets/ReactFoodOrderApp.png";
import ReactGoogleClone from "../assets/ReactGoogleClone.png";
import UnfinishedLogo from "../assets/UnfinishedLogo.jpg";

let projects = [
  {
    id: 771508690,
    name: "React Flashcard App",
    github: "https://github.com/TaherBarakat/react-flashcard-app",
    topics: ["React", "JavaScript"],
    live: "https://taherbarakat.github.io/react-flashcard-app/",
    image: ReactFlashcardApp,
  },
  {
    id: 771518694,
    name: "React Google Clone",
    github: "https://github.com/TaherBarakat/react-google-docs-clone",
    topics: [
      "React",
      "JavaScript",
      "MongoDB",
      "Socket.io",
      "JavaScript",
      "NodeJs",
    ],
    live: "",
    image: ReactGoogleClone,
  },
  {
    id: 771508694,
    name: "React Food Order App",
    github: "https://github.com/TaherBarakat/food-order-app",
    topics: ["React", "JavaScript", "ExpressJs"],
    live: "",
    image: ReactFoodOrderApp,
  },
  {
    id: 777730625,
    name: "Ng Food App",
    github: "https://github.com/TaherBarakat/ng-food-app",
    topics: ["Angular", "MaterialUi", "TypeScript"],
    live: "",
    image: UnfinishedLogo,
  },
  {
    id: 759979761,
    name: "Note App",
    github: "https://github.com/TaherBarakat/note-app",
    topics: ["Nextjs", "TypeScript", "Bootstrap"],
    live: "",
    image: NoteApp,
  },
  {
    id: 783237412,
    name: "React Budget App",
    github: "https://github.com/TaherBarakat/react-budget-app",
    topics: ["React", "JavaScript", "Bootstrap"],
    live: "https://taherbarakat.github.io/react-budget-app/",
    image: ReactBudgetApp,
  },
];

const Work = () => {
  // const [repos, setRepos] = useState([]);
  // useEffect(() => {
  //      fetch("https://api.github.com/users/TaherBarakat/repos")
  //           .then((res) => res.json())
  //           .then((data) => {
  //                console.log(data);

  //                let ghRepos = data
  //                     .filter(
  //                          (repo) =>
  //                               repo.topics.filter(
  //                                    (topic) => topic === "gh-pages"
  //                               ).length > 0
  //                     )
  //                     .map((repo) => {
  //                          return {
  //                               id: repo.id,
  //                               name: capitalizeFirstLetter(
  //                                    repo.name.split("-")
  //                               ).join(" "),
  //                               github: repo.svn_url,
  //                               topics: [...repo.topics],
  //                               live: repo.homepage,
  //                               image: "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
  //                          };
  //                     });

  //                // console.log(
  //                //      data.filter((repo) => {
  //                //           if (repo.topics.length == 0) return false;
  //                //           else
  //                //                return repo.topics.find(
  //                //                     (topic) => topic === "gh-pages"
  //                //                );
  //                //      })
  //                // );
  //                console.log(ghRepos);
  //                setRepos([...ghRepos]);
  //           });
  // }, []);
  //  const project = data;

  return (
    <div
      name="work"
      className=" mb-10 flex h-auto min-h-[100vh] w-full items-center  bg-[#0a192f]  text-gray-300 "
    >
      {/* <img src={dd} alt="" /> */}
      <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4">
        <div className="pb-8">
          <p className="inline border-b-4 border-pink-600 text-4xl font-bold text-gray-300">
            Work
          </p>
          <p className="py-6">
            Check out some of my recent work, for more info check out my{" "}
            <LinkComp href="https://github.com/TaherBarakat">GitHub</LinkComp>
          </p>
        </div>

        {/* container for projects */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 ">
          {/* Gird Item */}
          {projects.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
              className="content-div group container mx-auto flex 
              items-center justify-center rounded-md text-center shadow-lg shadow-[#040c16] "
            >
              {/* Hover effect for images */}
              <div className=" opacity-0  duration-500  group-hover:opacity-100 ">
                <span className="font bold text-2xl tracking-wider text-white ">
                  {item.name}
                </span>
                <div>
                  {item.topics.map((topic, i, arr) => {
                    return (
                      <span key={i} className="text-[0.8rem]">
                        {topic}
                        {i === arr.length - 1 ? "" : ` | `}
                      </span>
                    );
                  })}
                </div>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button
                      className="m-2 rounded-lg bg-white px-4 py-3
                       text-center text-lg font-bold text-gray-700"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}

                  {item.live && (
                    <a href={item.live} target="_blank">
                      <button
                        className="m-2 rounded-lg bg-white px-4 py-3
                       text-center text-lg font-bold text-gray-700"
                      >
                        Visit
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
