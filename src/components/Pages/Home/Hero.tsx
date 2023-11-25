"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { SlSocialInstagram, SlSocialFacebook } from "react-icons/sl";
import { PiPinterestLogoBold } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { BiPlay } from "react-icons/bi";
import Image from "next/image";
import PulseCircle from "../../Ui/PulseCircle";
import gsap from "gsap";
import useIsomorphicLayoutEffect from "@/helper/isomorphicEffect";
import Link from "next/link";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  const hero = useRef<HTMLDivElement>(null);
  const socialIcons = useRef<HTMLDivElement>(null);
  const scrollDiv = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(socialIcons.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "circ.inOut",
      });
      gsap.from(scrollDiv.current, {
        y: -30,
        opacity: 0,
        duration: 1,
        ease: "circ.inOut",
      });

      gsap.from(".hero1", {
        x: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "circ.inOut",
      });
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={hero}
      id={"home"}
      className=" w-full h-full min-h-[100vh]  "
    >
      <section className=" w-full max-w-[110rem] h-full px-3 sm:px-5 md:px-14 xl:px-20 mx-auto   ">
        <section className=" w-full h-full flex py-16 xl:py-32">
          {/* left */}
          <section className=" w-full xl:w-[60%] h-full  flex items-end z-10 ">
            <div className="absolute xl:hidden  w-full h-full bg-background2 blur-lg opacity-80"></div>
            <section className=" w-full xl:w-[40rem] h-fit mt-20 lg:mt-0 flex gap-5 sm:gap-8 lg:gap-16 ">
              <section
                id="social"
                className=" w-10 h-auto flex flex-col items-center gap-20 "
              >
                <section ref={socialIcons}>
                  <ul className="flex flex-col gap-12 text-paragraph">
                    <li>
                      <Link
                        href={
                          "https://www.facebook.com/profile.php?id=61553639945217"
                        }
                        target="_blank"
                      >
                        <SlSocialFacebook className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px]  hover:text-primary transition ease-in-out duration-500" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"https://www.instagram.com/webflexrr"}
                        target="_blank"
                      >
                        <SlSocialInstagram className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px]  hover:text-primary transition ease-in-out duration-500" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"https://twitter.com/WebFlexRR"}
                        target="_blank"
                      >
                        <RiTwitterXLine className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px]  hover:text-primary transition ease-in-out duration-500" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"https://www.linkedin.com/company/webflexrr"}
                        target="_blank"
                      >
                        <FaLinkedinIn className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px]  hover:text-primary transition ease-in-out duration-500" />
                      </Link>
                    </li>
                  </ul>
                </section>
                <section
                  className=" w-full h-auto flex flex-col gap-6 items-center "
                  ref={scrollDiv}
                >
                  <PulseCircle flowDirection="bottom" />
                  <div className="w-full h-fit mt-10 ">
                    <p className=" rotate-[270deg] text-secondary text-base tracking-[4px] uppercase">
                      scroll
                    </p>
                  </div>
                </section>
              </section>
              <section className=" w-full h-auto flex flex-col gap-2 lg:gap-8 text-white">
                <div className="hero1 w-full h-fit flex gap-6 items-center    ">
                  <PulseCircle />
                  <span className="text-[20px] sm:text-[26px] leading-[42.64px] text-subHeading">
                    Innovation Ideas
                  </span>
                </div>
                <h1 className="hero1 lg:w-[35rem]">
                  We Offer you <span className="text-primary"> A Digital </span>
                  Platform .
                </h1>
                <p className="hero1 md:w-[35rem] mt-4 ">
                  Vulputate enim nulla aliquet porttitor lacus luctus accumsan
                  tortor posuere. Nisl purus in mollis nunc sed id sempe egestas
                  quis ips.
                </p>
                <section className=" hero1 w-full flex mt-9">
                  <div className="flex items-center gap-6 text-lg">
                    <div className="relative">
                      <div className="w-14 h-14 flex items-center justify-center  rounded-full  bg-primary">
                        <BiPlay className="w-8 h-8 " />
                      </div>
                      <div className="absolute top-0 bottom-0 left-0 right-0 -z-10 animate-ping w-14 h-14 flex items-center justify-center  rounded-full  bg-primary">
                        <BiPlay className="w-8 h-8 " />
                      </div>
                    </div>
                    <span className="text-secondary">view video</span>
                  </div>
                </section>
              </section>
            </section>
          </section>
          {/* right */}
          <section className="absolute xl:relative right-0 w-full xl:w-[40%] h-full flex justify-center items-center">
            <Spline
              scene="https://prod.spline.design/vDmw0a65KiiALwh4/scene.splinecode"
              className=" -z-10"
            />
          </section>
        </section>
      </section>
    </section>
  );
};

export default Hero;
