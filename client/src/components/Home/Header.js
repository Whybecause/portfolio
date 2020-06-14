import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import profil from "../../assets/profil.png";
import SkillCard from "../Tools/SkillCard";

function Header() {
  return (
    <Container className=" p-top-10 h-page " id="accueil">
      <Row className="dfaicjcc">
        <motion.h1
          initial={{ opacity: 0, x: 0, y: -200 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 2 }}
          className="text-center"
        >
          Développeur Full-Stack Junior
        </motion.h1>
      </Row>
      <Row className="dfaicjcc m-top-1">
        <motion.p
          initial={{ opacity: 0, x: 5000, y: 1000 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 2 }}
          className="text-center"
        >
          En formation de chef de projet digital & autodidacte
        </motion.p>
      </Row>
      <Row className="dfaicjcc m-top-1">
        <motion.img
          whileHover={{ scale: 1.1 }}
          drag
          dragConstraints={{
            top: -5,
            left: -5,
            right: 5,
            bottom: 5,
          }}
          initial={{ opacity: 0, x: -5000, y: -0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 2 }}
          src={profil}
          alt="profil"
          className="profil-img"
        ></motion.img>
      </Row>
      <Row className="p-top-5 ">
        <Col lg={4} md={4} sm={6} xs={6} className="static">
          <SkillCard
            title="HTML"
            initial={{ opacity: 0, x: -15000, y: -20000 }}
            transition={{ duration: 2.5 }}
          />
        </Col>
        <Col lg={4} md={4} sm={6} xs={6} className="static">
          <SkillCard
            title="CSS"
            initial={{ opacity: 0, x: -100, y: -20000 }}
            transition={{ duration: 3 }}
          />
        </Col>

        <Col lg={4} md={4} sm={6} xs={6} className="static">
          <SkillCard
            title="Javascript"
            initial={{ opacity: 0, x: 15000, y: -20000 }}
            transition={{ duration: 3.5 }}
          />
        </Col>
        <Col lg={4} md={4} sm={6} xs={6} className="static">
          <SkillCard
            title="React"
            initial={{ opacity: 0, x: -20000, y: 0 }}
            transition={{ duration: 4 }}
          />
        </Col>

        <Col lg={4} md={4} sm={6} xs={6} className="static">
          <SkillCard
            title="PHP"
            initial={{ opacity: 0, x: 20000, y: 1000 }}
            transition={{ duration: 4.5 }}
          />
        </Col>

        <Col lg={4} md={4} sm={6} xs={6} className="static">
          <SkillCard
            title="Node js"
            initial={{ opacity: 0, x: 20000, y: 0 }}
            transition={{ duration: 5 }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
