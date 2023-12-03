"use client";

import { Canvas } from "@react-three/fiber";

import Threejs from "./Threejs";

const Scene = () => {
  return (
    <div className=" w-screen h-1/2 ">
      <Canvas>
        <Threejs />
      </Canvas>
    </div>
  );
};

export default Scene;
