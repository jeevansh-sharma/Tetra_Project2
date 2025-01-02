'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Bebas_Neue } from 'next/font/google'


const bebas = Bebas_Neue({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
})
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { NavbarTop } from '../NavbarTop'
import { SpinningTextCustomVariants } from '@/components/motionui/spining-text-custom'
import TransitionLink from '../Transition'
gsap.registerPlugin(ScrollTrigger)

export const HeroSection = ({title , summary}:{title:string, summary:JSX.Element}) => {
    const label= (<div className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mb-5">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFD1A1_0%,#FF6200_50%,#FFD1A1_100%)]

" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Contact us
        </span>
      </div>)
    const textRef = useRef(null)
    const textRef1 = useRef(null)
    const containerRef = useRef(null)
    const leafRef = useRef(null)
    const girlImagRef = useRef(null)


    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: '53% 50%',
                scrub: true
            }
        })

       tl.to(textRef.current, {
        y: -100,
        
       }, 'a')
       .to(textRef1.current, {
        y: -100
       }, 'a')
       .to(leafRef.current, {
        scale: 1.2
       }, 'a')
       .to(girlImagRef.current, {
        scale: 1.3
       }, 'a')
       .to(containerRef.current, {
        y: 100
       }, 'a')
    })

  return (
    <>
    
    <div ref={containerRef}  className=' min-h-screen bg-[#282828] flex flex-col items-center justify-center relative overflow-hidden'>
    <NavbarTop/>
    <div className='absolute flex top-4 right-7 z-[4] '>
          <TransitionLink href="/contact_us" label={label}/>

    </div>
        <h1 ref={textRef} className={`${bebas.className} text-white text-[10rem]  font-extralight  absolute top-[6rem] z-[2] `}>
            {title}
        </h1>
        <div ref={textRef1} className='w-[8rem] absolute top-[18rem]  z-[3]  h-[0.3rem] bg-[#F97316]'></div>
        
        <Image ref={leafRef} src={'/lan1.png'} alt='plant' width={1200} height={500} className='w-[1500px] absolute bottom-0 z-0'    />
        <h1 ref={girlImagRef} className={` text-gray-300 text-[1.1rem] text-center font-normal tracking-tight absolute bottom-[16.9rem] `}>
           {summary}
        </h1>
        <div ref={girlImagRef} className='absolute bottom-[6rem]'>
        <SpinningTextCustomVariants />

        </div>
    </div>
    </>
  )
}
