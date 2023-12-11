
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";

import { Navigation } from "./Navigation";
import { useDimensions } from "./useDimentions";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(20px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
console.log(isOpen);
  return (
    <motion.nav
      className={`nav ${isOpen ? "w-[100vw]" : "w-0" }`}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className="background bg-black/80 backdrop-blur-sm"
        variants={sidebar}
      />
      <Navigation isOpen={isOpen} />

      <div className="relative top-4 left-4">
        <Hamburger
          size={20}
          toggled={isOpen}
          toggle={() => setIsOpen(!isOpen)}
        />
      </div>
    </motion.nav>
  );
};
