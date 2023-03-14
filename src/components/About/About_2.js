import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/2.png";
import about_me from "../../Assets/about_me.jpg";
import { ImPointRight,ImPointLeft } from "react-icons/im";

import Tilt from "react-parallax-tilt";
import { LottieAnimation } from "react-lottie-tools";
import trophy from '../../Assets/90547-trophy-animation.json';
import strategy from '../../Assets/81993-strategy.json';
import CarouselFadeExample from "../Carousal/Carousal";

const images_set_2 = [
  {
    id: '1',
    image:require("../../Assets/set2_1.jpg"),
  },
  {
    id: '2',
    image:require("../../Assets/set2_2.jpg"),
  },
  {
    id: '3',
    image:require("../../Assets/set2_3.jpg"),
  },
];

function About_2() {
  
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> About Me </span>
            </h1>
            <p>

                I am an experienced software developer interested in backend applications. I did my schooling and secured my undergrad degree in Tamilnadu,India. I started my professional career in 2015 and acquired a quality knowledge and expertise in application development over time.I want this page to be a "not-so-formal" description of who I am, my main skills and why I think I am a competent software engineer and why you should hire me. For a more formal introduction, you can download my <a target="_blank" href="https://kmuthukr.github.io/Portfolio/#/resume">résumé.</a>
                <br/>
                <br/>
                Software quality, scalability and Service Oriented Architecture are subjects that fascinate me. I do my best to improve myself in these fields but I also try to open my perspective to other emerging domains like Artifical Intelligence and Parallel Computing.
                Generally speaking, I love working and sharing on topics related to software architecture and software quality. I like to see myself as a passionate developer, an Open Source enthusiast and an eternal learner.


              <br />
              <br />
             </p>
          </Col>
          <Col md={4} className="aboutAvtar">
            <Tilt>
              <img src={about_me} className="about-img" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row fluid className="education-section">
          
        <h1 style={{ fontSize: "2.6em",color:'white' }}>
        <span className="purple"> Academic History</span>
            </h1>
        
        <table border = "3" style={{ fontSize: "1.0em",color:'white',borderStyle:'double' }} >
         <tr style={{ fontSize: "1.3em",color:'purple', borderStyle:'double' }}>
            <th>Graduation</th>
            <th>Degree</th>
            <th>Instituition</th>
            <th>City,Country</th>
            <th>***GPA***</th>
         </tr>
         


         <tr>
            <td>2023</td>
            <td>Master of Science (Computer Science & Engineering)</td>
            <td>State University of New York</td>
            <td>Buffalo, USA</td>
            <td><span className="green">3.333</span> </td>
         </tr>
         <tr>
            <td>2015</td>
            <td>Bachelor of Technology (Information Technology)</td>
            <td>Thiagarajar College of Engineering, Anna University</td>
            <td>Madurai, India</td>
            <td><span className="green">3.33</span></td>
         </tr>
         <tr>
            <td>2011</td>
            <td>Highschool</td>
            <td>Sri Vijay Vidyalaya Higher secondary school</td>
            <td>Hosur, India</td>
            <td><span className="green">4.00</span></td>
         </tr>
      </table>

        </Row>
        <Row style={{flex:'row'}}>
        <Col>
          <LottieAnimation  animation={trophy}  style={{ width: "416px", height: "550px" }} autoplay loop></LottieAnimation>
        </Col>
        <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em" ,color:'white',textAlign:'center'}}>
          <span className="purple"> What have I done so far?</span>
          </h1>
            <p style={{textAlign:'left'}} >
              <ul id="list">
                <li>&nbsp;&nbsp;Started my professional carreer as a Software Developer for <a href="https://oke.io/97IH3" target="_blank"> 
                    Tata Consultancy Services,</a> Chennai,India.
                </li>
                <br/>
                <li>&nbsp;&nbsp;I was a assigned to the Research & Development wing of a French global Telecommunication organisation <a target="_blank" href="https://www.al-enterprise.com/en">&emsp;&emsp;Alcatel-Lucent Enterprises</a> for building and maintenance of their legacy <a target="_blank" href="https://www.al-enterprise.com/en/products/platforms/omnipcx-enterprise-communication-server">PABX </a>system.
                </li>
                <br/>
                <li>&nbsp;&nbsp;I was involved in several development stints following the <a target="_blank" href="https://www.tutorialspoint.com/agile/index.htm">agile</a> work-flow model where I learnt the &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Function oriented & Object oriented approaches for application development.
                </li>
                <br/>
                <li>&nbsp;&nbsp;Some of the notable projects under my belt during this tenure are the Full Software NAtive Encryption, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Migration of the PABX systems to Cloud architecture,building support for the latest IP signalling &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;models.<a href="https://kmuthukr.github.io/Portfolio/#/project" target="_blank"><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(click here for further details)</a>
                </li>
                <br/>
                <li>&nbsp;&nbsp;I was able to learn and apply the Object oriented programming model to fit the client requirements while &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; toying around with the legacy Networking protocols like TCP/IP,UDP,HTTP,DHCP,SNMP,IPv4,IPv6,RTP,SRTP.
                </li>
                <br/>
              </ul>
            </p>
            </Col>
        </Row>
{/*********************************************************************************************************************** */}
        <Row>
        <Col md={8} className="home-about-description">

          <h1 style={{ fontSize: "2.6em" ,color:'white',textAlign:'center'}}>
          <span className="purple"> What am I doing now?</span>
          </h1>
            <p style={{textAlign:'left'}}>
              <ul id="list">
                <li id="list">&nbsp;&nbsp;I started my Computer Science Master's program  at the <a target="_blank" href="https://www.buffalo.edu/?gclid=Cj0KCQjwzqSWBhDPARIsAK38LY8pH2Y_C-NxA96b2C_i_sqTHdoxOhae3lK64zfFLdpaHE7EVwiPmlUaAvCsEALw_wcB" >State University of New York</a> @ Buffalo, USA during &emsp;&emsp;Fall 2021.
                </li>
                <br/>
                <li id="list">&nbsp;&nbsp;I did courses which introduced me formally to the world of Artificial Intelligence and Machine Learning.
                </li>
                <br/>
                <li>&nbsp;&nbsp;I did courses related to Software security,Parallel programming and Distributed processing.
                </li>
                <br/>
                <li>&nbsp;&nbsp;Few emerging and unavoidable technologies like Blockhain were also in my rooster.
                </li>
                <a href="https://kmuthukr.github.io/Portfolio/#/techbag" target="_blank"> &emsp;&emsp;(click here for complete coursework details)</a>
                <br/>
                <li>&nbsp;&nbsp;Focus was to advance myself in the latest approaches of application developement, get introduced to &emsp;&emsp;emerging technologies and most importantly experience the multi ethnic, multi national diversity that the &emsp;&emsp;education system here provides.
                </li>
              </ul>
            </p>
            </Col>
            <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
{/*********************************************************************************************************************** */}
        <Row style={{ fontSize: "1.0em" ,color:'white'}}>
        <Col>
          <LottieAnimation  animation={strategy}  style={{ width: "416px", height: "540px" }} autoplay loop></LottieAnimation>
        </Col>
        <Col md={8} className="home-about-description">
            <p>
            <h1 style={{ fontSize: "2.6em",textAlign:'center'}}>
              <span className="purple"> What I am looking for </span>
            </h1>
            <p style={{textAlign:'left'}}>
              <ul id="list">
                <li id="list">&nbsp;&nbsp;Challenge motivates me. Even if I have mainly worked on traditional backend application developement &emsp;&emsp;for some of the legacy systems in telecom domain, I crave opportunities to discover new technologies &emsp;&emsp;and concepts.
                </li>
                <br/>
                <li id="list">&nbsp;&nbsp;I love learning. If you use programming languages or tools that I have not already mastered, I probably &emsp;&emsp;already heard about it and I definitely am confident that I can quickly become proficient with it.
                </li>
                <br/>
                <li id="list">&nbsp;&nbsp;I am interested in various topics.Pure development, architecture and clean code, scalability and &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;performance concerns, monitoring and SRE are all topics that I am interested in. And there are a lot more!
                </li>
              </ul>
            </p>
            </p>
            </Col>
        </Row>

          
      </Container>
    </Container>
  );
}


export default About_2;
