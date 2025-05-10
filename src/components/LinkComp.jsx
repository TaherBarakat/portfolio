import { FaExternalLinkAlt } from "react-icons/fa";

export default function LinkComp({ children, ...props }) {
  return (
    <a
      target="_blank"
      className="inline-flex items-center gap-1 font-semibold text-accent duration-300 hover:scale-[1.05] hover:transform hover:text-accent"
      {...props}
    >
      {children}
      <FaExternalLinkAlt size={12} className="inline" />
    </a>
  );
}
