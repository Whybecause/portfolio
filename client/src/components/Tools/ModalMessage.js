import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const ModalMessage = ({ responseData, children }) => {
  return (
    <AnimatePresence>
      {responseData && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // style={{
          //   position: "fixed",
          //   top: "50px",
          //   left: "50%",
          //   transform: "translate3d(-50%, 0, 0)",
          // }}
        >
          <motion.div initial={{ x: 500 }} animate={{ x: 0 }}>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalMessage;
