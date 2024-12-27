"use client";
import { useEffect, useState } from "react";
import { Tiles } from "@/components/ui/animated-grid-box";
import { SpinningTextCustomVariants } from "@/components/motionui/spining-text-custom";
import { OurMission } from "../component/AboutUs/OurMission";
import { Outfit } from "next/font/google";
import { OurVision } from "../component/AboutUs/OurVision";
import WhyChooseUs from "../component/AboutUs/WhyChooseUs";
import ContactUs from "../component/AboutUs/ContactUs";
import { HeroSection } from "../component/Services/NewHeroSection";
import Filler from "../component/Services/Filler";
import { Footer } from "../component/Home/Footer";
import { SideMenuBtn } from "@/components/ui/side-menu";
import { AnimatePresence } from "framer-motion";
import NavBar from "../component/Navbar/Navbar";


const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});
const title="ABOUT US"
const summary = (
  <>
    Great things happen when passion meets with <br /> teamwork. Together we can achieve.
  </>
);

export default function Page() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {                    //useEffect of scroll bar function
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
  }, []);

  return (
    <>
                                        {/* //scrollbar */}
      <div className="fixed top-0 right-0 h-full w-1.5 bg-neutral-900 z-50">
        <div
          className="bg-orange-500 rounded-b-2xl w-full"
          style={{ height: `${scrollProgress}%` }}
        ></div>
      </div>
      <div className={`text-black ${scrollProgress<10 ? `z-[0]`: `z-[50]` } fixed  top-3 right-14 cursor-pointer`} onClick={() => {setIsActive(!isActive)}}>
                      <SideMenuBtn />
            </div>
            
        <AnimatePresence mode="wait">
              {isActive && <NavBar />}
            </AnimatePresence>
       <HeroSection title={title} summary={summary}/>
       <Filler/>
      <OurMission/>
     <OurVision/>
     <WhyChooseUs/>
     <ContactUs/>
     <Footer/>
    </>
  );
}

