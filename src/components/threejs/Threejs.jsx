"use client";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";

extend({ OrbitControls });

const Threejs = () => {
  const { camera, gl } = useThree();

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <mesh position-x={-2}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color="green" wireframe />
      </mesh>
      <mesh position-x={2}>
        <boxGeometry />
        <meshBasicMaterial color="purple" wireframe />
      </mesh>
    </>
  );
};

export default Threejs;
