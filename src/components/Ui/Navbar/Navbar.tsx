"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import SideBar from "./Sidebar";
import useIsomorphicLayoutEffect from "@/helper/isomorphicEffect";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const Navbar = () => {
  const [sideBarHidden, setSideBarHidden] = useState<boolean>(false);

  const heading = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heading.current, {
        y: -70,
        duration: 1,
        opacity: 0,
        ease: "power2.out",
      });
    }, heading);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-[0.44rem] z-20 h-16 lg:h-28 flex items-center justify-center ">
        <div className="absolute  w-full h-full  shadow-2xl  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-100 z-0 "></div>
        <section
          ref={heading}
          className="w-full max-w-[110rem] px-10  flex justify-between items-center z-10 "
        >
          <h2 className=" font-bold text-2xl text-white">GaaGa</h2>
          <nav className="hidden xl:block">
            <ul className="flex gap-10 text-sm font-medium leading-[25px] tracking-[2.8px] uppercase ">
              <li>
                <Link
                  href={"/#home"}
                  className="text-secondary hover:text-primary transition ease-in-out duration-500"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href={"/#services"}
                  className="text-secondary hover:text-primary transition ease-in-out duration-500"
                >
                  SERVICES
                </Link>
              </li>
              <li>
                <Link
                  href={"/#gallery"}
                  className="text-secondary hover:text-primary transition ease-in-out duration-500"
                >
                  GALLERY
                </Link>
              </li>
              <li>
                <Link
                  href={"/#ourTeam"}
                  className="text-secondary hover:text-primary transition ease-in-out duration-500"
                >
                  OUR TEAMS
                </Link>
              </li>
              {/* <li>
                <Link
                  href={"/#blog"}
                  className="text-secondary hover:text-primary transition ease-in-out duration-500"
                >
                  BLOG US
                </Link>
              </li> */}
              <li>
                <Link
                  href={"#contactUs"}
                  className="text-secondary hover:text-primary transition ease-in-out duration-500"
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </nav>

          <section className="flex items-center gap-10">
            <button
              onClick={() => setSideBarHidden(true)}
              className="flex xl:hidden items-center text-secondary"
            >
              <span className="p-2 space-y-1  rounded text-secondary ">
                <span className="block w-4 h-0.5 bg-black"></span>
                <span className="block w-4 h-0.5 bg-black"></span>
                <span className="block w-4 h-0.5 bg-black"></span>
              </span>
              <span className="hidden md:block">Menu</span>
            </button>

            <button className="hidden w-fit h-fit py-4 px-7 border border-secondary text-secondary hover:text-primary hover:border-primary transition ease-in-out duration-500">
              Lets start
            </button>
          </section>
        </section>
      </header>
      <SideBar hidden={sideBarHidden} toggle={() => setSideBarHidden(false)} />
    </>
  );
};

export default Navbar;
