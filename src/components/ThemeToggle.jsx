// import { useEffect, useState } from "react";
// import { FaRegSun, FaRegMoon } from "react-icons/fa";

// const ThemeToggle = () => {
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     // Check for saved preference or system preference
//     const savedMode = localStorage.getItem("theme");
//     const systemPrefersDark = window.matchMedia(
//       "(prefers-color-scheme: dark)",
//     ).matches;

//     if (savedMode === "dark" || (!savedMode && systemPrefersDark)) {
//       setIsDark(true);
//       document.documentElement.classList.add("dark");
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newMode = !isDark;
//     setIsDark(newMode);
//     localStorage.setItem("theme", newMode ? "dark" : "light");
//     document.documentElement.classList.toggle("dark", newMode);
//   };

//   return (
//     <button onClick={toggleTheme} className="rounded-full p-2">
//       {isDark ? <FaRegSun /> : <FaRegMoon />}
//     </button>
//   );
// };

// export default ThemeToggle;

import "@theme-toggles/react/css/Lightbulb.css";
import { useEffect, useState } from "react";
import { Lightbulb } from "@theme-toggles/react";
import { motion } from "framer-motion";
import { navbarAnimations } from "../shared/animations";
const THEME_LS_KEY = "TAHER_PORTFOLIO_THEME";
const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem(THEME_LS_KEY);
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initialMode = savedMode === "dark" || (!savedMode && prefersDark);
    setIsDark(initialMode);
    document.documentElement.classList.toggle("dark", initialMode);
    document.documentElement.style.setProperty(
      "color-scheme",
      initialMode ? "dark" : "light",
    );
  }, []);

  const toggleTheme = (e) => {
    const newMode = !isDark;
    const html = document.documentElement;

    // Set click position for animation center
    const x = `${(e.clientX / window.innerWidth) * 100}%`;
    const y = `${(e.clientY / window.innerHeight) * 100}%`;
    html.style.setProperty("--theme-button-cord", `${x} ${y}`);
    html.style.viewTransitionName = "changing-theme";

    const applyTheme = () => {
      setIsDark(newMode);
      localStorage.setItem(THEME_LS_KEY, newMode ? "dark" : "light");
      html.classList.toggle("dark", newMode);
      html.style.setProperty("color-scheme", newMode ? "dark" : "light");
    };

    if (document.startViewTransition) {
      document.startViewTransition(() => applyTheme());
    } else {
      applyTheme(); // fallback
    }
  };

  return (
    <motion.span
      onClick={toggleTheme}
      variants={navbarAnimations.navItem}
      transition={{ delay: 0.7 }}
      className="z-10 flex h-full flex-1 items-center justify-center pb-1 "
    >
      <Lightbulb
        aria-label="Toggle theme"
        duration={2000}
        className=" scale-[1.8] rounded-full p-2 transition-colors md:scale-[1.6]  "
      />
    </motion.span>
  );
};

export default ThemeToggle;
