"use client";
import React, { FC } from "react";
import useIsomorphicLayoutEffect from "@/helper/isomorphicEffect";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import ServiceSectionItem from "./ServiceSectionItem";

interface ServiceSectionProps {
  data: {
    name: string;
    description: string;
    image: string;
  }[];
}

const ServiceSection: FC<ServiceSectionProps> = ({ data }) => {
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
        {data.map((item: any, index: number) => (
          <ServiceSectionItem
            key={item._id}
            name={item.name}
            description={item.description}
            image={item.image}
          />
        ))}
      </section>
    </section>
  );
};

export default ServiceSection;
