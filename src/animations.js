// // animations.js
// // import { Variants } from "framer-motion";

// // Animation utilities for scroll-based animations
// export const scrollRevealSettings = {
//   triggerOnce: false,
//   threshold: 0.25,
//   margin: "-100px 0px -100px 0px",
// };

// // Home component animations - modified to prevent mobile overflow
// export const homeAnimations = {
//   container: {
//     initial: { opacity: 0 },
//     animate: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.3 },
//     },
//     exit: {
//       opacity: 0,
//       transition: { staggerChildren: 0.1, staggerDirection: -1 },
//     },
//   },
//   title: {
//     initial: { opacity: 0, y: 20 },
//     animate: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//     exit: {
//       opacity: 0,
//       y: 20,
//       transition: { duration: 0.5, ease: "easeIn" },
//     },
//   },
//   subtitle: {
//     initial: { opacity: 0, y: 20 },
//     animate: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
//     },
//     exit: {
//       opacity: 0,
//       y: 20,
//       transition: { duration: 0.5, ease: "easeIn" },
//     },
//   },
//   paragraph: {
//     initial: { opacity: 0 },
//     animate: {
//       opacity: 1,
//       transition: { duration: 0.7, ease: "easeOut", delay: 0.6 },
//     },
//     exit: {
//       opacity: 0,
//       transition: { duration: 0.5, ease: "easeIn" },
//     },
//   },
//   button: {
//     initial: { opacity: 0 },
//     animate: {
//       opacity: 1,
//       transition: { duration: 0.6, ease: "easeOut", delay: 0.8 },
//     },
//     exit: {
//       opacity: 0,
//       transition: { duration: 0.4, ease: "easeIn" },
//     },
//   },
//   // Name animation for sequential sliding
//   nameFirst: {
//     initial: { x: "-100%", opacity: 0 },
//     animate: {
//       x: 0,
//       opacity: 1,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//     exit: {
//       x: "0",
//       opacity: 0,
//       transition: { duration: 0.5, ease: "easeIn" },
//     },
//   },
//   nameLast: {
//     initial: { x: "-100%", opacity: 0 },
//     animate: {
//       x: 0,
//       opacity: 1,
//       transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
//     },
//     exit: {
//       x: "-100%",
//       opacity: 0,
//       transition: { duration: 0.5, ease: "easeIn" },
//     },
//   },
// };

// // About component animations
// export const aboutAnimations = {
//   container: {
//     initial: { opacity: 0 },
//     animate: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.2 },
//     },
//     exit: {
//       opacity: 0,
//       transition: { staggerChildren: 0.1, staggerDirection: -1 },
//     },
//   },
//   title: {
//     initial: { y: -50, opacity: 0 },
//     animate: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.7, ease: "easeOut" },
//     },
//     exit: {
//       y: -50,
//       opacity: 0,
//       transition: { duration: 0.5, ease: "easeIn" },
//     },
//   },
//   leftContent: {
//     initial: { x: -80, opacity: 0 },
//     animate: {
//       x: 0,
//       opacity: 1,
//       transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
//     },
//     exit: {
//       x: -80,
//       opacity: 0,
//       transition: { duration: 0.5, ease: "easeIn" },
//     },
//   },
//   rightContent: {
//     initial: { x: 80, opacity: 0 },
//     animate: {
//       x: 0,
//       opacity: 1,
//       transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
//     },
//     exit: {
//       x: 80,
//       opacity: 0,
//       transition: { duration: 0.5, ease: "easeIn" },
//     },
//   },
// };

// // Skills component animations
// export const skillsAnimations = {
//   container: {
//     initial: { opacity: 0 },
//     animate: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.2 },
//     },
//     exit: {
//       opacity: 0,
//       transition: { staggerChildren: 0.05, staggerDirection: -1 },
//     },
//   },
//   title: {
//     initial: { y: 30, opacity: 0 },
//     animate: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
//     },
//     exit: {
//       y: 30,
//       opacity: 0,
//       transition: { duration: 0.4, ease: "easeIn" },
//     },
//   },
//   paragraph: {
//     initial: { y: 30, opacity: 0 },
//     animate: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
//     },
//     exit: {
//       y: 30,
//       opacity: 0,
//       transition: { duration: 0.4, ease: "easeIn" },
//     },
//   },
//   skillItem: {
//     initial: { scale: 0.8, opacity: 0, y: 20 },
//     animate: {
//       scale: 1,
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//     hover: {
//       scale: 1.1,
//       transition: { duration: 0.3 },
//     },
//     exit: {
//       scale: 0.8,
//       opacity: 0,
//       y: 20,
//       transition: { duration: 0.3, ease: "easeIn" },
//     },
//   },
// };

