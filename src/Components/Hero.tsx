import React from "react";
import { RiTwitterXLine } from "react-icons/Ri";
import { SlSocialInstagram, SlSocialFacebook } from "react-icons/sl";
import { PiPinterestLogoBold } from "react-icons/Pi";
import { BiPlay } from "react-icons/Bi";
import Image from "next/image";
import PulseCircle from "./Miscellaneous/PulseCircle";

const Hero = () => {
  return (
    <section className=" w-full min-h-screen mb-10 ">
      <section className="w-full max-w-[100rem] h-full mx-auto  ">
        <section className="w-full h-full flex">
          {/* left */}
          <section className="w-1/2 h-fit flex ">
            <section className="w-[40rem] h-auto mt-72 flex gap-16 ">
              <section
                id="social"
                className="w-10 h-auto flex flex-col items-center gap-24 "
              >
                <ul className="flex flex-col gap-12">
                  <li>
                    <SlSocialFacebook className="w-[33px] h-[33px] text-secondary hover:text-primary transition ease-in-out duration-500" />
                  </li>
                  <li>
                    <SlSocialInstagram className="w-[33px] h-[33px] text-secondary hover:text-primary transition ease-in-out duration-500" />
                  </li>
                  <li>
                    <RiTwitterXLine className="w-[33px] h-[33px] text-secondary hover:text-primary transition ease-in-out duration-500" />
                  </li>
                  <li>
                    <PiPinterestLogoBold className="w-[33px] h-[33px] text-secondary hover:text-primary transition ease-in-out duration-500" />
                  </li>
                </ul>
                <section className="w-full flex flex-col gap-2 items-center ">
                  <div className="w-5 h-5 rounded-full bg-primary"></div>
                  <div className="w-full flex flex-col items-center">
                    <div className="w-[3px] h-12 bg-tertiary"></div>
                  </div>
                  <div className="w-full h-fit  mt-10 ">
                    <h4 className=" rotate-[270deg] text-secondary">SCROLL</h4>
                  </div>
                </section>
              </section>

              <section id="" className="w-full flex flex-col gap-12 text-white">
                <section className="w-full h-fit flex gap-2 items-center  ">
                  <PulseCircle />
                  <h2 className="text-2xl text-grey1">Innovation Ideas</h2>
                </section>
                <h1>
                  We Offer you <span className="text-primary"> A Digital</span>{" "}
                  Platform .
                </h1>
                <p>
                  Vulputate enim nulla aliquet porttitor lacus luctus accumsan
                  tortor posuere. Nisl purus in mollis nunc sed id sempe egestas
                  quis ips.
                </p>
                <section className="w-full flex px-8">
                  <div className="flex items-center gap-6 text-lg">
                    <div className="w-14 h-14 flex items-center justify-center  rounded-full  bg-primary">
                      <BiPlay className="w-8 h-8 " />
                    </div>
                    <span>view video</span>
                  </div>
                </section>
              </section>
            </section>
          </section>
          {/* right */}
          <section className="w-1/2 h-full">
            <Image
              src={"/assets/heroMain.jpg"}
              width={"2166"}
              height={"1900"}
              alt=""
              className="absolute w-1/2 h-screen"
            />
          </section>
        </section>
      </section>
    </section>
  );
};

export default Hero;
