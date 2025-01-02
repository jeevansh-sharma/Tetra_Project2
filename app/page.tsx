'use client'
import React, { useEffect, useState } from "react";
import { gsap, CSSPlugin } from "gsap";
gsap.registerPlugin(CSSPlugin);




import CompanyServices from './component/Home/CompanyServices';
import Preloader from './component/Preloader';


import { AnimatePresence } from 'framer-motion';
import NavBar from './component/Navbar/Navbar';


import { SideMenuBtn } from '@/components/ui/side-menu';
import { Footer } from './component/Home/Footer';

import { ScrollEffect } from './component/Home/ScrollEffect';


import Testimonials from './component/Home/NewTestinomials';

import OurVision from './component/Home/Effect';
import { SmoothScrollWrapper } from './component/Wrapper';
import { HeroSection } from './component/NewHome/HeroSection';
import ContactUs from './component/AboutUs/ContactUs';
import { NewOverview } from './component/Home/NewOverview';
import Videosection from './component/Home/VideoSection';


 





export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loader, setLoader] = useState(true)
  const [isActive, setIsActive] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        console.log(showButton);
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
    <div className='w-full h-full bg-black'>


      <div className="fixed top-0 right-0 h-full w-1.5  bg-neutral-900 z-50">
        <div
          className="bg-orange-500 rounded-b-2xl w-full"
          style={{ height: `${scrollProgress}%` }}
        ></div>
      </div>

      <div className={`text-black ${scrollProgress<10 ? `z-[0]`: `z-[50]` } fixed  top-3 right-14 cursor-pointer`} onClick={() => {setIsActive(!isActive)}}>
                <SideMenuBtn />
      </div>

      
      {
        loader ? (<Preloader />) :

        (
       
          <><AnimatePresence mode="wait">
              {isActive && <NavBar />}
            </AnimatePresence><SmoothScrollWrapper>

                <HeroSection />

                <ScrollEffect />
                
                <NewOverview/>
                <CompanyServices />
                <OurVision />
                {/* <Process /> */}
                <Testimonials />
                <Videosection/>
                <ContactUs/>
                <Footer />
              </SmoothScrollWrapper></>
            
        )
      }
     
      
    </div>
  );
}

