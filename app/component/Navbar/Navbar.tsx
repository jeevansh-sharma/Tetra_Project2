import React, { useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide, scale, slide } from './anim';

import Curve from './Curve/Curve';
import Footer from './Footer/Footer';
import Link from 'next/link';
import TransitionLink from '../Transition';

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "About",
    href: "/about_us",
  },
  {
    title: "Contact",
    href: "/contact_us",
  },
]

export default function NavBar() {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className="h-screen bg-zinc-800 fixed right-0 top-0 text-white  z-[49]">
       <div className="box-border h-full p-[100px] flex flex-col justify-between">
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className="flex flex-col gap-3 text-6xl mt-2">
                    <div className="text-[rgb(153,153,153)] border-b border-[rgb(153,153,153)] uppercase text-[11px] mb-10">
                        <p>Menu</p>
                    </div>
                    {
                      navItems.map( (data, index) => {
                        return (
                          <motion.div key={index} className="relative flex items-center"onMouseEnter={() => {setSelectedIndicator(data.href)}} custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
                          <motion.div variants={scale} animate={selectedIndicator == data.href ? "open" : "closed"} className="w-[10px] h-[10px] rounded-full bg-[#F97316] left-[-30px] absolute"></motion.div>
                          <TransitionLink href={data.href} label={<span>{data.title}</span>}></TransitionLink>
                          {/* <Link href={data.href}>{data.title}</Link> */}
                        </motion.div>
                        )
                      })
                    }
            </div>
            <Footer />
        </div>
        <Curve />
    </motion.div>
  )
}