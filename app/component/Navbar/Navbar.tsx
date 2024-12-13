import React, { useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from './anim';

import Curve from './Curve/Curve';
import Footer from './Footer/Footer';
import Link from 'next/link';

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export default function NavBar() {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className="h-screen bg-zinc-800 fixed right-0 top-0 text-white">
       <div className="box-border h-full p-[100px] flex flex-col justify-between">
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className="flex flex-col gap-3 text-6xl mt-20">
                    <div className="text-[rgb(153,153,153)] border-b border-[rgb(153,153,153)] uppercase text-[11px] mb-10">
                        <p>Menu</p>
                    </div>
                    {
                      navItems.map( (data, index) => {
                        return (
                            <div className='relative flex items-center'>
                              <Link href={data.href}>{data.title}</Link>
                            </div>
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