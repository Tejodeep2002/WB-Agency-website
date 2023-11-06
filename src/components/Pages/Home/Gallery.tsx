"use client";
import Image from "next/image";
import React, { useRef } from "react";
import PulseCircle from "../../Ui/PulseCircle";
import useIsomorphicLayoutEffect from "@/helper/isomorphicEffect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "../../Ui/Heading/Heading";

const Gallery = () => {
  const gallery = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".galleryContent", {
        y: 100,
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gallery.current,
          scroller: "main",
          start: "10% 80%",
        },
      });
      gsap.from(".galleryContent1", {
        x: -100,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: gallery.current,
          scroller: "main",
          start: "30% 80%",
        },
        ease: "power2.out",
      });
      gsap.from(".galleryContent2", {
        x: 100,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: gallery.current,
          scroller: "main",
          start: "30% 80%",
        },
        ease: "power2.out",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={gallery} id="gallery" className="relative w-full h-auto">
      <section className="w-full h-full mb-14">
        <section className="w-full flex flex-col gap-7 px-4 sm:px-2 md:px-0 mx-auto text-white">
          <Heading heading={"Gallery"} subHeading={"Our Project Portfolio"} />
          <section className="galleryContent w-full h-auto">
            <section className="w-full h-full flex flex-col gap-5">
              <section className="w-full xl:h-[30rem] flex flex-col md:flex-row  md:flex-wrap xl:flex-nowrap md:justify-evenly  gap-5">
                <span className="relative w-full  md:w-[45%] xl:w-[25%] h-full">
                  <Image
                    src={"/assets/home-portfolio-1.jpg"}
                    width={"2000"}
                    height={"0"}
                    alt=""
                    className=" w-full xl:h-full"
                  />
                </span>
                <span className="relative w-full md:w-[50%] xl:w-[50%]">
                  <Image
                    src={"/assets/home-portfolio-2.jpg"}
                    width={"2000"}
                    height={"0"}
                    alt=""
                    className="w-full xl:h-full"
                  />
                </span>
                <span className="relative w-full md:w-1/2 xl:w-[25%]">
                  <Image
                    src={"/assets/home-portfolio-3.jpg"}
                    width={"2000"}
                    height={"0"}
                    alt=""
                    className="w-full xl:h-full"
                  />
                </span>
              </section>
              <section className="relative w-full xl:h-[30rem] flex flex-col xl:flex-row gap-5 md:gap-5 xl:gap-0">
                <div className=" galleryContent1 relative w-full xl:w-1/2 h-96 lg:h-full my-8 xl:my-0  flex justify-center items-center bg-background">
                  <div className="w-full xl:max-w-lg h-auto px-6  flex flex-col gap-10">
                    <h2 className="text-left text-[50px]  before:absolute before:content-[''] before:w-24 before:h-24 before:rounded-full before:bg-primary before:-z-20 -z-10">
                      All Projects
                    </h2>
                    <span>
                      <p className="text-left">
                        Dolor sit amet consectetur adipiscing elit ut aliquam
                        purus sit. Euismod nisi porta lorem mollis aliquam ut
                        porttitor. In hac habitasse platea dictumst. Amet massa
                        vitae tortor condimentum lacinia quis.
                      </p>
                    </span>
                    <span className="flex items-center gap-2 ">
                      <PulseCircle /> View All
                    </span>
                  </div>
                </div>
                <section className="w-full xl:w-1/2 flex flex-wrap md:flex-nowrap gap-5  ">
                  <span className="relative w-full md:w-1/2 h-full">
                    <Image
                      src={"/assets/home-portfolio-3.jpg"}
                      width={"2000"}
                      height={"0"}
                      alt=""
                      className="w-full xl:h-full"
                    />
                  </span>
                  <span className="relative w-full md:w-1/2 ">
                    <Image
                      src={"/assets/home-portfolio-3.jpg"}
                      width={"2000"}
                      height={"0"}
                      alt=""
                      className="w-full xl:h-full"
                    />
                  </span>
                </section>
              </section>
              {/* <section className="w-full h-auto flex  gap-2 md:gap-5">
                <div className="galleryContent1 relative w-full max-w-1/2 h-96 lg:h-full col-span-1  md:col-span-2 flex justify-center items-center bg-background">
                  <div className="w-full max-w-lg h-auto pr-6 flex flex-col gap-10">
                    <h2 className="text-left text-[50px] before:absolute before:content-[''] before:w-24 before:h-24 before:rounded-full before:bg-primary before:-z-10 z-10">
                      All Projects
                    </h2>
                    <span>
                      <p className="text-left">
                        Dolor sit amet consectetur adipiscing elit ut aliquam
                        purus sit. Euismod nisi porta lorem mollis aliquam ut
                        porttitor. In hac habitasse platea dictumst. Amet massa
                        vitae tortor condimentum lacinia quis.
                      </p>
                    </span>
                    <span className="flex items-center gap-2 ">
                      <PulseCircle /> View All
                    </span>
                  </div>
                </div>
                <div className="galleryContent2 relative w-full">
                  <Image
                    src={"/assets/home-portfolio-3.jpg"}
                    width={"2000"}
                    height={"0"}
                    alt=""
                    className="w-full"
                  />
                </div>
                <div className="galleryContent2 relative w-full">
                  <Image
                    src={"/assets/home-portfolio-3.jpg"}
                    width={"2000"}
                    height={"0"}
                    alt=""
                    className="w-full"
                  />
                </div>
              </section> */}
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Gallery;
