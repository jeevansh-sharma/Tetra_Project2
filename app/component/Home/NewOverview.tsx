
import { Outfit } from "next/font/google";
import ParallaxSection from "../AboutUs/ParralaxScroll";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export function NewOverview() {
  return (
    <div className="mt-20 mb-24 max-w-5xl mx-auto flex flex-col items-center justify-center">
      {/* Parallax Section */}
      <ParallaxSection backgroundImage="/of1.jpg" height="500px" />

      {/* Content Section */}
      <div className="flex flex-col px-16">
        <h1 className={`${outfit.className} font-semibold text-7xl text-center`}>
          Discover Our <span className="font-extralight">Studio</span>
        </h1>
        <div className="flex flex-row justify-center mt-3">
          <div className="h-[0.35rem] w-1/6 bg-[#F97316]"></div>
        </div>
        <p className={`${outfit.className} text-justify text-lg text-gray-500 mt-12`}>
          At Tetra Edtech, our mission is to empower educational institutions with cutting-edge solutions designed to elevate the quality of education and drive institutional excellence.
        </p>
        <p className={`${outfit.className} text-justify text-lg text-gray-500 mt-12`}>
          We take pride in offering consultancy services tailored to the unique needs of educational institutions.
        </p>
        <p className={`${outfit.className} text-justify text-lg text-gray-500 mt-12`}>
          By leveraging cutting-edge technologies, such as artificial intelligence and data analytics, we empower institutions to make informed decisions that drive impactful results.
        </p>
      </div>
    </div>
  );
}
