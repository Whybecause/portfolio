import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    transform: "translateX(0)"
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    transform: "translateX(-100%)"
  }
};

export const Navigation = ({toggle}) => (
  <motion.ul variants={variants} className="fixed">
    {itemIds.map(i => (
      <MenuItem i={i} key={i} toggle={toggle}/>
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3];
