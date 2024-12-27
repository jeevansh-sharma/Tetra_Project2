'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Bebas_Neue } from 'next/font/google'
import TextBorderAnimation from '@/components/animata/text/text-border-animation'

const bebas = Bebas_Neue({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
})
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { NavbarTop } from '../NavbarTop'
import TransitionLink from '../Transition'
gsap.registerPlugin(ScrollTrigger)

export const HeroSection = () => {
    const label= (<div className='bg-transparent text-white border-2 hover:text-black hover:bg-white hover:border-black  border-white px-6  rounded-xl text-sm'>
        Contact Us
  </div>)
    const textRef = useRef(null)
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
        y: -300
       }, 'a')
       .to(leafRef.current, {
        scale: 1.2
       }, 'a')
       .to(girlImagRef.current, {
        scale: 1.3
       }, 'a')
       .to(containerRef.current, {
        y: 300
       }, 'a')
    })

  return (
    <>
    
    <div ref={containerRef}  className=' min-h-screen bg-[#282828] flex flex-col items-center justify-center relative overflow-hidden'>
    <NavbarTop/>
    <div className='absolute flex top-7 right-7 z-[4] '>
        <TransitionLink href="/contact_us" label={label}/>

    </div>
        <h1 ref={textRef} className={`${bebas.className} text-white text-[10rem] font-extralight tracking-tight absolute top-[7rem] z-[2] `}>
            BRANDING YOUR BRAND
        </h1>
        <div className='w-[380px] h-[400px] bg-[#858480] rounded-t-full absolute bottom-0 z-[1]' />
        <Image ref={leafRef} src={'/lan1.png'} alt='plant' width={1200} height={500} className='w-[1500px] absolute bottom-0 z-0'    />
        <Image ref={girlImagRef} src={'/lan2.png'} width={900} height={900}  alt='tatooed girl' className='absolute w-[1000px]  -bottom-8 z-[3]' />
    </div>
    </>
  )
}
