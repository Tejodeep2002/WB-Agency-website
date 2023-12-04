import ServiceDetails from "@/components/Pages/ServiceDetails/ServiceDetails";
import Footer from "@/components/Ui/Footer/Footer";
import MainTitle from "@/components/Ui/MainTitle";
import Navbar from "@/components/Ui/Navbar/Navbar";
import Social_carousel from "@/components/Ui/SocialPostsCorossal.tsx/Social_carousel";
import { findServiceByName, getAllServices } from "@/config/SanityClient";
import React, { FC } from "react";

interface PageProps {
  params: {
    slug: string;
  };
}

const page: FC<PageProps> = async ({ params }) => {
  const serviceDetails = await findServiceByName(
    params.slug.split("-").join(" ")
  );

  return (
    <main className="relative w-full h-screen overflow-y-auto overflow-x-hidden z-30 bg-background2 scroll-smooth">
      <Navbar />
      <MainTitle heading={params.slug} picture={""} />
      <ServiceDetails serviceDetails={serviceDetails} />
      {/* <CaseStudy/> */}
      <Social_carousel />
      <Footer />
    </main>
  );
};

export default page;
