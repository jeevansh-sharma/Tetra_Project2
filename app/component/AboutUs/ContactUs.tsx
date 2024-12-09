import { InView } from "@/components/motionui/inView";

import { Outfit } from 'next/font/google'
import { FaCircleArrowRight } from "react-icons/fa6";
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})
export default function ContactUs() {
    return (
      <div className=" bg-[#F2F2F2]  pt-16 pl-8 relative">


<div className="flex flex-row justify-end ">
  <p className={`text-base tracking-wide ${outfit.className} font-light text-gray-800 opacity-35 pr-9 text-right w-auto right-8`}>
    Professionals focused on helping your brand  <br />
    grow and move forward.
  </p>


  <div className="text-center w-80 h-px bg-gray-800  opacity-35 mt-3"></div>
  
</div>



        <div className=" z-10 max-w-5xl mx-auto text-center flex flex-col justify-end ">
          {/* Header Section */}
          <InView
          variants={{
            hidden: { opacity: 0, y: 50, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          viewOptions={{ margin: '0px 0px -200px 0px' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center justify-center gap-4 mt-16">
            <div className="flex items-center justify-center space-x-6 w-full">
              
              <h1 className="text-4xl md:text-7xl ">
              <span className={`${outfit.className} font-semibold`}>Let&#39;s make an</span> <span className={`${outfit.className} font-extralight`}>Impact</span></h1>
            </div>
  
            <div className="flex items-center justify-center space-x-6 w-full">
             <h1 className="text-4xl md:text-7xl "><span className={`${outfit.className} font-semibold`}>together. Ready </span> <span className={`${outfit.className} font-extralight`}>when you are.</span></h1> 
            
            
            </div>
            <div className="mt-16 mb-24">

            
            <button className="px-14 py-5 bg-orange-400 text-black font-semibold rounded-full flex items-center ">
            <span className={`flex flex-row ${outfit.className} font-normal text-sm items-center  `}>CONTACT US <span className="ml-5 "><FaCircleArrowRight size={24}/></span>  </span>
            </button>
            </div>
          </div>
          </InView>
  
          {/* Services Section */}
          
        </div>
      </div>
    );
  }