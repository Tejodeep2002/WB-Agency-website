"use client";
import React, { useRef } from "react";
import useIsomorphicLayoutEffect from "@/helper/isomorphicEffect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TagLine = () => {
  const tagLine = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".tagLineContent", {
        x: -90,
        duration: 1.3,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: tagLine.current,
          scroller: "main",
          start: "top 90%",
          end: "top 90%",
          
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full h-auto bg-background2 ">
      <section ref={tagLine} className="w-full py-36 border">
        <section className="w-full max-w-[90rem] mx-auto flex flex-col gap-28 ">
          <section className="tagLineContent w-full max-w-5xl mx-auto text-center flex flex-col gap-14">
            <h3>
              It&apos;s Time To Take Your Digital Marketing To The Next Level We
              Are Always Here To Help You Grow Your Business
            </h3>
          </section>
          <section className="tagLineContent2 w-full  h-auto flex justify-between  text-tertiary">
            <div className=" w-80 h-32 flex items-center gap-5  ">
              <div className=" text-[120px] font-semibold border-secondary text-transparent stroke-text hover:text-primary transition ease-in-out duration-500">
                10
              </div>
              <div className="w-fit flex flex-col text-2xl text-left leading-10 text-tertiary hover:text-secondary transition ease-in-out duration-500">
                Years Experience
              </div>
            </div>
            <div className=" w-80 h-32  flex items-center gap-5 ">
              <div className="text-[120px] font-semibold border-secondary text-transparent stroke-text hover:text-primary transition ease-in-out duration-500">
                12+
              </div>
              <span className="flex flex-col text-2xl text-left leading-10 text-tertiary hover:text-secondary transition ease-in-out duration-500">
                Advanced Tools
              </span>
            </div>
            <div className=" w-80 h-32  flex items-center gap-5 ">
              <div className="text-[120px] font-semibold border-secondary text-transparent stroke-text hover:text-primary transition ease-in-out duration-700">
                52
              </div>
              <span className="flex flex-col text-2xl text-left leading-10 text-tertiary hover:text-secondary transition ease-in-out duration-700">
                Clients Satisfied
              </span>
            </div>
            <div className=" w-80 h-32 flex items-center gap-5 ">
              <div className="text-[120px] font-semibold border-secondary text-transparent stroke-text hover:text-primary transition ease-in-out duration-500">
                90
              </div>
              <span className="flex flex-col text-2xl text-left leading-10 text-tertiary hover:text-secondary transition ease-in-out duration-500">
                Projects Completed
              </span>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default TagLine;
