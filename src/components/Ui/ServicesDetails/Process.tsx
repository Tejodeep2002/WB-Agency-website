"use client";
import Image from "next/image";
import React from "react";
import Heading from "../Heading/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SwiperButtonComponent from "../SwiperButtonComponent";

const Process = () => {
  return (
    <section className="w-full h-auto ">
      <section className="w-full h-auto pt-36 pb-20 px-5 md:px-5">
        <section className="w-full max-w-[100rem] mx-auto h-auto ">
          <section className="w-full h-fit flex flex-col">
            <Heading
              heading={"Procedure"}
              subHeading={"Our on Going process steps "}
            />
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              modules={[Pagination, Navigation]}
              navigation={true}
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
              className="relative w-full h-fit grid grid-cols-5 xl:mt-10"
            >
              <SwiperSlide className="relative w-full flex flex-col pl-0 process-padding-left-0 ">
                <section className="w-full h-[1px] absolute  bg-primary top-1/2 left-0">
                  <span className="relative w-full h-full bg-primary"></span>
                </section>
                <section>
                  <div className="w-full h-[340px]  pb-11">
                    <Image
                      src={
                        "https://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Process-Img-1.png"
                      }
                      width={"1000"}
                      height={"0"}
                      alt={""}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="relative w-full h-[1px] before:content-[''] before:absolute before:m-auto before:top-[50px] before:left-[-30%] before:right-0 before:bottom-0  before:w-[1px] before:h-[100px] before:bg-primary before:translate-x-1/2  "></div>
                  <div className="w-full h-[340px]  pt-11  ">
                    <div className="w-full h-full flex flex-col justify-between ">
                      <div className="w-full h-fit text-left">
                        <span className=" text-[60px] leading-[69px] font-semibold border-secondary text-transparent stroke-text hover:text-primary transition ease-in-out duration-500 ">
                          01
                        </span>
                      </div>
                      <div className="w-full h-fit text-[26px] leading-[30.16px] font-semibold text-secondary">
                        <span>Client Consultation</span>
                      </div>
                      <div className="w-full h-fit">
                        <p>
                          Ued vehicula mattis purus. Curabitur at pretium odio,
                          sit amet tincidunt erat. Pellentesque fringilla rutrum
                          nisl, nec vulputate libero mattis vel. Integer
                          bibendum metus ac metus varius, eget vestibulum arcu.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </SwiperSlide>
              <SwiperSlide className="relative w-full flex flex-col pr-20 process-padding-left-0 ">
                <section className="w-full h-[1px] absolute  bg-primary top-1/2 left-0">
                  <span className="relative w-full h-full bg-primary"></span>
                </section>
                <section className="flex flex-col-reverse ">
                  <div className="w-full h-[340px]  pt-11">
                    <Image
                      src={
                        "https://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Process-Img-1.png"
                      }
                      width={"1000"}
                      height={"0"}
                      alt={""}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="relative w-full h-[1px]  before:content-[''] before:absolute before:m-auto before:top-[-100px] before:left-[-30%] before:right-0 before:bottom-0  before:w-[1px] before:h-[100px] before:bg-primary before:translate-x-1/2  "></div>
                  <div className="w-full h-[340px]  pb-11  ">
                    <div className="w-full h-full flex flex-col justify-between ">
                      <div className="w-full h-fit text-[26px] leading-[30.16px] font-semibold text-secondary">
                        <span>Project Planning</span>
                      </div>
                      <div className="w-full h-fit">
                        <p>
                          Ued vehicula mattis purus. Curabitur at pretium odio,
                          sit amet tincidunt erat. Pellentesque fringilla rutrum
                          nisl, nec vulputate libero mattis vel. Integer
                          bibendum metus ac metus varius, eget vestibulum arcu.
                        </p>
                      </div>
                      <div className="w-full h-fit text-left">
                        <span className=" text-[60px] leading-[69px] font-semibold border-secondary text-transparent stroke-text hover:text-primary transition ease-in-out duration-500 ">
                          02
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
              </SwiperSlide>
              <SwiperSlide className="relative w-full flex flex-col pr-20 process-padding-left-0">
                <section className="w-full h-[1px] absolute  bg-primary top-1/2 left-0">
                  <span className="relative w-full h-full bg-primary"></span>
                </section>
                <section>
                  <div className="w-full h-[340px]  pb-11">
                    <Image
                      src={
                        "https://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Process-Img-1.png"
                      }
                      width={"1000"}
                      height={"0"}
                      alt={""}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="relative w-full h-[1px]  before:content-[''] before:absolute before:m-auto before:top-[50px] before:left-[-30%] before:right-0 before:bottom-0  before:w-[1px] before:h-[100px] before:bg-primary before:translate-x-1/2  "></div>
                  <div className="w-full h-[340px]  pt-11  ">
                    <div className="w-full h-full flex flex-col justify-between ">
                      <div className="w-full h-fit text-left">
                        <span className=" text-[60px] leading-[69px] font-semibold border-secondary text-transparent stroke-text hover:text-primary transition ease-in-out duration-500 ">
                          03
                        </span>
                      </div>
                      <div className="w-full h-fit text-[26px] leading-[30.16px] font-semibold text-secondary">
                        <span>Design Mockups</span>
                      </div>
                      <div className="w-full h-fit">
                        <p>
                          Ued vehicula mattis purus. Curabitur at pretium odio,
                          sit amet tincidunt erat. Pellentesque fringilla rutrum
                          nisl, nec vulputate libero mattis vel. Integer
                          bibendum metus ac metus varius, eget vestibulum arcu.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </SwiperSlide>
              <SwiperSlide className="relative w-full flex flex-col pr-20 process-padding-left-0 ">
                <section className="w-full h-[1px] absolute  bg-primary top-1/2 left-0">
                  <span className="relative w-full h-full bg-primary"></span>
                </section>
                <section className="flex flex-col-reverse ">
                  <div className="w-full h-[340px]  pt-11">
                    <Image
                      src={
                        "https://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Process-Img-1.png"
                      }
                      width={"1000"}
                      height={"0"}
                      alt={""}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="relative w-full h-[1px]  before:content-[''] before:absolute before:m-auto before:top-[-100px] before:left-[-30%] before:right-0 before:bottom-0  before:w-[1px] before:h-[100px] before:bg-primary before:translate-x-1/2  "></div>
                  <div className="w-full h-[340px]  pb-11  ">
                    <div className="w-full h-full flex flex-col justify-between ">
                      <div className="w-full h-fit text-[26px] leading-[30.16px] font-semibold text-secondary">
                        <span>Development & Testing</span>
                      </div>
                      <div className="w-full h-fit">
                        <p>
                          Ued vehicula mattis purus. Curabitur at pretium odio,
                          sit amet tincidunt erat. Pellentesque fringilla rutrum
                          nisl, nec vulputate libero mattis vel. Integer
                          bibendum metus ac metus varius, eget vestibulum arcu.
                        </p>
                      </div>
                      <div className="w-full h-fit text-left">
                        <span className=" text-[60px] leading-[69px] font-semibold border-secondary text-transparent stroke-text hover:text-primary transition ease-in-out duration-500 ">
                          04
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
              </SwiperSlide>
              <SwiperSlide className="relative w-full flex flex-col pr-20 process-padding-left-0">
                <section className="w-full h-[1px] absolute  bg-primary top-1/2 left-0">
                  <span className="relative w-full h-full bg-primary"></span>
                </section>
                <section>
                  <div className="w-full h-[340px]  pb-11">
                    <Image
                      src={
                        "https://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Process-Img-1.png"
                      }
                      width={"1000"}
                      height={"0"}
                      alt={""}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="relative w-full h-[1px] before:content-[''] before:absolute before:m-auto before:top-[50px] before:left-[-30%] before:right-0 before:bottom-0  before:w-[1px] before:h-[100px] before:bg-primary before:translate-x-1/2  "></div>
                  <div className="w-full h-[340px]  pt-11  ">
                    <div className="w-full h-full flex flex-col justify-between ">
                      <div className="w-full h-fit text-left">
                        <span className=" text-[60px] leading-[69px] font-semibold border-secondary text-transparent stroke-text hover:text-primary transition ease-in-out duration-500 ">
                          05
                        </span>
                      </div>
                      <div className="w-full h-fit text-[26px] leading-[30.16px] font-semibold text-secondary">
                        <span>Ongoing Support</span>
                      </div>
                      <div className="w-full h-fit">
                        <p>
                          Ued vehicula mattis purus. Curabitur at pretium odio,
                          sit amet tincidunt erat. Pellentesque fringilla rutrum
                          nisl, nec vulputate libero mattis vel. Integer
                          bibendum metus ac metus varius, eget vestibulum arcu.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </SwiperSlide>
              <SwiperButtonComponent/>
            </Swiper>

            {/* <section className="relative w-full h-fit grid grid-cols-5 xl:mt-10">
              <section className="relative w-full flex flex-col pl-0 process-padding-left-0 ">
                <section className="w-full h-[1px] absolute  bg-primary top-1/2 left-0">
                  <span className="relative w-full h-full bg-primary"></span>
                </section>
                <section>
                  <div className="w-full h-[340px]  pb-11">
                    <Image
                      src={
                        "https://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Process-Img-1.png"
                      }
                      width={"1000"}
                      height={"0"}
                      alt={""}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="relative w-full h-[1px] before:content-[''] before:absolute before:m-auto before:top-[50px] before:left-[-30%] before:right-0 before:bottom-0  before:w-[1px] before:h-[100px] before:bg-primary before:translate-x-1/2  "></div>
                  <div className="w-full h-[340px]  pt-11  ">
                    <div className="w-full h-full flex flex-col justify-between ">
                      <div className="w-full h-fit text-left">
                        <span className=" text-[60px] leading-[69px] font-semibold border-secondary text-transparent stroke-text hover:text-primary transition ease-in-out duration-500 ">
                          01
                        </span>
                      </div>
                      <div className="w-full h-fit text-[26px] leading-[30.16px] font-semibold text-secondary">
                        <span>Client Consultation</span>
                      </div>
                      <div className="w-full h-fit">
                        <p>
                          Ued vehicula mattis purus. Curabitur at pretium odio,
                          sit amet tincidunt erat. Pellentesque fringilla rutrum
                          nisl, nec vulputate libero mattis vel. Integer
                          bibendum metus ac metus varius, eget vestibulum arcu.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
              <section className="relative w-full flex flex-col pr-20 process-padding-left-0 ">
                <section className="w-full h-[1px] absolute  bg-primary top-1/2 left-0">
                  <span className="relative w-full h-full bg-primary"></span>
                </section>
                <section className="flex flex-col-reverse ">
                  <div className="w-full h-[340px]  pt-11">
                    <Image
                      src={
                        "https://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Process-Img-1.png"
                      }
                      width={"1000"}
                      height={"0"}
                      alt={""}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="relative w-full h-[1px]  before:content-[''] before:absolute before:m-auto before:top-[-100px] before:left-[-30%] before:right-0 before:bottom-0  before:w-[1px] before:h-[100px] before:bg-primary before:translate-x-1/2  "></div>
                  <div className="w-full h-[340px]  pb-11  ">
                    <div className="w-full h-full flex flex-col justify-between ">
                      <div className="w-full h-fit text-[26px] leading-[30.16px] font-semibold text-secondary">
                        <span>Project Planning</span>
                      </div>
                      <div className="w-full h-fit">
                        <p>
                          Ued vehicula mattis purus. Curabitur at pretium odio,
                          sit amet tincidunt erat. Pellentesque fringilla rutrum
                          nisl, nec vulputate libero mattis vel. Integer
                          bibendum metus ac metus varius, eget vestibulum arcu.
                        </p>
                      </div>
                      <div className="w-full h-fit text-left">
                        <span className=" text-[60px] leading-[69px] font-semibold border-secondary text-transparent stroke-text hover:text-primary transition ease-in-out duration-500 ">
                          02
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
              <section className="relative w-full flex flex-col pr-20 process-padding-left-0">
                <section className="w-full h-[1px] absolute  bg-primary top-1/2 left-0">
                  <span className="relative w-full h-full bg-primary"></span>
                </section>
                <section>
                  <div className="w-full h-[340px]  pb-11">
                    <Image
                      src={
                        "https://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Process-Img-1.png"
                      }
                      width={"1000"}
                      height={"0"}
                      alt={""}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="relative w-full h-[1px]  before:content-[''] before:absolute before:m-auto before:top-[50px] before:left-[-30%] before:right-0 before:bottom-0  before:w-[1px] before:h-[100px] before:bg-primary before:translate-x-1/2  "></div>
                  <div className="w-full h-[340px]  pt-11  ">
                    <div className="w-full h-full flex flex-col justify-between ">
                      <div className="w-full h-fit text-left">
                        <span className=" text-[60px] leading-[69px] font-semibold border-secondary text-transparent stroke-text hover:text-primary transition ease-in-out duration-500 ">
                          03
                        </span>
                      </div>
                      <div className="w-full h-fit text-[26px] leading-[30.16px] font-semibold text-secondary">
                        <span>Design Mockups</span>
                      </div>
                      <div className="w-full h-fit">
                        <p>
                          Ued vehicula mattis purus. Curabitur at pretium odio,
                          sit amet tincidunt erat. Pellentesque fringilla rutrum
                          nisl, nec vulputate libero mattis vel. Integer
                          bibendum metus ac metus varius, eget vestibulum arcu.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
              <section className="relative w-full flex flex-col pr-20 process-padding-left-0 ">
                <section className="w-full h-[1px] absolute  bg-primary top-1/2 left-0">
                  <span className="relative w-full h-full bg-primary"></span>
                </section>
                <section className="flex flex-col-reverse ">
                  <div className="w-full h-[340px]  pt-11">
                    <Image
                      src={
                        "https://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Process-Img-1.png"
                      }
                      width={"1000"}
                      height={"0"}
                      alt={""}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="relative w-full h-[1px]  before:content-[''] before:absolute before:m-auto before:top-[-100px] before:left-[-30%] before:right-0 before:bottom-0  before:w-[1px] before:h-[100px] before:bg-primary before:translate-x-1/2  "></div>
                  <div className="w-full h-[340px]  pb-11  ">
                    <div className="w-full h-full flex flex-col justify-between ">
                      <div className="w-full h-fit text-[26px] leading-[30.16px] font-semibold text-secondary">
                        <span>Development & Testing</span>
                      </div>
                      <div className="w-full h-fit">
                        <p>
                          Ued vehicula mattis purus. Curabitur at pretium odio,
                          sit amet tincidunt erat. Pellentesque fringilla rutrum
                          nisl, nec vulputate libero mattis vel. Integer
                          bibendum metus ac metus varius, eget vestibulum arcu.
                        </p>
                      </div>
                      <div className="w-full h-fit text-left">
                        <span className=" text-[60px] leading-[69px] font-semibold border-secondary text-transparent stroke-text hover:text-primary transition ease-in-out duration-500 ">
                          04
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
              <section className="relative w-full flex flex-col pr-20 process-padding-left-0">
                <section className="w-full h-[1px] absolute  bg-primary top-1/2 left-0">
                  <span className="relative w-full h-full bg-primary"></span>
                </section>
                <section>
                  <div className="w-full h-[340px]  pb-11">
                    <Image
                      src={
                        "https://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Process-Img-1.png"
                      }
                      width={"1000"}
                      height={"0"}
                      alt={""}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="relative w-full h-[1px] before:content-[''] before:absolute before:m-auto before:top-[50px] before:left-[-30%] before:right-0 before:bottom-0  before:w-[1px] before:h-[100px] before:bg-primary before:translate-x-1/2  "></div>
                  <div className="w-full h-[340px]  pt-11  ">
                    <div className="w-full h-full flex flex-col justify-between ">
                      <div className="w-full h-fit text-left">
                        <span className=" text-[60px] leading-[69px] font-semibold border-secondary text-transparent stroke-text hover:text-primary transition ease-in-out duration-500 ">
                          05
                        </span>
                      </div>
                      <div className="w-full h-fit text-[26px] leading-[30.16px] font-semibold text-secondary">
                        <span>Ongoing Support</span>
                      </div>
                      <div className="w-full h-fit">
                        <p>
                          Ued vehicula mattis purus. Curabitur at pretium odio,
                          sit amet tincidunt erat. Pellentesque fringilla rutrum
                          nisl, nec vulputate libero mattis vel. Integer
                          bibendum metus ac metus varius, eget vestibulum arcu.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
            </section> */}
          </section>
        </section>
      </section>
    </section>
  );
};

export default Process;
