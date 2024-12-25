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
gsap.registerPlugin(ScrollTrigger)

export const HeroSection = () => {

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
    <div className='absolute bg-transparent top-5 left-12 z-[4]'>
        <img src='/log2.png' className='object-cover h-16 w-24'></img>
    </div>
    <div className='absolute top-9 inset-x-0 w-screen h-4 flex flex-row items-center justify-center text-center z-[4]  bg-transparent  gap-x-14'>
    <TextBorderAnimation text="Service" className="text-sm text-white" />
      <TextBorderAnimation text="Portfolio" className="text-sm text-white" />
      <TextBorderAnimation text="About us" className="text-sm text-white" />
      <TextBorderAnimation text="Our Team" className="text-sm text-white" />

    </div>
    <div className='absolute flex top-7 right-7 z-[4] '>
        <button className='bg-transparent text-white border border-white px-6  rounded-xl text-sm'>Contact</button>

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
