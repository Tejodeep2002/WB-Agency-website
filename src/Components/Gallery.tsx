import Image from "next/image";
import React from "react";
import PulseCircle from "./Miscellaneous/PulseCircle";

const Gallery = () => {
  return (
    <section id="gallery" className="w-full h-auto">
      <section className="w-full h-full">
        <section className="w-full flex flex-col gap-7 mx-auto text-white">
          <section className="flex flex-col gap-4 items-center">
            <span className="text-2xl leading-7 text-grey1 flex gap-4">
              <PulseCircle />
              Gallery
              <PulseCircle flow="right" />
            </span>
            <h2 className="text-6xl mb-10">Our Project Portfolio</h2>
          </section>
          <section className="w-full h-auto">
            <section className="w-full h-auto  ">
              <section className="w-full h-full grid grid-cols-2 lg:grid-cols-4 gap-5">
                <span className="w-full row-span-2 lg:row-span-1">
                  <Image
                    src={"/assets/home-portfolio-1.jpg"}
                    width={"2000"}
                    height={"0"}
                    alt=""
                    className="w-full"
                  />
                </span>
                <span className="w-full col-span-1 lg:col-span-2">
                  <Image
                    src={"/assets/home-portfolio-2.jpg"}
                    width={"2000"}
                    height={"0"}
                    alt=""
                    className="w-full"
                  />
                </span>
                <span className="w-full ">
                  <Image
                    src={"/assets/home-portfolio-3.jpg"}
                    width={"2000"}
                    height={"0"}
                    alt=""
                    className="w-full"
                  />
                </span>
                <section className="w-full h-96 lg:h-full grid-cols-1 col-span-2 flex justify-center items-center bg-background">
                  <div className="w-full max-w-lg h-auto pr-6 flex flex-col gap-10">
                    <h2 className="text-left">All Projects</h2>
                    <span>
                      <p className="text-left">
                        Dolor sit amet consectetur adipiscing elit ut aliquam
                        purus sit. Euismod nisi porta lorem mollis aliquam ut
                        porttitor. In hac habitasse platea dictumst. Amet massa
                        vitae tortor condimentum lacinia quis.
                      </p>
                    </span>
                  </div>
                </section>
                <span className="w-full">
                  <Image
                    src={"/assets/home-portfolio-3.jpg"}
                    width={"2000"}
                    height={"0"}
                    alt=""
                    className="w-full"
                  />
                </span>
                <span className="w-full">
                  <Image
                    src={"/assets/home-portfolio-3.jpg"}
                    width={"2000"}
                    height={"0"}
                    alt=""
                    className="w-full"
                  />
                </span>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Gallery;
