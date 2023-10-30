import FeedBack from "@/components/Home/FeedBack";
import Footer from "@/components/common/Footer";
import Gallery from "@/components/Home/Gallery";
import Hero from "@/components/Home/Hero";
import Banner from "@/components/Home/Banner";
import Services from "@/components/Home/Services";
import TagLine from "@/components/Home/TagLine";
import Header from "@/components/common/Header";

export default function Home() {
  return (
    <main className="main relative w-full h-screen overflow-y-auto overflow-x-hidden z-30 ">
      <Header />
      <Hero />
      <Banner />
      <Gallery />
      <TagLine />
      <Services />
      <FeedBack />
      <Footer />
    </main>
  );
}
