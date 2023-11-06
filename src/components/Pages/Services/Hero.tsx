import ServiceItems from "@/components/Ui/Services/ServiceItems";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-auto  ">
      <section className="w-full h-auto py-20 px-5 xl:py-36">
        <section className="w-full max-w-[100rem] mx-auto h-auto flex flex-col gap-10">
        <section className="w-full h-auto flex flex-row flex-wrap justify-between gap-10 ">
            <ServiceItems/>
            <ServiceItems/>
            <ServiceItems/>
            <ServiceItems/>
            <ServiceItems/>
            <ServiceItems/>




        </section>

        </section>
      </section>
    </section>
  );
};

export default Hero;
