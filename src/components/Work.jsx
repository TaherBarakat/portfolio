import React, { useEffect, useState } from "react";
import LinkComp from "./LinkComp";
import ProjectCard from "./ProjectCard";

import UnfinishedLogo from "../assets/unfinished-logo.jpg";
import NoteApp from "../assets/note-app.webp";
import ReactBudgetApp from "../assets/react-budget-app.webp";
import ReactFlashcardApp from "../assets/react-flashcard-app.webp";
import ReactGoogleClone from "../assets/react-google-docs-clone.webp";
import NgEcommerce from "../assets/ng-ecommerce.webp";
import Section from "../shared/Section";
const previews = [
  { name: "note-app", image: NoteApp },
  { name: "react-budget-app", image: ReactBudgetApp },
  { name: "react-flashcard-app", image: ReactFlashcardApp },
  { name: "ng-ecommerce", image: NgEcommerce },
  { name: "react-google-docs-clone", image: ReactGoogleClone },
];

function capitalizeFirstLetter(arr) {
  let mArr = [];
  arr.forEach((element) => {
    mArr.push(element.charAt(0).toUpperCase() + element.slice(1));
  });

  return mArr;
}

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
            : previews.filter((preview) => repo.name === preview.name)[0].image,
      };
    });
}

const Work = () => {
  const [repos, setRepos] = useState([]);
  const [clickable, setClickable] = useState("");

  useEffect(() => {
    async function getGitRowRepos() {
      const response = await fetch(
        "https://api.github.com/users/taherbarakat/repos?per_page=20&sort=created",
      );
      const data = await response.json();
      setRepos(reposFormatter(data));
    }

    getGitRowRepos();
  }, []);

  return (
    <Section
      title="work"
      description={
        <p className="py-6 text-text-dark">
          Check out some of my recent work, for more info check out my{" "}
          <LinkComp href="https://github.com/TaherBarakat">GitHub</LinkComp>
        </p>
      }
    >
      {/* container for projects */}
      <div className="p-15 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {/* Gird Item */}
        {repos.map((repo, index) => (
          <ProjectCard
            index={index}
            item={repo}
            key={repo.id}
            clickable={clickable}
            setClickable={setClickable}
          />
        ))}
      </div>
      {/* container for projects */}
    </Section>
  );
};

export default Work;
