"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Outfit } from "next/font/google";

type CardProps = {
  i: number;
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
  range: [number, number];
  targetScale: number;
  progress: any; // Consider using a more specific type like `MotionValue<number>` if applicable
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
  link,
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
      className="cardContainer h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        className="card flex flex-col relative h-[500px] w-[1000px] rounded-3xl p-12"
        style={{ scale, backgroundColor: `${color}`, top: `calc(-5vh + ${i * 25}px)` }}
      >
        <h2 className={`${outfit.className} text-center m-0 text-4xl font-semibold`}>{title}</h2>
        <div className="flex h-full mt-12 gap-12">
          <div className="desc w-[40%] relative top-[10%]">
            <p className="text-base first-letter:text-2xl">{description}</p>
            
          </div>
          <div className="imgContainer relative w-[60%] h-full rounded-3xl overflow-hidden">
            <motion.div style={{ scale: imageScale }} className="w-full h-full">
              <Image fill src={`/${src}`} alt="image" className="object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
