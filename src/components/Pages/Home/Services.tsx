import React, { useEffect, useRef } from "react";
import Heading from "../../Ui/Heading/Heading";
import ServiceItemSection from "@/components/Ui/Hero/ServiceItemSection";
import { getAllServices } from "@/config/SanityClient";

const Services = async () => {
  const service = await getAllServices();

  return (
    <section className="services w-full h-auto ">
      <div
        className="bg-fixed w-full h-auto  object-cover "
        // style={{ backgroundImage: "url('/assets/bg.jpg')" }}
      >
        <section className=" w-full h-auto py-10 xl:py-36">
          <Heading heading={"Services"} subHeading={"What We Have to Offer"} />
          <ServiceItemSection data={service} />
        </section>
      </div>
    </section>
  );
};

export default Services;
