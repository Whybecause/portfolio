import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import profil from "../../assets/profil.png";
import SkillCard from "../Tools/SkillCard";

function Header() {
  return (
    // <Container className="resp-p-container h-page" id="accueil">
    <Container className="h-page " id="accueil">
      <div className="margin-top h-100">
        <div className="h-40">
          <Row className="dfaicjcc ">
            <motion.h1
              initial={{ opacity: 0, x: 0, y: -200 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 2 }}
              className="text-center"
            >
              Développeur Full-Stack Javascript
            </motion.h1>
          </Row>
          <Row className="dfaicjcc p-top-1">
            <motion.p
              initial={{ opacity: 0, x: 5000, y: 1000 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 2 }}
              className="text-center"
            >
              En formation Bac + 5 Développeur Web & autodidacte
            </motion.p>
          </Row>
          <Row className="dfaicjcc p-top-1">
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
        </div>
        <Row className="h-60 ">
          <Col lg={4} md={4} sm={6} xs={6} className="static">
            <SkillCard
              title="Javascript"
              initial={{ opacity: 0, x: -15000, y: -20000 }}
              transition={{ duration: 2.5 }}
            />
          </Col>
          <Col lg={4} md={4} sm={6} xs={6} className="static">
            <SkillCard
              title="React"
              initial={{ opacity: 0, x: -100, y: -20000 }}
              transition={{ duration: 3 }}
            />
          </Col>

          <Col lg={4} md={4} sm={6} xs={6} className="static">
            <SkillCard
              title="Node.js"
              initial={{ opacity: 0, x: 15000, y: -20000 }}
              transition={{ duration: 3.5 }}
            />
          </Col>
          <Col lg={4} md={4} sm={6} xs={6} className="static">
            <SkillCard
              title="MongoDB"
              initial={{ opacity: 0, x: -20000, y: 0 }}
              transition={{ duration: 4 }}
            />
          </Col>

          <Col lg={4} md={4} sm={6} xs={6} className="static">
            <SkillCard
              title="Docker"
              initial={{ opacity: 0, x: 20000, y: 1000 }}
              transition={{ duration: 4.5 }}
            />
          </Col>

          <Col lg={4} md={4} sm={6} xs={6} className="static">
            <SkillCard
              title="AWS"
              initial={{ opacity: 0, x: 20000, y: 0 }}
              transition={{ duration: 5 }}
            />
          </Col>
          <Col lg={4} md={4} sm={6} xs={6} className="static">
            <SkillCard
              title="Typescript"
              initial={{ opacity: 0, x: 20000, y: 0 }}
              transition={{ duration: 5 }}
            />
          </Col>
          <Col lg={4} md={4} sm={6} xs={6} className="static">
            <SkillCard
              title="HTML"
              initial={{ opacity: 0, x: 20000, y: 0 }}
              transition={{ duration: 5 }}
            />
          </Col>
          <Col lg={4} md={4} sm={6} xs={6} className="static">
            <SkillCard
              title="CSS"
              initial={{ opacity: 0, x: 20000, y: 0 }}
              transition={{ duration: 5 }}
            />
          </Col>
        </Row>
        </div>
    </Container>
  );
}

export default Header;
