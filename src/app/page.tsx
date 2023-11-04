import FeedBack from "@/components/Pages/Home/FeedBack";
import Footer from "@/components/common/Footer/Footer";
import Gallery from "@/components/Pages/Home/Gallery";
import Hero from "@/components/Pages/Home/Hero";
import Banner from "@/components/Pages/Home/Banner";
import Services from "@/components/Pages/Home/Services";
import TagLine from "@/components/Pages/Home/TagLine";
import Header from "@/components/common/Navbar/Header";

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
