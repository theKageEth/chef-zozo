"use client";
import { OrbitControls } from "@react-three/drei";

const Threejs = () => {
  return (
    <>
      <mesh position-x={-2}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color="yellow" />
      </mesh>
    </>
  );
};

export default Threejs;
