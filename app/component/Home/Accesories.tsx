"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { BackgroundGradientAnimation } from "@/components/ui/BackgroundGradient";
import { Copy } from "lucide-react";
import { FiCopy } from "react-icons/fi";
import Confetti from "react-confetti";
import MagneticButton from "@/components/ui/MagneticEffect";


  

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-6xl mx-auto ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i===1? "col-span-2 row-span-2":"" }
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton1 = () => (
    <img src="/1.png" className="rounded-xl object-cover h-full w-full flex flex-1 "></img>
);
   const Skeleton2 = () => (
    <div className="relative h-full w-full">
    {/* Background Video */}
    <video
      src="/video3.mp4" // Replace with your video file path
      className="rounded-xl object-cover h-full w-full"
      autoPlay
      loop
      muted
      playsInline
    ></video>

    {/* Overlay Text */}
    <div className="absolute top-11 inset-x-0 flex items-center justify-center">
      <p className="text-white text-7xl text-center font-bold  p-4 rounded-xl">
        We can work from any timezone
      </p>
    </div>
  </div>
  );
  const Skeleton3 = () => {
    const [inputValue, setInputValue] = useState("Copy to clipboard");
    const [showConfetti, setShowConfetti] = useState(false);
    const [showCopied, setShowCopied] = useState(false);
  
    const handleCopy = () => {
      navigator.clipboard.writeText("jeevanshsharma15@gmail.com");
  
      // Trigger confetti
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
  
      // Show "Copied to clipboard!" with animation
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 3000);
    };
  
    const handleInputFocus = () => {
      // Reset input value when focused
      if (!showCopied) {
        setInputValue("");
      }
    };
  
    return (
      <BackgroundGradientAnimation>
        <div className="absolute z-10 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 text-xl text-center md:text-4xl lg:text-2xl">
        <MagneticButton>
          <p className="bg-clip-text text-center text-3xl px-2">CONTACT US THROUGH EMAIL</p>
          </MagneticButton>
          <div className="relative mt-9 flex items-center justify-center">
            {/* Input Field */}
           
            <div
              className={`text-lg font-normal pointer-events-auto h-9 w-80 text-black rounded-xl text-center border-none focus:outline-none transition-all duration-500 ${
                showCopied ? "bg-black text-white" : "bg-white text-black"
              } flex items-center justify-center`}
            >
              {showCopied ? "Copied to clipboard!" : inputValue}
            </div>
          
            {/* Copy Icon */}
            <button
              className="absolute right-[1rem] text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={handleCopy}
            >
              <FiCopy className={`${showCopied ? " text-white" : "text-black" }`} size={24} />
            </button>
          </div>
  
          {/* Confetti */}
          {showConfetti && (
            <Confetti
              width={320} // Width of the container
              height={300} // Height of the container
              recycle={false} // Stop after one trigger
              numberOfPieces={200} // Adjust confetti density
            />
          )}
        </div>
      </BackgroundGradientAnimation>
    );
  };
const Description = ()=>(
    <div className="font-bold text-neutral-950 text-4xl mb-20 ml-5  ">
        Dive into the transformative power of technology.
      </div>
)

const items = [
  {

    header: <Skeleton3/>,
    
  },
  {
   
    header: <Skeleton2/>,
   
  },
  {
    title: "The Art of Design",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    description: <Description />,
    header: <Skeleton1 />,
    
  },
  
   
];
