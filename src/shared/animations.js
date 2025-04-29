export const navbarAnimations = {
  container: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  },
  logoItem: {
    initial: { y: -50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
  navItem: {
    initial: { y: -50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  },
  socialItem: {
    initial: { x: -160, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      x: 90,
      transition: { duration: 0.3 },
    },
  },
};

export const homeAnimation = {
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
export const slidDescription = {
  offscreen: {
    y: 100,
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

export let setProjectCardAnimation = (index) => {
  return {
    offscreen: {
      z: 50,
      filter: "blur(500px)",
      opacity: 0,
    },
    onscreen: {
      z: 0,
      filter: "blur(0px)",
      opacity: 1,
      transition: {
        type: "tween",
        ease: "anticipate",
        duration: 0.8 + index * 0.6,
      },
    },
  };
};
