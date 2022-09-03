import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { LottieAnimation } from "react-lottie-tools";

import facebook from '../Assets/97580-facebook.json';
import instagram from '../Assets/99618-instagram.json';
import linkedin from '../Assets/99032-linkedin.json';
import github from '../Assets/lf30_editor_zpciz3zg.json';
import Type_footer_1 from "./About/Type_footer_1";
import Type_footer_2 from "./About/Type_footer_2";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <Type_footer_1 />
        
        </Col>
        <Col md="4" className="footer-copywright">
          <Type_footer_2 />
        
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/kmuthukr?tab=projects&type=beta"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                 <LottieAnimation  animation={github}  style={{ width: "45px", height: "45px" }} autoplay loop></LottieAnimation>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/krishnakumar-muthukrishnan-13a98b69/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                 <LottieAnimation  animation={linkedin}  style={{ width: "45px", height: "45px" }} autoplay loop></LottieAnimation>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/krishhlive/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
               <LottieAnimation  animation={instagram}  style={{ width: "45px", height: "45px" }} autoplay loop></LottieAnimation>
              </a>
            </li>
            <li className="social-icons">
                <a
                  href="https://www.facebook.com/krishhlive/?viewas=100000686899395&show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_transition=0&show_community_review_changes=0&show_follower_visibility_disclosure=0"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    <LottieAnimation  animation={facebook}  style={{ width: "45px", height: "45px" }} autoplay loop></LottieAnimation>
                  </a>
                  </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
