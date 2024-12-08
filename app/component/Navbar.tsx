'use client'
import Link from 'next/link';
import { useEffect, useState } from "react";


import { Outfit } from 'next/font/google'
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false); // Navbar visibility state
  const [lastScrollPos, setLastScrollPos] = useState(0); // Track last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > 0 ) {
        // User scrolling down, hide navbar
        setIsVisible(true);
      } 

      setLastScrollPos(currentScrollPos);
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPos]);

  return (
    <nav className={`fixed top-0 z-[49] w-screen  bg-neutral-900 text-white shadow-zinc-950 shadow-2xl transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"} `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-10">
          {/* Logo Section */}
          <div className="flex items-center justify-center">
            <img src='/download.png' alt="tetraedtech" className='object-cover rounded-full bg-white '/>
            <Link href="/" className={`${outfit.className} text-2xl ml-3 font-light text-white`}>
              TetraEdTech
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4 mr-28 items-center">
            <Link href="/" className={`${outfit.className} font-  hover:text-indigo-400 transition`}>
              Home
            </Link>
            <Link href="/about_us" className={`${outfit.className} font- hover:text-indigo-400 transition`}>
              About
            </Link>
            <Link href="/" className={`${outfit.className} font- hover:text-indigo-400 transition`}>
              Services
            </Link>
            <Link href="/" className={`${outfit.className} font- hover:text-indigo-400 transition`}>
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-white focus:outline-none"
              aria-label="Toggle navigation"
            >
              {/* Add your menu icon here */}
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Subtle Shadow at the bottom */}
    
    </nav>
  );
}
