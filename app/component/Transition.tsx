"use client";

import { useRouter } from "next/navigation";

import TextBorderAnimation from "@/components/animata/text/text-border-animation";
import { animatePageOut } from "./Animations";



export default function TransitionLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const router = useRouter();

  const handleClick = () => {
    animatePageOut(href, router);
  };

  return (
    <button
      className=" cursor-pointer"
      onClick={handleClick}
    >
        <TextBorderAnimation text= {label} className="text-sm text-white" />
     
    </button>
  );
}