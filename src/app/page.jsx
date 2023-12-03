import ParallaxHero from "@/components/hero/ParallaxHero";
import Welcome from "@/components/text/Welcome";
import Scene from "@/components/threejs/Scene";

export default function Home() {
  return (
    <div>
      <Scene />
      <ParallaxHero />
    </div>
  );
}
