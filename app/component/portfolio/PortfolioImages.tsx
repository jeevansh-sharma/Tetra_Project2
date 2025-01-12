import { Outfit } from 'next/font/google';
import React from 'react';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
});

const PortfolioImages = () => {
  const images = [
    "/p (1).jpg",
    "/p (2).jpg",
    "/p (3).jpg",
    "/p (4).jpg",
    "/p (5).jpg",
    "/p (6).jpg",
    "/p (7).jpg",
    "/p (8).jpg",
    "/p (9).jpg",
    "/p (10).jpg",
    "/p (11).jpg",
    "/p (12).jpg",
    "/p (13).jpg",
    "/p (14).jpg",
    "/p (15).jpg",
    "/p (16).jpg",
    "/p (17).jpg",
    "/p (18).jpg",
    "/p (19).jpg",
    "/p (20).jpg",
    "/p (21).jpg",
    "/p (22).jpg",
    "/p (23).jpg",
    "/p (24).jpg",
    "/p (25).jpg",
    "/p (26).jpg",
    "/p (27).jpg",


  ];

  return (
    <section className='flex flex-col max-w-[370px] md:max-w-[740px] lg:max-w-4xl xl:max-w-5xl mx-auto '>
      <div className='w-full flex flex-col justify-center items-center mt-20 md:mt-14'>
      <h1 className={`${outfit.className} mt-10 lg:mt-0 text-3xl md:text-6xl lg:text-7xl font-semibold text-center`}>A Glimpse <span className={`${outfit.className} font-light`}>to Our World</span> </h1>
      <div  className='w-[7rem]   h-[0.3rem] bg-[#F97316] mt-2 mb-4 md:mb-0 md:mt-4'></div>
      </div>
      <div className='columns-3 space-y-1 '>
      {images.map((image, index) => (
        <div key={index} className=' rounded-md overflow-hidden py-[6px] md:py-[7.5px]'>
          <img
            src={image}
            alt={`Portfolio image ${index + 1}`}
            className='hover:scale-125 hover:rounded-2xl transform transition-transform duration-300 rounded-2xl'
            height={500}
            width={800}
          />
        </div>
      ))}
      </div>
      
    </section>
  );
};

export default PortfolioImages;