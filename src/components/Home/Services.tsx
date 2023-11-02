"use client";
import React, { useRef } from "react";
import PulseCircle from "../common/PulseCircle";
import Image from "next/image";
import Link from "next/link";
import useIsomorphicLayoutEffect from "@/helper/isomorphicEffect";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Heading from "../common/Heading/Heading";

const Services = () => {
  const services = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".servicesSections", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: services.current,
          scroller: "main",
          start: "30% 90%",
          markers:true
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={services}
      className="w-full h-auto"
    >
      <div
        className="bg-fixed w-full h-auto  object-cover "
        // style={{ backgroundImage: "url('/assets/bg.jpg')" }}
      >
        <section className="w-full h-auto py-10 xl:py-36">
          <Heading heading={"Services"} subHeading={"What We Have to Offer"} />
          <section className="w-full h-auto xl:h-[38rem] xl:mt-10 ">
            <section className="w-full h-full flex flex-col md:flex-row md:flex-wrap  lg:gap-0  text-secondary border-tertiary ">
              <section className=" servicesSections  w-full max-w-[30rem] md:w-1/2  xl:w-1/4 mx-auto pb-24 px-5 xl:px-0 flex flex-col gap-16 items-center xl:border-r xl:border-grey1 group  ">
                <div className="w-full h-fit xl:px-16 mx-auto flex flex-col gap-5 md:gap-6 hover:text-primary">
                  <Link
                    href={"#"}
                    className="text-secondary font-bold text-[30px] md:text-[36px] leading-[41.76px] group-hover:text-primary text-left transition ease-in-out duration-500"
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
                <div className="relative w-full h-full  xl:pt-[66.66%]">
                  <div className="absolute hidden  top-0 left-0 bottom-0 right-0 xl:flex items-center px-16 mx-auto">
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
                    className="xl:absolute w-full xl:scale-75 xl:opacity-0 group-hover:visible group-hover:scale-100 group-hover:opacity-100 top-0 transition ease-in-out duration-300 "
                  />
                </div>
              </section>
              <section className=" servicesSections w-full max-w-[30rem] md:w-1/2  xl:w-1/4 mx-auto pb-24 px-5 xl:px-0 flex flex-col gap-16 items-center xl:border-r xl:border-grey1 group  ">
                <div className="w-full h-fit xl:px-16 mx-auto flex flex-col gap-5 md:gap-6 hover:text-primary">
                  <Link
                    href={"#"}
                    className="text-secondary font-bold text-[30px] md:text-[36px] leading-[41.76px] group-hover:text-primary text-left transition ease-in-out duration-500"
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
                <div className="relative w-full h-full  xl:pt-[66.66%]">
                  <div className="absolute hidden  top-0 left-0 bottom-0 right-0 xl:flex items-center px-16 mx-auto">
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
                    className="xl:absolute w-full xl:scale-75 xl:opacity-0 group-hover:visible group-hover:scale-100 group-hover:opacity-100 top-0 transition ease-in-out duration-300 "
                  />
                </div>
              </section>
              <section className=" servicesSections w-full max-w-[30rem] md:w-1/2  xl:w-1/4 mx-auto pb-24 px-5 xl:px-0 flex flex-col gap-16 items-center xl:border-r xl:border-grey1 group  ">
                <div className="w-full h-fit xl:px-16 mx-auto flex flex-col gap-5 md:gap-6 hover:text-primary">
                  <Link
                    href={"#"}
                    className="text-secondary font-bold text-[30px] md:text-[36px] leading-[41.76px] group-hover:text-primary text-left transition ease-in-out duration-500"
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
                <div className="relative w-full h-full  xl:pt-[66.66%]">
                  <div className="absolute hidden  top-0 left-0 bottom-0 right-0 xl:flex items-center px-16 mx-auto">
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
                    className="xl:absolute w-full xl:scale-75 xl:opacity-0 group-hover:visible group-hover:scale-100 group-hover:opacity-100 top-0 transition ease-in-out duration-300 "
                  />
                </div>
              </section>
              <section className=" servicesSections w-full max-w-[30rem] md:w-1/2  xl:w-1/4 mx-auto pb-24 px-5 xl:px-0 flex flex-col gap-16 items-center xl:border-r xl:border-grey1 group  ">
                <div className="w-full h-fit xl:px-16 mx-auto flex flex-col gap-5 md:gap-6 hover:text-primary">
                  <Link
                    href={"#"}
                    className="text-secondary font-bold text-[30px] md:text-[36px] leading-[41.76px] group-hover:text-primary text-left transition ease-in-out duration-500"
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
                <div className="relative w-full h-full  xl:pt-[66.66%]">
                  <div className="absolute hidden  top-0 left-0 bottom-0 right-0 xl:flex items-center px-16 mx-auto">
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
                    className="xl:absolute w-full xl:scale-75 xl:opacity-0 group-hover:visible group-hover:scale-100 group-hover:opacity-100 top-0 transition ease-in-out duration-300 "
                  />
                </div>
              </section>
             
            
            
           

              {/* <section className="w-full lg:w-1/4 border-2 border-yellow-500 flex flex-col gap-16 items-center border-r border-grey1  ">
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
                <div className="relative w-full h-full group md:pt-[66.66%]">
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
                    className="lg:absolute w-full lg:scale-75 lg:opacity-0 group-hover:visible group-hover:scale-100 group-hover:opacity-100 top-0 transition ease-in-out duration-700 "
                  />
                </div>
              </section> */}
              {/* <section className="w-full lg:w-1/4 border-2 border-yellow-500 flex flex-col gap-16 items-center border-r border-grey1  ">
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
                    className="lg:absolute w-full lg:scale-75 lg:opacity-0 group-hover:visible group-hover:scale-100 group-hover:opacity-100 top-0 transition ease-in-out duration-700 "
                  />
                </div>
              </section> */}
              {/* <section className="w-full lg:w-1/4 border-2 border-yellow-500 flex flex-col gap-16 items-center border-r border-grey1  ">
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
                    className="lg:absolute w-full lg:scale-75 lg:opacity-0 group-hover:visible group-hover:scale-100 group-hover:opacity-100 top-0 transition ease-in-out duration-700 "
                  />
                </div>
              </section> */}
            </section>
          </section>
        </section>
      </div>
    </section>
  );
};

export default Services;
