"use client";

import { menu } from "framer-motion/client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/work", label: "Work" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/lab", label: "Lab" },
];

const Menu = () => {
  const container = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef<gsap.core.Timeline | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(() => {
    gsap.set(".menu-link-item-holder", { y: 75 });

    tl.current = gsap.timeline({ paused: true })
      .to(".menu-overlay", {
        duration: 1.25,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
        delay: 0.25,
      })
      .to(".menu-link-item-holder", {
        y: 0,
        duration: 1.25,
        stagger: 0.1,
        ease: "power4.inOut",
        delay: 0.75,
      });
  }, { scope: container });


  useEffect(() => {
    if (isMenuOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-container relative" ref={container}>
      <div className="menu-bar flex justify-between items-center px-4 py-4">
        <div className="menu-logo text-lg font-bold">
          <Link href="/">CODEGRID</Link>
        </div>
        <div className="menu-open cursor-pointer text-sm uppercase" onClick={toggleMenu}>
          <p>Menu</p>
        </div>
      </div>
      {isMenuOpen && (
        <div className="menu-overlay fixed top-0 left-0 w-screen h-screen bg-lime-400 z-20 flex flex-col clip-path-[polygon(0%_0%,_100%_0%,_100%_0%,_0%_0%)]">
          <div className="menu-overlay-bar flex justify-between items-center px-4 py-4">
            <div className="menu-logo text-lg font-bold">
              <Link href="/">CODEGRID</Link>
            </div>
            <div className="menu-close cursor-pointer text-sm uppercase" onClick={toggleMenu}>
              <p>Close</p>
            </div>
          </div>

          <div className="menu-copy flex flex-col justify-center items-start flex-1 px-10 space-y-4">
            {menuLinks.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div
                  className="menu-link-item-holder relative cursor-pointer"
                  onClick={toggleMenu}
                >
                  <Link
                    href={link.path}
                    className="menu-link text-black text-8xl font-light tracking-tight leading-tight"
                  >
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="menu-info flex justify-between px-10 py-4">
            <div className="menu-info-col flex flex-col space-y-2">
              <a href="#" className="text-sm uppercase">X &#8599;</a>
              <a href="#" className="text-sm uppercase">Instagram &#8599;</a>
              <a href="#" className="text-sm uppercase">LinkedIn &#8599;</a>
              <a href="#" className="text-sm uppercase">Behance &#8599;</a>
              <a href="#" className="text-sm uppercase">Dribbble &#8599;</a>
            </div>
            <div className="menu-info-col flex flex-col space-y-1 text-sm">
              <p>info@codegrid.com</p>
              <p>0923 3984 23</p>
            </div>
          </div>

          <div className="menu-preview flex justify-end items-end px-10 py-4">
            <p className="text-sm uppercase">View Showreel</p>
          </div>
        </div>
      )}

      \
    </div>
  );
};

export default Menu;
