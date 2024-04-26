import React, { useEffect, useState } from "react";

function capitalizeFirstLetter(arr) {
  let mArr = [];
  arr.forEach((element) => {
    mArr.push(element.charAt(0).toUpperCase() + element.slice(1));
  });

  return mArr;
}
import LinkComp from "./LinkComp";

import UnfinishedLogo from "../assets/unfinished-logo.jpg";
import ProjectCard from "./ProjectCard";

function reposFormatter(repos) {
  return repos
    .filter(
      (repo) => repo.topics.filter((topic) => topic === "gh-pages").length > 0,
    )
    .map((repo) => {
      return {
        id: repo.id,
        name: capitalizeFirstLetter(repo.name.split("-")).join(" "),
        github: repo.svn_url,
        topics: [...repo.topics].filter((topic) => topic !== "gh-pages"),
        live: repo.homepage,
        image:
          repo.description == "unfinished"
            ? UnfinishedLogo
            : `/src/assets/${repo.name}.png`,
      };
    });
}
const Workv2 = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function getGitRowRepos() {
      const response = await fetch(
        "https://api.github.com/users/taherbarakat/repos?per_page=20&sort=created",
      );
      const data = await response.json();
      console.log(reposFormatter(data));
      setRepos(reposFormatter(data));
    }

    getGitRowRepos();
  }, []);

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
          {repos.map((repo) => (
            <ProjectCard item={repo} key={repo.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workv2;
