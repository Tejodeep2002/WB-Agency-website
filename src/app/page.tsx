import FeedBack from "@/components/Pages/Home/FeedBack";
import Footer from "@/components/Ui/Footer/Footer";
import Gallery from "@/components/Pages/Home/Gallery";
import Hero from "@/components/Pages/Home/Hero";
import Banner from "@/components/Pages/Home/Banner";
import Services from "@/components/Pages/Home/Services";
import TagLine from "@/components/Pages/Home/TagLine";
import Navbar from "@/components/Ui/Navbar/Navbar";
import Social_carousel from "@/components/Ui/SocialPostsCorossal.tsx/Social_carousel";
import OurTeams from "@/components/Pages/Home/OurTeams";
import ContactUs from "@/components/Pages/Home/ContactUs";



export default function Home() {
  return (
    <main className="main relative w-full h-screen overflow-y-auto overflow-x-hidden z-30 scroll-smooth ">
      <Navbar />
      <Hero />
      <Banner />
      <Gallery />
      <TagLine />
      <Services />
      <OurTeams/>
      <ContactUs/>
      <FeedBack />
      <Social_carousel/>
      <Footer />
    </main>
  );
}
