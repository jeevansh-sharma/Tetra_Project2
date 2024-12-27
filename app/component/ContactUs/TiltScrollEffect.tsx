"use client";
import React from "react";

import Image from "next/image";
import { ContainerScroll } from "@/components/ui/TiltImage";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
            Connect with Us to Explore  <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
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
          className="mx-auto rounded-2xl object-cover h-full object-left-top hover:scale-105 transition-transform duration-500 ease-in-out" 
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
