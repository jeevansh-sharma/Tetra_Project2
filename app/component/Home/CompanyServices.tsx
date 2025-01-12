import { InView } from "@/components/motionui/inView";
import MagneticButton from "@/components/ui/MagneticEffect";

import { Outfit } from "next/font/google";
import Link from "next/link";
import { FaCircleArrowRight } from "react-icons/fa6";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export default function CompanyServices() {
  return (
    <div className="bg-black text-white pt-16 pl-4 sm:pl-8 relative">
      <div className="hidden md:flex flex-col md:flex-row justify-end md:items-center">
        <p
          className={` text-sm sm:text-base tracking-wide ${outfit.className} font-light text-white opacity-35 pr-4 sm:pr-9 text-right`}
        >
          Professionals focused on helping your brand <br />
          grow and move forward.
        </p>

        <div className="hidden md:block text-center w-80 h-px bg-white opacity-35 mt-3"></div>
      </div>

      <div className="z-10 max-w-5xl mx-auto text-center flex flex-col justify-end px-4 sm:px-6">
        {/* Header Section */}
        <InView
          variants={{
            hidden: { opacity: 0, y: 50, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center justify-center gap-4 mt-12 sm:mt-16">
            <div className="flex flex-wrap items-center justify-center space-x-0 sm:space-x-6 w-full">
              <img
                src="CompanyServices.jpg"
                alt="Team photo"
                className="rounded-full w-28
                 h-14 md:w-72 mr-3 md:mr-0 md:h-24 object-cover"
              />
              <h1 className="text-3xl sm:text-4xl md:text-7xl text-white">
                <span
                  className={`${outfit.className} font-semibold`}
                >
                  Unique
                </span>{" "}
                <span className={`${outfit.className} font-extralight`}>
                  Ideas.
                </span>
              </h1>
            </div>

            <div className="flex flex-wrap items-center justify-center space-x-0 sm:space-x-6 w-full">
              <h1 className="text-3xl sm:text-4xl md:text-7xl text-white">
                <span
                  className={`${outfit.className} font-semibold`}
                >
                  For Your
                </span>{" "}
                <span className={`${outfit.className} font-extralight`}>
                  Business.
                </span>
              </h1>

              <MagneticButton>
                <Link
                  href="/services"
                  className="px-8 mt-5 md:mt-0 sm:px-14 py-3 sm:py-5 bg-orange-400 text-black font-semibold rounded-full flex items-center"
                >
                  <span
                    className={`flex flex-row ${outfit.className} font-normal text-sm items-center`}
                  >
                    WHAT WE DO{" "}
                    <span className="ml-3 sm:ml-5">
                      <FaCircleArrowRight size={20}  />
                    </span>
                  </span>
                </Link>
              </MagneticButton>
            </div>
          </div>
        </InView>

        {/* Services Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12 h-auto md:h-[400px] px-4 sm:px-6">
          {/* Service Card */}
          {[
            {
              title: "Training & Skill Development",
              description:
                "Our training programs enhance skills through hands-on learning for individuals ...",
              link: "one",
            },
            {
              title: "Consultancy Services",
              description:
                "Our consultancy services provide strategic advice to businesses and ...",
              link: "two",
            },
            {
              title: "Placement Assistance",
              description:
                "We connect students and trainees with top companies through comprehensive placement services ...",
              link: "three",
            },
            {
              title: "Digital Marketing",
              description:
                "Innovative solutions to take your creative projects to the next level.",
              link: "four",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="relative border-t-2 border-t-orange-400 md:border-0 bg-white/10 md:bg-black md:hover:border-t-4 md:hover:border-t-orange-400 md:hover:bg-white/10 p-4 sm:p-6 pt-8 sm:pt-11 rounded-lg transition-all duration-300 group"
            >
              <h2
                className={`text-sm sm:text-lg ${outfit.className} text-left font-semibold mb-2`}
              >
                {service.title}
              </h2>
              {/* Description - Display only on hover */}
              <p
                className={`hidden md:inline text-xs sm:text-sm ${outfit.className} text-left text-gray-400 pt-4 sm:pt-8 pb-10 sm:pb-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              >
                {service.description}
              </p>

              {/* Arrow Icon - Display only on hover */}
              <Link
                href={`/services`}
                className="absolute bottom-6 md:bottom-24 right-4 md:left-10 text-orange-400 text-xl opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
              >
                <FaCircleArrowRight size={24}  />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
