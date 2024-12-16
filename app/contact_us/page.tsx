"use client";
import { useEffect, useState } from "react";
import { Tiles } from "@/components/ui/animated-grid-box";
import { Outfit } from "next/font/google";
import { SpinningTextCustomVariants } from "@/components/motionui/spining-text-custom";
import { LetsTalk } from "../component/ContactUs/Talk";
import Map from "../component/ContactUs/Map";
import { Innovative } from "../component/ContactUs/Innovative";
import { HeroScrollDemo } from "../component/ContactUs/TiltScrollEffect";


const outfit = Outfit({
    subsets: ["latin"],
    display: "swap",
  });
  
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
<div className="relative">
<AnimatedGridBackgroundSection>
{/* Section with higher z-index */}
<section className="flex flex-col mt-44  w-[55vw] items-start pl-4 sm:pl-6 md:pl-8 lg:pl-20 relative">
<p
className={`${outfit.className}  text-8xl text-white font-bold`}
>
Get{" "}
<span className={`${outfit.className} font-normal`}>in touch</span>
</p>
<div className="w-40 mt-3 border-4 border-orange-500"></div>
<div className="max-w-[540px] mt-9 ml-2">
<p
className={`hidden ${outfit.className}  md:inline text-2xl text-gray-200 font-light`}
>
Lets connect and bring your vision to life. Get in
<br /> touch now
</p>
</div>
</section>

</AnimatedGridBackgroundSection>
<div className="absolute bottom-36 right-80 z-[30] ">
<SpinningTextCustomVariants />
</div>
</div>
<HeroScrollDemo/>
<LetsTalk/>
<Map/>
<Innovative/>


</>
    )
}

const AnimatedGridBackgroundSection: React.FC<{ children?: React.ReactNode }> = ({
    children,
  }) => {
    return (
      <div
        className={
          "w-full h-[650px] bg-gradient-to-b from-neutral-950 to-neutral-900 relative overflow-hidden flex"
        }
      >
        {/* Children with lower z-index */}
        <div className={"w-fit h-fit relative z-[30]"}>{children}</div>
  
        {/* Tiles with higher z-index */}
        <div className={"absolute top-0 left-0 h-full w-full "}>
          <Tiles rows={60} cols={60} />
        </div>
      </div>
    );
  };
  