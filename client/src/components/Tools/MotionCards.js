import React from "react";
import { motion } from "framer-motion";

const MotionCards = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100, y: 100 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionCards;
