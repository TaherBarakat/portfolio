import React from "react";

export default function ProjectCard({ item }) {
  return (
    <div
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
  );
}
