import { InView } from "@/components/motionui/inView";
import { ArrowBigLeft, ArrowRight, CircleArrowLeftIcon, CircleArrowRight } from "lucide-react";
import { Outfit } from 'next/font/google'
import { FaCircleArrowRight } from "react-icons/fa6";
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})
export default function WhyChooseUs() {
    return (
      <div className="bg-neutral-950 h-[500px] text-white pt-16 pl-8 relative">






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
          <div className="flex flex-col items-center justify-center gap-4 ">
            <div className="flex items-center justify-center space-x-6 w-full">
              
              <h1 className="text-4xl md:text-7xl text-white">
              <span className={`${outfit.className} font-semibold`}>Why</span> <span className={`${outfit.className} font-extralight`}>Choose Us</span></h1>
            </div>
  
            
          </div>
          </InView>
  
          {/* Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-4  mt-12  ">
            {/* Service Card */}
            {[
              {
                title: "Branding and Identity Design",
                description: "Our creative agency helps you define and establish your unique brand identity.",
              },
              {
                title: "Website Design and Development",
                description: "We create responsive and user-friendly websites tailored to your business needs.",
              },
              {
                title: "Advertising and  Marketing Campaigns",
                description: "Boost your business with our targeted and effective marketing strategies.",
              },
              {
                title: "Creative Consulting and Development",
                description: "Innovative solutions to take your creative projects to the next level.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="relative hover:border-t-4  hover:border-t-orange-400 h-[250px]  hover:bg-white/10 p-10 pt-11  rounded-lg transition-all duration-300 group"
              >
                <h2 className={`text-lg ${outfit.className} text-left  font-semibold mb-2`}>{service.title}</h2>
                {/* Description - Display only on hover */}
                <p className={`text-sm ${outfit.className} text-left  text-gray-400 pt-8 pb-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  {service.description}
                </p>
               
                {/* Arrow Icon - Display only on hover */}
               
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }