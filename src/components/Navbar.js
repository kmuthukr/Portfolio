import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/79509-campervan-ignite-animation.json";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { BiShoppingBag } from "react-icons/bi";

import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiFillContacts,
} from "react-icons/ai";
import { FcAbout } from "react-icons/fc";

import { MdFeedback } from "react-icons/md";

import { CgFileDocument } from "react-icons/cg";
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
        <LottieAnimation  animation={logo}  style={{ width: "300px", height: "100px" }} autoplay loop></LottieAnimation>
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
              <LottieAnimation  animation={hireme} style={{ width: "60px", height: "80px" }} autoplay loop></LottieAnimation>
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
                href="https://blogs.soumya-jit.tech/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/soumyajit4419/Portfolio"
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
