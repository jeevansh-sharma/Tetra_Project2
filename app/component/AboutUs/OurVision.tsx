import { InView } from "@/components/motionui/inView";
import { Outfit } from "next/font/google";
import Image from "next/image";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export function OurVision() {
  return (
    <div className="mt-28 md:mt-20 mb-20 max-w-6xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center lg:items-start">
      {/* Left Section (Image) */}
      <div className="relative flex items-center max-w-sm md:ml-6  px-3  pt-7 md:pt-0   md:px-3 lg:px-0   lg:ml-10 justify-center md:max-w-md w-full md:mx-auto lg:w-[40%]">
        <Image
          src="/ourVision.jpg"
          unoptimized
          alt="Our Vision"
          className="rounded-lg shadow-lg lg:w-full lg:h-full md:mr-10 lg:mr-0"
          width={16}
          height={16}
          layout="responsive"
        />
      </div>

      {/* Right Section (Text) */}
      <div className="flex flex-col items-center md:items-start w-full lg:w-[50%] px-5 md:px-8 lg:px-14 mt-12 md:mt-0">
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h1
            className={`${outfit.className} font-semibold text-center md:text-left text-5xl md:text-6xl`}
          >
            Our <span className="font-extralight">Vision</span>
          </h1>
          <p
            className={`${outfit.className} text-sm px-0 md:px-0 md:text-base text-gray-400 mt-5 lg:mt-16 text-justify xl:text-left `}
          >
            At Tetra Edtech, our vision is to transform the educational
            landscape by empowering institutions with innovative and
            forward-thinking solutions. We aim to enhance the quality of
            education and drive institutional excellence through our
            comprehensive services, including digital marketing, event
            management, and accreditation support.
          </p>
          <p
            className={`${outfit.className} text-sm px-0 md:px-0 md:text-base text-gray-400 mt-8 lg:mt-12 text-justify xl:text-left `}
          >
            By equipping institutions with the tools they need to adapt to an
            ever-evolving environment, we enable them to thrive and achieve
            sustainable success. Our dedication to excellence extends to
            nurturing educators through teacher training and Faculty Development
            Programs (FDP), creating a culture of continuous learning and
            development. We envision a future where every institution unlocks
            its potential and fosters impactful learning experiences.<span className="hidden md:inline"> At Tetra
            Edtech, we strive to be a catalyst for educational transformation,
            empowering institutions to embrace innovation and excellence.</span>
          </p>
        </InView>
      </div>
    </div>
  );
}
