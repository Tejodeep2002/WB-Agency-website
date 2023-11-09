"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC, SetStateAction } from "react";
import { RxCross2 } from "react-icons/rx";

interface SideBarProps {
  hidden: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const SideBar: FC<SideBarProps> = ({ hidden, toggle }) => {
  const router = useRouter();
  return (
    <aside
      className={`fixed ${
        !hidden ? "hidden" : ""
      } w-full h-full flex justify-end bg-transparent z-50`}
    >
      <section className="w-[15rem] h-full bg-background2">
        <nav className="w-full h-fit">
          <ul className="w-full h-auto flex flex-col text-base leading-[42px] tracking-[2.8px] text-left ">
            <li className="w-full px-5 py-3 border-b border-subHeading flex justify-end ">
              <RxCross2
                onClick={() => toggle(false)}
                className="w-6 h-6 text-secondary"
              />
            </li>
            <li className="w-full h-11 p-0 border-b border-subHeading hover:bg-primary ">
              <button
                onClick={() => router.push("/")}
                className="w-full h-full px-5 flex justify-start  text-secondary transition ease-in-out duration-500"
              >
                Home
              </button>
            </li>
            <li className="w-full h-11 p-0 border-b border-subHeading hover:bg-primary ">
              <button
                onClick={() => router.push("/our-teams")}
                className="w-full h-full px-5 flex justify-start  text-secondary transition ease-in-out duration-500"
              >
                 Our Teams
              </button>
            </li>
            <li className="w-full h-11 p-0 border-b border-subHeading hover:bg-primary ">
              <button
                onClick={() => router.push("/services")}
                className="w-full h-full px-5 flex justify-start  text-secondary transition ease-in-out duration-500"
              >
                 Services
              </button>
            </li>
            <li className="w-full h-11 p-0 border-b border-subHeading hover:bg-primary ">
              <button
                onClick={() => router.push("/projects")}
                className="w-full h-full px-5 flex justify-start  text-secondary transition ease-in-out duration-500"
              >
                Projects
              </button>
            </li>
            <li className="w-full h-11 p-0 border-b border-subHeading hover:bg-primary ">
              <button
                onClick={() => router.push("/blog")}
                className="w-full h-full px-5 flex justify-start  text-secondary transition ease-in-out duration-500"
              >
                Blog Us
              </button>
            </li>
            <li className="w-full h-11 p-0 border-b border-subHeading hover:bg-primary ">
              <button
                onClick={() => router.push("/contact")}
                className="w-full h-full px-5 flex justify-start  text-secondary transition ease-in-out duration-500"
              >
                 Contact Us
              </button>
            </li>
           
            {/* <li className="w-full px-5 border-b border-subHeading hover:bg-primary ">
              <Link
                href={"/services"}
                className="text-secondary transition ease-in-out duration-500"
              >
                Services
              </Link>
            </li>
            <li className="w-full px-5 border-b border-subHeading hover:bg-primary ">
              <Link
                href={"/projects"}
                className="text-secondary transition ease-in-out duration-500"
              >
                Projects
              </Link>
            </li>
            <li className="w-full px-5 border-b border-subHeading hover:bg-primary ">
              <Link
                href={"/blog"}
                className="text-secondary transition ease-in-out duration-500"
              >
                Blog Us
              </Link>
            </li>
            <li className="w-full px-5 border-b border-subHeading hover:bg-primary ">
              <Link
                href={"/contactus"}
                className="text-secondary transition ease-in-out duration-500"
              >
                Contact Us
              </Link>
            </li> */}
          </ul>
        </nav>
      </section>
    </aside>
  );
};

export default SideBar;
