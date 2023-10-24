import Gallery from "@/Components/Gallery";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";

export default function Home() {
  return (
    <main className="relative w-full h-full ">
      <Hero />
      <Gallery />
    </main>
  );
}
