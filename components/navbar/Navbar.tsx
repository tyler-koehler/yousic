import Link from "next/link";
import React from "react";
import { Switch } from "../switch/Switch";

export const Navbar: React.FC = () => {
  return (
    <>
      <nav className="bg-light dark:bg-dark fixed h-16 lg:h-20 top-0 left-0 right-0 px-12 flex items-center justify-center shadow-lg dark:shadow-gold dark:shadow-md z-50">
        <div className="flex items-center w-container">
          <Link
            href="/"
            className="text-lg lg:text-xl font-bold text-black dark:text-white"
          >
            <img
              className="w-32 mr-1 inline"
              src="\assets\icon\logo\Yousic.png"
            />
          </Link>
          <ul className="text-center flex justify-start items-center w-[22rem] m-0 p-0 relative mr-auto ml-9">
            <li
              className="
                mr-4
                text-black
                dark:text-white 
                font-thin 
                relative
                w-fit
                before:content-['']
                before:absolute
                before:-bottom-1
                before:left-0
                before:w-0
                before:h-[.15rem]
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-black
                before:dark:bg-white
                hover:before:w-full
                hover:before:opacity-100"
            >
              <Link href="">Home</Link>
            </li>
            <li
              className="
              mr-4
              text-black
              dark:text-white 
              font-thin 
              relative
              w-fit
              before:content-['']
              before:absolute
              before:-bottom-1
              before:left-0
              before:w-0
              before:h-[.15rem]
              before:rounded-full
              before:opacity-0
              before:transition-all
              before:duration-500
              before:bg-black
              before:dark:bg-white
              hover:before:w-full
              hover:before:opacity-100"
            >
              <Link href="">Services</Link>
            </li>
            <li
              className="
              mr-4
              text-black
              dark:text-white 
              font-thin 
              relative
              w-fit
              before:content-['']
              before:absolute
              before:-bottom-1
              before:left-0
              before:w-0
              before:h-[.15rem]
              before:rounded-full
              before:opacity-0
              before:transition-all
              before:duration-500
              before:bg-black
              before:dark:bg-white
              hover:before:w-full
              hover:before:opacity-100"
            >
              <Link href="">Blog</Link>
            </li>
            <li
              className="
              mr-4
              text-black
              dark:text-white 
              font-thin 
              relative
              w-fit
              before:content-['']
              before:absolute
              before:-bottom-1
              before:left-0
              before:w-0
              before:h-[.15rem]
              before:rounded-full
              before:opacity-0
              before:transition-all
              before:duration-500
              before:bg-black
              before:dark:bg-white
              hover:before:w-full
              hover:before:opacity-100"
            >
              <Link href="">About Us</Link>
            </li>
          </ul>
          <Switch />
          <button className="bg-gold font-bold text-sm text-white px-5 py-2 rounded-[20px] transition ease-in-out duration-300 shadow-Button hover:shadow-darkButton">
            Connect Metamask
          </button>
        </div>
      </nav>
    </>
  );
};
