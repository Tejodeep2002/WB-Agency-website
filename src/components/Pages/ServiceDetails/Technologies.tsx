"use client";
import Heading from "@/components/Ui/Heading/Heading";
import useIsomorphicLayoutEffect from "@/helper/isomorphicEffect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiReact } from "react-icons/si";

const Technologies = () => {
  const technologies = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".technologiesSection", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: technologies.current,
          scroller: "main",
          start: "30% 80%",
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <section ref={technologies} className="w-full h-auto bg-background ">
      <section className="w-full h-auto py-20 xl:py-36 px-5 ">
        <Heading heading={"Technology"} subHeading={"We are Using "} />
        <section className="w-full max-w-[70rem] h-fit mx-auto bg-background3 border-2 border-primary p-3 ">
          <section className="w-full h-full grid grid-cols-3 xl:grid-cols-6  gap-5 ">
            <div className="technologiesSection w-full h-[8rem] border-2 border-primary flex items-center justify-center">
              <span className="flex flex-col items-center gap-3 text-secondary font-semibold leading-[26px]">
                <SiReact className="text-[50px] text-blue-400" />
                REACT
              </span>
            </div>
            <div className=" technologiesSection w-full h-[8rem] border-2 border-primary flex items-center justify-center">
              <span className="flex flex-col items-center gap-3 text-secondary">
                <SiHtml5 className="text-[50px] text-orange-500" />
                HTML
              </span>
            </div>
            <div className=" technologiesSection w-full h-[8rem] border-2 border-primary flex items-center justify-center">
              <span className="flex flex-col items-center gap-3 text-secondary">
                <SiHtml5 className="text-[50px] text-orange-500" />
                HTML
              </span>
            </div>
            <div className=" technologiesSection w-full h-[8rem] border-2 border-primary flex items-center justify-center">
              <span className="flex flex-col items-center gap-3 text-secondary">
                <SiHtml5 className="text-[50px] " />
                HTML
              </span>
            </div>
            <div className="technologiesSection w-full h-[8rem] border-2 border-primary flex items-center justify-center">
              <span className="flex flex-col items-center gap-3 text-secondary">
                <SiHtml5 className="text-[50px] " />
                HTML
              </span>
            </div>
            <div className="technologiesSection w-full h-[8rem] border-2 border-primary flex items-center justify-center">
              <span className="flex flex-col items-center gap-3 text-secondary">
                <SiHtml5 className="text-[50px] " />
                HTML
              </span>
            </div>
            <div className="technologiesSection w-full h-[8rem] border-2 border-primary flex items-center justify-center">
              <span className="flex flex-col items-center gap-3 text-secondary">
                <SiHtml5 className="text-[50px] " />
                HTML
              </span>
            </div>
            <div className="technologiesSection w-full h-[8rem] border-2 border-primary flex items-center justify-center">
              <span className="flex flex-col items-center gap-3 text-secondary">
                <SiHtml5 className="text-[50px] " />
                HTML
              </span>
            </div>
            <div className="technologiesSection w-full h-[8rem] border-2 border-primary flex items-center justify-center">
              <span className="flex flex-col items-center gap-3 text-secondary">
                <SiHtml5 className="text-[50px] " />
                HTML
              </span>
            </div>
            <div className="technologiesSection w-full h-[8rem] border-2 border-primary flex items-center justify-center">
              <span className="flex flex-col items-center gap-3 text-secondary">
                <SiHtml5 className="text-[50px] " />
                HTML
              </span>
            </div>
            <div className="technologiesSection w-full h-[8rem] border-2 border-primary flex items-center justify-center">
              <span className="flex flex-col items-center gap-3 text-secondary">
                <SiHtml5 className="text-[50px] " />
                HTML
              </span>
            </div>
            <div className="technologiesSection w-full h-[8rem] border-2 border-primary flex items-center justify-center">
              <span className="flex flex-col items-center gap-3 text-secondary">
                <SiHtml5 className="text-[50px] " />
                HTML
              </span>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Technologies;
