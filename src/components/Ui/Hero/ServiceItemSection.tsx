"use client";
import Link from "next/link";
import React, { FC, useRef } from "react";
import PulseCircle from "../PulseCircle";
import Image from "next/image";
import useIsomorphicLayoutEffect from "@/helper/isomorphicEffect";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

interface ServiceItemSection {
  data: {
    name: string;
    description: string;
    image: string;
  }[];
}

const ServiceItemSection: FC<ServiceItemSection> = ({ data }) => {
  gsap.registerPlugin(ScrollTrigger);
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".servicesSections", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".services",
          scroller: "main",
          start: "30% 90%",
        },
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <section className=" w-full h-auto  xl:mt-10 ">
      <section className="w-full h-full flex flex-col md:flex-row md:flex-wrap  lg:gap-0  text-secondary border-tertiary ">
        {/* <section className=" servicesSections  w-full max-w-[30rem] md:w-1/2  xl:w-1/4 mx-auto pb-24 px-5 xl:px-0 flex flex-col gap-16 items-center xl:border-x xl:border-grey1 group  ">
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
          <Link href={"/services"}>
            <Image
              src={"/assets/services/home-1-service-1.jpg"}
              width={"1080"}
              height={"1080"}
              alt={""}
              className="xl:absolute w-full xl:scale-75 xl:opacity-0 group-hover:visible group-hover:scale-100 group-hover:opacity-100 top-0 transition ease-in-out duration-300 "
            />
          </Link>
        </div>
      </section> */}
        {data.map((item: any, index: number) => (
          <section
            key={index}
            className=" servicesSections  w-full max-w-[30rem] md:w-1/2  xl:w-1/4 mx-auto pb-24 px-5 xl:px-0 flex flex-col gap-16 items-center xl:border-x xl:border-grey1 group  "
          >
            <div className="w-full h-fit xl:px-16 mx-auto flex flex-col gap-5 md:gap-6 hover:text-primary">
              <Link
                href={`/services/${item.name
                  .split(" ")
                  .join("-")
                  .toLowerCase()}`}
                className="text-secondary font-bold text-[30px] md:text-[36px] leading-[41.76px] group-hover:text-primary text-left transition ease-in-out duration-500"
              >
                {item.name}
              </Link>
              <span>
                <p>
                  {item.description
                    .split(" ")
                    .splice(0, 12)
                    .join(" ")
                    .concat(" ....")}
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
              <Link
                href={`/services/${item.name
                  .split(" ")
                  .join("-")
                  .toLowerCase()}`}
              >
                <Image
                  src={item.imageUrl}
                  width={"1080"}
                  height={"1080"}
                  alt={item.name}
                  className="xl:absolute w-full xl:scale-75 xl:opacity-0 group-hover:visible group-hover:scale-100 group-hover:opacity-100 top-0 transition ease-in-out duration-300 "
                />
              </Link>
            </div>
          </section>
        ))}
      </section>
    </section>
  );
};

export default ServiceItemSection;
