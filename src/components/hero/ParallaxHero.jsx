"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import ModalHome from "./ModalHome";

const ParallaxHero = () => {
  const parallax = useRef(null);
  return (
    <Parallax ref={parallax} pages={2.5}>
      <ParallaxLayer offset={2} speed={0.2} className="z-20"></ParallaxLayer>

      <ParallaxLayer offset={1} speed={-0.2} className="z-20">
        <div className="flex items-center justify-center h-full">
          <Image
            src={"/pixel/greetings.gif"}
            priority={true}
            width={400}
            height={400}
            className="ml-4"
          />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1.8} speed={0.5} className="z-20">
        <div className="flex items-center justify-center h-full">
          <ModalHome className="mx-auto" />
        </div>
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
