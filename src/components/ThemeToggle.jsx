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

import { useEffect, useState } from "react";
import "@theme-toggles/react/css/Lightbulb.css";
import { Lightbulb } from "@theme-toggles/react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
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
      localStorage.setItem("theme", newMode ? "dark" : "light");
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
    <span onClick={toggleTheme}>
      <Lightbulb
        aria-label="Toggle theme"
        duration={2000}
        className="h-full scale-125 rounded-full p-2 transition-colors  "
      />
    </span>
  );
};

export default ThemeToggle;
