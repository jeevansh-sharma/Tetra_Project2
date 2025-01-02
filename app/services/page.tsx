"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, useRef } from "react";
import Card from "../component/Services/Card";
import { projects } from "../component/Services/data";
import { AnimatePresence, useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import ContactUs from "../component/Services/ContactUs";

const NavBar = dynamic(() => import("../component/Navbar/Navbar"), {
  ssr: false, // Disable SSR for this component
});

import { HeroSection } from "../component/Services/NewHeroSection";

import { Footer } from "../component/Home/Footer";
import { Filler } from "../component/Services/Filler";
const SideMenuBtn = dynamic(() => import("../../components/ui/side-menu").then((mod) => mod.SideMenuBtn), {
  ssr: false,
});
const title = "SERVICES";
const summary = (
  <>
    Great things happen when passion meets with <br /> teamwork. Together we can achieve.
  </>
);

export default function Page() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Scroll progress bar effect
  useEffect(() => {
    if (typeof window === "undefined") return; // Prevent SSR issues

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

  // Lenis smooth scrolling effect
  useEffect(() => {
    if (typeof window === "undefined") return; // Prevent SSR issues

    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 right-0 h-full w-1.5 bg-neutral-900 ">
        <div className="bg-orange-500 rounded-b-2xl w-full" style={{ height: `${scrollProgress}%` }}></div>
      </div>
      <div
        className={`text-black ${scrollProgress < 10 ? `z-[0]` : `z-[50]`} fixed top-3 right-14 cursor-pointer`}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <SideMenuBtn />
      </div>

      {/* Intro Section */}
      <div className="relative w-screen h-screen flex flex-col bg-black">
        <AnimatePresence mode="wait">
          {isActive && <NavBar />}
        </AnimatePresence>
        <HeroSection title={title} summary={summary} />
      </div>
      <Filler />
      
      {/* Projects Section with Cards */}
      <div ref={container}>
        <main className="relative mt-20">
          {projects.map((project, index) => {
            const targetScale = 1 - (projects.length - index) * 0.05;
            return (
              <Card
                key={index}
                i={index}
                {...project}
                progress={scrollYProgress}
                range={[index * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </main>
      </div>

      {/* ContactUs and Footer */}
      <ContactUs />
      <Footer />
    </div>
  );
}

