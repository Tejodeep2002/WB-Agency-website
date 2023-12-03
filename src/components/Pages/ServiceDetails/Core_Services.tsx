"use client";
import Heading from "@/components/Ui/Heading/Heading";
import PulseCircle from "@/components/Ui/PulseCircle";
import { imageUrlFor } from "@/config/SanityImageUrl";
import useIsomorphicLayoutEffect from "@/helper/isomorphicEffect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useRef } from "react";

interface CoreServicesProps {
  services: any;
}

const Core_Services: FC<CoreServicesProps> = ({ services }) => {
  const Core_Services = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".core_servicesSection", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: Core_Services.current,
          scroller: "main",
          start: "30% 80%",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={Core_Services} className="w-full h-auto bg-backgroun2">
      <section className="relative w-full h-fit">
        {/* <div
          className="absolute w-full h-full  bg-cover bg-black opacity-30"
          // style={{
          //   backgroundImage:
          //     "url('https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Process-Icon-Box-Bg-Img-1-scaled.jpg')",
          // }}
          // style={{ backgroundImage: "url('/assets/bg.jpg')" }}
        /> */}
        <section className="w-full h-auto flex py-20 xl:py-36 px-5 xl:px-0  flex-col items-center ">
          <Heading heading={"Services"} subHeading={"We are Mastery in "} />
          {/* <h1>We can offer</h1> */}
          <section className="w-full h-auto xl:mt-10 ">
            {/* <section className="w-full h-full flex flex-col md:flex-row md:flex-wrap  lg:gap-0  text-secondary border-tertiary "> */}
            <section className=" w-full h-full  grid grid-cols-1  xl:grid-cols-4 text-secondary border-tertiary ">
              {services?.map((items: any) => (
                <section
                  key={items._key}
                  className="w-full h-auto core_servicesSection"
                >
                  <div className="relative w-full h-[22rem] group xl:border-x border-secondary  ">
                    <div className="relative flex flex-col  top-0 left-0 bottom-0 right-0 xl:flex items-center p-8 xl:px-16 mx-auto">
                      <span className=" text-secondary font-bold text-[30px] md:text-[36px] leading-[41.76px] group-hover:text-primary text-left transition ease-in-out duration-500">
                        {items.title}
                      </span>
                      <span className="">
                        <p>{items.description}</p>
                      </span>
                    </div>
                    <Image
                      src={items.image}
                      width={"1080"}
                      height={"0"}
                      alt={""}
                      className=" absolute xl:absolute w-full xl:scale-75 opacity-40 -z-10 xl:opacity-0 xl:group-hover:visible xl:group-hover:scale-100 xl:group-hover:opacity-100 top-0 transition ease-in-out duration-300 "
                    />
                  </div>
                </section>
              ))}
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Core_Services;
