"use client";
import { useTheme } from "next-themes";
import {
  Environment,
  useGLTF,
  Float,
  PresentationControls,
  ContactShadows,
  Html,
  Text,
} from "@react-three/drei";

const Threejs = () => {
  const { theme } = useTheme();
  const laptop = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  return (
    <>
      <Environment preset="city" />
      <color
        args={theme === "dark" ? ["#32407B"] : ["#F9F3DF"]}
        attach="background"
      />
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.4]}
        azimuth={[-1, 1]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={1}>
          <primitive object={laptop.scene} position-y={-1.5}>
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.55, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fzaineb.nabil.7&tabs=timeline&width=0&height=0&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" />
            </Html>
          </primitive>
          <Text
            fontSize={1}
            position={[2, 0, 0.3]}
            rotation-y={-1.25}
            maxWidth={2}
          >
            CHEF ZOZO
          </Text>
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} />
    </>
  );
};

export default Threejs;
