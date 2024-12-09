import React from "react";
import { ArrowRight } from "lucide-react";

import { Outfit } from 'next/font/google'
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})
interface SlideArrowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  _primaryColor?: string;
}

export default function SlideArrowButton({
  text = "Get Started",
  _primaryColor = "#6f3cff",
  className = "",
  ...props
  
}: SlideArrowButtonProps) {
  console.log(_primaryColor);
  return (
    <button
      className={`${outfit.className}  group relative rounded-full  bg-white px-2 py-2 text-xl font-semibold ${className}`}
      {...props} 
    >
      <div
        className="absolute left-0 top-0 flex h-full    w-11 items-center justify-end rounded-full transition-all duration-200 ease-in-out group-hover:w-full"
        style={{ backgroundColor: "rgb(255, 157, 0)" }}
      >
        
        <span className="mr-3  text-black transition-all duration-200 ease-in-out ">
          <ArrowRight size={20} />
        </span>
      </div>
      <span className={`${outfit.className} relative left-4 bottom-0.5 z-10 whitespace-nowrap px-8 font-normal text-base text-center 
       text-black transition-all duration-200 ease-in-out group-hover:-left-3 group-hover:text-black`}>
        {text}
      </span>

    </button>
  );
}

