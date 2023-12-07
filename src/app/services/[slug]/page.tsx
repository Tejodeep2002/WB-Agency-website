import ServiceDetails from "@/components/Pages/ServiceDetails/ServiceDetails";
import Footer from "@/components/Ui/Footer/Footer";
import MainTitle from "@/components/Ui/MainTitle";
import Navbar from "@/components/Ui/Navbar/Navbar";
import Social_carousel from "@/components/Ui/SocialPostsCorossal.tsx/Social_carousel";
import { findServiceByName } from "@/lib/getServices";
import { Metadata } from "next";
import React, { FC } from "react";

interface PageProps {
  params: {
    slug: string;
  };
}

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const serviceDetails = await findServiceByName(params.slug);

  if (!serviceDetails) {
    return {
      title: "Not Found",
      description: "This page is not Found",
    };
  }

  return {
    title: serviceDetails.name,
    description: serviceDetails.description,
    alternates: {
      canonical: `/services/${params.slug}`,
      languages: {
        "en-US": `/en-US/services/${params.slug}`,
        "de-DE": `/de-DE/services/${params.slug}`,
      },
    },
  };
};

const page: FC<PageProps> = async ({ params }) => {
  const serviceDetails = await findServiceByName(params.slug);

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
