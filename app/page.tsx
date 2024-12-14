'use client'
import { Outfit } from 'next/font/google'
import React, { useEffect, useState } from "react";
import { gsap, CSSPlugin, Expo } from "gsap";
gsap.registerPlugin(CSSPlugin);
import { Tiles } from '@/components/ui/animated-grid-box';
import { BackgroundBeamsWithCollision } from '@/components/ui/backround-beams';
import SlideArrowButton from './component/CreateButton';
import { Overview } from './component/Home/Overview';
import { Testinomial } from './component/Home/Testinomial';
import { InView } from '@/components/motionui/inView';
import CompanyServices from './component/Home/CompanyServices';
import Preloader from './component/Preloader';
import Navbar from './component/Navbar/Navbar';

import { AnimatePresence } from 'framer-motion';
import NavBar from './component/Navbar/Navbar';
import { CircleArrowRight, MenuIcon } from 'lucide-react';
import { HeroParallax } from '@/components/ui/hero-parralax';
import { SideMenuBtn } from '@/components/ui/side-menu';
import { Footer } from './component/Home/Footer';
import CatEffect from './component/Home/CatEffect';
import { ScrollEffect } from './component/Home/ScrollEffect';


const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loader, setLoader] = useState(true)
  const [isActive, setIsActive] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Check if loader was shown before in the current session
    const hasLoaded = sessionStorage.getItem('hasLoaded');
  
    if (!hasLoaded) {
      setLoader(true);
      setTimeout(() => {
        setLoader(false);
        sessionStorage.setItem('hasLoaded', 'true');
      }, 9000); // Duration for the loader
    } else {
      setLoader(false);
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Current scroll position
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
      const scrollPercentage = (scrollTop / windowHeight) * 100; // Calculate scroll percentage
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className='w-full h-full'>


      <div className="fixed top-0 right-0 h-full w-1.5  bg-neutral-900 z-50">
        <div
          className="bg-orange-500 rounded-b-2xl w-full"
          style={{ height: `${scrollProgress}%` }}
        ></div>
      </div>

 

      {
        loader ? (<Preloader />) :

        (
          <section className="w-full h-full " >
             <AnimatePresence mode="wait">
             {isActive && <NavBar />}
            </AnimatePresence>
            <div className='flex  flex-col relative bg-white '>
              <div className='bg-black w-screen h-screen'>

              </div>

              <div className='text-black z-[50] fixed  top-3 right-14 cursor-pointer' onClick={() => {setIsActive(!isActive)}}>
                <SideMenuBtn />

            </div>

            </div>
            <ScrollEffect/>
            
            
           
            <button
      onClick={scrollToTop}
      className={`fixed -rotate-90 bottom-20 right-6  text-black px-4 py-2 rounded-full  hover:bg-gray-300 transition-all duration-300 transform ${showButton ? 'opacity-100' : 'opacity-0'} ${showButton ? 'pointer-events-auto' : 'pointer-events-none'}`}
    >
      <div className='flex flex-row'>

       Back to Top <span className='px-2 pb-1'><CircleArrowRight className='fill-gray-200 text-black' size={24}/></span> 
      </div>
    </button>
          </section>
        )

      }
    </div>
  );
}

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/9.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
  "/7.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
"/1.png",
  },
 
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "/2.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
    "/4.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "/3.png",
  },
 
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "/5.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "/6.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "/8.png",
  },
  
 

];













