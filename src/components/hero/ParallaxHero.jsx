"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

const ParallaxHero = () => {
  const parallax = useRef(null);
  return (
    <Parallax ref={parallax} pages={2}>
      {/*cloud*/}
      <ParallaxLayer offset={0} speed={-0.5} className="z-30">
        <Image
          src={"/cloud.png"}
          width={250}
          height={50}
          className=" absolute left-10"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0.5} speed={0.5} className="z-30">
        <Image
          src={"/cloud.png"}
          width={250}
          height={50}
          className=" absolute right-10"
        />
      </ParallaxLayer>

      {/*Night mode*/}
      <ParallaxLayer
        offset={0}
        speed={-0.8}
        className=" invisible dark:visible"
      >
        <Image src={"/home/stars.png"} fill={true} />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-1} className=" light:hidden">
        <Image
          src={"/home/moon.png"}
          width={400}
          height={400}
          className=" md:absolute md:left-72 md:right-56"
        />
      </ParallaxLayer>

      {/*Light Mode*/}

      <ParallaxLayer
        offset={0}
        speed={-0.5}
        className="bg-sky-300 w-full h-full dark:hidden z-10"
      >
        <div />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={-1} className=" dark:hidden z-20">
        <Image
          src={"/home/sun.png"}
          width={400}
          height={400}
          className=" md:absolute md:left-72 md:right-56 "
        />
      </ParallaxLayer>

      {/*ground*/}

      <ParallaxLayer offset={0.8} speed={-0.2} className=" z-20 ">
        <Image src={"/home/3.png"} fill={true} />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={-0.2} className=" z-30 ">
        <Image src={"/home/4.png"} fill={true} />
      </ParallaxLayer>
    </Parallax>
  );
};

export default ParallaxHero;
