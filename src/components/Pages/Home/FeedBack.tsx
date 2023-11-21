"use client";
import React from "react";
import PulseCircle from "../../Ui/PulseCircle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineStar } from "react-icons/ai";
import Image from "next/image";
import Heading from "../../Ui/Heading/Heading";
const FeedBack = () => {
  return (
    <section className="w-full h-auto bg-background2 ">
      <section className="w-full h-auto py-10 lg:py-36">
        <section className="w-full max-w-[100rem]  mx-auto flex flex-col gap-14 ">
          <Heading
            heading={"Client Feedback"}
            subHeading={"Happy Words From Happy Customer"}
          />
          <section className="w-full text-white px-10 xl:px-5">
            <Swiper
              slidesPerView={"auto"}
              style={{ paddingBottom: "1rem" }}
              modules={[Pagination, Autoplay]}
              autoplay={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 45,
                },
                1100: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="mySwiper "
            >
              <SwiperSlide className="w-full lg:w-[500px] h-auto">
                <section className=" w-full px-8 pb-6 flex justify-end">
                  <span className="w-fit flex">
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </span>
                </section>
                <section
                  id="description"
                  className="w-full h-auto bg-gradient-to-br from-background3 to-background3 bg-no-repeat bg-[length:100%_80%] z-0"
                >
                  <section className="w-full h-auto py-[40px] px-[20px] lg:py-[66px] lg:px-12 xl:px-20">
                    <p>
                      Turpis massa tincidunt dui ut ornare lectus sit. Vitae
                      ultricies leo integer malesuada. Amet massa vitae tortor
                      condimentum. Elementum nibh tellus molestie nunc non
                      blandit massa enim. Varius vel pharetra.{" "}
                    </p>
                  </section>
                  <section className=" w-full h-auto flex items-center gap-12 px-[20px] lg:px-[50px]">
                    <Image
                      src={
                        "https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-testimonial-4.png"
                      }
                      width={"1080"}
                      height={"1920"}
                      alt=""
                      className=" w-[86px] h-[86px] bg-primary rounded-full "
                    />
                    <span className=" font-normal text-base text-grey1">
                      <span className="text-primary">Lisha</span> - Manager
                    </span>
                  </section>
                </section>
              </SwiperSlide>
              <SwiperSlide className="w-full lg:w-[500px] h-auto">
                <section className=" w-full px-8 pb-6 flex justify-end">
                  <span className="w-fit flex">
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </span>
                </section>
                <section
                  id="description"
                  className="w-full h-auto bg-gradient-to-br from-background3 to-background3 bg-no-repeat bg-[length:100%_80%] z-0"
                >
                  <section className="w-full h-auto py-[40px] px-[20px] lg:py-[66px] lg:px-12 xl:px-20">
                    <p>
                      Turpis massa tincidunt dui ut ornare lectus sit. Vitae
                      ultricies leo integer malesuada. Amet massa vitae tortor
                      condimentum. Elementum nibh tellus molestie nunc non
                      blandit massa enim. Varius vel pharetra.{" "}
                    </p>
                  </section>
                  <section className=" w-full h-auto flex items-center gap-12 px-[20px] lg:px-[50px]">
                    <Image
                      src={
                        "https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-testimonial-4.png"
                      }
                      width={"1080"}
                      height={"1920"}
                      alt=""
                      className=" w-[86px] h-[86px] bg-primary rounded-full "
                    />
                    <span className=" font-normal text-base text-grey1">
                      <span className="text-primary">Lisha</span> - Manager
                    </span>
                  </section>
                </section>
              </SwiperSlide>
              <SwiperSlide className="w-full lg:w-[500px] h-auto">
                <section className=" w-full px-8 pb-6 flex justify-end">
                  <span className="w-fit flex">
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </span>
                </section>
                <section
                  id="description"
                  className="w-full h-auto bg-gradient-to-br from-background3 to-background3 bg-no-repeat bg-[length:100%_80%] z-0"
                >
                  <section className="w-full h-auto py-[40px] px-[20px] lg:py-[66px] lg:px-12 xl:px-20">
                    <p>
                      Turpis massa tincidunt dui ut ornare lectus sit. Vitae
                      ultricies leo integer malesuada. Amet massa vitae tortor
                      condimentum. Elementum nibh tellus molestie nunc non
                      blandit massa enim. Varius vel pharetra.{" "}
                    </p>
                  </section>
                  <section className=" w-full h-auto flex items-center gap-12 px-[20px] lg:px-[50px]">
                    <Image
                      src={
                        "https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-testimonial-4.png"
                      }
                      width={"1080"}
                      height={"1920"}
                      alt=""
                      className=" w-[86px] h-[86px] bg-primary rounded-full "
                    />
                    <span className=" font-normal text-base text-grey1">
                      <span className="text-primary">Lisha</span> - Manager
                    </span>
                  </section>
                </section>
              </SwiperSlide>
              <SwiperSlide className="w-full lg:w-[500px] h-auto">
                <section className=" w-full px-8 pb-6 flex justify-end">
                  <span className="w-fit flex">
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </span>
                </section>
                <section
                  id="description"
                  className="w-full h-auto bg-gradient-to-br from-background3 to-background3 bg-no-repeat bg-[length:100%_80%] z-0"
                >
                  <section className="w-full h-auto py-[40px] px-[20px] lg:py-[66px] lg:px-12 xl:px-20">
                    <p>
                      Turpis massa tincidunt dui ut ornare lectus sit. Vitae
                      ultricies leo integer malesuada. Amet massa vitae tortor
                      condimentum. Elementum nibh tellus molestie nunc non
                      blandit massa enim. Varius vel pharetra.{" "}
                    </p>
                  </section>
                  <section className=" w-full h-auto flex items-center gap-12 px-[20px] lg:px-[50px]">
                    <Image
                      src={
                        "https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-testimonial-4.png"
                      }
                      width={"1080"}
                      height={"1920"}
                      alt=""
                      className=" w-[86px] h-[86px] bg-primary rounded-full "
                    />
                    <span className=" font-normal text-base text-grey1">
                      <span className="text-primary">Lisha</span> - Manager
                    </span>
                  </section>
                </section>
              </SwiperSlide>
            </Swiper>
          </section>
        </section>
      </section>
    </section>
  );
};

export default FeedBack;
