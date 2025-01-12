"use client";

import { useRouter } from "next/navigation";


import { animatePageOut } from "./Animations";



export default function TransitionLink({
  href,
  label,
}: {
  href: string;
  label:JSX.Element;
}) {
  const router = useRouter();

 const handleClick = () => {
  
    animatePageOut(href, router);
   
  };

  return (
    <button
      className="cursor-pointer"
      onClick={handleClick}
    >
      {label}
        
     
    </button>
  );
}