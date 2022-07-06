import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "a Software Developer",
          "possess a quality experience in application design & development",
          "Currently a Computer Science Master's student @ Buffalo University - on a active lookout for a career shift",
          ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;
