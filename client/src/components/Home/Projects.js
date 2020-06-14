import React from "react";
import { Container, Row } from "react-bootstrap";

import MotionCards from "../Tools/MotionCards";
import Thumbnail from "../Tools/Thumbnail.js";

import RentalDescription from '../ProjetsDescription/RentalDescription';
import WeatherDescription from '../ProjetsDescription/WeatherDescription';
import house from "../../assets/house.svg";
import sun from "../../assets/sun.svg";
import wordpress from "../../assets/wordpress-simple-brands.svg";


function Projects(props) {
  return (
    <Container>
      <MotionCards>
        <Row lg={3} md={2} sm={2} xs={2} id="projects" className="m-top-1">
          <Thumbnail
            image={house}
            link="https://mataviguette.herokuapp.com"
            title="House Rental"
            category="MERN Stack"
            github="https://github.com/Whybecause/mataviguette"
            modalHeader="Site permettant la réservation d'une location"
            modalContent={RentalDescription()}
            />
            <Thumbnail
              image={sun}
              link="https://maxencetrainaweatherapp.herokuapp.com/"
              title="Weather App"
              category="Javascript"
              github="https://github.com/Whybecause/weather_app"
              modalHeader="Application Meteo en javascript"
              modalContent={WeatherDescription()}
              />
            <Thumbnail
              image={wordpress}                                                                    
              link=""
              title="En cours"
              category="PHP - Thème Wordpress "
              github=""
              modalText=""
              />
        </Row>
      </MotionCards>
    </Container>
  );
}

export default Projects;
