import TextBorderAnimation from "@/components/animata/text/text-border-animation";
import React from 'react'
// Import Link from next/link
import TransitionLink from "./Transition";

export function NavbarTop() {
  const label1= <TextBorderAnimation text="Home" className="text-sm  text-white" />
  const label2= <TextBorderAnimation text="Service" className="text-sm  text-white" />
  const label3= <TextBorderAnimation text="Portfolio" className="text-sm  text-white" />
  const label4= <TextBorderAnimation text="About us" className="text-sm  text-white" />
  const label5= <TextBorderAnimation text="Our Team" className="text-sm  text-white" />
    return (
       <div className='hidden md:flex absolute top-9 lg:top-14  xl:top-9 inset-x-0 w-screen h-4 flex-row items-center justify-center text-center z-[4] bg-transparent md:gap-x-10 lg:gap-x-14'>
      
      {/* Logo with Link to homepage */}
      <div className='absolute bg-transparent md:left-1 lg:left-12 mt-1 z-[4]'>
     
          <img src='/logologo2.png'  className='object-cover h-32 md:ml-0 lg:ml-9 ' />
       
      </div>

      {/* Navbar links with Next.js Link component */}
     
      <TransitionLink href="/" label={label1}/>
      <TransitionLink href="/services" label={label2}/>
      
      <TransitionLink href="/portfolio" label={label3}/>
      <TransitionLink href="/about_us" label={label4}/>
      <TransitionLink href="/our_team" label={label5}/>
      
      
      
      
    </div>
    )
}