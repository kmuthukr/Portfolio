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
import voice_assistant_anime from '../../Assets/65878-loading.json';
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
              description_2="• Involved in the implementation of a proprietary Full Software Native Encryption Client/device confidentiality
(signaling protocol and media)system with DTLS 1.2 with AES 256 and SRTP with AES 128"
			        description_3="• 100% software based security native implementation replacing the HSMs(Hardware Security Modules)"
              description_4="• Gained a good hands-on working experience over using openSSL libraries, X.509 certificates and PKI infrastructure over the existing application design."			  
              description_5="• I was involved in the development activity focussed towards making the main CS(Call Server) design scalable to support more active users at any given time under a single CS.Extensively involved in the traffic benchmarking for the product under different architecural configurations and fine tuning the application code to reach the benchmark "
              description_6="• This benchmarking involved several fine tuning of the configurations in the architecture level and memory management at the application level."
              subtitle="Tata Consultancy Services - Alcatel Lucent Enterprises"
              subLink="https://www.tcs.com/tcs-helps-alcatel-lucent-enterprise-digitally-transform-customer-experience"
              ghLink="https://www.al-enterprise.com/-/media/assets/internet/documents/omnipcx-enterprise-communication-server-datasheet-en.pdf"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloud_anime}
              isBlog={false}
              title="Cloud migration of legacy PABX"
              subtitle="Tata Consultancy Services - Alcatel Lucent Enterprises"
              subLink="https://www.tcs.com/tcs-helps-alcatel-lucent-enterprise-digitally-transform-customer-experience"
              description_1="• With the demand for remote working capability and minimised site dependancy growing, the product that I was working for provides a flexible offer for setup and usage via on-premises, hybrid or full cloud offer."
              description_2="• Advent of IP and virtualization facilitated the service providers to invests in a virtualized data center, negating the need for the individual enterprise to do so, and offers a more flexible consumption model called UCaaS."              
			        description_3="• Unified Communications as a Service is a model that allows companies to move from capital investment (CapEx) to an operating cost (OpEx) model.With this the product was provided to the client as a SaaS."
              description_4="• One sub feature in the wide cloud model is the LICENSING MECHANISM and I worked on the implementations to maintain, validate and perform periodic license checks for the products deployed by the client through by establishing communication with the cloud servers."
			        description_5="• I had a good exposure to the AWS environment where the servers were deployed."
			        description_6="• The development activities were done in C++ with extensive usage of the XMPP protocol for instant secure communication to work over the Linux platform."
			        ghLink="https://www.al-enterprise.com/en/solutions/cloud-communications"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={voice_assistant_anime}
              isBlog={false}
              title="v4<==>v6 signaling translator"
              subtitle="Tata Consultancy Services - Alcatel Lucent Enterprises"
              subLink="https://www.tcs.com/tcs-helps-alcatel-lucent-enterprise-digitally-transform-customer-experience"
              description_1="• Linux kernel version below 2.6 doesn't support the handling of ipv6 addresses.Hence inorder to support the ipv6 end points an alternative mechanism for the server boards needs to be built to convert ipv4 to ipv6 message and vice versa."
              description_2="• To solve this objective a signalling translator was built from the scratch with C/C++ and Bash scripting as the backbone to run over the Linux Operating system.Application was designed to run over a virtualized environment(likes of VmWare,KVM,HyperV..."
              description_3="• I was part of the team that was involved in this development and maintenance thereon"
              description_4="• Exposure from this developemnt activity has provided more knowledge on the development of a large scale application from the scratch and the itenaries involved in such process."
              description_5="• The link provided in ;MoreInfo' tab is the most publicly available information about the product."
              ghLink="https://www.al-enterprise.com/es-es/-/media/assets/internet/documents/sa-c0061-information-on-spectre-and-meltdown.pdf"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lucid_anime}
              isBlog={false}
              title="LUCID vending - Android/ios app"
              subtitle="Buffalo University-Computer Science & Engineering"
              subLink="https://engineering.buffalo.edu/computer-science-engineering.html"
              description_1="• This team project was done as part of the Master's project requirement for an external client whose requirement was to build a mobile applications which serves multiple business plans w.r.t the Vending Machines."
              description_2="• Most of the vending machines across the world right now doesnt offer contactless online payment mode.Payment has to be through either cash or card.To leverage the business opportunity here the requirements were - ability to scan QR code from vending machine and pay for the product online, ability for the users to create an account for themselves , subscribe to a membership plan, enjoy promotional contents depending on their subscription, and product promotion from the sellers."              
			        description_3="• Tech stack included React-Native,Tailwind CSS, Javascript, Firebase, StripeJS for payment related functionalities."
              description_4="• React-native was chosen since it offered easy portability between Android an IOS builds."
			        description_5="The basic application enlisting signup,login,susbcription mechanism, promotional content delivery, scan & pay options is built and handedover to the client.After further enhancements in the coming days it will be hosted on the playstore"
              description_6="Find the apk file for tryout in the MoreInfo tab."
              ghLink="https://drive.google.com/drive/folders/1D7rlnQXnYY9jh4x7wjO_VN6BPxRwnAZn?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat_anime}
              isBlog={false}
              title="Text-Chat Application"
              subtitle="Buffalo University-Computer Science & Engineering"
              subLink="https://engineering.buffalo.edu/computer-science-engineering.html"
              description_1="• As an academic project designed a full fledged Server-Client chat application using C++ and prominant networking protocols like TCP,UDP"			  
              description_2="• This web application contains almost all the features to serve as a miniature equivalent of a Whatsapp Web."
      			  description_3="• Clients can send messages to multiple clients, can do a broadcast, can block/unblock the users, offline buffering of messages to be sent when the client is back online,ability to send files other than texts and so on."
        		  description_4="• CPP data structures like arrays,lists and pointer manipulations prominantly leveraged to achieve the goal here."			  
              description_5=""
              description_6=""
              ghLink="https://github.com/kmuthukr/Text_char_application"
             // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={academic_anime} 
              isBlog={false}
              title="Minor academic projects"
              subtitle="Buffalo University-Computer Science & Engineering"
              subLink="https://engineering.buffalo.edu/computer-science-engineering.html"
            />

          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
