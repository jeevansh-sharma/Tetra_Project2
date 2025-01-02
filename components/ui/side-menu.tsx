'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import MagneticButton from './MagneticEffect';


// Move open/close state to parent component if needed
export function SideMenuBtn()  {
  const [crossed, setCrossedState] = useState(false);

  return (
   
    <MagneticButton>
    <div
      className={`relative flex items-center justify-center w-20 h-20 hover:bg-[#F97316]    rounded-full ${
        crossed ? 'bg-[#F97316] ' : 'bg-gray-800'
      } `} onClick={() => setCrossedState((e) => !e)}
    >
        <MagneticButton>
      <button
        aria-expanded={crossed}
       
        className="flex aspect-square h-fit select-none flex-col items-center justify-center"
      >
        <motion.div
          style={{
            width: '25px',
            borderTop: '2px solid var(--white)',
            transformOrigin: 'center',
          }}
          initial={{ translateY: '-3px' }}
          animate={
            crossed
              ? { rotate: '45deg', translateY: '1px' }
              : { translateY: '-3px', rotate: '0deg' }
          }
          transition={{ bounce: 0, duration: 0.1 }}
        />
        <motion.div
          transition={{ bounce: 0, duration: 0.1 }}
          style={{
            width: '25px',
            borderTop: '2px solid var(--white)',
            transformOrigin: 'center',
          }}
          initial={{ translateY: '3px' }}
          animate={
            crossed
              ? { rotate: '-45deg', translateY: '-1px' }
              : { translateY: '3px', rotate: '0deg', scaleX: 1 }
          }
        />
      </button>
      </MagneticButton>
    </div>
    </MagneticButton>
    
  );
};
