"use client";
import { useEffect, useState } from "react";
import { Tiles } from "@/components/ui/animated-grid-box";
import { SpinningTextCustomVariants } from "@/components/motionui/spining-text-custom";
import { OurMission } from "../component/AboutUs/OurMission";
import { Outfit } from "next/font/google";
import { OurVision } from "../component/AboutUs/OurVision";
import WhyChooseUs from "../component/AboutUs/WhyChooseUs";
import ContactUs from "../component/Services/ContactUs";

// imports for sticky scroll
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-reveal";
import Image from "next/image";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];

export default function Page() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
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

      <div className="relative">
        <AnimatedGridBackgroundSection>
          {/* Section with higher z-index */}
          <section className="flex flex-col mt-44 w-[55vw] items-start pl-4 sm:pl-6 md:pl-8 lg:pl-20 relative">
            <p className={`${outfit.className} text-8xl text-white font-bold`}>
              What{" "}
              <span className={`${outfit.className} font-extralight`}>we offer</span>
            </p>
            <div className="w-40 mt-3 border-4 border-orange-500"></div>
            <div className="max-w-[540px] mt-9 ml-2">
              <p className={`hidden ${outfit.className} md:inline text-2xl text-gray-200 font-light`}>
                Transforming Challenges into Opportunities
                <br /> Through Our Expertise
              </p>
            </div>
          </section>
        </AnimatedGridBackgroundSection>

        <div className="absolute bottom-36 right-80 z-[30]">
          <SpinningTextCustomVariants />
        </div>
      </div>

      {/* Sticky scroll start here */}
      <div className="p-10">
        <StickyScroll content={content} />
      </div>
      {/* Sticky scroll end here */}

      <ContactUs />
    </>
  );
}

const AnimatedGridBackgroundSection: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div
      className={
        "w-full h-[650px] bg-gradient-to-b from-neutral-950 to-neutral-900 relative overflow-hidden flex"
      }
    >
      {/* Children with lower z-index */}
      <div className={"w-fit h-fit relative z-[30]"}>{children}</div>

      {/* Tiles with higher z-index */}
      <div className={"absolute top-0 left-0 h-full w-full "}>
        <Tiles rows={60} cols={60} />
      </div>
    </div>
  );
};
