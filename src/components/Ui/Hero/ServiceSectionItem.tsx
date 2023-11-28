import Link from "next/link";
import React, { FC } from "react";
import PulseCircle from "../PulseCircle";
import Image from "next/image";

interface ServiceSectionProps {
  name: string;
  description: string;
  image: string;
}
const ServiceSectionItem: FC<ServiceSectionProps> = ({
  name,
  description,
  image,
}) => {
  return (
    <section className=" servicesSections  w-full max-w-[30rem] md:w-1/2  xl:w-1/4 mx-auto mb-20  px-5 xl:px-0 flex flex-col gap-10 lg:gap-16 items-center xl:border-x xl:border-grey1 group  ">
      <div className=" w-full h-fit text-center xl:px-11 mx-auto flex flex-col gap-5 md:gap-6 hover:text-primary">
        <Link
          href={`/services/${name.split(" ").join("-").toLowerCase()}`}
          className=" text-secondary text-center  font-bold text-[30px] md:text-[35px] leading-[41.76px] group-hover:text-primary  transition ease-in-out duration-500"
        >
          {name}
        </Link>
        <span className="">
          <p>
            {description.split(" ").splice(0, 12).join(" ").concat(" ....")}
          </p>
        </span>
      </div>
      <div className="relative w-full h-full  xl:pt-[66.66%]">
        <div className="absolute hidden  top-0 left-0 bottom-0 right-0 xl:flex items-center px-16 mx-auto">
          <span className="flex gap-5">
            <PulseCircle />
            Know more
          </span>
        </div>
        <Link href={`/services/${name.split(" ").join("-").toLowerCase()}`}>
          <Image
            src={image}
            width={"1080"}
            height={"1080"}
            alt={name}
            className="xl:absolute w-full xl:scale-75 xl:opacity-0 group-hover:visible group-hover:scale-100 group-hover:opacity-100 top-0 transition ease-in-out duration-300 "
          />
        </Link>
      </div>
    </section>
  );
};

export default ServiceSectionItem;
