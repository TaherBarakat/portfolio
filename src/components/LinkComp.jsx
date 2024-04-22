import React, { Children } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function LinkComp({ children, ...props }) {
  return (
    <a
      target="_blank"
      className="  font-semibold text-pink-600 duration-500 hover:text-[1.015rem] hover:text-pink-700"
      {...props}
    >
      {" "}
      {children} <FaExternalLinkAlt size={12} className="inline" />
    </a>
  );
}
