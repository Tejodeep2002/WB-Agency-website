import Heading from "@/components/Ui/Heading/Heading";
import React from "react";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiReact } from "react-icons/si";

const Technologies = () => {
  return (
    <section className="w-full h-auto ">
      <section className="w-full h-auto py-36 px-5 md:px-5">
        <Heading heading={"Technology"} subHeading={"We are Using "} />
        <section className="w-full max-w-[100rem] mx-auto h-auto flex flex-col gap-10">
          <section className="w-[70rem] h-fit mx-auto bg-background3 border-2 border-primary p-3 ">
            <section className="w-full h-full grid grid-cols-6  gap-5 ">
              <div className="w-full h-[8rem] border-2 border-primary flex items-center justify-center">
                <span className="flex flex-col items-center gap-3 text-secondary font-semibold leading-[26px]">
                  <SiReact className="text-[50px] text-blue-400" />
                  REACT
                </span>
              </div>
              <div className="w-full h-[8rem] border-2 border-primary flex items-center justify-center">
                <span className="flex flex-col items-center gap-3 text-secondary">
                  <SiHtml5 className="text-[50px] text-orange-500" />
                  HTML
                </span>
              </div>
              <div className="w-full h-[8rem] border-2 border-primary flex items-center justify-center">
                <span className="flex flex-col items-center gap-3 text-secondary">
                  <SiHtml5 className="text-[50px] text-orange-500" />
                  HTML
                </span>
              </div>
              <div className="w-full h-[8rem] border-2 border-primary flex items-center justify-center">
                <span className="flex flex-col items-center gap-3 text-secondary">
                  <SiHtml5 className="text-[50px] " />
                  HTML
                </span>
              </div>
              <div className="w-full h-[8rem] border-2 border-primary flex items-center justify-center">
                <span className="flex flex-col items-center gap-3 text-secondary">
                  <SiHtml5 className="text-[50px] " />
                  HTML
                </span>
              </div>
              <div className="w-full h-[8rem] border-2 border-primary flex items-center justify-center">
                <span className="flex flex-col items-center gap-3 text-secondary">
                  <SiHtml5 className="text-[50px] " />
                  HTML
                </span>
              </div>
              <div className="w-full h-[8rem] border-2 border-primary flex items-center justify-center">
                <span className="flex flex-col items-center gap-3 text-secondary">
                  <SiHtml5 className="text-[50px] " />
                  HTML
                </span>
              </div>
              <div className="w-full h-[8rem] border-2 border-primary flex items-center justify-center">
                <span className="flex flex-col items-center gap-3 text-secondary">
                  <SiHtml5 className="text-[50px] " />
                  HTML
                </span>
              </div>
              <div className="w-full h-[8rem] border-2 border-primary flex items-center justify-center">
                <span className="flex flex-col items-center gap-3 text-secondary">
                  <SiHtml5 className="text-[50px] " />
                  HTML
                </span>
              </div>
              <div className="w-full h-[8rem] border-2 border-primary flex items-center justify-center">
                <span className="flex flex-col items-center gap-3 text-secondary">
                  <SiHtml5 className="text-[50px] " />
                  HTML
                </span>
              </div>
              <div className="w-full h-[8rem] border-2 border-primary flex items-center justify-center">
                <span className="flex flex-col items-center gap-3 text-secondary">
                  <SiHtml5 className="text-[50px] " />
                  HTML
                </span>
              </div>
              <div className="w-full h-[8rem] border-2 border-primary flex items-center justify-center">
                <span className="flex flex-col items-center gap-3 text-secondary">
                  <SiHtml5 className="text-[50px] " />
                  HTML
                </span>
              </div>
            </section>
          </section>
          H
        </section>
      </section>
    </section>
  );
};

export default Technologies;
