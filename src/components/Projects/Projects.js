import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import textchat from "../../Assets/Projects/textchat.png";
import emotion from "../../Assets/Projects/emotion.png";
import lucid from "../../Assets/Projects/lucid.png";
import dtls from "../../Assets/Projects/dtls.png";
import suicide from "../../Assets/Projects/suicide.png";
import cloud from "../../Assets/Projects/cloud.png";
import { LottieAnimation } from "react-lottie-tools";
import instagram from '../../Assets/99618-instagram.json';
import Card from "react-bootstrap/Card";

import dtls_encryption from '../../Assets/70058-sha-256-encryption.json';
import cloud_anime from '../../Assets/97685-cloud-animation.json';
import voice_assistant_anime from '../../Assets/voice_assistant.json';
import lucid_anime from '../../Assets/91471-mobile-app-process.json';
import academic_anime from '../../Assets/63553-merk-academy.json';
import chat_anime from '../../Assets/27649-lets-chat.json';
import Popup from "./Popup";
import {useState} from 'react';
import Button from "react-bootstrap/Button";


function Projects() {
 // const [buttonPopup,setButtonPopup]=useState(false);
 const [modalOpen, setModalOpen] = useState(false);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional & Academic Project <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is a little insight into the projects I was invovled during my professional stint.
        </p>
        <br/>
        <br/>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            
            <ProjectCard
              imgPath={dtls_encryption}
              isBlog={false}
              title="DTLS encryption"
              description_1="• DTLS based End-to-End Security Architecture."
              description_2="• Reonsible for the implementation of a proprietary Full Software Native Encryption system with DTLS, SSL protocols for securing network communications"
              description_3="• Hands-on experience over using openSSL libraries"
              description_4="• Extensive knowledge working with X.509 certificates and PKI infrastructure"
              description_5=""
              description_6="• DTLS based End-to-End Security Architecture."
              description_7="• Reonsible for the implementation of a proprietary Full Software Native Encryption system with DTLS, SSL protocols for securing network communications"
              description_8="• Hands-on experience over using openSSL libraries"
              description_9="• Extensive knowledge working with X.509 certificates and PKI infrastructure"
              description_10=""
              ghLink="https://www.al-enterprise.com/-/media/assets/internet/documents/omnipcx-enterprise-communication-server-datasheet-en.pdf"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloud_anime}
              isBlog={false}
              title="Cloud migration of legacy PABX"
              description_1="Cloud deployment of the OmniPCX Enterprise Communication Server (CS) • Part of a team involved in deployment of the PABX system over Cloud providing Infrastructure as a Service in a private cloud environment.• Instrumental in the integration of the cloud infrastructure into existing, traditional IT operations management processes as needed. Continuous efforts to provide standards-based solution optimized for multi-site and distributed environments, providing advanced services. Practical knowledge over CloudForm - an Infrastructure Management Platform."
              ghLink="https://www.al-enterprise.com/en/solutions/cloud-communications"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={voice_assistant_anime}
              isBlog={false}
              title="QuickText AI voice assistant"
              description_1="Cloud deployment of the OmniPCX Enterprise Communication Server (CS) • Part of a team involved in deployment of the PABX system over Cloud providing Infrastructure as a Service in a privatervices. Practical knowledge over CloudForm - an Infrastructure Management Platform.
              "
              ghLink="https://www.al-enterprise.com/en/company/news/ale-quicktext-partnership-2019"
             // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lucid_anime}
              isBlog={false}
              title="LUCID vending - Android/ios app"
              description_1="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://drive.google.com/drive/folders/1D7rlnQXnYY9jh4x7wjO_VN6BPxRwnAZn?usp=sharing"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat_anime}
              isBlog={false}
              title="Text-Chat Application"
              description_1="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/kmuthukr/Text_char_application"
             // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={academic_anime} 
              isBlog={false}
              title="Minor academic projects"
              ghLink="https://www.al-enterprise.com/-/media/assets/internet/documents/omnipcx-enterprise-communication-server-datasheet-en.pdf"
              //demoLink="https://chatify-49.web.app/"
            />

          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink=""
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
