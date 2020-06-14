import React, { useState } from "react";
import { Link } from "react-scroll";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Modal from "../Tools/Modal";
import { useForm } from "react-hook-form";
import axios from "axios";
import ModalMessage from "../Tools/ModalMessage";

function Footer() {
  const [isToggled, setToggle] = useState(false);
  let [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  let [responseData, setResponseData] = React.useState("");

  const onClose = () => {
    setToggle(false)
    setResponseData(" ")
  }
  const onSubmit = (data) => {
    setLoading(true);
    axios
      .post("/api/contact", data)
      .then((response) => {
        setLoading(false);
        setResponseData(response.data.message);
      })
      .catch((error) => {
        setLoading(false);
        setResponseData(error.response.data.error);
        console.log(error.response.data.error);
      });
  };

  return (
    <Container className="h-footer m-top-3" id="contact">
      <Dropdown.Divider />
      <Row className="d-flex align-items-center justify-content-center  p-top-3">
          <motion.div whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }} className="p-right-3">
            <a href="https://github.com/Whybecause?tab=repositories">
              <FaGithub size={60} className="text-black" />
            </a>
          </motion.div>
          <motion.div whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }} className="p-right-3">
            <a href="https://www.linkedin.com/in/maxence-traina-134737187/">
              <FaLinkedin size={60} className="text-black" />
            </a>
          </motion.div>
          <motion.div whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }} className="p-right-3">
            <Link
              onClick={() => setToggle(true)}
              className="mail-button"
              activeClass="active"
              to="contact-form"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <FaEnvelope size={60} className="text-black" />
            </Link>
          </motion.div>
      </Row>
      <Modal isToggled={isToggled} setToggle={setToggle}>
        <motion.button
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          className="contact-button rel"
          onClick={() => onClose()}
        >
          X
        </motion.button>
        <div className=" dfaicjcc form-card bg-card p-top-3 p-bot-3 m-top-1 m-bot-5">
          <form onSubmit={handleSubmit(onSubmit)} className=" w-80 ">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Nom"
                name="name"
                ref={register({ required: true })}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Email"
                name="email"
                ref={register({ required: true })}
              />
            </div>
            <div className="form-group">
              <textarea
                type="text"
                className="form-control"
                placeholder="Message"
                name="message"
                ref={register({ required: true })}
              />
            </div>
            <Row>
              <Col sm={12} className="dfaicjcc m-top-1">
                <motion.div
                  whileTap={{ scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  className="w-50"
                >
                  <button
                    type="submit"
                    className="contact-button w-100"
                    disabled={loading}
                  >
                    {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Envoyer</span>
                  </button>
                </motion.div>
              </Col>
            </Row>
            <Row className="p-top-3 d-flex align-items-center justify-content-center">
              <ModalMessage responseData={responseData}>
                {responseData}
              </ModalMessage>
            </Row>
          </form>
        </div>
      </Modal>
      <footer id="contact-form"></footer>
    </Container>
  );
}

export default Footer;
