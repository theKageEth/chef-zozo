"use client";

import { Canvas } from "@react-three/fiber";

import Threejs from "./Threejs";

const Scene = () => {
  return (
    <Canvas
      className="r3f"
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [-2, 1.5, 4],
      }}
    >
      <Threejs />
    </Canvas>
  );
};

export default Scene;
