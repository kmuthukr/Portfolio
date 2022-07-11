import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "This website is built to serve as my professional portfolio",
          "You can find some basic information regarding my technical capabilities for your assessment",
          "please scroll down to know more",
          ],
        autoStart: true,
        typeSpeed:200,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;
