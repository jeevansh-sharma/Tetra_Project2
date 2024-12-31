
import { Outfit } from "next/font/google";
import ParallaxSection from "../AboutUs/ParralaxScroll";
import DigitalMarketing from "../Services/Digital Marketing";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export function NewOverview() {
  return (
    <div className="  flex flex-col items-center justify-center">
      {/* Parallax Section */}
     <DigitalMarketing/>

      {/* Content Section */}
      <div className="flex flex-col  max-w-4xl mx-auto mb-20">
        
      
      <p className={`${outfit.className} text-justify text-lg text-gray-300 mt-16`}>
  At Tetra EdTech Limited, we are a cutting-edge EdTech and Consulting company committed to empowering individuals and organizations with the tools and knowledge needed to thrive in a rapidly evolving world. Our expertise spans multiple domains, including digital marketing, web development, event management, training, and consultancy. With a strong focus on innovation and adaptability, we cater to the dynamic needs of both individuals and enterprises, ensuring they are well-prepared to face the challenges and opportunities of the digital age.
</p>
<p className={`${outfit.className} text-justify text-lg text-gray-300 mt-5`}>
  Our diverse team of experts combines years of practical expertise with a passion for innovation, leveraging state-of-the-art technologies such as AI and machine learning to deliver impactful solutions. We take pride in empowering businesses to establish and enhance their online presence, enabling them to reach wider audiences effectively. Beyond just digital services, we specialize in creating transformative experiences through impactful events and seminars designed to inspire, educate, and engage participants across all sectors.
</p>
<p className={`${outfit.className} text-justify text-lg text-gray-300 mt-5`}>
  With a strong belief in the power of continuous learning and technology, Tetra EdTech bridges the gap between education and employment by offering tailored solutions that address the specific challenges faced by individuals and organizations. From equipping students with industry-relevant skills to guiding businesses through their digital transformation journeys, we are passionate about delivering sustainable success. Our vision is to redefine the future by fostering an environment of growth, collaboration, and technological excellence for all our clients.
</p>

      </div>
    </div>
  );
}
