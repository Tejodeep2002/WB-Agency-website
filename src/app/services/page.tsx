import Hero from "@/components/Pages/Services/Hero";
import MainTitle from "@/components/Ui/MainTitle";
import Navbar from "@/components/Ui/Navbar/Navbar";

import React from "react";

const Services = () => {
  return (
    <main className="relative w-full h-screen overflow-y-auto overflow-x-hidden z-30 bg-background2 scroll-smooth">
      <Navbar />
      <MainTitle heading={"Services"} picture={""} />
      <Hero />
    </main>
  );
};

export default Services;
