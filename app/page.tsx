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
import Navbar from './component/Navbar';
import { Footer } from './component/Home/Footer';
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})
export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 9000)
  }, [])

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
    <>


      <div className="fixed top-0 right-0 h-full w-1.5  bg-neutral-900 z-50">
        <div
          className="bg-orange-500 rounded-b-2xl w-full"
          style={{ height: `${scrollProgress}%` }}
        ></div>
      </div>



      {
        loader ? (<Preloader />) :

        (
          <section className="" >
             <Navbar />
            <div className='flex flex-col bg-neutral-950  w-screen h-screen items-start justify-center pl-4 sm:pl-6 md:pl-8 lg:pl-20'>
              <InView
                variants={{
                  hidden: { opacity: 0, y: -50, filter: 'blur(0px)' },
                  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
                }}
                viewOptions={{ margin: '0px 0px -200px 0px' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <p className={`${outfit.className} text-7xl text-white font-bold`}>Transforming <span className='font-light'>Education</span>,<br /> Transforming <span className='font-light'>Futures</span></p>
                <div className='max-w-[540px] mt-9 ml-2'>
                  <p className={`hidden ${outfit.className}  md:inline text-lg text-gray-200 font-light`}>Our platform bridges the gap between traditional education and modern demands, making learning more accessible, engaging, and personalized</p>
                </div>
              </InView>
              <InView
                variants={{
                  hidden: { opacity: 0, x: 0, filter: 'blur(2px)' },
                  visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
                }}
                viewOptions={{ margin: '0px 0px 100px 0px' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              >
                <div className='mt-10 ml-2'>
                  <SlideArrowButton />
                </div>
              </InView>

            </div>
            <Overview />
            <CompanyServices />
            <Testinomial />
            <Footer />
          </section>
        )

      }
    </>
  );
}













