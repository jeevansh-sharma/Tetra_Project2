"use client"


import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
const NavBar = dynamic(() => import("../component/Navbar/Navbar"), {
  ssr: false, // Disable SSR for this component
});

import { HeroSection } from "../component/Services/NewHeroSection";
import ContactUs from "../component/AboutUs/ContactUs";


import { Footer } from "../component/Home/Footer";
import { FocusCardsDemo } from "../component/OurTeam/TeamMembers";
import DirectorComponent from "../component/OurTeam/DirectorComponent";
import CMOComponent from "../component/OurTeam/CMOMessage";

const SideMenuBtn = dynamic(() => import("../../components/ui/side-menu").then((mod) => mod.SideMenuBtn), {
  ssr: false,
});


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
      if (typeof window === "undefined") return;
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
     <div className={`text-black ${scrollProgress<10 ? ` z-[50] md:z-[0]`: `z-[50]` } fixed  top-3 right-4 md:right-14 cursor-pointer`} onClick={() => {setIsActive(!isActive)}}>
                     <SideMenuBtn />
           </div>

      {/* Intro Section */}
     
       
        <AnimatePresence mode="wait">
              {isActive && <NavBar />}
            </AnimatePresence>
      

       
          
     
      <HeroSection title={title} summary={summary}/>
      <div className="bg-[#e1e1e1] h-[4vh] md:h-[7vh] lg:h-[9vh] xl:h-[20vh] w-screen flex flex-col justify-center items-center">
</div>
      <DirectorComponent/>
      <CMOComponent/>
   
      <FocusCardsDemo/>
      <ContactUs/>
      <Footer/>
        </section>
    )
}