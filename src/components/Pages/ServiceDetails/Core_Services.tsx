import Heading from "@/components/Ui/Heading/Heading";
import PulseCircle from "@/components/Ui/PulseCircle";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Core_Services = () => {
  return (
    <section className="w-full h-auto">
      <section className="relative w-full h-fit">
        <div
          className="absolute w-full h-full  bg-cover bg-black opacity-30"
          style={{
            backgroundImage:
              "url('https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Process-Icon-Box-Bg-Img-1-scaled.jpg')",
          }}
          // style={{ backgroundImage: "url('/assets/bg.jpg')" }}
        />
        <section className="w-full h-auto flex py-36  flex-col items-center">
          <Heading heading={"Services"} subHeading={"We are Mastery in "} />
          {/* <h1>We can offer</h1> */}
          <section className="w-full h-auto xl:mt-10 ">
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
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Core_Services;
