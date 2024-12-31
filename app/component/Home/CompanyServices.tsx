import { InView } from "@/components/motionui/inView";
import MagneticButton from "@/components/ui/MagneticEffect";


import { Outfit } from 'next/font/google'
import Link from "next/link";
import { FaCircleArrowRight } from "react-icons/fa6";
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})
export default function CompanyServices() {
    return (
      <div className="bg-black text-white pt-16 pl-8 relative">
  
<div className="flex flex-row justify-end ">
  <p className={`text-base tracking-wide ${outfit.className} font-light text-white opacity-35 pr-9 text-right w-auto right-8`}>
    Professionals focused on helping your brand  <br />
    grow and move forward.
  </p>


  <div className="text-center w-80 h-px bg-white opacity-35 mt-3"></div>
  
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
              <img
                src="CompanyServices.jpg" // team image
                alt="Team photo"
                className="rounded-full w-72 h-24 object-cover"
              />
              <h1 className="text-4xl md:text-7xl text-white">
              <span className={`${outfit.className} font-semibold`}>Unique</span> <span className={`${outfit.className} font-extralight`}>Ideas.</span></h1>
            </div>
  
            <div className="flex items-center justify-center space-x-6 w-full">
             <h1 className="text-4xl md:text-7xl text-white"><span className={`${outfit.className} font-semibold`}>For Your</span> <span className={`${outfit.className} font-extralight`}>Business.</span></h1> 
            
           <MagneticButton>
            <Link href="/services" className="px-14 py-5 bg-orange-400 text-black font-semibold rounded-full flex items-center ">
            <span className={`flex flex-row ${outfit.className} font-normal text-sm items-center  `}>WHAT WE DO <span className="ml-5 "><FaCircleArrowRight size={24}/></span>  </span>
            </Link>
            </MagneticButton>
            </div>
          </div>
          </InView>
  
          {/* Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-4  mt-12 h-[400px] ">
            {/* Service Card */}
            {[
              {
                title: "Training & Skill Development",
                description: "Our training programs enhance skills through hands-on learning for individuals ...",
                link: "one",
              },
              {
                title: "Consultancy & Documentation Services",
                description: "Our consultancy services provide strategic advice to businesses and ...",
                link: "two",
              },
              {
                title: "Placement Assistance",
                description: "We connect students and trainees with top companies through comprehensive placement services ...",
                link: "three",
              },
              {
                title: "Digital Marketing",
                description: "Innovative solutions to take your creative projects to the next level.",
                link: "four",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="relative hover:border-t-4  hover:border-t-orange-400  hover:bg-white/10 p-10 pt-11  rounded-lg transition-all duration-300 group"
              >
                <h2 className={`text-lg ${outfit.className} text-left  font-semibold mb-2`}>{service.title}</h2>
                {/* Description - Display only on hover */}
                <p className={`text-sm ${outfit.className} text-left  text-gray-400 pt-8 pb-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  {service.description}
                </p>
               
                {/* Arrow Icon - Display only on hover */}
                <Link href={`/services#${service.link}`} className="absolute bottom-24 left-10 text-orange-400 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaCircleArrowRight size={36}/>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }