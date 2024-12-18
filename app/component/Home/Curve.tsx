import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Index() {
  const initialPath = `M0 0 Q${window.innerWidth / 2} 150 ${window.innerWidth} 0`;
  const targetPath = `M0 0 Q${window.innerWidth / 2} 0 ${window.innerWidth} 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 2, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 2, ease: [0.76, 0, 0.24, 1] },
    },
  };

  // Use Intersection Observer to track visibility
  const { ref, inView } = useInView({
    triggerOnce: false, // Set to true if you want the animation only once
    threshold: 0.1, // How much of the component should be visible to trigger
  });

  return (
    <div ref={ref} className="absolute top-0 z-10 w-screen h-[100px]">
      <svg className="w-screen h-[100px] fill-[#e1e1e1] stroke-none shadow-bottom">
        <motion.path
          variants={curve}
          initial="initial"
          animate={inView ? 'enter' : 'exit'}
        ></motion.path>
      </svg>
    </div>
  );
}
