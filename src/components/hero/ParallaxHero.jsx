"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { Button } from "@nextui-org/button";
import Link from "next/link";

const ParallaxHero = () => {
  const parallax = useRef(null);
  return (
    <Parallax ref={parallax} pages={4}>
      <ParallaxLayer offset={2} speed={0.2} className="z-20"></ParallaxLayer>

      <ParallaxLayer sticky={{ start: 1.2, end: 1.8 }} className="z-20">
        <Image
          src={"/pixel/greetings.gif"}
          priority={true}
          width={400}
          height={400}
          className=" mx-auto"
        />
      </ParallaxLayer>

      <ParallaxLayer sticky={{ start: 2.5, end: 3 }} className="z-20">
        <div className="mt-20 flex items-center justify-center ">
          <Link href="/main">
            <Button
              className="bg-gradient-to-tr from-pink-500 to-blue-400 text-white shadow-lg"
              endContent={
                <Image
                  src={"/pixel/cooking.gif"}
                  priority={true}
                  width={200}
                  height={200}
                  className=" ml-10 mr-10"
                />
              }
            >
              Check what's Cooking
            </Button>
          </Link>
          <Link href="/desert">
            <Button
              className="bg-gradient-to-tr from-pink-500 to-blue-400 text-white shadow-lg"
              endContent={
                <Image
                  src={"/pixel/desert.gif"}
                  priority={true}
                  width={200}
                  height={200}
                  className=" ml-10 mr-10"
                />
              }
            >
              Desert Time!!!
            </Button>
          </Link>
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
