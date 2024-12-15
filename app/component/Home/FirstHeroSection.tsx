import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const FirstHeroSection = () => {
  return (
    <section className="relative w-full bg-gray-50 text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Top Section */}
        <div className="flex items-center justify-between pt-10">
          <div className="flex items-center space-x-2">
            {/* Dummy Logo */}
            <Image
              src="/dummy-user.jpg"
              alt="User Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="text-sm font-semibold">
              23K Clients{' '}
              <span className="text-gray-500">Trust Our Consultancy</span>
            </p>
          </div>
          
        </div>

        {/* Main Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 items-center">
          <div>
            <h1 className="text-8xl font-bold leading-tight">
              <span className="block">Grow Your</span>
              <span className="text-gray-300">Business</span>
            </h1>
            <p className="text-gray-500 mt-4 text-lg">
              Expert Consultancy Solutions for Your Business Growth and Success.
              Tailored strategies and proven results.
            </p>
            <div className="mt-6">
              <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full inline-flex items-center">
                Free Consultation <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Image and Icons */}
            <Image
              src="/1.png"
              alt="Consultancy"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -top-2 -left-2 bg-white p-2 rounded-full shadow-md">
              💼
            </div>
            <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-md">
              ⏳
            </div>
          </div>
        </div>

        {/* Final Text */}
        <div className="text-center mt-16">
          <h2 className="text-5xl font-bold">
            <span>Results</span>{' '}
            <span className="text-gray-300">Await You</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default FirstHeroSection;
