'use client'

import React, { ReactNode } from 'react'
import { ReactLenis } from '@studio-freight/react-lenis'
export const SmoothScrollWrapper = ({children}: {children: ReactNode}) => {
  return (
    <ReactLenis root options={{ lerp: 0.05}}>
        {children}
    </ReactLenis>
  )
}
