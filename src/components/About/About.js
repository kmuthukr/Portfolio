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

import scrolldown from '../../Assets/lf30_editor_eyqrc1rh.json';
import facebook from '../../Assets/97580-facebook.json';
import instagram from '../../Assets/99618-instagram.json';
import linkedin from '../../Assets/99032-linkedin.json';
import github from '../../Assets/lf30_editor_zpciz3zg.json';




const images_set_1 = [
  {
    id: '1',
    image:require("../../Assets/set1_1.jpeg"),
  },
  {
    id: '2',
    image:require("../../Assets/set1_2.jpg"),
  },
  {
    id: '3',
    image:require("../../Assets/set1_3.jpg"),
  },
];

function About() {
  
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          
          <Row>
          <Col className="carousalAvtar">
                <CarouselFadeExample carousal_images_set={images_set_1}/>
          </Col>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hii There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h3 className="heading-name">
               I'm
                <small className="main-name"> Krishnakumar Muthukrishnan</small>
              </h3>

              <div style={{ padding: 20, textAlign: "left" }}>
                
              <LottieAnimation  animation={scrolldown}  style={{ width: "416px", height: "550px" }} autoplay loop></LottieAnimation>

                {/*<Type />*/}
                
              </div>
            <Row>
            </Row>
            
            
            </Col>
          </Row>  
        </Container>
      </Container>
      <About_2 />
    </section>
  );
}

export default About;