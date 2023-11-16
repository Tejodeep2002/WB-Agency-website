"use client";
import React, { useRef } from "react";
import { BsInstagram } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import useIsomorphicLayoutEffect from "@/helper/isomorphicEffect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Social_carousel = () => {
  const socialCarousel = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(socialCarousel.current, {
        x: 100,
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: socialCarousel.current,
          scroller: "main",
          start: "top 80%",
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <section ref={socialCarousel} className="w-full h-auto ">
      <section className="w-full h-auto pb-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          modules={[Pagination, Autoplay]}
          autoplay={true}
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1536: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          className="mySwiper w-full h-fit px-1 cursor-grab"
        >
          <SwiperSlide className="relative w-full h-full group">
          
            <Image
              src={"/assets/home-one-instagram-1.jpg"}
              width={"1000"}
              height={"0"}
              alt={""}
              className="relative"
            />
            <div className="absolute w-full h-full bg-black scale-90 opacity-0  group-hover:visible group-hover:scale-100 group-hover:opacity-90 top-0 transition ease-in-out duration-700 ">
              <div className="w-full h-full flex flex-col items-center justify-center border border-primary">
                <div className="w-fit h-fit  flex flex-col items-center gap-3 ">
                  <div className="w-24 h-24 rounded-full p-6 border-4 border-secondary">
                    <BsInstagram className=" w-full h-full text-secondary" />
                  </div>
                  <p className="mt-3">Follow Us on Instagram</p>
                  <Link
                    rel="stylesheet"
                    href=""
                    className="text-[26px] text-secondary leading-[30px] tracking-wide"
                  >
                    @Gaaga
                  </Link>
                </div>
              </div>
            </div>
            {/* </div> */}
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-full group">
            {/* <div className="relative w-full h-full group"> */}
            <Image
              src={"/assets/home-one-instagram-1.jpg"}
              width={"1000"}
              height={"0"}
              alt={""}
              className="relative"
            />
            <div className="absolute w-full h-full bg-black scale-90 opacity-0  group-hover:visible group-hover:scale-100 group-hover:opacity-90 top-0 transition ease-in-out duration-700 ">
              <div className="w-full h-full flex flex-col items-center justify-center border border-primary">
                <div className="w-fit h-fit  flex flex-col items-center gap-3 ">
                  <div className="w-24 h-24 rounded-full p-6 border-4 border-secondary">
                    <BsInstagram className=" w-full h-full text-secondary" />
                  </div>
                  <p className="mt-3">Follow Us on Instagram</p>
                  <Link
                    rel="stylesheet"
                    href=""
                    className="text-[26px] text-secondary leading-[30px] tracking-wide"
                  >
                    @Gaaga
                  </Link>
                </div>
              </div>
            </div>
            {/* </div> */}
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-full group">
            {/* <div className="relative w-full h-full group"> */}
            <Image
              src={"/assets/home-one-instagram-1.jpg"}
              width={"1000"}
              height={"0"}
              alt={""}
              className="relative"
            />
            <div className="absolute w-full h-full bg-black scale-90 opacity-0  group-hover:visible group-hover:scale-100 group-hover:opacity-90 top-0 transition ease-in-out duration-700 ">
              <div className="w-full h-full flex flex-col items-center justify-center border border-primary">
                <div className="w-fit h-fit  flex flex-col items-center gap-3 ">
                  <div className="w-24 h-24 rounded-full p-6 border-4 border-secondary">
                    <BsInstagram className=" w-full h-full text-secondary" />
                  </div>
                  <p className="mt-3">Follow Us on Instagram</p>
                  <Link
                    rel="stylesheet"
                    href=""
                    className="text-[26px] text-secondary leading-[30px] tracking-wide"
                  >
                    @Gaaga
                  </Link>
                </div>
              </div>
            </div>
            {/* </div> */}
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-full group">
            {/* <div className="relative w-full h-full group"> */}
            <Image
              src={"/assets/home-one-instagram-1.jpg"}
              width={"1000"}
              height={"0"}
              alt={""}
              className="relative"
            />
            <div className="absolute w-full h-full bg-black scale-90 opacity-0  group-hover:visible group-hover:scale-100 group-hover:opacity-90 top-0 transition ease-in-out duration-700 ">
              <div className="w-full h-full flex flex-col items-center justify-center border border-primary">
                <div className="w-fit h-fit  flex flex-col items-center gap-3 ">
                  <div className="w-24 h-24 rounded-full p-6 border-4 border-secondary">
                    <BsInstagram className=" w-full h-full text-secondary" />
                  </div>
                  <p className="mt-3">Follow Us on Instagram</p>
                  <Link
                    rel="stylesheet"
                    href=""
                    className="text-[26px] text-secondary leading-[30px] tracking-wide"
                  >
                    @Gaaga
                  </Link>
                </div>
              </div>
            </div>
            {/* </div> */}
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-full group">
            {/* <div className="relative w-full h-full group"> */}
            <Image
              src={"/assets/home-one-instagram-1.jpg"}
              width={"1000"}
              height={"0"}
              alt={""}
              className="relative"
            />
            <div className="absolute w-full h-full bg-black scale-90 opacity-0  group-hover:visible group-hover:scale-100 group-hover:opacity-90 top-0 transition ease-in-out duration-700 ">
              <div className="w-full h-full flex flex-col items-center justify-center border border-primary">
                <div className="w-fit h-fit  flex flex-col items-center gap-3 ">
                  <div className="w-24 h-24 rounded-full p-6 border-4 border-secondary">
                    <BsInstagram className=" w-full h-full text-secondary" />
                  </div>
                  <p className="mt-3">Follow Us on Instagram</p>
                  <Link
                    rel="stylesheet"
                    href=""
                    className="text-[26px] text-secondary leading-[30px] tracking-wide"
                  >
                    @Gaaga
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </section>
  );
};

export default Social_carousel;
