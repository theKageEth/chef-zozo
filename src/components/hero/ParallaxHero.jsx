"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { Button } from "@nextui-org/button";
import Scene from "../threejs/Scene";

const ParallaxHero = () => {
  const parallax = useRef(null);
  return (
    <Parallax ref={parallax} pages={6}>
      <ParallaxLayer sticky={{ start: 2.4, end: 5 }} className="z-20">
        <Image
          src={"/pixel/greeting.gif"}
          width={200}
          height={200}
          className=" mx-auto"
        />
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 1.7, end: 2.2 }} className="mx-auto">
        <Image
          src={"/pixel/speech.gif"}
          width={200}
          height={200}
          className="mx-auto"
        />
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 4, end: 5 }} className="mx-auto">
        <Image
          src={"/pixel/speech1.gif"}
          width={200}
          height={200}
          className=" mx-auto"
        />
      </ParallaxLayer>

      {/*Night mode*/}

      <ParallaxLayer offset={0} speed={-0.6} className=" hidden dark:block">
        <Image
          src={"/home/moon.png"}
          width={600}
          height={600}
          className=" mx-auto"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1} className=" hidden dark:block z-10 ">
        <Image
          src={"/home/dcloud1.png"}
          width={1000}
          height={1000}
          className=" mx-auto"
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={-0.4}
        className=" hidden dark:block z-0 "
      >
        <Image
          src={"/home/stars.png"}
          width={1500}
          height={1500}
          className=" h-screen w-screen"
        />
      </ParallaxLayer>

      {/*Light Mode*/}

      <ParallaxLayer offset={0} speed={-0.6} className=" dark:hidden">
        <Image
          src={"/home/sun.png"}
          width={400}
          height={400}
          className=" mx-auto "
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0.2} speed={1} className=" dark:hidden z-10 ">
        <Image
          src={"/home/clouds.png"}
          width={1000}
          height={1000}
          className=" mx-auto"
        />
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={-0.6} className=" dark:hidden ">
        <Scene />
      </ParallaxLayer>
    </Parallax>
  );
};

export default ParallaxHero;
