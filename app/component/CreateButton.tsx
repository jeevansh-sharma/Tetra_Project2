import React from "react";
import { ArrowRight, CircleArrowRight, MoveRight } from "lucide-react";
import { BorderTrail } from "@/components/motionui/border-trail";
import { Outfit } from 'next/font/google'
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})
interface SlideArrowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  primaryColor?: string;
}

export default function SlideArrowButton({
  text = "Get Started",
  primaryColor = "#6f3cff",
  className = "",
  ...props
}: SlideArrowButtonProps) {
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

{/* <div className="flex items-center justify-center bg-gray-900 h-16 w-96 p-12">
    <AnimatedBorderTrail className="rounded-full bg-zinc-600 hover:bg-zinc-500"
    contentClassName="rounded-full bg-zinc-800"
    trailColor="white">

    <SlideArrowButton/>
    </AnimatedBorderTrail>

    </div> */}