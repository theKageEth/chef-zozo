"use client";

import { TypeAnimation } from "react-type-animation";

const Welcome = () => {
  return (
    <div>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "We Cook Iraqi food for Ants",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "We Cook Saudi food like kabsah",
          1000,
          "We Cook Mansaf",
          1000,
        ]}
        wrapper="span"
        speed={20}
        style={{ fontSize: "3em", display: "block" }}
        repeat={0}
      />
      <TypeAnimation
        sequence={["I am Chef Zozo !!! Welcome", 1000]}
        wrapper="span"
        speed={60}
        style={{ fontSize: "2em", display: "block" }}
        repeat={Infinity}
      />
    </div>
  );
};

export default Welcome;
