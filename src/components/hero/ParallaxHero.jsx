"use client";

import Image from "next/image";
import React, { useRef } from "react";
import MenuLinks from "./MenuLinks";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

const ParallaxHero = () => {
  const parallax = useRef(null);
  return (
    <Parallax ref={parallax} pages={3}>
      <ParallaxLayer offset={2} speed={0.2} className="z-20">
        <MenuLinks />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.2} className="z-20">
        <Image
          src={"/pixel/greetings.gif"}
          priority={true}
          width={500}
          height={500}
          className=" mx-auto"
        />
      </ParallaxLayer>

      {/*Night mode*/}

      <ParallaxLayer
        priority={true}
        offset={0}
        speed={-0.4}
        className=" hidden dark:block z-10"
      >
        <Image
          priority={true}
          src={"/home/moon.png"}
          width={600}
          height={600}
          className=" mx-auto"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1} className=" hidden dark:block z-10 ">
        <Image
          priority={true}
          src={"/home/dcloud2.png"}
          width={1000}
          height={1000}
          className=" mx-auto"
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={0.9}
        speed={1.5}
        className=" hidden dark:block z-10 "
      >
        <Image
          priority={true}
          src={"/home/dcloud1.png"}
          width={1000}
          height={1000}
          className=" mx-auto"
        />
      </ParallaxLayer>

      {/*Light Mode*/}

      <ParallaxLayer offset={0} speed={-0.4} className=" dark:hidden">
        <Image
          priority={true}
          src={"/home/sun.png"}
          width={400}
          height={400}
          className=" mx-auto "
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1} className=" dark:hidden z-10 ">
        <Image
          priority={true}
          src={"/home/clouds.png"}
          width={1000}
          height={1000}
          className=" mx-auto"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0.9} speed={1.5} className=" dark:hidden z-10 ">
        <Image
          priority={true}
          src={"/home/clouds2.png"}
          width={1000}
          height={1000}
          className=" mx-auto"
          alt="clouds"
        />
      </ParallaxLayer>
    </Parallax>
  );
};

export default ParallaxHero;
