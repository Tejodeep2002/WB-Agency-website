"use client";
import useIsomorphicLayoutEffect from "@/helper/isomorphicEffect";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

const TeamPicture = () => {
  const teamProject = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".teamPicture", {
        y: 30,
        opacity: 0,
        duration: 1,
      });
    }, teamProject);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={teamProject} className="w-full  h-auto group flex flex-col gap-9">
      <div className="relative w-full h-auto group-hover:border group-hover:border-primary border-transparent z-10 transition ease-in-out duration-700">
        <Image
          src={
            "https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Team-Img-1.png"
          }
          width={"790"}
          height={"920"}
          alt=""
          className="relative w-full h-full grayscale group-hover:grayscale-0 z-0 transition ease-in-out duration-700"
        />
        <div className="absolute bottom-0 w-full h-16 bg-transparent text-secondary opacity-0 group-hover:opacity-100 translate-y-0 group-hover:-translate-y-4 flex items-center justify-center cursor-pointer transition ease-in-out duration-700">
          <span>
            <button className="hover:text-primary transition ease-in-out duration-500">FB</button>
            <span className="text-primary"> - </span> 
            <button className="hover:text-primary transition ease-in-out duration-500">TW</button> 
            <span className="text-primary"> - </span> 
            <button className="hover:text-primary transition ease-in-out duration-500"> YT</button>
            <span className="text-primary"> - </span>
            <button className="hover:text-primary transition ease-in-out duration-500">LI</button> 
          </span>
        </div>
      </div>
      <section className="w-full h-auto text-start flex flex-col gap-2">
        <span className="text-[26px] text-secondary font-normal leading-[30px] ">
          Urbano Nero
        </span>
        <p className="text-primary font-normal leading-[30px] ">Director</p>
      </section>
    </div>
  );
};

export default TeamPicture;
