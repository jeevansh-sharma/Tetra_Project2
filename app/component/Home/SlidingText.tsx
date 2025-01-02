"use client";



import { Marquee } from "@/animation";


import { ReactLenis } from '@studio-freight/react-lenis'


export default function SlidingText() { // Changed component name
	


	


	return (
		<ReactLenis root>
		<section
			className="w-full my-[100px]"
			id="projects">
			<Marquee baseVelocity={2}>
				<h1 className="text-[#202020] uppercase text-[100px] font-bold tracking-tight flex items-center justify-center">
					<span className="w-[40px] h-[40px] bg-[#8c8c8c] rounded-full mx-[20px]" />
					selected
					<span className="w-[40px] h-[40px] bg-[#8c8c8c] rounded-full mx-[20px]" />
					projects
				</h1>
			</Marquee>/
			</section>
			
		
		</ReactLenis>
	);
}
