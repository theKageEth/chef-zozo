"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import ModalHome from "./ModalHome";

const ParallaxHero = () => {
  const parallax = useRef(null);
  return (
    <Parallax
      ref={parallax}
      pages={3}
      className="bg-[#D7E9F7] dark:bg-[#342056]"
    >
      <ParallaxLayer offset={2} speed={0.2} className="z-20"></ParallaxLayer>

      <ParallaxLayer offset={1} speed={-0.2} className="z-20">
        <div className="flex items-center justify-center h-full">
          <Image
            src={"/pixel/greetings.gif"}
            priority={true}
            width={400}
            height={400}
            className="ml-4"
            alt="Chef zozo Birmingham greetings welcomes you to her kitchen, Iraqi and middle eastern food"
          />
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={1}
        className="z-10 bg-[#FFE3BB] dark:bg-[#515585]"
      ></ParallaxLayer>
      <ParallaxLayer offset={2.5} speed={1.5} className="z-20">
        <div className="flex items-center justify-center h-30">
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
          alt="Chef zozo Birmingham dark theme moon iraqi home cook"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1} className=" hidden dark:block z-10 ">
        <Image
          priority={true}
          src={"/home/dcloud2.png"}
          width={1000}
          height={1000}
          className=" mx-auto"
          alt="Chef zozo clouds"
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
          alt="Chef zozo Birmingham clouds"
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
          alt="Chef zozo Birmingham light theme sun iraqi home cook"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1} className=" dark:hidden z-10 ">
        <Image
          priority={true}
          src={"/home/clouds.png"}
          width={1000}
          height={1000}
          className=" mx-auto"
          alt="Chef zozo Birmingham clouds"
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
