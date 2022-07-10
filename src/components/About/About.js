import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";

//import homeLogo from "../../Assets/3.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { LottieAnimation } from "react-lottie-tools";

import Lottie from 'react-lottie';
import Tilt from "react-parallax-tilt";

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

function About() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
   // animationData: animation,
    // here is where we will declare lottie animation
    // "animation" is what we imported before animationData: animation,
    rendererSettings: {
       preserveAspectRatio: "xMidYMid slice",
    },
 };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col>
              <Tilt>
                <LottieAnimation animation={sd_7} style={{ width: "300px", height: "300px" }} autoplay loop/>
              </Tilt>
            </Col>
             
            <Col>
              <Tilt>
              <LottieAnimation animation={yoga_2} style={{ width: "300px", height: "300px" }} autoplay loop/>
              </Tilt>
            </Col>
            <Col> 
              <Tilt>
              <LottieAnimation animation={yoga_3} style={{ width: "300px", height: "300px" }} autoplay loop/>
              </Tilt>
            </Col>
            <Col> 
              <Tilt>
              <LottieAnimation animation={yoga_4} style={{ width: "300px", height: "300px" }} autoplay loop/>
              </Tilt> 
            </Col>
          </Row>
          <Row>
          <Col>
              <Tilt>
                <Lottie options={defaultOptions} height={300} width={250} />
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
            </Col>
            <Col>
              <Tilt>
                <Lottie options={defaultOptions} height={300} width={250} />
              </Tilt>
            </Col>
          </Row>
          <Row>
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
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} >
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px"
              }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default About;
