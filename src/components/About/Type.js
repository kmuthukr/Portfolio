import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "This website is built to serve as my professional portfolio built in a not-so-professional way",
          "please scroll down to know more about me",
          ],
        autoStart: true,
        Type:100,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;
