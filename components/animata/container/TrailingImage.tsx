import React, { createRef, forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { motion, useAnimation } from "framer-motion";


import { getDistance, lerp } from "@/lib/utils";
import { useMousePosition } from "@/components/hook";
import { Outfit } from 'next/font/google'
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})
interface AnimatedImageRef {
  show: ({
    x,
    y,
    newX,
    newY,
    zIndex,
  }: {
    x: number;
    y: number;
    zIndex: number;
    newX: number;
    newY: number;
  }) => void;
  isActive: () => boolean;
}

const AnimatedImage = forwardRef<AnimatedImageRef, { src: string }>(({ src }, ref) => {
  const controls = useAnimation();
  const isRunning = useRef(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useImperativeHandle(ref, () => ({
    isActive: () => isRunning.current,
    show: async ({
      x,
      y,
      newX,
      newY,
      zIndex,
    }: {
      x: number;
      y: number;
      zIndex: number;
      newX: number;
      newY: number;
    }) => {
      const rect = imgRef.current?.getBoundingClientRect();
      if (!rect) {
        return;
      }

      const center = (posX: number, posY: number) => {
        const coords = {
          x: posX - rect.width / 2,
          y: posY - rect.height / 2,
        };
        return `translate(${coords.x}px, ${coords.y}px)`;
      };

      controls.stop();

      controls.set({
        opacity: isRunning.current ? 1 : 0.75,
        zIndex,
        transform: `${center(x, y)} scale(1)`,
        transition: { ease: "circOut" },
      });

      isRunning.current = true;

      await controls.start({
        opacity: 1,
        transform: `${center(newX, newY)} scale(1)`,
        transition: { duration: 0.9, ease: "circOut" },
      });

      await Promise.all([
        controls.start({
          transition: { duration: 1, ease: "easeInOut" },
          transform: `${center(newX, newY)} scale(0.1)`,
        }),
        controls.start({
          opacity: 0,
          transition: { duration: 1.1, ease: "easeOut" },
        }),
      ]);

      isRunning.current = false;
    },
  }));

  return (
    <motion.img
      ref={imgRef}
      initial={{ opacity: 0, scale: 1 }}
      animate={controls}
      src={src}
      alt="trail element"
      className="absolute h-56 w-44 object-cover"
    />
  );
});

AnimatedImage.displayName = "AnimatedImage";

const images = [
  "of1.jpg",
    "of2.jpg",
    "of3.jpg",
    "of4.jpg",
    "of5.jpg"
];

const TrailingImage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Create a maximum of 20 trails for a smoother experience
  const trailsRef = useRef(
    Array.from({ length: Math.max(20, images.length) }, createRef<AnimatedImageRef>),
  );

  const lastPosition = useRef({ x: 0, y: 0 });
  const cachedPosition = useRef({ x: 0, y: 0 });
  const imageIndex = useRef(0);
  const zIndex = useRef(1);

  const update = useCallback((cursor: { x: number; y: number }) => {
    const activeRefCount = trailsRef.current.filter((ref) => ref.current?.isActive()).length;
    if (activeRefCount === 0) {
      // Reset zIndex since there are no active references
      // This prevents zIndex from incrementing indefinitely
      zIndex.current = 1;
    }

    const distance = getDistance(
      cursor.x,
      cursor.y,
      lastPosition.current.x,
      lastPosition.current.y,
    );
    const threshold = 50;

    const newCachePosition = {
      x: lerp(cachedPosition.current.x || cursor.x, cursor.x, 0.1),
      y: lerp(cachedPosition.current.y || cursor.y, cursor.y, 0.1),
    };
    cachedPosition.current = newCachePosition;

    if (distance > threshold) {
      imageIndex.current = (imageIndex.current + 1) % trailsRef.current.length;
      zIndex.current = zIndex.current + 1;
      lastPosition.current = cursor;
      trailsRef.current[imageIndex.current].current?.show?.({
        x: newCachePosition.x,
        y: newCachePosition.y,
        zIndex: zIndex.current,
        newX: cursor.x,
        newY: cursor.y,
      });
    }
  }, []);

  useMousePosition(containerRef, update);

  return (
    <div ref={containerRef} className="storybook-fix relative flex min-h-96 w-full">
      {trailsRef.current.map((ref, index) => (
        <AnimatedImage key={index} ref={ref} src={images[index % images.length]} />
      ))}
      <div className='flex flex-col px-16  '>
    <h1 className={`${outfit.className}font-semibold text-7xl text-center`}>Discover Our <span className='font-extralight' >Studio</span></h1>
    <div className="flex flex-row justify-center mt-3">
    <div className="h-[0.35rem] w-1/6   bg-[#F97316]"></div>
    </div>
    <p className={`${outfit.className} text-justify  text-lg text-gray-500 mt-12`}>At Tetra Edtech, our mission is to empower educational institutions with cutting-edge solutions designed to elevate the quality of education and drive institutional excellence. Through comprehensive services such as digital marketing, event management, and accreditation support, we ensure that institutions are equipped to thrive in an ever-evolving educational landscape.</p>
    

<p className={`${outfit.className} text-justify text-lg text-gray-500 mt-12`}>
  We take pride in offering consultancy services tailored to the unique needs of educational institutions. From curriculum development to strategic planning, our experts provide actionable insights and innovative solutions to help institutions excel. With a focus on accreditation and compliance, we guide our clients through complex processes, ensuring they achieve and maintain the highest standards of education.
</p>
<p className={`${outfit.className} text-justify text-lg text-gray-500 mt-12`}>
  At Tetra Edtech, our approach is rooted in collaboration and innovation. By leveraging cutting-edge technologies, such as artificial intelligence and data analytics, we empower institutions to make informed decisions that drive impactful results. Whether it’s through enhancing operational efficiency or fostering student engagement, our goal is to create transformative experiences that redefine the future of education.
</p>
  </div>
    </div>
  );
};

export default TrailingImage;
