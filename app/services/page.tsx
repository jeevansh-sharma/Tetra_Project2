"use client";
import { useEffect, useState, useRef } from "react";
import { Tiles } from "@/components/ui/animated-grid-box";
import { SpinningTextCustomVariants } from "@/components/motionui/spining-text-custom";
import { Outfit } from "next/font/google";
import Card from "../component/Services/Card";
import { projects } from "../component/Services/data";
import { AnimatePresence, useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";

import ContactUs from "../component/Services/ContactUs";
import DigitalMarketing from "../component/Services/Digital Marketing";
import { NavbarTop } from "../component/NavbarTop";
import { SideMenuBtn } from "@/components/ui/side-menu";
import NavBar from "../component/Navbar/Navbar";
import { HeroSection } from "../component/Services/NewHeroSection";


// Font configuration
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export default function Page() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);
  // Ref and scroll progress for the Card component
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Scroll progress for the progress bar
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / windowHeight) * 100;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Lenis smooth scrolling effect
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 right-0 h-full w-1.5 bg-neutral-900 ">
        <div className="bg-orange-500 rounded-b-2xl w-full" style={{ height: `${scrollProgress}%` }}></div>
      </div>
      <div className={`text-black ${scrollProgress<10 ? `z-[0]`: `z-[50]` } fixed  top-3 right-14 cursor-pointer`} onClick={() => {setIsActive(!isActive)}}>
                      <SideMenuBtn />
            </div>

      {/* Intro Section */}
      <div className="relative w-screen h-screen flex flex-col  bg-black"> 
       
        <AnimatePresence mode="wait">
              {isActive && <NavBar />}
            </AnimatePresence>
       <HeroSection/>

        <div className="absolute bottom-24 right-80 ">
          <SpinningTextCustomVariants />
        </div>
      </div>

      {/* Projects Section with Cards */}
      <div ref={container}>
        <main className="relative mt-20">
          {projects.map((project, index) => {
            const targetScale = 1 - (projects.length - index) * 0.05;
            return <Card key={index} i={index} {...project} progress={scrollYProgress} range={[index * 0.25, 1]} targetScale={targetScale} />;
          })}
        </main>
      </div>

      {/* Optional ContactUs Component */}
      {/* <ContactUs /> */}
    </div>
  );
}


