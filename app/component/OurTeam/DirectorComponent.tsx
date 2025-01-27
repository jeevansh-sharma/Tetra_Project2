"use client";

export default function DirectorComponent() {
  return (
    <section className="flex flex-col mt-20 mb-4 lg:mt-0 lg:mb-9 xl:mb-15 max-w-5xl mx-auto md:flex-row items-center justify-between p-8 gap-y-8 gap-x-16">
      {/* Text Section */}
      <div className="flex-1">
        <h1 className="text-3xl lg:text-5xl font-bold">
          <span className="text-black">CEO</span> <span className="text-black font-normal">Message</span>
          <img src="/comma5.png" alt="Tetra Logo" className="w-8 h-5 md:w-10 md:h-10 ml-2 mb-5  inline-block object-cover" />
        </h1>
        <hr className="w-1/5 border-b-2 border-black my-1 lg:my-2" />
        <p className="text-gray-800 text-justify md:text-left md:text-sm lg:text-base  leading-relaxed mt-4">
          “As the CEO of Tetra EdTech Limited, I am dedicated to leading an organization that embraces innovation and
          technology to drive transformation in education and business. With a focus on AI and its integration across
          various sectors, my goal is to equip our clients with cutting-edge tools and skills to stay ahead in a rapidly
          evolving world.
        </p>
        <p className="text-gray-800 text-justify md:text-left md:text-sm lg:text-base leading-relaxed mt-4">
          At Tetra EdTech, we specialize in providing AI-powered training programs and consultancy services that help
          businesses leverage technology to optimize operations, enhance decision-making, and unlock new
          opportunities. Our team works closely with each client to deliver tailored solutions that drive tangible
          results, ensuring they stay competitive in today’s tech-driven landscape.
        </p>
        <p className="text-gray-800 text-justify md:text-left md:text-sm lg:text-base leading-relaxed mt-4">
          Our vision is to empower businesses and individuals with the knowledge and tools necessary to succeed,
          bridging the gap between education, innovation, and career growth.”
        </p>
        <p className="text-gray-900 font-semibold mt-6">~ Drishti Gupta, CEO</p>
      </div>

      {/* Image Section */}
      <div className="flex flex-col items-center gap-0 md:gap-4">
        <div className=" w-[340px] h-[390px] md:w-[300px] md:h-[350px] lg:w-[440px] lg:h-[500px] ">
          <img
            src="/CEO.png" // Replace with your image URL
            alt="Director Image Placeholder"
            className="w-full h-full object-cover"
          />
        </div>
      
      </div>
    </section>
  );
}
