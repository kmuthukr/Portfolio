import React from "react";
import { Container, Row, Col } from "react-bootstrap";

//import homeLogo from "../../Assets/3.jpg";
import Particle from "../Particle";
import About_2 from "./About_2";
import Type from "./Type";
import { LottieAnimation } from "react-lottie-tools";
import CarouselFadeExample from "../Carousal/Carousal";
import Tilt from "react-parallax-tilt";
import Letstalk from "../Letstalk/Letstalk";




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