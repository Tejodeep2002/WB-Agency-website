import Heading from "@/components/Ui/Heading/Heading";
import PulseCircle from "@/components/Ui/PulseCircle";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Core_Services = () => {
  return (
    <section className="w-full h-auto">
      <section className="w-full h-auto flex flex-col items-center">
        {/* <Heading heading={"Services"} subHeading={"We can offer"} /> */}
        <h1>We can offer</h1>
        <section className="w-full h-auto  xl:mt-10 ">
          {/* <section className="w-full h-full flex flex-col md:flex-row md:flex-wrap  lg:gap-0  text-secondary border-tertiary "> */}
          <section className="w-full h-full  grid grid-cols-4 text-secondary border-tertiary ">
            <section className="w-full h-auto">
              <div className="relative w-full h-[20rem] group border-x border-secondary  ">
                <div className="relative flex flex-col  top-0 left-0 bottom-0 right-0 xl:flex items-center px-16 mx-auto">
                  <Link
                    href={"#"}
                    className=" text-secondary font-bold text-[30px] md:text-[36px] leading-[41.76px] group-hover:text-primary text-left transition ease-in-out duration-500"
                  >
                    Ecommerce Solution
                  </Link>
                  <span className="">
                    <p>
                      Pellentesque diam volutpat commodo sed egestas. Mattis
                      ullamcorper velit sed ullamcorper morbi. Quis vel eros
                      donec ac odio.
                    </p>
                  </span>
                </div>
                <Image
                  src={"/assets/services/home-1-service-1.jpg"}
                  width={"1080"}
                  height={"1080"}
                  alt={""}
                  className="xl:absolute w-full xl:scale-75 xl:opacity-0 group-hover:visible group-hover:scale-100 group-hover:opacity-100 top-0 transition ease-in-out duration-300 "
                />
              </div>
            </section>
            <section className="w-full h-auto">
              <div className="relative w-full h-[20rem] group border-x border-secondary  ">
                <div className="relative flex flex-col  top-0 left-0 bottom-0 right-0 xl:flex items-center px-16 mx-auto">
                  <Link
                    href={"#"}
                    className=" text-secondary font-bold text-[30px] md:text-[36px] leading-[41.76px] group-hover:text-primary text-left transition ease-in-out duration-500"
                  >
                    Ecommerce Solution
                  </Link>
                  <span className="">
                    <p>
                      Pellentesque diam volutpat commodo sed egestas. Mattis
                      ullamcorper velit sed ullamcorper morbi. Quis vel eros
                      donec ac odio.
                    </p>
                  </span>
                </div>
                <Image
                  src={"/assets/services/home-1-service-1.jpg"}
                  width={"1080"}
                  height={"1080"}
                  alt={""}
                  className="xl:absolute w-full xl:scale-75 xl:opacity-0 group-hover:visible group-hover:scale-100 group-hover:opacity-100 top-0 transition ease-in-out duration-300 "
                />
              </div>
            </section>
            <section className="w-full h-auto">
              <div className="relative w-full h-[20rem] group border-x border-secondary  ">
                <div className="relative flex flex-col  top-0 left-0 bottom-0 right-0 xl:flex items-center px-16 mx-auto">
                  <Link
                    href={"#"}
                    className=" text-secondary font-bold text-[30px] md:text-[36px] leading-[41.76px] group-hover:text-primary text-left transition ease-in-out duration-500"
                  >
                    Ecommerce Solution
                  </Link>
                  <span className="">
                    <p>
                      Pellentesque diam volutpat commodo sed egestas. Mattis
                      ullamcorper velit sed ullamcorper morbi. Quis vel eros
                      donec ac odio.
                    </p>
                  </span>
                </div>
                <Image
                  src={"/assets/services/home-1-service-1.jpg"}
                  width={"1080"}
                  height={"1080"}
                  alt={""}
                  className="xl:absolute w-full xl:scale-75 xl:opacity-0 group-hover:visible group-hover:scale-100 group-hover:opacity-100 top-0 transition ease-in-out duration-300 "
                />
              </div>
            </section>
            <section className="w-full h-auto">
              <div className="relative w-full h-[20rem] group border-x border-secondary  ">
                <div className="relative flex flex-col  top-0 left-0 bottom-0 right-0 xl:flex items-center px-16 mx-auto">
                  <Link
                    href={"#"}
                    className=" text-secondary font-bold text-[30px] md:text-[36px] leading-[41.76px] group-hover:text-primary text-left transition ease-in-out duration-500"
                  >
                    Ecommerce Solution
                  </Link>
                  <span className="">
                    <p>
                      Pellentesque diam volutpat commodo sed egestas. Mattis
                      ullamcorper velit sed ullamcorper morbi. Quis vel eros
                      donec ac odio.
                    </p>
                  </span>
                </div>
                <Image
                  src={"/assets/services/home-1-service-1.jpg"}
                  width={"1080"}
                  height={"1080"}
                  alt={""}
                  className="xl:absolute w-full xl:scale-75 xl:opacity-0 group-hover:visible group-hover:scale-100 group-hover:opacity-100 top-0 transition ease-in-out duration-300 "
                />
              </div>
            </section>

            {/* <section className="w-full h-fit ">
              <div className="relative w-full h-full border">
                <div className="absolute flex flex-col  top-0 left-0 bottom-0 right-0 xl:flex items-center px-16 mx-auto">
                  <Link
                    href={"#"}
                    className="text-secondary font-bold text-[30px] md:text-[36px] leading-[41.76px] group-hover:text-primary text-left transition ease-in-out duration-500"
                  >
                    Ecommerce Solution
                  </Link>
                  <span className="">
                    <p>
                      Pellentesque diam volutpat commodo sed egestas. Mattis
                      ullamcorper velit sed ullamcorper morbi. Quis vel eros
                      donec ac odio.
                    </p>
                  </span>
                </div>
                <Image
                  src={"/assets/services/home-1-service-1.jpg"}
                  width={"1080"}
                  height={"1080"}
                  alt={""}
                  className="xl:absolute w-full xl:scale-75 xl:opacity-0 group-hover:visible group-hover:scale-100 group-hover:opacity-100 top-0 transition ease-in-out duration-300 "
                />
              </div>
            </section> */}

            {/* <section className=" servicesSections w-full max-w-[30rem] md:w-1/2  xl:w-1/4 mx-auto pb-24 px-5 xl:px-0 flex flex-col gap-16 items-center xl:border-r xl:border-grey1 group  ">
              <div className="w-full h-fit xl:px-16 mx-auto flex flex-col gap-5 md:gap-6 hover:text-primary"></div>
              <div className="relative w-full h-full  xl:pt-[66.66%]">
                <div className="absolute flex flex-col  top-0 left-0 bottom-0 right-0 xl:flex items-center px-16 mx-auto">
                  <Link
                    href={"#"}
                    className="text-secondary font-bold text-[30px] md:text-[36px] leading-[41.76px] group-hover:text-primary text-left transition ease-in-out duration-500"
                  >
                    Ecommerce Solution
                  </Link>
                  <span>
                    <p>
                      Pellentesque diam volutpat commodo sed egestas. Mattis
                      ullamcorper velit sed ullamcorper morbi. Quis vel eros
                      donec ac odio.
                    </p>
                  </span>
                </div>
                <Image
                  src={"/assets/services/home-1-service-1.jpg"}
                  width={"1080"}
                  height={"1080"}
                  alt={""}
                  className="xl:absolute w-full xl:scale-75 xl:opacity-0 group-hover:visible group-hover:scale-100 group-hover:opacity-100 top-0 transition ease-in-out duration-300 "
                />
              </div>
            </section> */}
            {/* <section className=" servicesSections w-full max-w-[30rem] md:w-1/2  xl:w-1/4 mx-auto pb-24 px-5 xl:px-0 flex flex-col gap-16 items-center xl:border-r xl:border-grey1 group  ">
              <div className="w-full h-fit xl:px-16 mx-auto flex flex-col gap-5 md:gap-6 hover:text-primary">
                <Link
                  href={"#"}
                  className="text-secondary font-bold text-[30px] md:text-[36px] leading-[41.76px] group-hover:text-primary text-left transition ease-in-out duration-500"
                >
                  CMS(Content Management System)
                </Link>
                <span>
                  <p>
                    Pellentesque diam volutpat commodo sed egestas. Mattis
                    ullamcorper velit sed ullamcorper morbi. Quis vel eros donec
                    ac odio.
                  </p>
                </span>
              </div>
              <div className="relative w-full h-full  xl:pt-[66.66%]">
                <div className="absolute hidden  top-0 left-0 bottom-0 right-0 xl:flex items-center px-16 mx-auto">
                  <span className="flex gap-5">
                    <PulseCircle />
                    Know more
                  </span>
                </div>
                <Image
                  src={"/assets/services/home-1-service-1.jpg"}
                  width={"1080"}
                  height={"1080"}
                  alt={""}
                  className="xl:absolute w-full xl:scale-75 xl:opacity-0 group-hover:visible group-hover:scale-100 group-hover:opacity-100 top-0 transition ease-in-out duration-300 "
                />
              </div>
            </section> */}
          </section>
        </section>
      </section>
    </section>
  );
};

export default Core_Services;
