"use client";
import Image from "next/image";
import React, { useRef } from "react";
import PulseCircle from "../common/PulseCircle";
import useIsomorphicLayoutEffect from "@/helper/isomorphicEffect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Gallery = () => {
  const gallery = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".galleryHeading", {
        x: -100,
        duration: 1,
        opacity: 0,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gallery.current,
          scroller: "main",
          start: "top 90%",
   
        },
      });
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
    <section
      ref={gallery}
      id="gallery"
      className="relative w-full h-auto border"
    >
      <section className="w-full h-full">
        <section className="w-full flex flex-col gap-7 mx-auto text-white">
          <section className=" flex flex-col gap-4 items-center">
            <span className="galleryHeading text-2xl leading-7 text-subHeading flex gap-4">
              <PulseCircle />
              Gallery
              <PulseCircle flowDirection="right" />
            </span>
            <h2 className="galleryHeading text-6xl mb-10">
              Our Project Portfolio
            </h2>
          </section>
          <section className="galleryContent w-full h-auto">
            <section className="w-full h-auto  ">
              <section className="w-full h-full grid grid-cols-2 lg:grid-cols-4 gap-5">
                <span className="relative w-full row-span-2 lg:row-span-1">
                  <Image
                    src={"/assets/home-portfolio-1.jpg"}
                    width={"2000"}
                    height={"0"}
                    alt=""
                    className="absolute top-0  w-full"
                  />
                </span>
                <span className="w-full col-span-1 lg:col-span-2">
                  <Image
                    src={"/assets/home-portfolio-2.jpg"}
                    width={"2000"}
                    height={"0"}
                    alt=""
                    className="w-full"
                  />
                </span>
                <span className="w-full ">
                  <Image
                    src={"/assets/home-portfolio-3.jpg"}
                    width={"2000"}
                    height={"0"}
                    alt=""
                    className="w-full"
                  />
                </span>
                <section className="galleryContent1 w-full h-96 lg:h-full grid-cols-1 col-span-2 flex justify-center items-center bg-background">
                  <div className="w-full max-w-lg h-auto pr-6 flex flex-col gap-10">
                    <h2 className="text-left before:absolute before:content-[''] before:w-24 before:h-24 before:rounded-full before:bg-primary before:-z-10 z-10">
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
                      <PulseCircle /> View
                    </span>
                  </div>
                </section>
                <span className="galleryContent2 w-full">
                  <Image
                    src={"/assets/home-portfolio-3.jpg"}
                    width={"2000"}
                    height={"0"}
                    alt=""
                    className="w-full"
                  />
                </span>
                <span className="galleryContent2 w-full">
                  <Image
                    src={"/assets/home-portfolio-3.jpg"}
                    width={"2000"}
                    height={"0"}
                    alt=""
                    className="w-full"
                  />
                </span>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Gallery;
