import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Thankyou() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Thankyou!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h3 className="heading-name">
                For
                <small className="main-name">spending your time on my feedback request.....</small>
              </h3>

              <div style={{ padding: 50, textAlign: "left" }}>
              </div>

          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Thankyou;
