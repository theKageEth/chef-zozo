"use client";

import { TypeAnimation } from "react-type-animation";

const Welcome = () => {
  return (
    <div>
      <TypeAnimation
        preRenderFirstString={true}
        sequence={[
          "Check My Instagram",
          1000,
          "Check My Instagram By Using The 3D Laptop",
          1000,
        ]}
        speed={50}
        cursor={false}
        style={{ fontSize: "2em", display: "block" }}
        repeat={Infinity}
      />
    </div>
  );
};

export default Welcome;
