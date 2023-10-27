import FeedBack from "@/Components/FeedBack";
import Footer from "@/Components/Footer";
import Gallery from "@/Components/Gallery";
import Hero from "@/Components/Hero";
import MidSection from "@/Components/MidSection";
import Services from "@/Components/Services";
import TagLine from "@/Components/TagLine";

export default function Home() {
  return (
    <main className="relative w-full h-full overflow-x-hidden ">
      <Hero />
      <MidSection/>
      <Gallery />
      <TagLine/>
      <Services/>
      <FeedBack/>
      <Footer/>
    </main>
  );
}
