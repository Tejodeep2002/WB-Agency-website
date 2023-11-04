import React from "react";

const MainTitle = () => {
  return (
    <section className="relative w-full h-auto">
      <div
        className="bg-fixed w-full h-auto  object-cover "
        // style={{ backgroundImage: "url('/assets/bg.jpg')" }}
      >
        <section className="w-full h-auto flex flex-col items-center py-14 xl:pt-28">
          <section className="w-fit h-auto flex flex-col gap-4 items-center">
            <h1>Our Team</h1>
            <p className="">Home / Our Team</p>
          </section>
        </section>
      </div>
    </section>
  );
};

export default MainTitle;
