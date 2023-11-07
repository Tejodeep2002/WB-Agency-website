import Image from "next/image";
import React, { useRef } from "react";
import PulseCircle from "../PulseCircle";

const ServiceItems = () => {
  return (
    // <div className="w-full xl:w-[486px] h-full flex flex-col ">
    <div className="w-full h-full flex flex-col ">
      <div className="relative w-full h-full xl:h-[290px] group z-10 overflow-hidden">
        <Image
          src={"https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-3-service-4.jpg"}
          alt=""
          width={"1000"}
          height={"0"}
          className="relative w-full h-full bg-cover group-hover:scale-105 transition-transform duration-300 ease-in"
        />
        <div className="absolute bottom-0 invisible  group-hover:visible translate-y-[0.2rem] group-hover:translate-y-0 flex items-center justify-center w-full h-[100px] shadow-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-100 z-0 transition ease-in duration-100">
          <span className="flex gap-3 text-secondary">
            <PulseCircle />
            Read More
          </span>
        </div>
      </div>
      <div className="w-full flex items-center mt-10 ">
        <button className="text-[30px] mx-auto leading-[34.8px] font-semibold text-center text-secondary hover:text-primary transition duration-700 ease-in-out">
          Brand Logo
        </button>
      </div>
    </div>
  );
};

export default ServiceItems;
