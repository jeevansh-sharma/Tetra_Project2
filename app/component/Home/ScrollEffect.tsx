"use client";
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ReactLenis } from '@studio-freight/react-lenis'


import { Marquee } from '@/animation';


gsap.registerPlugin(ScrollTrigger);

export function ScrollEffect() {

    useEffect(() => {
        const ScrollTriggerSettings = {
            trigger: "#main",
            start: "top 25%",
            toggleActions: "play reverse play reverse",
        };
        const leftValues = [-800, -900, -400];
        const rightValues = [800, 900, 400];
        const leftRotationValues = [-30, -20, -35];
        const rightRotationValues = [30, 20, 35];
        const yValues = [100, -150, -400];

        gsap.utils.toArray("#row").forEach((row, index) => {
            const cardLeft = (row as HTMLElement).querySelector("#cardLeft");
            gsap.to(cardLeft, {
                x: leftValues[index],
                rotation: leftRotationValues[index],
                y: yValues[index],
                scrollTrigger: {
                    trigger: "#main",
                    start: "top center",
                    end: "150% bottom",
                    scrub: true,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        if (cardLeft) {
                            (cardLeft as HTMLElement).style.transform = `translateX(${leftValues[index] * progress}px) rotate(${leftRotationValues[index] * progress}deg) translateY(${yValues[index] * progress}px)`;
                        }
                        if (cardRight) {
                            (cardRight as HTMLElement).style.transform = `translateX(${rightValues[index] * progress}px) rotate(${rightRotationValues[index] * progress}deg) translateY(${yValues[index] * progress}px)`;
                        }

                    },
                },
            });
            const cardRight = (row as HTMLElement).querySelector("#cardRight");
        })

        gsap.to("#logo", {
            scale: 1,
            duration: 0.5,
            ease: "power1.out",
            scrollTrigger: ScrollTriggerSettings,
        })
        gsap.to("#linep", {
            y: 0,
            stagger: 0.3,

            duration: 1,
            ease: "power1.out",
            scrollTrigger: ScrollTriggerSettings,
        })
        gsap.to("#btn", {
            y: 0,
            opacity: 1,
            delay: 0.8,

            duration: 0.7,
            ease: "power1.out",
            scrollTrigger: ScrollTriggerSettings,
        })
        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
        }
    }, [])
    const generateRows = () => {
        const rows = [];
        for (let i = 1; i <= 3; i++) {
            rows.push(<div key={i} id='row' className="relative w-screen m-4 flex items-center justify-center gap-8">
                <div id="cardLeft" className='h-[300px] w-2/5 rounded-lg overflow-hidden  '>
                    <img src={`/f${2 * i - 1}.jpg`} alt='image' className='w-full h-full object-cover' ></img>
                </div>
                <div id='cardRight' className=' h-[300px] w-2/5 rounded-lg overflow-hidden  '>
                    <img src={`/f${2 * i}.jpg`} className='w-full h-full object-cover' ></img>
                </div>
            </div>);
        }
        return rows;
    }

    return (
        <ReactLenis root>
        <section id="main" className='hidden  xl:flex relative bg-black w-screen  justify-start mt-9 items-center h-[200vh] flex-col '>
        <div
			className="w-full mt-9 "
			>
			<Marquee baseVelocity={2}>
				<h1 className="text-white uppercase text-[80px] font-bold tracking-tight flex items-center justify-center">
					<span className="w-[40px] h-[40px] bg-[#8c8c8c] rounded-full mx-[20px]" />
					MASTER
					<span className="w-[40px] h-[40px] bg-[#8c8c8c] rounded-full mx-[20px]" />
					PROSPER
                    <span className="w-[40px] h-[40px] bg-[#8c8c8c] rounded-full mx-[20px]" />
					RISE <span className='w-[30px]'/> FASTER
				</h1>
			</Marquee>/
			</div>
            <div className='flex flex-col  p-5 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 justify-center items-center'>
                <div id='logo' className='w-[200px] overflow-hidden  h-[200px]  transform scale-0 '>
                    <img src='/logologo2.png' className='w-full h-full object-cover' alt='gaut'>
                    </img>
                </div>

                <div className='flex flex-col items-center justify-center mb-8 mx-8 '>
                    <div className='relative m-2 w-max h-[28px] clip-path-custom-polygon '>
                        <p id="linep" className='relative  text-white  text-xl transform translate-y-8'>Transforming knowledge into lasting success.</p>
                    </div>
                    <div className='relative m-2 w-max h-[28px] clip-path-custom-polygon '>
                        <p id="linep" className='relative text-white text-xl transform translate-y-8'>Bridging gaps with smart technology.</p>
                    </div>
                    <div className='relative m-2 w-max h-[28px] clip-path-custom-polygon '>
                        <p id="linep" className='relative text-white text-xl transform translate-y-8'>Innovate, learn, and grow together.</p>
                    </div>
                </div>
                <div id='btn' className='relative px-4 py-2 text-xl bg-none border-2 cursor-pointer border-white text-white hover:text-black hover:bg-white rounded-full opacity-0  outline-none transform translate-y-7 '>
                    <button className=''>Lets Work </button>
                </div>
            </div>
            {generateRows()}
        
            
        </section>
        </ReactLenis>
    )
}

// Removed the local useEffect function as it conflicts with the imported useEffect from React.
