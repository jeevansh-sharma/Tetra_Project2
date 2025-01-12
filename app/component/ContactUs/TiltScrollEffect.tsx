"use client";
import React from "react";

import Image from "next/image";
import { ContainerScroll } from "@/components/ui/TiltImage";

export function HeroScrollDemo() {
  return (
    <div className="flex mt-32 md:mt-0  lg:mt-0 flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="  text-2xl md:text-4xl font-semibold text-black dark:text-white">
            Connect with Us to Explore  <br />
              <span className="text-3xl  md:text-[6rem] font-bold mt-1 leading-none">
              Endless Possibilities
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/s2.jpeg`}
          alt="hero"
          height={600}
          width={1400}
          className="mx-auto hidden md:block rounded-2xl object-cover   h-full object-left-top hover:scale-105 transition-transform duration-500 ease-in-out" 
          draggable={false}
          unoptimized
        />
        <Image
          src={`/s3.jpeg`}
          alt="hero"
          height={600}
          width={1400}
          className="mx-auto block md:hidden rounded-2xl object-cover   h-full object-left-top hover:scale-105 transition-transform duration-500 ease-in-out" 
          draggable={false}
          unoptimized
        />
      </ContainerScroll>
    </div>
  );
}
