import Hero from "@/components/hero/Hero";
import LayananSection from "@/components/layanan/LayananSection";
import TentangSection from "@/components/tentang/TentangSection";
import TestimoniSection from "@/components/testimoni/TestimoniSection";

export default function Home() {
  return(
    <div className="container">
      <main>
        <Hero/>
        <TentangSection/>
        <LayananSection/>
        <TestimoniSection/>
      </main>
    </div>
  );
}