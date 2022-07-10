import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "a Software Developer",
          "possess a quality experience in application design & development",
          "Currently I am pursuing my Master's degree in  Computer Science & Engineering from University @ Buffalo",
          ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;
