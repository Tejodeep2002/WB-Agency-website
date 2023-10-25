import React from "react";
import PulseCircle from "./Miscellaneous/PulseCircle";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <section className="w-full h-auto ">
      <div
        className="bg-fixed w-full h-auto  object-cover "
        // style={{ backgroundImage: "url('/assets/bg.jpg')" }}
      >
        <section className="w-full h-auto py-36 ">
          <section className="flex flex-col gap-4 items-center">
            <span className="text-2xl leading-7 text-grey1 flex gap-4">
              <PulseCircle />
              Services
              <PulseCircle flow="right" />
            </span>
            <h2 className="text-6xl mb-10">What We Have to Offer</h2>
          </section>
          <section className="w-full h-[38rem] mt-10">
            <section className="w-full h-full flex  text-secondary border-tertiary ">
              <section className="w-1/4  flex flex-col gap-16 items-center border-r border-grey1  ">
                <div className="w-full h-fit px-16 mx-auto flex flex-col gap-6 hover:text-primary">
                  <Link
                    href={"#"}
                    className="text-secondary font-bold text-[36px] leading-[41.76px] text-left"
                  >
                    SEO Optimization
                  </Link>
                  <span>
                    <p>
                      Duis tristique sollicitudin nibh sit amet commodo nulla.
                      Aliquet nec ullamcorper sit amet risus nullam eget felis
                      eget.
                    </p>
                  </span>
                </div>
                <div className="relative w-full h-full group pt-[66.66%] ">
                  <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center px-16 mx-auto">
                    <span className="flex gap-5">
                      <PulseCircle />
                      Know more
                    </span>
                  </div>
                  <Image
                    src={"/assets/services/home-1-service-1.jpg"}
                    width={"1080"}
                    height={"1080"}
                    alt={""}
                    className="absolute w-full invisible scale-75 opacity-0 group-hover:visible group-hover:scale-100 group-hover:opacity-100 top-0 transition ease-in-out duration-700 "
                  />
                </div>
              </section>
              <section className="w-1/4  flex flex-col gap-16 items-center border-r border-grey1  ">
                <div className="w-full h-fit px-16 mx-auto flex flex-col gap-6 hover:text-primary">
                  <Link
                    href={"#"}
                    className="text-secondary font-bold text-[36px] leading-[41.76px] text-left"
                  >
                    Mobile App Marketing
                  </Link>
                  <span>
                    <p>
                      Tincidunt vitae semper quis lectus nulla metus aliquam
                      eleifend mi in nulla ut faucibus pulvinar elementum
                      integer.
                    </p>
                  </span>
                </div>
                <div className="relative w-full h-full group pt-[66.66%] ">
                  <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center px-16 mx-auto">
                    <span className="flex gap-5">
                      <PulseCircle />
                      Know more
                    </span>
                  </div>
                  <Image
                    src={"/assets/services/home-1-service-1.jpg"}
                    width={"1080"}
                    height={"1080"}
                    alt={""}
                    className="absolute w-full invisible scale-75 opacity-0 group-hover:visible group-hover:scale-100 group-hover:opacity-100 top-0 transition ease-in-out duration-700 "
                  />
                </div>
              </section>
              <section className="w-1/4  flex flex-col gap-16 items-center border-r border-grey1  ">
                <div className="w-full h-fit px-16 mx-auto flex flex-col gap-6 hover:text-primary">
                  <Link
                    href={"#"}
                    className="text-secondary font-bold text-[36px] leading-[41.76px] text-left"
                  >
                    Mobile App Development
                  </Link>
                  <span>
                    <p>
                      Arcu bibendum at varius vel pharetra vel. Nisl condimentum
                      id venenatis a condimentum vitae sapien pellentesque.
                    </p>
                  </span>
                </div>
                <div className="relative w-full h-full group pt-[66.66%] ">
                  <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center px-16 mx-auto">
                    <span className="flex gap-5">
                      <PulseCircle />
                      Know more
                    </span>
                  </div>
                  <Image
                    src={"/assets/services/home-1-service-1.jpg"}
                    width={"1080"}
                    height={"1080"}
                    alt={""}
                    className="absolute w-full invisible scale-75 opacity-0 group-hover:visible group-hover:scale-100 group-hover:opacity-100 top-0 transition ease-in-out duration-700 "
                  />
                </div>
              </section>
              <section className="w-1/4  flex flex-col gap-16 items-center border-r border-grey1  ">
                <div className="w-full h-fit px-16 mx-auto flex flex-col gap-6 hover:text-primary">
                  <Link
                    href={"#"}
                    className="text-secondary font-bold text-[36px] leading-[41.76px] text-left"
                  >
                    Creative Web Designs
                  </Link>
                  <span>
                    <p>
                      Pellentesque diam volutpat commodo sed egestas. Mattis
                      ullamcorper velit sed ullamcorper morbi. Quis vel eros
                      donec ac odio.
                    </p>
                  </span>
                </div>
                <div className="relative w-full h-full group pt-[66.66%] ">
                  <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center px-16 mx-auto">
                    <span className="flex gap-5">
                      <PulseCircle />
                      Know more
                    </span>
                  </div>
                  <Image
                    src={"/assets/services/home-1-service-1.jpg"}
                    width={"1080"}
                    height={"1080"}
                    alt={""}
                    className="absolute w-full invisible scale-75 opacity-0 group-hover:visible group-hover:scale-100 group-hover:opacity-100 top-0 transition ease-in-out duration-700 "
                  />
                </div>
              </section>
            </section>
          </section>
        </section>
      </div>
    </section>
  );
};

export default Services;
