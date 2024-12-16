"use client";
import { useEffect, useState } from "react";
import { Tiles } from "@/components/ui/animated-grid-box";
import { Outfit } from "next/font/google";
import { SpinningTextCustomVariants } from "@/components/motionui/spining-text-custom";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export default function FirstHeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // useEffect of scroll bar function
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Current scroll position
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
      const scrollPercentage = (scrollTop / windowHeight) * 100; // Calculate scroll percentage
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Scrollbar */}
      <div className="fixed top-0 right-0 h-full w-1.5 bg-neutral-900 z-50">
        <div
          className="bg-orange-500 rounded-b-2xl w-full"
          style={{ height: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Hero Section with Video Background */}
      <div className="relative min-h-screen">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/fullbg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Section with higher z-index */}
        <section className="flex flex-col mt-44 w-[55vw] items-start pt-10 pl-4 sm:pl-6 md:pl-8 lg:pl-20 relative z-20">
          <p className={`${outfit.className} text-8xl text-white font-bold`}>
            Branding
            <br /> Your <br /> Brand{" "}
          </p>
          <div className="w-40 mt-3 border-4 border-orange-500"></div>
          <div className="flex items-center space-x-4 mt-9 ml-2">
            <a
              href="#"
              className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-full flex items-center space-x-2 hover:bg-orange-600 transition-colors"
            >
              <span>Explore Us!</span>
              <span className="bg-white text-orange-500 rounded-full w-6 h-6 flex items-center justify-center">
                ➔
              </span>
            </a>
            <a
              href="#"
              className="text-white text-lg font-light hover:underline"
            >
              View Work &gt;
            </a>
          </div>
        </section>

        {/* Orange-outlined box for video */}
        <div className="absolute top-20 right-20 z-10">
          <video
            autoPlay
            muted
            loop
            className="w-[500px] h-[250px] object-cover rounded-lg shadow-lg"
          >
            <source src="/gif.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="absolute bottom-26 right-80 z-[30]">
          <SpinningTextCustomVariants />
        </div>
      </div>
    </>
  );
}

const AnimatedGridBackgroundSection: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return (
    <div
      className={
        "w-full h-[650px] bg-gradient-to-b from-neutral-950 to-neutral-900 relative overflow-hidden flex"
      }
    >
      {/* Children with lower z-index */}
      <div className={"w-fit h-fit relative z-[30]"}>{children}</div>

      {/* Tiles with higher z-index */}
      <div className={"absolute top-0 left-0 h-full w-full"}>
        <Tiles rows={60} cols={60} />
      </div>
    </div>
  );
};
