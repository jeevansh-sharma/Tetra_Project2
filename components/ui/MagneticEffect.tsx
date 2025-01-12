'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const SPRING_CONFIG = { damping: 50, stiffness: 500 };

type MagneticButtonType = {
  children: React.ReactNode;
  distance?: number;
};

function MagneticButton({ children, distance = 0.6 }: MagneticButtonType) {
  const [isHovered, setIsHovered] = useState(false);
  const [isCursorDevice, setIsCursorDevice] = useState(false); // Detect devices with cursors
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, SPRING_CONFIG);
  const springY = useSpring(y, SPRING_CONFIG);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)'); // Detect devices with precise pointer support (mouse/trackpad)

    const updateCursorDevice = () => setIsCursorDevice(mediaQuery.matches);

    // Initial check
    updateCursorDevice();

    // Listen for changes to the media query
    mediaQuery.addEventListener('change', updateCursorDevice);

    return () => {
      mediaQuery.removeEventListener('change', updateCursorDevice);
    };
  }, []);

  useEffect(() => {
    if (!isCursorDevice) return; // Skip for devices without a cursor

    const calculateDistance = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        if (isHovered) {
          x.set(distanceX * distance);
          y.set(distanceY * distance);
        } else {
          x.set(0);
          y.set(0);
        }
      }
    };

    document.addEventListener('mousemove', calculateDistance);

    return () => {
      document.removeEventListener('mousemove', calculateDistance);
    };
  }, [ref, isHovered, isCursorDevice]); // Only run effect if `isCursorDevice` is true

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        x: springX,
        y: springY,
      }}
    >
      {children}
    </motion.div>
  );
}

export default MagneticButton;

