import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Presentation() {
  return (
    <div className="bg-light text-black p-top-5 p-bot-5" id="presentation">
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }} className="static">
            <p className="text-center">
              Attiré par le monde de l'informatique depuis tout petit, j'ai eu un déclic pour le développement web il y à un an.
              Je me suis mis à développer mes compétences au travers de projets autodidactes ainsi qu'en suivant une formation en école pour préparer un bachelor.
              Au travers de mon parcours, mes différentes expériences professionnelles et ma passion pour la
              musique m'ont permis d'acquérir des compétences transversales :
              rigueur, travail, curiosité et capacité d'adaptation - compétences que je retranscris au sein du développement.
            </p>
            <p className="text-center">Voici un aperçu de mes derniers projets :</p>
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default Presentation;
