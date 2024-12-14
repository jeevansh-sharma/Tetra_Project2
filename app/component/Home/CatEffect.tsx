'use client';
import React, { useLayoutEffect, useRef } from 'react'
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function CatEffect() {

    const background = useRef(null);
    const introImage = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: true,
                start: "top",
                end: "+=500px",
            },
        })

        timeline
            .from(background.current, { clipPath: `inset(15%)` })
            .to(introImage.current, { height: "200px" }, 0)
    }, [])

    return (
        <div className="relative w-full flex justify-center">
            <div className="w-full h-[140vh] absolute filter brightness-[60%]" ref={background}>
                <Image
                    src={'/gaut.jpeg'}
                    fill={true}
                    alt="background image"
                    priority={true}
                />
            </div>
            <div className="flex justify-center relative mt-[35vh]">
                <div ref={introImage} data-scroll data-scroll-speed="0.3" className="filter brightness-[70%] w-[350px] h-[475px] absolute">
                    <Image
                        src={'/devansh.enc'}
                        alt="intro image"
                        fill={true}
                        priority={true}
                    />
                </div>
                <h1 data-scroll data-scroll-speed="0.7" className="text-white text-[7vw] z-10 text-center whitespace-nowrap">SMOOTH CATS</h1>
            </div>
        </div>
    )
}
