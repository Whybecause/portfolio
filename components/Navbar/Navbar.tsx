"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { useScrollPosition } from "@/hooks/useScrollPosition";

import Navlinks from "./Navlinks";
import BurgerMenu from "./BurgerMenu";

import logo from "../../public/logo-no-bg.png";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const scrollPosition = useScrollPosition();

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

  // Keep track of scrolling position so we can change navbar design after we scroll the hero
  const heroEndScroll = 800;

  const dynamicNav = () => {
    if (scrollPosition > heroEndScroll || isOpen) {
      return "mainBg opacity-90 shadow";
    } else {
      return "opacity-100";
    }
  };

  return (
    <nav
      id="nav"
      ref={navRef}
      className={`${dynamicNav()} ease-out duration-500 w-full fixed top-0 z-50 `}
      role="navigation"
    >
      <div className="container mx-auto p-2 flex flex-wrap items-center">
        {/* LOGO AND BRAND */}
        <div className="mr-4 md:mr-8">
          <Link
            className="flex items-center"
            href="/"
            onClick={(e) => {
              if (document.getElementById("homepage")) {
                e.preventDefault();
                document
                  .getElementById("homepage")
                  ?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <Image
              className="mr-2"
              style={{ height: "50px", width: "50px" }}
              src={logo}
              alt="Whybecause Logo"
            />
            <span className={styles.brand}>Whybecause</span>
          </Link>
        </div>

        {/* DESKTOP NAV LINKS */}
        <Navlinks
          ulClass={"hidden md:block ml-auto mainBg rounded-lg p-2"}
          liClass="px-4"
          setIsOpen={setIsOpen}
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
            ulClass={`${isOpen ? styles.linksVisible : styles.linksInvisible} ${
              styles.linksContainer
            }`}
            liClass={"py-1"}
            setIsOpen={setIsOpen}
          />
        </div>
      </div>
    </nav>
  );
}
