"use client";
import Image from "next/image";
import React, { FC } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

interface FeedbackCarouselProps {
  feedbacks: any;
}

const FeedbackCarousel: FC<FeedbackCarouselProps> = ({ feedbacks }) => {
  return (
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
        {feedbacks.map((feedback:any) => (
          <SwiperSlide key={feedback._id} className="w-full lg:w-[500px] h-auto">
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
                    {
                        feedback.message
                    }
               
                </p>
              </section>
              <section className=" w-full h-auto flex items-center gap-12 px-[20px] lg:px-[50px]">
                <Image
                  src={
                    feedback.image
                  }
                  width={"1080"}
                  height={"1920"}
                  alt=""
                  className=" w-[86px] h-[86px] bg-primary rounded-full "
                />
                <span className=" font-normal text-base text-grey1">
                  <span className="text-primary">{ feedback.clientName}</span> - {feedback.clientPosition}
                </span>
              </section>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FeedbackCarousel;