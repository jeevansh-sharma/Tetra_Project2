"use client";
import React, { useRef } from "react";

import Image from "next/image";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { Outfit } from "next/font/google";

type CardProps = {
  i: number;
  title: string;
  description: string;
  src: string;
  
  color: string;
  range: [number, number];
  targetScale: number;
  progress: MotionValue<number>; // Consider using a more specific type like `` if applicable
};
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});
const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  src,
  
  color,
  range,
  targetScale,
  progress,
}) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
   
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]); // Image zoom out animation
  const scale = useTransform(progress, range, [1, targetScale]); // Stacking effect

  return (
    <div
      ref={container}
      className="cardContainer h-[70vh] md:h-[70vh] lg:h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        className="card flex flex-col relative h-[400px] w-[350px] md:h-[440px] md:w-[800px] lg:h-[500px] lg:w-[1000px] rounded-3xl p-2 md:p-12"
        style={{ scale, backgroundColor: `${color}`, top: `calc(-5vh + ${i * 25}px)` }}
      >
        <h2 className={`${outfit.className} text-center mt-2 md:mt-0 m-0 text-2xl md:text-4xl font-semibold`}>{title}</h2>
        <div className="flex flex-col-reverse md:flex-row  h-full mt-0  lg:mt-12 gap-1 md:gap-12">
          <div className="desc w-[90%] text-justify md:text-left ml-4 md:mr-0 md:w-[40%] h-[60%] md:h-auto relative top-2 md:top-[10%]">
            <p className="text-xs md:text-sm lg:text-base first-letter:text-lg md:first-letter:text-2xl">{description}</p>
            
          </div>
          <div className="imgContainer mt-0 md:mt-12 lg:mt-0 ml-3 md:mr-0 relative w-[90%] md:w-[60%] h-[30%] md:h-[70%] lg:h-full rounded-3xl overflow-hidden">
            <motion.div style={{ scale: imageScale }} className="w-full h-full">
              <Image fill src={`/${src}`} alt="image" className="object-cover" unoptimized />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
