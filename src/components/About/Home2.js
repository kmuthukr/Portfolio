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
import { LottieAnimation } from "react-lottie-tools";
import send from '../../Assets/11143-sending-mail.json';
import facebook from '../../Assets/97580-facebook.json';
import instagram from '../../Assets/99618-instagram.json';
import linkedin from '../../Assets/99032-linkedin.json';
import github from '../../Assets/lf30_editor_zpciz3zg.json';

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
              <span className="purple"> About Me </span>
            </h1>
            <p className="home-about-body">

                My name is Krishna and I was born in 1993. I am a software developer specialized in backend applications. I did my schooling and acquired my undergrad degree in Tamilnadu,India. I started my professional career in 2015 and acquired a quality knowledge and expertise in this field over time.I want this page to be a "not-so-formal" description of who I am, my main skills and why I think I am a competent software engineer and why you should hire me. For a more formal introduction, you can download my <a target="_blank" href="http://localhost:3000/Portfolio#/resume">résumé.</a>
                <br/>
                <br/>
                Software quality, scalability and Service Oriented Architecture are subjects that fascinate me. I do my best to improve myself in these fields but I also try to open my perspective to other emerging domains like Artifical Intelligence and Parallel Computing.
                Generally speaking, I love working and sharing on topics related to software architecture and software quality. I like to see myself as a passionate developer, an Open Source enthusiast and an eternal learner.


              <br />
              <br />
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
        <span className="purple"> Educational Background</span>
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

          <h1 style={{ fontSize: "2.6em" ,color:'white',textAlign:'left'}}>
          <span className="purple"> What have I done so far?</span>
          </h1>
            <p style={{ fontSize: "1.0em",color:'white',textAlign:'justify'}}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              I started my professional carreer as a Software Developer for <a href="https://en.wikipedia.org/wiki/Tata_Consultancy_Services" target="_blank"> 
              Tata Consultancy Services,</a> <a href="https://en.wikipedia.org/wiki/Chennai" target="_blank">Chennai</a>, <a href="https://en.wikipedia.org/wiki/India" target="_blank">India. </a>
              I was a assigned to the Research & Development wing of a French global Telecommunication organisation <a target="_blank" href="https://www.al-enterprise.com/en">Alcatel-Lucent Enterprises</a> for building and maintenance of their legacy <a target="_blank" href="https://www.al-enterprise.com/en/products/platforms/omnipcx-enterprise-communication-server">PABX </a>system.
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;
              I learnt the art of function oriented & Object oriented approaches for application development under <a target="_blank" href="https://www.tutorialspoint.com/sdlc/sdlc_waterfall_model.htm">Waterfall</a> & <a target="_blank" href="https://www.tutorialspoint.com/agile/index.htm">agile</a> workflow model through various development stints in my association with Alcatel Lucent Enterprises where I was involved majorly with the development of new telephony features for the PABX system pertaining to clients requirements.
              Gained knowledge about cloud and latest security enhancements in applciation when the I was part of the team involved with migration of legacy PABX into more business avaialble cloud infrastructure with advanced <a target="_blank" href="https://www.ssl.com/faqs/faq-what-is-ssl/">SSL</a>, <a target="_blank" href="https://en.wikipedia.org/wiki/Datagram_Transport_Layer_Security">DTLS </a>features to ensure the state of the art encryption especially for the customers in Defence and Administration sectors.
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;
              After spending a substantial amount of years in  application development mainly in telecom domain , I wanted to further my interest in Software development by training under a better if not the best environment and make a big shift in my career.Hence I decided to pursue my Master's degree in Computer Science and joined University @ Buffalo, New York on the Fall of 2021.
            </p>

        </Row>
{/*********************************************************************************************************************** */}

        <Row>

          <h1 style={{ fontSize: "2.6em" ,color:'white',textAlign:'left'}}>
          <span className="purple"> What am I doing now?</span>
          </h1>
            <p style={{ fontSize: "1.0em",color:'white',textAlign:'justify'}}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              I started my Computer Science Master's program  at the <a target="_blank" href="https://www.buffalo.edu/?gclid=Cj0KCQjwzqSWBhDPARIsAK38LY8pH2Y_C-NxA96b2C_i_sqTHdoxOhae3lK64zfFLdpaHE7EVwiPmlUaAvCsEALw_wcB" >State University of New York</a> @ Buffalo, USA during Fall 2021 when the world started to resume it's normal activities after a standstill introduced by COVID-19 pandemic. my professional carreer as a Software Developer for <a href="https://en.wikipedia.org/wiki/Tata_Consultancy_Services" target="_blank"> 
              Tata Consultancy Services,</a> <a href="https://en.wikipedia.org/wiki/Chennai" target="_blank">Chennai</a>, <a href="https://en.wikipedia.org/wiki/India" target="_blank">India. </a>
              I was a assigned to the Research & Development wing of a French global Telecommunication organisation <a target="_blank" href="https://www.al-enterprise.com/en">Alcatel-Lucent Enterprises</a> for building and maintenance of their legacy <a target="_blank" href="https://www.al-enterprise.com/en/products/platforms/omnipcx-enterprise-communication-server">PABX </a>system.
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;
              I learnt the art of function oriented & Object oriented approaches for application development under <a target="_blank" href="https://www.tutorialspoint.com/sdlc/sdlc_waterfall_model.htm">Waterfall</a> & <a target="_blank" href="https://www.tutorialspoint.com/agile/index.htm">agile</a> workflow model through various development stints in my association with Alcatel Lucent Enterprises where I was involved majorly with the development of new telephony features for the PABX system pertaining to clients requirements.
              Gained knowledge about cloud and latest security enhancements in applciation when the I was part of the team involved with migration of legacy PABX into more business avaialble cloud infrastructure with advanced <a target="_blank" href="https://www.ssl.com/faqs/faq-what-is-ssl/">SSL</a>, <a target="_blank" href="https://en.wikipedia.org/wiki/Datagram_Transport_Layer_Security">DTLS </a>features to ensure the state of the art encryption especially for the customers in Defence and Administration sectors.
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;
              After spending a substantial amount of years in  application development mainly in telecom domain , I wanted to further my interest in Software development by training under a better if not the best environment and make a big shift in my career.Hence I decided to pursue my Master's degree in Computer Science and joined University @ Buffalo, New York on the Fall of 2021.
            </p>

        </Row>
{/*********************************************************************************************************************** */}
        <Row>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <p>
            <h1 style={{ fontSize: "2.6em",textAlign:'left'}}>
              <span className="purple"> What I am looking for </span>
            </h1>
                Challenge motivates me. Even if I have mainly worked on PHP and Ruby applications, I crave opportunities to discover new technologies and concepts.
                I love learning. If you use programming languages or tools that I have not already mastered, I probably already heard about it and I definitely am confident that I can quickly become proficient with it.
                I am interested in various topics. Pure development, architecture and clean code, scalability and performance concerns, monitoring and SRE are all topics that I am interested in. And there are a lot more!
           
            </p>
          </Col>
        </Row>

