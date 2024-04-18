import React, { useEffect, useState } from "react";
import { data } from "../data/data.js";

function capitalizeFirstLetter(arr) {
     let mArr = [];
     arr.forEach((element) => {
          mArr.push(element.charAt(0).toUpperCase() + element.slice(1));
     });

     return mArr;
}

const Work = () => {
     const [repos, setRepos] = useState([]);
     useEffect(() => {
          fetch("https://api.github.com/users/TaherBarakat/repos")
               .then((res) => res.json())
               .then((data) => {
                    let ghRepos = data
                         .filter(
                              (repo) =>
                                   repo.topics.filter(
                                        (topic) => topic === "gh-pages"
                                   ).length > 0
                         )
                         .map((repo) => {
                              return {
                                   id: repo.id,
                                   name: capitalizeFirstLetter(
                                        repo.name.split("-")
                                   ).join(" "),
                                   github: repo.svn_url,
                                   topics: [...repo.topics],
                                   live: repo.homepage,
                                   image: "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
                              };
                         });
                    setRepos([...ghRepos]);
               });
     }, []);
     //  const project = data;
     //  console.log(repos);

     return (
          <div
               name="work"
               className=" w-full h-auto md:h-screen  text-gray-300 bg-[#0a192f]"
          >
               <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                    <div className="pb-8">
                         <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
                              Work
                         </p>
                         <p className="py-6">
                              // Check out some of my recent work
                         </p>
                    </div>

                    {/* container for projects */}
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                         {/* Gird Item */}
                         {repos.map((item, index) => (
                              <div
                                   key={index}
                                   style={{
                                        backgroundImage: `url(${item.image})`,
                                   }}
                                   className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
                              >
                                   {/* Hover effect for images */}
                                   <div className="opacity-0 group-hover:opacity-100  duration-500  ">
                                        <span className="text-2xl font bold text-white tracking-wider ">
                                             {item.name}
                                        </span>
                                        <div>
                                             {item.topics.map(
                                                  (topic, i, arr) => {
                                                       console.log(arr);
                                                       return (
                                                            <span
                                                                 key={i}
                                                                 className="text-[0.8rem]"
                                                            >
                                                                 {topic}
                                                                 {i ===
                                                                 arr.length - 1
                                                                      ? ""
                                                                      : ` | `}
                                                            </span>
                                                       );
                                                  }
                                             )}
                                        </div>
                                        <div className="pt-8 text-center ">
                                             {/* eslint-disable-next-line */}
                                             <a
                                                  href={item.github}
                                                  target="_blank"
                                             >
                                                  <button
                                                       className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                                                  >
                                                       Code
                                                  </button>
                                             </a>
                                             {/* eslint-disable-next-line */}

                                             {item.live && (
                                                  <a
                                                       href={item.live}
                                                       target="_blank"
                                                  >
                                                       <button
                                                            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                                                       >
                                                            Live
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
