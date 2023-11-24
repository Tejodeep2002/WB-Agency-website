import React from "react";
import Heading from "../../Ui/Heading/Heading";
import { client } from "@/config/SanityClient";
import ServiceSection from "@/components/Ui/Hero/ServiceSection";

const Services = async () => {
  const services = await client.fetch(
    `*[_type=="service"]{
      _id,name,description,"image":image.asset->url
  }`
  );

  
  
  return (
    <section className="services w-full h-auto " id={"services"}>
      <div
        className="bg-fixed w-full h-auto  object-cover "
        // style={{ backgroundImage: "url('/assets/bg.jpg')" }}
      >
        <section className=" w-full h-auto py-10 xl:pt-36">
          <Heading heading={"Services"} subHeading={"What We Have to Offer"} />
          <ServiceSection data={services} />
        </section>
      </div>
    </section>
  );
};

export default Services;
