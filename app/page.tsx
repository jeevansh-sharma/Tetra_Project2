
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

export default function Home() {
  return (

    <section className="bg-black">
<BackgroundBeamsWithCollision>
<AnimatedGridBackgroundSection>
    <div className={'text-3xl text-white font-bold'}>This is a cool background effect</div>
  </AnimatedGridBackgroundSection>
  </BackgroundBeamsWithCollision>



    </section>
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



