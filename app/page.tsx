import { GalaxyBg } from "@/components/GalaxyBg";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <section>
      <GalaxyBg/>
      <section className="w-full h-screen min-h-[500px] flex items-center justify-center">
        <Hero/>
      </section>
      <section className="w-full h-screen bg-neutral-950">
        <h2>Esto es un h2</h2>
      </section>
    </section>
  );
}
