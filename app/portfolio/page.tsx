"use client"


import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const NavBar = dynamic(() => import("../component/Navbar/Navbar"), {
  ssr: false, // Disable SSR for this component
});

import { HeroSection } from "../component/Services/NewHeroSection";
import ContactUs from "../component/AboutUs/ContactUs";


import { Footer } from "../component/Home/Footer";
import PortfolioImages from "../component/portfolio/PortfolioImages";
import { Filler } from "../component/Services/Filler";
const SideMenuBtn = dynamic(() => import("../../components/ui/side-menu").then((mod) => mod.SideMenuBtn), {
  ssr: false,
});
const title="PORTFOLIO"
const summary = (
    <>
      Great things happen when passion meets with <br /> teamwork. Together we can achieve.
    </>
  );

export default function Page(){
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isActive, setIsActive] = useState(false);
    // Ref and scroll progress for the Card component
  
   
  
    useEffect(() => {
      if (typeof window === "undefined") return;
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
    return(
        
        <section className="">
             
         <div className="fixed top-0 right-0 h-full w-1.5 bg-neutral-900 z-50 ">
        <div className="bg-orange-500 rounded-b-2xl w-full" style={{ height: `${scrollProgress}%` }}></div>
      </div>
      <div className={`text-black ${scrollProgress<10 ? `z-[0]`: `z-[50]` } fixed  top-3 right-14 cursor-pointer`} onClick={() => {setIsActive(!isActive)}}>
                      <SideMenuBtn />
            </div>

      {/* Intro Section */}
     
       
        <AnimatePresence mode="wait">
              {isActive && <NavBar />}
            </AnimatePresence>
      

       
          
     
      <HeroSection title={title} summary={summary}/>
       <Filler/>
       <PortfolioImages/>
      <ContactUs/>
      <Footer/>
        </section>
    )
}