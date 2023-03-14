import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { Alert } from "bootstrap";
import Thankyou from "./Thankyou";
import { LottieAnimation } from "react-lottie-tools";
import Footer from "../Footer";

import send from '../../Assets/11143-sending-mail.json';

function Feedback() {
 
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <br/>
        <br/>
        <br/>
        
        <h6 className="heading-name">
          <small className="feedback-name" > Any <a href="https://oke.io/97IH3" target="_blank">HELLO</a>feedback on the quality of the site and resume in Particular are most welcomed.</small>
        </h6>
        <br/>
      </Container>
      <div class="container">
        <form  action="https://formsubmit.co/4194498e49796f7bb2097941831b6578  " method="POST">
          <div class="form-group">
            <div class="form-row">
              <div class="col">
                <input type="text" name="name" class="form-control" placeholder="Full Name" required width={10}/>
              </div>
              <br/>
              <div class="col">
                <input type="email" name="email" class="form-control" placeholder="Email Address" required/>
              </div>
              <br/>
            </div>
          </div>
          <div class="form-group">
            <textarea placeholder="Your Message" class="form-control" name="message" rows="6" required></textarea>
          </div>
          <br/>
          <input type="hidden" name="_next" value="https://kmuthukr.github.io/Portfolio/#/thankyou"/>
          <input type="hidden" name="_template" value="table"/>
          <input type="hidden" name="_captcha" value="false"/>
          
          <button  type="submit" class="btn btn-lg btn-blue btn-block" ><LottieAnimation  animation={send}  style={{ width: "400px", height: "150px" }} autoplay loop></LottieAnimation>
          </button>
          <br/>
          <br/>
          <br/>    
        </form>
        </div>
      </section>
  );
}

export default Feedback;
