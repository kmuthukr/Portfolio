import React from "react";
import { Col, Row } from "react-bootstrap";
import jenLogo from "../../Assets/jenkins.png";
import vmLogo from "../../Assets/vmware.png";
import puttyLogo from "../../Assets/putty.png";
import winscpLogo from "../../Assets/winscp.png";
import merLogo from "../../Assets/mercurial.png";
import remixLogo from "../../Assets/remix.png";
import gestioLogo from "../../Assets/gestio.PNG";
import {
  SiLinux,
  SiVisualstudiocode,
  SiGithub,
  SiAmazonaws,
  SiWireshark,
  SiVmware,
  SiPycharm,
  SiAnaconda,
  SiAndroidstudio,
  SiJira,
  SiSlack,
  SiMicrosoftteams,
  SiZoom,
  SiTeamviewer,
  SiMicrosoftoffice,

} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux  />
        <h6>Linux</h6>
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h6>Visual S  tudio Code</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <h6>GitHub</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <h6>Amazon Web Services</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={jenLogo}
                alt="jenkins logo"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
      <h6>Jenkins</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={vmLogo}
                alt="vmware logo"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
      <h6>VmWare ESxi</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={winscpLogo}
                alt="winscp logo"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
      <h6>WinSCP</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={puttyLogo}
                alt="putty logo"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
      <h6>Putty</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={merLogo}
                alt="mercurial logo"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
      <h6>Mercurial SCM</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={remixLogo}
                alt="remix logo"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
      <h6>Remix IDE</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={gestioLogo}
                alt="gestio logo"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
      <h6>Gestio IP</h6>
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <SiWireshark />
        <h6>Wirehsark</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
        <h6>PyCharm</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
        <h6>Anaconda</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
        <h6>Android Studio</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
        <h6>JIRA</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTeamviewer />
        <h6>TeamViewer</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiZoom />
        <h6>Zoom</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftteams />
        <h6>Microsoft Teams</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoffice />
        <h6>Microsoft Office</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <h6>Slack</h6>
      </Col> 
    </Row>
  );
}

export default Toolstack;
