import React from "react";
import { motion } from "framer-motion";

function SkillCard(props) {
  return (
      <motion.div
        initial={props.initial}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={props.transition}
        whileHover={{ scale: 0.8 }}
        whileTap={{ scale: 0.9 }}
        drag
        dragConstraints={{
          top: -50,
          left: -5000,
          right: 50,
          bottom: 50,
        }}
      >
        <h2 className="skill-card text-center">{props.title}</h2>
      </motion.div>
  );
}

export default SkillCard;
