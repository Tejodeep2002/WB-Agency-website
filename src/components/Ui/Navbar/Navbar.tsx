"use client";
import React, { useRef, useState } from "react";
import SideBar from "./Sidebar";

const Navbar = () => {
  const [sideBarHidden, setSideBarHidden] = useState<boolean>(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-[0.44rem] z-20 h-16 lg:h-28 flex items-center justify-center ">
        <div className="absolute  w-full h-full  shadow-2xl  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-100 z-0 "></div>
        <section className="animate-visible-from-down ease-in-out-expo  w-full max-w-[110rem] px-10  flex justify-between items-center z-10 ">
          <h2 className=" font-bold text-2xl text-white">GaaGa</h2>
          <nav className="hidden xl:block">
            <ul className="flex gap-10 text-sm font-medium leading-[25px] tracking-[2.8px] uppercase ">
              <li>
                <a
                  href={"/#home"}
                  className="text-secondary hover:text-primary transition ease-in-out duration-500"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href={"/#services"}
                  className="text-secondary hover:text-primary transition ease-in-out duration-500"
                >
                  SERVICES
                </a>
              </li>
              <li>
                <a
                  href={"/#gallery"}
                  className="text-secondary hover:text-primary transition ease-in-out duration-500"
                >
                  GALLERY
                </a>
              </li>
              <li>
                <a
                  href={"/#ourTeam"}
                  className="text-secondary hover:text-primary transition ease-in-out duration-500"
                >
                  OUR TEAMS
                </a>
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
                <a
                  href={"/#contactUs"}
                  className="text-secondary hover:text-primary transition ease-in-out duration-500"
                >
                  CONTACT US
                </a>
              </li>
            </ul>
          </nav>

          <section className="flex items-center gap-10">
            <button
              onClick={() => setSideBarHidden(true)}
              className="flex xl:hidden items-center text-secondary"
              aria-label="Open Menus"
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
