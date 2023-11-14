import Process from "@/components/Ui/Process";
import Image from "next/image";
import React from "react";
import Core_Services from "./Core_Services";
import PulseCircle from "@/components/Ui/PulseCircle";
import Technologies from "./Technologies";

const ServiceDetails = () => {
  return (
    <section className="w-full h-auto ">
      <section className="w-full h-auto  py-20 px-5 md:px-0 xl:py-24">
        <section className="w-full h-auto flex flex-col">
          <section className="w-full max-w-[100rem] mx-auto h-auto flex flex-col gap-10">
            <section className="w-full h-auto">
              <section className="w-full flex flex-col gap-40 ">
                {/* title */}
                <section className="w-full ">
                  {/* <section className="w-full pb-5">
                  <h1 className="text-left ">Web Developement</h1>
                </section> */}
                  <section className="w-full h-[40rem] mt-4 flex flex-col lg:flex-row gap-8 lg:gap-0 ">
                    <div className="w-[60%] h-full pl-20 flex flex-col justify-center">
                      <div className="w-full h-[80%] py-12 px-20 flex flex-col gap-6 border-y border-l border-primary">
                        <section className="w-full flex gap-8 text-secondary">
                          <PulseCircle />
                          Web Developement
                        </section>
                        <section className="w-full h-auto">
                          <h1 className="text-left ">Web Developement</h1>
                        </section>
                        <section className="  w-full h-full">
                          <p>
                            Web development involves creating and maintaining
                            websites or web applications. It encompasses various
                            tasks, including web design, front-end development
                            for user interfaces, back-end development for
                            server-side logic, and database management. Web
                            developers use programming languages such as HTML,
                            CSS, and JavaScript to build the visual elements and
                            functionality of a site.
                          </p>
                        </section>
                        <section className="  w-full h-full">
                          <p>
                            Web development involves creating and maintaining
                            websites or web applications. It encompasses various
                            tasks, including web design, front-end development
                            for user interfaces, back-end development for
                            server-side logic, and database management. Web
                            developers use programming languages such as HTML,
                            CSS, and JavaScript to build the visual elements and
                            functionality of a site.
                          </p>
                        </section>
                      </div>
                    </div>
                    <div className="w-[40%] h-full ">
                      <Image
                        src={"/assets/home-one-instagram-1.jpg"}
                        width={"1000"}
                        height={"0"}
                        alt={""}
                        className=" w-full h-full bg-fixed "
                      />
                    </div>
                  </section>
                  {/* <section className="w-full flex flex-col lg:flex-row gap-6"> */}
                  {/* <div className="w-full max-w-1/2 xl:pr-10 ">
                    <p>
                      Web development involves creating and maintaining websites
                      or web applications. It encompasses various tasks,
                      including web design, front-end development for user
                      interfaces, back-end development for server-side logic,
                      and database management. Web developers use programming
                      languages such as HTML, CSS, and JavaScript to build the
                      visual elements and functionality of a site.
                    </p>
                  </div> */}
                  {/* <div className="w-full xl:max-w-1/2 flex flex-col md:flex-row gap-6 md:gap-0 md:justify-between items-center"> */}
                  {/* <div className="relative  w-[17rem] lg:w-[35%] h-28 rounded-full overflow-hidden">
                      <Image
                        src={
                          "https://gaaga.wpengine.com/wp-content/uploads/2023/06/service-detail-one-3.jpg"
                        }
                        width={"2000"}
                        height={"1000"}
                        alt=""
                        className="absolute w-full h-full top-0 left-0 right-0"
                      />
                    </div>
                    <div className="w-full md:w-[26rem] lg:w-[65%] h-full xl:pl-7 flex items-center">
                      <p>
                        Web development involves creating and maintaining
                        websites or web applications. It encompasses various
                        tasks, including web design, front-end development for
                        user interfaces, back-end development for server-side
                        logic, and database management. Web developers use
                        programming languages such as HTML, CSS, and JavaScript
                        to build the visual elements and functionality of a
                        site.
                      </p>
                    </div> */}
                  {/* </div> */}
                  {/* </section> */}
                </section>

                {/* category,software,wesite */}
                {/* <section className="w-full  flex flex-row flex-wrap gap-3 justify-between uppercase text-secondary font-semibold text-sm leading-[23px] text-left">
                <span>
                  <span className="text-primary">Category: </span>
                  Development
                </span>
                <span>
                  <span className="text-primary">Technology: </span>
                  HTML, CSS, Javascript, React, NextJs
                </span>
                <span>
                  <span className="text-primary">For Production: </span>
                  AWS, Netlify, Firebase
                </span>
                {/* <span>
                  <span className="text-primary">Category: </span>
                  Development
                </span> 
              </section> */}
                {/* <Image
                src={
                  "https://gaaga.wpengine.com/wp-content/uploads/2023/06/service-detail-1-1.jpg"
                }
                width={"1000"}
                height={"1"}
                alt=""
                className="w-full"
              /> */}

                {/* more */}
                {/* <section className="w-full flex flex-col  xl:mt-10">
                <section className="w-full pb-5">
                  <h4 className="text-[26px] xl:text-[30px] leading-[34.8px]  font-semibold">
                    Services Offer :
                  </h4>
                </section>
                <section className="w-full h-auto mt-4 flex flex-col lg:flex-row gap-8 lg:gap-0 ">
                  <div className="relative w-full lg:w-[30%] h-[30rem] ">
                    <Image
                      src={"/assets/home-one-instagram-1.jpg"}
                      width={"1000"}
                      height={"0"}
                      alt={""}
                      className="absolute w-full h-full bg-fixed "
                    />
                  </div>
                  <div className="w-full lg:w-[70%] lg:pl-14 flex flex-col gap-14">
                    <div className="w-full h-auto">
                      <p>
                        In elit lectus, maximus eget enim id, pharetra commodo
                        mauris. Phasellus facilisis ligula consequat
                        ultricirutrum. Praesent quis ipsum ut lorem maximus
                        luctus nec lacinia magna. Aliquam vestibulum magna quis
                        finibus volutpat. Vestibulum vulputacndim entum dictum.
                        Vestibulum fermentum, tortor non feugiat vestibulum, est
                        urna euismod lorem, non commodo massa nibh id velit. Nam
                        varius vitae sapien efficitur ultricies. Mauris varius
                        metus nisi, nec mollis ex maximus in. Sed in arcu eget
                        ipsum luctus imperdiet eget et erat.aese nt non
                        dignissim diam.Donec rutrum nulla nec diam aliquam,
                        egestas malesuada nisl dictum. Mauris ultricies ipsum a
                        dui efficitur posre. Don ec et egestas erat, ac euismod
                        nulla. Nulla pretium fermentum libero sed aliquet. Nulla
                        venenatis facilisis metus, et ullamcorper masscidunt t
                        eget. Aenean interdum aliquam aliquet. Suspendisse
                        eleifend lacus ut nisi mattis rutrum. Maecenas
                        condimentum sem sagittis tincidunt finibus. Praesent
                        facilisis augue lacus, nec tincidunt nulla pharetra a.
                        Fusce non tortor tempor, aliquam dui sed, tempus massa.
                        is. Vivamus nec venenatis est.
                      </p>
                    </div>
                    <div className="w-full h-full flex flex-wrap gap-5 lg:gap-0">
                      <span className="relative w-full lg:w-1/2 h-fit justify-start flex  items-center">
                        <div className="absolute top-2 left-0 w-3 h-3 rounded-full bg-primary" />
                        <p className="ml-7">
                          Gieamus nec venenatis est. Eget enim id, pharetra
                          commodo mauris ohase
                        </p>
                      </span>
                   
                    </div>
                  </div>
                </section>
              </section> */}
              </section>
            </section>
          </section>
          <Technologies />
          <Core_Services />

          <Process />
        </section>
      </section>{" "}
    </section>
  );
};

export default ServiceDetails;
