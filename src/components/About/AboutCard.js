import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight,ImPointLeft } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I started my professional carreer as a Software Developer for <a href="https://en.wikipedia.org/wiki/Tata_Consultancy_Services" target="_blank"> 
Tata Consultancy Services,</a> <a href="https://en.wikipedia.org/wiki/Chennai" target="_blank">Chennai</a>, <a href="https://en.wikipedia.org/wiki/India" target="_blank">India. </a><br/>
I was a Software Developer assigned to the Research & Development wing of a French global Telecommunication organisation Alcatel-Lucent Enterprises for building and maintaining of their legacy PABX system
I learnt the art of function oriented & Object oriented approaches for application development through various development stints in my association with Alcatel Lucent Enterprises.Was involved majorly with the development of new features for the PABX system pertaining to clients requirements.
Gained knowledge about cloud and latest security enhancements in applciation when the I was part of the team involved with migration of legacy PSBX into more business avaialble cloud infrastructure with advances SSL/DTLS features to ensure the state of the art encryption especially for the customers in defence and administration sectors.
 After spending a substantial amount of years in  application development mainly in telecom domain , I wanted to further my interest in Software development by training under a better if not the best environment.Also I wished to have a big shift in my career.Hence I decided to pursue my Master's degree in Computer Science and joined University @ Buffalo, New York on the Fall of 2021.

 You can find a more relevant coursework details in my 
<a href="/resume" target={"_blank"}>Resume</a>. 
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
