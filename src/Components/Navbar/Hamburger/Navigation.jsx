import * as React from "react";
import { motion } from "framer-motion";
import { Links } from "./Links";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};



const itemIds = [0, 1, 2, 3, 4];


export const Navigation = ({ isOpen }) => (
  <motion.ul
    className={`ul ${isOpen? 'flex' : 'hidden' }  justify-center flex-col items-center`}
    variants={variants}
  >
    {itemIds.map((i) => (
      <Links i={i} key={i} />
    ))}
  </motion.ul>
);