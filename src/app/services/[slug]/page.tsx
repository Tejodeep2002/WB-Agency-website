import ServiceDetails from "@/components/Pages/ServiceDetails/ServiceDetails";
import Footer from "@/components/Ui/Footer/Footer";
import MainTitle from "@/components/Ui/MainTitle";
import Navbar from "@/components/Ui/Navbar/Navbar";
import React, { FC } from "react";

interface PageProps{
  params:{
    slug:string
  }
}

const page:FC<PageProps>  = ({params}) => {
  return (
    <main className="relative w-full h-screen overflow-y-auto overflow-x-hidden z-30 bg-background2 scroll-smooth">
      <Navbar />
      <MainTitle heading={params.slug} picture={""} />
      <ServiceDetails/>
      {/* <Footer/> */}
    </main>
  );
};

export default page;
