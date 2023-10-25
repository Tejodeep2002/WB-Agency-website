import Gallery from "@/Components/Gallery";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Services from "@/Components/Services";
import TagLine from "@/Components/TagLine";

export default function Home() {
  return (
    <main className="relative w-full h-full overflow-x-hidden ">
      <Hero />
      <Gallery />
      <TagLine/>
      <Services/>
    </main>
  );
}
