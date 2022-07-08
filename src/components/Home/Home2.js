import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import myImg from "../../Assets/avatar.svg";
import myImg from "../../Assets/2.png";

import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const styles = {
    border: '1px solid rgba(0, 0, 0, 0.05)', 
};
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A brief  <span className="purple"> INTRO </span>about me
            </h1>
            <p className="home-about-body">
              Received my bachelor's degree in Information Technology in 2015 from Anna University,India , started my professional carrier as a Software developer in Tata Consultancy Services,Chennai. <br/><br/>Over the span of 6 years I was predominantly invovled in application devleopment and enhancement for the telecom products like PABX and related firmwares… 🤷‍♂️
              <br />
              <br />I possess a very good practical knowledge & experience in Object Oriented Programming with a good fluency in classics like
              <i>
                <b className="purple"> C, C++ and Python, Javascript, React JS/ React-Native, nodeJS .</b>
              </i>
              <br />
              <br />
              Currently I am pursuing my Post Graduate degree(Master's in Computer Science) in University @ Buffalo,New York and expected to graduate by Dec 2022. &nbsp;
              <i>
                <br/><br/>
                <b className="purple">I am available for the job market and on a active lookout for Software Developement Engineer(SDE) roles. </b>
                {" "}
                <b className="purple">You can find my association with relevant Tool and Tech stacks in <a href="/about" target="_blank"
                  rel="noreferrer">this</a> page.
                </b>
              </i>
              <br />
              <br />
             
          
              Other irrelevant information about myself -  
              <br/> - easy-going.
              <br/> - a moviebuff.
              <br/> - more interested in Geo-politics than CODING.
              <br/> - plays soccer -  represented my past instituitions at various level.
              <br/> - always striving to protect family values.
              <br/> - SPIRITUAL but not RELIGIOUS.
             </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row fluid className="education-section">
        <h1 style={{ fontSize: "2.6em",color:'white' }}>
              Educational Background
            </h1>
        <table border = "3" style={{ fontSize: "1.0em",color:'white',borderStyle:'double' }} >
         <tr style={{ fontSize: "1.3em",color:'purple', borderStyle:'double' }}>
            <th>Graduation</th>
            <th>Degree</th>
            <th>Instituition</th>
            <th>City,Country</th>
            <th>GPA(on scale of 4.00)</th>
         </tr>
         
         <tr>
            <td>2011</td>
            <td>Highschool</td>
            <td>Sri Vijay Vidyalaya Higher secondary school</td>
            <td>Hosur, India</td>
            <td>4.00</td>
         </tr>
         <tr>
            <td>2015</td>
            <td>Bachelor of Technology (Information Technology)</td>
            <td>Thiagarajar College of Engineering, Anna University</td>
            <td>Madurai, India</td>
            <td>3.33</td>
         </tr>
         <tr>
            <td>2022(expected)</td>
            <td>Master of Science (Computer Science & Engineering)</td>
            <td>State University of New York</td>
            <td>Buffalo, USA</td>
            <td>3.16 </td>
         </tr>
      </table>
        </Row>
        <Row>
        <h1 style={{ fontSize: "2.6em" ,color:'white'}}>
            Work Experience
            </h1>
            <p style={{ fontSize: "1.0em",color:'white'}}>
            I started my professional carreer as a Software Developer for <a href="https://en.wikipedia.org/wiki/Tata_Consultancy_Services" target="_blank"> 
Tata Consultancy Services,</a> <a href="https://en.wikipedia.org/wiki/Chennai" target="_blank">Chennai</a>, <a href="https://en.wikipedia.org/wiki/India" target="_blank">India. </a><br/>
I was a Software Developer assigned to the Research & Development wing of a French global Telecommunication organisation Alcatel-Lucent Enterprises for building and maintaining of their legacy PABX system
I learnt the art of function oriented & Object oriented approaches for application development through various development stints in my association with Alcatel Lucent Enterprises.<br/>Was involved majorly with the development of new features for the PABX system pertaining to clients requirements.
Gained knowledge about cloud and latest security enhancements in applciation when the I was part of the team involved with migration of legacy PSBX into more business avaialble cloud infrastructure with advances SSL/DTLS features to ensure the state of the art encryption especially for the customers in defence and administration sectors.
 After spending a substantial amount of years in  application development mainly in telecom domain , I wanted to further my interest in Software development by training under a better if not the best environment.Also I wished to have a big shift in my career.Hence I decided to pursue my Master's degree in Computer Science and joined University @ Buffalo, New York on the Fall of 2021.

            </p>

        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Let's Talk</h1>
            <p>
              reach   <span className="purple">me </span>through
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kmuthukr?tab=projects&type=beta"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
        {/*       <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/krishnakumar-muthukrishnan-13a98b69/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/krishhlive/?viewas=100000686899395&show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_transition=0&show_community_review_changes=0&show_follower_visibility_disclosure=0"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  >
                    <AiFillFacebook/>
                  </a>
                  </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/krishhlive/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}


export default Home2;
