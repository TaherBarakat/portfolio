import React, { Children } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function LinkComp({ children, ...props }) {
  return (
    <a
      target="_blank"
      className="  text-accent hover:text-accent font-semibold duration-500 hover:text-[1.015rem]"
      {...props}
    >
      {" "}
      {children} <FaExternalLinkAlt size={12} className="inline" />
    </a>
  );
}
