"use client";

import { useRouter } from "next/navigation";

import TextBorderAnimation from "@/components/animata/text/text-border-animation";
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
    console.log("handleClick",href," ", router);
    animatePageOut(href, router);
    console.log("handleClick2");
  };

  return (
    <button
      className=" cursor-pointer"
      onClick={handleClick}
    >
      {label}
        
     
    </button>
  );
}