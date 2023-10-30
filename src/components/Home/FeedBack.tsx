"use client";
import React from "react";
import PulseCircle from "../common/PulseCircle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineStar} from 'react-icons/ai';
import Image from "next/image";
const FeedBack = () => {
  return (
    <section className="w-full h-auto bg-background2 ">
      <section className="w-full py-36">
        <section className="w-full max-w-[100rem]  mx-auto flex flex-col gap-14 ">
          <section className="flex flex-col gap-4 items-center">
            <span className="text-2xl leading-7 text-grey1 flex gap-4">
              <PulseCircle />
              Client Feedback
              <PulseCircle flowDirection="right" />
            </span>
            <h2 className="text-6xl mb-10">Happy Words From Happy Customer</h2>
          </section>
          <section className="w-full text-white">
            <Swiper
              slidesPerView={3}
              spaceBetween={60}
              // pagination={{
              //   clickable: true,
              // }}
              modules={[Autoplay]}
              autoplay={{
                delay: 2500,
              }}
              className="mySwiper"
            >
              <SwiperSlide className=" w-[500px] h-auto">
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
                  className="w-full h-auto  bg-gradient-to-br from-background3 to-background3 bg-no-repeat bg-[length:100%_80%] z-0"
                >
                  <section className="w-full h-auto py-[66px] px-20">
                    <p>
                      Turpis massa tincidunt dui ut ornare lectus sit. Vitae
                      ultricies leo integer malesuada. Amet massa vitae tortor
                      condimentum. Elementum nibh tellus molestie nunc non
                      blandit massa enim. Varius vel pharetra.{" "}
                    </p>
                  </section>
                  <section className=" w-full h-auto flex items-center gap-12 px-[50px]">
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
              <SwiperSlide className=" w-[500px] h-auto">
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
                  className="w-full h-auto  bg-gradient-to-br from-background3 to-background3 bg-no-repeat bg-[length:100%_80%] z-0"
                >
                  <section className="w-full h-auto py-[66px] px-20">
                    <p>
                      Turpis massa tincidunt dui ut ornare lectus sit. Vitae
                      ultricies leo integer malesuada. Amet massa vitae tortor
                      condimentum. Elementum nibh tellus molestie nunc non
                      blandit massa enim. Varius vel pharetra.{" "}
                    </p>
                  </section>
                  <section className=" w-full h-auto flex items-center gap-12 px-[50px]">
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
              <SwiperSlide className=" w-[500px] h-auto">
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
                  className="w-full h-auto  bg-gradient-to-br from-background3 to-background3 bg-no-repeat bg-[length:100%_80%] z-0"
                >
                  <section className="w-full h-auto py-[66px] px-20">
                    <p>
                      Turpis massa tincidunt dui ut ornare lectus sit. Vitae
                      ultricies leo integer malesuada. Amet massa vitae tortor
                      condimentum. Elementum nibh tellus molestie nunc non
                      blandit massa enim. Varius vel pharetra.{" "}
                    </p>
                  </section>
                  <section className=" w-full h-auto flex items-center gap-12 px-[50px]">
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
              <SwiperSlide className=" w-[500px] h-auto">
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
                  className="w-full h-auto  bg-gradient-to-br from-background3 to-background3 bg-no-repeat bg-[length:100%_80%] z-0"
                >
                  <section className="w-full h-auto py-[66px] px-20">
                    <p>
                      Turpis massa tincidunt dui ut ornare lectus sit. Vitae
                      ultricies leo integer malesuada. Amet massa vitae tortor
                      condimentum. Elementum nibh tellus molestie nunc non
                      blandit massa enim. Varius vel pharetra.{" "}
                    </p>
                  </section>
                  <section className=" w-full h-auto flex items-center gap-12 px-[50px]">
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
