import React from 'react';

const PortfolioImages = () => {
  const images = [
    "/1.png",
    "/devansh.enc",
    "/gaut.jpeg",
    "/lan1.png",
    "/lan2.png",
    "/CompanyServices.jpg",
    "/logologo.png",
    "/1.png",
    "/arpit.jpg",
    "/1.png",
    "/devansh.enc",
    "/gaut.jpeg",
    "/lan1.png",
    "/lan2.png",
    "/CompanyServices.jpg",
    "/logologo.png",
    "/gaut.jpeg",
    "/arpit.jpg",
    "/1.png",
    "/devansh.enc",
    "/gaut.jpeg",
    "/lan1.png",
    "/lan2.png",
    "/CompanyServices.jpg",
    "/arpit.jpg",
    "/logologo.png", 
    "/lan1.png",
    "/devansh.enc",
    "/lan2.png",
    "/CompanyServices.jpg",
    "/arpit.jpg",
    "/logologo.png",
  ];

  return (
    <section className='columns-3  max-w-5xl mx-auto space-y-1'>
      {images.map((image, index) => (
        <div key={index} className=' rounded-md overflow-hidden'>
          <img
            src={image}
            alt={`Portfolio image ${index + 1}`}
            height={500}
            width={800}
          />
        </div>
      ))}
    </section>
  );
};

export default PortfolioImages;