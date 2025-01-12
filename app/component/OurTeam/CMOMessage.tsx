"use client";

export default function CMOComponent() {
  return (
    <section className="bg-black">
    <div className="flex flex-col max-w-5xl overflow-hidden  mx-auto md:flex-row-reverse items-center justify-between px-8 py-20 gap-y-8 gap-x-16">
      {/* Text Section */}
      <div className="flex-1">
        <h1 className="text-3xl lg:text-5xl font-bold">
          <span className="text-white">CMO</span> <span className="text-white font-normal">Message</span>
          <img src="/comma5.png" alt="Tetra Logo" className="w-8 h-5 md:w-10 md:h-10 ml-2 mb-5  inline-block object-cover" />
        </h1>
        <hr className="w-1/5 border-b-2 border-black my-2" />
        <p className="text-white md:text-sm text-justify md:text-left lg:text-base    leading-relaxed mt-4">
          “As the Chief Marketing Officer of Tetra EdTech Limited, I bring fresh marketing ideas and trends, gained through my international experience abroad, to create impactful strategies for our clients. I focus on staying at the forefront of global marketing trends, ensuring that our services are not only innovative but also aligned with the latest market demands and consumer behaviors.
        </p>
        <p className="text-white md:text-sm text-justify md:text-left lg:text-base leading-relaxed mt-4">
        At Tetra EdTech, we don’t just deliver traditional marketing solutions; we offer AI-driven marketing strategies, helping our clients streamline processes, enhance brand visibility, and achieve faster, more efficient results. My expertise lies in blending creative marketing approaches with advanced technologies to develop solutions that drive real-world impact and growth.
        </p>
        <p className="text-white md:text-sm text-justify md:text-left lg:text-base leading-relaxed mt-4">
        With a passionate commitment to digital innovation, I’m excited to continue offering marketing strategies that enable businesses to thrive in a fast-paced digital world. Through our AI-powered tools and data-driven marketing, we help our clients accelerate their growth and maximize their potential”
        </p>
        <p className="text-white font-semibold  mt-6">~ Divyam Gupta, CEO</p>
      </div>

      {/* Image Section */}
      <div className="flex flex-col items-center  gap-4">
        <div className="w-[340px] h-[390px] ml-10 md:ml-0 md:w-[300px] md:h-[350px] lg:w-[440px] lg:h-[500px] ">
          <img
            src="/CMO.png"
            alt="Director Image Placeholder"
            className="w-full  h-full object-cover"
          />
        </div>
      
      </div>
    </div>
    </section>
  );
}
