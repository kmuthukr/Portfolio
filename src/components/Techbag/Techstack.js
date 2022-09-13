import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
} from "react-icons/di";
import {
  SiFirebase,
  SiC,
  SiCplusplus,
  SiPython,
  SiGnubash,
  SiLinux,
  SiOracle,
} from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import Tilt from "react-parallax-tilt";

import solLogo from "../../Assets/solidity.png";

function Techstack() {
  return (
    
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    
      <Col xs={4} md={2} className="tech-icons">
        
        <SiC/>
        
        <h6>C</h6>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
        <h6>CPP</h6>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiPython/>
        <h6>Python</h6>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={solLogo}
                alt="Solidity logo"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
      <h6>Solidity</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h6>Javascript</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h6>NodeJS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h6>React/React-Native</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h6>Firebase</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle />
        <h6>Oracle</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash />
        <h6>GNUbash Shellscript</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6>Network & Security Protocols</h6>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons_1">
              <h7>TCP/IPv4</h7>
          </Col>
          <Col xs={4} md={2} className="tech-icons_1">
              <h7>TCP/IPv6</h7>
          </Col>
          <Col xs={4} md={2} className="tech-icons_1">
              <h7>UDP</h7>
          </Col>
          <Col xs={4} md={2} className="tech-icons_1">
              <h7>HTTP</h7>
          </Col>
          <Col xs={4} md={2} className="tech-icons_1">
              <h7>SNMP</h7>
          </Col>
          <Col xs={4} md={2} className="tech-icons_1">
              <h7>SRTP</h7>
          </Col>
          <Col xs={4} md={2} className="tech-icons_1">
              <h7>DHCP</h7>
          </Col>
          <Col xs={4} md={2} className="tech-icons_1">
              <h7>DTLS</h7>
          </Col>
          <Col xs={4} md={2} className="tech-icons_1">
              <h7>TLS/SSL</h7>
          </Col>
          <Col xs={4} md={2} className="tech-icons_1">
              <h8>IPsec</h8>
          </Col>
        </Row>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <h6>Framework/libraries/API</h6>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons_1">
              <h7>POCO</h7>
          </Col>
          <Col xs={4} md={2} className="tech-icons_1">
              <h7>MVC</h7>
          </Col>
          <Col xs={4} md={2} className="tech-icons_1">
              <h7>STL</h7>
          </Col>
          <Col xs={4} md={2} className="tech-icons_1">
              <h7>BOOST</h7>
          </Col>
          <Col xs={4} md={2} className="tech-icons_1">
              <h7>REST</h7>
          </Col>
          <Col xs={4} md={2} className="tech-icons_1">
              <h7>Django</h7>
          </Col>
          <Col xs={4} md={2} className="tech-icons_1">
              <h7>OCCI</h7>
          </Col>
          <Col xs={4} md={2} className="tech-icons_1">
              <h7>Pandas</h7>
          </Col>
          <Col xs={4} md={2} className="tech-icons_1">
              <h7>PySpark</h7>
          </Col>
          <Col xs={4} md={2} className="tech-icons_1">
              <h8>Numpy</h8>
          </Col>
          <Col xs={4} md={2} className="tech-icons_1">
              <h8>OpenMP</h8>
          </Col>
          <Col xs={4} md={2} className="tech-icons_1">
              <h8>OpenMPI</h8>
          </Col>
        </Row>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineConsoleSql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <h6>Linux Administration</h6>
      </Col>
    </Row>
  );
}

export default Techstack;
