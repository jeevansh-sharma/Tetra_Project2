"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const OurVision = () => {
  const visionContainer = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
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

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="relative md:flex bg-black xl:grid xl:grid-cols-6 h-screen px-12 xl:px-20 overflow-hidden"
      ref={visionContainer}
    >
      {/* Vision Text Wrap */}
      <div className="absolute top-0 left-0 z-20 w-full h-screen grid place-content-center">
        <h2 className="text-9xl md:text-[10rem] lg:text-[12rem] xl:text-[14rem] font-bold bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent opacity-90 tracking-tighter">
          Our Vision
        </h2>
      </div>

      {/* Left Image */}
      <div className="col-span-2 v-image ">
        <Image
          src="/Vision5.jpg"
          width={312}
          height={600}
          alt="Vision Image "
          className="mt-24 h-[450px] object-cover rounded-xl"
        />
        <Image
          src="/Vision4.jpg"
          width={312}
          height={600}
          alt="Vision Image"
          className="mt-96  h-[450px] object-cover rounded-xl"
        />
      </div>

      {/* Vision Text Box */}
      <div className="col-span-2 flex items-center v-image z-20 ">
        <p className="w-8/12 lg:w-6/12  mx-auto text-white xl:w-auto font-semibold text-3xl 2xl:text-4xl px-10 py-20 xl:m-10 bg-black border border-amber-500 rounded-3xl h-fit  tracking-tighter">
        Helping and Enabling  brands optimize, thrive and expand their reach, focusing on high-impact and strategic markets. 
        </p>
      </div>

      {/* Right Image */}
      <div className="col-span-2 v-image">
        <Image
          src="/Vision3.jpg"
          width={312}
          height={400}
          alt="Vision Image"
          className="mt-64 ml-auto h-[450px] object-cover rounded-xl"
        />
      </div>
    </section>
  );
};

export default OurVision;
