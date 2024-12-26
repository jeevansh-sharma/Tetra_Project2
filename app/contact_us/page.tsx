"use client";
import { useEffect, useState } from "react";
import { Tiles } from "@/components/ui/animated-grid-box";
import { Outfit } from "next/font/google";
import { SpinningTextCustomVariants } from "@/components/motionui/spining-text-custom";
import { LetsTalk } from "../component/ContactUs/Talk";
import Map from "../component/ContactUs/Map";
import { Innovative } from "../component/ContactUs/Innovative";
import { HeroScrollDemo } from "../component/ContactUs/TiltScrollEffect";
import { HeroSection } from "../component/Services/NewHeroSection";
import { Footer } from "../component/Home/Footer";


const outfit = Outfit({
    subsets: ["latin"],
    display: "swap",
  });

  const summary  = (
    <>
      Great things happen when passion meets with <br /> teamwork. Together we can achieve.
    </>
  );
export default function Page(){
    const [scrollProgress, setScrollProgress] = useState(0);

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
<HeroSection title="CONTACT US" summary={summary}/>
<HeroScrollDemo/>
<LetsTalk/>
<Map/>
<Innovative/>
<Footer/>


</>
    )
}

