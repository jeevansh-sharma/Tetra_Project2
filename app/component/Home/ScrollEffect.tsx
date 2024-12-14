"use client";
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ScrollEffect(){
     
    useEffect(() => {
        const ScrollTriggerSettings={
            trigger: "#main",
            start: "top 25%",
            toggleActions: "play reverse play reverse",
        };
        
        
    }, [])
    const generateRows = () => {
          const rows = [];
          for (let i = 1; i <= 3; i++) {
            rows.push(<div key={i} className="relative w-screen m-4 flex justify-center gap-8">
                <div className='h-[360px] w-2/5 rounded-lg overflow-hidden  '>
                    <img src={`/${2*i-1}.png`} alt='image' className='w-full h-full object-cover' ></img>
                </div>
                <div className=' h-[360px] w-2/5 rounded-lg overflow-hidden  '>
                    <img src={`/${2*i}.png`} className='w-full h-full object-cover' ></img>
                </div>
            </div>);
          }
            return rows;
    }
       return(
        <section className='relative flex w-screen justify-center items-center h-[150vh] flex-col '>
          <div id="main" className='flex flex-col absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 items-center'>
            <div className='w-[150px] rounded-full overflow-hidden  h-[150px] border-2 border-white transform scale-0 '>
                <img src='./gaut.jpeg' className='w-full h-full object-cover' alt='gaut'>
                </img>
            </div>

            <div className='flex flex-col items-center justify-center m-8'>
                <div className='relative m-2 w-max h-[28px] clip-path-polygon '>
                    <p className='relative text-2xl transform translate-y-8'>Delve into coding with Gautam</p>
                </div>
                <div className='relative m-2 w-max h-[28px] clip-path-polygon '>
                    <p className='relative text-2xl transform translate-y-8'>Delve into coding with Gautam</p>
                </div>
                <div className='relative m-2 w-max h-[28px] clip-path-polygon '>
                    <p className='relative text-2xl transform translate-y-8'>Delve into coding with Gautam</p>
                </div>
            </div>
            <div className=''>
                <button>Click here</button>
            </div>
           {generateRows()}
        </div>
        </section>
        
       )
}

// Removed the local useEffect function as it conflicts with the imported useEffect from React.
