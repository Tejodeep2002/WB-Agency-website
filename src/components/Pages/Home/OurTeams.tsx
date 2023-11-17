"use client";
import Heading from "@/components/Ui/Heading/Heading";
import TeamPicture from "@/components/Ui/TeamPicture";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import SwiperButtonComponent from "@/components/Ui/SwiperButtonComponent";

const OurTeams = () => {
  return (
    <section className="relative w-full h-auto bg-background2 ">
      <section className="w-full py-20 lg:py-36 ">
        <section className="w-full max-w-[100rem] mx-auto px-5 md:px-10 flex flex-col gap-7 ">
          <Heading
            heading={"Out Team"}
            subHeading={"Speak With One of Our Experts"}
          />
          {/* <section className="w-full h-auto grid grid-cols-4 gap-x-5 gap-y-16 "> */}
          {/* <section className="w-full h-auto flex flex-col md:flex-row flex-wrap gap-x-5 gap-y-10 "> */}
          {/* <section className="w-full h-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-x-5 gap-y-10 ">
            <TeamPicture />
            <TeamPicture />
           
          </section> */}
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            modules={[Pagination, Navigation]}
            navigation={true}
            breakpoints={{
              480: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1536: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            className="w-full h-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-x-5 gap-y-10 "
          >
            <SwiperSlide className="w-full ">
              <TeamPicture />
            </SwiperSlide>
            <SwiperSlide>
              <TeamPicture />
            </SwiperSlide>
            <SwiperSlide>
              <TeamPicture />
            </SwiperSlide>
            {/* <SwiperButtonComponent /> */}
          </Swiper>
        </section>
      </section>
    </section>
  );
};

export default OurTeams;
