import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/2.png";
import Tilt from "react-parallax-tilt";
import { LottieAnimation } from "react-lottie-tools";
import trophy from '../../Assets/90547-trophy-animation.json';
import strategy from '../../Assets/81993-strategy.json';

function About_2() {
  
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> About Me </span>
            </h1>
            <p className="home-about-body">

                I am an experienced software developer interested in backend applications. I did my schooling and secured my undergrad degree in Tamilnadu,India. I started my professional career in 2015 and acquired a quality knowledge and expertise in application development over time.I want this page to be a "not-so-formal" description of who I am, my main skills and why I think I am a competent software engineer and why you should hire me. For a more formal introduction, you can download my <a target="_blank" href="http://localhost:3000/Portfolio#/resume">résumé.</a>
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
        <span className="purple"> Academic History</span>
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
            <td>3.29 </td>
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
            <p style={{textAlign:'center'}} >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              I started my professional carreer as a Software Developer for <a href="https://en.wikipedia.org/wiki/Tata_Consultancy_Services" target="_blank"> 
              Tata Consultancy Services,</a> <a href="https://en.wikipedia.org/wiki/Chennai" target="_blank">Chennai</a>, <a href="https://en.wikipedia.org/wiki/India" target="_blank">India. </a>
              I was a assigned to the Research & Development wing of a French global Telecommunication organisation <a target="_blank" href="https://www.al-enterprise.com/en">Alcatel-Lucent Enterprises</a> for building and maintenance of their legacy <a target="_blank" href="https://www.al-enterprise.com/en/products/platforms/omnipcx-enterprise-communication-server">PABX </a>system.
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;
              I learnt the art of <span className="purple">function oriented & Object oriented </span> approaches for application development following <a target="_blank" href="https://www.tutorialspoint.com/sdlc/sdlc_waterfall_model.htm">Waterfall</a> & <a target="_blank" href="https://www.tutorialspoint.com/agile/index.htm">agile</a> workflow model through various development stints in my association with Alcatel Lucent Enterprises where I was involved majorly with the development of new telephony features for the PABX system pertaining to clients requirements.
              Gained knowledge about cloud and latest security enhancements in applciation when the I was part of the team involved with migration of legacy PABX into more business avaialble cloud infrastructure with advanced <a target="_blank" href="https://www.ssl.com/faqs/faq-what-is-ssl/">SSL</a>, <a target="_blank" href="https://en.wikipedia.org/wiki/Datagram_Transport_Layer_Security">DTLS </a>features to ensure the state of the art encryption especially for the customers in Defence and Administration sectors.
              Acquired a hands-on working experience on implementing <span className="purple">legacy protocols of the Networking world like TCP/IP,UDP,HTTP,DHCP,SNMP,IPv4,IPv6,RTP,SRTP and the fact that I was able to toy around the application of these protocols through the traditional Object Oriented Programming constructs proved to be blessing in disguise for me to explore several other domains for application development without sticking to the Telecom domain.</span>
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;
              After spending a substantial amount of years in  application development mainly in telecom domain , I wanted to further my interest in Software development by training under a better if not the best environment and make a big shift in my career.Hence I decided to pursue my Master's degree in Computer Science and joined University @ Buffalo, New York on the Fall of 2021.
            </p>
            </Col>
        </Row>
{/*********************************************************************************************************************** */}
        <Row style={{ fontSize: "1.0em" ,color:'white',textAlign:'left'}}>
            <p>
            <h1 style={{ fontSize: "2.6em" ,textAlign:'center'}}>
              <span className="purple"> I know things</span>
            </h1>
                I am a great developer. I am efficient with <span className="purple"> C,C++</span> and I know <span className="purple">Unix/Linux</span> ecosystem pretty well. Pointers don't frighten me and neither do tricky data structures or an obscure compiler configuration. My code is clean, tested and meant to be readable by humans. In addition , I know my way around frontend and virtualization environments and I have played with<span className="purple"> Python, Bash </span>and I assume myself that I am interested in Front-end development as well which you can see from the funky design of this site..
                I am curious. When I find something interesting or curious, I take the time to investigate it.
                I am not afraid of specs/RFCs.I deliver. I know how to work with a team to do the required job within the schedule. I can deal with evolving requirements and I coordinate with other teams when necessary.

            </p>
          

        </Row>
        <Row style={{ fontSize: "1.0em" ,color:'white',textAlign:'center'}}>
          <p>
            <h1 style={{ fontSize: "2.6em",textAlign:'center' }}>
              <span className="purple">I do things</span>
            </h1>
                I had various roles. Depending on the team and the project's needs, I can play different roles. <span className="purple">Developer, lead developer, even "occasional sysadmin" </span>if needed. 
                I am not just a developer. One of the greatest way to learn is to share our knowledge. That's one of the reasons why I take a great pleasure when I mentor junior developers, help my colleagues or teach to students.
                I communicate well. <span className="purple">Don't see me as the developer writing code alone in his room.</span> I do not hide myself behind a dark screen full of green symbols, quite the opposite. I can be found giving presentations to my colleagues, more formal talks in project meetings, … <span className="purple">I also am an adept of pair programming and code reviews.</span> In all these occasions, but also for written exchanges, I always try to be precise, diplomatic and honest.
                I am looking forward to be an Open-Source contributor. …

            </p>
        </Row>
        <Row>
        <Col md={8} className="home-about-description">

          <h1 style={{ fontSize: "2.6em" ,color:'white',textAlign:'center'}}>
          <span className="purple"> What am I doing now?</span>
          </h1>
            <p >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              I started my <span className="purple">Computer Science Master's </span>program  at the <a target="_blank" href="https://www.buffalo.edu/?gclid=Cj0KCQjwzqSWBhDPARIsAK38LY8pH2Y_C-NxA96b2C_i_sqTHdoxOhae3lK64zfFLdpaHE7EVwiPmlUaAvCsEALw_wcB" >State University of New York</a> @ Buffalo, USA during Fall 2021 when the world started to resume it's normal activities after a standstill introduced by COVID-19 pandemic.Getting into the boots of a student after a presumably huge gap from the prior graduation of mine was ans is really challenging given the fact that I an not as sparkling an academician as I would rate myself as a Software professional. 
              But the thrill and excitement of learning something new in a complete strange land very far away from my comfort zone keeps me ticking and helps to stay on the boots.I have had a mix of results in my grades ranging from A to C+, but even the coursework with least grade has left me with an <span className="purple"> immense learning</span> which is ultimately the goal of pursuing this degree.
              I did few courses which introduced me formally to the world of Artificial Intelligence and Machine Learning.I did courses related to <span className="purple">Software security,Parallel programming and Distributed processing.</span>Few emerging and unavoidable technologies like <span className="purple">blockhain</span> were also in my rooster.
              On the whole the focus was to advance myself in the <span className="purple">latest approaches of application developement,</span> get introduced to emerging technologies and most importantly experience the <span className="purple">multi ethnic, multi national diversity</span> that the education system here provides.
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
          <LottieAnimation  animation={strategy}  style={{ width: "400px", height: "350px" }} autoplay loop></LottieAnimation>
        </Col>
        <Col md={8} className="home-about-description">
            <p>
            <h1 style={{ fontSize: "2.6em",textAlign:'left'}}>
              <span className="purple"> What I am looking for </span>
            </h1>
                Challenge motivates me. Even if I have mainly worked on traditional backend application developement for some of the legacy systems in telecom domain, <span className="purple">I crave opportunities to discover new technologies and concepts.</span>
                I love learning. If you use programming languages or tools that I have not already mastered, I probably already heard about it and I definitely am confident that I can <span className="purple">quickly become proficient</span> with it.
                <br/>I am interested in various topics. <span className="purple">Pure development, architecture and clean code, scalability and performance concerns, monitoring and SRE </span>are all topics that I am interested in. And there are a lot more!
           
            </p>
            </Col>
        </Row>

{/*********************************************************************************************************************** */}
        

{/*********************************************************************************************************************** */}
        


{/*********************************************************************************************************************** */}
        <Row>
          <Col md={8} className="home-about-description">
          <br/><br/><br/><br/><br/><br/>
            <p>
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple">I'm a nice person</span>
            </h1>
                I am pragmatic. Don't worry, I wont be the one making a tantrum because we are not using the latest shiny tool or trendy technology. I take the time to think about what problem the team is trying to solve and the context of the project to formulate an opinion.
                I have a life outside of work and other interests than software engineering so I play well even with non-technical people and I don't always talk about work.
                My colleagues like working with me. I am calm even under stress, joyful, often making puns, not easily offended and I will not try to convert you to VIM. I swear.

                Interested? Have some questions? Contact me at contact@kevingomez.fr.
                Or find out more about my previous positions by reading my <a target="_blank" href="http://localhost:3000/Portfolio#/resume">résumé.</a>

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>


{/*********************************************************************************************************************** */}

          
      </Container>
    </Container>
  );
}


export default About_2;
