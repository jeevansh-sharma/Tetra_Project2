import { InView } from "@/components/motionui/inView";
import { Outfit } from "next/font/google";
import Image from "next/image";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export function OurMission() {
  return (
    <div className=" mt-28 md:mt-24 lg:mt-0 md:mb-12 lg:mb-20 max-w-sm md:max-w-6xl mx-auto flex flex-col md:flex-row justify-between  items-center lg:items-start">
      {/* Left Section */}
      <div className=" flex flex-col  md:px-0 md:mt-4 lg:mt-8 md:mx-10 lg:mx-7 lg:px-8 w-full lg:w-[40%]">
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h1
            className={`${outfit.className} font-semibold text-center mr-5 md:mr-0 md:text-left text-5xl md:text-5xl lg:text-6xl`}
          >
            Our <span className="font-extralight">Mission</span>
          </h1>
          <p
            className={`${outfit.className} text-sm px-5 md:px-0 text-justify md:text-base md:text-justify xl:text-left text-gray-400 mt-5 lg:mt-16`}
          >
            At Tetra Edtech, our mission is to empower educational institutions
            with cutting-edge solutions designed to elevate the quality of
            education and drive institutional excellence. Through comprehensive
            services such as digital marketing, event management, and
            accreditation support, we ensure that institutions are equipped to
            thrive in an ever-evolving educational landscape.
          </p>
          <p
            className={`${outfit.className} text-sm px-5 md:px-0 md:text-base text-justify  md:text-justify xl:text-left text-gray-400 md:mb-4 lg:mb-0 md:mt-8 lg:mt-12`}
          >
            Our commitment to excellence extends to teacher training and Faculty
            Development Programs (FDP), fostering an environment of continuous
            learning and growth. At Tetra Edtech, we believe every institution
            has the potential to achieve greatness, and we work tirelessly to
            make that a reality. <span className="hidden lg:inline">Through comprehensive services such as digital marketing, event management, and accreditation support, we ensure that institutions are equipped to thrive in an ever-evolving educational landscape.</span>
          </p>
        </InView>
      </div>

      {/* Right Section */}
      <div className="flex relative items-center px-3 justify-center h-[300px] md:h-auto mt-40 md:mt-0 lg:mt-8 xl:mt-0 md:px-5 lg:py-5 lg:px-14 w-full lg:w-[50%]">
        <Image
          src="/ourMission.jpg"
          alt="Our Mission"
          className="rounded-lg shadow-lg lg:w-full lg:h-full md:mt-8 lg:mt-0 md:mr-10 lg:mr-0"
          width={16}
          height={16}
          layout="responsive"
          unoptimized
        />
      </div>
    </div>
  );
}
