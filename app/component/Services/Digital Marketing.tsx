import { Outfit } from "next/font/google";
import React from "react";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});


const DigitalMarketing = () => {
  return (
    <>
    <div className="parallax w-screen flex flex-col items-center justify-center bg-black bg-opacity-80">
    <h1 className={`${outfit.className} font-semibold text-[5.5rem] text-white text-center`}>
          Discover Our <span className="font-extralight">Studio</span>
        </h1>
        
          <div className="h-[0.3rem] w-[8rem]  bg-[#F97316]"></div>
        
    </div>

   
    </>
  );
};

export default DigitalMarketing;