{/*********************************************************************************************************************** */}
        <Row>
          <Col md={8} className="home-about-description">
            <p>
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> I know things</span>
            </h1>
                I am a great developer. I am efficient with PHP and I know its ecosystem pretty well. Regexes don't frighten me and neither do tricky SQL requests or an obscure server configuration. My code is clean, tested and meant to be readable by humans. In addition to PHP, I know my way around Ruby and Bash and I have played with Python, Go and I am interested by Rust.
                I am curious. When I find something interesting or curious, I take the time to investigate it. That's how I found out why PHP's uniqid() function is "slow".
                I am not afraid of specs/RFCs. My knowledge of the Onix standard and my contributions to TEA's e-book metadata server should be enough to prove it. From time to time, I also refer to RFCs like the RFC 7231, the RFC 7807 and even the RFC 2324
                I deliver. I know how to work with a team to do the required job within the schedule. I can deal with evolving requirements and I coordinate with other teams when necessary.

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>


{/*********************************************************************************************************************** */}
        <Row>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <p>
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple">I do things</span>
            </h1>
                I had various roles. Depending on the team and the project's needs, I can play different roles. Developer, lead developer, architect, even "occasional sysadmin" or interviewer for potential new colleagues if needed. 
                I am not just a developer. One of the greatest way to learn is to share our knowledge. That's one of the reasons why I take a great pleasure when I mentor junior developers, help my colleagues or teach to students.
                I communicate well. Don't see me as the developer writing code alone in his room. I do not hide myself behind a dark screen full of green symbols, quite the opposite. I can be found giving presentations to my colleagues, more formal talks in conferences, … I also am an adept of pair programming and code reviews. In all these occasions, but also for written exchanges, I always try to be precise, diplomatic and honest.
                I contribute to Open-Source software. I created RulerZ, maintained VichUploaderBundle for some years and made contributions to countless projects such as Kibana, PHP-CS-Fixer, phpsa, dnsdock, …

            </p>
          </Col>
        </Row>


{/*********************************************************************************************************************** */}
        <Row>
          <Col md={8} className="home-about-description">
            <p>
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple">I'm a nice person</span>
            </h1>
                I am pragmatic. Don't worry, I wont be the one making a tantrum because we are not using the latest shiny tool or trendy technology. I take the time to think about what problem the team is trying to solve and the context of the project to formulate an opinion.
                I have a life outside of work and other interests than software engineering so I play well even with non-technical people and I don't always talk about work.
                My colleagues like working with me. I am calm even under stress, joyful, often making puns, not easily offended and I will not try to convert you to VIM. I swear.

                Interested? Have some questions? Contact me at contact@kevingomez.fr.
                Or find out more about my previous positions by reading my résumé.

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>


{/*********************************************************************************************************************** */}




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
                 // className="icon-colour  home-social-icons"
                >
                 <LottieAnimation  animation={github}  style={{ width: "100px", height: "100px" }} autoplay loop></LottieAnimation>
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
                 // className="icon-colour  home-social-icons"
                >
                 <LottieAnimation  animation={linkedin}  style={{ width: "100px", height: "100px" }} autoplay loop></LottieAnimation>

                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/krishhlive/?viewas=100000686899395&show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_transition=0&show_community_review_changes=0&show_follower_visibility_disclosure=0"
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
      </Container>
    </Container>
  );
}


export default Home2;
