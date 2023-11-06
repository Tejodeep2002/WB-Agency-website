import Image from "next/image";
import React, { useRef } from "react";
import PulseCircle from "../PulseCircle";

const ServiceItems = () => {
  return (
    <div className="w-full xl:w-[486px] h-auto mb-16 flex flex-col gap-10 ">
      <div className="relative w-full h-[290px] group z-10 overflow-hidden">
        <Image
          src={
            "https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-3-service-4.jpg"
          }
          alt=""
          width={"1000"}
          height={"0"}
          className="absolute top-0 left-0 w-full h-full bg-cover group-hover:scale-105 transition-transform duration-300 ease-in"
        />

        <div className="serviceItems absolute bottom-0 invisible  group-hover:visible flex items-center justify-center w-full h-24 shadow-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-100 z-0 transition ease-in duration-700">
          <span className="flex text-secondary">
            <PulseCircle />
            Read More
          </span>
        </div>
      </div>
      <div className="w-full flex items-center">
        <button className="text-[30px] mx-auto leading-[34.8px] font-semibold text-center text-secondary hover:text-primary transition duration-700 ease-in-out">
          Photography
        </button>
      </div>
    </div>
  );
};

export default ServiceItems;
