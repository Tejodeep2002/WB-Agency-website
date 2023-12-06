import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import PulseCircle from "../../Ui/PulseCircle";
import useIsomorphicLayoutEffect from "@/helper/isomorphicEffect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "../../Ui/Heading/Heading";
import Link from "next/link";
import { getAllProjects } from "@/config/SanityClient";

import GalleryContentSection from "@/components/Ui/Hero/GalleryContentSection";
import { getAllProjectsProps } from "../Projects/Project_Section";


const Gallery = async () => {
  const projects: getAllProjectsProps[] = await getAllProjects();
  const sortedProjectList = projects.sort(
    (a: getAllProjectsProps, b: getAllProjectsProps) => a.id - b.id
  );

  console.log();
  return (
    <section id="gallery" className="gallery relative w-full h-auto ">
      <section className="w-full h-full py-20 lg:py-28">
        <section className="w-full flex flex-col gap-7 px-4 sm:px-2 md:px-0 mx-auto text-white">
          <Heading heading={"Gallery"} subHeading={"Our Project Portfolio"} />
          <GalleryContentSection projects={sortedProjectList } />
        </section>
      </section>
    </section>
  );
};

export default Gallery;
