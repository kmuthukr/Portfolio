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

function Projects() {
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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dtls}
              isBlog={false}
              title="DTLS encryption"
              description="DTLS based End-to-End Security Architecture• Responsible for the implementation of a proprietary Full Software Native Encryption system with DTLS, SSL protocols for securing network communications• Hands-on experience over using openSSL libraries• Extensive knowledge working with X.509 certificates and PKI infrastructure"
            //  ghLink="https://github.com/soumyajit4419/Chatify"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloud}
              isBlog={false}
              title="Cloud migration of legacy PABX"
              description="Cloud deployment of the OmniPCX Enterprise Communication Server (CS) • Part of a team involved in deployment of the PABX system over Cloud providing Infrastructure as a Service in a private cloud environment.• Instrumental in the integration of the cloud infrastructure into existing, traditional IT operations management processes as needed. Continuous efforts to provide standards-based solution optimized for multi-site and distributed environments, providing advanced services. Practical knowledge over CloudForm - an Infrastructure Management Platform.
              "
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloud}
              isBlog={false}
              title="QuickText AI voice assistant"
              description="Cloud deployment of the OmniPCX Enterprise Communication Server (CS) • Part of a team involved in deployment of the PABX system over Cloud providing Infrastructure as a Service in a private cloud environment.• Instrumental in the integration of the cloud infrastructure into existing, traditional IT operations management processes as needed. Continuous efforts to provide standards-based solution optimized for multi-site and distributed environments, providing advanced services. Practical knowledge over CloudForm - an Infrastructure Management Platform.
              "
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lucid}
              isBlog={false}
              title="LUCID vending - Android/ios app"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textchat}
              isBlog={false}
              title="Text-Chat Application"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
