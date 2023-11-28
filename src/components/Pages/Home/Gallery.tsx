"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import PulseCircle from "../../Ui/PulseCircle";
import useIsomorphicLayoutEffect from "@/helper/isomorphicEffect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "../../Ui/Heading/Heading";
import Link from "next/link";

const Gallery = () => {
  const gallery = useRef<HTMLDivElement>(null);
  const gallerySection2 = useRef<HTMLDivElement>(null);
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
          start: "7% 80%",
        },
      });
      gsap.from(".galleryContent1", {
        x: -100,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: gallerySection2.current,
          scroller: "main",
          start: "top 80%",
        },
        ease: "power2.out",
      });
      gsap.from(".galleryContent2", {
        x: 100,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: gallerySection2.current,
          scroller: "main",
          start: "top 80%",
        },
        ease: "power2.out",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={gallery}
      id="gallery"
      className=" relative w-full h-auto "
    >
      <section className="w-full h-full py-10 xl:py-36">
        <section className="w-full flex flex-col gap-7 px-4 sm:px-2 md:px-0 mx-auto text-white">
          <Heading heading={"Gallery"} subHeading={"Our Project Portfolio"} />
          <section className="galleryContent w-full h-auto">
            <section className="w-full h-full flex flex-col gap-5 ">
              <section className="w-full xl:h-[30rem] flex flex-col md:flex-row  md:flex-wrap xl:flex-nowrap md:justify-evenly  gap-5">
                <div className="relative w-full h-[23rem] xl:h-full   group md:w-[45%] xl:w-[25%] ">
                  <Image
                    src={"/assets/home-portfolio-1.jpg"}
                    width={"2000"}
                    height={"0"}
                    alt=""
                    className=" w-full h-full  xl:h-full"
                  />
                  <div className="absolute -bottom-1 w-full h-auto p-10 flex flex-col justify-start gap-5 text-left  opacity-0  group-hover:opacity-100 translate-y-[1rem] group-hover:translate-y-0 bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 transition-all ease-in-out duration-300">
                    <Link
                      href={"#"}
                      className="text-secondary font-bold text-[30px] md:text-[36px] leading-[41.76px] translate-y-[1rem] group-hover:translate-y-0 hover:text-primary text-left transition ease-in-out duration-500"
                    >
                      UI & UX Designs
                    </Link>
                    <p className="translate-y-[1rem] text-secondary group-hover:translate-y-0 transition ease-in-out duration-700">
                      Turpis egestas integer eget aliquet nibh praesent.
                      Accumsan lacus vel facilisis volutpat est egestas dui.
                    </p>
                    <section className="w-full flex justify-start">
                      <span className="flex gap-3 text-secondary">
                        <PulseCircle />
                        Read more
                      </span>
                    </section>
                  </div>
                </div>
                <div className="relative w-full h-[23rem] xl:h-full group md:w-[50%] xl:w-[50%]">
                  <Image
                    src={"/assets/home-portfolio-2.jpg"}
                    width={"2000"}
                    height={"0"}
                    alt=""
                    className="w-full h-full xl:h-full"
                  />
                  <div className="absolute -bottom-1 w-full h-auto p-10 flex flex-col justify-start gap-5 text-left  opacity-0  group-hover:opacity-100 translate-y-[1rem] group-hover:translate-y-0 bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 transition-all ease-in-out duration-300">
                    <Link
                      href={"#"}
                      className="text-secondary font-bold text-[30px] md:text-[36px] leading-[41.76px] translate-y-[1rem] group-hover:translate-y-0 hover:text-primary text-left transition ease-in-out duration-500"
                    >
                      UI & UX Designs
                    </Link>
                    <p className="translate-y-[1rem] text-secondary group-hover:translate-y-0 transition ease-in-out duration-700">
                      Turpis egestas integer eget aliquet nibh praesent.
                      Accumsan lacus vel facilisis volutpat est egestas dui.
                    </p>
                    <section className="w-full flex justify-start">
                      <span className="flex gap-3 text-secondary">
                        <PulseCircle />
                        Read more
                      </span>
                    </section>
                  </div>
                </div>
                <div className="relative w-full h-[23rem] xl:h-full group md:w-1/2 xl:w-[25%]">
                  <Image
                    src={"/assets/home-portfolio-3.jpg"}
                    width={"2000"}
                    height={"0"}
                    alt=""
                    className="w-full xl:h-full"
                  />
                  <div className="absolute -bottom-1 w-full h-auto p-10 flex flex-col justify-start gap-5 text-left  opacity-0  group-hover:opacity-100 translate-y-[1rem] group-hover:translate-y-0 bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 transition-all ease-in-out duration-300">
                    <Link
                      href={"#"}
                      className="text-secondary font-bold text-[30px] md:text-[36px] leading-[41.76px] translate-y-[1rem] group-hover:translate-y-0 hover:text-primary text-left transition ease-in-out duration-500"
                    >
                      UI & UX Designs
                    </Link>
                    <p className="translate-y-[1rem] text-secondary group-hover:translate-y-0 transition ease-in-out duration-700">
                      Turpis egestas integer eget aliquet nibh praesent.
                      Accumsan lacus vel facilisis volutpat est egestas dui.
                    </p>
                    <section className="w-full flex justify-start">
                      <span className="flex gap-3 text-secondary">
                        <PulseCircle />
                        Read more
                      </span>
                    </section>
                  </div>
                </div>
              </section>
              <section
                ref={gallerySection2}
                className=" relative w-full xl:h-[30rem] flex flex-col xl:flex-row gap-5 md:gap-5 xl:gap-0"
              >
                <div className=" galleryContent1 relative w-full xl:w-1/2 h-96 lg:h-full my-8 xl:my-0  flex justify-center items-center bg-background">
                  <div className="w-full xl:max-w-lg h-auto px-6  flex flex-col gap-10">
                    <h2 className="text-left text-[50px]  before:absolute before:content-[''] before:w-24 before:h-24 before:rounded-full before:bg-primary before:-z-20 -z-10">
                      All Projects
                    </h2>
                    <span>
                      <p className="text-left text-secondary">
                        Dolor sit amet consectetur adipiscing elit ut aliquam
                        purus sit. Euismod nisi porta lorem mollis aliquam ut
                        porttitor. In hac habitasse platea dictumst. Amet massa
                        vitae tortor condimentum lacinia quis.
                      </p>
                    </span>
                    <Link
                      href={"/projects"}
                      className="flex items-center gap-2 text-secondary"
                    >
                      <PulseCircle /> View All
                    </Link>
                  </div>
                </div>
                <section className="galleryContent2 w-full xl:w-1/2 flex flex-wrap md:flex-nowrap gap-5  ">
                  <div className="relative group w-full h-[23rem] xl:h-full md:w-1/2 ">
                    <Image
                      src={"/assets/home-portfolio-3.jpg"}
                      width={"2000"}
                      height={"0"}
                      alt=""
                      className="w-full xl:h-full"
                    />
                    <div className="absolute -bottom-1 w-full h-auto p-10 flex flex-col justify-start gap-5 text-left  opacity-0  group-hover:opacity-100 translate-y-[1rem] group-hover:translate-y-0 bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 transition-all ease-in-out duration-300">
                      <Link
                        href={"#"}
                        className="text-secondary font-bold text-[30px] md:text-[36px] leading-[41.76px] translate-y-[1rem] group-hover:translate-y-0 hover:text-primary text-left transition ease-in-out duration-500"
                      >
                        UI & UX Designs
                      </Link>
                      <p className="translate-y-[1rem] text-secondary group-hover:translate-y-0 transition ease-in-out duration-700">
                        Turpis egestas integer eget aliquet nibh praesent.
                        Accumsan lacus vel facilisis volutpat est egestas dui.
                      </p>
                      <section className="w-full flex justify-start">
                        <span className="flex gap-3 text-secondary">
                          <PulseCircle />
                          Read more
                        </span>
                      </section>
                    </div>
                  </div>
                  <div className="relative group w-full h-[23rem] xl:h-full md:w-1/2 ">
                    <Image
                      src={"/assets/home-portfolio-3.jpg"}
                      width={"2000"}
                      height={"0"}
                      alt=""
                      className="w-full xl:h-full"
                    />
                    <div className="absolute -bottom-1 w-full h-auto p-10 flex flex-col justify-start gap-5 text-left  opacity-0  group-hover:opacity-100 translate-y-[1rem] group-hover:translate-y-0 bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 transition-all ease-in-out duration-300">
                      <Link
                        href={"#"}
                        className="text-secondary font-bold text-[30px] md:text-[36px] leading-[41.76px] translate-y-[1rem] group-hover:translate-y-0 hover:text-primary text-left transition ease-in-out duration-500"
                      >
                        UI & UX Designs
                      </Link>
                      <p className="translate-y-[1rem] text-secondary group-hover:translate-y-0 transition ease-in-out duration-700">
                        Turpis egestas integer eget aliquet nibh praesent.
                        Accumsan lacus vel facilisis volutpat est egestas dui.
                      </p>
                      <section className="w-full flex justify-start">
                        <span className="flex gap-3 text-secondary">
                          <PulseCircle />
                          Read more
                        </span>
                      </section>
                    </div>
                  </div>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Gallery;
