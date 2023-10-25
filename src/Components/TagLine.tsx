import React from "react";

const TagLine = () => {
  return (
    <section className="w-full h-auto bg-background2">
      <section className="w-full py-36">
        <section className="w-full max-w-[90rem] mx-auto flex flex-col gap-28 ">
          <section className="w-full max-w-5xl mx-auto flex flex-col gap-14">
            <h3>
              It&apos;s Time To Take Your Digital Marketing To The Next Level We
              Are Always Here To Help You Grow Your Business
            </h3>
          </section>
          <section className="w-full  h-auto flex justify-between  text-tertiary">
            <div className=" w-80 h-32 flex items-center gap-5  ">
              <div className=" text-[120px] font-semibold border-secondary text-transparent stroke-text hover:text-primary transition ease-in-out duration-500">
                10
              </div>
              <div className="w-fit flex flex-col text-2xl text-left leading-10 text-tertiary hover:text-secondary transition ease-in-out duration-500">
                Years Experience
              </div>
            </div>
            <div className=" w-80 h-32  flex items-center gap-5 ">
              <div className="text-[120px] font-semibold border-secondary text-transparent stroke-text hover:text-primary transition ease-in-out duration-500">
                12+
              </div>
              <span className="flex flex-col text-2xl text-left leading-10 text-tertiary hover:text-secondary transition ease-in-out duration-500">
                Advanced Tools
              </span>
            </div>
            <div className=" w-80 h-32  flex items-center gap-5 ">
              <div className="text-[120px] font-semibold border-secondary text-transparent stroke-text hover:text-primary transition ease-in-out duration-700">
                52
              </div>
              <span className="flex flex-col text-2xl text-left leading-10 text-tertiary hover:text-secondary transition ease-in-out duration-700">
                Clients Satisfied
              </span>
            </div>
            <div className=" w-80 h-32 flex items-center gap-5 ">
              <div className="text-[120px] font-semibold border-secondary text-transparent stroke-text hover:text-primary transition ease-in-out duration-500">
                90
              </div>
              <span className="flex flex-col text-2xl text-left leading-10 text-tertiary hover:text-secondary transition ease-in-out duration-500">
                Projects Completed
              </span>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default TagLine;
