"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Navbar.module.css";
import Navlinks from "./Navlinks";

//  {/* <nav className={styles.container}>
//    <div className={styles.flex}>

//      {/* Mobile nav */}
//      <div className={styles.mobile}>
//        <div className={styles.menuToggle}>
//          <input type="checkbox" />

//          <span></span>
//          <span></span>
//          <span></span>

//          <ul className={styles.menu}>
//            <div className={styles.menuItems}>
//              <Navlinks/>
//            </div>
//          </ul>
//        </div>
//      </div>

//      <div className="flex">
//        <Link className="flex" href="/">
//          <Image
//            className={styles.logo}
//            src="/logo-no-bg.png"
//            alt="Logo"
//            width={40}
//            height={40}
//            priority
//          />
//        </Link>

//        {/* Desktop nav */}
//        <nav className={styles.desktop}>
//          <Navlinks/>
//        </nav>
//      </div>
//    </div>
//  </nav> */}

type BurgerButtonProps = {
  isOpen: boolean;
  setIsOpen: Function;
};

function BurgerButton({ isOpen, setIsOpen }: BurgerButtonProps) {
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <button
      className="flex flex-col h-12 w-12 border-2 border-black rounded justify-center items-center group"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
    </button>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    // <nav className={styles.container}>
    // <div className="block lg:hidden">
    //   <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
    // </div>
    // </nav>

    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center">
          <img
            src="/logo-no-bg.png"
            className="h-8 mr-3"
            alt="Whybecause Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Whybecause
          </span>
        </a>

        <div className="flex md:order-2">
          <div className="block lg:hidden">
            <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <button
            type="button"
            className="sm:visible hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Contact
          </button>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
