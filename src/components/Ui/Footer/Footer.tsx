import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-auto text-tertiary bg-background2">
      <section className="w-full h-auto pt-[70px] pb-[100px]">
        <section className="w-full max-w-[100rem] mx-auto flex flex-row flex-wrap lg:flex-row gap-10 lg:gap-0">
          {/* left */}
          <section className="w-full md:w-full lg:w-1/2 h-auto px-5">
            <div className="w-full max-w-[580px] h-auto flex flex-col gap-12">
              <Image
                src={
                  "https://gaaga.wpengine.com/wp-content/uploads/2023/05/gaaka-Logo-1.png"
                }
                width={"200"}
                height={"300"}
                alt=""
                className="max-w-[383px] h-[32px] "
              />
              <div>
                <p>
                  Sodales ut etiam sit amet. Eget nulla facilisi etiam
                  dignissim. Aliquam vestibulum morbi blandit cursus risus.
                  Ultrices vitae auctor eu augue ut lectus. Ultricies integer
                  quis auctor elit sed vulputate mi sit amet.{" "}
                </p>
              </div>
              <div className=" w-full flex flex-wrap gap-5 xl:gap-2">
                <input
                  type="text"
                  title="Message"
                  className="w-full xl:w-[60%] bg-transparent focus:outline-none focus:border-secondary border-b  text-secondary"
                />
                <button
                  type="button"
                  title="button"
                  className=" w-fit h-fit lg:w-[30%] lg:h-11 py-3 px-3 rounded-full text-[24px] leading-[24px] font-base text-center text-secondary bg-transparent hover:bg-primary after:w-full transition ease-in-out duration-500"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </section>

          {/* mid */}
          <section className="w-full md:w-[40%] lg:w-1/4 h-auto px-5">
            <section className=" text-[26px] leading-[42px] font-normal text-secondary ">
              Contact
            </section>
            <section className="w-full max-w-[280px] mt-8">
              <ul className="flex flex-col gap-5 flex-wrap ">
                <li>
                  <p>Kolkata,Westbengal,India</p>
                </li>
                <li>
                  <p>Phone : +91 - 9038007312</p>
                </li>
                <li>
                  <p>Mail : info@example.com</p>
                </li>
                {/* <li>
                  <p>Working Hours : 8hrs</p>
                </li> */}
              </ul>
            </section>
          </section>

          {/* right */}
          <section className="w-full md:w-[40%] lg:w-1/4 h-auto px-5">
            <section className=" text-[26px] leading-[42px] font-normal text-secondary ">
              Services
            </section>
            <section className="w-full max-w-[280px] mt-8">
              <ul className="flex flex-col gap-4 flex-wrap ">
                <li>
                  <p>Branding & Identity</p>
                </li>
                <li>
                  <p>Web Design & Development</p>
                </li>
                <li>
                  <p>Mobile App Development</p>
                </li>
                <li>
                  <p>UI & UX Designing</p>
                </li>
                <li>
                  <p>Digital Marketing</p>
                </li>
              </ul>
            </section>
          </section>
        </section>
      </section>
      <section className="w-full h-auto border-t border-secondary">
        <section className="w-full max-w-[100rem] h-auto py-4 mx-auto flex flex-col gap-2 lg:flex-row lg:gap-2 item-center justify-between ">
          {/* left */}
          <section className="w-fit h-auto hidden lg:flex ">
            <ul className="w-fit  flex gap-3 items-center py-auto">
              <li>
                <Link
                  href={"/#home"}
                  className="text-secondary  border border-transparent px-2 py-1 hover:border-black hover:bg-primary rounded-full transition ease-in-out duration-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/#home"}
                  className="text-secondary  border border-transparent px-2 py-1 hover:border-black hover:bg-primary rounded-full transition ease-in-out duration-500"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href={"/#home"}
                  className="text-secondary  border border-transparent px-2 py-1 hover:border-black hover:bg-primary rounded-full transition ease-in-out duration-500"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href={"/#home"}
                  className="text-secondary  border border-transparent px-2 py-1 hover:border-black hover:bg-primary rounded-full transition ease-in-out duration-500"
                >
                  Our Teams
                </Link>
              </li>
              <li>
                <Link
                  href={"/#home"}
                  className="text-secondary  border border-transparent px-2 py-1 hover:border-black hover:bg-primary rounded-full transition ease-in-out duration-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </section>
          {/* mid */}
          <section className="w-full lg:w-fit ">
            <ul className="w-fit flex gap-6 mx-auto">
              <li>
                <Link
                  href={"https://twitter.com/WebFlexRR"}
                  target="_blank"
                  className="w-[35px] h-[35px] text-secondary rounded-full flex items-center justify-center border border-grey1 hover:border-secondary hover:text-secondary hover:bg-primary transition ease-in-out duration-300"
                >
                  <BsTwitterX className="w-[14px] h-[14px] " />
                </Link>
              </li>
              <li>
                <Link
                  href={"https://www.linkedin.com/company/webflexrr"}
                  target="_blank"
                  className="w-[35px] h-[35px] text-secondary rounded-full flex items-center justify-center border border-grey1 hover:border-secondary hover:text-secondary hover:bg-primary transition ease-in-out duration-300"
                >
                  <FaLinkedinIn className="w-[16px] h-[16px] " />
                </Link>
              </li>
              <li>
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=61553639945217"
                  }
                  target="_blank"
                  className="w-[35px] h-[35px] text-secondary rounded-full flex items-center justify-center border border-grey1 hover:border-secondary hover:text-secondary hover:bg-primary transition ease-in-out duration-300"
                >
                  <FaFacebookF className="w-[16px] h-[16px]" />
                </Link>
              </li>
              <li>
                <Link
                  href={"https://www.instagram.com/webflexrr"}
                  target="_blank"
                  className="w-[35px] h-[35px] text-secondary rounded-full flex items-center justify-center border border-grey1 hover:border-secondary hover:text-secondary hover:bg-primary transition ease-in-out duration-300"
                >
                  <FaInstagram className="w-[17px] h-[17px]" />
                </Link>
              </li>
            </ul>
          </section>
          {/* right */}
          <section className=" text-center">
            <p>Copyright 	&#169;2023, WebFlexRR All Rights Reserved.</p>
          </section>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
