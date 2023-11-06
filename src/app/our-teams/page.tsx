import Hero from "@/components/Pages/our-teams/Hero";
import MainTitle from "@/components/Pages/our-teams/MainTitle";

import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Navbar/Header";
export default function OurTeams() {
  return (
    <main className="main relative w-full h-screen overflow-y-auto overflow-x-hidden z-30 bg-background2 ">
      <Header />
      <MainTitle />
      <Hero />
      <Footer />
    </main>
  );
}
