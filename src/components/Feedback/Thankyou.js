import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LottieAnimation } from "react-lottie-tools";
import mailRead from '../../Assets/77736-mail-box-animation.json';
import mailRecv from '../../Assets/11593-message-received.json';
import thankyou from '../../Assets/106462-man-holding-banner-thank-you.json';
import letterbox from '../../Assets/57435-letter-box.json';

function Thankyou() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col>
            <LottieAnimation  animation={thankyou}  style={{paddingLeft:70, width: "450px", height: "265px" }} autoplay loop></LottieAnimation>

            </Col>
            <Col>
            <br/>
            <br/>
            <br/>
            <h1 paddingRight={15}>
            {" "}Your message is &emsp;
                <span className="wave" role="img" aria-labelledby="wave">
                &emsp;&emsp;&emsp;&emsp;&emsp;RECEIVED
                </span>
                </h1>
            </Col>
            <Col>
            <LottieAnimation  animation={mailRecv}  style={{ width: "300px", height: "200px" }} autoplay loop></LottieAnimation>

            </Col>
            </Row>
            <Row>
            <br/>
            <br/>
            <br/>
            &emsp;
              <h1 >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Appreciate you taking your time to provide &nbsp; 
                <small className="main-name">this feedback.....</small>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
              </div>
          </Row>
          
        </Container>
      </Container>
    </section>
  );
}

export default Thankyou;
