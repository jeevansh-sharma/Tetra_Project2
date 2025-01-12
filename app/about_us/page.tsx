"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("../component/Navbar/Navbar"), {
  ssr: false, // Disable SSR for this component
});


import { OurMission } from "../component/AboutUs/OurMission";
import { OurVision } from "../component/AboutUs/OurVision";

import ContactUs from "../component/AboutUs/ContactUs";
import { HeroSection } from "../component/Services/NewHeroSection";

import { Footer } from "../component/Home/Footer";

import { AnimatePresence } from "framer-motion";

import { WhyChooseUs } from "../component/AboutUs/WhyChooseUs";
const SideMenuBtn = dynamic(() => import("../../components/ui/side-menu").then((mod) => mod.SideMenuBtn), {
  ssr: false,
});


const title = "ABOUT US";
const summary = (
  <>
    Great things happen when passion meets with <br /> teamwork. Together we can achieve.
  </>
);

export default function Page() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Ensure code only runs in the browser
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const scrollTop = window.scrollY; // Current scroll position
        const windowHeight =
          document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
        const scrollPercentage = (scrollTop / windowHeight) * 100; // Calculate scroll percentage
        setScrollProgress(scrollPercentage);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      {/* Scrollbar */}
      <div className="fixed top-0 right-0 h-full w-1.5 bg-neutral-900 z-50">
        <div
          className="bg-orange-500 rounded-b-2xl w-full"
          style={{ height: `${scrollProgress}%` }}
        ></div>
      </div>
      <div className={`text-black ${scrollProgress<10 ? ` z-[50] md:z-[0]`: `z-[50]` } fixed  top-3 right-4 md:right-14 cursor-pointer`} onClick={() => {setIsActive(!isActive)}}>
                      <SideMenuBtn />
            </div>

      <AnimatePresence mode="wait">
        {isActive && <NavBar />}
      </AnimatePresence>
      <HeroSection title={title} summary={summary} />
      <div className="bg-[#e1e1e1] h-[1vh] md:h-[2vh] lg:h-[14vh] w-screen flex flex-col justify-center items-center">
        </div>
      <OurMission />
      <OurVision />
      <WhyChooseUs />
      <ContactUs />
      <Footer />
    </>
  );
}