// // Work component animations
// export const workAnimations = {
//   container: {
//     initial: { opacity: 0 },
//     animate: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.2 },
//     },
//     exit: {
//       opacity: 0,
//       transition: { staggerChildren: 0.1, staggerDirection: -1 },
//     },
//   },
//   title: {
//     initial: { y: 30, opacity: 0 },
//     animate: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
//     },
//     exit: {
//       y: 30,
//       opacity: 0,
//       transition: { duration: 0.4, ease: "easeIn" },
//     },
//   },
//   paragraph: {
//     initial: { y: 30, opacity: 0 },
//     animate: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
//     },
//     exit: {
//       y: 30,
//       opacity: 0,
//       transition: { duration: 0.4, ease: "easeIn" },
//     },
//   },
//   projectCard: {
//     initial: { y: 50, opacity: 0 },
//     animate: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//     hover: {
//       y: -10,
//       transition: { duration: 0.3 },
//     },
//     exit: {
//       y: 50,
//       opacity: 0,
//       transition: { duration: 0.4, ease: "easeIn" },
//     },
//   },
// };

// // Contact component animations
// export const contactAnimations = {
//   container: {
//     initial: { opacity: 0 },
//     animate: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.2 },
//     },
//     exit: {
//       opacity: 0,
//       transition: { staggerChildren: 0.1, staggerDirection: -1 },
//     },
//   },
//   title: {
//     initial: { y: -50, opacity: 0 },
//     animate: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.7, ease: "easeOut" },
//     },
//     exit: {
//       y: -50,
//       opacity: 0,
//       transition: { duration: 0.5, ease: "easeIn" },
//     },
//   },
//   form: {
//     initial: { opacity: 0, scale: 0.95 },
//     animate: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.7, ease: "easeOut", delay: 0.3 },
//     },
//     exit: {
//       opacity: 0,
//       scale: 0.95,
//       transition: { duration: 0.5, ease: "easeIn" },
//     },
//   },
//   formItem: {
//     initial: { x: -20, opacity: 0 },
//     animate: {
//       x: 0,
//       opacity: 1,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//     exit: {
//       x: -20,
//       opacity: 0,
//       transition: { duration: 0.3, ease: "easeIn" },
//     },
//   },
// };

// // For any shared animations across components
// export const commonAnimations = {
//   fadeIn: {
//     initial: { opacity: 0 },
//     animate: { opacity: 1, transition: { duration: 0.7 } },
//     exit: { opacity: 0, transition: { duration: 0.3 } },
//   },
//   pageTransition: {
//     initial: { opacity: 0 },
//     animate: { opacity: 1, transition: { duration: 0.5 } },
//     exit: { opacity: 0, transition: { duration: 0.3 } },
//   },
// };

// export const navbarAnimations = {
//   container: {
//     initial: { opacity: 0 },
//     animate: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.2 },
//     },
//   },
//   logoItem: {
//     initial: { y: -50, opacity: 0 },
//     animate: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   },
//   navItem: {
//     initial: { y: -50, opacity: 0 },
//     animate: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut",
//         type: "spring",
//         stiffness: 100,
//       },
//     },
//   },
//   socialItem: {
//     initial: { x: -160, opacity: 0 },
//     animate: {
//       x: 0,
//       opacity: 1,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//     hover: {
//       x: 90,
//       transition: { duration: 0.3 },
//     },
//   },
// };

export const HOME_ANIMATIONS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  },
  greeting: {
    hidden: { x: -150, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "tween", stiffness: 100 },
    },
  },
  name: {
    hidden: { x: -150, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "tween", stiffness: 100 },
    },
    exit: { x: 100 },
  },
  title: {
    hidden: { x: 150, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "tween", stiffness: 100, delay: 0.5 },
    },
    exit: { x: -100 },
  },
  description: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.4 },
    },
  },
  button: {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.6 },
    },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 0.95,
  },
};

// Slide Right (enter from right)
export const slideRight = {
  offscreen: {
    x: 100,
    filter: "blur(3px)",
    opacity: 0,
  },
  onscreen: {
    x: 0,
    filter: "blur(0px)",
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

// Slide Left (enter from left)
export const slideLeft = {
  offscreen: {
    x: -100,
    filter: "blur(3px)",
    opacity: 0,
  },
  onscreen: {
    x: 0,
    filter: "blur(0px)",
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

// Slide Top to Bottom (enter from top)
export const slideDown = {
  offscreen: {
    y: -300,
    filter: "blur(3px)",
    opacity: 0,
  },
  onscreen: {
    y: 0,
    filter: "blur(0px)",
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

// Slide Bottom to Top (enter from bottom)
export const slideUp = {
  offscreen: {
    y: 50,
    filter: "blur(3px)",
    opacity: 0,
  },
  onscreen: {
    y: 0,
    filter: "blur(0px)",
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};
