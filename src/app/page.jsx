import ParallaxHero from "@/components/hero/ParallaxHero";
import Scene from "@/components/threejs/Scene";

export default function Home() {
  return (
    <div>
      <section className="overflow-y-auto h-screen">
        <ParallaxHero />
      </section>
    </div>
  );
}
