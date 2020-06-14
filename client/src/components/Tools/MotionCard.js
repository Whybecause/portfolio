import React from "react";
import { motion } from "framer-motion";

const MotionCard = ({ children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      drag
      dragConstraints={{
        top: -5,
        left: -5,
        right: 5,
        bottom: 5,
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionCard;
