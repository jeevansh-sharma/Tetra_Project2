"use client"; // Ensure this is treated as a client component

import React, { useEffect, useState } from "react";
import { gsap, CSSPlugin, Expo } from "gsap";
gsap.registerPlugin(CSSPlugin);

const Preloader = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) => {
        if (counter < 100) {
          return counter + 1;
        } else {
          clearInterval(count);
          setCounter(100);
          reveal();
          return counter;
        }
      });
    }, 25);
  }, []);

  const reveal = () => {
    const tl = gsap.timeline({
      
      onComplete: () => {
        console.log("Loading Completed");
      },
    });
    tl.to("#line", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.7,
    })
      .to("#counter", { opacity: 0, duration: 0.3 })
      .to("#counter", { display: "none", duration: 0.3 })
      .to("#line", {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
        delay: 0.5,
      })
      .to("#content", { opacity: 1, width: "100%", ease: Expo.easeInOut, duration: 0.7 })
      .to("#content-lines", { display: "block", duration: 0.1 })
      .to("#content-lines", {
        opacity: 0,
        stagger: 0.15,
        ease: Expo.easeInOut,
        duration: 0.6,
      })
      .to("#progress-bar", { height:"0%" , duration: 0.3 })
    
      .to("counter", { height:"0%", duration: 0.1 })
      .to("#line", { width: "0%", height: "0%", ease: Expo.easeInOut, duration: 0.1 })
      
      .to("#content", { opacity:0, width:"0%",ease: Expo.easeInOut, duration: 0.3,  });

  };

  return (
    <div className="relative  w-screen h-screen overflow-hidden text-black">
      {/* Loader Overlay */}
      <div className="h-full w-full bg-[#000] flex justify-center items-center absolute top-0 overflow-hidden ">
        <div id="line" className="absolute left-0 z-20 w-0 h-[2px] bg-orange-500"></div>
        <div
          id="progress-bar"
          className="absolute left-0 w-0 h-[1px] transition bg-white/80"
          style={{ width: counter + "%" }}
        ></div>
        <div
          id="counter"
          className="absolute z-30 tracking-tighter text-center transform  font-extralight text-white/80 -translate-y-10 md:-translate-y-20 text-4xl md:text-8xl"
        >
          {counter}%
        </div>
      </div>

      {/* Content Reveal */}
      <div id="content" className="absolute top-0 left-0 w-0 h-full bg-[#000] p-auto z-[48] text-white overflow-hidden" >
        
      </div>
    </div>
  );
};

export default Preloader;
