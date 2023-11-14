"use client";
import Hero from "@/components/hero/Hero";
import Image from "next/image";
import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import MenuPar from "../cards/MenuPar";

const ParallaxMenu = () => {
  const parallax = useRef(null);
  return (
    <Parallax ref={parallax} pages={3}>
      <ParallaxLayer
        offset={0.3}
        speed={-0.8}
        sticky={{ start: 0.5, end: 1 }}
        s
      ></ParallaxLayer>
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
      <ParallaxLayer offset={0.5} speed={-0.5}>
        <MenuPar />
      </ParallaxLayer>
    </Parallax>
  );
};

export default ParallaxMenu;
