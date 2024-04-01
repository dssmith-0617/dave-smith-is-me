'use client';

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

function Nav() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1 ,
      link: "About",
    },
    {
      id: 2,
      link: "Portfolio",
    },
    {
      id: 3,
      link: "Contact",
    },
  ];

  return (
    // <div className="flex bg-header-blue p-3 backdrop-blur-md border-solid border-b-1 border-blue-700">
    //   <div className="justify-left text-4xl font-semibold">Dave Smith</div>
    //   <div id="header-sub" className="text-md text-teal-600">Web Developer & Designer</div>
    // </div>

    <div className="flex justify-between items-center w-full h-20 px-4 text-gray-200 bg-header-blue backdrop-blur-md fixed navborder-solid border-b-1 border-slate-700 z-50">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-4xl font-signature ml-2">
          <a
            className="link-underline link-underline-black"
            href=""
            rel="noreferrer"
          >
            <Image src="/ds-logo.svg" height="50" width="50"/>
          </a>
        </h1>
        <div id="header-sub" className="text-md font-semibold text-teal-600 ml-2">Web Developer & Designer</div>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-8 cursor-pointer uppercase font-medium text-gray-200 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={`#${link}`}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-header-blue text-gray-300 upp">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer uppercase py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>


  )
}

export default Nav
