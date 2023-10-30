import Link from "next/link";
import React, { FC, SetStateAction } from "react";
import { RxCross2 } from "react-icons/rx";

interface SideBarProps{
  hidden:boolean
  toggle:React.Dispatch<React.SetStateAction<boolean>>
} 
const SideBar:FC<SideBarProps> = ({hidden,toggle}) => {
  return (
    <aside className={`absolute ${!hidden? "hidden":""} w-full h-full flex justify-end bg-transparent z-50`}>
      <section className="w-[15rem] h-full bg-background2">
        <nav className="w-full">
          <ul className="w-full flex flex-col text-base leading-[42px] tracking-[2.8px] text-left ">
            <li className="w-full px-5 py-3 border-b border-subHeading flex justify-end ">
              <RxCross2 onClick={()=>toggle(false)} className="w-6 h-6 text-secondary" />
            </li>
            <li className="w-full px-5  border-b border-subHeading  ">
              <Link
                href={"/"}
                className="text-secondary hover:text-primary transition ease-in-out duration-500"
              >
                Home
              </Link>
            </li>
            <li className="w-full px-5 border-b border-subHeading hover:bg-primary ">
              <Link
                href={"/about"}
                className="text-secondary hover:text-primary transition ease-in-out duration-500"
              >
                About
              </Link>
            </li>
            <li className="w-full px-5 border-b border-subHeading hover:bg-primary ">
              <Link
                href={"/services"}
                className="text-secondary hover:text-primary transition ease-in-out duration-500"
              >
                Services
              </Link>
            </li>
            <li className="w-full px-5 border-b border-subHeading hover:bg-primary ">
              <Link
                href={"/projects"}
                className="text-secondary hover:text-primary transition ease-in-out duration-500"
              >
                Projects
              </Link>
            </li>
            <li className="w-full px-5 border-b border-subHeading hover:bg-primary ">
              <Link
                href={"/blog"}
                className="text-secondary hover:text-primary transition ease-in-out duration-500"
              >
                Blog Us
              </Link>
            </li>
            <li className="w-full px-5 border-b border-subHeading hover:bg-primary ">
              <Link
                href={"/contactus"}
                className="text-secondary hover:text-primary transition ease-in-out duration-500"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </aside>
  );
};

export default SideBar;
