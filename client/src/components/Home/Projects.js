import React from "react";
import { Container, Row } from "react-bootstrap";

import MotionCards from "../Tools/MotionCards";
import Thumbnail from "../Tools/Thumbnail.js";

import RentalDescription from '../ProjetsDescription/RentalDescription';
import WeatherDescription from '../ProjetsDescription/WeatherDescription';
import OkspDescription from '../ProjetsDescription/OkspDescription';
import house from "../../assets/house.svg";
import sun from "../../assets/sun.svg";
// import wordpress from "../../assets/wordpress-simple-brands.svg";
import band from '../../assets/band.svg'


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
            image={band}                                                                    
<<<<<<< HEAD
            link="https://www.okessapar.com"
=======
            link="https://okessapar.com"
>>>>>>> de8a87c86c8d33a8bb4a3d9be480864364f1d921
            title="Music Band"
            category="MERN Stack "
            github="https://github.com/Whybecause/okessapar"
            modalHeader="Site pour la communication d'un groupe de musique"
            modalContent={OkspDescription()}
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
        </Row>
      </MotionCards>
    </Container>
  );
}

export default Projects;
