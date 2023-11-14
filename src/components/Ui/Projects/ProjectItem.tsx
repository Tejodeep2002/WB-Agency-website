import Image from "next/image";
import React, { FC } from "react";
import PulseCircle from "../PulseCircle";

interface ProjectItemProps {
  image: string;
  //   name: string;
}

const ProjectItem: FC<ProjectItemProps> = ({ image }) => {
  return (
    <div className="relative w-full h-full group">
      <div className="relative w-full h-full ">
        {/* <div className="absolute w-full h-full bg-secondary "></div> */}
        <div className="relative  w-full h-full after:absolute group-hover:after:border-[2.5rem] group-hover:after:border-secondary after:top-0 after:bottom-0 after:left-0 after:right-0 after:transition-all after:ease-in-out after:duration-500">
          <Image
            src={image}
            width={"1000"}
            height={"0"}
            alt={""}
            className="relative w-full h-full"
          />
        </div>
      </div>
      <div className=" absolute bottom-0 w-full h-fit  flex flex-col items-center ">
        <span className="absolute bottom-0 mb-11 text-secondary hover:text-primary text-[44px] font-semibold leading-[51px] text-start transition ease-in-out duration-700">
          Business App
        </span>
        {/* <span className="absolute bottom-0 mb-2 hidden group-hover:flex text-primary  text-start transition ease-in-out duration-700">
          branding
        </span> */}
      </div>
    </div>
  );
};

export default ProjectItem;