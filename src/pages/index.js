import Hero from "@/components/hero/Hero";
import Navigation from "@/components/navigation/Navigation";

export default function Home() {
  return(
    <div className="container">
      <header>
        <Navigation/>
      </header>
      <main>
        <Hero/>
      </main>
    </div>
  );
}