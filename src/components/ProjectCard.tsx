import React, { useState } from "react";

export default function ProjectCard({ item, clickable, setClickable }) {
  return (
    <div
      onClick={() => {
        setClickable(item.id);
      }}
      onMouseEnter={() => setClickable(item.id)}
      onMouseLeave={() => setClickable("")}
      className="card group relative  block aspect-video max-w-[90vw]	"
    >
      <span className="absolute inset-0 border-2 border-solid border-pink-600"></span>

      <div
        style={{
          backgroundImage: `url(${item.image})`,
        }}
        className="content-div container relative flex h-full w-full border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 "
      ></div>
      <div className="content-div-ch absolute bottom-0 top-0 h-full w-full bg-stone-900 p-4 text-center  opacity-90   transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 sm:p-6 lg:p-8">
        <h3 className="mt-4 text-xl font-medium sm:text-2xl">{item.name} </h3>

        <p className="mt-8 flex  justify-around  font-bold">
          {item.live && (
            <a
              className={`group ${item.id !== clickable ? `pointer-events-none` : ``}  relative inline-block focus:outline-none focus:ring`}
              href={item.live}
              target="_blank"
            >
              <span className="absolute inset-0  translate-x-1.5 translate-y-1.5 bg-pink-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

              <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-white group-active:text-opacity-100">
                Visit
              </span>
            </a>
          )}

          <a
            className={`group ${item.id !== clickable ? "pointer-events-none" : ""}  relative inline-block focus:outline-none focus:ring`}
            href={item.github}
            target="_blank"
          >
            <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-pink-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

            <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-white group-active:text-opacity-100">
              Code
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}

// <div
//       style={{
//         backgroundImage: `url(${item.image})`,
//       }}
//       className="content-div group container mx-auto flex
//         items-center justify-center rounded-md text-center shadow-lg shadow-[#040c16] "
//     >
//       {/* Hover effect for images */}
//       <div className=" opacity-0  duration-500  group-hover:opacity-100 ">
//         <span className="font bold text-2xl tracking-wider text-white ">
//           {item.name}
//         </span>
//         <div>
//           {item.topics.map((topic, i, arr) => {
//             return (
//               <span key={i} className="text-[0.8rem]">
//                 {topic}
//                 {i === arr.length - 1 ? "" : ` | `}
//               </span>
//             );
//           })}
//         </div>
//         <div className="pt-8 text-center ">
//           {/* eslint-disable-next-line */}
//           <a href={item.github} target="_blank">
//             <button
//               className="m-2 rounded-lg bg-white px-4 py-3
//                  text-center text-lg font-bold text-gray-700"
//             >
//               Code
//             </button>
//           </a>
//           {/* eslint-disable-next-line */}

//           {item.live && (
//             <a href={item.live} target="_blank">
//               <button
//                 className="m-2 rounded-lg bg-white px-4 py-3
//                  text-center text-lg font-bold text-gray-700"
//               >
//                 Visit
//               </button>
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
