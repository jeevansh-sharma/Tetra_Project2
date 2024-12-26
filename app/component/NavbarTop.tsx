import TextBorderAnimation from "@/components/animata/text/text-border-animation";
import React from 'react'
import Link from 'next/link'  // Import Link from next/link

export function NavbarTop() {
    return (
       <div className='absolute top-9 inset-x-0 w-screen h-4 flex flex-row items-center justify-center text-center z-[4] bg-transparent gap-x-14'>
      
      {/* Logo with Link to homepage */}
      <div className='absolute bg-transparent left-12 z-[4]'>
        <Link href="/">
          <img src='/log2.png' className='object-cover h-16 w-24' />
        </Link>
      </div>

      {/* Navbar links with Next.js Link component */}
      <Link href="/services">
        <TextBorderAnimation text="Service" className="text-sm text-white" />
      </Link>
      <Link href="/portfolio">
        <TextBorderAnimation text="Portfolio" className="text-sm text-white" />
      </Link>
      <Link href="/about_us">
        <TextBorderAnimation text="About us" className="text-sm text-white" />
      </Link>
      <Link href="/our-team">
        <TextBorderAnimation text="Our Team" className="text-sm text-white" />
      </Link>
    </div>
    )
}