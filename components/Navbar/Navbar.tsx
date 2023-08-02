"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import Navlinks from "./Navlinks";
import BurgerMenu from "./BurgerMenu";
import styles from "./Navbar.module.css";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  // Auto close the burger menu when clicking outside the nav
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | any) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef, isOpen]);

  // Auto close the burger and the menu when resizing window
  useEffect(() => {
    function handleResize() {
      const window_size = window.innerWidth || document.body.clientWidth;
      if (window_size > 768) {
        setIsOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <nav
      id="nav"
      ref={navRef}
      className={`${styles.navBg} shadow w-full fixed top-0 z-50`}
      role="navigation"
    >
      <div className="container mx-auto p-4 flex flex-wrap items-center">

        {/* LOGO AND BRAND */}
        <div className="mr-4 md:mr-8">
          <Link className="flex items-center" href="#home" rel="home">
            <img
              className="h-8 mr-2"
              src="/logo-no-bg.png"
              alt="Whybecause Logo"
            />
            <span className={styles.brand}>Whybecause</span>
          </Link>
        </div>

        {/* DESKTOP NAV LINKS */}
        <Navlinks
          ulClass={"hidden md:block ml-auto text-white"}
          liClass=""
          linkClass="font-semibold text-gray-400 px-4"
        />

        {/* MOBILE BURGER MENU */}
        <div className="ml-auto md:hidden">
          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {/* MOBILE NAV LINKS */}
        <div
          className={`${
            isOpen ? "h-32" : "h-0"
          } w-full transition-all ease-out duration-500`}
        >
          <Navlinks
            ulClass={`${
              isOpen ? "opacity-100" : "opacity-0"
            } ease-out duration-300 flex flex-col justify-center items-center`}
            liClass={"py-1"}
            linkClass={`font-semibold text-gray-400`}
          />
        </div>
      </div>
    </nav>
  );
}
