
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from "next/link";
import { Outfit } from 'next/font/google'


import NavTabs from "@/components/animata/container/nav-tabs";
import { SpinningTextCustomVariants } from "@/components/motionui/spining-text-custom";
import { SpinningText } from "@/components/motionui/spinning-text";
import { HeroParallaxDemo } from "./component/Home/HeroParallaxDemo";
import { MacbookScrollDemo } from "./component/Home/MacBookScrollDemo";
import { Tiles } from '@/components/ui/animated-grid-box';
import { BackgroundBeamsWithCollision } from '@/components/ui/backround-beams';
import { useEffect } from "react";
import Image from 'next/image';
import SlideArrowButton from './component/CreateButton';
import { Overview } from './component/Home/Overview';
import { Testinomial } from './component/Home/Testinomial';
import { InView } from '@/components/motionui/inView';
import CompanyServices from './component/Home/CompanyServices';
import { AboutUs } from './component/Home/AboutUs';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})
export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

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
<div className="fixed top-0 right-0 h-full w-1.5  bg-neutral-900 z-30">
      <div
        className="bg-orange-500 rounded-b-2xl w-full"
        style={{ height: `${scrollProgress}%` }}
      ></div>
    </div>
    <section className="" 
>


<BackgroundBeamsWithCollision>
<AnimatedGridBackgroundSection>
  
<div className='flex flex-col relative w-screen h-[60vh] items-start pl-4 sm:pl-6 md:pl-8 lg:pl-20'>
   <InView 
   variants={{
    hidden: { opacity: 0.9, y: -50, filter: 'blur(0px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  }}
  viewOptions={{ margin: '0px 0px -200px 0px' }}
  transition={{ duration: 0.5, ease: 'easeInOut' }}
   >
    <p className={`${outfit.className} text-7xl text-white font-bold`}>Transforming <span className='font-light'>Education</span>,<br/> Transforming <span className='font-light'>Futures</span></p>
    <div className='max-w-[540px] mt-9 ml-2'>
    <p className={`hidden ${outfit.className}  md:inline text-lg text-gray-200 font-light`}>Our platform bridges the gap between traditional education and modern demands, making learning more accessible, engaging, and personalized</p>
    </div>
    </InView>
    <InView 
   variants={{
     hidden: { opacity: 1, x: 0, filter: 'blur(2px)' },
     visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
    }}
  viewOptions={{ margin: '0px 0px 100px 0px' }}
  transition={{ duration: 1, ease: 'easeInOut' }}
   >
    <div className='mt-10 ml-2'>
    <SlideArrowButton/>
    </div>
    </InView>
</div>

  </AnimatedGridBackgroundSection>
</BackgroundBeamsWithCollision>

   <Overview/>
   <CompanyServices/>
   <Testinomial/>
   <AboutUs/>



    </section>
    </>
  );
}










const AnimatedGridBackgroundSection: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className={
        'w-full h-full min-h-screen relative overflow-hidden flex items-center justify-center'
      }
    >
      <div className={'w-fit h-fit relative z-[2]'}>{children}</div>
      <div className={'absolute top-0 left-0 h-full w-full'}>
        <Tiles rows={60} cols={60} />
      </div>
    </div>
  )
}

//just move open/close state to parent component



