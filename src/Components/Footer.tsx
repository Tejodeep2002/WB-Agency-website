import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="w-full h-auto text-tertiary">
      <section className="w-full h-auto pt-[70px] pb-[100px]">
        <section className="w-full max-w-[100rem] mx-auto flex">
          {/* left */}
          <section className=" w-1/2 h-auto">
            <div className="w-full max-w-[580px] h-auto flex flex-col gap-12">
              <Image
                src={
                  "https://gaaga.wpengine.com/wp-content/uploads/2023/05/gaaka-Logo-1.png"
                }
                width={"200"}
                height={"300"}
                alt=" "
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
              <div className="w-full flex gap-4">
                <input
                  type="text"
                  title="Message"
                  className="w-[60%] bg-transparent  border-b  text-white"
                />
                <button
                  type="button"
                  title="button"
                  className="w-[40%] h-11 rounded-full bg-transparent hover:bg-primary after:w-full border"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </section>
          {/* mid */}
          <section className=" w-1/4 h-auto">
            <section className=" text-[26px] leading-[42px] font-normal text-secondary ">
              Contact
            </section>
            <section className="w-full max-w-[280px]">
              <ul className="flex flex-col gap-5 flex-wrap ">
                <li>
                  <p>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
                </li>
                <li>
                  <p>Phone : +000 - 123 - 456789</p>
                </li>
                <li>
                  <p>Mail : info@example.com</p>
                </li>
                <li>
                  <p>Working Hours : 8hrs</p>
                </li>
              </ul>
            </section>
          </section>
          {/* right */}
          <section className=" w-1/4 h-auto">
            <section className=" text-[26px] leading-[42px] font-normal text-secondary ">
              Services
            </section>
            <section className="w-full max-w-[280px]">
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
      <section className="w-full h-auto border-t">
        <section className="w-full max-w-[100rem] h-auto py-4 mx-auto flex justify-between ">
          {/* left */}
          <section className="w-fit h-auto">
            <ul className="flex gap-12 ">
              <li>
                <Link href={""}>Home</Link>
              </li>
              <li>
                <Link href={""}>Pages</Link>
              </li>
              <li>
                <Link href={""}>Portfolio</Link>
              </li>
              <li>
                <Link href={""}>Services</Link>
              </li>
            </ul>
          </section>
          {/* mid */}
          <section className="w-fit">
            <ul className="flex gap-6">
              <li>
                <Link
                  href={""}
                  className="w-[30px] h-[30px] rounded-full flex items-center justify-center border border-grey1"
                >
                  <FaLinkedinIn className="w-[14px] h-[14px]" />
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="w-[30px] h-[30px] rounded-full flex items-center justify-center border border-grey1"
                >
                  <FaFacebookF className="w-[14px] h-[14px]" />
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="w-[30px] h-[30px] rounded-full flex items-center justify-center border border-grey1"
                >
                  <FaInstagram className="w-[14px] h-[14px]" />
                </Link>
              </li>
            </ul>
          </section>
          {/* right */}
          <section>
            <p>Copyright ©WedesignTech All Rights Reserved.</p>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Footer;