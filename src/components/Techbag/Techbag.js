import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
//import Github from "./Github";
import Techstack from "./Techstack";
import Techcard from "./TechCard";
import Toolstack from "./Toolstack";
import Footer from "../Footer";

function Techbag() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px", left:100 }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Relevant Coursework & professional exposure <strong className="purple"></strong>
            </h1>
            <Techcard />
<br/><br/>
        </Row>
        <h1 className="project-heading">
           <strong className="purple">Tech Stack I am exposed to </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tech Tools</strong> I use
        </h1>
        <Toolstack />
    {/*   <Github />*/}
      </Container>
    </Container>
  );
}

export default Techbag;
