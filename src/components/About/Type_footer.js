import React from "react";
import Typewriter from "typewriter-effect";

function Type_footer() {
  return (
    <Typewriter
      options={{
        strings: [
          "அன்பே சிவம் ",
         "Hire me Now!!",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
      }}
    />
  );
}

export default Type_footer;
