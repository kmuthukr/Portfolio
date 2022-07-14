import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Footer from "../Footer";
import { LottieAnimation } from "react-lottie-tools";
import Tilt from "react-parallax-tilt";
import Popup from "./Popup";
import {useState} from 'react';
import { Container } from "react-bootstrap";
import MinorProjPopup_1 from "./MinorProjPopup_1";
import MinorProjPopup_2 from "./MinorProjPopup_2";
import MinorProjPopup_3 from "./MinorProjPopup_3";
import MinorProjPopup_4 from "./MinorProjPopup_4";
import dtls from "../../Assets/Projects/dtls.png";

function ProjectCards(props) {

return (
    <Container>

    <Card className="project-card-view">




    <Button style={{fontSize:12}}target="_blank" href={props.subLink}>
          
          {props.subtitle }
        </Button>


      <Tilt>
      {props.title == 'Minor academic projects' ?
      <LottieAnimation  animation={props.imgPath}  style={{ paddingRight:"20",width: "350px", height: "100px" }} autoplay loop></LottieAnimation>
      :<LottieAnimation  animation={props.imgPath}  style={{ paddingRight:"20",width: "375px", height: "200px" }} autoplay loop></LottieAnimation>}
      </Tilt>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      {/**   <Card.Text style={{ textAlign: "justify",fontSize:'15px' }}>
          {props.description}
        </Card.Text>
      */} 
      {props.title == 'Minor academic projects' ?
        <div>
        <MinorProjPopup_1/>
        <MinorProjPopup_2/>
        <MinorProjPopup_3/>
        <MinorProjPopup_4/>
        </div>
      :
      <Popup 
          description_1={props.description_1} 
          description_2={props.description_2} 
          description_3={props.description_3} 
          description_4={props.description_4} 
          description_5={props.description_5}
          description_6={props.description_6}
          link={props.ghLink}
          />
      }

        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "More Info"}
        </Button>
        

        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
          
        )}
      </Card.Body>

    </Card>
    <br/>
    <br/>
        </Container>
  );
}
export default ProjectCards;
