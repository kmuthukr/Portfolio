import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/krishna.jpeg";
import homeLogo_1 from "../../Assets/krishna_1.jpg";

//import homeLogo from "../../Assets/3.jpg";
import Particle from "../Particle";
import About_2 from "./About_2";
import Type from "./Type";
import { LottieAnimation } from "react-lottie-tools";
import CarouselFadeExample from "../Carousal/Carousal";
import Lottie from 'react-lottie';
import Tilt from "react-parallax-tilt";
import Letstalk from "../Letstalk/Letstalk";

import graduation from '../../Assets/graduation.json';
import yoga_1 from '../../Assets/yoga_1.json';
import yoga_2 from '../../Assets/yoga_2.json';
import yoga_3 from '../../Assets/yoga_3.json';
import yoga_4 from '../../Assets/yoga_4.json';
import yoga_5 from '../../Assets/yoga_5.json';
import yoga_6 from '../../Assets/yoga_6.json';
import sd_1 from '../../Assets/sd_1.json';
import sd_2 from '../../Assets/sd_2.json';
import sd_3 from '../../Assets/sd_3.json';
import sd_4 from '../../Assets/sd_4.json';
import sd_5 from '../../Assets/sd_5.json';
import sd_6 from '../../Assets/sd_6.json';
import sd_7 from '../../Assets/sd_7.json';
import myImg from "../../Assets/2.png";



const images_set_1 = [
  {
    id: '1',
    image:require("../../Assets/krishna_1.jpg"),
  },
  {
    id: '2',
    image:require("../../Assets/krishna.jpeg"),
  },
  {
    id: '3',
    image:require("../../Assets/2.png"),
  },
];

function About() {
  
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          
          <Row>
          <Col className="myAvtar">
              <Tilt>
                <CarouselFadeExample carousal_images_set={images_set_1}/>
                </Tilt>
            </Col>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h3 className="heading-name">
               I'm
                <small className="main-name"> Krishnakumar Muthukrishnan</small>
              </h3>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
                
              </div>
              <Letstalk/> 
            </Col>


          </Row>  
        </Container>
      </Container>
      <About_2 />
    </section>
  );
}

export default About;
