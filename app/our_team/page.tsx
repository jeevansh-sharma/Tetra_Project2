"use client"

import { SideMenuBtn } from "@/components/ui/side-menu";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import NavBar from "../component/Navbar/Navbar";
import { HeroSection } from "../component/Services/NewHeroSection";
import ContactUs from "../component/AboutUs/ContactUs";
import Filler from "../component/Services/Filler";
import { ParallaxScrollDemo } from "../component/portfolio/ParralaxDemo";
import { Footer } from "../component/Home/Footer";

const title="OUR TEAM"
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
      <ContactUs/>
      <Footer/>
        </section>
    )
}