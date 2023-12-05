import React from "react";
import Heading from "../../Ui/Heading/Heading";
import { client, getAllServices } from "@/config/SanityClient";
import ServiceSection from "@/components/Ui/Hero/ServiceSection";

const Services = async () => {
  
  const services = await getAllServices();

  return (
    <section className=" services w-full h-auto " id={"services"}>
      <section className=" w-full h-auto py-20 lg:pt-28">
        <Heading heading={"Services"} subHeading={"What We Have to Offer"} />
        <ServiceSection data={services} />
      </section>
    </section>
  );
};

export default Services;
