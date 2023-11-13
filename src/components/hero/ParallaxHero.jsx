"use client";
import Hero from "@/components/hero/Hero";
import Image from "next/image";
import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

const ParallaxHero = () => {
  const parallax = useRef(null);
  return (
    <Parallax ref={parallax} pages={3}>
      <ParallaxLayer
        offset={0.3}
        speed={-0.8}
        sticky={{ start: 0.5, end: 1 }}
        s
      >
        <h1 className="text-red-500 text-center text-9xl">Hi I am zizo</h1>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={1}
        style={{ backgroundColor: "#83A2FF" }}
      />
      <ParallaxLayer
        offset={0.8}
        speed={5}
        style={{ backgroundColor: "#B4BDFF" }}
      />

      <ParallaxLayer offset={0.3} speed={-0.5} className="ml-40">
        <Image src={"/cloud.png"} width={200} height={100} />
      </ParallaxLayer>
    </Parallax>
  );
};

export default ParallaxHero;
