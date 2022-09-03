import React from "react";
import { Row, Col } from "react-bootstrap";

import { LottieAnimation } from "react-lottie-tools";
import facebook from '../../Assets/97580-facebook.json';
import instagram from '../../Assets/99618-instagram.json';
import linkedin from '../../Assets/99032-linkedin.json';
import github from '../../Assets/lf30_editor_zpciz3zg.json';

function Letstalk() {
  return (
    <Row>
        <Col md={12} className="home-about-social">
            <h1>Let's Connect</h1>
            <p>
                reach<span className="purple">me </span>through
            </p>
            <ul className="home-about-social-links">
                <li className="social-icons">
                    <a
                        href="https://github.com/kmuthukr?tab=projects&type=beta"
                        target="_blank"
                        rel="noreferrer"
                    // className="icon-colour  home-social-icons"
                    >
                        <LottieAnimation  animation={github}  style={{ width: "100px", height: "100px" }} autoplay loop></LottieAnimation>
                    </a>
                </li>
                <li className="social-icons">
                    <a
                        href="https://www.linkedin.com/in/krishnakumar-muthukrishnan-13a98b69/"
                        target="_blank"
                        rel="noreferrer"
                    // className="icon-colour  home-social-icons"
                    >
                        <LottieAnimation  animation={linkedin}  style={{ width: "100px", height: "100px" }} autoplay loop></LottieAnimation>
                    </a>
                </li>
                <li className="social-icons">
                    <a
                        href="https://www.facebook.com/krishhlive/?viewas=100000686899395"
                        target="_blank"
                        rel="noreferrer"
                     //className="icon-colour  home-social-icons"
                    >
                        <LottieAnimation  animation={facebook}  style={{ width: "75px", height: "75px" }} autoplay loop></LottieAnimation>
                    </a>
                </li>
                <li className="social-icons">
                    <a
                        href="https://www.instagram.com/krishhlive/"
                        target="_blank"
                        rel="noreferrer"
                    // className="icon-colour home-social-icons"
                    >
                        <LottieAnimation  animation={instagram}  style={{ width: "100px", height: "100px" }} autoplay loop></LottieAnimation>
                    </a>
                </li>
            </ul>
        </Col>
  </Row>
  );
}

export default Letstalk;
