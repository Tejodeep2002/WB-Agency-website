import Process from "@/components/Ui/ServicesDetails/Process";
import Image from "next/image";
import React, { FC } from "react";
import Core_Services from "./Core_Services";
import PulseCircle from "@/components/Ui/PulseCircle";
import Technologies from "./Technologies";
import { createClient } from "next-sanity";
import { findServiceByName } from "@/config/SanityClient";
import { imageUrlFor } from "@/config/SanityImageUrl";

interface ServiceDetailsProps {
  serviceName: string;
}

const ServiceDetails: FC<ServiceDetailsProps> = async ({ serviceName }) => {
  const serviceDetails = await findServiceByName(
    serviceName.split("-").join(" ")
  );

  console.log(serviceDetails);

  return (
    <section className="w-full h-auto ">
      <section className="w-full h-auto  py-20  md:px-0 xl:py-24">
        <section className="w-full h-auto flex flex-col">
          {/* title */}
          <section className=" w-full max-w-[100rem] mx-auto h-auto pb-20 px-5 xl:py-28">
            <section className=" w-full xl:h-[40rem] flex flex-col-reverse lg:flex-row gap-8 lg:gap-0 ">
              <div className="w-full xl:w-[60%] h-full xl:pl-20 flex flex-col justify-center">
                <div className="w-full h-[80%] p-6 xl:py-12 xl:px-20 flex flex-col gap-6 border xl:border-y xl:border-l border-primary">
                  <section className="w-full flex gap-4 text-secondary">
                    <PulseCircle />
                    {serviceDetails.name}
                  </section>
                  <section className="w-full h-auto">
                    <h1 className="text-left "> {serviceDetails.name}</h1>
                  </section>
                  <section className="  w-full h-full">
                    <p>{serviceDetails.description}</p>
                  </section>
                </div>
              </div>
              <div className="w-full xl:w-[40%] h-full ">
                <Image
                  src={imageUrlFor(serviceDetails.image).url()}
                  width={"1000"}
                  height={"0"}
                  alt={""}
                  className=" w-full h-full "
                />
              </div>
            </section>
          </section>
          <Technologies weAreUsing={serviceDetails.weAreUsing} />
          <Core_Services services={serviceDetails.services} />
          <Process process={serviceDetails.procedure} />
        </section>
      </section>{" "}
    </section>
  );
};

export default ServiceDetails;
