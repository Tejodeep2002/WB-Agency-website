import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="fixed  top-0 left-0 right-0 z-50 w-full h-28 flex items-center justify-center bg-gradient-to-b to-transparent from-background2 ">
      <section className="w-full  max-w-[100rem]  flex justify-between items-center ">
        <h2 className=" font-bold text-2xl text-white">GaaGa</h2>
        <nav>
          <ul className="flex gap-10 text-sm font-semibold">
            <li>
              <Link
                href={""}
                className="text-secondary hover:text-primary transition ease-in-out duration-500"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="text-secondary hover:text-primary transition ease-in-out duration-500"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="text-secondary hover:text-primary transition ease-in-out duration-500"
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="text-secondary hover:text-primary transition ease-in-out duration-500"
              >
                PROJECT
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="text-secondary hover:text-primary transition ease-in-out duration-500"
              >
                BLOG US
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="text-secondary hover:text-primary transition ease-in-out duration-500"
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </nav>

        <button className="w-fit h-fit py-4 px-7 border border-secondary text-secondary hover:text-primary hover:border-primary transition ease-in-out duration-500">
          Lets start
        </button>
      </section>
    </header>
  );
};

export default Navbar;
