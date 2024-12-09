import React from "react";

const DigitalMarketing = () => {
  return (
    <div className="relative h-screen overflow-y-auto">
      {/* Parallax Background */}
      <div className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-[-1] bg-[url('/D.jpg')]"></div>

      {/* Content Section */}
      <div className="z-10 text-white">
        {/* Centered Header */}
        <div className="h-screen flex items-center justify-center bg-black bg-opacity-70">
          <h1 className="text-7xl font-semibold text-center">
            Digital <span className="font-extralight">Marketing</span>
          </h1>
        </div>

        {/* Body Content */}
        <div className="p-10 bg-white text-black">
          <p className="mb-8">
            In today’s competitive market, digital marketing is crucial for business growth. Our digital marketing services focus on building strong, targeted campaigns that increase online visibility and engagement, generate leads, and enhance conversions.
          </p>

          <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <h3 className="text-2xl font-semibold">Search Engine Optimization (SEO)</h3>
              <p>Optimize your website to rank higher on search engines, making it easier for potential clients to find you.</p>
            </li>
            <li>
              <h3 className="text-2xl font-semibold">Social Media Marketing (SMM)</h3>
              <p>Create and manage social media campaigns to boost brand visibility, engagement, and lead generation.</p>
            </li>
            <li>
              <h3 className="text-2xl font-semibold">Pay-Per-Click (PPC) Campaigns</h3>
              <p>Leverage paid advertising platforms like Google Ads and Facebook Ads to bring in immediate traffic and leads.</p>
            </li>
            <li>
              <h3 className="text-2xl font-semibold">Content Marketing</h3>
              <p>Develop a content strategy that includes blogs, videos, and graphics to engage with your audience.</p>
            </li>
            <li>
              <h3 className="text-2xl font-semibold">Email Marketing</h3>
              <p>Craft compelling email campaigns that nurture leads and keep your audience engaged with your offerings.</p>
            </li>
            <li>
              <h3 className="text-2xl font-semibold">AI in Digital Marketing</h3>
              <p>Learn how to integrate AI tools to optimize your marketing strategies. Automate content creation, personalize user experiences, and analyze customer behavior to drive better results in less time.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;
