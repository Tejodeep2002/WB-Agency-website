import Image from "next/image";
import React from "react";

const ServiceDetails = () => {
  return (
    <section className="w-full h-auto ">
      <section className="w-full h-auto py-20 px-5 md:px-5 xl:py-36">
        <section className="w-full max-w-[100rem] mx-auto h-auto flex flex-col gap-10">
          <section className="w-full h-auto">
            <Image
              src={
                "https://gaaga.wpengine.com/wp-content/uploads/2023/06/service-detail-1-1.jpg"
              }
              width={"1000"}
              height={"1"}
              alt=""
              className="w-full"
            />
            <section className="w-full flex flex-col gap-16 mt-10">
              {/* category,software,wesite */}
              <section className="w-full  flex flex-row flex-wrap gap-3 justify-between uppercase text-secondary font-semibold text-sm leading-[23px] text-left">
                <span>
                  <span className="text-primary">Category: </span>
                  Development
                </span>
                <span>
                  <span className="text-primary">Software: </span>
                  ADOBE XD
                </span>
                <span>
                  <span className="text-primary">Software: </span>
                  ADOBE XD
                </span>
                <span>
                  <span className="text-primary">Category: </span>
                  Development
                </span>
              </section>
              {/* title */}
              <section className="w-full">
                <section className="w-full pb-5">
                  <h1 className="text-left ">Tellus cras adipiscing</h1>
                </section>
                <section className="w-full flex flex-col lg:flex-row gap-6">
                  <div className="w-full max-w-1/2 xl:pr-10 ">
                    <p>
                      Vestibulum in ipsum velit. Aliquam libero sem, rutrum eu
                      scelerisque ut, vehicula a erat. Phasellus ac sem sed erat
                      posuere semper sed ac nunc. Vestibulum tempus neque sit
                      amet sapien sod ales, et pulvinarquam dignissim. Mauris
                      feugiat, nisi nec dapibus dictum, ligula nulla gravida
                      ante, non aliquet odio elit ac orci. Curabitur tincidunt
                      convallis magna, sit amet porttitor libero feugiat
                      sagittis. Sed eu nibh arcu.Nunc eu rhoncus justo,
                    </p>
                  </div>
                  <div className="w-full xl:max-w-1/2 flex flex-col md:flex-row gap-6 md:gap-0 md:justify-between items-center">
                    <div className="relative  w-[17rem] lg:w-[35%] h-28 rounded-full overflow-hidden">
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
                        &quot;Aliquam libero sem, rutrum eu scelerisque ut,
                        vehicula a erat. Phasellusac sem sed erat posuere semper
                        sed ac nunc estibulu Vestibulum in ipsum velit.&rdquo;
                      </p>
                    </div>
                  </div>
                </section>
              </section>
              {/* more */}
              <section className="w-full flex flex-col  xl:mt-10">
                <section className="w-full pb-5">
                  <h4 className="text-[26px] xl:text-[30px] leading-[34.8px]  font-semibold">
                    Imperdiet Massaee :
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
                      <span className="relative w-full lg:w-1/2 h-fit justify-start flex  items-center">
                        <div className="absolute top-2 left-0 w-3 h-3 rounded-full bg-primary" />
                        <p className="ml-7">
                          Gieamus nec venenatis est. Eget enim id, pharetra
                          commodo mauris ohase
                        </p>
                      </span>
                      <span className="relative w-full lg:w-1/2 h-fit justify-start flex  items-center">
                        <div className="absolute top-2 left-0 w-3 h-3 rounded-full bg-primary" />
                        <p className="ml-7">
                          Gieamus nec venenatis est. Eget enim id, pharetra
                          commodo mauris ohase
                        </p>
                      </span>
                      <span className="relative w-full lg:w-1/2 h-fit justify-start flex  items-center">
                        <div className="absolute top-2 left-0 w-3 h-3 rounded-full bg-primary" />
                        <p className="ml-7">
                          Gieamus nec venenatis est. Eget enim id, pharetra
                          commodo mauris ohase
                        </p>
                      </span>
                      <span className="relative w-full lg:w-1/2 h-fit justify-start flex  items-center">
                        <div className="absolute top-2 left-0 w-3 h-3 rounded-full bg-primary" />
                        <p className="ml-7">
                          Gieamus nec venenatis est. Eget enim id, pharetra
                          commodo mauris ohase
                        </p>
                      </span>
                      <span className="relative w-full lg:w-1/2 h-fit justify-start flex  items-center">
                        <div className="absolute top-2 left-0 w-3 h-3 rounded-full bg-primary" />
                        <p className="ml-7">
                          Gieamus nec venenatis est. Eget enim id, pharetra
                          commodo mauris ohase
                        </p>
                      </span>
                      <span className="relative w-full lg:w-1/2 h-fit justify-start flex  items-center">
                        <div className="absolute top-2 left-0 w-3 h-3 rounded-full bg-primary" />
                        <p className="ml-7">
                          Gieamus nec venenatis est. Eget enim id, pharetra
                          commodo mauris ohase
                        </p>
                      </span>
                      <span className="relative w-full lg:w-1/2 h-fit justify-start flex  items-center">
                        <div className="absolute top-2 left-0 w-3 h-3 rounded-full bg-primary" />
                        <p className="ml-7">
                          Gieamus nec venenatis est. Eget enim id, pharetra
                          commodo mauris ohase
                        </p>
                      </span>
                      <span className="relative w-full lg:w-1/2 h-fit justify-start flex  items-center">
                        <div className="absolute top-2 left-0 w-3 h-3 rounded-full bg-primary" />
                        <p className="ml-7">
                          Gieamus nec venenatis est. Eget enim id, pharetra
                          commodo mauris ohase
                        </p>
                      </span>
                      <span className="relative w-full lg:w-1/2 h-fit justify-start flex  items-center">
                        <div className="absolute top-2 left-0 w-3 h-3 rounded-full bg-primary" />
                        <p className="ml-7">
                          Gieamus nec venenatis est. Eget enim id, pharetra
                          commodo mauris ohase
                        </p>
                      </span>
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
              </section>
            </section>
            {/* case Study */}
            {/* <section className="relative w-full h-[100vh] mt-10">
              <section className=" absolute top-0 w-full h-[30rem] ">
              <div
              className=" w-full h-full  object-cover opacity-20 "
              style={{backgroundImage: "url('/assets/service-detail-bg-1.jpg')" }}
              ></div>
              </section>
              <section className="w-full h-full border border-red-600">
              <div className="w-full h-full pt-48 flex">
              <section className="w-1/2 h-auto border">
              
              </section>
              <section className="w-1/2 h-full border">

                  </section>
                </div>

              </section>
            </section> */}
          </section>
        </section>
      </section>
    </section>
  );
};

export default ServiceDetails;
