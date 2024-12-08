'use client';
import { cn } from '@/lib/utils';
import { motion, Transition, Variants } from 'motion/react';
import React, { CSSProperties } from 'react';
import { FaArrowDownLong } from "react-icons/fa6";

type SpinningTextProps = {
  children: string;
  style?: CSSProperties;
  duration?: number;
  className?: string;
  reverse?: boolean;
  fontSize?: number;
  radius?: number;
  transition?: Transition;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
};

const BASE_TRANSITION = {
  repeat: Infinity,
  ease: 'linear',
};

const BASE_ITEM_VARIANTS = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
  },
};

export function SpinningText({
  children,
  duration = 10,
  style,
  className,
  reverse = false,
  fontSize = 1,
  radius = 10,
  transition,
  variants,
}: SpinningTextProps) {
  const letters = children.split('');
  const totalLetters = letters.length;

  const finalTransition = {
    ...BASE_TRANSITION,
    ...transition,
    duration: (transition as { duration?: number })?.duration ?? duration,
  };

  const containerVariants = {
    visible: { rotate: reverse ? -360 : 360 },
    ...variants?.container,
  };

  const itemVariants = {
    ...BASE_ITEM_VARIANTS,
    ...variants?.item,
  };

  const handleScrollDown = () => {
    window.scrollBy({
      top: 1000, // Adjust the value to control the scroll distance
      behavior: 'smooth', // Smooth scrolling effect
    });
  };

  return (
    <div className='relative'>
      <motion.div
        className={cn('relative', className)}
        style={{
          ...style,
        }}
        initial='hidden'
        animate='visible'
        variants={containerVariants}
        transition={finalTransition}
      >
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 border border-neutral-900  rounded-full"
          style={{
            width: '10ch',
            height: '10ch',
          }}
        ></div>
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-950 border border-orange-500 rounded-full"
          style={{
            width: '6ch',
            height: '6ch',
          }}
        ></div>

        {letters.map((letter, index) => (
          <motion.span
            aria-hidden='true'
            key={`${index}-${letter}`}
            variants={itemVariants}
            className='absolute left-1/2 top-1/2 inline-block'
            style={
              {
                '--index': index,
                '--total': totalLetters,
                '--font-size': fontSize,
                '--radius': radius,
                fontSize: `calc(var(--font-size, 2) * 1rem)`,
                transform: `
                  translate(-50%, -50%)
                  rotate(calc(360deg / var(--total) * var(--index)))
                  translateY(calc(var(--radius, 5) * -1ch))
                `,
                transformOrigin: 'center',
              } as React.CSSProperties
            }
          >
            {letter}
          </motion.span>
        ))}
        <span className='sr-only'>{children}</span>
      </motion.div>
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        onClick={handleScrollDown}
      >
        <FaArrowDownLong className='text-orange-500' size={20} />
      </div>
    </div>
  );
}
