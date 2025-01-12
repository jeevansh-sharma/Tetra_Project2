"use client";

import React, {  useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const OurVision = () => {
  const visionContainer = useRef<HTMLElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.to(".v-image", {
        y: "-55%",
        duration: 3,
        scrollTrigger: {
          trigger: visionContainer.current,
          pin: true,
          scrub: true,
        },
      });
    });

    return () => {
      ctx.revert();
    };
  });

  return (
    <section
      className="relative grid grid-cols-6 bg-black lg:grid lg:grid-cols-6 h-[500px] md:h-screen px-7 lg:px-20 overflow-hidden"
      ref={visionContainer}
    >
      {/* Vision Text Wrap */}
      <div className="absolute -top-[50px] md:top-0 left-0 z-[21] w-full h-screen grid place-content-center">
        <h2 className=" text-7xl md:text-8xl lg:text-9xl md:text-[10rem] lg:text-[12rem] xl:text-[14rem] font-bold bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent opacity-90 tracking-tighter">
          Our Vision
        </h2>
      </div>

      {/* Left Image */}
      <div className="col-span-2 md:col-span-2 v-image">
        <Image
          src="/Vision5.jpg"
          width={312}
          height={600}
          alt="Vision Image "
          unoptimized 
          className="mt-24  h-[180px] w-[120px]  md:w-[250px] md:h-[300px] lg:h-[450px] lg:w-[300px]  object-cover rounded-xl"
        />
        <Image
          src="/Vision4.jpg"
          width={312}
          height={600}
          alt="Vision Image"
          unoptimized 
          className="mt-[14rem]   md:mt-96 h-[180px] w-[120px] md:w-[250px] md:h-[300px] lg:h-[450px] lg:w-[300px]  object-cover rounded-xl"
        />
      </div>

      {/* Vision Text Box */}
      <div className="col-span-2 flex items-center v-image z-20  ">
        <p className="w-11/12 lg:w-fit    text-white xl:w-auto font-semibold text-xs md:text-xl lg:text-4xl px-2 py-6 md:px-10 md:py-20 ml-4 lg:m-10 bg-black border border-amber-500 rounded-3xl h-6/12  tracking-tighter">
        Helping and Enabling  brands optimize, thrive and expand their reach<span className="inline">, focusing on high-impact and strategic markets.</span> 
        </p>
      </div>

      {/* Right Image */}
      <div className="col-span-2 v-image">
        <Image
          src="/Vision3.jpg"
          width={312}
          height={400}
          alt="Vision Image"
          unoptimized 
          className="mt-[18rem] md:mt[28rem] ml-5 h-[160px] w-[100px] md:w-[250px] md:h-[300px] lg:h-[450px] lg:w-[300px] object-cover rounded-xl"
        />
      </div>
    </section>
  );
};

export default OurVision;
