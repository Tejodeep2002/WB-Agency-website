import React, { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface ProjectTitleProps {
  heading: string;
  picture: string;
}
const ProjectTitle: FC<ProjectTitleProps> = ({ heading, picture }) => {
  
  return (
    <section className="relative w-full h-auto">
      <div
        className="bg-fixed w-full h-auto  object-cover "
        style={{ backgroundImage: `url(${picture})` }}
      >
        <section className="w-full h-auto flex flex-col items-center py-14 xl:pt-28">
          <section className="w-fit h-auto flex flex-col gap-4 items-center">
            <h1>{heading}</h1>
          </section>
        </section>
      </div>
    </section>
  );
};

export default ProjectTitle;
