"use client";

import { useEffect } from "react";
import { animatePageIn } from "./component/Animations";



export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div>
      <div
        id="transition-element"
        className="w-screen h-screen bg-black z-[50] fixed top-0 left-0"
      ></div>
      {children}
    </div>
  );
}