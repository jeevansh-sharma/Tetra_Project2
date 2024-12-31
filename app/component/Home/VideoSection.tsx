import React from 'react';

const Videosection = () => {
  return (
    <div className="bg-black py-16 my-12 px-8">
      {/* Heading Section */}
      <div className="text-center mb-16">
        <h2 className="text-7xl font-bold text-white">Discover Our Vision in Action</h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 mb-7"></div>
      </div>

      {/* Video Section */}
      <div className="flex justify-center">
        <div className="w-full max-w-4xl h-[500px] mb-4">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/TIwBwyMgS50"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Videosection;