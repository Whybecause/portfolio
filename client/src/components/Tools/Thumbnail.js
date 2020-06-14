import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Col } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import MotionCard from "./MotionCard";

function Thumbnail(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Col className="mb-1 text-center static  ">
        <MotionCard>
          <div className="bg-card card">
            <img className="w-50" src={props.image} alt="Project" />
            <h2>
              <a href={props.link}>{props.title}</a>
            </h2>
            <p>{props.category}</p>
            <motion.button
              whileTap={{ scale: 0.8 }}
              className="c-btn"
              onClick={handleShow}
            >
              En savoir plus
            </motion.button>
            <motion.div whileTap={{ scale: 0.8 }}>
              <a href={props.github} className="w-50">
                <FaGithub size={20}/>
              </a>          
            </motion.div>
          </div>
        </MotionCard>
      </Col>
      <Modal show={show} onHide={handleClose} className="text-black">
        <Modal.Header closeButton>
          <h2>{props.modalHeader}</h2>
        </Modal.Header>
        <Modal.Body>{props.modalContent}</Modal.Body>
      </Modal>
    </>
  );
}

export default Thumbnail;
