"use client";
import gsap from "gsap";
import React, { FC, useLayoutEffect, useRef } from "react";

interface PulseCircleProps {
  flow?: string;
}

const PulseCircle: FC<PulseCircleProps> = ({ flow }) => {
  const pulseCircle = useRef<HTMLDivElement>(null);
  const pulseCircleRed = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(pulseCircleRed.current, {
        scale: 0.8,
        repeat: -1,
        duration: 1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }, pulseCircle);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={pulseCircle}
      className={`${
        flow == "right" ? "flex-row-reverse" : ""
      } w-fit flex  items-center justify-center gap-4`}
    >
      <div className="w-[3rem] h-[2px] bg-grey1" />
      <div
        ref={pulseCircleRed}
        className=" relative w-4 h-4 rounded-full bg-primary"
      />
    </div>
  );
};

export default PulseCircle;
