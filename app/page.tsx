
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from "next/link";


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
  
<div className='flex flex-col relative w-screen h-[60vh] items-start pl-4 sm:pl-6 md:pl-8 lg:pl-10'>

    <p className={'text-7xl text-white font-bold'}>Transforming <span className='font-light'>Education</span>,<br/> Transforming <span className='font-light'>Futures</span></p>
    <div className='max-w-[540px] mt-9 ml-2'>
    <p className='hidden md:inline text-lg text-gray-200 font-light'>Our platform bridges the gap between traditional education and modern demands, making learning more accessible, engaging, and personalized</p>
    </div>
    <div className='mt-12 ml-2'>

    <SlideArrowButton/>
    </div>
</div>

  </AnimatedGridBackgroundSection>
</BackgroundBeamsWithCollision>

<div className='mt-20 mb-96 max-w-6xl mx-auto flex flex-row justify-between '>
  <div className='flex flex-col px-5  max-w-lg'>
    <h1 className='font-semibold text-7xl'>Discover<br/> Our <span className='font-extralight '>Studio</span></h1>
    <p className='text-base text-gray-400 mt-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus non earum officiis odio cumque in, tempora doloremque praesentium natus possimus ratione ipsam eligendi harum, laudantium itaque iure dolorum debitis. Temporibus quas dolores esse ad quasi eos eveniet similique? Et dignissimos at nemo non! Ab ipsam consequuntur ipsa nam, fugiat nulla!</p>
    <p className='text-base text-gray-400 mt-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus non earum officiis odio cumque in, tempora doloremque praesentium natus possimus ratione ipsam eligendi harum, laudantium itaque iure dolorum debitis. Temporibus quas dolores esse ad quasi eos eveniet similique? Et dignissimos at nemo non! Ab ipsam consequuntur ipsa nam, fugiat nulla!</p>
  </div>
  <div className='flex items-center justify-center px-36'>
  <img src="/over1.jpg" alt='ok' className='w-full h-full ml-16 ' />
     

    

  </div>
  
</div>



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



