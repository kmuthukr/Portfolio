import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";

import facebook from '../Assets/97580-facebook.json';
import instagram from '../Assets/97577-instagram.json';
import linkedin from '../Assets/99032-linkedin.json';
import github from '../Assets/lf30_editor_zpciz3zg.json';

import { Col } from "react-bootstrap";

import { LottieAnimation } from "react-lottie-tools";
import project from '../Assets/project_2.json';
import bag from '../Assets/bag.json';
import feedback_logo from '../Assets/feedback.json';
import hireme from '../Assets/hireme.json';
import aboutme from '../Assets/aboutme.json';

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
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

        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
              <td>
              <LottieAnimation  animation={aboutme}  style={{ width: "60px", height: "40px" }} autoplay loop></LottieAnimation>
                </td>
                <td>
                About
                </td>              
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/techbag"
                onClick={() => updateExpanded(false)}
              >
              <td>
              <LottieAnimation  animation={bag} style={{ width: "70px", height: "80px" }} autoplay loop></LottieAnimation>
                </td>
                <td>
                Tech Bag
                </td>
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
              <td>
              <LottieAnimation  animation={project}  style={{ width: "60px", height: "50px" }} autoplay loop></LottieAnimation>
                </td>
                <td>
                Projects
                </td>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
              <td>
              <LottieAnimation  animation={hireme} style={{ width: "60px", height: "60px" }} autoplay loop></LottieAnimation>
                </td>
                <td>
                Resume
                </td>            
              </Nav.Link>
            </Nav.Item>

            
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/feedback"
                onClick={() => updateExpanded(false)}
              >
              <td>
              <LottieAnimation  animation={feedback_logo} style={{ width: "50px", height: "30px" }} autoplay loop></LottieAnimation>
                </td>
                <td>
                Feedback
                </td>
              </Nav.Link>
            </Nav.Item>

        {/*     <Nav.Item>
              <Nav.Link
                href="https://blogs.-jit.tech/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/it4419/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
*/}
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
